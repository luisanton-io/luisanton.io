import styles from '../../styles/index.module.scss'

export default function Copyright() {
    return <div className={styles.footer}>
        Copyright © {(new Date()).getFullYear()} luisanton.io - All rights reserved
    </div>
}