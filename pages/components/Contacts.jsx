import styles from '../../styles/index.module.scss'
import Copyright from './Copyright'

export default function Contacts() {
    return <div className={styles.contacts}>
        <h2>contacts</h2>

        <p>Feel free to contact me:</p>
        <div>
            <a href="mailto:hello@luisanton.io" style={{ width: 'calc(155px + 6ch)' }}>hello@luisanton.io</a>
        </div>

        <h4 style={{ marginTop: '2em' }}>You can also find me on:</h4>

        <div>
            <a href="https://linkedin.com/in/luis-antonio-canettoli">
                <img alt="Linked In" src="/linkedin.png" />
            </a>
            <a href="https://github.com/luisanton-io">
                <img alt="github" src="/github.svg" style={{ width: '20px' }} />
                <img alt="github" src="/github.png" style={{ width: '75px' }} />
            </a>
            <a href="https://stackoverflow.com/users/11783958/luis-antonio-canettoli-ordo%c3%b1ez">

                <img alt="Stack Overflow" src="/stack-overflow.svg" style={{ width: '155px', marginBottom: '0.4em' }} />
            </a>
        </div>

        <Copyright />
    </div>
}