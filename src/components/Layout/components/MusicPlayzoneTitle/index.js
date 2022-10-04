import classNames from 'classnames/bind'
import styles from './MusicPlayzoneTitle.module.scss'

const cx = classNames.bind(styles)

function MusicPlayzoneTitle() {
    return (
        <div className= {cx('wrapper')}>
            <p className= {cx('status')}>Now playing</p>
            <h2 className= {cx('name')}>Music name</h2>
        </div>
    );
}

export default MusicPlayzoneTitle;