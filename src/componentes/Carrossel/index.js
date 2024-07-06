import { useEffect, useRef, useState } from "react";
import styles from "./Carrossel.module.css";
import {motion} from "framer-motion";

function Carrossel({sessao, cor, children}){
    const carrossel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(()=>{
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, [children])

    return(
        <section className={styles.carrossel}>
            <h2 style={{backgroundColor: cor}}>{sessao}</h2>
            <motion.div ref={carrossel} className={styles.carrosselDiv} whileTap={{cursor: "grabbing"}}>
                <motion.div className={styles.inner} drag="x" dragConstraints={{right:0, left:-width}}>
                    {children}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Carrossel