import React from "react";
import log from "./meme_pic.png"
const Header = () => {
    return (
        <header className="header">
            <img 
                src={log} 
                className="header--image"
            />
            <h2 className="header--title">Make your memes</h2>
        </header>
    )
}
export default Header