const Info: React.FC = () =>{
    function hide(){
        document.getElementById("info")!.style.display="none";
        document.getElementById("body")!.style.overflow="auto"
      }

    return(
        <div id="info" className="fixed hidden top-[0] overflow-auto h-[100vh] mb-[50px] w-full t-[0] backdrop-blur-sm z-[40] flex flex-col items-center pb-[50px]">
                <div className="w-3/4 flex absolute  mb-[auto]  flex-col mt-[50px] bg-[#111111] text-[#FFF] rounded-2xl xl:w-full">
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
                    </div>
                </div>
            </div>
    )
}

export default Info;