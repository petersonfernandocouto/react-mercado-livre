const BrazilianCurrency = (value) => {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });
    // A partir de "price" é apenas uma estilização para colocar o "R$" na moeda do Brasil, assim o valor não será 400000 e sim R$: 4.000,00. Você pode mudar o "BRL" para outra moeda, por exemplo "USD".
}

export default BrazilianCurrency;

// A nossa API está pegando as informações no link "https://api.mercadolibre.com/sites/MLB/search?q=iphone". Perceba que na última palavra do link tem "iphone", porém você pode substituir por qualquer outra coisa, exemplo "computador". Abra este link. Nele, clique em "result", pode clicar em qualquer "{...}" e estará escrito "thumbnail" com um link (irei pegar o link desta API), este link será uma imagem. Exemplo:
// "https://http2.mlstatic.com/D_881016-MLM51559383738_092022-I.jpg". Quando você abrir este link, a imagem que aparecerá é de qualidade baixa. E caso você substitua a letra "I" (antes de jpg) e colocar "W", a imagem será de boa qualidade.
