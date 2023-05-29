"use client"
import React, {useState, useEffect} from 'react';
import {GiCancel} from "react-icons/gi";
import usePanelModal from "@/hooks/usePanelModal";
import getPosts from "@/actions/getPosts";
import Post from "@/components/posts/Post";
import SearchPost from "@/components/SearchPost";

const Panel =  () => {
    const data = ["ux/ui", "product design", "motion design", "case study", "web design", "logo design"]
    const panelModal = usePanelModal();
    const [searchValue, setSearchValue] = useState("");
    const [showModal, setShowModal] = useState(panelModal.isOpen);

    useEffect(() => {
        setShowModal(panelModal.isOpen)
    }, [panelModal.isOpen])

    return (
        <div className={`flex fixed bg-white overflow-x-hidden overflow-y-auto transition duration-700 inset-0 z-50 p-8 ${showModal ? "translate-x-0" : "translate-x-full"} ${showModal ? "opacity-100" : "opacity-0"} `}>
            <button onClick={panelModal.onClose} className="absolute right-20 text-neutral-500 cursor-pointer hover:opacity-70 transition"><GiCancel size={30} /></button>
            <div className="w-full relative top-20  flex flex-col gap-20">
               <div className="flex flex-col gap-5">
                   <input
                       type="text"
                       value={searchValue}
                       onChange={e => setSearchValue(e.target.value)}
                       placeholder="Type the search"
                       className="outline:none focus:outline-none border-l-2 border-l-purple-900 font-medium bg-transparent
                      placeholder:text-3xl sm:placeholder:text-5xl p-3 w-full text-3xl sm:text-5xl text-neutral-500"
                   />
                   <div className="grid grid-cols-2 sm:flex gap-4 pr-20">
                       {
                           data?.map((item: any) => (
                               <div onClick={() => setSearchValue(item)}
                                    className="p-3 border border-textColor hover:rounded-xl rounded-full py-2 flex items-center justify-center lowercase text-xs cursor-pointer text-neutral-600 transition duration-1000" key={item}>{item}</div>
                           ))
                       }
                   </div>
               </div>
                <SearchPost search={searchValue}/>
            </div>
        </div>
    );
};

export default Panel;
