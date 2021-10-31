import React, { useState } from 'react';
import Header from './Header';
import FAQ from './FAQ';

function Help (){
    const [faqs, setfaqs] = useState([
        {
          question: 'Question 1',
          answer: 'Answer 1',
          open: false
        },
        {
          question: 'Question 2',
          answer: 'Answer 2',
          open: false
        },
        {
          question: 'Question 3',
          answer: 'Answer 3',
          open: false
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index){
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }


    return (
        <div className="Help">
            <Header />
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                ))}
            </div>
        </div>
    );
}

export default Help;
