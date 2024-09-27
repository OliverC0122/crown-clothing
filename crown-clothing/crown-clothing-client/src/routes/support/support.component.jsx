import QuestionCard from "../../components/question-card/question-card.component";
import "./support.styles.scss";
import { useTranslation } from "react-i18next";
const Support = () => {
    const {t} = useTranslation();

    const faqData = [
        {   
            "id": 1,
            "question": "Lorem ipsum odor amet, consectetuer adipiscing elit.",
            "answer": "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis euismod ex nostra per maecenas primis mauris nisi? Sed magna volutpat est curabitur ornare dis litora fusce maecenas. Fames inceptos senectus mollis mauris libero egestas maximus. Urna nullam fringilla dui platea neque inceptos tristique maximus. Mus sapien ipsum tortor tincidunt varius rhoncus mi elementum laoreet. Praesent luctus lacus tortor amet nisi porta inceptos tempus."
        },
        {   
            "id": 2,
            "question": "Lorem ipsum odor amet, consectetuer adipiscing elit.",
            "answer": "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis euismod ex nostra per maecenas primis mauris nisi? Sed magna volutpat est curabitur ornare dis litora fusce maecenas. Fames inceptos senectus mollis mauris libero egestas maximus. Urna nullam fringilla dui platea neque inceptos tristique maximus. Mus sapien ipsum tortor tincidunt varius rhoncus mi elementum laoreet. Praesent luctus lacus tortor amet nisi porta inceptos tempus."
        },
        {   
            "id": 3,
            "question": "Lorem ipsum odor amet, consectetuer adipiscing elit.",
            "answer": "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis euismod ex nostra per maecenas primis mauris nisi? Sed magna volutpat est curabitur ornare dis litora fusce maecenas. Fames inceptos senectus mollis mauris libero egestas maximus. Urna nullam fringilla dui platea neque inceptos tristique maximus. Mus sapien ipsum tortor tincidunt varius rhoncus mi elementum laoreet. Praesent luctus lacus tortor amet nisi porta inceptos tempus."
        },
        {   
            "id": 4,
            "question": "Lorem ipsum odor amet, consectetuer adipiscing elit.",
            "answer": "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis euismod ex nostra per maecenas primis mauris nisi? Sed magna volutpat est curabitur ornare dis litora fusce maecenas. Fames inceptos senectus mollis mauris libero egestas maximus. Urna nullam fringilla dui platea neque inceptos tristique maximus. Mus sapien ipsum tortor tincidunt varius rhoncus mi elementum laoreet. Praesent luctus lacus tortor amet nisi porta inceptos tempus."
        },

    ]


    return (
        <div className="faq-container">
            <h1 className="support-title"> {t("FAQ")}</h1>
            <div className="question-card-container">

                {faqData.map((data)=>{

                    const {id,question,answer} = data;
                    return (
                        <QuestionCard key={id} question={question} answer={answer}/>
                    )

                })}


            </div>

        </div>
    )
}

export default Support;