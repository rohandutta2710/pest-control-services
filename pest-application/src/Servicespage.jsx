import React, { useContext } from "react";
import { ServicesSliderProp } from './PropsHub';
import { pestContext } from "./ContextManager";
const ServicesPage = () => {
    const usingContext = useContext(pestContext);
    return (
        <>
            <div id="pestservices">
                <div className="wrap-services">
                    <div className="our-service bg-service">
                        <h4 className="our-service-tag">Sunil Pal Pest Control Services</h4>
                    </div>
                </div>
                <div className="service-card">
                    <div className="service" id="service">
                        <button onClick={usingContext.SliderbtnsLeft}><span><i className="fas fa-long-arrow-alt-left"></i></span></button>
                        {
                            usingContext.servicesData.map((value, index) => {
                                return <ServicesSliderProp servicesdetails={value} index={index} />
                            })
                        }
                        <button onClick={usingContext.SliderbtnsRight}><span><i className="fas fa-long-arrow-alt-right"></i></span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesPage;