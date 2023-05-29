import React from 'react';
import DetailContainer from "@/app/[id]/DetailContainer";
import getById from "@/actions/getById"
interface IParams {
    id?: string
}

const PostDetail = async ({params}: {params: IParams}) => {
    const post = await getById(params)

    return (
        <DetailContainer
            data={post}
        />
    );
};

export default PostDetail;
