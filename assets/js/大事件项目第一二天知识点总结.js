/**
 *
 * ----- 大事件项目第一二天知识点总结 -----
 *
 * 1、安装 LiveServer 插件，在某一个 html 文件内，单击右键，选择 Open With Live Server 打开文件；
 * 该插件会自动选择浏览器并默认使用 5500 端口号供访问。优势：能自动检测到文件变化，会自动刷新页面
 *
 * 2、阻止 a标签默认跳转行为：
 * href="javascript:;"   href="javascript:void(0);"    e.preventDefault() [代码的方式]
 *
 * 3、能够发起异步的几种情况：
 * 定时器(setTimeout setInterval)   ajax     触发事件(监听事件、回调函数)
 *
 * 4、localStorage 的基本使用方式
 * localStorage.setItem('key', 'value') -- 向缓存里存数据
 * localStorage.getItem('key') -- 从缓存里取数据
 * localStorage.removeItem('key') -- 从缓存里移除某一个
 * localStorage.clear() -- 全部清空缓存的所有数据
 *
 * 5、null == undefined 这两者用 == 判断，返回的结果是 true，如果代码里有需要判断某个变量是否有值
 * 或者是否为空，可直接进行对其取反操作
 *
 * 6、发 ajax 请求的时，success成功回调和error失败回调是互斥的，只执行这两个中的一个；要么成功，要么
 * 失败；complete完成回调是不管成功还是失败，都是执行，并且参数 res 是最终的服务器返回数据，里面包含
 * 很多有价值的属性(responseJSON, readyState等)
 *
 * 7、几种常用获取表单元素的 value 值
 * $('.layui-form [name=username]').val()   -- 传统方式取 value 值
 * $(this).serialize() --  更方便一些(会自动剔除具有 disabled 属性的value值)
 * 站在巨人的肩膀上，使用UI库自带的方法：form.val('formUserInfo')，获取到的值是一个对象
 *
 * 8、iframe 标签，会创建包含另一个文档的行内框架
 * 使用方式：需要 src 属性，会将该 src 属性指向的文档引入 iframe 标签的书写位置
 *         需要 name 属性，作为用来标识这个 iframe (唯一)
 * <a href="/article/art_cate.html" target="fm">，该 a 标签的 href 属性和 target 属性配合使用，
 * 可以做到将该 href 属性指向的 html 页面，在名称叫做 fm 的 iframe 里显示
 *
 * 9、删除对象的某一个属性，可以使用 delete 操作符
 * 比如：const obj = { name: 'heima', age: 10}
 * -> 执行：delete obj.age
 * -> 结果：{ name: 'heima' }
 *
 * 10、iframe 子父之间通信
 * 子iframe调用父iframe中的方法
 * 可以使用：window.parent.xxFn() 或传递参数的形式：window.parent.xxFn('params')
 *
 * 父iframe调用子iframe的方法
 * $("#sunPage")[0].contentWindow.sunMethod();
 * contentWindow 对象可以获取子iframe的window对象,兼容所有浏览器
 * sunMethod() 这是子iframe中的方法名称.
 *
 * 11、常用 flex 弹性布局
 * display: flex;
 * justify-content: center; -- 水平居中
 * align-items: center; -- 垂直居中
 * justify-content: center; -- 两端对齐
 *
 *
 */