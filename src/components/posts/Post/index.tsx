"use client"
import React from 'react';
import Link from "next/link";
import Image from "next/image";

interface PostProps {
    data: {
        id: string;
        author: string;
        title: string;
        description: string;
        category: string;
        read: boolean;
        createdAt: string;
        image: string
    },
    scale: boolean;

}

const Post: React.FC<PostProps> = ({data, scale}) => {
    return (
            <div className="col-span-1 cursor-pointer group border-[1px] rounded-xl overflow-hidden">
                <Link href={`/${data.id}`}>
                        <div className="relative aspect-square">
                            <Image className={`${scale && "group-hover:scale-110"} object-cover transition`} fill src={data.image} alt={data.title}/>
                        </div>
                    <div className="flex flex-col gap-3 p-3">
                        <div className="font-bold text-neutral-800">{data.title}</div>
                        <div className="text-xs text-zinc-500">{data.createdAt}</div>
                        <div className="text-purple-900 font-medium">view these resources</div>
                    </div>
                </Link>
            </div>
    );
};

export default Post;
