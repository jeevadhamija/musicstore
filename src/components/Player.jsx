export const Player=({song})=>{
    return(<div>
        <button className="btn btn-success">back to songs</button>
        <p> {song.artistName}
        {song.trackName}</p>
        <br/><br/>

        <audio controls>
        <source src={song?.previewUrl} type="audio/mp4"/>
        your browser dont support the audio element
    </audio></div>
    )
}    