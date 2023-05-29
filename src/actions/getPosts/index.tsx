import prisma from "../../libs/prismadb";

export default async function getPosts() {
    try {
        const posts = await prisma.posts.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })

        const safePosts = posts.map(post => ({
            ...post,
            createdAt: post.createdAt.toISOString()
        }))
        return safePosts
    }catch (error: any) {
        throw new Error(error)
    }
}