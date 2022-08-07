function mudaricone() {
  var clicar = document.querySelector('.icone')
  clicar.innerHTML = ' Meus Projetos <i class="fa-solid fa-minus"></i>'
}

function voltaricone() {
  var fechar = document.querySelector('.icone')
  fechar.innerHTML = ' Meus Projetos  <i class="fa-light fa-plus"></i> '
}

function mensagem() {
  var whats = document.querySelector('.btn-1')
  whats.innerHTML = ' <i class="fa-brands fa-whatsapp"></i> Me chama no WhatsApp '
  whats.style.background = '#008000'
}

function mensagemout() {
  var whatsout = document.querySelector('.btn-1')
  whatsout.innerHTML = ' Solicite um orçamento > '
  whatsout.style.background = '#000'
}

function orcamento() {
  var tn1 = document.querySelector('input#site')
  var tn2 = document.querySelector('input#page')
  var n1 = String(tn1.value)
  var n2 = Number(tn2.value)
  var sim = document.querySelector('div#sim')
  sim.style.background = '#008000'

  if (n2 > 20) {
    sim.innerHTML += `O site no formato <strong>${n1}</strong>
    custa <strong>R$ 1500,00</strong>`
  } else {
    sim.innerHTML += `O site no formato <strong>${n1}</strong>
  custa <strong>R$ 500,00</strong>`
  }
}