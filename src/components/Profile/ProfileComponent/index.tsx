import { ProfileComponentContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ProfileComponentProps {
    icon: IconProp
    text: string
}

export function ProfileComponent({icon, text}: ProfileComponentProps) {
    return(
        <ProfileComponentContainer>
            <FontAwesomeIcon icon={icon}/>
            <span>{text}</span>
        </ProfileComponentContainer>
    )
}