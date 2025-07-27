import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client/extension";

const client = new PrismaClient()


export async function POST(req: NextRequest){

    const body =  await req.json()
    console.log(body)

    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    return Response.json({
        message: "Welcome!"
    })
}

