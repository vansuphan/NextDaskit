// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import store from './store'
import {withIronSession} from "next-iron-session";
import CONFIG from "web.config";

const METHOD = store.METHOD;
const dataUser = store.DATA_USERS;
// const checkLogin = async ({email,password})=>{
//     const hasUser =  await dataUser.find((value) => value.email === email);
//     if(hasUser){
//         console.log(hasUser);
//     }
//     return false
// }
// const handleLogin = async (req,res) => {
//     switch (req.method) {
//         case METHOD.POST:
//             console.log("req", req.body);
//             // req.session.set("user", {
//             //     id : Math.random(),
//             //     admin : true
//             // });
//             // res.statusCode = 200;
//             // res.json({status: "oke"});
//             // await req.session.save();
//             return res.status(200).json({name: `test get` });
//             break;
//         default:
//             res.statusCode = 404;
//             break;
//     }
// }
// export default withIronSession (
//     handleLogin,
//     {
//         cookieName: CONFIG.IRON_SESSION_NAME,
//         cookieOptions: {
//             secure: process.env.NODE_ENV === "production" ? true : false,
//         },
//         password: CONFIG.IRON_SESSION_SECRET,
        
//     }
// )

export default async (req, res) => {
    switch (req.method) {
        case METHOD.POST:
            // console.log("req", req.param)
            res.statusCode = 200;
            res.status(200).json({name: `test get` });
            break;
        default:
            res.statusCode = 404;
            break;
    }
    // if(req.body.email === "vansuphan88@gmail.com"){
    //     res.statusCode = 200;
    //     res.json({status: "oke"});
    // }else{
    //     res.statusCode = 300;
    //     res.json({status: "error"});
    // }
  };
  