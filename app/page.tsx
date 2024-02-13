"use client"
import { use, useEffect, useState } from "react";
import Cards from "@/components/cards";
import HomeComponent from "@/components/Home";
import NavBar from "@/components/NavBar";
import About from "./about/page";
import Info from "@/components/Info";
import Loader from "@/components/loader";
import axios from "axios";


interface Data{
  data: Data[];
}

async function getData(){
  const api_data = await axios.get("https://upcdn.io/kW15bvA/raw/api.json");
  return api_data.data;
}





const Home: React.FC<Data> =()=>{
  const [latest, setLatest] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [release, setRelease] = useState("");
  const [image, setImage] = useState("");
  const [isLoading,setIsLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(()=>{
    fetchData();
    document.title = "SiGAMES"
  },[])

  function fetchData(){
    const uri = require("../public/data/api.json");
    console.log(uri)
    fetch("https://sirenscode.github.io/api/api.json")
    .then(response=>response.json())
    .then(returnData=>{
      console.log(returnData);
      const dataValues = Object.values(returnData)[0][0];

      
      setLatest(Object.values(returnData));
      setDescription(dataValues.description);
      setTitle(dataValues.title);
      setImage(dataValues.image);
      setRelease(dataValues.release);
      setGames(Object.values(returnData)[1]);
      setIsLoading(false);
    })
  }
  

  

  
  return(
    <main className="w-full flex flex flex-col relative">
      <NavBar/>
      <div className="w-full bg-[red]">
        <HomeComponent description={description} title={title} release_date={release} image={image}/>
      </div>
      <div className="w-full bg-[#111111] z-[20] mt-[700px] text-[#FFF] flex flex-col items-center justify-center gap-[10px]">
        <Cards items={games}/>
        
        <span className="mt-[auto]">COPYRIGHT (C) 2024 - SIGAMES - ALL RIGHTS ARE RESERVED.</span>

      </div>
      <Info/>
      <Loader value={isLoading}/>

    </main>
  )
}

export default Home;