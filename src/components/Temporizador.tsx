import { CountdownCircleTimer } from '../../node_modules/react-countdown-circle-timer/lib/index'
import styles from '../styles/Temporizador.module.css'

interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer 
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#BCE596','#F7B801', '#ED827A']}
                colorsTime={[0.33, 0.33, 0.33]}>
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
        </div>
    )
}