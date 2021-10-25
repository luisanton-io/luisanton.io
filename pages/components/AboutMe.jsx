import styles from "../../styles/index.module.scss"

export default function AboutMe() {
    return <div className={styles.aboutMe}>
        <h2>about:me</h2>
        <p>Wrote my first lines of code in a cold 2007 autumn evening on a Windows 3.11 terminal. I’ve then been working in and out the IT since 2013.</p>
        <p>I like to come up with creative solutions for my clients’ needs in many fields: despite my focus being on web development, my experiences range vastly from iOS development to system administration, from UX design to video/audio content production. At the moment I am tutoring and teaching for the Full Stack Course at <a href="https://strive.school" style={{ color: '#00ff84' }}>Strive School</a>, in which we introduce students to the MERN Stack.</p>
        <p>I have worked for people and companies in New York and Florida as well as worldwide: let’s chat together and I’ll tell you how I can help.</p>
    </div>
}