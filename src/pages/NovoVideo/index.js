import Botao from "../../componentes/Botao";
import styles from "./NovoVideo.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NovoVideo(){
    const navigation = useNavigate()
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("Front end")
    const [imagem, setImagem] = useState("")
    const [video, setVideo] = useState("")
    const [descricao, setDescricao] = useState("")

    function limpar(e){
        e.preventDefault()
        setTitulo("")
        setImagem("")
        setVideo("")
        setDescricao("")
    }

    async function submit(e){
        e.preventDefault()

        try {
            await fetch("https://my-json-server.typicode.com/deboranortes/aluraflix-api", {
                method: "POST",
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

            navigation("/")
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <section className={styles.novoVideo}>
            <div className={styles.titulo}>
                <h1>Novo vídeo</h1>
                <p>Complete o formulário para criar um novo card de vídeo</p>
            </div>
            
            <h2>Criar vídeo</h2>

            <form className={styles.criar} onSubmit={submit}>
                <section>

                    <div>
                        <label>Titulo</label>
                        <input 
                            required
                            minLength={5}
                            maxLength={50}
                            value={titulo} 
                            onChange={(e)=> setTitulo(e.target.value)}
                            placeholder="Insira o título do vídeo"
                        />
                    </div>
                    
                    <div>

                        <label>Categoria</label>
                        <select required value={categoria} onChange={(e)=> setCategoria(e.target.value)}>
                            <option>Front end</option>
                            <option>Back end</option>
                            <option>Mobile</option>
                        </select>
                    </div>

                    <div>
                        <label>Imagem</label>
                        <input 
                            required 
                            value={imagem} 
                            onChange={(e)=> setImagem(e.target.value)} 
                            type='url' 
                            placeholder="Insira a url da imagem"
                        />
                    </div>

                    <div>
                        <label>Vídeo</label>
                        <input 
                            required 
                            value={video} 
                            onChange={(e)=> setVideo(e.target.value)} 
                            type='url' 
                            placeholder="Insira o link do vídeo"
                        />
                    </div>

                    <div>
                        <label>Descrição</label>
                        <textarea 
                            required
                            minLength={5}
                            maxLength={500}
                            value={descricao} 
                            onChange={(e)=> setDescricao(e.target.value)} 
                            placeholder="Sobre o que é o vídeo?"
                        ></textarea>
                    </div> 
                </section>

                <div className={styles.botoes}>
                    <Botao type="submit">Salvar</Botao>
                    <Botao onClick={(e)=> limpar(e)}>Limpar</Botao>
                </div>
            </form>

        </section>
    )
}

export default NovoVideo;