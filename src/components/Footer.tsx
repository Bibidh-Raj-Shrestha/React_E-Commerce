import { RiVisaFill,RiMastercardFill,RiPaypalFill,RiInstagramFill,RiFacebookFill,RiYoutubeFill } from "@remixicon/react"

export default function Footer(){
    return(<>
        <footer className="flex justify-around w-[90%] [&_h2]:font-semibold ">
            <div>
                <h2>Customer Care</h2>
                <p className="hover:underline">Help Center</p>
                <p className="hover:underline">How to Buy</p>
                <p className="hover:underline">Returns and Refunds</p>
                <p className="hover:underline">Contact Us</p>
            </div>
            <div>
                <h2>
                    Payment Methods
                </h2>
                <div className="flex gap-5">
                    <RiVisaFill/>
                    <RiMastercardFill/>
                    <RiPaypalFill/>
                </div>
            </div>
            <div>
                <h2>Follow Us</h2>
                <div className="flex gap-5">
                    <RiFacebookFill color="blue"/>
                    <RiInstagramFill/>
                    <RiYoutubeFill color="red"/>
                </div>
            </div>
        </footer>
    </>)
}