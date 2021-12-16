import React from 'react'
import Header from '../components/header'

const AllOrders = ({ orders }) => (
    <>
        <Header />
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1 style={{ marginTop: 20 }}>My Past Orders</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {orders.map(order => (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        border: '1px solid #e3e3e3',
                        boxShadow: '2px 4px 4px #e3e3e3',
                        width: 300,
                        height: 150,
                        marginTop: 40
                    }}>
                        <p style={{
                            marginTop: 5,
                            marginBottom: 5,
                            marginLeft: 10
                        }}>{`Purchased on 
                ${new Date(order.date_created).getMonth()}/${new Date(order.date_created).getDate()}/${new Date(order.date_created).getFullYear()}
                `
                            }</p>
                        <p style={{
                            marginTop: 5,
                            marginBottom: 5,
                            marginLeft: 10
                        }}>{`${order.total_item_count} item${order.total_item_count > 1 ? 's' : ''} purchased`}</p>
                        <p style={{
                            marginTop: 5,
                            marginBottom: 5,
                            marginLeft: 10
                        }}>{`Total: $${(order.price / 100).toFixed(2).toString()}`}</p>
                    </div>
                ))}
                <div style={{marginBottom: 40}}></div>
            </div>
        </div>
    </>
)

AllOrders.getInitialProps = (ctx) => {
    return ctx.query
}

export default AllOrders