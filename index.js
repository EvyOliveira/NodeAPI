/* 
0 Preciso obter um usuário
1 Preciso obter o número de telefone a partir do seu id
2 Preciso obter o endereço do usuário pelo id
*/

function obterUsuario(callback) {
  setTimeout( function () {
    return callback (null, {
      id: 1,
      nome: 'Aladin',
      dataNascimento: new Date()
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos Bobos',
      numero: 0
    })
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback (null, {
      telefone: '99999999',
      ddd: 11
    })
  }, 2000);
}
function resolverUsuario(erro, usuario){
  console.log('usuario', usuario)
}

obterUsuario((function resolverUsuario(error, usuario) {
  // null || "" || 0 === false
  if (error) {
    console.log("Deu ruim no USUÁRIO!", error)
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.log("Deu ruim no TELEFONE!", error)
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
      if (error2) {
        console.log("Deu ruim no TELEFONE!", error)
        return;
      }
      console.log(`
        Nome: ${usuario.nome},
        Endereco: ${endereco.rua}, ${endereco.numero},
        Telefone: (${telefone.ddd})${telefone.telefone}
      `)
    });
  })
}),

//const telefone = obterTelefone(usuario.id)

//console.log('telefone', telefone)