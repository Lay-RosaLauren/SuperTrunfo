var cartaMara = {
    nome: "Finn",
    imagem: "https://static.wikia.nocookie.net/disney/images/4/4a/Fin.jpg/revision/latest/scale-to-width-down/258?cb=20200723012442&path-prefix=pt-br",
    atributos: {
      ataque: 80,
      defesa: 60,
      magia: 90
    }
  }
  
  var cartaKate = {
    nome: "Ferrugem",
    imagem: "https://static.wikia.nocookie.net/disney/images/0/08/RustyRustEzeArtwork.png/revision/latest/scale-to-width-down/258?cb=20190807194343&path-prefix=pt-br",
    atributos: {
      ataque: 70,
      defesa: 65,
      magia: 85
    }
  }
  
  var cartaMarina = {
    nome: "Greg",
    imagem: "https://static.wikia.nocookie.net/disney/images/a/a3/9acaf288501b75f8fc712b7a07650435037803ca_hq.jpg/revision/latest/scale-to-width-down/258?cb=20190511183427&path-prefix=pt-br",
    atributos: {
      ataque: 88,
      defesa: 62,
      magia: 90
    }
  }
  
  var cartaLay = {
    nome: "Guido",
    imagem: "https://static.wikia.nocookie.net/disney/images/1/10/Guido.png/revision/latest/scale-to-width-down/258?cb=20190531195148&path-prefix=pt-br",
    atributos: {
      ataque: 95,
      defesa: 40,
      magia: 10
    }
  }
  
  var cartaPaula = {
    nome: "Holly",
    imagem: "https://static.wikia.nocookie.net/disney/images/9/9b/Holly_shiftwell.png/revision/latest/scale-to-width-down/258?cb=20160216213435&path-prefix=pt-br",
    atributos: {
      ataque: 80,
      defesa: 60,
      magia: 100
    }
  }
  
  var cartaBela= {
    nome: "Billy",
    imagem: "https://static.wikia.nocookie.net/disney/images/7/71/58.PNG.png/revision/latest/scale-to-width-down/258?cb=20200604235717&path-prefix=pt-br",
    atributos: {
      ataque: 70,
      defesa: 50,
      magia: 95
    }
  }
  
  var cartaMolly = {
    nome: "Acer",
    imagem: "https://static.wikia.nocookie.net/disney/images/6/67/Acer.png/revision/latest/scale-to-width-down/258?cb=20190814121629&path-prefix=pt-br",
    atributos: {
      ataque: 95,
      defesa: 70,
      magia: 0
    }
  }
  
  var cartaPatricia = {
    nome: "Flip",
    imagem: "https://static.wikia.nocookie.net/disney/images/c/c4/Flip_dover.png/revision/latest/scale-to-width-down/258?cb=20200130163208&path-prefix=pt-br",
    atributos: {
      ataque: 90,
      defesa: 80,
      magia: 0
    }
  }
  
  var cartaMaquina
  var cartaJogador
  var cartas = [cartaMara, cartaKate, cartaMarina, cartaLay, cartaPaula, cartaBela, cartaMolly, cartaPatricia]
  //            0           1           2          3         4            5            6           7     
  
  var pontosJogador = 0
  var pontosMaquina = 0
  
  atualizaPlacar()
  atualizaQuantidadeDeCartas()
  
  function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length
  
    divQuantidadeCartas.innerHTML = html
  }
  
  function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  
    divPlacar.innerHTML = html
  }
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
  
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
  
    exibeCartaJogador()
  }
  
  function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.seekpng.com/png/full/827-8271192_mtg-blank-card-template-80541-mtg-blue-card.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
  
    var html = "<div id='opcoes' class='carta-status'>"
  
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value
      }
    }
  }
  
  function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
  
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">Venceu</p>'
      pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class="resultado-final">Perdeu</p>'
      pontosMaquina++
    } else {
      htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
    if (cartas.length == 0) {
      alert("Fim de Jogo")
      if (pontosJogador > pontosMaquina) {
        htmlResultado = '<p class="resultado-final">Jogador Venceu</p>'
      } else if (pontosMaquina > pontosJogador) {
        htmlResultado = '<p class="resultado-final">Jogador Perdeu</p>'
      } else {
        htmlResultado = '<p class="resultado-final">Jogo Terminou Empatado</p>'
      }
    } else {
      document.getElementById('btnProximaRodada').disabled = false
    }
  
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
  
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
  }
  
  function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.seekpng.com/png/full/827-8271192_mtg-blank-card-template-80541-mtg-blue-card.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""
  
    for (var atributo in cartaMaquina.atributos) {
      console.log(atributo)
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }
  
    var html = "<div id='opcoes' class='carta-status --spacing'>"
  
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
  function proximaRodada() {
    var divCartas = document.getElementById('cartas')
  
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true
  
    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
  
  }
  