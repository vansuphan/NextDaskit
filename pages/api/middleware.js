const jwt = require('jsonwebtoken');
// export default function authMiddleWare (req, res, next){
//     const token = req.header('auth-token');
//     if(!token){
//         res.status(401).send('Access Denied');
//         return;
//     }
//     const result = jwt.verify(token,process.env.TOKEN_SECRET);
//     if(result == false){
//         res.status(401).send('Access Denied');
//         return;
//     }
//     res.status(400).send('Invalid Token');
//     next();
// }
const runMiddleware = (req, res, fn) => {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
}
export default {
    runMiddleware,
}