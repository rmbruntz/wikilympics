import styles from './match.module.css'
import { useState } from 'react'
import fetch from 'node-fetch'
import useSWR from 'swr'
import shuffle from 'shuffle-array'


const fetcher = (url, _) => fetch(url).then(res => res.json());

console.log(styles);


export function Match(props) {

    const [total, setTotal] = useState(0);
    const [correct, setCorrect] = useState(0);

    const onCorrect = () => {
        setTotal(total + 1);
        setCorrect(correct + 1);
    }

    const onIncorrect = () => {
        setTotal(total + 1);
    }


    return (
        <div className={styles.matchGame}>
            <div className={styles.score}>
                Current score: {correct} / {total}
            </div>

            <Round tot={total} onCorrect={onCorrect} onIncorrect={onIncorrect} />
        </div>
    )
}

function Round(props) {

    const { data, error } = useSWR(['/api/matchquote', props.tot], fetcher)

    if (!data || error) return (

        <div className={styles.error}>
        </div>
    )

    console.log(data);
    return (
        <div className={styles.round}>
            <div className={styles.quote}>
                {data.quote}
            </div>

            <AnswerList correct={data.correct} incorrect={data.incorrect}
                onCorrect={props.onCorrect} onIncorrect={props.onIncorrect} />
        </div>
    )
}


function AnswerList(props) {

    const answers = [];
    answers.push(<Answer key={props.correct} text={props.correct} onClick={props.onCorrect} />)
    for (let incorrectAnswer of props.incorrect) {
        answers.push(<Answer key={incorrectAnswer} text={incorrectAnswer} onClick={props.onIncorrect} />);
    }

    shuffle(answers);

    return (
        <div className={styles.answers}>
            {answers}
        </div>
    )
}

function Answer(props) {
    return (
        <div className={styles.answer}>
            <button onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    )
}
