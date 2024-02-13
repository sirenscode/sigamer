"use client"
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import NavBar from '@/components/NavBar';
import Info from '@/components/Info';
import Loader from '@/components/loader';

interface Item {
  title: string;
  description: string
}

interface Props {
    data: { latest_games: any[]; games: any[] }; 
    query: string;
}

const SearchComp: React.FC<Props> = ({ data,query }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);
    const [filtered, setFiltered] = useState<Item[]>([]);

    function searchByTitle(title: string): Item[] {
        const result: any[] = data.games;
        return result.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
      }

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        if(value!==""){
            const searchResults = searchByTitle(value);
            const results = Object.values(searchResults);
            setFiltered(Object.values(searchResults));
        }else{
            setFiltered([]);
        }
        
    }
    useEffect(()=>{
        setTimeout(function(){setIsLoading(false)},2000);
    },[]);



    

    return (
        <div className='relative mt-[0px]'>
            <NavBar/>
            <div className='items-center justify-center flex flex-col w-full gap-[20px] p-[20px] mt-[50px] absolute'>
            
                <p className='text-[1.5em] font-semibold'>{searchTerm}</p>
                <p>{filtered.length} result(s)</p>
                <div className='border-[#FF8D00]  border-[1px] p-1 text-[1em] h-[40px] rounded-[6px] w-3/4 flex flex-row items-center justify-center'>
                    <input
                    className='w-full rounded-[10px] text-center h-full relative bg-[transparent] border-[none]'
                    type='text'
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder='search game,genre etc'
                    />
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#FF8D00" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"/></svg>
                    </button>
                </div>
                <div className='flex flex-row flex-wrap gap-[20px] w-full items-center justify-center'>
                    {filtered.map((item,index)=>(
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
                    </div>
            </div>  
            <Info/>
            <Loader value={isLoading}/>
        </div>
        
        
    );
}

export default SearchComp;
