import { useCallback, useContext, useEffect, useState } from "react";
import { GitBlogContex } from "../../context/gitBlog";
import { api } from "../../lib/axios";
import { Spiner } from "../Spiner";
import { PostComponent } from "./PostComponent";
import { PostContainer } from "./styled";

export function Post() {

    const { post, loading } = useContext(GitBlogContex)

    return (
        <PostContainer className="container">
           {loading ? <Spiner /> : (
                <>
                    {post.map((post => (
                        <PostComponent key={post.number} post={post} />
                    )))}
                </>
           )}
        </PostContainer>
    )
}