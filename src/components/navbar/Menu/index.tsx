"use client"
import React from 'react';
import Link from "next/link";
import {AiOutlineSearch} from "react-icons/ai";
import usePanelModal from "@/hooks/usePanelModal";

const Menu = () => {
    const panelModal = usePanelModal()
    return (
        <div className="flex flex-row items-center justify-center text-textColor font-bold sm:gap-8 gap-2">
            <div className="cursor-pointer" onClick={panelModal.onOpen}><AiOutlineSearch size={23}/></div>
            <Link className="sm:hidden" href="">Category</Link>
            <Link className="hidden sm:inline" href="">Tags</Link>
            <Link className="hidden sm:inline" href="">Archives</Link>
            <Link href="">Books</Link>
            <button className="hidden sm:inline border border-textColor rounded-full px-10 py-3 hover:bg-textColor hover:text-col1 transition duration-300">Contact Us</button>
        </div>
    );
};

export default Menu;
