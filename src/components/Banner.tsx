import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { banners } from "../datas/banners";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";


export default function Banner() {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) =>
                prev === banners.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (<>
        <div className="overflow-hidden">
            <div className="flex transition-transform duration-800 ease-in-out"
                style={{
                    transform: `translateX(-${current * 100}%)`
                }}>
                {banners.map((banner) => (
                    <div className="relative w-full shrink-0" key={banner.id}>
                        <button className="absolute text-white h-full"
                            onClick={() => setCurrent((prev) => prev === 0 ? banners.length - 1 : prev - 1)}>
                                <span className="block bg-gray-400 rounded-full p-1 cursor-pointer">
                                    <RiArrowLeftLine />
                                </span>
                        </button>
                        <button className="absolute text-white h-full right-0 "
                            onClick={() => setCurrent((prev) => prev === banners.length - 1 ? 0 : prev + 1)}>
                                <span className="block bg-gray-400 rounded-full p-1 cursor-pointer">
                                    <RiArrowRightLine />
                                </span>
                        </button>


                        <img
                            src={banner.image}
                            alt={banner.title}
                            className="w-full h-150 object-cover"
                        />

                        <div className="absolute bottom-10 left-5 flex flex-col justify-center p-2
                                        bg-black/20 rounded-2xl backdrop-blur-md">
                            <h2 className="text-2xl lg:text-3xl font-bold text-white">
                                {banner.title}
                            </h2>

                            <p className="mt-3  lg:text-xl text-white">
                                {banner.subtitle}
                            </p>

                            <button className="mt-6 w-fit rounded-lg bg-white px-6 py-3 font-semibold text-black
                                                cursor-pointer"
                                onClick={() => navigate(banner.link)}>
                                {banner.buttonText}
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </div>

    </>)
}