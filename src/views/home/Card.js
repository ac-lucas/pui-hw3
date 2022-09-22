import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div>
                <img className="card-image" src={this.props.cardImgURL} alt={this.props.cardAlt} />

                <div className="card-title">
                    {this.props.cardTitle}
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
                        {this.props.cardPrice}
                    </div>
                    <div className="card-price-right">
                        <button type="button">Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card