import Lottie from "react-lottie-player"
import loaderJson from "./loader.json"
import styles from "./styles.module.scss"

export default function Loader({ pageReady }) {
    return <div className={styles.loader} data-ready={pageReady}>
        <Lottie loop animationData={loaderJson} play />
    </div>
}