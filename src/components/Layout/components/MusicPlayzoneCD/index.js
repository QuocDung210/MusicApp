import { useContext, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./MusicPlayzoneCD.module.scss";
import Context from "~/store/Context";
// import { motion, useAnimationControls } from "framer-motion";

const cx = classNames.bind(styles);

function MusicPlayzoneCD() {
  const cdRef = useRef(null);
  const [state, dispatch] = useContext(Context);
  const { currentPlay } = state;
  //   const controls = useAnimationControls();

  //   useEffect(() => {
  //     if (cdRef) {
  //       console.log("check: ", cdRef);
  //       if (currentPlay) {
  //         console.log("check currentPlay: ", currentPlay);
  //         controls.start({
  //             rotate : "360deg",
  //             transition : {
  //                 duration : 10,
  //                 repeat : Infinity,
  //                 ease : "linear"
  //             }
  //         })
  //         cdRef.current.classList.add("rotate");
  //       } else {
  //         cdRef.current.classList.remove("rotate");
  //       }
  //     }
  //   }, [currentPlay]);

  // else{
  //     console.log("else")
  //     //controls.stop()
  // }

  return (
    <div className={cx("wrapper")}>
      <div
        ref={cdRef}
        className={cx("background__img", `${currentPlay && "rotate"}`)}
        style={{
          backgroundImage: `url(${state.songs[state.currentIndex].image})`,
        }}
      ></div>
    </div>
  );
}

export default MusicPlayzoneCD;
