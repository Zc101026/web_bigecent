$(function () {
    const layer = layui.layer
    const form = layui.form
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
    let indexAdd = null
    // 为添加类别按钮绑定点击事件
    $('#btnAddCate').on('click', function () {
        indexAdd = layer.open({
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
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('新增分类失败！')
                } 
                // 重新渲染
                initArtCateList()
                layer.msg('新增分类成功！')
                // 根据索引， 关闭对应的弹出层
                layer.close(indexAdd)
            }
        })
    })

    // 预先保存弹出层的索引，方便进行关闭
    let indexEdit = null
    // 为编辑类别 (btn-edit) 按钮绑定点击事件
    $('tbody').on('click', '.btn-edit' ,function () {
        indexEdit = layer.open({
            type: 1,
            area: ['500px', '250px'],
            title: '修改文章分类',
            content: $('#dialog-edit').html()
        })
        var id = $(this).attr('data-id')
        // console.log(id)
        // 发起请求获取对应分类的数据
        $.ajax({
            method: 'GET',
            url: '/my/article/cates/' + id,
            success: function (res) {
                // console.log(res)
                form.val('form-edit', res.data)
            }
        })
    })

    // 通过代理的形式，为修改分类表单绑定 submit 事件
    $('body').on('submit', '#form-edit', function (e) {
        // 阻止其默认行为
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: '/my/article/updatecate',
            // 拿到表单数据
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('更新数据失败!')
                }
                layer.msg('更新数据成功！')
                // 根据其索引关闭弹出层
                layer.close(indexEdit)
                // 重新渲染数据
                initArtCateList()
            }
        })
    })

    // 通过代理的形式， 为删除按钮 (btn-delete) 绑定点击事件
    $('tbody').on('click', '.btn-delete', function () {
        // console.log('ok')
        let id = $(this).attr('data-id')
        // 提示用户是否要删除
        layer.confirm('确认删除！', {icon: 3, title:'提示'}, function(index){
        $.ajax({
        method: 'GET',
        url: '/my/article/deletecate/' + id,
            success: function (res) {
            console.log(res)
            if (res.status !== 0) {
                return layer.msg('删除列表失败！')
            }
            layer.msg('删除数据成功！')
            //  根据其索引关闭弹出框
            layer.close(index)
            //  重新渲染数据
            initArtCateList()
        }
        })
     })
  })
})