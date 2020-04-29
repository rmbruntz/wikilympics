import styles from './match.module.css'
import { useState } from 'react'

export function Match(props) {

    const[total, setTotal] = useState(0);
    const[correct, setCorrect] = useState(0);
    
    return (
        <div className={styles.matchGame}>
        <div className={styles.score}>
            Current score: {correct} / {total}
        </div>
        
            yeehaw
        </div>
    )
}
