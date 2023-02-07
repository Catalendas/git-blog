import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { SearchInput } from "../../components/SearchInput";
import { HomeContainer } from "./styled";

export function Home() {
    return (
        <HomeContainer>
            <Profile />
            <SearchInput/>
            <Post/>
        </HomeContainer>
    )
}