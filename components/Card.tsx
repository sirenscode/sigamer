import InfoComp from "./Info";

interface screenshoot{
    urls:[];
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
    space: string
}
const Card: React.FC<CardProps> =(props) =>{
    function displayInfo(){
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
        document.getElementById("body")!.style.overflow="hidden"
        for(let i=0; i<=props.screenshots.length;i++){
            document.getElementById("screenshoots")!.innerHTML+=`<img src="${props.screenshots[i]} " class="rounded-[6px] sm:h-[150px]"/>`
        }

        
    }
    
    return(
        <div>
            <div id="card" onClick={displayInfo} className="flex relative h-[300px] w-[200px] items-center rounded-[6px] sm:w-[300px] " style={{backgroundImage: `url("${props.image}")`, backgroundSize: 'cover' , backgroundRepeat: 'no-repeat',backgroundPosition: 'center'}}>
                <div className=" relative flex text-[#FFF] items-center flex-col cursor-pointer" id="card-hover">
                    <h1 className="mt-[auto] relative mb-[20px] text-center">{props.title}</h1>
                </div>
            
            
            </div>
        </div>
    )
}

export default Card;