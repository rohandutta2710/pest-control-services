import React from "react";
import './index.css';
const PageLoader = () => {
    return (
        <>
            <div className="bodies">
                <h1>Loading<span></span><span></span><span></span></h1>
                <div className="outer-ring">
                    <div className="inner-ring">
                    </div>
                </div>
            </div>
        </>

    );
}
export default PageLoader;