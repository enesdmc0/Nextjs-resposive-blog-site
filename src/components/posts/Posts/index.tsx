"use client"
import React, {useEffect, useState} from 'react';
import Post from "@/components/posts/Post";
import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";


interface PostsProps {
    posts: {
        id: string;
        author: string;
        title: string;
        description: string;
        category: string;
        read: boolean;
        createdAt: string;
        image: string
    }[]
    cat?: string | undefined | null
}

const Posts: React.FC<PostsProps> =  ({posts, cat}) => {
    const [filterPosts, setFilterPosts] = useState(posts);

   useEffect(() => {
       if (cat === "all-topics" || !cat) {
           return setFilterPosts(posts)
       }
       const filtered = () => {
           const filter = posts.filter(item => item.category === cat)
           setFilterPosts(filter)}
       filtered()
   }, [cat, posts])
    console.log(cat, posts)
    if (posts.length === 0) {
        return (
            <EmptyState title="dwdw" subtitle="eedewd"/>
        )
    }

    return (
        <ClientOnly>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {
                    filterPosts?.map((item: any) => (
                        <Post scale={true} key={item.id} data={item}/>
                    ))
                }
            </div>
        </ClientOnly>
    );
};

export default Posts;
