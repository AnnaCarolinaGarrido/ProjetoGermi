import React from "react"
import {BlueButton, WhiteButton, DisabledButton} from "./Button.style"

export function Button(props) {
    return(
        <>
            {props.blue && <BlueButton {...props}>{props.text}</BlueButton>}
            {props.disabled && <DisabledButton {...props}>{props.text}</DisabledButton>}
            {!props.blue && !props.disabled && <WhiteButton {...props}>{props.text}</WhiteButton>}
        </>
    )
}