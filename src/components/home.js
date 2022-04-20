import React from 'react';
import Worklist from './worklist';
import Demande from './demande';
import Arrive from './arrive';

class Home extends React.Component 
{
    render() {
      return(
          <div className="App">

              <div id='Worklist' className='box'>
                  <h1>Worklist</h1>
                  <Worklist />
              </div>

              <div className='box'>
                  <h1>Patients demandés</h1>
                  <Demande />
              </div>

              <div className='box'>
                  <h1>Patients arrivés</h1>
                  <Arrive />
              </div>
        </div> 
      )
  }
}

export default Home;