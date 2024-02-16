import { useEffect, useState } from "react";
import Info from "./Info";
import View from "@/components/view";

interface screenshoot{
    urls:string;
}
interface CardProps{
    image: string;
    title: string;
    description: string;
    screenshots: screenshoot[];
    genre: string;
    rating: string;
    user_language: string;
    os: string;
    processor: string;
    ram: string;
    vcard: string;
    directx: string;
    space: string;
    id: string;
}
const Card: React.FC<CardProps> =(props) =>{
    const [id, setId] = useState("");
    const [release, setRelease] = useState(false);
    const [showPlayer, setShowPlayer] = useState(false);

    const displayInfo = ()=>{
        document.getElementById("item-title")!.innerText=props.title;
        document.getElementById("description")!.innerText=props.description;
        document.getElementById("genre")!.innerText=props.genre;
        document.getElementById("rating")!.innerText=props.rating;
        document.getElementById("userlang")!.innerText=props.user_language;
        document.getElementById("os")!.innerText=`OS: ${props.os}`;
        document.getElementById("processor")!.innerText=`Processor: ${props.processor}`;
        document.getElementById("ram")!.innerText=`RAM: ${props.ram}`;
        document.getElementById("vcard")!.innerText=props.vcard;
        document.getElementById("directx")!.innerText=`Direct X: ${props.directx}`;
        document.getElementById("space")!.innerText=`HDD space: ${props.space}`;
        document.getElementById("header-bg")!.style.backgroundImage=`url("${props.image}")`;
        document.getElementById("screenshoots")!.innerHTML=""
        document.getElementById("info")!.style.display="flex";
        document.getElementById("body")!.style.overflow="hidden";
        setId(props.id);
        console.log(props);
        var a = document.getElementById("cart")!;
        
        a.setAttribute("href",`https://wa.me/254756580206?text=is%20${props.title}%20Ready?`);
        for(let i=0; i<=props.screenshots.length;i++){
            document.getElementById("screenshoots")!.innerHTML+=`<img src="${props.screenshots[i]} " class="rounded-[6px] sm:h-[150px]"/>`
        }

        const displayPlayer = () => {
            setShowPlayer(true);
            document.getElementById("body")!.style.overflow="hidden";
            try{
                const yt = document.getElementById("yt");
                console.log(yt);
                yt!.setAttribute("src",`https://www.youtube.com/embed/${props.id}`);
                document.getElementById("player")!.style.display="block";
                
            }catch(e){
                
            }
        };
        const test = ()=>{
            console.log("TEST",props);
            displayPlayer();
            document.getElementById("navbar")!.style.zIndex="20";
            try{
                document.getElementById("hide")!.onclick=hide;
            }catch(e){

            }
            
            
        }

        const hide = () =>{
            setShowPlayer(false);
        }

        document.getElementById("link")!.onclick=test;
        
        
    }
    
    return(
        <div>
            <div id="card" onClick={displayInfo} className="flex relative h-[300px] w-[200px] items-center rounded-[6px] sm:w-[300px] " style={{backgroundImage: `url("${props.image}")`, backgroundSize: 'cover' , backgroundRepeat: 'no-repeat',backgroundPosition: 'center'}}>
                <div className=" relative flex text-[#FFF] items-center flex-col cursor-pointer" id="card-hover">
                    <h1 className="mt-[auto] relative mb-[20px] text-center">{props.title}</h1>
                </div>            
            </div>
            
            {showPlayer && <View id={id} />}
            <Info/>
        </div>
    )
}

export default Card;