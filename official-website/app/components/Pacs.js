import React from 'react';
import Nav from './Nav';
import pacs from '../static/img/PACS.png';
import plan1 from '../static/img/pacs_plan1.png';
import plan2 from '../static/img/pacs_plan2.png';
import plan3 from '../static/img/pacs_plan3.png';
import plan4 from '../static/img/pacs_plan4.png';
import ispc from './IsPC';
if(ispc()){
    require('../static/css/pc/pacs.scss');
}else{
    require('../static/css/phone/pacs.scss');
}
const Pacs = React.createClass({
    render(){
        window.scrollTo(0,0);
        return <div className="pacsPage">
            <Nav/>
            <div className="pacs">
                <div className="bannerBack">
                    <div className="bannerContent">
                        <div className="TextInfo hasP">
                            <h1>CuraCloud<br/>PACS</h1>
                            <h2>影像传输与存储系统</h2>
                            <p>满足于医疗机构、专家、患者数字化影像的上传，数据的储存和共享，建立健康档案，权威专家可对患者影像信息可通过URL调用的方式直接调用影像云平台的影像。<br/>
云PACS以技术创新为核心，响应国家分级诊疗政策，打造以影像服务为驱动的高价值医疗新生态。</p>
                        </div>
                        <img src={pacs}/>
                    </div>
                </div>
                <Featrue/>
                <CustomizedSolutions/>
            </div>
        </div>;
    }
});
const Featrue = React.createClass({
    render(){
        return <div className="featrue">
            <div className="featrueContent">
                <ul>
                    <li>
                        <span className="featrueIcon"></span>
                        <div className="featrueText">
                            <h4>安全</h4>
                            <p>符合HIPPA标准，数据加密传输，可实现上传前自动匿名处理、保护病人隐私</p>
                        </div>
                    </li>
                    <li>
                        <span className="featrueIcon"></span>
                        <div className="featrueText">
                            <h4>高效</h4>
                            <p>超高图像压缩比，最高支持16位灰度，影像最大压缩比达20倍</p>
                        </div>
                    </li>
                    <li>
                        <span className="featrueIcon"></span>
                        <div className="featrueText">
                            <h4>兼容</h4>
                            <p>支持通用DICOM格式，支持第三方Web系统通过URL调用影像云平台的影像</p>
                        </div>
                    </li>
                    <li>
                        <span className="featrueIcon"></span>
                        <div className="featrueText">
                            <h4>开放</h4>
                            <p>支持数据分级共享，远程诊断、分级医疗</p>
                        </div>
                    </li>
                    <li>
                        <span className="featrueIcon"></span>
                        <div className="featrueText">
                            <h4>专业</h4>
                            <p>深度学习核心技术，多项专利技术保障上传／下载速率</p>
                        </div>
                    </li>
                    <li>
                        <span className="featrueIcon"></span>
                        <div className="featrueText">
                            <h4>无缝连接</h4>
                            <p>可以通过电脑、平板、手机登录平台，实现三方互联</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>;
    }
});
const CustomizedSolutions = React.createClass({
    render(){
        return <div className="customizedSolutions">
            <h1>定制化解决方案</h1>
            <ul className="solutionContent">
                <li>
                    <img src={plan1}/>
                    <div className="textBox">
                        <p className="title">区域共有云</p>
                        <p>实现区域内影像数据共享，<br/>
                        满足分级诊疗及远程会诊需求</p>
                    </div>
                </li>
                <li>
                    <img src={plan2}/>
                    <div className="textBox">
                        <p className="title">线上诊疗影像支持</p>
                        <p>为互联网健康平台提供影像解决方案，<br/>
                        满足线上阅片及影像处理需求</p>
                    </div>
                </li>
                <li>
                    <img src={plan3}/>
                    <div className="textBox">
                        <p className="title">独立医学影像中心</p>
                        <p>支持DR、CT、MRICT等影像上传到云端，<br/>
                        满足数据存储需求。</p>
                    </div>
                </li>
                <li>
                    <img src={plan4}/>
                    <div className="textBox">
                        <p className="title">区域私有云</p>
                        <p>可连接院内影像科室与各临床科室，<br/>
                        满足移动阅片及专家会诊需求。</p>
                    </div>
                </li>
            </ul>
        </div>;
    }
});
module.exports = Pacs;