import React from 'react'

function FAQ({faq, index, toggleFAQ}) {
    return (
        <div style={{
            width: '100%',
    maxWidth: '768px',
    margin: '0 auto',
            padding: '15px',    
        }}
            className={"faq" + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <div style={{  
                position: 'relative',
                fontSize: '20px',
                paddingRight: '80px',
            }}
                className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    )
}

export default FAQ
