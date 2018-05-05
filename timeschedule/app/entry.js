import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/TimeSchedule';
import timeData from './static/js/timeData';
ReactDOM.render(<div>
    <AppComponent data={timeData}/></div>
    , document.getElementById('timeSchedule'));


