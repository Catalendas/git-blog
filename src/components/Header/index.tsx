import { HeaderContainer } from "./styled";
import Logo from "../../assets/Logo.svg"

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} alt="Logo" />
        </HeaderContainer>
    )
}