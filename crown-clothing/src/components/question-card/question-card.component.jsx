import {useState} from 'react';
import "./question-card.styles.scss"



const QuestionCard = ({question, answer}) => {

    const[isOpen,setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <div className='question-card-item'>
            <div className='question' onClick={toggleOpen}>
                <h3>{question}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && 
            <div className='answer'>
                <p>{answer}</p>
            </div>
            }
        </div>
        )
}

export default QuestionCard;