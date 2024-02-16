import { useState } from "react";
import View from "./view";

interface ItemProps{
    title: string;
    description: string;
    image: string;
    release_date: string;
    trailer: string;
}

const HomeComponent: React.FC<ItemProps> = (item) =>{
    const [viewLatest, setViewLatest]  = useState(false);
    function hidePlayer(){
        setViewLatest(false);
    }
    function displayPlayer(){
        const iframe = document.getElementById("yt") as HTMLIFrameElement;
        if(iframe){
            iframe.setAttribute("src",`https://www.youtube.com/embed/${item.trailer}`)
        }
        setViewLatest(true);
        try{
            document.getElementById("hide")!.onclick=hidePlayer;
        }catch(e){

        }
        
      }
    return(
        <div id="container" className="w-full h-[100vh] flex flex-col items-left justify-center fixed" style={{backgroundImage: `url("${item.image}")`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
            <div className="pl-[30px] z-[10] text-[#FFF] flex flex-col gap-[20px]">
                <h1 className="font-bold text-3xl w-1/2 sm:text-[1.5em] w-3/4">{item.title}</h1>
                <p className="w-1/2 text-[1.2rem] sm:text-[1rem] w-3/4">{item.description}</p>
                <span className="text-[#999999] font-semibold">{item.release_date}</span>
                <div className="flex flex-row gap-[20px]">
                    <a href={`https://wa.me/254756580206?text=is%20${item.title}%20Ready?`}><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#D87F0F" d="M2.5 4.25a.75.75 0 0 1 .75-.75h.558c.95 0 1.52.639 1.845 1.233c.217.396.374.855.497 1.271A1.29 1.29 0 0 1 6.25 6h12.498c.83 0 1.43.794 1.202 1.593l-1.828 6.409a2.75 2.75 0 0 1-2.644 1.996H9.53a2.75 2.75 0 0 1-2.652-2.022l-.76-2.772l-1.26-4.248l-.001-.008c-.156-.567-.302-1.098-.52-1.494C4.128 5.069 3.96 5 3.809 5H3.25a.75.75 0 0 1-.75-.75m5.073 6.59l.751 2.739c.15.542.643.919 1.206.919h5.948a1.25 1.25 0 0 0 1.202-.907L18.417 7.5H6.585l.974 3.287zM11 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1.5 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m8.5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1.5 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0"/></svg></a>
                    <button id="latest-view" onClick={displayPlayer} className="flex flex-row items-center bg-[#D87F0F] text-[15px] rounded-[6px] p-[3px] gap-[5px]  transition-colors background-color  ease-in-out  hover:bg-[#17171F]"><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#fff" d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"/></svg>Watch Trailer</button>
                    
                </div>                
            </div>  
            {viewLatest && <View id={item.trailer}/>}
        </div>
    )
}

export default HomeComponent;