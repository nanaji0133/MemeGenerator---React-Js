import React, { Component } from "react";

class MemeGenerator extends Component
{
    constructor()
    {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    componentDidMount ()
    {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response =>
            {
                const { memes } = response.data;
                console.log(response, memes[0], response.data);
                this.setState({ allMemeImgs: memes });
            });
    }

    handleChange (event)
    {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleButton (event)
    {
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        this.setState({ randomImg: this.state.allMemeImgs[randNum].url });
        event.preventDefault();
    }
    render ()
    {
        return (
            <div className="memegenerator">
                <form className="form" onSubmit={ this.handleButton }>

                    <input type="text"
                        value={ this.state.topText }
                        placeholder="Top Text"
                        name="topText"
                        onChange={ this.handleChange }
                    />

                    <br />

                    <input type="text"
                        value={ this.state.bottomText }
                        placeholder="Bottom Text"
                        name="bottomText"
                        onChange={ this.handleChange }
                    />

                    <br />

                    <button>Gen</button>
                </form>

                <div className="meme">
                    <img src={ this.state.randomImg } alt="meme pic" />
                    <h1 className="top">{ this.state.topText }</h1>
                    <h1 className="bottom">{ this.state.bottomText }</h1>
                </div>

            </div>
        );
    }
}

export default MemeGenerator;