interface Props{
    value: boolean;
}
const Loader: React.FC<Props> = ({value}) =>{
    return(
        <div id="loader" className={value ? "w-full h-[100vh] fixed top-[0] bg-[#111111] z-[40] flex flex-col justify-center items-center opacity-[1] top-[0]": "hide fadeOut"}>
            <div className="w-full h-full flex flex-col items-center justify-center gap-[50px]">
                <a className="font-bold text-[#cf5223] text-[1.2em] flex flex-row items-center fixed mt-[-150px]" href="/"><img src="/images/logo.png" height={"150px"} width={"200px"} /></a>
                <div className="loader"></div>
            </div>
            
        </div>
    )
}

export default Loader;