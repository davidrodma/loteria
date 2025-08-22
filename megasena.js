/* Scripts para ser colado no console do navegador, na página de seleção de números. */

function getApostas() {
  /**
   * Coloque suas apostas aqui no seguinte formato abaixo.
   * Solicite a IA gerar os números para você
   * com os critérios que você achar melhor.
   * Exemplos: números atrasados, equilíbrio entre pares e ímpares, melhores algoritmos para apostas etc.
   */
  return [
    [4, 12, 23, 34, 45, 56],
    [1, 7, 15, 28, 33, 59],
    [2, 9, 19, 24, 41, 60],
    [3, 8, 21, 37, 48, 52],
    [5, 14, 27, 36, 49, 58],
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
