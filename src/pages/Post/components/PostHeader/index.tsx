import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { IPostProps } from "../../../../context/gitBlog";
import { PostHeaderContainer } from "./styled";
import { RelativeFormatedDate } from "../../../../utils/dateFormated";
import { Spiner } from "../../../../components/Spiner";

interface PostHeaderProps {
    post: IPostProps
    loading: boolean
}

export function PostHeader({post, loading}: PostHeaderProps) {

    const dateEdited = RelativeFormatedDate(post.created_at)

    const navigate = useNavigate()
    function goBack() {
        navigate(-1)
    }

    return(
        <PostHeaderContainer>
           {loading ? (
            <Spiner />
           ) : (
            <>
                 <header>
                    <ExternalLink text="Voltar" as="button" variant="iconLeft" onClick={goBack} icon={<FontAwesomeIcon icon={faChevronLeft}/>}/>
                    <ExternalLink text="Ver no github" href={post.html_url} targt="_blank"/>
                </header>

                <h1>{post.title}</h1>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>{}</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <span>{dateEdited}</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faComment} />
                        <span>{post.comments} Comentários</span>
                    </li>
                </ul>
            </>
           )}
        </PostHeaderContainer>
    )
}