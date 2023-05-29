import Container from "@/components/Container";
import CreateOurBlog from "../components/CreateOurBlog";
import Categories from "@/components/Categories";
import React from "react";
import getPosts from "@/actions/getPosts";
import Posts from "@/components/posts/Posts";
import ClientOnly from "@/components/ClientOnly";

interface HomePageParams {
    searchParams: URLSearchParams
}

const Home = async ({searchParams}: HomePageParams) => {
    const params = new URLSearchParams(searchParams)
    const posts = await getPosts()
    const cat = params.get("category" || "")

    return (
        <ClientOnly>
            <Container>
                <div className="pt-32 flex flex-col gap-8">
                    <CreateOurBlog/>
                    <Categories/>
                    <Posts cat={cat} posts={posts}/>
                </div>
            </Container>
        </ClientOnly>
    )
}

export default Home