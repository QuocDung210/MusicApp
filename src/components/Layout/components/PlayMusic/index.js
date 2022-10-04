import classNames from 'classnames/bind'
import styles from './PlayMusic.module.scss'
import MusicContainer from '../MusicContainer';


const cx = classNames.bind(styles)

function PlayMusic() {
    return ( 
        <div className= {cx('wrapper')}>
            <MusicContainer/>
        </div>
    );
}

export default PlayMusic;