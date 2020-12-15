import React from 'react'
import '../Follower/Follower.css'

function Follower() {
    return (
        <div className="follower">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="type">
                            <h1>120.000</h1>
                            <p>New Members</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="type">
                            <h1>1.257.290</h1>
                            <p>Follower</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="type">
                            <h1>27</h1>
                            <p>Delivery Countries</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="type">
                            <h1>27</h1>
                            <p>Delivery Countries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Follower
