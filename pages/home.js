import React from 'react'

import React from 'react'

class Home extends Component {
  render() {
      return(
          <div>
              <img src="https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png" alt="placeholder" width="690" height="420"/>
              <h1>Reservify</h1>
              <Link to="/Cart">Cart</Link><br/>
              <Link to="/Help">Help</Link><br/>
              <Link to="/About">About</Link><br/>
          </div>
      );
  }
}
export default Home;