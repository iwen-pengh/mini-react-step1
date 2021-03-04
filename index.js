import React from './react';
import ReactDOM from './react-dom'
//如果是jsx对象
const JSX = (
    <div className="active" title="123">
        hello,<span>mini react</span>
    </div>
)

ReactDOM.render(JSX, document.querySelector('#app'));