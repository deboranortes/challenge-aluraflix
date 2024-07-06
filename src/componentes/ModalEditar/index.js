import ReactDOM from "react-dom";
import Botao from "../Botao";
import styles from "./ModalEditar.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";

function ModalEditar({ isOpen, onRequestClose, id, tituloInicial, categoriaInicial, imagemInicial, videoInicial, descricaoInicial}) {
    const [titulo, setTitulo] = useState(tituloInicial)
    const [categoria, setCategoria] = useState(categoriaInicial)
    const [imagem, setImagem] = useState(imagemInicial)
    const [video, setVideo] = useState(videoInicial)
    const [descricao, setDescricao] = useState(descricaoInicial)

    useEffect(() => {
        if (isOpen) {
            setTitulo(tituloInicial);
            setCategoria(categoriaInicial);
            setImagem(imagemInicial);
            setVideo(videoInicial);
            setDescricao(descricaoInicial);
        }
    }, [isOpen, tituloInicial, categoriaInicial, imagemInicial, videoInicial, descricaoInicial]);

    function limpar(e) {
        e.preventDefault()
        setTitulo("")
        setCategoria("")
        setImagem("")
        setVideo("")
        setDescricao("")
    }

    async function editar(e){
        e.preventDefault()

        try {
            await fetch(`https://my-json-server.typicode.com/deboranortes/aluraflix-api/${id}`, {
                method:"PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    titulo: titulo,
                    categoria: categoria,
                    imagem: imagem,
                    video: video,
                    descricao: descricao
                })
            })
            window.location.reload();
        } catch (error) {
            console.error(error)
        }
    }

    if (!isOpen) return null
    return ReactDOM.createPortal(
        <>
            <div className={styles.overlay} />
            <dialog open={isOpen}>
                <IoMdCloseCircleOutline className={styles.fechar} onClick={onRequestClose} />
                <h1>Editar Card:</h1>
                <form onSubmit={editar}>
                    <label>Titulo</label>
                    <input
                        required
                        minLength={5}
                        maxLength={50}
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Insira o título do vídeo"
                    />

                    <label>Categoria</label>
                    <select required value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option>Front end</option>
                        <option>Back end</option>
                        <option>Mobile</option>
                    </select>

                    <label>Imagem</label>
                    <input
                        required
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                        type='url'
                        placeholder="Insira a url da imagem"
                    />

                    <label>Vídeo</label>
                    <input
                        required
                        value={video}
                        onChange={(e) => setVideo(e.target.value)}
                        type='url'
                        placeholder="Insira o link do vídeo"
                    />

                    <label>Descrição</label>
                    <textarea
                        required
                        minLength={5}
                        maxLength={500}
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Sobre o que é o vídeo?"
                    ></textarea>

                    <div className={styles.botoes}>
                        <Botao type="submit">Salvar</Botao>
                        <Botao onClick={(e) => limpar(e)}>Limpar</Botao>
                    </div>
                </form>
            </dialog>
        </>,
        document.body
    )
}

export default ModalEditar;