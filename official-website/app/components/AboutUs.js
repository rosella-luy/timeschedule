import React from 'react';
import Nav from './Nav';
import doctor from '../static/img/doctor.jpg';
import position from '../static/img/position.png';
import ispc from './IsPC';
let us;
if(ispc()){
    require('../static/css/pc/aboutus.scss');
    us = require('../static/img/aboutbanner.png');
}else{
    require('../static/css/phone/aboutus.scss');
    us = require('../static/img/aboutus.jpg');
}
const AboutUs = React.createClass({
    render(){
        window.scrollTo(0,0);
        return <div>
            <Nav/>
            <div className="aboutUs">
                <div className="bannerBox">
                    <img className="banner" src={us}/>
                    <h1>Towards Better Healthcare</h1>
                </div>
                <div className="content" id="contentBox">
                    <Company/>
                    <Team/>
                    <ConcatUs/>
                </div>
            </div>
        </div>;
    }
});
const Company = React.createClass({
    render(){
        return <div className="introCompany">
                <h1>公司简介</h1>
                <div className="inforCompany">
                    <p>北京昆仑医云科技有限公司成立于2016年1月,公司借助领先的互联网技术及医疗行业专业背景，通过计算机视觉、深度学习及基因分析算法等方法为医生提供病人数据精准分析服务，提高诊断精度，制定了个体化治疗方案，提升医疗服务水平。其核心团队为20位留美博士组成，在深度学习算法，医学影像分析算法，基因分析算法等方面拥有着世界一流的技术，并有着成功转化成熟产品的能力。目前产品经过美国康奈尔大学、北卡大学、中科院、以及国内多家知名三甲医院验证并开展科研合作，拥有广阔的市场前景。</p>
                </div>
            </div>;
    }
});
const Team = React.createClass({
    componentDidMount(){
        let width = document.getElementById('listBox').clientWidth;
        let oul = document.getElementById('listBox').getElementsByTagName('ul')[0];
        let olis = oul.getElementsByTagName('li');
        let len = olis.length;
        if(ispc()){
            oul.style.width = width * 0.34 * len + 'px';
            for(let i=0;i<len;i++){
                olis[i].style.width = width*0.32 + 'px'; 
                if((i+1)%3 != 0){
                    olis[i].style.marginRight = width* 0.02 + 'px';
                }else{
                    olis[i].style.marginRight = '1px';
                }
            }
        }else{
            oul.style.width = width * len + 'px';
            for(let i=0;i<len;i++){
                olis[i].style.width = width*0.8 + 'px'; 
                olis[i].style.margin = '0 ' + width* 0.1 + 'px';
            }
        }
    },
    slider(event){
        let item = event.target;
        let width = document.getElementById('listBox').clientWidth;
        let oul,move;
        if(item.id == 'prev'){
            oul = item.nextSibling.getElementsByTagName('ul')[0];
            move = width;
        }else if(item.id =='next'){
            oul = item.previousSibling.getElementsByTagName('ul')[0];
            move = -width;
        }
        let left = parseInt(oul.style.marginLeft);
        let oulWidth = parseFloat(oul.style.width);
        if((left+move)<0 && Math.abs(left + move) < oulWidth){
            oul.style.marginLeft = left + move + 'px';
        }
    },
    render(){
        return <div className="introTeam" id="teamBox">
                <h1>团队介绍</h1>
                <p id="prev" onClick={this.slider}>&lt;</p>
                <div id="listBox">
                    <ul className="doctorList" style={{'margin-left':0}}>
                    <li>
                        <div className="doctorPhoto"><img src={doctor}/></div>
                        <h4>XX博士</h4>
                        <h6>英国皇家学会院士、法国国家科学研究院教授</h6>
                        <p>xx先后在剑桥大学、巴斯德研究所和英国帝国癌症研究基   金会的机构从事基因组学相关研究，在细胞发育和肿瘤发生相关基因调控机制、人类X染色体失活、染色体三维构象与疾病发生等领域具有国际领先的研究水平。</p>
                    </li>
                    <li>
                        <div className="doctorPhoto"><img src={doctor}/></div>
                        <h4>XX博士</h4>
                        <h6>英国皇家学会院士、法国国家科学研究院教授</h6>
                        <p>xx先后在剑桥大学、巴斯德研究所和英国帝国癌症研究基   金会的机构从事基因组学相关研究，在细胞发育和肿瘤发生相关基因调控机制、人类X染色体失活、染色体三维构象与疾病发生等领域具有国际领先的研究水平。</p>
                    </li>
                    <li>
                        <div className="doctorPhoto"><img src={doctor}/></div>
                        <h4>XX博士</h4>
                        <h6>英国皇家学会院士、法国国家科学研究院教授</h6>
                        <p>xx先后在剑桥大学、巴斯德研究所和英国帝国癌症研究基   金会的机构从事基因组学相关研究，在细胞发育和肿瘤发生相关基因调控机制、人类X染色体失活、染色体三维构象与疾病发生等领域具有国际领先的研究水平。</p>
                    </li>
                    <li>
                        <div className="doctorPhoto"><img src={doctor}/></div>
                        <h4>XX博士</h4>
                        <h6>英国皇家学会院士、法国国家科学研究院教授</h6>
                        <p>xx先后在剑桥大学、巴斯德研究所和英国帝国癌症研究基   金会的机构从事基因组学相关研究，在细胞发育和肿瘤发生相关基因调控机制、人类X染色体失活、染色体三维构象与疾病发生等领域具有国际领先的研究水平。</p>
                    </li>
                    <li>
                        <div className="doctorPhoto"><img src={doctor}/></div>
                        <h4>XX博士</h4>
                        <h6>英国皇家学会院士、法国国家科学研究院教授</h6>
                        <p>xx先后在剑桥大学、巴斯德研究所和英国帝国癌症研究基   金会的机构从事基因组学相关研究，在细胞发育和肿瘤发生相关基因调控机制、人类X染色体失活、染色体三维构象与疾病发生等领域具有国际领先的研究水平。</p>
                    </li>
                    <li>
                        <div className="doctorPhoto"><img src={doctor}/></div>
                        <h4>XX博士</h4>
                        <h6>英国皇家学会院士、法国国家科学研究院教授</h6>
                        <p>xx先后在剑桥大学、巴斯德研究所和英国帝国癌症研究基   金会的机构从事基因组学相关研究，在细胞发育和肿瘤发生相关基因调控机制、人类X染色体失活、染色体三维构象与疾病发生等领域具有国际领先的研究水平。</p>
                    </li>
                    <li>
                        <div className="doctorPhoto"><img src={doctor}/></div>
                        <h4>XX博士</h4>
                        <h6>英国皇家学会院士、法国国家科学研究院教授</h6>
                        <p>xx先后在剑桥大学、巴斯德研究所和英国帝国癌症研究基   金会的机构从事基因组学相关研究，在细胞发育和肿瘤发生相关基因调控机制、人类X染色体失活、染色体三维构象与疾病发生等领域具有国际领先的研究水平。</p>
                    </li>
                    <li>
                        <div className="doctorPhoto"><img src={doctor}/></div>
                        <h4>XX博士</h4>
                        <h6>英国皇家学会院士、法国国家科学研究院教授</h6>
                        <p>xx先后在剑桥大学、巴斯德研究所和英国帝国癌症研究基   金会的机构从事基因组学相关研究，在细胞发育和肿瘤发生相关基因调控机制、人类X染色体失活、染色体三维构象与疾病发生等领域具有国际领先的研究水平。</p>
                    </li>
                    </ul>
                </div>
                <p id="next" onClick={this.slider}>&gt;</p>
            </div>;
    }
});
const ConcatUs = React.createClass({
    render(){
        return <div className="concatUs">
                <h1>联系我们</h1>
                <div>
                    <div className="fatherBox">
                        <div className="floatBox inforC">
                            <h4>北京总部</h4>
                            <p>电话：XXXXXXXXXXX</p>
                            <p>邮箱：info@curacloudcorp.com</p>
                            <p>地址：北京市东城区小牌坊胡同甲七号 银河SOHO C座</p>
                        </div>
                        <div className="addressImg">
                            <img src={position}/>
                        </div>
                    </div>
                    <div className="fatherBox">
                        <div className="floatBox inforC">
                            <h4>深圳分部</h4>
                            <p>电话：XXXXXXXXXXX</p>
                            <p>邮箱：info@curacloudcorp.com</p>
                            <p>地址：深圳市xx区xx路xx街道xx大厦</p>
                        </div>
                        <div className="addressImg">
                            <img src={position}/>
                        </div>
                    </div>
                </div>
            </div>;
    }
});
module.exports = AboutUs;