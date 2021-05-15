import { createContext, ReactNode, useState} from 'react'

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    isPlaying: boolean;
    play: (episode: Episode) => void;
    togglePlay: () => void;
    setPlayingState: (state: boolean) => void;
}

type PlayerProps = {
    children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerProvider({children}: PlayerProps) {
    const [episodeList, setEpisodeList] = useState<Episode[]>([])
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    function play(episode) {
        setEpisodeList([episode])
        setCurrentEpisodeIndex(0)
        setIsPlaying(true)
    }

    function togglePlay() {
        setIsPlaying(!isPlaying)
    }

    function setPlayingState(state:boolean) {
        setIsPlaying(state)
    }

    
    return(
        <PlayerContext.Provider value={{
            currentEpisodeIndex, 
            episodeList, 
            isPlaying ,
            play, 
            togglePlay,
            setPlayingState
        }}>
            {children}
        </PlayerContext.Provider>
    )
}