/*
 * @Author: Aaron
 * @Date: 2020-04-10 18:11:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-26 15:29:17
 * @Description: file content
 */
function _new(fn, ...args) {
    const _this = Object.create(fn.prototype)

    const res = fn.apply(_this, args)

    if (res instanceof Object) return res

    return _this
}
