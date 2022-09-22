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
                    <img className="card-image" src="..../public/assets/original-cinnamon-roll.jpg" alt="original cinnamon roll"/>

                        <div className="card-title">
                            <h2>Original cinnamon roll</h2>
                        </div>

                        <div className="card-glazing">
                            <label HTMLFor="glazing1">Glazing:</label>
                            <select name="glazing" id="glazing1">
                            </select>
                        </div>

                        <div className="card-size">
                            <div className="card-size-title">
                                <p>Pack size: </p>
                            </div>
                            <div className="card-size-squares">
                                <button type="button" className="button-1 selected">1</button>
                                <button type="button" className="button-3">3</button>
                                <button type="button" className="button-6">6</button>
                                <button type="button" className="button-12">12</button>
                            </div>
                        </div>

                        <div className="card-price">
                            <div className="card-price-left">
                                <p>$ 2.49</p>
                            </div>
                            <div className="card-price-right">
                                <button type="button">Add to Cart</button>
                            </div>
                        </div>

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
                    <img className="card-image" src="assets/raisin-cinnamon-roll.jpg" alt="raisin cinnamon roll"/>

                        <div className="card-title">
                            <h2>Raisin cinnamon roll</h2>
                        </div>

                        <div className="card-glazing">
                            <label HTMLFor="glazing3">Glazing:</label>
                            <select name="glazing" id="glazing3">
                            </select>
                        </div>

                        <div className="card-size">
                            <div className="card-size-title">
                                <p>Pack size: </p>
                            </div>
                            <div className="card-size-squares">
                                <button type="button" className="button-1 selected">1</button>
                                <button type="button" className="button-3">3</button>
                                <button type="button" className="button-6">6</button>
                                <button type="button" className="button-12">12</button>
                            </div>
                        </div>

                        <div className="card-price">
                            <div className="card-price-left">
                                <p>$ 2.99</p>
                            </div>
                            <div className="card-price-right">
                                <button type="button">Add to Cart</button>
                            </div>
                        </div>

                </div>

            </div>

            <div className="cards row" id="walnut">

                <div className="column">
                    <img className="card-image" src="assets/walnut-cinnamon-roll.jpg" alt="walnut cinnamon roll"/>

                        <div className="card-title">
                            <h2>Walnut cinnamon roll</h2>
                        </div>

                        <div className="card-glazing">
                            <label HTMLFor="glazing4">Glazing:</label>
                            <select name="glazing" id="glazing4">
                            </select>
                        </div>

                        <div className="card-size">
                            <div className="card-size-title">
                                <p>Pack size: </p>
                            </div>
                            <div className="card-size-squares">
                                <button type="button" className="button-1 selected">1</button>
                                <button type="button" className="button-3">3</button>
                                <button type="button" className="button-6">6</button>
                                <button type="button" className="button-12">12</button>
                            </div>
                        </div>

                        <div className="card-price">
                            <div className="card-price-left">
                                <p>$ 3.49</p>
                            </div>
                            <div className="card-price-right">
                                <button type="button">Add to Cart</button>
                            </div>
                        </div>

                </div>

                <div className="column" id="chocolate">
                    <img className="card-image" src="assets/double-chocolate-cinnamon-roll.jpg" alt="double-chocolate cinnamon roll"/>

                        <div className="card-title">
                            <h2>Double-chocolate cinnamon roll</h2>
                        </div>

                        <div className="card-glazing">
                            <label HTMLFor="glazing5">Glazing:</label>
                            <select name="glazing" id="glazing5">
                            </select>
                        </div>

                        <div className="card-size">
                            <div className="card-size-title">
                                <p>Pack size: </p>
                            </div>
                            <div className="card-size-squares">
                                <button type="button" className="button-1 selected">1</button>
                                <button type="button" className="button-3">3</button>
                                <button type="button" className="button-6">6</button>
                                <button type="button" className="button-12">12</button>
                            </div>
                        </div>

                        <div className="card-price">
                            <div className="card-price-left">
                                <p>$ 3.99</p>
                            </div>
                            <div className="card-price-right">
                                <button type="button">Add to Cart</button>
                            </div>
                        </div>

                </div>

                <div className="column" id="strawberry">
                    <img className="card-image" src="assets/strawberry-cinnamon-roll.jpg" alt="Strawberry cinnamon roll"/>

                        <div className="card-title">
                            <h2>Strawberry cinnamon roll</h2>
                        </div>

                        <div className="card-glazing">
                            <label HTMLFor="glazing6">Glazing:</label>
                            <select name="glazing" id="glazing6">
                            </select>
                        </div>

                        <div className="card-size">
                            <div className="card-size-title">
                                <p>Pack size: </p>
                            </div>
                            <div className="card-size-squares">
                                <button type="button" className="button-1 selected">1</button>
                                <button type="button" className="button-3">3</button>
                                <button type="button" className="button-6">6</button>
                                <button type="button" className="button-12">12</button>
                            </div>
                        </div>

                        <div className="card-price">
                            <div className="card-price-left">
                                <p>$ 3.99</p>
                            </div>
                            <div className="card-price-right">
                                <button type="button">Add to Cart</button>
                            </div>
                        </div>

                </div>

            </div>
        </div>
    );
}

export default Homepage;