import React from 'react';
import {Link} from 'react-router';
import ispc from './IsPC';
if(ispc()){
    require('../static/css/pc/footer.scss');
}else{
    require('../static/css/phone/footer.scss');
}

const Footer = React.createClass({
    render(){
        if(ispc()){
            return <footer>
                <div className="box1">
                    <ul className="attentionBox">
                    <li>
                        <h3>关注我们</h3>
                        <p><Link to="">新浪微博</Link></p>
                        <p><Link to="">微信账号</Link></p>
                    </li>
                    <li>
                        <h3>关注公司</h3>
                        <p><Link to='aboutUs'>关于我们</Link></p>
                        <p><Link to='joinUs'>加入我们</Link></p>
                        <p><Link to='mediaDynamics'>媒体动态</Link></p>
                    </li>
                    <li>
                        <h3>核心产品</h3>
                        <p><Link to="coreProducts/deepVesslFFR">DeepVessl FFR</Link></p>
                        <p><Link to="coreProducts/pacs">PACS</Link></p>
                        <p><Link to="coreProducts/tumor">肿瘤基因检测</Link></p>
                        <p><Link to="coreProducts/beauty">美容基因检测</Link></p>
                    </li>
                    <li>
                        <h3>北京昆仑医云科技有限公司</h3>
                        <p className="phoneNum">400-000-8888</p>
                        <p className="email">info@curacloudcorp.com</p>
                        <p className="address">北京市东城区小牌坊胡同甲七号银河SOHO  C座30503</p>
                    </li>
                    </ul>
                </div>
                <div className="box2">
                    <div className="Inscribed">
                        <p className="left">©2016-2017 CuraCloud. All Rights Reserved. 北京昆仑医云科技有限公司<span>京ICP备xxxxxxxxxx | 京ICP备xxxxxxxxxx</span></p>
                        <p className="right"><span>使用条款</span><span>法律声明</span></p>
                    </div>
                </div>
            </footer>;
        }else{
            return <footer>
                <div className="Inscribed">
                    <div className="infor">
                        <h3>北京昆仑医云科技有限公司</h3>
                        <p className="phoneNum">400-000-8888</p>
                        <p className="email">info@curacloudcorp.com</p>
                        <p className="address">北京市东城区小牌坊胡同甲七号银河SOHO  C座30503</p>
                    </div>
                    <div className="other">
                        <p className="left">京ICP备xxxxxxxxxx</p>
                    </div>
                </div>
            </footer>;
        }
    }
});
module.exports = Footer;