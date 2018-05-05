import React from 'react';
import Nav from './Nav';
import mediaData from '../static/html/mediaData';
import ispc from './IsPC';
if(ispc()){
    require('../static/css/pc/media.scss');
}else{
    require('../static/css/phone/media.scss');
}

const Media = React.createClass({
    getInitialState(){
        return {page: 0}
    },
    isOn(index){
        return index === this.state.page ? 'on' : '';
    },
    componentDidUpdate(){
        let len = Math.ceil(mediaData.length/6);
        let Index = this.state.page;
        let prev = document.getElementById('prev');
        let next = document.getElementById('next');
        prev.style.display = 'inline-block';
        next.style.display = 'inline-block';
        if(Index==0){
            prev.style.display = 'none';
        }else if(Index==len-1){
            next.style.display = 'none';
        }
    },
    render(){
        window.scrollTo(0,0);
        let len = Math.ceil(mediaData.length/5);
        let page = [];
        for(let i=0;i<len;i++){
            page.push(i+1);
        }
        let Index = this.state.page;
        return <div>
            <Nav/>
            <div className="media">
                <h1>{ispc() ? "媒体动态" : "新闻动态"}</h1>
                {ispc()? <MediaPC/> : <MediaPhone/>}
                <ul className="mediaList">
                    {mediaData.map((item,index)=>{
                        if(index>=Index*6 && index<(Index+1)*6){
                            return <List key={index} data={item} />
                        }
                    })}
                </ul>
                <ul className="pageIndex">
                    <li id="prev" onClick={()=>{ this.setState({ page : Index-1})}}>&lt;</li>
                    {page.map((Page,index)=>{
                        return <li key={index} onClick={() => { this.setState({ page : index}) } } className={this.isOn(index)}>{Page}</li>
                    })}
                    <li id="next" onClick={()=>{ this.setState({ page : Index+1})}}>&gt;</li>
                </ul>
            </div>
        </div>;
    }
});
const MediaPhone = React.createClass({
    slide(){
        let Index = this.state.index;
        this.state.timer = setInterval(()=>{
            Index ++;
            if(Index>2){
                Index = 0;
            }
            this.setState({index: Index});
        },3000);
    },
    getInitialState(){
        return {index: 0,timer: false}
    },
    ison(Index){
        if(Index == this.state.index){
            return 'on';
        }else{
            return '';
        }
    },
    componentWillUnmount(){
        if(this.state.timer){
            clearInterval(this.state.timer);
        }
    },
    componentDidUpdate(){
        if(this.state.timer){
            clearInterval(this.state.timer);
            this.slide();
        }
    },
    componentDidMount(){
        this.slide();
    },
    render(){
        let indexArr = [0,1,2];
        return <div className="imgNews">
            <ul className="imgContent">
                <li className={this.ison(0)}>
                    <img src="../app/static/img/news1.jpg"/>
                    <p>DeepVessl FFR进去临床试验阶段,开启无创时代</p>
                </li>
                <li className={this.ison(1)}>
                    <img src="../app/static/img/news2.jpg"/>
                    <p>瞄准大医疗领域的人工智能市场，正研究如何将深度学习应用到医疗场景</p>
                </li>
                <li className={this.ison(2)}>
                    <img src="../app/static/img/news3.jpg"/>
                    <p>为百万肿瘤患者提供精准放疗方案，连心医疗让放疗科医生工作更高效</p>
                </li>
            </ul>
            <ul className="imgIndex">
                {indexArr.map((idx)=>{
                    return <li key={idx} className={this.ison(idx)} onClick={()=>{this.setState({index: idx})}}></li>
                })}
            </ul>
        </div>;
    }
});
const MediaPC = React.createClass({
    render(){
        return <div className="imgNews">
            <div className="left">
                <img src="../app/static/img/news1.jpg"/>
                <p>DeepVessl FFR进去临床试验阶段,开启无创时代</p>
            </div>
            <ul className="right">
                <li>
                    <img src="../app/static/img/news2.jpg"/>
                    <p>瞄准大医疗领域的人工智能市场，正研究如何将深度学习应用到医疗场景</p>
                </li>
                <li>
                    <img src="../app/static/img/news3.jpg"/>
                    <p>为百万肿瘤患者提供精准放疗方案，连心医疗让放疗科医生工作更高效</p>
                </li>
            </ul>
        </div>;
    }
});
const List = React.createClass({
    render(){
        let imgurl = this.props.data.img;
        let title = this.props.data.title;
        let date = this.props.data.date;
        let detail = this.props.data.details;
        if(ispc()){
            return <li>
                <div className="newsImg">
                    <img src={imgurl}/>
                </div>
                <div className="newsText">
                    <p className="title">{title}</p>
                    <p className="detail">{detail}</p>
                    <p className="date">{date}</p>
                </div>
            </li>;
        }else{
            return <li>
                <div className="newsText">
                    <p className="title">{title}</p>
                    <p className="date">{date}</p>
                </div>
                <div className="newsImg">
                    <img src={imgurl}/>
                </div>
            </li>;
        }
        
    }
});
module.exports = Media;