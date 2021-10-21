import JJDialog from "./dialog/index.js"
import JJAlert from "./alert/index.js"

// 组件集合，用于遍历
const components = [JJDialog];

console.log({
	components
});
let messagebox = {}
// 定义 install 方法
messagebox.install = function(Vue) {
	if (messagebox.install.installed) return;
	messagebox.install.installed = true
	//使用JJAlert插件
	Vue.use(JJAlert)
	// console.log('------------')
	// 遍历注册全局组件
	components.map((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
	messagebox.install(window.Vue);
}

export {
	JJAlert,
	JJDialog,
};

export default messagebox
