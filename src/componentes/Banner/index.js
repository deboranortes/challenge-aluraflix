import styles from './Banner.module.css';
import video from './player.png';

function Banner (){
    return(
        <section className={styles.banner} style={{backgroundImage: `url(${video})`, backgroundColor: "rgba(0, 0, 250, 0.2)", backgroundBlendMode: "overlay"}}>
            <div>
                <h1>Front End</h1>
                <h2>SEO com React</h2>
                <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!</p>
            </div>

            <img src={video} alt='Vídeo destaque'/>
        </section>
    )
}

export default Banner