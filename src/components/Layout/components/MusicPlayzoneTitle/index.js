import classNames from "classnames/bind";
import styles from "./MusicPlayzoneTitle.module.scss";
import { useContext } from "react";
import Context from "~/store/Context";

const cx = classNames.bind(styles);

function MusicPlayzoneTitle() {
  const [state, dispatch] = useContext(Context);

  return (
    <div className={cx("wrapper")}>
      <p className={cx("status")}>Now playing</p>
      <h2 className={cx("name")}>{state.songs[state.currentIndex].name}</h2>
    </div>
  );
}

export default MusicPlayzoneTitle;
