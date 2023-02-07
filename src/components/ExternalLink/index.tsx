import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps, ReactNode} from "react";
import { ExternalLinkContainer } from "./styled";

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
    text: string
    icon?: ReactNode
    variant?: "iconLeft"
}

export function ExternalLink({text, icon, ...rest}: ExternalLinkProps) {
    return (
        <ExternalLinkContainer {...rest}>
            {text}
            {icon ?? <FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
        </ExternalLinkContainer>
    )
}