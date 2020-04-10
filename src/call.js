/*
 * @Author: Aaron
 * @Date: 2020-04-10 14:25:30
 * @LastEditors: Aaron
 * @LastEditTime: 2020-04-10 15:37:20
 * @Description: file content
 */

Function.prototype.call = function(ctx) {
    ctx = ctx !== undefined ? Object(ctx) : window
    ctx.fn = this
    let args = []

    for (let i = 0; i < arguments.length; i++) {
        args.push('arguments[' + i + ']')
    }

    const res = eval('ctx.fn(' + args + ')')

    delete ctx.fn

    return res
}
