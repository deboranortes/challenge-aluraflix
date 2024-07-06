import { TbTrashX } from "react-icons/tb";
import { PiPencilLineBold } from "react-icons/pi";
import styles from "./Card.module.css";
import { useState } from "react";
import ModalEditar from "../ModalEditar";

function Card({imagem, titulo, categoria, video, descricao, id}){
    const [modalAberta, setModalAberta] = useState(false)

    async function deletar(){
        try {
            await fetch(`https://my-json-server.typicode.com/deboranortes/aluraflix-api/${id}`,{
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            })
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <>
        <figure className={styles.card}>
            <img src={imagem} alt={titulo} onDragStart={event => event.preventDefault()}/>
            <figcaption className={styles.opcoes}>
                <button onClick={()=>deletar()}><TbTrashX/>   Deletar</button>
                <button onClick={()=>setModalAberta(true)}><PiPencilLineBold/>   Editar</button>
            </figcaption>
        </figure>
        <ModalEditar 
            isOpen={modalAberta} 
            onRequestClose={()=> setModalAberta(false)}
            tituloInicial={titulo}
            categoriaInicial={categoria}
            imagemInicial={imagem}
            videoInicial={video}
            descricaoInicial={descricao}
            id={id}/>
        </>
    )
}

export default Card;