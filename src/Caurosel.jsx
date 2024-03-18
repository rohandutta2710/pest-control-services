import React from "react";
import pestControlImg1 from "./images/pest_control_img1.jpg";
import pestControlImg2 from "./images/pest_control_img2.jpeg"
import pestControlImg3 from "./images/pest_control_img3.jpg"
import pestControlImg4 from "./images/pest_control_img4.jpeg"
import Carousel from 'react-bootstrap/Carousel'
const CauroselPage = () => {
    const images = [pestControlImg2,pestControlImg1, pestControlImg3,pestControlImg4]
    return (
        <>
            <Carousel>
                {images.map((value, index) => {
                    return (<Carousel.Item interval={2000} key={index}>
                        <img className="d-block w-100" src={value} alt="Loading" tabIndex={index} />
                    </Carousel.Item>)
                })}
            </Carousel>

        </>

    )
}

export default CauroselPage;