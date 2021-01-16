const {add ,mul } =require('./js/mathTools.js')
console.log(add(20,30));
console.log(mul(20,30));


// 3. 依赖css
require('./css/normal.css')
require('./css/special.less')
document.writeln('<h2>你好啊 ! 李银河</h2>')
import Vue from 'vue'

import App from './vue/app'
//  使用
new Vue({
    el : '#app',
    template : `<App/>`,
    components :{
        App
    }
})