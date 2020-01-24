import React, { Component } from 'react'

export default class Today extends Component {
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
                                <p>Status : Pending</p>
                                <p>Created On : 20 Jan,2020 </p>
                                <p>Sent On : 22 Jan,2020 </p>
                            </div>
                        </div>
                    </div>
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
