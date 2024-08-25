import styles from "./social-media.module.scss";

export default function Social_media() {
    return (
        <>
            <div className={`${styles.social_media_links}`}>
                <span title="GMail">
                    <a href="mailto:madhavtrivedi.work17@gmail.com">
                        <img src="../src/assets/svg/mail.svg" alt="Github" width="30" height="30" />
                    </a>
                </span>
                <span title="LinkedIn">
                    <a href="https://www.linkedin.com/in/madhavpt">
                        <img src="../src/assets/svg/linkedin.svg" alt="Github" width="30" height="30" />
                    </a>
                </span>
                <span title="GitHub">
                    <a href="https://github.com/Madhav-77">
                        <img src="../src/assets/svg/github.svg" alt="Github" width="30" height="30" />
                    </a>
                </span>
                <span title="Hacker Rank">
                    <a href="https://www.hackerrank.com/profile/madhavtrivedi_77">
                        <img src="../src/assets/svg/hackerrank.svg" alt="Github" width="35" height="35" />
                    </a>
                </span>
                <span title="Geeks For Geeks">
                    <a href="https://www.geeksforgeeks.org/user/madhavtrivedi77/">
                        <img src="../src/assets/svg/geeksforgeeks.svg" alt="Github" width="30" height="30" />
                    </a>
                </span>
                <span title="Free Code Camp">
                    <a href="https://www.freecodecamp.org/madhavtrivedi77">
                        <img src="../src/assets/svg/freecodecamp.svg" alt="Github" width="30" height="30" />
                    </a>
                </span>
                <span title="Download Resume">
                    <a href="https://www.freecodecamp.org/madhavtrivedi77">
                        <img src="../src/assets/svg/resume.svg" alt="Download Resume" width="30" height="30" />
                    </a>
                </span>
            </div>
        </>
    )
} 