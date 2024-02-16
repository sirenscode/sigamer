"use client"

import { useEffect, useState } from "react";
import Loader from "./loader";
import hide from "@/components/Card";


interface Props{
    id: string;
}
const View: React.FC<Props> = ({id}) =>{
    const [videoId, setVideoId] = useState(id);
    const [isVisible, setIsVisible] = useState(false);
    
    var stopVideos = function () {
        var videos = document.querySelectorAll('iframe, video');
        Array.prototype.forEach.call(videos, function (video) {
            if (video.tagName.toLowerCase() === 'video') {
                video.pause();
            } else {
                
            }
        });
    };

    const hidePlayer = () =>{
        setIsVisible(false);
    }
    const showPlayerSyro = ()=>{
        setIsVisible(true);
    }
    
    useEffect(()=>{
        showPlayerSyro()
    },[])
    function hide(){
            
        const iframe = document.getElementById("yt") as HTMLIFrameElement;
        if(iframe){
            stopVideos()
        }
        setIsVisible(false);
        document.getElementById("player")!.style.display="none";
        document.getElementById("link")!.onclick=showPlayerSyro;
        try{
            document.getElementById("latest-view")!.onclick=showPlayerSyro;
        }catch(e){

        }
        
        
        
    }
    const player = (
        <div id="player" className="w-full h-[100vh] gap-[20px] fixed top-[0] backdrop-blur-lg left-[0] z-[60] flex flex-col items-center justify-center">
            <button id="hide" className="relative rounded-[20px] flex items-center justify-center flex-col" onClick={hide}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 32 32">
                    <path fill="#D97F10" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/>
                </svg>
            </button>
            <div className="p-3 w-full flex flex-col items-center justify-center sm:w-full">
                <iframe id="yt" className="rounded-[10px] sm:w-full" width={853} height={480} src={`https://www.youtube.com/embed/${videoId}`}></iframe>
            </div>
        </div>
    );

    return(
        <>
        
        {isVisible && player}
        </>
    )
}
export default View;