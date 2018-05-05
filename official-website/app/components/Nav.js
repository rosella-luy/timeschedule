import React from 'react';
import {Link} from 'react-router';
import ispc from './IsPC';
import navData from '../static/html/navData';
import logo from '../static/img/logo.png';
import menu from '../static/img/menu.png'
if(ispc()){
    require('../static/css/pc/nav.scss');
}else{
    require('../static/css/phone/nav.scss');
}
const Header = React.createClass({
    componentDidMount(){
        window.onscroll = function(){
            if(window.scrollY>10){
                document.getElementById('header').setAttribute('class','scroll');
            }else{
                document.getElementById('header').setAttribute('class','');
            }
        };
    },
    getInitialState(){
        return {isShow: false};
    },
    handleClick(){
        let show = !this.state.isShow;
        this.setState({isShow: show});
    },
    isshow(){
        let body = document.body;
        if(this.state.isShow){
            body.style.overflowY = 'hidden';
            return 'show navList';
        }else{
            body.style.overflowY = 'auto';
            return 'navList';
        }
    },
    render(){
        if(ispc()){
            return <header id="header">
                <div className="headerBox">
                    <div className="logo"><img src={logo}/></div>
                    <Nav data={navData} _this={this} cName='navList'/>
                </div>
            </header>;
        }else{
            return <header id="header">
                <div className="logo">
                    <Link to="/index"><img className="logoIcon" src={logo}/></Link>
                    <img className="menuIcon" onClick={this.handleClick} src={menu}/>
                </div>
                <Nav data={navData} _this={this} cName={this.isshow()}/>
            </header>;
        }  
    }
});
const Nav = React.createClass({
    getInitialState(){
        let data = this.props.data;
        let names = this.getKeys(data);
        return {Index: 0,nextIndex: -1,items:data[names[0]].items}
    },
    isClicked(index){
        if(this.state.Index == 1){
            return index === this.state.Index ? 'onclick hasNext' : '';
        }else{
            return index === this.state.Index ? 'onclick' : '';
        }
    },
    isNextClicked(index){
        return index === this.state.nextIndex ? 'onclick' : '';
    },
    getKeys(obj){
        let result = [];
        for(let item in obj){
            result.push(item);
        }
        return result;
    },
    componentWillMount(){
        let page = window.location.hash.split('#')[1];
        let data = this.props.data;
        this.getHrefs(data,page);
    },
    getHrefs(obj,page,prevIndex){
        let names = this.getKeys(obj);
        let len = page.split('/').length;
        names.map((name,index)=>{
            let href = obj[name].href;
            if(len==2){
                if(obj[name].href==page){
                    this.state.Index = index;
                }
            }else if(len==3){
                if(!prevIndex){
                    let item = obj[name].items;
                    if(this.getKeys(item).length>0){
                        this.getHrefs(item,page,index);
                    }
                }else{
                    this.state.Index = -1;
                    this.state.items = '';
                    if(obj[name].href==page){
                        this.state.nextIndex = index;
                    }
                }
            }
        });
    },
    render(){
        let className = this.props.className;
        let data = this.props.data;
        let names = this.getKeys(data);
        if(ispc()){
            return <div className={this.props.cName}><ul className='nav'>
                    {names.map((name,index)=>{
                        return <li key={index} onClick={() => {this.setState({ Index : index,nextIndex : -1,items: data[name].items});this.props._this.setState({isShow: false})}} className={this.isClicked(index)}>
                            <Link to={data[name].href}>{name}</Link>
                        </li>;})}
                </ul>
                <ul className='nextNav'>
                    {this.getKeys(this.state.items).map((name,index)=>{
                        return <li key={index} onClick={() => { this.setState({Index : -1,nextIndex : index ,items: ''}) }} className={this.isNextClicked(index)}><Link to={this.state.items[name].href}><span className="icons"></span>{name}</Link></li>;
                    })}
                </ul>
            </div>;
        }else{
            let height = window.innerHeight - 50;
            return <div className={this.props.cName}>
                <ul className='nav' style={{height: height}}>
                    {names.map((name,index)=>{
                        if(index!=0){
                            return <li key={index} onClick={() => {this.setState({ Index : index,nextIndex : -1,items: data[name].items});this.props._this.setState({isShow: false})}} className={this.isClicked(index)}>
                                <Link to={data[name].href}>{name}</Link>
                                <ul className='nextNav'>
                                    {this.getKeys(data[name].items).map((name1,index)=>{
                                        return <li key={index} onClick={() => { this.setState({Index : -1,nextIndex : index ,items: ''}) }} className={this.isNextClicked(index)}><Link to={data[name].items[name1].href}><span className="icons"><img src={require('../static/img/menuicon'+(index+1)+'.png')}/></span>{name1}</Link></li>;
                                    })}
                                </ul>
                            </li>;
                        }
                    })}
                </ul>
            </div>;
        }
    }
});
module.exports = Header;