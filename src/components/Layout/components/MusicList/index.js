import classNames from "classnames/bind";
import styles from "./MusicList.module.scss"
import MusicItem from "./MusicItem";
import { useContext } from "react";
import Context from "~/store/Context";


const cx = classNames.bind(styles)

function MusicList() {
    const [state, dispatch] = useContext(Context)
    const { songs } = state
    return (  
        <div className = {cx("music__list")}>
            {
                songs.map( (song, index) => (
                    <MusicItem key={index} song = {song} index = {index}/>
                ))
            }
        </div>
    );
}

export default MusicList;