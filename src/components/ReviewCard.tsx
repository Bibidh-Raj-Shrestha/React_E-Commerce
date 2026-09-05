import RatingStars from "./RatingStar";
import type { Review } from "./types";

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    return (
        <div className="flex flex-col border rounded-xl mb-2 p-2">
            <RatingStars rating={review.rating} />

            <span className="text-gray-500">
                {review.reviewerName}
            </span>

            <span>
                {review.comment}
            </span>
        </div>
    );
}