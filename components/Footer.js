import React from "react";

function Footer() {
    return (
        <div style={footerContainer}>
            <section style={footerSubscription}>
                <p style={footerSubscriptionHeading}>
                    Join
                </p>
                <p style={footerSubscriptionText}>
                    Unscriblea at any time
                </p>
                <div >
                    <form>
                        <input type="email" name="email" placeholder="your email" />
                        
                    </form>
                </div>
            </section>
        </div>
    )
}

const footerContainer = {
    backgroundColor: '#242424',
    padding: '4px 0px 2px 0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
    minWidth: '100%'
  }

const footerSubscription = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '24px',
    padding: '24px',
    color: '#fff',
}
  
const footerSubscriptionHeading = {
    marginBottom: '24px',
    fontSize: '24px',
  }
  
const footerSubscriptionText  = {
    marginBottom: '24px',
    fontSize: '20px',
  }

export default Footer