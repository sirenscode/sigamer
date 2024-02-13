"use client"
import { useEffect, useState } from "react";
import SearchComp from "../search/SearchComponent";
import data from "@/public/data/api.json";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import Info from "@/components/Info";
import Loader from "@/components/loader";

interface Item{
    genre: string
}
interface Props{
    data: {games: any[]}
}
const GetGenre: React.FC<Props> = ({data}) =>{
    const [genreto, setGenreto] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    function getGenre(genre: string): Item[]{
        const result: any[] = data.games;
        return result.filter(item=>item.genres.toLowerCase().includes(genre.toLowerCase()))
    }

    const genres = getGenre("Fighting");
    useEffect(()=>{
        setGenreto(Object.values(genres));
        setTimeout(function(){setIsLoading(false)},2000);
    },[])
    document.title="SiGAMES - Fighting";
    
    return(
        <div className="flex flex-col">
            <div className="flex flex-row flex-wrap w-full items-center justify-center gap-[20px]">
                {genreto.map((item,index)=>(
                <Card 
                    image={item.image} 
                    title={item.title} 
                    description={item.description} 
                    screenshots={item.screenshots} 
                    key={index} 
                    genre={item.genres} 
                    rating={item.rating} 
                    user_language={item.user_language} 
                    os={item.minimum_requirements.os} 
                    processor={item.minimum_requirements.processor} 
                    directx={item.minimum_requirements.direX} 
                    ram={item.minimum_requirements.ram} 
                    space={item.minimum_requirements.hdd_space} 
                    vcard={item.minimum_requirements.video_card}/>
                ))}
                <Loader value={isLoading}/>
            </div>
        </div>
       
    )
}

const Fighting: React.FC = ()=>{
    return(
        <div>
            <NavBar/>
            <div className="w-full items-center justify-center flex flex-col gap-[20px] mt-[80px]">
                <h1 className="w-full text-left pl-[30px] text-2xl sm:text-[16px]">Fighting games</h1>
                <GetGenre data={data}/>
            </div>
            <Info/>
        </div>
        
    )
}

export default Fighting;