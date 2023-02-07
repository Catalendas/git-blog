import { PostContainer } from "./styled";
import { PostHeader } from "./components/PostHeader";
import { useCallback, useContext, useEffect, useState } from "react";
import { GitBlogContex, IPostProps } from "../../context/gitBlog";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { PostContent } from "./components/PostContent";

const username = import.meta.env.VITE_GIT_URL_AVATAR
const repo = import.meta.env.VITE_REPO

export function Post() {

    const [postDetails, setPostDetails] = useState<IPostProps>({} as IPostProps)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    const getPostDetails = useCallback( async () => {
        try {
            const response = await api.get(`/repos/${username}/${repo}/issues/${id}`)
            setPostDetails(response.data)
            setLoading(true)
        } finally { 
            setLoading(false)
        }
    }, [postDetails])

    useEffect(() => {
        getPostDetails()
    }, [])

    return (
        <PostContainer className="container">
            <PostHeader loading={loading} post={postDetails}/>
            {!loading && <PostContent content={postDetails.body}/>}
        </PostContainer>
    )
}