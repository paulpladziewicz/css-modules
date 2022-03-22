import styles from './Button.module.css';

function Button({ children }) {
    console.log(styles);
    return (
        <div className={styles.button}>
            <span id={styles.text}>{children}</span>
        </div>
    );
}

export default Button;