import { useState } from "react";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs"
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";

export  const SearchPage=()=>{
    const[allsongs,setsongs]=useState([]);
    const[flag,setFlag]=useState(false);
    const[song,setplayersong]=useState(null);
    const getSArtistName= async (name)=>{
        console.log('rec Artist Name',name);
        setsongs(await getSongs(name));
    }
    const togglePlayer=(flag,songarg)=>{
        setplayersong(songarg);
        setFlag(flag);
    }
    const jsx=<><Search fn={getSArtistName}/>
    <Songs fn ={togglePlayer}allsongs={allsongs}/></>
    return (
    <div className="container">
        <h1 className="alert alert-info text-center">MUSIC STORE</h1>
        <br/>
        {flag?<Player song={song}/>:jsx}
    </div>
    )
}