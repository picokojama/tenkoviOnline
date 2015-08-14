module.exports = function(namespace) {
    var res = []
        , ns = io.of(namespace ||"/");

    if (ns) {
        for (var id in ns.connected) {
            res.push(ns.connected[id]);
        }
    }
    return res;
};