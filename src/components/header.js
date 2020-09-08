import React from "react"
import "./header.css"

export default function Header({ children }) {
    return (
        <h1>{children}</h1>
    )
}