// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
    if(req.body.email === "vansuphan88@gmail.com"){
        res.statusCode = 200;
        res.json({status: "oke"});
    }else{
        res.statusCode = 300;
        res.json({status: "error"});
    }
  };
  