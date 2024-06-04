import React from 'react'
import Lakshadweep1 from '../../assets/Lakshadweep.png'
import Lakshadweep2 from '../../assets/Lakshadweep2.png'
import Lakshadweep3 from '../../assets/Lakshadweep3.png'
import Lakshadweep4 from '../../assets/Lakshadweep4.png'
import '../Lakshadweep/Lakshadweep.css'
 function Lakshadweep() {
  return (
    <>
    <div className="lakshadweep-container">
        <img loading="lazy" src={Lakshadweep1} className="img-lakshadweep" />
        <h1 className="lakshadweep-title">explore Lakshadweep</h1>
        <hr className="lakshadweep-overlay"></hr>
        <div className="lakshadweep-subcontainer">
            <div className="lakshadweep-flex">
                <div className="lakshadweep-column">
                    <div className="lakshadweep-title-container">
                        <p className="lakshadweep-desc">
                            Discover the serene beauty of Lakshadweep's secluded islands, where
                            crystal-clear waters await. Dive into vibrant coral reefs, unwind on
                            soft sandy beaches, and immerse yourself in the untouched charm of
                            this tropical paradise.
                        </p>
                        <div className="lakshadweep-button-container">
                            <button className="lakshadweep-button">See all</button>
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/35208cb013f9eabb7ed51c69a769734810cc0544271fbdaee56053de44880327?"
                                className="img-arrow" />
                        </div>
                    </div>
                </div>
                <div className="lakshadweep-column-2">
                    <div className="lakshadweep-img-container">
                        <div className="lakshadweep-img-subcontainer">
                            <div className="lakshadweep-column-3">
                                <div className="lakshadweep-img-card">
                                    <img loading="lazy" src={Lakshadweep2} className="lakshadweep-img-sub" />
                                    <p className="lakshadweep-img-title">Azure Haven</p>
                                </div>
                            </div>
                            <div className="lakshadweep-column-4">
                                <div className="lakshadweep-img-card">
                                        <img loading="lazy" src={Lakshadweep3} className="lakshadweep-img-sub" />
                                    <p className="lakshadweep-img-title">Serene Sanctuary</p>
                                </div>
                            </div>
                            <div className="lakshadweep-column-5">
                                <div className="lakshadweep-img-card">
                                    <img loading="lazy" src={Lakshadweep4} className="lakshadweep-img-sub" />
                                    <p className="lakshadweep-img-title">Verdant Vista</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br/><br/><br/>
    </>
  )
}

export default Lakshadweep;