import Head from 'next/head'
import React from 'react'

const Header = () => (
  <div>
    <Head>
      <title>Reservify</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200&display=swap');
            html * { 
                margin: 0; 
                padding: 0;
                font-family: 'Roboto', sans-serif;
            }
        `}</style>
  </div>
)

export default Header