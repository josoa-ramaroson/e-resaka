import { useState } from "react"
import { searchIcon } from "../../../../../assets"

export const SearchBar = () => {
    const [searchContent, setSearchContent] = useState("");

    return (
        <div className="flex h-12">
            <button className="h-full w-10 pl-3 rounded-l-full border-custom-black  border-y-2 border-l-2 "><img   src={searchIcon} alt="search" /></button>
            <input className="h-full px-4 focus:bg-secondary bg-white focus:outline-none text-custom-black border-y-2 border-r-2  flex-1 border-custom-black rounded-r-full" type="text" placeholder="Rechercher" value={searchContent} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchContent(e.target.value)} />
        </div>
    )
}
