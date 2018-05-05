import './static/css/reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route ,IndexRoute ,hashHistory, browserHistory } from 'react-router';
import Footer from './components/Footer';
import Index from './components/Index';
import Media from './components/Media';
import AboutUs from './components/AboutUs';
import JoinUs from './components/JoinUs';
import DeepVesslFFR from './components/DeepVesslFFR';
import Pacs from './components/Pacs';
import Tumor from './components/Tumor';
import Beauty from './components/Beauty';
import ispc from './components/IsPC';
if(ispc()){
    require('./static/css/pc/main.scss');
}else{
    require('./static/css/phone/common.scss');
}
const App = React.createClass({
    render(){
        return <div>
           {this.props.children}
           <Footer/>
        </div>;
    }
});

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Index}/>
            <Route path="index" component={Index}/>
            <Route path="mediaDynamics" component={Media}/>
            <Route path="aboutUs" component={AboutUs}/>
                <Route path="coreProducts/deepVesslFFR" component={DeepVesslFFR}/>
                <Route path="coreProducts/pacs" component={Pacs}/>
                <Route path="coreProducts/tumor" component={Tumor}/>
                <Route path="coreProducts/beauty" component={Beauty}/>
            <Route path="joinUs" component={JoinUs}/>
        </Route> 
    </Router>
,document.getElementById('container'));