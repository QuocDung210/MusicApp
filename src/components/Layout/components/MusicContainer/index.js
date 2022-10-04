import classNames from 'classnames/bind'
import styles from './MusicContainer.module.scss'
import MusicPlayzone from '../MusicPlayzone';
import MusicList from '../MusicList';

const cx = classNames.bind(styles)

function MusicContainer() {
    return (  
        <div className = {cx('music__container')}>
            <MusicPlayzone/>
            <MusicList/>
        </div>
    );
}

export default MusicContainer;