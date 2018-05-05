import React from 'react';
import Nav from './Nav';
import joinUsData from '../static/html/recruitment.js';
import ispc from './IsPC';
let joinus;
if(ispc()){
    require('../static/css/pc/joinUs.scss');
    joinus = require('../static/img/joinbanner.png');
}else{
    require('../static/css/phone/joinUs.scss');
    joinus = require('../static/img/joinus.jpg');
}

const JoinUs = React.createClass({
    render(){
        window.scrollTo(0,0);
        return <div>
            <Nav/>
            <div className="joinUs">
                <div className="banner">
                    <img src={joinus}/>
                    <h1>加入我们</h1>
                </div>
                <Recruitment data={joinUsData}/>
            </div>
        </div>;
    }
});
const Recruitment = React.createClass({
    getInitialState(){
        let data = this.props.data;
        let names = this.getKeys(data);
        return {Index: 0, Item:data[names[0]]};
    },
    getKeys(obj){
        let result = [];
        for(let item in obj){
            result.push(item);
        }
        return result;
    },
    render(){
        let data = this.props.data;
        let names = this.getKeys(data);
        return <div className="recruitment">
            <div className="sideBar">
                <ul className="recruitmentNav">
                    <li className={(this.state.Index == 0)?'on':''} onClick={()=>{this.setState({Index: 0,Item: data[names[0]]})}}>市场类</li>
                    <li className={(this.state.Index == 1)?'on':''} onClick={()=>{this.setState({Index: 1,Item: data[names[1]]})}}>招商类</li>
                    <li className={(this.state.Index == 2)?'on':''} onClick={()=>{this.setState({Index: 2,Item: data[names[2]]})}}>技术类</li>
                    <li className={(this.state.Index == 3)?'on':''} onClick={()=>{this.setState({Index: 3,Item: data[names[3]]})}}>文职类</li>
                </ul>
            </div>
            <RecruitmentContent data={this.state.Item}/>
        </div>;
    }
});
const RecruitmentContent = React.createClass({
    render(){
        let box = document.getElementsByClassName('contentBox');
        for(let i=0;i<box.length;i++){
            if(i==0){
                box[i].style.height = 'auto';
                box[i].previousSibling.childNodes[0].childNodes[0].className = 'on';
            }else{
                box[i].style.height = 0;
                box[i].previousSibling.childNodes[0].childNodes[0].className = '';
            }
        }
        let data = this.props.data;
        return <div className="recruitmentContent">
            {data.map((item,index)=>{
                return <div key={index} className="recruitmentLine">
                    <div className="titleBox">
                        <p><span className={(index==0)?'on':''} onClick={(event)=>{
                            let name = 'on',height = 'auto';
                            if(event.target.className == 'on'){
                               name = ''; 
                               height = 0;
                            }
                            
                            event.target.className = name;
                            event.target.parentNode.parentNode.nextSibling.style.height = height;
                        }}></span>职位：{item.name}</p>
                        <p>人数：{item.num}</p>
                        <p className="date">{item.date}</p>
                    </div>
                    <div className="contentBox">
                        <p>工作地点：{item.address}</p>
                        <p>岗位职责：</p>
                        {item.responsibility.map((item,index)=>{
                            index += 1;
                            return <p key={index}>{index}、{item}</p>;
                        })}
                        <p>职位要求：</p>
                        {item.claim.map((item,index)=>{
                            index += 1;
                            return <p key={index}>{index}、{item}</p>;
                        })}
                    </div>
                </div>;
            })}
        </div>;
    }
});
module.exports = JoinUs;