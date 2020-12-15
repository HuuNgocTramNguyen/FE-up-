import React from 'react'
import '../Aboutmid/Aboutmid.css'

function Aboutmid() {
    return (
        <div class="about">
            <div class="container">
                <div className="row">
                    <div className="col-5 p-25">
                        <h1>
                            NEW STYLE
                        </h1>

                        <p>
                            Pinky Girls
                        </p>

                        <div className="about-btn">
                            <a href="" className="btn btn-click btn-read">
                                READ MORE
                            </a>
                        </div>
                    </div>

                    <div className="col-5">
                        <div className="about-img">
                            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0/w_857,c_limit/4959cbf7-5037-4ab0-8b13-7a308cb83283/nike-just-do-it.jpg" alt="" />
                            {/* <iframe src="https://www.youtube.com/embed/V_ozu_7Xweg">
                            </iframe> */}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Aboutmid
