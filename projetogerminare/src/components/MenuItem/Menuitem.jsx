import { StyledContainer } from "./MenuItem.style"

export function MenuItem(props) {

    return (
        <StyledContainer href={props.route} {...props}>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </StyledContainer>
    )
}