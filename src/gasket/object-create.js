/*
 * @Author: Aaron
 * @Date: 2020-04-10 16:10:37
 * @LastEditors: Aaron
 * @LastEditTime: 2020-04-10 17:11:11
 * @Description: file content
 */
Object.prototype.create = function(proto) {
    function Fn() {}

    Fn.prototype = proto

    return new Fn
}
