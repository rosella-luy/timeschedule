import React from 'react';
import Nav from './Nav';
import beautyIcon from '../static/img/beautyIcon.png';
import beautyEG from '../static/img/eg.png';
import report1 from '../static/img/1P.png';
import report2 from '../static/img/2P.png';
import report3 from '../static/img/report2.png';
import service1 from '../static/img/beautiful_fea1.png';
import service2 from '../static/img/beautiful_fea2.png';
import service3 from '../static/img/beautiful_fea3.png';
import service4 from '../static/img/beautiful_fea4.png';
import ispc from './IsPC';
if(ispc()){
    require('../static/css/pc/beauty.scss');
}else{
    require('../static/css/phone/beauty.scss');
}
const Beauty = React.createClass({
    render(){
        window.scrollTo(0,0);
        return <div className="beautyPage">
            <Nav/>
            <div className="beauty">
                <div className="bannerBack">
                    <div className="bannerContent">
                        <div className="TextInfo">
                            <h1>云容月貌</h1>
                            <h2>个性化科技美容定制方案</h2>
                        </div>
                        <img src={beautyIcon}/>
                    </div>
                </div>
                <Detection/>
                <Detection1/>
                <Detection2/>
                <ReportEg/>
                <CustomizedService/>
            </div>
        </div>;
    }
});
const Detection = React.createClass({
    render(){
        return <div className="detectionBox">
            <div className="Box">
                <div className="boxLeft">
                    <h2>基因层面的护肤保养秘笈</h2>
                    <h1>美容基因检测</h1>
                    <p className="line"></p>
                    <div className="boxContent">
                        <p>不同的基因表达类型决定着不同的皮肤特质和身体循环特点，美容美肤相关的产品和服务机构，可结合基因检测结果为客户进行科学的护肤指导和消费引导，实现个体化的健康、美容、护肤，使您越来越美丽、迷人。</p>
                    </div>
                </div>
                <ul className="boxRight">
                    <li>
                        <p><h3>部分基因<br/>表征库举例</h3></p>
                    </li>
                    <li>
                        <p>
                            <h3>抗氧抗衰</h3>
                            <h5>抗氧化指数、抗衰老指数</h5>
                        </p>
                    </li>
                    <li>
                        <p>
                            <h3>日常保养</h3>
                            <h5>炎症风险、抗皱指数</h5>
                        </p>
                    </li>
                    <li>
                        <p>
                            <h3>肤质肤色</h3>
                            <h5>晒黑风险、胶原蛋白降解速度</h5>
                        </p>
                    </li>
                </ul>
            </div>
        </div>;
    }
});
const Detection1 = React.createClass({
    render(){
        return <div className="detectionBox blueBack">
            <div className="Box boxheight">
                <div className="boxLeft">
                    <h2>表皮细胞层面的护肤保养秘笈</h2>
                    <h1>脂质检测</h1>
                    <p className="line"></p>
                    <div className="boxContent">
                        <p>脂质和角质层细胞是水泥与砖块的关系。致密有序的脂质可以防止有害物质入侵，锁住肌肤水份，保持皮肤紧凑。可结合脂质检测结果，为客户进行科学的护肤指导，定期检测您的肌肤状态，让您拥有令人艳羡的“冻龄”美肌。</p>
                    </div>
                </div>
                <div className="imgRight">
                    <h5>部分表征库举例</h5>
                    <img src={beautyEG}/>
                    <p>
                        <span>抵制有害物质入侵</span>
                        <span>保湿锁水</span>
                        <span>紧致肌肤</span>
                    </p>
                </div>
            </div>
        </div>;
    }
});
const Detection2 = React.createClass({
    render(){
        if(ispc()){
            return <div className="detectionBox">
                <div className="Box serviceProcess">
                    <h1>服务流程</h1>
                    <p className="line"></p>
                    <ul>
                        <li>订购您的<br/>Skingene<sup>TM</sup>套装</li>
                        <li className="nextImg">
                            <span></span>
                        </li>
                        <li>收集<br/>样品</li>
                        <li className="nextImg">
                            <span></span>
                        </li>
                        <li>获取您的<br/>个性化报告</li>
                        <li className="nextImg">
                            <span></span>
                        </li>
                        <li>免费咨询<br/>个性化建议</li>   
                    </ul>
                </div>
            </div>;
        }else{
            return <div className="detectionBox">
                <div className="Box serviceProcess">
                    <h1>服务流程</h1>
                    <p className="line"></p>
                    <ul>
                        <li><p><span>订购您的<br/>Skingene<sup>TM</sup>套装</span></p></li>
                        <li><p><span>收集<br/>样品</span></p></li>
                        <li><p><span>获取您的<br/>个性化报告</span></p></li>
                        <li><p><span>免费咨询<br/>个性化建议</span></p></li>   
                    </ul>
                </div>
            </div>;
        }
        
    }
});
const ReportEg = React.createClass({
    getInitialState(){
        return {Index: 1}
    },
    componentDidMount(){
        if(!ispc()){
            let width = window.innerWidth;
            let focus = document.getElementById('focus');
            let wrapper = document.getElementById('wrapper');
            let imgs = wrapper.getElementsByTagName('img');
            for(let i=0;i<imgs.length;i++){
                imgs[i].style.width = width * 0.49 + 'px';
                if(i<imgs.length-1){
                    imgs[i].style.marginRight = width * 0.08 + 'px';
                }
            }
            focus.style.width = width * 0.51 + 'px';
            wrapper.style.width = width * 1.67 + 'px';
            wrapper.style.marginLeft = -width * 0.325 + 'px';
        }
    },
    setGPS(index){
        let Index = this.state.Index;
        let prev = index+1>2? 0 : index+1;
        let next = index-1<0? 2 : index-1;
        if(index == Index){
            return 'focus';
        }else if(prev == Index){
            return 'prev';
        }else if(next == Index){
            return 'next';
        }
    },
    handleClick(event){
        let obj = event.target;
        let name = obj.getAttribute('class');
        let index = this.state.Index;
        if(name == 'next'){
            index--;
            if(index<0){
                index = 2;
            }
        }else if(name == 'prev'){
            index++;
            if(index>2){
                index = 0;
            }
        }
        this.setState({Index: index});
    },
    render(){
        return <div className="detectionBox">
            <div className="Box reportEg">
                <h1>基因检测报告示例</h1>
                <p className="line"></p>
                <div id="imgActive" className="imgActive">
                    <div className="reportContent dg-wrapper" id="wrapper">
                        <img id={this.setGPS(0)} src={report3}/>
                        <img id={this.setGPS(1)} src={report1}/>
                        <img id={this.setGPS(2)} src={report2}/>
                    </div>
                    <nav>
                        <div className="prev" onClick={this.handleClick}></div>
                        <div className="next" onClick={this.handleClick}></div>
                    </nav>
                </div> 
            </div>
            <div className="cover"></div>
        </div>;
    }
});
const CustomizedService = React.createClass({
    render(){ 
        return <div className="detectionBox">
            <div className="Box customizedService">
                <h2>私人专属美肌秘诀</h2>
                <h1>科技美容个性化定制服务</h1>
                <p className="line"></p>
                <div className="serviceContent">
                    <div className="contentLine"> 
                        <div className="serviceItem"> 
                            <div className="leftImg"><img src={service1}/></div>
                            <div className="textContent">
                                <h3>护肤品推荐</h3>
                                <p>根据您的基因和脂质检测报告，我们为您推荐适合您的专属护肤产品。您可以自行指定品牌系列产品，也可接受我们为您推荐的优质产品。</p>
                            </div>
                        </div>
                        <div className="serviceItem"> 
                            <div className="leftImg"><img src={service2}/></div>
                            <div className="textContent">
                                <h3>营养化方案</h3>
                                <p>根据您的基因型，结合您的年龄、身体情况、工作及运动目标对营养元素的需要，提供真正个性化的精准膳食方案。</p>
                            </div>
                        </div>
                    </div>
                    <div className="contentLine"> 
                        <div className="serviceItem"> 
                            <div className="leftImg"><img src={service3}/></div>
                            <div className="textContent">
                                <h3>生活方案</h3>
                                <p>针对您的基因检测报告及脂质检测报告，我们帮助您检视自身的生活习惯，真正让您的肌肤散发出从内到外的自然美丽。</p>
                            </div>
                        </div>
                        <div className="serviceItem"> 
                            <div className="leftImg"><img src={service4}/></div>
                            <div className="textContent">
                                <h3>健身方案</h3>
                                <p>生命在于运动，生命不息，运动不止。肌肤的状况是身体状态的综合反应。科学健康的健身方案，帮助您从根本上调养身体状态。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
});
module.exports = Beauty;