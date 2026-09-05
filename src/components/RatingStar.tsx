import {
    RiStarFill,
    RiStarHalfFill,
    RiStarLine
} from "@remixicon/react";

interface RatingStarsProps {
    rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
    return (
        <div className="flex size-[80%]">
            {Array.from({ length: 5 }).map((_, index) => {
                const starNumber = index + 1;

                if (rating >= starNumber) {
                    return (
                        <RiStarFill
                            key={index}
                            color="gold"
                        />
                    );
                }

                if (rating >= starNumber - 0.5) {
                    return (
                        <RiStarHalfFill
                            key={index}
                            color="gold"
                        />
                    );
                }

                return (
                    <RiStarLine
                        key={index}
                        color="gold"
                    />
                );
            })}
        </div>
    );
}