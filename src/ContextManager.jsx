import React, { createContext, useState } from "react";
import Serviceimg1 from './images/Pest Control Services/Cockroach Control Service.jpg';
import Serviceimg2 from './images/Pest Control Services/Lizard Conrol Service.jpg';
import Serviceimg3 from './images/Pest Control Services/Rat Control Service.jpg';
import Serviceimg4 from './images/Pest Control Services/Termite Control Service.jpg';
import Serviceimg5 from './images/Pest Control Services/WHSE Pest Control.jpeg';
import Serviceimg6 from './images/Pest Control Services/Herbal Pest Control.jpg';
import varangJhaImg from "./images/Pest Control Review/varang_joshi_review.jpg";
import yashJhaImg from "./images/Pest Control Review/yash_jha_review.jpg";
import bhupiImg from "./images/Pest Control Review/bhupi_review.jpg";
var servicecard = [{ img: Serviceimg1, content: "Cockroaches and Ant Control", hrefs: "#", description: "Cockroaches and ants pose a major threat to households, as they have the capacity to contaminate food and surfaces." }
    , { img: Serviceimg2, content: "Lizard Control", hrefs: "#", description: "Providing Lizards Treatment.Pests which are commonly found in the premises. They are annoying pests, their presence is not likened by anybody at their premises." }
    , { img: Serviceimg3, content: "Rat Control", hrefs: "#", description: "Rats and rodents turn out to be extremely nuisance in restaurants, factories, offices, hospitals, and everyone." }
    , { img: Serviceimg4, content: "Termite Control", hrefs: "#", description: "Colloquially known as “white-ants”, termites are known for the destruction they cause to wooden structures and furniture." }
    , { img: Serviceimg5, content: "Warehouse Pest Control", hrefs: "#", description: "To Control other household crawling insect pests like Silver-fish, Spider, Ants etc. which are human blood suckers and spread diseases like T.B., Typhoid, Malaria and Cholera etc." }
    , { img: Serviceimg6, content: 'Herbal Pest Control', hrefs: "#", description: 'Herbal pesticides are derived from naturally occurring plants and/or herbs. These pesticides are not just family-friendly but also eco-friendly.' }
];
var reviewarr = [{ img: varangJhaImg, name: "Varang Joshi", course: "East Delhi, Delhi", description: "After speaking with \"Sunil Pal Pest Control\" officials I got multiple contacts of professional pest control service providers within 20 minutes. I’m happy that my home is pest free now.", icon: <i className="fab fa-linkedin"></i>, hrefs: "#" },
{ img:bhupiImg , name: "Bhupender Negi", course: "Rohini, Delhi", description: "Since long my home was infested by cockroaches and rats. I was helpless because all my efforts to hire a professional pest control service provider went in vain. But thanks to \"Sunil Pal Pest Control\" that they connected me with best service provider and now my home is safe.", icon: <i className="fab fa-quora"></i>, hrefs: "#" },
{ img: yashJhaImg, name: "Yash Jha", course: "Laxmi Nagar, Delhi", description: "Best ever services by \"Sunil Pal Pest Control Service\" service provider. The officials understood my plight and connected me with right pest controller. I would recommend them to all.", icon: <i className="fab fa-linkedin"></i>, hrefs: "#" },
];

var coursecardnew = [servicecard[0], servicecard[1], servicecard[2]];
var q = 2, p = 0;
const pestContext = createContext();
const ContextManager = (props) => {
    const [loader, updateLoader] = useState(true);
    const [servicesData, updateServices] = useState(coursecardnew);
    const SliderbtnsRight = () => {
        if (q < servicecard.length - 1) {
            coursecardnew = [];
            p = 0;
            for (var j = q + 1; j <= q + 3; j++) {
                if (j < servicecard.length) {
                    coursecardnew[p] = servicecard[j];
                    p++;
                }
            }
            q += coursecardnew.length;
            updateServices(coursecardnew);
        }
    }
    const SliderbtnsLeft = () => {
        if (q > coursecardnew.length) {
            var len = coursecardnew.length;
            coursecardnew = [];
            p = 0;
            for (var j = q - len - 2; j <= q - len; j++) {
                if (j >= 0) {
                    coursecardnew[p] = servicecard[j];
                    p++;
                }
            }
            q = q - len;
            updateServices(coursecardnew);
        }
    }
    return (
        <pestContext.Provider value={{ loader, updateLoader, servicesData, updateServices, SliderbtnsRight, SliderbtnsLeft, servicecard, reviewarr }}>
            {props.children}
        </pestContext.Provider>
    );
}

export default ContextManager;
export { pestContext };