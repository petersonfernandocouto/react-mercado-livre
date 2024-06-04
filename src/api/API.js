const ApiProdutos = async (query) => {
    
    const Response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);

    const Guardar = await Response.json(); // Aqui estamos extraindo os dados recebidos de Response em JSON. Utilizamos o await para aguardar a resposta.

    return Guardar.results; // Estamos pedindo para ele retornar results. Caso você coloque "https://api.mercadolibre.com/sites/MLB/search?q=COMPUTADOR" neste link, você pode substituir COMPUTADOR por iphone, etc. Clique em "results" e aparecerão as informações de "id", "title", "price", etc. São apenas estas informações que normalmente necessitamos, então quando você for pegar uma API deve saber onde estão as informações que deseja buscar.
}

export default ApiProdutos;

// Como estamos trabalhando com async, devemos esperar um retorno do 'fetch', por isso utilizamos await.

// O async permite que o JavaScript continue a executar outras operações enquanto aguarda a resposta da API.
