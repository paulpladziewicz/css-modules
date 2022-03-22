import styles from './App.module.css';
import Button from './components/Button'

function App() {
    console.log(styles);
  return (
    <div className={styles.textCenter}>
      <h1>Hello, World.</h1>
      <p>We're happy to your learning something <span id={styles.new}>new</span>.</p>
      <p id='p2'>What will you do with CSS Modules?</p>
      <p id='p3'>This should be pink.</p>
      <p className={styles["this-will-error"]}>An error.</p>
      <h3>This is <strong>great</strong>!</h3>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
