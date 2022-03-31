
import './App.css';
import React from 'react';
import Twitter from '../src/pages/Twitter'
import records from './records.json'
function App() {
  return (
    <>
     <Twitter />
     <div className="social-container">
        {records.map((data, key) => {
          return (
            <div key={key}>
              {data.text 
                }
            </div>
          );
        })}
      </div>

      <div className='inner'>
        {
          records && records.map(record=>{
            return(
              <div className='box' key={ record.id }>
                <img src={ record.link }  alt=""/>
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
