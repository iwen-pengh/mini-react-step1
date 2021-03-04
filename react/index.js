function createElement (tag, attrs, ...child) {
    return {
        tag, //外层的标签
        attrs, // 标签的属性
        child // 子节点
    }
}
const React = {
    createElement,
}
export default React