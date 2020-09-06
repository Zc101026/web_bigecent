$(function () {
    const layer = layui.layer
    initArtCateList()

    // 获取文章分类的列表
function initArtCateList() {
    $.ajax({
        method: 'GET',
        url: '/my/article/cates',
        success: function (res) {
            const htmlStr = template ('tpl-table', res)
            $('tbody').html(htmlStr)
        }
    })
    }
    // 预先保存弹出层的索引，方便进行关闭
    // 为添加类别按钮绑定点击事件
    const indexAdd = null
    $('#btnAddCate').on('click', function () {
        layer.open({
            type: 1,
            area: ['500px', '250px'],
            title: '添加文章分类',
            content: $('#dialog-add').html()
        })
    })

    //  通过代理的形式 为 form-add 表单绑定 submit 事件
    $('body').on('submit', '#form-add', function (e) {
        // 阻止其默认行为
        e.preventDefault()
        // console.log('ok')
        $.ajax({
            method: 'POST',
            url: '/my/article/addcates',
            date: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('新增分类失败！')
                } 
                initArtCateList()
                layer.msg('新增分类成功！')
                // 根据索引， 关闭对应的弹出层
                layer.close(indexAdd)
            }
        })
    })
    
})

