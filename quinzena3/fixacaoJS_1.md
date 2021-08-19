```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioInicial = 2000 
  if (qtdeCarrosVendidos > 0 && valorTotalVendas > 0 ){
      const valorDoCarro = (valorTotalVendas/ qtdeCarrosVendidos)
      const cincoPorCentoDoValorDoCarro = (5/100) * valorDoCarro
      const salarioFinal = salarioInicial + (qtdeCarrosVendidos * (100 + cincoPorCentoDoValorDoCarro))
        return salarioFinal
}else{
  return salarioInicial}
```

}

