/*
 * @Author: Aaron
 * @Date: 2020-04-10 15:42:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-26 15:58:34
 * @Description: file content
 */
Function.prototype.bind = function(ctx) {
    ctx = ctx !== undefined ? Object(ctx) : window
    const fn = this
    const gArgs = Array.prototype.slice.call(arguments, 1)
    function bindFn() {
        const context = this instanceof bindFn ? this : ctx
        const args = Array.prototype.slice.call(arguments)
        return fn.apply(context, gArgs.concat(args))
    }

    bindFn.prototype = Object.create(this.prototype)

    return bindFn
}
