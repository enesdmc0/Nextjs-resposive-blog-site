"use client"
import React, {ChangeEvent, useState, useEffect} from 'react';
import axios from "axios";
import usePostModal from "../../../hooks/usePostModal";
import {GiCancel} from "react-icons/gi";
import {useRouter} from "next/navigation";


const Post = () => {
    const postModal = usePostModal();
    const router = useRouter()
    const [showModal, setShowModal] = useState(postModal.isOpen);
    const [post, setPost] = useState({
        author: "",
        title: "",
        description: "",
        category: "",
        image: ""
    })


    useEffect(() => {
        setShowModal(postModal.isOpen)
    }, [postModal.isOpen])

    const handleChange = (e: ChangeEvent<any>) => {
        const {name, value} = e.target;
        setPost(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await axios.post("/api/post", {
                author: post.author,
                title: post.title,
                description: post.description,
                image: post.image,
                category: post.category,
                read: false
            })
            router.refresh();
            setPost({
                author: "",
                title: "",
                description: "",
                category: "",
                image: ""
            })
            postModal.onClose()
        }catch(error: any) {
            throw new Error("post oluşturulmadı")
        }
    }
    return (
        <div className={`flex fixed bg-white overflow-x-hidden overflow-y-auto transition duration-700 inset-0 z-50 ${showModal ? "translate-x-0" : "translate-x-full"} ${showModal ? "opacity-100" : "opacity-0"} `}>
            <button onClick={postModal.onClose} className="z-50 absolute right-5 sm:right-20 top-10 text-neutral-500 cursor-pointer hover:opacity-70 transition"><GiCancel size={30} /></button>
            <div className="w-full relative top-20 flex flex-col gap-8 items-center justify-center pt-20">
                <div className="text-purple-900 font-medium text-2xl">create post</div>
                <form onSubmit={handleSubmit} className="w-full p-5 sm:w-3/5">
                    <div className="flex flex-col gap-8">
                        <input className="w-full p-4 text-neutral-500 outline-none focus:outline-none font-bold border-b border-b-purple-950" name="author" onChange={handleChange} value={post.author} type="text" placeholder="author"/>
                        <input className="w-full p-4 text-neutral-500 outline-none focus:outline-none font-bold border-b border-b-purple-950" name="title" onChange={handleChange} value={post.title} type="text" placeholder="title"/>
                        <textarea className="w-full rounded-md p-4 text-neutral-500 outline-none focus:outline-none font-bold border border-purple-950" rows={10} name="description" onChange={handleChange} placeholder="description"/>
                        <select name="category" value={post.category} onChange={handleChange}  className="w-full p-4 text-neutral-500 outline-none focus:outline-none font-bold border-b border-b-purple-950 bg-white">
                            <option value="animation">Animation</option>
                            <option value="branding">Branding</option>
                            <option value="business">Business</option>
                            <option value="case-study">Case Study</option>
                            <option value="illustration">Illustration</option>
                            <option value="processes-and-tools">Processes and Tools</option>
                            <option value="ui/ux">UI/UX</option>
                        </select>
                        <input className="w-full p-4 text-neutral-500 outline-none focus:outline-none font-bold border-b border-b-purple-950" name="image" onChange={handleChange} value={post.image} type="text" placeholder="image"/>
                        <button className="p-3 text-lg transition hover:bg-neutral-300 text-white font-bold bg-neutral-400 rounded-md">create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Post;
