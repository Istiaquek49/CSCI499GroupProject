import React, { useState } from 'react';
import Title from '../components/title';
import FAQ from '../components/FAQ';
import Navbar from '../components/navbar';
import Header from '../components/header';

function Help (){
    const [faqs, setfaqs] = useState([
        {
          question: 'Does the price include all fees and taxes?',
          answer: 'There are no hidden fees but taxes are added when purchasing.',
          open: false
        },
        {
          question: 'What is the cancellation policy?',
          answer: 'Travelers can cancel free of charge up to 24 hours before their trip starts.',
          open: false
        },
        {
          question: 'Do I need travel insurance?',
          answer: 'Travel insurance is not required.',
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
            <Navbar/>
            <Title />
            <div style={{
                margin: '15px',
                padding: '15px',
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0,2)',
            }} className="faqs">
                {faqs.map((faq, i) => (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                ))}
            </div>
        </div>
    );
}

export default Help;
