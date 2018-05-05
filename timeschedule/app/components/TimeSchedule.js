import React from 'react';
import '../static/css/timeschedule.scss';
const weeks = ['周一','周二','周三','周四','周五','周六','周日'];
let timer,move = false,play = false;
const TimeSchedule = React.createClass({
    getInitialState(){
        return {
            startTime: 0,
            allhour: 0,
            width: 0,
            playwidth: 0,
            slice: 0,
            nowdate:null,
            dragging:null,
            oldNode:'',
            newNode:'',
            isauto: true
        };
    },
    getMaxDay(month,year){
        let max;
        let bigMonth = [1,3,5,7,8,10,12];
        let smallMonth = [4,6,9,11];
        if(month == 2){
            if(year%4==0){
                max = 29;
            }else{
                max = 28;
            }
        }else if(bigMonth.indexOf(month)){
            max = 31;
        }else if(smallMonth.indexOf(month)){
            max = 30;
        }
        return max;
    },
    getEveryday(start,end){
        let result = [];
        let day = start.day;
        let week = start.week;
        let month = start.month;
        let year = start.year;
        let max = this.getMaxDay(month,year);
        do{
            result.push(weeks[week]+' '+day);
            if(day >= max){
                month++;
                day = 1;
                max = this.getMaxDay(month,year);
            }else{
                day++;
            }
            if(week >= 6){
                week = 0;
            }else{
                week++;
            }
        }while(day<=max&&month<=end.month);
    },
    getTime(date){
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let week = date.getDay()==0?6:date.getDay()-1;
        let hour = date.getHours();
        return {
            "year": year,
            "month": month,
            "day": day,
            "week": week,
            "hour": hour
        };
    },
    setDom(date,start,isnow,onlyHtml){
        let width = this.state.width;
        let allhour = this.state.allhour;
        let hourdiff;
        if(date.year==start.year){
            if(date.month == start.month){
                if(date.day == start.day){
                    hourdiff = date.hour - start.hour;
                }else if(date.day > start.day){
                    hourdiff = (date.day-start.day)*24+(date.hour - start.hour);
                }
            }else if(date.month > start.month){
                let max = this.getMaxDay(date.month,date.year);
                let timeleft = max-start.day;
                let timeright = date.day-1;
                let time = 0;
                if(timeleft>=0){
                    time = (24-start.hour)+timeleft*24;
                }else{
                    console.log('date.day is bigger than max');
                }
                if(timeright>=0){
                    time += date.hour + timeright*24;
                }else{
                    console.log('date.day is smaller than one');
                }
                hourdiff = time;
            }
        }
        let b = hourdiff/allhour;
        let week = date.week;
        let day = date.day;
        let hours = date.hour;
        if(isnow){
            document.getElementById('now').style.left = width*b + 'px';
        }
        if(!onlyHtml){
            this.state.playwidth = width*b;
            document.getElementById('played').style.width = width*b + 'px';
            document.getElementById('timecode').style.left = width*b+45 + 'px';
        }
        document.getElementById('timecode-box').innerHTML = weeks[week] + ' ' + day + ' - ' + hours + ':00';
    },
    componentDidMount(){
        let data = this.props.data;
        let calendar = document.getElementById('calendar');
        let slice = this.state.slice = calendar.clientWidth/240;
        let width = this.state.width = slice*235;
        let start = this.state.nowdate = this.getTime(new Date(parseInt(data.startTime)));
        let date,isnow;
        this.handleTouch();
        document.getElementById('isauto').click();
        document.getElementsByClassName('progress-line')[0].style.width = width + 'px';
        this.state.allhour = 235;
        this.state.startTime = data.startTime;
        if(parseInt(new Date().valueOf())<parseInt(data.startTime)){
            date = start;
            isnow = false;
        }else{
            date = this.getTime(new Date());
            isnow = true;
        }
        this.setDom(date,start,isnow);
        document.getElementById('played').style.transition = 'width ease-in-out .7s';
        document.getElementById('timecode').style.transition = 'left ease-in-out .7s';
    },
    drag(event){
        event = event?event:window.event;
        let target = event.target || event.srcElement;
        let oldNode = this.state.oldNode;
        let newNode = this.state.newNode;
        let startNode = this.state.playwidth;
        switch(event.type){
            case 'mousedown':
                if(target.id == "timecode-box" || target.id == "timecode"){
                    this.state.dragging = target;
                    oldNode = this.state.oldNode = event.clientX;
                    document.getElementById('played').style.transition = 'none';
                    document.getElementById('timecode').style.transition = 'none';
                }
                break;
            case 'mousemove':
                let dragging = this.state.dragging;
                if(dragging){
                    move = true;
                    let width = this.state.width;
                    newNode = this.state.newNode = event.clientX;
                    let moveX = newNode - oldNode;
                    let pageX = startNode + 45 + moveX;
                    if(pageX-45 > width){
                        pageX = width+45;
                    }else if(pageX < 45){
                        pageX = 45;
                    }
                    this.state.playwidth = pageX-45;
                    dragging.parentNode.style.left = pageX + "px";
                    document.getElementById('played').style.width = pageX-45 + 'px';
                    let hourdiff = parseInt((pageX-45)*this.state.allhour/this.state.width);
                    let date = this.getTime(new Date(parseInt(this.state.startTime)+hourdiff*1000*60*60));
                    let start = this.getTime(new Date(parseInt(this.state.startTime)));
                    this.setDom(date,start,false,true);
                    this.state.nowdate = date;
                    oldNode = this.state.oldNode = newNode;
                }
                break;
            case 'mouseup':
                if(move && !play){
                    document.getElementById('played').style.transition = 'width ease-in-out .7s';
                    document.getElementById('timecode').style.transition = 'left ease-in-out .7s';
                    move = false;
                }
                this.state.dragging = null;
                break;
            case 'mouseleave':
                this.state.dragging = null;
                break;
        }
    },
    bindEvent(node, type, func) {
        if (node.addEventListener) {
            node.addEventListener(type, func, false);
        } else if (node.attachEvent) {
            node.attachEvent("on" + type, func);
        } else {
            node["on" + type] = func;
        }
    },
    choose(event){
        let item = document.getElementById('ghost-timecode');
        item.style.opacity = 1;
        item.style.zIndex = 1;
        item.style.left = event.clientX-10 + 'px';
        let hourdiff = parseInt((event.clientX-55)*this.state.allhour/this.state.width);
        let date = this.getTime(new Date(parseInt(this.state.startTime)+hourdiff*1000*60*60));
        document.getElementById('ghost-box').innerHTML = date.hour + ':00';
        if(event.type == 'mousedown'){
            item.style.zIndex = 0;
            let start = this.getTime(new Date(parseInt(this.state.startTime)));
            this.setDom(date,start,false);
            this.state.nowdate = date;
        }
    },
    handleTouch(){
        let cursor = document.getElementById('timecode');
        let avbl = document.getElementById('avbl');
        this.bindEvent(cursor,'mousedown',this.drag);
        this.bindEvent(document,'mousemove',this.drag);
        this.bindEvent(document,'mouseup',this.drag);
        this.bindEvent(avbl,'mousemove',this.choose);
        this.bindEvent(avbl,'mousedown',this.choose);
        this.bindEvent(avbl,'mouseout',()=>{
            document.getElementById('ghost-timecode').style.opacity = 0;
            document.getElementById('ghost-timecode').style.zIndex = 0;
        });
    },
    startTimer(startTime){
        let slice = this.state.slice;
        let allhour = this.state.allhour;
        let flag = 1;
        let max = this.getMaxDay(startTime.month,startTime.year);
        timer = setInterval(()=>{
            let date = this.state.nowdate;
            let week = date.week;
            let day = date.day;
            let hours = date.hour;
            flag ++;  
            this.state.playwidth += 1;
            if(parseInt(flag%slice)==0){
                hours++;
                if(hours==24){
                    hours = 0;  week++;  day++;
                    if(week>6){week = 0}
                    if(day>max){day = 1}
                }
                document.getElementById('timecode-box').innerHTML = weeks[week] + ' ' + day + ' ' + hours + ':00';
            }
            if(this.state.playwidth >= slice*allhour){
                if(document.getElementById('isauto').checked == false){
                    document.getElementById('playpause').setAttribute('class','play');
                    clearInterval(timer);
                }
                this.state.playwidth = 0;
                let start = this.getTime(new Date(parseInt(this.state.startTime)));
                this.setDom(start,start,false,false);
                week = start.week;
                day = start.day;
                hours = start.hour;
            }else{
                document.getElementById('played').style.width = this.state.playwidth + 'px';
                document.getElementById('timecode').style.left = this.state.playwidth+45 + 'px';
            }
            this.state.nowdate = {
                "week": week,
                "day": day,
                "hour": hours
            };
        },100);
    },
    handleClick(event){
        let data = this.props.data;
        let startTime = this.getTime(new Date(parseInt(data.startTime)));
        let item = event.target;
        let classname = item.getAttribute('class');
        let date = this.state.nowdate;
        let button = document.getElementById('playpause');
        if(classname=='play'){
            if(timer){clearInterval(timer);}
            document.getElementById('played').style.transition = 'none';
            document.getElementById('timecode').style.transition = 'none';
            play = true;
            button.setAttribute('class','pause');
            this.startTimer(startTime);
        }else if(classname=='pause'){
            document.getElementById('played').style.transition = 'width ease-in-out .7s';
            document.getElementById('timecode').style.transition = 'left ease-in-out .7s';
            play = false;
            button.setAttribute('class','play');
            clearInterval(timer);
        }else if(classname == 'clickable'){
            let date = this.getTime(new Date(parseInt(item.getAttribute('data-do'))));
            this.setDom(date,startTime,false,false);
            this.state.nowdate = date;
        }
    },
    render(){
        let data = this.props.data;
        let timenodes = data.timenodes;
        return <div>
            <p className="contrl-box"><label htmlFor="isauto">Auto</label><input id="isauto" type='checkbox'/></p>
            <div id="bottom" className="shy left-border right-border">
                <div id="progress-bar" className="anim-allowed">
                    <div className="progress-line" id="avbl">
                        <div className="played" id="played"></div>
                        <div className="avbl"></div>
                        <i id="now"></i>
                    </div>
                    <div id="ghost-timecode" className="timecode ghost-timecode" style={{opacity: 0,left: 320+'px',marginTop: 0+'px'}}>
                        <div id="ghost-box" className="box">11:00</div>
                    </div>
                    <div id="timecode" data-title="D_LT2" className="timecode" title="当地时间">
                        <div id="timecode-box" className="box">周一 29 - 17:00</div>
                    </div>
                    <div id="playpause" className="play" onClick={this.handleClick}></div>
                    <div id="calendar">
                        {timenodes.map((node,index)=>{
                            let thisdate = new Date(node);
                            let week = thisdate.getDay()==0?6:thisdate.getDay()-1;
                            let day = thisdate.getDate();
                            return <div data-do={node} className="clickable" data-index={index} onClick={this.handleClick}>{weeks[week]+' '+day}</div>
                        })}
                    </div>
                </div>
            </div>;
        </div>
    }
});
module.exports = TimeSchedule;