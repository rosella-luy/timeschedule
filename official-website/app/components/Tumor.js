import React from 'react';
import Nav from './Nav';
import gane from '../static/img/gane.png';
import detection from '../static/img/gane_fea1.png';
import detection1 from '../static/img/gane_fea2.png';
import detection2 from '../static/img/gane_fea3.png';
import ispc from './IsPC';
if(ispc()){
    require('../static/css/pc/tumor.scss');
}else{
    require('../static/css/phone/tumor.scss');
}
const Tumor = React.createClass({
    render(){
        window.scrollTo(0,0);
        return <div className="tumorPage">
            <Nav/>
            <div className="tumor">
                <div className="bannerBack">
                    <div className="bannerContent">
                        <div className="TextInfo hasP">
                            <h1>CuraCloud</h1>
                            <h2>肿瘤基因检测</h2>
                            <p>基因测序技术应用需要对海量、复杂、多变的数据进行分析计算，因此需要高性能计算机来进行基因数据的统计和分析。公司建立了与高通量测序平台相匹配的高性能计算平台，具有强大的数据储存和处理能力，并通过一系列硬件、软件及其他相关措施为您的数据分析提供支持和保障。</p>
                        </div>
                        <img src={gane}/>
                    </div>
                </div>
                <Detection1/>
                <Detection2/>
                <Detection3/>
            </div>
        </div>;
    }
});
const TechPlatform = React.createClass({
    render(){
        return <div className="techPlatform">
            <h1>技术平台</h1>
            <div className="platformContent">
                <img src={platform}/>
                <p>基因测序技术应用需要对海量、复杂、多变的数据进行分析计算，因此需要高性能计算机来进行基因数据的统计和分析。公司建立了与高通量测序平台相匹配的高性能计算平台，具有强大的数据储存和处理能力，并通过一系列硬件、软件及其他相关措施为您的数据分析提供支持和保障。</p>
            </div>
        </div>;
    }
});
const Detection1 = React.createClass({
    render(){
        return <div className="detectionBox Box1">
            <div className="detectionContent">
                <img src={detection}/>
                <div className="articleList">
                    <h1>肺癌个体化用药基因检测</h1>
                    <p className="line"></p>
                    <article>
                        <p>肿瘤用药基因检测，包含相关靶向用药和化疗用药，通过基因检测揭示药物反应的遗传差异，阐述药物疗效及药物作用的靶位和毒副作用，为肿瘤患者和医生提供相关靶向用药和化药的用药方案，达到缓解疾病，延长患者生命，提高疗效和患者生命质量，降低毒副作用的目的。</p>
                    </article>
                    <article>
                        <h4>适用人群</h4>
                        <p>有家族性疾病遗传史的个体；</p>
                        <p>有相关慢性病史的个体；</p>
                        <p>长期处于污染或有害环境条件下的个体；</p>
                        <p>饮食不良或生活不规律的个体；</p>
                        <p>关注自身疾病风险的健康人群。</p>
                    </article>
                </div>
            </div>
        </div>;
    }
});
const Detection2 = React.createClass({
    render(){
        return <div className="detectionBox Box2">
            <div className="detectionContent">
                <div className="articleList">
                    <h1>肿瘤遗传性检测</h1>
                    <p className="line"></p>
                    <article>
                        <p>遗传病携带者筛查采用液相捕获技术和Illumina HiSeq测序技术，一次性对人体13大系统的百种常见单基因遗传病进行检测。只需您的血液样本或口腔黏膜细胞即可检测您的遗传病致病基因携带情况。帮您全面了解自身的健康状况，将最健康的基因传递给后代；预知患病风险，及时采取干预措施，有效规避潜藏在身体里的每一颗“基因地雷”，为您及家人的健康保驾护航。</p>
                    </article>
                    <article>
                        <h4>适用人群</h4>
                        <p><span>备孕人群：</span>在怀孕前帮助准父母了解自身的恶健康情况，将最健康的基因传递给后代</p>
                        <p><span>疑似患者：</span>为疑似的单基因进行检测，寻找致病的原因，辅助临床诊断</p>
                    </article>
                </div>
                <img src={detection1}/>
            </div>
        </div>;
    }
});
const Detection3 = React.createClass({
    render(){
        return <div className="detectionBox Box3">
            <div className="detectionContent">
                <img src={detection2}/>
                <div className="articleList">
                    <h1>肿瘤易感基因检测</h1>
                    <p className="line"></p>
                    <article>
                        <p>由于易感基因突变导致罹患肿瘤的患者，通过检测可以指导手术、用药和复发检测。</p>
                    </article>
                    <article>
                        <h4>适用人群</h4>
                        <p className="title">有肿瘤家族史的人：</p> 
                        <p>有肿瘤家族史人群即可能携带致病突变的人群，通过基因检测确定他们的肿  瘤发生风险并进行干预。</p>
                        <p className="title martop">其他关注健康的人：</p>
                        <p>对于其余关注肿瘤风险的人，可以确定自身肿瘤易感基因的突变状态，真正意义上做到“早发现、早诊断、早治疗”。</p>
                    </article>
                </div>
            </div>
        </div>;
    }
});
module.exports = Tumor;