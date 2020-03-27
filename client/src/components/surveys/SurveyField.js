// surveyfield renders a sinls label and text input
 
import React from 'react';

export default ({ input, label, meta: { error , touched } }) => {

    return (
        <div>
            <label>{label}</label>
          <input {...input} style={{margin: '5px'}} />
          <div className = "red-text" style={{ marginBottom: '20px'}}>  {touched && error}</div>
        
        </div>
    )
}