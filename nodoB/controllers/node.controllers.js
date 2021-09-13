const fetch = require('node-fetch');
const { response, request } = require('express');

const nodePost = async (req = request, res = response) => {
    const data = await req.body;

    const nodoB = 
         {
            'msg': {
                'ip': '192.168.80.204', 'name': 'B'
            }, 'ip-send': '192.168.80.224', 'ip-recibe': '192.168.80.213'
        }
    ;

    const nodos = [ ...data, nodoB ]

    /* console.log('1', data);
    console.log('2', nodos); */
    console.log('3', JSON.stringify(nodos));

    await fetch('http://192.168.80.224:3000/', {
        method: 'post',
        body: JSON.stringify(nodos),
        headers: { 'Content-Type': 'application/json' }
    })

};

/* const nodeGet = (req = request, res = response) => {
    res.json({
        msg: 'Servidor Express funcionando',
    });
}; */

module.exports = {
    nodePost
};