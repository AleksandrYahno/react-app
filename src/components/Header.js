import React from "react"

function Header() {
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();

    const style = {
        color: "#FF8C00",
        backgroundColor: "gray"
    };

    return (
        <header>
            <h3>header <span style={style}>{date.getFullYear() + ' ' + hours + ':' + min}</span></h3>
        </header>
    )
}

export default Header