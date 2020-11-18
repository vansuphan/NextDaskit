// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import store from './store'
import {withIronSession} from "next-iron-session";
import CONFIG from "web.config";
const jwt = require('jsonwebtoken');

const METHOD = store.METHOD;
const dataUser = store.DATA_USERS;
let infoUser;

const checkLogin = async ({email,password})=>{
    const hasUser =  await dataUser.find((value) => value.email === email);
    if(hasUser){
       if(hasUser.password === password){
        infoUser = {...hasUser}
        return true
       }
       return false
    }
    return false
}

export default async (req, res) => {
    switch (req.method) {
        case METHOD.POST:
            if(await checkLogin(req.body) === true){
                const token = jwt.sign({_id: infoUser.id}, CONFIG.IRON_SESSION_SECRET);
                // jwt.sign({
                //     data: 'foobar'
                //   }, 'secret', { expiresIn: '1h' });
                // res.header('auth-token',token);
                // console.log(res.writeHead)
                // res.writeHead('auth-token',token);
                res.status(200).json({message: `Login success`, token : token});
            }else{
                res.status(422).json({message: `Login false`});
            }
            break;
        default:
            res.statusCode = 404;
            break;
    }
};