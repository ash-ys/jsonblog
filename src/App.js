
import './App.css';
import React from 'react';
import Facebook from './pages/Facebook';
import Home from './pages/Home';
import Records from './records.json';
function App() {
  return (
    <>
      <Home />
      <Facebook />
      <div className='inner'>
        {
          Records && Records.map(record=>{
            return(
              <div className='box' key={ record.id }>
                <img src={ record.icon }  alt=""/>
                <br />
                {record.caption}
              </div>
            )
          } )
        }
      </div>
    </>
  );
}

export default App;
