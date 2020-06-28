// 文本水平居中
   // 1. text-align: center  (水平居中)
   // 2. display: flex ;  justify-content  (弹性布局)
   // 3. margin: 0 auto  
   // 4. display: table-cell

//    options.url 字符串 -> '/api' '/my'
// indexOf('/api') !== -1 返回的是当前字符串所在的索引位置
// startsWish / endsWith 用来判断当前某个字符或者字符串在哪个位置 开始/结束 返回的布尔值
// includes 用来判断当前某个字符或者字符串是否出现在目标字符串里面 返回的布尔值

// readonly 属性， 可以禁止用户输入
// disabled 属性， 可以禁止用户输入

// const inputParams = form.val('formUserInfo')  // 取值
// delete inputParams.username

// 调用父页面的 getUserInfo 方法
// 父亲身上的所有属性和方法都能使用
// window.parent.getUserInfo()