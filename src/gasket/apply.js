/*
 * @Author: Aaron
 * @Date: 2020-04-10 15:38:04
 * @LastEditors: Aaron
 * @LastEditTime: 2020-04-10 15:50:29
 * @Description: file content
 */
Function.prototype.apply = function(ctx, args) {
    ctx = ctx !== undefined ? Object(ctx) : window
    ctx.fn = this

    const res = !args ? ctx.fn() : eval('ctx.fn(' + args + ')')

    delete ctx.fn

    return res
}