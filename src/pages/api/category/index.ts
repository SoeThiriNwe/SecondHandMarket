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
    else if(method === "PUT"){
      const body = req.body;
      const updatedCategory = await prisma.category.update({where : {id : body.updateId} ,data : {name : body.updateName}})
      return res.status(200).json({updatedCategory})
    }

  res.status(200).json({ name: "John Doe" });
}
