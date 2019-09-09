import React,{Component} from 'react';
import Aux from '../hoc/Aux';
import SideDrawer from '../components/navigation/sideDrawer/sideDrawer';
import './Layout.css';
import Toolbar from '../components/navigation/toolbar/toolbar';


class Layout extends Component{
    state = {
        showSlider : false
    }


    SideDrawerClosedHandler = () => {
       this.setState({
           showSlider: false
       })
    }

    SideDrawerOpenHandler = () =>{
        this.setState({
            showSlider: true
        })
    }
    render(props){
        return(
            <Aux>
        <Toolbar clicked={this.SideDrawerOpenHandler}/>
        <SideDrawer 
        open={this.state.showSlider} closed={this.SideDrawerClosedHandler}/>
        <main className="mainlay">
            {this.props.children}
        </main>
           </Aux>
        )
    }
} 

export default Layout;
