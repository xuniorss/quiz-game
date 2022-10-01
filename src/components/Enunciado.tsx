import styles from '../styles/Enunciado.module.css'

interface EnuncidaoProps {
    texto: string
}

export default function Enunciado(props: EnuncidaoProps) {
    return (
        <div className={styles.enunciado}>
            <span className={styles.texto}>
                {props.texto}
            </span>
        </div>
    )
}