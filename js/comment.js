(function (d, s) {
    if (window.location.pathname !== '/recommend/' || !check())
        return
    let j, e = d.getElementsByTagName(s)[0];
    if (typeof LivereTower === 'function') return
    j = d.createElement(s);
    j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
    j.async = true;
    e.parentNode.insertBefore(j, e);
})(document, 'script');

function check() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag
}