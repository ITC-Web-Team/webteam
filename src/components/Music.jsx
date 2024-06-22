import React, { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

function Music() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayMusic = () => {
        if (audioRef.current) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.error('Playback failed:', error);
                });
            }
        }
    };

    const handlePauseMusic = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className='z-20 cursor-pointer'>
            <audio ref={audioRef} src="audio/music.mp3" loop />
            {isPlaying ? 
                <Volume2 onClick={handlePauseMusic} size={30} className='border-2 border-black rounded-full p-2 h-10 w-10' />
                : 
                <VolumeX onClick={handlePlayMusic} size={30} className='border-2 border-black rounded-full p-2 h-10 w-10' />
            }
        </div>
    );
}

export default Music;