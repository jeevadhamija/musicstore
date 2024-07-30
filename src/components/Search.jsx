import { useRef } from "react"

export const Search=({fn})=>{
    const artist=useRef();
    return (<>
    <label>Artist Name</label>
    <input ref={artist }type='text' placeholder="search name " className="form-control"/>
    <br/>
    <button className="btn btn-success " onClick={()=>{
        fn(artist.current.value);
    }}>
        Search It
    </button>
    </>)
}