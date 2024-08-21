import React, { useState } from 'react';
import Slider from "react-slick";
import { bannerImgOne, bannerImgTwo, bannerImgThree, bannerImgFour } from '../assets/index';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ 
                ...style, 
                display: "block", 
                left: "10px",
                zIndex: 1, 
                top: "50%", 
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)", 
                borderRadius: "50%", 
            }}
            onClick={onClick}
        />
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{ 
                ...style, 
                display: "block", 
                right: "10px",
                top: "50%", 
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)", 
                borderRadius: "50%", 
            }}
            onClick={onClick}
        />
    );
};

function Banner() {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        beforeChange: (oldIndex, newIndex) => {
            setActiveIndex(newIndex);
        }
    };

    return (
        <div className='w-full h-auto overflow-hidden'>
            <div className="slider-container w-full h-full relative">
                <Slider {...settings}>
                    <div>
                        <img src={bannerImgThree} alt="Banner 3" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src={bannerImgOne} alt="Banner 1" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src={bannerImgTwo} alt="Banner 2" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src={bannerImgFour} alt="Banner 4" className="w-full h-full object-cover" />
                    </div>
                </Slider>
            </div>

            {/* CSS for responsive height */}
            <style>
                {`
                .slider-container {
                    height: calc(100vw * 0.5); /* Adjust this ratio as needed */
                }

                @media (min-width: 640px) {
                    .slider-container {
                        height: calc(100vw * 0.4); /* Adjust this ratio as needed for larger screens */
                    }
                }

                @media (min-width: 1024px) {
                    .slider-container {
                        height: calc(100vw * 0.3); /* Adjust this ratio as needed for even larger screens */
                    }
                }
                `}
            </style>
        </div>
    );
}

export default Banner;
