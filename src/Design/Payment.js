import React, { Component } from 'react';
import PaymentIcon from '../icons/payment.jpg';

export default class Payment extends Component {
    render() {
        return (
            <div>
                <div className="w-full backg-p mt-8 flex rounded-lg">
                    <div className="flex-1">
                        <img className="h-64 img-at" src={PaymentIcon} alt="bill" />
                    </div>

                    <div className="flex-1">
                        <h3 className="cover-heading">Hassel Free Payment Managment</h3>
                        <button className="uk-button uk-button-default cover-btn" onClick={this.showModal}>
                            Get Started
                    </button>

                    </div>

                </div>
            </div>
        )
    }
}
