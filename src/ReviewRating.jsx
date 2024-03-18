import React, { useContext } from "react";
import { ReviewRatingProp } from "./PropsHub";
import { pestContext } from "./ContextManager";
const ReviewRating = () => {
    const usingContext = useContext(pestContext);
    return (
        <>
            <div className="review-main" id="reviews">
                <div className="review">
                    <h1 className="reviewh1">Reviews & Ratings</h1>
                    <h1 className="learners">What our reviewers have to say about us!</h1>
                    <div className="review-block">
                        <div className="reviewflex">
                            {usingContext.reviewarr.map((value, index) => { return (<ReviewRatingProp review={value} uniquekey={index} />); })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ReviewRating;