import Axios from "axios";
import CONFIG from "web.config";
import qs from "querystring";
import { Router, useRouter } from "next/router";
import { el } from "date-fns/locale";
import { trackingFormData } from "@/helpers/helpers";

// import FormData from "form-data";
let FormData;
if (typeof window == "undefined") {
    FormData = require("form-data");
} else {
    FormData = window.FormData;
}

const ApiCall = async ({ path, method = "GET", data = {}, token, router, contentType = null }) => {

    let api;
    let axiosOption = { url: CONFIG.NEXT_PUBLIC_API_BASE_PATH + path, method: method };
    if (method.toUpperCase() == "GET") {
        if (token) {
            axiosOption.headers = {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Bearer " + token,
            };
        }

        try {
            api = await Axios(axiosOption);
        } catch (e) {
            api = e.response;
        }
    } else {
        var form = new FormData();

        let isUploadFile = false;
        for (const [key, value] of Object.entries(data)) {
            if (value && value.type) isUploadFile = true;
        }

        trackingFormData(form, data)

        if (!isUploadFile && contentType != 1) {
            axiosOption.headers = { "Content-Type": "application/x-www-form-urlencoded" };
            axiosOption.data = qs.stringify(data);
        } else {
            axiosOption.headers = { "Content-Type": "multipart/form-data" };
            axiosOption.maxBodyLength = Infinity;
            axiosOption.maxContentLength = Infinity;
            axiosOption.data = form;
        }
        if (token) axiosOption.headers["Authorization"] = "Bearer " + token;
        try {
            api = await Axios(axiosOption);
        } catch (e) {
            api = e.response;
        }
    }

    if(api && api.data && api.data.statusCode == 401 && router) {
        router.push("/admin/logout");
    }

    let errMsg = `[API_ERROR] "${axiosOption.method}" -> ${axiosOption.url}`;

    if (!api) {
        api = {
            // statusCode
            data: {
                status: false,
                message: `[API ERROR - ${method.toUpperCase()}] Can't connect with [${path}]. Please contact your IT service for support.`,
                data: {},
            },
        };
    }

    return api.data;
};

const ApiLogout = async ({ token }) => {
    // let router = useRouter();
    let api = await ApiCall({
        path: "/api/v1/auth/users/logout",
        token: token,
    });

    return api;
};

export { ApiLogout };

export default ApiCall;
