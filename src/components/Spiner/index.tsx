import { SpinerContainer } from "./styled";

export function Spiner() {
    return (
        <SpinerContainer>
            <div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </SpinerContainer>
    )
}