import SearchComp from "./SearchComponent";
import data from "@/public/data/api.json"

declare var document: Document;
const Search: React.FC = () =>{
    return(
        <div>
            <SearchComp data={data} query="naruto"/>
        </div>
    )
}

export default Search;