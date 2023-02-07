import { createContext, ReactNode, useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../lib/axios"

const username = import.meta.env.VITE_GIT_URL_AVATAR
const repo = import.meta.env.VITE_REPO

export interface IPostProps {
    title: string
    body: string
    created_at:string
    number: string
    html_url: string
    comments: string
    user: { login: string}
}

interface GitBlogType {
    getPost: (query: string) => Promise<void>
    post: IPostProps[]
    loading: boolean
}

export const GitBlogContex = createContext({} as GitBlogType)

interface GitBlogInterface {
    children: ReactNode
}

export function GitBlogProvider({children}: GitBlogInterface) {

    const [post, setPost] = useState<IPostProps[]>([])
    
    
    const [loading, setLoding] = useState(false)

    const getPost = useCallback(
        async (query: string = "") => {
            try {
                setLoding(true)
                const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repo}`)
                setPost(response.data.items)
            } finally {
                setLoding(false)
            }
        }, [post]
    )

    useEffect(() => {
        getPost()
    }, [])


    return (
        <GitBlogContex.Provider value={{getPost, post, loading}}>
            {children}
        </GitBlogContex.Provider>
    )
}