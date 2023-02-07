
import { IPostProps } from "../../../context/gitBlog";
import { RelativeFormatedDate } from "../../../utils/dateFormated";
import { PostComponentContainer, PostComponentText } from "./styled";

interface PostComponent {
    post: IPostProps
}

export function PostComponent({ post}: PostComponent) {
    const FormatedDateNow = RelativeFormatedDate(post.created_at)

    return (
        <PostComponentContainer to={`post/${post.number}`}>
            <div>
                <strong>{post.title}</strong>
                <span>{FormatedDateNow}</span>
            </div>
            <PostComponentText>
                <p>{post.body}</p>
            </PostComponentText>
        </PostComponentContainer>
    )
}