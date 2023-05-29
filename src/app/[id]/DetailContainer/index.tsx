import React from 'react';
import Image from "next/image";

interface DetailContainerProps {
    data: {
        id: string;
        author: string;
        title: string;
        description: string;
        category: string;
        read: boolean;
        createdAt: Date;
        image: string
    } | null
}


const DetailContainer: React.FC<DetailContainerProps> = ({data}) => {

    return (
        <div className="h-screen w-screen fixed bg-cover bg-center bg-no-repeat overflow-y-auto overflow-x-hidden bg-detail">
            <div className="flex flex-col gap-8 bg-col1 p-10">
                <div className="text-purple-900 font-bold text-3xl ">{data?.category}</div>
                <div className="font-bold text-2xl text-neutral-800 md:w-2/3 w-full">{data?.title}</div>
                <div className="font-bold text-neutral-500">{data?.author}</div>
                <div className="relative h-96">
                    {data && <Image className="object-contain" fill src={data?.image} alt={data?.id}/>}
                </div>
            </div>
            <div className="w-full h-4/5"></div>
           <div className="bg-col1 pb-10">
               <div className="w-full md:w-2/3 px-10 md:px-0 mx-auto text-xl font-bold text-neutral-500 pt-10 ">{data?.description}</div>
           </div>
        </div>
    );
};

export default DetailContainer;
