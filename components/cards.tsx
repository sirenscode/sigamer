import Card from "./Card";
import Image from "next/image";

interface screenshot{
    urls: string
}
interface MinimumProps{
    os: string;
    processor: string;
    direX: string;
    ram: string;
    hdd_space: string;
    video_card: string;
}

interface items{
    image: string;
    title: string;
    description: string;
    screenshots: screenshot[];
    genres: string;
    rating: string;
    user_language: string;
    os: string;
    processor: string;
    ram: string;
    vcard: string;
    directx: string;
    space: string
    minimum_requirements: MinimumProps;
    trailer: string;
}
interface CardsProps{
    items: items[];
}
const Cards: React.FC<CardsProps> = ({items}) =>{
    return(
        <div className="flex flex-col w-full bg-[#111111] z-[0] p-[20px] gap-[20px]">
            <h2 className="relative text-3xl text-[#FFF] pl-[10px] sm:text-[16px]">All games</h2>
            <div className="w-full flex flex-row flex-wrap gap-[20px] justify-center items-center  ">
            
            {items.map((item, index)=>(
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
                vcard={item.minimum_requirements.video_card}
                id={item.trailer}/>
            ))}
            </div>
        </div>
        
    )
}

export default Cards;