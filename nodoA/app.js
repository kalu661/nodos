const nodoA = {
        'msg': {
            'ip': '192.168.80.XXX', 'name': 'A'
        }, 'ip-send': '192.168.80.XXX', 'ip-recibe': '192.168.80.XXX'
    };

const nodos = [nodoA];

fetch('http://192.168.80.XXX:XXXX/', {
    method: 'post',
    body: JSON.stringify(nodos),
    headers: { 'Content-Type': 'application/json' }
});