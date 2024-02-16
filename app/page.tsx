"use client"
import { use, useEffect, useState } from "react";
import Cards from "@/components/cards";
import HomeComponent from "@/components/Home";
import NavBar from "@/components/NavBar";
import About from "./about/page";
import Info from "@/components/Info";
import Loader from "@/components/loader";
import axios from "axios";
import Player from "@/components/player";


interface Data{
  data: Data[];
}

async function getData(){
  const api_data = await axios.get("https://upcdn.io/kW15bvA/raw/api.json");
  return api_data.data;
}





const Home =()=>{
  const [latest, setLatest] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [release, setRelease] = useState("");
  const [image, setImage] = useState("");
  const [trailer, setTrailer] = useState("");
  const [isLoading,setIsLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(()=>{
    fetchData();
    document.title = "SiGAMES"
  },[])

  function fetchData(){
    const uri = require("../public/data/api.json");
    fetch("https://sirenscode.github.io/api/api.json")
    .then(response=>response.json())
    .then((returnData: Data)=>{
      const Values = Object.values(returnData);
      const dataValues = Values[0][0];

      
      setLatest(Values[1]);
      setDescription(dataValues.description);
      setTitle(dataValues.title);
      setImage(dataValues.image);
      setRelease(dataValues.release);
      setGames(Object.values(returnData)[1]);
      setTrailer(dataValues.trailer);
      setIsLoading(false);
      
    })
  }
  

  

  
  return(
    <main className="w-full flex flex flex-col relative">
      <NavBar/>
      <div className="w-full bg-[red]">
        <HomeComponent description={description} title={title} release_date={release} image={image} trailer={trailer}/>
      </div>
      <div className="w-full bg-[#111111] z-[20] mt-[700px] text-[#FFF] flex flex-col items-center justify-center gap-[10px]">
        <Cards items={games}/>
        
        <span className="mt-[auto]">COPYRIGHT (C) 2024 - SIGAMES - ALL RIGHTS ARE RESERVED.</span>

      </div>
      <Loader value={isLoading}/>

    </main>
  )
}

export default Home;