import { SearchInputComponent, SearchInputContainer, SearchInputTitle } from "./styled";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react";
import { GitBlogContex } from "../../context/gitBlog";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchInputProps = z.infer<typeof searchFormSchema>

export function SearchInput() {
    const {getPost, post} = useContext(GitBlogContex)

    const {register, handleSubmit} = useForm<SearchInputProps>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchPosts(data: SearchInputProps) {
        await getPost(data.query)
    }

    return (
        <SearchInputContainer className="container" onSubmit={handleSubmit(handleSearchPosts)}>
                <SearchInputTitle>
                    <strong>Publicações</strong>
                    <span>{post.length} publicações</span>
                </SearchInputTitle>
                <SearchInputComponent placeholder="Buscar conteúdo" {...register("query")}/>
        </SearchInputContainer>
    )
}