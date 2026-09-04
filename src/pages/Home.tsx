// import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Search from "../components/Search";

export default function Home() {

    return (
        <>
            <main className="w-[70%] mt-1">
                <Banner/>
                <Search/>
            </main>
        </>
    );
}