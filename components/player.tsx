import { useState } from "react";
import Loader from "./loader";

interface PlayerProps{
    id: string;
}
const Player: React.FC<PlayerProps> = ({id}) =>{
    const url = `https://www.youtube.com/embed/${id}?autoplay=0&mute=0`;
    var stopVideos = function () {
        var videos = document.querySelectorAll('iframe, video');
        Array.prototype.forEach.call(videos, function (video) {
            if (video.tagName.toLowerCase() === 'video') {
                video.pause();
            } else {
                var src = video.src;
                video.src = src;
            }
        });
    };
    
    function hide(){
        document.getElementById("player")!.style.display="none";
        document.getElementById("body")!.style.overflow="auto";
        stopVideos();
      }
    return(
        <div id="player" className="hidden w-full h-[100vh] backdrop-blur-sm fixed top-0] z-[45] flex flex-col items-center justify-center gap-[20px] shadow-sm shadow-[#FF8D00]">
            <button onClick={hide} className=""><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 32 32"><path fill="#FF8D00" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg></button>
            <iframe className="w-3/4 h-3/4" src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}/>
        </div>
    )
}

export default Player;