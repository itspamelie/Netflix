import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Play() {

    return(
    <>
<div class="video-wrapper">
    <video 
        id="native-video-player"
        controls         
        poster="https://i.ytimg.com/vi/_cMxraX_5RE/maxresdefault.jpg" 
        preload="metadata" 
    >
        <source 
            src="https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm/Sprite_Fright_-_Open_Movie_by_Blender_Studio.webm.1080p.vp9.webm" 
            type="video/webm"
        />
        <track 
            src="https://raw.githubusercontent.com/iPingOi/jwplayer/main/%5BEnglish%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt" 
            label="English" 
            kind="captions" 
            default
        />
        <track 
            src="https://raw.githubusercontent.com/iPingOi/jwplayer/main/%5BSpanish%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt" 
            label="Spanish" 
            kind="captions"
        />

        Tu navegador no soporta el elemento de video HTML5.
    </video>
</div>
    </>
    )
}