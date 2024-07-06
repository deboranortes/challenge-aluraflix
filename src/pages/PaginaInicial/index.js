import Banner from "../../componentes/Banner";
import Card from "../../componentes/Card";
import Carrossel from "../../componentes/Carrossel";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function PaginaInicial(){
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        fetch("https://my-json-server.typicode.com/deboranortes/aluraflix-api/videos")
        .then(resposta => resposta.json())
        .then(dados =>{
            setVideos(dados)
        })
    }, [])

    console.log(videos)

    return(
        <section>
            <Banner/>
            <Carrossel sessao="Front end" cor="#6BD1FF">
                {videos
                .filter((video) => video.categoria === "Front end")
                .map((video) =>(
                    <motion.div key={video.id}>
                        <Card
                            id={video.id} 
                            imagem={video.imagem}  
                            titulo={video.titulo}
                            categoria={video.categoria}
                            video={video.video}
                            descricao={video.descricao}
                        />
                    </motion.div>
                ))}
            </Carrossel>

            <Carrossel sessao="Back end" cor="#00C86F">
                {videos
                .filter((video) => video.categoria === "Back end")
                .map((video) =>(
                    <motion.div key={video.id}>
                        <Card
                            id={video.id} 
                            imagem={video.imagem}  
                            titulo={video.titulo}
                            categoria={video.categoria}
                            video={video.video}
                            descricao={video.descricao}
                        />
                    </motion.div>
                ))}
            </Carrossel>

            <Carrossel sessao="Mobile" cor="#FFBA05">
            {videos
                .filter((video) => video.categoria === "Mobile")
                .map((video) =>(
                    <motion.div key={video.id}>
                        <Card
                            id={video.id} 
                            imagem={video.imagem}  
                            titulo={video.titulo}
                            categoria={video.categoria}
                            video={video.video}
                            descricao={video.descricao}
                        />
                    </motion.div>
                ))}
            </Carrossel>
        </section>
    )
}

export default PaginaInicial;