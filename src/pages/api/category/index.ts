// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const method  = req.method;
    if(method === "POST"){
        const body  = req.body;
        const createdCategory =await prisma.category.create({data : {name : body.category , userId  : body.userId  }})
        return res.status(200).json({ createdCategory });
    }
    else if(method === "DELETE"){
      const body = req.body;
      const deletedCategory =   await prisma.category.delete({where : {id : body.deletedId}})
      return res.status(200).json({deletedCategory})
    }

  res.status(200).json({ name: "John Doe" });
}
