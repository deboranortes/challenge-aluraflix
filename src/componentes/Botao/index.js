import styles from './Botao.module.css';

function Botao({children, type, onClick}){
    return(
        <button onClick={onClick} className={styles.botao} type={type}>
            {children}
        </button>
    );
}

export default Botao;