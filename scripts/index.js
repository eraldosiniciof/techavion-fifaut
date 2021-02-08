botao.addEventListener('click', () => {
    let compra = document.querySelector('#valor-de-compra')
    let comprado = parseFloat(compra.value)
    if (comprado < 10) {
        alert('O valor de compra não pode ser inferior a 10k')
    } else if (comprado > 200) {
        alert('O valor de compra não pode ser superior a 200k')
    } else {
        let vendido = parseFloat(venderPor(comprado))
        totalCompra.push(comprado)
        totalVenda.push(venda)
        textoVenda.textContent = vendido


        let totalComprados = totalCompra.length
        totalItens.textContent = `Qtde comprados: ${totalComprados}`

        let totalC = calcularTotalCompra(totalCompra)
        let totalV = calcularTotalVendas(totalVenda)
        totalCompradosValor.textContent = `Total Investido: ${totalC}`
        totalVendidoValor.textContent = `Total Venda: ${totalV}`

        let lucroLiquido = (totalV * .95) - totalC
        lucroLiquidoBox.textContent = `Lucro Líquido: ${lucroLiquido.toFixed(2)}`
    }
})