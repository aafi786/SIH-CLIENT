import React, { Component } from 'react'

import bill from '../icons/bill.jpg';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

export default class Bill extends Component {
    render() {
        return (
            <div>
                <div className="w-full backg mt-8 flex rounded-lg">
                    <div className="flex-1">
                        <img className="h-64 img-at" src={bill} alt="bill" />
                    </div>

                    <div className="flex-1">
                        <h3 className="cover-heading">Welcome to the Future of Billing</h3>
                        <button class="uk-button uk-button-default cover-btn">
                            Get Started
                    </button>

                    </div>

                </div>
                <nav class="uk-navbar-container" style={{ background: '#fff' }} uk-navbar="true">

                    <div class="uk-navbar-left">

                        <ul class="uk-navbar-nav">
                            <li class="uk-active"><a href="#">Active</a></li>

                        </ul>

                    </div>

                    <div class="uk-navbar-right">

                        <ul class="uk-navbar-nav">

                            <li>
                                <button class="uk-button uk-button-default cover-btn">
                                    <span>+</span> Generate
                    </button>
                            </li>
                        </ul>

                    </div>

                </nav>
                <div className="mt-4">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane className="p-8" tab="Generated Today" key="1">
      
                            <div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="true">
                                {/* Looping for display Starts Here */}
                                <div>
                                    <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">
                                        <h3 class="uk-card-title"><a href="#">#23457899</a></h3>
                                        <div className="mt-4 leading-none">
                                            <p>Status : Pending</p>
                                            <p>Created On : 20 Jan,2020 </p>
                                            <p>Sent On : 22 Jan,2020 </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Looping ENDS HERE */}
                                <div>
                                    <div class="uk-card uk-card-default uk-card-body">Item</div>
                                </div>
                                <div>
                                    <div class="uk-card uk-card-default uk-card-body">Item</div>
                                </div>
                            </div>

                        </TabPane>
                        <TabPane tab="Drafts" key="2">
                            Content of Tab Pane 2
    </TabPane>
                        <TabPane tab="No Idea" key="3">
                            Content of Tab Pane 3
    </TabPane>
                    </Tabs>
                </div>

            </div>
        )
    }
}
