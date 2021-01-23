import React from 'react'
import './Feedback.sass'

const Feedback = ({ message, level }) => { return <p className={`feedback feedback--${level}`}>{message}</p> }

export default Feedback
