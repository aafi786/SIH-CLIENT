import React, { Component } from 'react'
import { Icon } from 'antd';

export default class Draft extends Component {
    render() {
        return (
            <div>
                <div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="true">
                    {/* Looping for display Starts Here */}
                    <div>
                        <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">
                            <h3 class="uk-card-title"><a href="#">#23457899</a></h3>
                            <div className="mt-4 leading-none">
                                <p className="text-sm">Title : Drone purchase from DRDO</p>
                                <p>Created On : 20 Jan,2020 </p>
                            </div>
                            <button class="uk-button uk-button-default cover-btn">
                                <Icon className="ic-size" type="edit" />
                            </button>
                            <button class="uk-button uk-button-default cover-btn-outline">
                                <Icon className="ic-size" type="delete" />
                            </button>
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
            </div>
        )
    }
}
