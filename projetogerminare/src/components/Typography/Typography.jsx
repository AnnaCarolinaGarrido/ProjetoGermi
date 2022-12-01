import React, { Children } from "react"
import {StyledLink, StyledTitle, MiniText, SmallText, MediumText, LargeText} from "./Typography.style"

export function Typography(props) {
    return(
        <>
            {props.type === 'title' && <StyledTitle {...props}>{props.text}</StyledTitle>}
            {props.type === 'mm' && <MiniText {...props}>{props.text}</MiniText>}
            {props.type === 'sm' && <SmallText {...props}>{props.text}</SmallText>}
            {props.type === 'md' && <MediumText {...props}>{props.text}</MediumText>}
            {props.type === 'lg' && <LargeText {...props}>{props.text}</LargeText>}
        </>
    )
}