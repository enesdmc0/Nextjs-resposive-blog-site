"use client"
import React from 'react';
import usePostModal from "@/hooks/usePostModal";

const CreateOurBlog = () => {
    const postModal = usePostModal()
    return (
        <div onClick={postModal.onOpen} className="w-full bg-cover bg-fixed  bg-readOur h-[240px] rounded-3xl cursor-pointer">
               <div className="bg-black/40 h-full w-full pl-10 md:pl-20 rounded-3xl flex items-center">
                   <div className="text-white md:text-6xl text-3xl font-extrabold">Create Our Blog</div>
               </div>
        </div>
    );
};

export default CreateOurBlog;
