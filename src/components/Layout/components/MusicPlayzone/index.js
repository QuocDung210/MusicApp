import classNames from 'classnames/bind'
import styles from './MusicPlayzone.module.scss'
import MusicPlayzoneTitle from '../MusicPlayzoneTitle';
import MusicPlayzoneCD from '../MusicPlayzoneCD';
import MusicOptions from '../MusicOption';

const cx = classNames.bind(styles)

function MusicPlayzone() {
    return ( 
        <div className = {cx('wrapper')}>
            <MusicPlayzoneTitle/>
            <MusicPlayzoneCD/>
            <MusicOptions/>
        </div>
    );
}

export default MusicPlayzone;