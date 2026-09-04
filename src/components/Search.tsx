    import { useNavigate } from "react-router-dom";
    import { useState } from "react";
    import { RiSearch2Line } from "@remixicon/react";

    export default function Search(){
        const navigate = useNavigate();
        const [query,setQuery] = useState<string>("");

        function searchHandler(e:React.SubmitEvent<HTMLFormElement>){
            e.preventDefault();

            const search_query = query.trim();
            if(!search_query)  
                return;

            const params = new URLSearchParams({query: search_query});

            navigate(`/products?${params.toString()}`);
        }

        return(<>
            <form onSubmit={searchHandler}
                className="w-full flex mt-3">
                <input type="search"
                    className="w-full border text-2xl p-2"
                    value={query}
                    placeholder="search.."
                    onChange={(e)=>setQuery(e.target.value)}/>
                <button className="border p-2 cursor-pointer"
                    type="submit">
                    <RiSearch2Line size={40}/>
                </button>
            </form>
            
        </>)
    }