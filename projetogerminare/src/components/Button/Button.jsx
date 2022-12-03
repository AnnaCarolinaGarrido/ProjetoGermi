import React from "react"
import {BlueButton, WhiteButton, DisabledButton} from "./Button.style"

export function Button(props) {
    return(
        <>
            {props.blue && <BlueButton {...props} hoverColor={props.hoverColor}>{props.text}</BlueButton>}
            {props.disabled && <DisabledButton {...props} hoverColor={props.hoverColor}>{props.text}</DisabledButton>}
            {!props.blue && !props.disabled && <WhiteButton {...props} hoverColor={props.hoverColor}>{props.text}</WhiteButton>}
        </>
    )
}