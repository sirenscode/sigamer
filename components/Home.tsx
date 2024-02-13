interface ItemProps{
    title: string;
    description: string;
    image: string;
    release_date: string
}

const HomeComponent: React.FC<ItemProps> = (item) =>{
    console.log("ITEMS", item)
    return(
        <div id="container" className="w-full h-[100vh] flex flex-col items-left justify-center fixed z-[10]" style={{backgroundImage: `url("${item.image}")`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
            <div className="pl-[30px] z-[10] text-[#FFF] flex flex-col gap-[20px]">
                <h1 className="font-bold text-3xl w-1/2 sm:text-[1.5em] w-3/4">{item.title}</h1>
                <p className="w-1/2 text-[22px] sm: text-[16px] lg:w-3/4 text-[16px]">{item.description}</p>
                <span className="text-[#999999] font-semibold">{item.release_date}</span>
                <div className="flex flex-row gap-[20px]">
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"><path fill="#D87F0F" d="M2.5 4.25a.75.75 0 0 1 .75-.75h.558c.95 0 1.52.639 1.845 1.233c.217.396.374.855.497 1.271A1.29 1.29 0 0 1 6.25 6h12.498c.83 0 1.43.794 1.202 1.593l-1.828 6.409a2.75 2.75 0 0 1-2.644 1.996H9.53a2.75 2.75 0 0 1-2.652-2.022l-.76-2.772l-1.26-4.248l-.001-.008c-.156-.567-.302-1.098-.52-1.494C4.128 5.069 3.96 5 3.809 5H3.25a.75.75 0 0 1-.75-.75m5.073 6.59l.751 2.739c.15.542.643.919 1.206.919h5.948a1.25 1.25 0 0 0 1.202-.907L18.417 7.5H6.585l.974 3.287zM11 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1.5 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m8.5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1.5 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0"/></svg></button>
                    <button className="flex flex-row items-center bg-[#D87F0F] rounded-[6px] p-1  transition-colors background-color  ease-in-out  hover:bg-[#17171F]"><svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="#FFF" d="M18.54 9L8.88 3.46a3.42 3.42 0 0 0-5.13 3v11.12A3.42 3.42 0 0 0 7.17 21a3.43 3.43 0 0 0 1.71-.46L18.54 15a3.42 3.42 0 0 0 0-5.92Zm-1 4.19l-9.66 5.62a1.44 1.44 0 0 1-1.42 0a1.42 1.42 0 0 1-.71-1.23V6.42a1.42 1.42 0 0 1 .71-1.23A1.51 1.51 0 0 1 7.17 5a1.54 1.54 0 0 1 .71.19l9.66 5.58a1.42 1.42 0 0 1 0 2.46Z"/></svg> Watch Trailer</button>
                </div>
            </div>
            
        </div>
    )
}

export default HomeComponent;