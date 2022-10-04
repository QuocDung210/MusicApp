import classNames from "classnames/bind";
import clsx from "clsx";
import styles from "./MusicList.module.scss"
import { useContext, useEffect, useRef } from "react";
import Context from "~/store/Context";
import { setSelectSong } from "~/store/Actions";


const cx = classNames.bind(styles)

function MusicItem({ song , index }) {
    const itemRef = useRef()
    const [state , dispatch] = useContext(Context)

    const handleSelectSong = (index) => {
        dispatch(setSelectSong(index))
    }

    useEffect(()=>{
        if(itemRef.current.classList.contains(styles.active)){
            itemRef.current.scrollIntoView({
                behavior : "smooth",
                block : "center"
            })
        }
    },[state.currentIndex])

    return ( 
        <div className = {clsx(styles.music__item, {
                [styles.active] : index === state.currentIndex
            })}
            onClick = {() => handleSelectSong(index)}
            ref = {itemRef}
        >
            <img src= {song.image} className= {cx("music__icon")}/>
            <div className= {cx("music__info")}>
                <span className= {cx("music__name")}>{song.name}</span>
                <span className= {cx("music__singer")}>{song.singer}</span>
            </div>
        </div>
    );
}

export default MusicItem;