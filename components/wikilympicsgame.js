import styles from './wikilympicsgame.module.css'
import {Match} from '@components/match/match'

export function WikilympicsGame(props) {
    return (
        <div className={styles.game}>
            <Match />
        </div>
    )
}
