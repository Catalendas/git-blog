import ReactMarkdown from "react-markdown";
import { PostContainer } from "./style";

interface PostContentProps {
    content: string
}

export function PostContent({content}: PostContentProps) {
    return (
        <PostContainer>
            <ReactMarkdown children={content}/>
        </PostContainer>
    )
}