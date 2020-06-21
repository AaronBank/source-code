/*
 * @Author: Aaron
 * @Date: 2020-04-10 18:06:41
 * @LastEditors: Aaron
 * @LastEditTime: 2020-04-10 18:18:19
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
