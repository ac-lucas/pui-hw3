import React, { Component } from 'react';
import './index.css';
import Card from './Card';
import Navbar from './Navbar';


function Homepage() {

    return (
        <div>
            <Navbar />

            <div className="cards row">

                <div className="column" id="original">
                    <Card
                        cardImgURL=""
                        cardAlt=""
                        cardTitle=""
                        cardPrice=""
                    />

                </div>

                <div className="column" id="apple">
                    <Card
                        cardImgURL=""
                        cardAlt=""
                        cardTitle=""
                        cardPrice=""
                    />
                </div>

                <div className="column" id="raisin">
                    <Card
                        cardImgURL=""
                        cardAlt=""
                        cardTitle=""
                        cardPrice=""
                    />

                </div>

            </div>

            <div className="cards row" id="walnut">

                <div className="column">
                    <Card
                        cardImgURL=""
                        cardAlt=""
                        cardTitle=""
                        cardPrice=""
                    />

                </div>

                <div className="column" id="chocolate">
                    <Card
                        cardImgURL=""
                        cardAlt=""
                        cardTitle=""
                        cardPrice=""
                    />

                </div>

                <div className="column" id="strawberry">
                    <Card
                        cardImgURL=""
                        cardAlt=""
                        cardTitle=""
                        cardPrice=""
                    />

                </div>

            </div>
        </div>
    );
}

export default Homepage;