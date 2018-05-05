import React from 'react';
import ispc from './IsPC';
import Nav from './Nav';
import slogan from '../static/html/sloganImg';
import pacs from '../static/img/pr_icon2.png';
import ffr from '../static/img/pr_icon1.png';
import tumor from '../static/img/pr_icon3.png';
import beauty from '../static/img/pr_ico4.png';
if(ispc()){
    require('../static/css/pc/index.scss');
}else{
    require('../static/css/phone/index.scss');
}
const Index = React.createClass({
    render(){
        window.scrollTo(0,0);
        return <div>
            <Nav/>
            <div className="content">
                <Slogan />
                <div className="contentBox">
                    <Products />
                    <Cooperation />
                </div>
            </div>
        </div>;
    }
});
const Slogan = React.createClass({
    slide(oli,height){
        let Index = 1;
        setInterval(()=>{
            for(let i=0;i<oli.length;i++){
                if(i == Index){
                    oli[i].setAttribute('class','show');
                }else{
                    oli[i].setAttribute('class','');
                }
            };
            if(Index==oli.length-1){
                Index = 0;
            }else{
                Index++;
            }  
        },3000);
    },
    setBanner(){
        let slogan = document.getElementById('slideBox');
        let oul = document.getElementById('slide');
        let imgs = oul.getElementsByTagName('img');
        let height;
        if(ispc()){
            height = (window.innerHeight - 84);
        }else{
            height = (window.innerHeight - 40);
        }
        slogan.style.height = height+'px';
        // for(let i=0;i<imgs.length;i++){
        //     imgs[i].style.margin = '0 0 0 ' + -(height*110)/146 + 'px';
        // }
        let oli = oul.getElementsByTagName('li');
        this.slide(oli,height);
    },
    componentWillMount(){
        let _this = this;
        let oldHeight = window.innerHeight;
        window.onresize = function(){
            let newHeight = window.innerHeight;
            if(oldHeight != newHeight){
                oldHeight = newHeight;
                _this.setBanner();
            }
        }
    },
    componentDidMount(){
        this.setBanner();
    },
    render(){
        return <div id="slideBox" className="slogan">
                <div id="slideTitle">
                    <h1>Towards Better Healthcare</h1>
                    <h2>利用人工智能技术，创造优质医疗资源，提升医疗服务水平</h2>
                </div>
                <ul id="slide">
                    {slogan.map((src,index)=>{
                        return <li key={index} className={index?'':'show'}><img src={src}/></li>;
                    })}
                </ul>
            </div>
    }
});
const Products = React.createClass({
    render(){
        return <div className="products">
            <h1>核心产品</h1>
            <ul className="list">
                <li>
                    <img src={ffr}/>
                    <p>冠状动脉功能辅助诊断软件</p>
                </li>
                <li>
                    <img src={pacs}/>
                    <p>影像传输与存储系统</p>
                </li>
                <li>
                    <img src={tumor}/>
                    <p>肿瘤基因检测</p>
                </li>
                <li>
                    <img src={beauty}/>
                    <p>美容基因检测</p>
                </li>
            </ul>
        </div>;
    }
});
const Cooperation = React.createClass({
    render(){
        if(ispc()){
            return <div className="cooperation">
                <h1>合作机构</h1>
                <table>
                    <tbody>
                        <tr className="hImg">
                            <td>
                                <img src={require('../static/img/hx.png')}/>
                                <p>华西医院</p>
                            </td>
                            <td>
                                <img src={require('../static/img/cz.png')}/>
                                <p>沧州市中心医院</p>
                            </td>
                            <td>
                                <img src={require('../static/img/gzhq.png')}/>
                                <p>廣州華僑醫院</p>
                            </td>
                            <td>
                                <img src={require('../static/img/zgrmjfj.png')}/>
                                <p>中国人民解放军总医院</p>
                            </td>
                            <td>
                                <img src={require('../static/img/szrm.png')}/>
                                <p>深圳市人民医院</p>
                            </td>
                        </tr>
                        <tr className="hImg">
                            <td>
                                <img src={require('../static/img/zw.png')}/>
                                <p>阜外心血管病医院</p>
                            </td>
                            <td>
                                <img src={require('../static/img/zjzl.png')}/>
                                <p>浙江省肿瘤医院</p>
                            </td>
                            <td>
                                <img src={require('../static/img/gzrm.png')}/>
                                <p>广州市第一人民医院</p>
                            </td>
                            <td>
                                <img src={require('../static/img/az.png')}/>
                                <p>安贞医院</p>
                            </td>
                            <td>
                                <img src={require('../static/img/wes.png')}/>
                                <p>威爾斯親王醫院</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>;
        }else{
            return <div className="cooperation">
                <h1>合作机构</h1>
                <table>
                    <tbody>
                        <tr>
                            <td><img src={require('../static/img/szrm.png')}/></td>
                            <td><img src={require('../static/img/az.png')}/></td>
                        </tr>
                        <tr>
                            <td><img src={require('../static/img/hx.png')}/></td>
                            <td><img src={require('../static/img/zw.png')}/></td>
                        </tr>
                        <tr>
                            <td><img src={require('../static/img/wes.png')}/></td>
                            <td><img src={require('../static/img/cz.png')}/></td>
                        </tr>
                        <tr>
                            <td><img src={require('../static/img/zjzl.png')}/></td>
                            <td><img src={require('../static/img/gzrm.png')}/></td>
                        </tr>
                        <tr>
                            <td><img src={require('../static/img/zgrmjfj.png')}/></td>
                            <td><img src={require('../static/img/gzhq.png')}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>;
        }
    }
});
module.exports = Index;