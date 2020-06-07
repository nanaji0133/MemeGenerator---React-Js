import React, { Component } from "react";


class Header extends Component
{
    render ()
    {
        return (
            <div className="header">
                <img src={ require("../assests/images/trollface.jpeg") }
                    alt="trollface" />
                <p>Meme Generator</p>
            </div>
        );
    }
}

export default Header;