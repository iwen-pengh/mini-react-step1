function render (vnode, container) {
	//如果虚拟dom不存在
    if(vnode === undefined || vnode === null || typeof vnode === 'boolean') {
        return '';
    };

    //如果vnode是字符串or数字
    if(typeof vnode === 'string' || typeof vnode === 'number' ) {
        //创建文本节点
        const textNode = document.createTextNode(vnode);
         container.appendChild(textNode);
    }

    //否则虚拟DOM
    const { tag ,attrs, child} = vnode;
    
    //创建节点对象
    let dom = '';
    if(tag) {
        dom = document.createElement(tag)
        container.appendChild(dom);
    }

    if( attrs ){
        // 有属性值 key： className="active" title="123"
        Object.keys(attrs).forEach( key => {
            const value = attrs[key];
            setAttribute(dom, key, value)
        })
    }

    //递归渲染子节点
    if(child) {
        child.forEach( c => render(c, dom))
    }
    
}

//设置属性
export function setAttribute(dom, key, value) {
    
    //将calssName 转成class
    if( key === 'className') {
        key = 'class'
    }

    //如果是事件 eg： onClick onBlur 
    if(/on\w/.test(key)) {
        //转小写
        key = key.toLowerCase();
        dom[key] = value || '';
    }

    if(key === 'style') {
        if(!value || typeof value === 'string') {
            //style 的值是字符串
            dom.style.cssText = value || ''
        } else if(value || typeof value === 'object'){
            //style 的值是对象
            for(let k in value) {
                if(typeof value[k] === 'number') {
                    dom.style[key] = value[key] + 'px';
                }else {
                    dom.style[key] = value[key];
                }
            }
        }
    }else {
        //其他属性
        if( key in dom ) {
            // console.log('key', key, dom);
            dom[key] = value || ''
        }else if(value) {
            //更新值
            dom.setAttribute(key, value)
        }else {
            dom.removeAttribute(key)
        }
    }

    
}

const ReactDOM = {
    render
}
export default ReactDOM