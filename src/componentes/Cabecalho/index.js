import Botao from "componentes/Botao";
import styles from "./Cabecalho.module.css";
import { NavLink } from "react-router-dom";

function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <img src='logo.png' alt='Logotipo'/>
            <div className={styles.navegacao}>
                <Botao to={"/"}>
                    <NavLink className={({isActive}) =>`
                    ${isActive ? styles.linkDestacado : styles.link}
                    `} to="/">
                        Home
                    </NavLink>
                </Botao>
                <Botao to={"/novovideo"}>
                    <NavLink className={({isActive}) =>`
                    ${isActive ? styles.linkDestacado : styles.link}
                    `} to="/novovideo">
                        Novo video
                    </NavLink>
                </Botao>
            </div>
        </header>
    )
}

export default Cabecalho;