import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const imageSlides = [
    {
        src: "https://wallpapercave.com/wp/wp8558452.jpg",
        alt: "Slide 1",
    },
    {
        src: "https://wallpaperaccess.com/full/1306038.jpg",
        alt: "Slide 2",
    },
    {
        src: "https://wallpaperaccess.com/full/1844046.jpg",
        alt: "Slide 3",
    },
    {
        src: "https://wallpapercave.com/wp/wp9319113.jpg",
        alt: "Slide 4",
    },
];

export default function () {
    return (
        <div>
            <Swiper
                className="w-full h-[700px]"
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect="fade"
                speed={1000}
                pagination={{ clickable: true }}
                loop={true}
            >
                {imageSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
