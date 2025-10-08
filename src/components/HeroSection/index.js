import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
    const sliderData = [
        {
            id: 1,
            imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759924519/NutraSpice-Offer_t83vtw.png",
            imgMd: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935896/NutraSpice_sljv4k.jpg",
            name: "one"
        },
        {
            id: 1, imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759924519/NutraSpice-Offer_t83vtw.png",
            imgMd: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935896/NutraSpice_sljv4k.jpg",
            name: "two"
        },
        {
            id: 1, imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759924519/NutraSpice-Offer_t83vtw.png",
            imgMd: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935896/NutraSpice_sljv4k.jpg",
            name: "three"
        },
        {
            id: 1, imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759924519/NutraSpice-Offer_t83vtw.png",
            imgMd: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935896/NutraSpice_sljv4k.jpg",
            name: "four"
        },
        {
            id: 1, imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759924519/NutraSpice-Offer_t83vtw.png",
            imgMd: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759935896/NutraSpice_sljv4k.jpg",
            name: "five"
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
    };
    return (
        <div className="max-w-[90%] mx-auto">
            <div className="slider-container">
                <Slider {...settings}>
                    {sliderData.map((s) =>
                        <div key={s.id}>
                            <div className="md:hidden">
                                <img className="mx-auto" src={s.imgUrl} alt={s.name} />
                            </div>
                            <div className="hidden md:block">
                                <img className="mx-auto w-full" src={s.imgMd} alt={s.name} />
                            </div>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default HeroSection