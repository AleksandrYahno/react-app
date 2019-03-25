import React from "react"

function Header() {
    const date = new  Date()
    const hours = date.getHours()
    const min = date.getMinutes()

    return (
        <header>
            <h3>header {date.getFullYear() + ' ' + hours + ':' + min}</h3>
        </header>
    )
}

export default Header