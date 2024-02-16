interface Props{
    item: string
}
const Info: React.FC =() =>{
    function hide(){
        document.getElementById("info")!.style.display="none";
        document.getElementById("body")!.style.overflow="auto"
      }
    
    return(
        <div id="info" className="fixed hidden top-[0] h-full overflow-y-auto z-[50] mb-[50px] w-full t-[0] backdrop-blur-sm flex flex-col items-center p-3 left-[0]">
            <div className="w-3/4 flex absolute  mb-[auto]  h-[auto] flex-col mt-[50px] mb-[50px] bg-[#111111] text-[#FFF] rounded-2xl mb-[50px] xl:w-full">
                <div className="w-full h-[600px] bg-[blue] flex bg-center bg-no-repeat bg-cover rounded-2xl relative" id="header-bg">
                    <button className="ml-[auto] relative mb-[auto] w-[50px] h-[50px]" onClick={hide}><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 32 32"><path fill="#FF8D00" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg></button>
                </div>
                <div className="p-[30px] flex flex-col gap-[5px] sm: p-[10px]">
                    <h1 id="item-title" className="text-3xl font-bold">{}</h1>
                    <div className="flex flex-row gap-[20px] text-[#D97F10] font-semibold sm:flex-col">
                        <span id="genre" className="">{}Genre</span>
                        <span id="rating" className="">{}Rating</span>
                        <span id="userlang" className="">{}User lang</span>
                    </div>
                    <p id="description" className="font-semilight">{}description</p>
                    <div className="pt-[20px]">
                        <h1 className="font-seminold text-[20px] text-[#D97F10] font-semibold">Minimum Requirements</h1>
                        <div className="flex flex-col gap-[10px] text-[#999999] font-semibold">
                            <span id="os">{}os</span>
                            <span id="processor">processor</span>
                            <span id="ram">Ram</span>
                            <span id="vcard">video card</span>
                            <span id="directx">direct x</span>
                            <span id="space">HDD space</span>
                        </div>
                    </div>
                    <div className="pt-[20px] flex flex-col gap-[10px]">
                        <h2 className="text-[20px] text-[#D97F10] font-semibold">Screenshoots</h2>
                        <div className="w-full h-[300px] overflow-auto flex flex-root gap-[20px] mb-[20px] sm:h-[160px]" id="screenshoots">
                        </div>
                    </div>
                    <div className="flex flex-row w-full items-center justify-center gap-[20px]">
                        <a id="cart"><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"><path fill="#D87F0F" d="M2.5 4.25a.75.75 0 0 1 .75-.75h.558c.95 0 1.52.639 1.845 1.233c.217.396.374.855.497 1.271A1.29 1.29 0 0 1 6.25 6h12.498c.83 0 1.43.794 1.202 1.593l-1.828 6.409a2.75 2.75 0 0 1-2.644 1.996H9.53a2.75 2.75 0 0 1-2.652-2.022l-.76-2.772l-1.26-4.248l-.001-.008c-.156-.567-.302-1.098-.52-1.494C4.128 5.069 3.96 5 3.809 5H3.25a.75.75 0 0 1-.75-.75m5.073 6.59l.751 2.739c.15.542.643.919 1.206.919h5.948a1.25 1.25 0 0 0 1.202-.907L18.417 7.5H6.585l.974 3.287zM11 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1.5 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m8.5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1.5 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0"/></svg></a>
                        <button id="link" className="flex flex-row items-center bg-[#D87F0F] text-[15px] rounded-[6px] p-[3px] gap-[5px] h-[40px] transition-colors background-color  ease-in-out  hover:bg-[#17171F]"><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#fff" d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"/></svg>Watch Trailer</button>
                    </div>
                </div>
            </div>    
        </div>
            
        
    )
}

export default Info;