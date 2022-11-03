var a = 1;
var ports = []
onconnect = function (e) {
    var port = e.source;
    port.postMessage(a)
    ports.push(port)

    console.log('e', e)

    port.onmessage = function () {
        ++a
        ports.forEach((p)=>{
            p.postMessage(a)
        })
    }
}