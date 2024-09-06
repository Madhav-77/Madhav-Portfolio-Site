import styles from "./alert.module.scss";

interface AlertProps {
    showAlert: boolean;
}

export default function Alert({showAlert}: AlertProps) {
    return (
        <>
            <div className={`alert alert-success position-fixed bottom-0 end-0 m-4 ${showAlert ? styles.show : styles.hide} ${styles.custom_alert}`} role="alert" style={{ zIndex: 9999 }}>
                Email address copied to clipboard!
            </div>
        </>
    )
} 