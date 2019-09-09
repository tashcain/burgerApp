 import React from 'react';
 import Logo from '../../logo/logo';
 import NavigationItems from '../navigationItems/navigationItems';
 import './sideDrawer.css';
 import Backdrop from '../../UI/backdrop/backdrop';
 import Aux from '../../../hoc/Aux';


 export default function SideDrawer(props) {
     let attachedClasses = ["SideDrawer", "Close"];
     
     if(props.open){
        attachedClasses = ["SideDrawer", "Open"];
     }
     return (
         <Aux>
         <Backdrop show={props.open} clicked={props.closed}/>
       <div className={attachedClasses.join(' ')}>
            <Logo height='11%'/>
            <nav className="navitems">
                <NavigationItems/>
            </nav>
       </div> 
         </Aux>
     );
 }
 