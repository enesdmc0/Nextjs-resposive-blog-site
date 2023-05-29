import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function POST(request: Request){
    const body = await request.json();

    const {author, title, description, category, read, image,} = body;

    Object.keys(body).forEach((value: any) => {
        if (!body[value]){
            NextResponse.error()
        }
    })

    const post = await prisma.posts.create({
        data: {author, title, description, category, read, image}
    })

    return NextResponse.json(post)

}

export async function GET(request: Request) {
    const posts = await prisma.posts.findMany()
    return NextResponse.json(posts)
}