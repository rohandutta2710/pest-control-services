import React from "react";
import Tilt from "react-vanilla-tilt";

const FooterProp = (props) => {
    return (
        <>
            <a key={props.index} href={props.footer.hrefs} target="_blank">{props.footer.icon}</a>
        </>
    );

}

const ServicesSliderProp = (props) => {
    return (
        <>
            <a to={props.servicesdetails.hrefs} key={props.index}>
                <div className="service-block">
                    <div className="service-slider">
                        <img src={props.servicesdetails.img} alt="Loading" />
                        <p>{props.servicesdetails.content}</p>
                        <h5>{props.servicesdetails.description}</h5>
                    </div>
                </div>
            </a>
        </>
    );
}

const ReviewRatingProp = (props) => {
    return (
        <Tilt className="tilt-review" key={`${props.uniquekey}`}>
            <div className="reviewer-name">
                <img src={props.review.img} alt="Loading" />
                <p className="name">{props.review.name}</p>
                <p className="course-completed">{props.review.course}</p>
            </div>
            <div className="description">
                <p className="description-p">{props.review.description}</p>
                <a href={props.review.hrefs} key={props.uniquekey}><p>{props.review.icon}<span className="profile">Detailed Review</span></p></a>
            </div>
        </Tilt>
    );
}

export default FooterProp;
export { ServicesSliderProp,ReviewRatingProp };
