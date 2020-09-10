// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
    res.statusCode = 200;
    res.json({ name: "Client 1", id: res.param.id });
  };
  