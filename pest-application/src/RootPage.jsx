import React, { useContext, useEffect } from "react";
import { pestContext } from "./ContextManager.jsx";
import PageLoader from "./PageLoder.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CauroselPage from "./Caurosel.jsx";
import ServicesPage from "./Servicespage.jsx";
import ReviewRating from "./ReviewRating.jsx";
import About from "./About.jsx";
function RootPage() {
    const usingContext = useContext(pestContext);
    useEffect(() => {
        setTimeout(() => {
            usingContext.updateLoader(false);
            console.clear();
        }, 1000);
    }, usingContext.loader);

    
    return (
        <>
            {
                usingContext.loader === true ? <PageLoader /> : <>
                    <Header />
                    <CauroselPage />
                    <About />
                    <ServicesPage />
                    <ReviewRating />
                    <Footer />
                </>
            }
        </>
    );


}
export default RootPage;