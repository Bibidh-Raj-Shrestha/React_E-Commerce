import { RiSubtractLine,RiAddLine } from "@remixicon/react";

interface QuantityCounterProps {
    quantity: number;
    onIncrease : ()=>void;
    onDecrease : ()=>void;
}

export default function QuantityCounter({quantity,onIncrease,onDecrease}:QuantityCounterProps) {
    

    return (<>
        <div className="w-fit flex items-center border rounded-lg overflow-hidden">
            <button
                onClick={onDecrease}
                className="p-2 hover:bg-gray-100 cursor-pointer"
            >
                <RiSubtractLine size={18} />
            </button>

            <span className="w-10 text-center font-semibold">
                {quantity}
            </span>

            <button
                onClick={onIncrease}
                className="p-2 hover:bg-gray-100 cursor-pointer"
            >
                <RiAddLine size={18} />
            </button>
        </div>
    </>);
}