/*
 * @Author: Aaron
 * @Date: 2020-04-10 18:06:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-26 15:48:29
 * @Description: file content
 */
function _instanceof(target, examples) {
    let tProto = Object.getPrototypeOf(target)
    let ePrototype = examples.prototype

    while(true) {
        if (tProto === null) return false
        if (tProto === ePrototype) return true

        tProto = Object.getPrototypeOf(tProto)
    }
}
