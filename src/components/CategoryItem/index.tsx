"use client"
import React, {useCallback} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";


interface CategoryItemProps {
    item: {
        text: string;
        value: string;
    }
    selected: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({item, selected}) => {
    const router = useRouter();
    const searchParams = useSearchParams()

    return (
        <div className={`font-bold cursor-pointer hover:text-purple-900 transition ${selected ? "text-purple-950 border-b-2 border-b-purple-950" : "text-textColor" } `}>
           <Link href={{
               pathname: "/",
               query: {
                   category: `${item.text}`
               }
           }}>
               {item.value}
           </Link>
        </div>
    );
};

export default CategoryItem;
