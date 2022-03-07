import React from 'react'
import './styles.sass'

const Feedback = ({ message, level }) => { 
    return (
        <p className={`feedback feedback--${level}`}>{message}</p>
    )  
}

export default Feedback
