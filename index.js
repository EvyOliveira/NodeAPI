/* 
0 Preciso obter um usuário
1 Preciso obter o número de telefone a partir do seu id
2 Preciso obter o endereço do usuário pelo id
*/
//importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  // Quando der algum problema -> reject (ERRO) 
  // Quando for sucess -> RESOLV 
  return new Promise(function resolvePromise(resolve, reject){
    setTimeout( function () {
      //return reject(new Error('DEU RUIM de verdade!'))
      return resolve ({
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date()
      })
    }, 1000)
  })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
      return callback (null, {
        rua: 'dos Bobos',
        numero: 0
      })
    }, 2000);
}


function obterTelefone(idUsuario) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve ({
        telefone: '99999999',
        ddd: 11
      })
    }, 2000);
  })
}

// 1º passo: adicionar a palavra async (automaticamente ele retornará uma promise)
main()
async function main() {
  try {
    console.time('medida-promise')
    const usuario = await obterUsuario()
    //const telefone = await obterTelefone(usuario.id)
    //const endereco = await obterEnderecoAsync(usuario.id)
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])
    const endereco = resultado[1]
    const telefone = resultado[0]
    console.log(`
      Nome: ${usuario.nome},
      Telefone: (${telefone.ddd})${telefone.telefone},
      Endereco: ${endereco.rua}, ${endereco.numero}
    `)
    console.timeEnd('medida-promise')
  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

//const usuarioPromise = obterUsuario()
// para manipular o sucesso, usamos a função .then
// para manipular erros, usamos o .catch
//usuarioPromise
  //.then(function(usuario) {
    //return obterTelefone(usuario.id)
    //.then(function resolverTelefone(result) {
      //return {
        //usuario: {
          //nome: usuario.nome,
          //id: usuario.id
        //},
        //telefone: result
      //}
    //})
  //})
  //.then(function (resultado) {
    //const endereco = obterEnderecoAsync(resultado.usuario.id)
    //return endereco.then(function resolverEndereco(result) {
      //return {
          //usuario: resultado.usuario,
          //telefone: resultado.telefone,
          //endereco: result
      //}
    //})
  //})
  //.then(function(resultado) {
    //console.log(`
      //Nome: ${resultado.usuario.nome},
      //Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero},
      //Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}
    //`)
  //})
  //.then(function(resultado) {
    //console.log('resultado', resultado)
  //})
  //.catch(function(error) {
    //console.log('Deu RUIM', error)
  //})

//obterUsuario((function resolverUsuario(error, usuario) {
  // null || "" || 0 === false
  //if (error) {
    //console.log("Deu ruim no USUÁRIO!", error)
    //return;
  //}
  //obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    //if (error1) {
      //console.log("Deu ruim no TELEFONE!", error)
      //return;
    //}
    //obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
      //if (error2) {
        //console.log("Deu ruim no TELEFONE!", error)
        //return;
      //}
      //console.log(`
        //Nome: ${usuario.nome},
        //Endereco: ${endereco.rua}, ${endereco.numero},
        //Telefone: (${telefone.ddd})${telefone.telefone}
      //`)
    //});
  //})
//}),

//const telefone = obterTelefone(usuario.id)

//console.log('telefone', telefone)