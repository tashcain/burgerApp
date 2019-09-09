import React from 'react';
import './buildControl.css';

 const BuildControl = (props) =>(
     
 <div className ="BuildControl  ">
 <div className="Label">{props.label}</div>
 <button className="Less" disabled={props.disabled} onClick={props.reduce}>Less</button>
 <button className="More" onClick={props.added }>More</button>
</div>
)
export default BuildControl;