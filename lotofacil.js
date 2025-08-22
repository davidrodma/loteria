/* Scripts para ser colado no console do navegador, na página de seleção de números. */

function getApostas() {
  /**
   * Coloque suas apostas aqui no seguinte formato abaixo.
   * Solicite a IA gerar os números para você
   * com os critérios que você achar melhor.
   * Exemplos: números atrasados, equilíbrio entre pares e ímpares, melhores algoritmos para apostas etc.
   */
  return [
    [2, 4, 5, 6, 8, 10, 11, 12, 14, 15, 18, 20, 21, 23, 25],
    [1, 3, 4, 5, 6, 10, 13, 15, 16, 18, 19, 20, 22, 24, 25],
    [2, 6, 7, 8, 9, 11, 13, 14, 17, 18, 20, 21, 22, 24, 25],
  ]
}

/**
 * Clica nos números da aposta (se ainda não estiverem selecionados),
 * depois clica em "colocarnocarrinho" e aguarda 3 segundos.
 */
async function clicarNumerosDoArray(numeros) {
  // Clicar cada dezena
  for (const num of numeros) {
    const id = "n" + String(num).padStart(2, "0")
    const el = document.getElementById(id)
    if (
      el &&
      el.classList.contains("data-selecionar-numero-lotofacil") &&
      !el.classList.contains("selected")
    ) {
      el.click()
    }
  }

  // Clicar no botão de colocar no carrinho
  const btn = document.getElementById("colocarnocarrinho")
  if (btn) {
    btn.click()
  }

  // Esperar 3 segundos antes de continuar
  await new Promise((resolve) => setTimeout(resolve, 3000))
}

/**
 * Percorre todas as apostas, executando clicarNumerosDoArray para cada uma.
 */
async function executarApostas() {
  const apostas = getApostas()
  for (const aposta of apostas) {
    await clicarNumerosDoArray(aposta)
  }
}

// Inicia o processo
executarApostas()
