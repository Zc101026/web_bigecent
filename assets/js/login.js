$(function () {
    //  点击 “去注册账号” 的连接
    $('#link_reg').on('click', function () {
        $('.reg_box').show()
        $('.login_box').hide()
    })
    //  点击 “去登录账i号” 的链接
    $('#link_login').on('click', function () {
        $('.reg_box').hide()
        $('.login_box').show()
    })

    /**
 * 1、 导入 layui.all.js 引用其中的 form 与 layer 方法
 * 2、 使用 form.verify 方法，自定义校验规则(建议用数组方式，数组内前一个为检验规则，后一个为传递的信息)
 * 3、 在 html中的 lay-verify 使用，多个校验规则之间用 | 分隔
 */
// 自定义校验规则
const form = layui.form
const layer = layui.layer
// 注册密码
form.verify({
    // 自定义了一个叫做 pwd 校验规则 (数组方式)
    pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    // 校验两次密码是否一致的规则 (函数方式)
    repwd: function(value) {
      // 通过形参(value)拿到的是确认密码框中的内容
      // 还需要拿到密码框(pwd)中的内容
      // 然后进行一次等于的判断
      // 如果判断失败,则return一个提示消息即可
      const pwd = $('.reg_box [name=password]').val()
      if (pwd !== value) {
        return '两次密码不一致！'
      }
    }
})

// 监听: 注册表单的提交事件
$('#form_reg').on('submit', function (e) {
    // 阻止默认的提交行为
    e.preventDefault()
    // 发起 Ajax的POST的请求
    $.post('/api/reguser', { username: $('#form_reg [name=username]').val(),
    password: $('#form_reg [name=password]').val() }, function (res) {
        if (res.status !== 0) {
            return console.log(res.message)
        }
        console.log('注册成功，请登录！')
        // 注册后跳转登录页面
        $('#link_login').click()
    })
})

// 监听登录表单的提交事件
$('#form_login').submit(function (e) {
    // 这里不能用箭头函数，this指向表单数据，箭头函数指向全局
    // console.log(this)
    // 阻止默认提交行为
    e.preventDefault()
    $.ajax({
        url: '/api/login',
        method:'POST',
        // 快速获取表单中的数据
        data: $(this).serialize(),
        success: function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('登录成功！')
            // 将登录成功得到的 token 字符串， 保存到 localStorage 中
            // console.log(res.token)
            localStorage.setItem('token', res.token)
            // 跳转到后台主页
            location.href = './index.html'
        }
    })
})
    
})