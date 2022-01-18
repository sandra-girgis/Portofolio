import React from "react";
import './HeroSectionStyle.css';
import hero from './images/hero.jpeg';
export default class HeroSection extends React.Component {
    constructor() {
        console.log("hero")
        super();
    }

    render() {
        return (
            <>
                <div className="">
                    <div className="card bg-dark text-white">
                        <img
                            className="card-img"
                            src={hero}
                            alt="Card"
                        ></img>
                        <div className="card-img-overlay text-center col-3 ms-5 ">
                            <h1 className="card-title fs-1">Sandra Girgis</h1>
                            <p className="card-text fs-3">
                                Web Developer & Designer
                            </p>
                            <button className="btn btn-dark btn-lg col-6 offset-3 card-text">Contact Me</button>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}