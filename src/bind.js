/*
 * @Author: Aaron
 * @Date: 2020-04-10 15:42:40
 * @LastEditors: Aaron
 * @LastEditTime: 2020-04-10 16:08:29
 * @Description: file content
 */
Function.prototype.bind = function(ctx) {
    ctx = ctx !== undefined ? Object(ctx) : window
    const fn = this
    const gArgs = Array.prototype.slice.call(arguments, 1)
    function bindFn() {
        const context = this instanceof bindFn ? this : ctx
        const args = Array.prototype.slice(arguments)
        return fn.apply(context, gArgs.concat(args))
    }

    bindFn.prototype = Object.create(this.prototype)

    return bindFn
}
