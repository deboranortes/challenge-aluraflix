import styles from "./Rodape.module.css";

function Rodape(){
    return(
        <footer className={styles.rodape}>
            <img src='logo.png' alt='Logotipo'/>
        </footer>
    )
}

export default Rodape;