/*
 * @Author: Aaron
 * @Date: 2020-04-10 18:11:33
 * @LastEditors: Aaron
 * @LastEditTime: 2020-04-10 18:26:02
 * @Description: file content
 */
function _new(fn, ...args) {
    let _this = Object.create(fn.prototype)
    
    const res = fn.apply(_this, args)

    if (res instanceof Object) return res

    return _this
}
