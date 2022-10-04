import { useContext , useEffect , useRef } from 'react';
import classNames from 'classnames/bind'
import styles from './MusicPlayzoneCD.module.scss'
import Context from '~/store/Context';
import { motion , useAnimationControls} from 'framer-motion';

const cx = classNames.bind(styles)

function MusicPlayzoneCD() {
    const cdRef = useRef()
    const [state, dispatch] = useContext(Context)
    const { currentPlay } = state
    const controls = useAnimationControls()

   
    useEffect(() => {
        if(currentPlay){
            controls.start({
                rotate : "360deg",
                transition : {
                    duration : 10,
                    repeat : Infinity,
                    ease : "linear"
                }
            })
        }

        return () => {
            controls.stop()
        }
    },[currentPlay])

    
    // else{
    //     console.log("else")
    //     //controls.stop()
    // }


    return (  
        <motion.div
            className={cx('wrapper')}
            animate = {controls}
        >
            <div 
                className = {cx('background__img')}
                style = {{ backgroundImage : `url(${state.songs[state.currentIndex].image})`}}
            >
            </div>
        </motion.div>
    );
}

export default MusicPlayzoneCD;