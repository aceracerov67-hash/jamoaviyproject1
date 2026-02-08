import React from "react";
import Slider from "react-slick";
import "./Section.css";
import Oo from "./images/oo.png";
import Hh from "./images/hh.png";
import Uu from "./images/uu.png";
import Mm from "./images/mm.png";
import Aa from "./images/aa.png";

const Section = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="section">
            <div className="container">
                <span>
                    <h1 className="section__title">Our Recent Projects</h1>
                    <p className="section__text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </span>

                <div className="section__container">
                    <Slider {...settings}>
                        <div className="section__item">
                            <img className="section__img" src={Oo} alt="" />
                        </div>

                        <div className="section__item">
                            <img className="section__img" src={Uu} alt="" />
                        </div>

                        <div className="section__item">
                            <img className="section__img" src={Hh} alt="" />
                        </div>


                        <div className="section__item">
                            <img className="section__img" src={Mm} alt="" />
                        </div>

                        <div className="section__item">
                            <img className="section__img" src={Aa} alt="" />
                        </div>
                    </Slider>

                    <a className="section__btn" href="#">SEE ALL</a>
                </div>
            </div>
        </div>
    );
};

export default Section;
