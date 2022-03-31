
import './File.css';
import React from 'react';
import Records from './records.json';

function File(){
    
    <div className='inner'>
    {
      Records && Records.map(record=>{
        return(
          <div className='box' key={ record.id }>
            <img src={ record.icon }  alt=""/>
            <br />
            {record.caption} by {record.name}
          </div>
        )
      } ) 
    }
 </div>};

    export default File;