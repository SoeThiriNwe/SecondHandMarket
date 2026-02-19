// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

    const method = req.method;
    if(method === "POST"){
        const body = req.body;
        const foundUser = await prisma.userLogin.findUnique({ where : { email : body.email } });
        if(foundUser) {
          const relatedCategories = await prisma.category.findMany({ where : { userId : foundUser.id }})
          return  res.status(200).json({ sentLoginInfo : foundUser , relatedCategories });
        } else {
         const sentLoginInfo =  await prisma.userLogin.create({data : {name : body.name , email : body.email , password : body.password}})
         return  res.status(200).json({ sentLoginInfo , relatedCategories : [] });// { sentLoginInfo : sentLoginInfo }
        }
    }
    

  res.status(200).json({ name: "John Doe" });
}
