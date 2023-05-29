import prisma from "@/libs/prismadb";

interface IParams {
    id?: string
}

export default async function getById(params: IParams){
    try {
        const {id} = params;
        const post = await prisma.posts.findUnique({
            where: {
                id: id
            }
        })
        return post
    }catch (error: any) {
        throw new Error(error)
    }
}