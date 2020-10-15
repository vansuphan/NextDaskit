// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default async (req, res) => {
//     res.statusCode = 200;
//     res.json({ name: "Client 1", id: res.param.id });
// };

import store from '../store'

const METHOD = store.METHOD;
const dataUser = store.DATA_USERS

export default async (req, res) =>{
  console.log("tesst", METHOD);
  console.log("data", dataUser);
  switch (req.method){
    case METHOD.GET:
      res.status(200).json({name: `test get` });
      break;
    case METHOD.POST:
      res.status(200).json({name: `test post` });
      break;
      case METHOD.PUT:
      res.status(200).json({name: `test put` });
      break;
    case METHOD.DELETE:
      res.status(200).json({name: `test delete` });
      break;
      default: 
        res.status(500).json({name : 2323})
  }
}