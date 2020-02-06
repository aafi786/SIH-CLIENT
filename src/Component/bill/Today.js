import React, { Component } from 'react';
import axios from 'axios';


export default class Today extends Component {
    constructor() {
        super();
        this.state = {
            result: []
        }
    }
    componentDidMount() {
        axios('http://localhost:5000/bill/getallbill')
            .then(res => {
                console.log(res.data)
                this.setState({
                    result: res.data
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>

                <div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="true">

                    {/* Looping for display Starts Here */}
                    {
                        this.state.result.map((data, index) => (
                            <div key={index}>
                                <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">
                                    <h3 class="uk-card-title"><a href="#">#{data.invoiceNo}</a></h3>
                                    <div className="mt-4 leading-none">
                                        <p className="text-sm">Title : {data.title}</p>

                                        <p>Created On : {data.date} </p>
                                        <p>Sent On : {data.date} </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {/* Looping ENDS HERE */}
                    {/* <div>
                        <div class="uk-card uk-card-default uk-card-body">Item</div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">Item</div>
                    </div> */}
                </div>
            </div>
        )
    }
}
