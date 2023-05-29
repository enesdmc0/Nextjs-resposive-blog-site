"use client"
import React from 'react';
import CategoryItem from "@/components/CategoryItem";
import {useSearchParams} from "next/navigation";

const Categories = () => {
    const data = [
        {text: "all-topics", value: "ALL TOPICS"},
        {text: "animation", value: "ANIMATION"},
        {text: "branding", value: "BRANDING"},
        {text: "business", value: "BUSINESS"},
        {text: "case-study", value: "CASE STUDY"},
        {text: "illustration", value: "ILLUSTRATION"},
        {text: "processes and tools", value: "PROCESSES AND TOOLS"},
        {text: "ui/ux", value: "UI/UX"},
     ]
    const params = useSearchParams()
    const category = params?.get("category")
    return (
        <div className="px-3">
            <div className="grid grid-cols-2  lg:flex flex-col lg:gap-12 lg:flex-row items-center gap-7">
                {
                    data.map((item: any) => (
                        <CategoryItem key={item.text} item={item} selected={category === item.text} />
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;
