import React from 'react'
import Header from '../components/header'

const OrderComplete = (info) => (
    <>
        <Header />
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1 style={{
                marginTop: 20
            }}>Thanks for you order!</h1>
            <p style={{
                marginTop: 20
            }}>We hope you enjoy your activities and thanks again for using Reservify.</p>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                border: '1px solid #e3e3e3',
                boxShadow: '2px 4px 4px #e3e3e3',
                width: 300,
                height: 250,
                marginTop: 40
            }}>
                <p style={{
                    marginTop: 5,
                    marginBottom: 5,
                    marginLeft: 10
                }}>{`Purchased on 
                ${new Date(info.date_created).getMonth()}/${new Date(info.date_created).getDate()}/${new Date(info.date_created).getFullYear()}
                `
                    }</p>
                <p style={{
                    marginTop: 5,
                    marginBottom: 5,
                    marginLeft: 10
                }}>{`${info.total_item_count} item${info.total_item_count > 1 ? 's' : ''} purchased`}</p>
                <p style={{
                    marginTop: 5,
                    marginBottom: 5,
                    marginLeft: 10
                }}>{`Total: $${(info.price / 100).toFixed(2).toString()}`}</p>
            </div>
        </div>
    </>
)

OrderComplete.getInitialProps = (ctx) => {
    return ctx.query
}

export default OrderComplete