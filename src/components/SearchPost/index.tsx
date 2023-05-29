"use client"
import React, {useState, useEffect, useCallback} from 'react';
import Post from "@/components/posts/Post";
import EmptyState from "@/components/EmptyState";

interface SearchPostProps {
    search: string
}

const SearchPost: React.FC<SearchPostProps> = ({search}) => {
    const [posts, setPosts] = useState([])
    const [searchFilter, setSearchFilter] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("/api/post")
                const data = await res.json()
                setPosts(data)
            } catch
                (error: any) {
                throw new Error(error)
            }
        }
        fetchPosts()
    }, [])

    useEffect(() => {
        const filterPosts = () => {
            const filtered = posts.filter((item: any) => item?.title?.includes(search))
            setSearchFilter(filtered)
        }
        filterPosts()
    }, [search])
    
    if (posts.length === 0 || searchFilter.length === 0) {
        return (
            <EmptyState title="No exact matches" subtitle="Try changing or removing some of your filters."/>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {
                searchFilter?.map((item: any) => (
                    <Post scale={false} key={item.id} data={item}/>
                ))
            }
        </div>
    );
};

export default SearchPost;
