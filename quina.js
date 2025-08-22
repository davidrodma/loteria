/* Scripts para ser colado no console do navegador */

function getApostas() {
  /**
   * Coloque suas apostas aqui no seguinte formato abaixo.
   * Solicite a IA gerar os números para você
   * com os critérios que você achar melhor.
   * Exemplos: números atrasados, equilíbrio entre pares e ímpares, melhores algoritmos para apostas etc.
   */
  return [
    [12, 66, 16, 9, 4],
    [49, 33, 52, 4, 15],
    [70, 9, 7, 49, 56],
    [7, 56, 69, 15, 27],
    [39, 76, 20, 16, 7],
    [9, 26, 75, 49, 11],
    [9, 23, 18, 12, 53],
    [18, 33, 62, 15, 9],
    [12, 69, 11, 26, 27],
    [49, 26, 15, 45, 73],
    [52, 39, 20, 76, 70],
    [33, 45, 44, 62, 39],
  ]
}

/**
 * Clica nos números da aposta (se ainda não estiverem selecionados),
 * depois clica em "colocarnocarrinho" e aguarda 3 segundos.
 */
async function clicarNumerosDoArray(numeros) {
  for (const num of numeros) {
    const id = "n" + String(num).padStart(2, "0")
    const el = document.getElementById(id)
    const ngClick = el?.getAttribute("ng-click")
    if (
      el &&
      ngClick?.includes("vm.selecionar(numero)") &&
      !el.classList.contains("selected")
    ) {
      el.click()
    }
  }

  const btn = document.getElementById("colocarnocarrinho")
  if (btn) btn.click()

  // espera 3 segundos antes de continuar
  await new Promise((resolve) => setTimeout(resolve, 3000))
}

/**
 * Para cada aposta retornada por getApostas(), chama clicarNumerosDoArray em sequência.
 */
async function executarApostasMegaSena() {
  const apostas = getApostas()
  for (const aposta of apostas) {
    await clicarNumerosDoArray(aposta)
  }
}

// Inicia o processo
executarApostasMegaSena()
