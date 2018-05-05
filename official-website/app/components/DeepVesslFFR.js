import React from 'react';
import Nav from './Nav';
import inforIcon from '../static/img/ffr.png';
import featrue from '../static/img/ffr_fea7.png';
import platform from '../static/img/ffrpic.png';
import ispc from './IsPC';
if(ispc()){
    require('../static/css/pc/deepVesslFFR.scss');
}else{
    require('../static/css/phone/deepVesslFFR.scss');
}
const DeepVesslFFR = React.createClass({
    render(){
        window.scrollTo(0,0);
        return <div className="productPage">
            <Nav/>
            <div className="FFR">
                <div className="bannerBack">
                    <div className="bannerContent">
                        <div className="TextInfo">
                            <h1>DeepVessl FFR</h1>
                            <h2>冠状动脉生理功能评估软件</h2>
                        </div>
                        <img src={inforIcon}/>
                    </div>
                </div>
                <ProductInfo/>
                <TechPlatform/>
                <Feature/>
            </div>
        </div>;
    }
});
const ProductInfo = React.createClass({
    render(){
        return <div className="productInfo">
            <h1>为冠状动脉疾病的心肌供血的生理功能评估提供量化依据</h1>
            <p className="line"></p>
            <div className="infoContent">
                <p>DeepVesselFFR冠状动脉生理功能评估软件是一款后处理软件，基于血管造影影像数据，对有冠状动脉疾病的具有稳定临床症状的患者进行心肌缺血程度的定量分析。该软件利用医疗图像处理、人工神经网络以及血流动力学仿真模拟来提供冠状动脉狭窄程度，以及衡量心肌缺血程度的无创血流储备分数指标的定量分析。该软件分析的目的是为冠状动脉疾病的心肌供血的生理功能评估提供量化依据。</p>
            </div>
        </div>;
    }
});
const TechPlatform = React.createClass({
    render(){
        return <div className="platform">
            <h1>精致医疗云平台</h1>
            <p className="line"></p>
            <div className="platformContent">
                <img src={platform}/>
            </div>
        </div>;
    }
});
const Feature = React.createClass({
    render(){
        return <div className="featrue">
            <h1>七大特性</h1>
            <p className="line"></p>
            <div className="featrueContent">
                <ul>
                    <li>
                        <span className="featrueIcon"></span>
                        <div className="featrueText">
                            <h4>精准</h4>
                            <p>临场精准度与有创FFR的吻合度高达<span>91%</span>以上</p>
                        </div>
                    </li>
                    <li>
                        <span className="featrueIcon"></span>
                        <div className="featrueText">
                            <h4>高效</h4>
                            <p>整体运算速度仅需<span>5分钟</span>，远远低于有创检查时间</p>
                        </div>
                    </li>
                    <li>
                        <span className="featrueIcon"></span>
                        <div className="featrueText">
                            <h4>无创</h4>
                            <p>不需任何药物和有创手段，使<span>61%</span>患者避免了有创检查</p>
                        </div>
                    </li>
                    <li>
                        <span className="featrueIcon"></span>
                        <div className="featrueText">
                            <h4>智能</h4>
                            <p>采用深度学习进行结果测算，人工智能与医疗的充分结合</p>
                        </div>
                    </li>
                    <li>
                        <span className="featrueIcon"></span>
                        <div className="featrueText">
                            <h4>直观</h4>
                            <p>PC、IPAD、手机端等均可快速浏览，且可做云分享</p>
                        </div>
                    </li>
                    <li>
                        <span className="featrueIcon"></span>
                        <div className="featrueText">
                            <h4>经济</h4>
                            <p>费用只占有创检查的<span>30%</span>，大大降低患者负担</p>
                        </div>
                    </li>
                </ul>
                <div className="lastFeatrue">
                    <div className="featrueText">
                        <h4>全面</h4>
                        <p>可以观察冠脉血管的任意一点仿真FFR数值</p>
                    </div>
                    <img src={featrue}/>
                </div>
            </div>
        </div>;
    }
});
module.exports = DeepVesslFFR;