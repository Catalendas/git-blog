import { ProfileAbout, ProfileContainer, ProfileContent, ProfileTitle } from "./styled";
import {  faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {  useCallback, useEffect, useState } from "react";
import { ExternalLink } from "../ExternalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { api } from "../../lib/axios";
import { Spiner } from "../Spiner";

export interface GitBlog {
    name: string
    avatar_url: string 
    html_url: string
    login: string
    followers: string
    bio: string
    company: string
} 

const username = import.meta.env.VITE_GIT_URL_AVATAR

export function Profile(){

    // const { profiles } = useContext(GitBlogContex)
    // console.log(profiles)


    const [profiles, setProfiles] = useState<GitBlog>({} as GitBlog)
    const [loading, setLoading] = useState(true)

   const fatchProfile = useCallback(async () => {
        try {
            const response = await api.get(`users/${username}`)
            setLoading(true)
            setProfiles(response.data)
        } finally {
            setLoading(false)
        }
   }, [profiles]) 

    useEffect(() => {
        fatchProfile()
    }, [])


    return (
        <ProfileContainer className="container">
            {loading ? <Spiner /> : (
                <>
                    <img src={profiles.avatar_url}/>
                    <ProfileContent>
                        <ProfileTitle>
                            <h1>{profiles.name}</h1>
                            <ExternalLink  target="_blank" text="github" href={profiles.html_url}/>
                        </ProfileTitle>

                        <ProfileAbout>
                            <p>{profiles.bio}</p>
                        </ProfileAbout>

                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faGithub} />
                                <span>{profiles.login}</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBuilding} />
                                <span>{profiles.company}</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faUserGroup}/>
                                <span>{profiles.followers} seguidores</span>
                            </li>
                        </ul>
                        
                    </ProfileContent>
                </>
            )}
        </ProfileContainer>
    )
}