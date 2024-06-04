# react-mercado-livre
 Integração da API do Mercado Livre em um Site de Compras

<h1>Funcionamento:</h1>

O MarketPlaceAPI oferece uma experiência de compra semelhante ao Mercado Livre. Os usuários podem buscar produtos na barra de pesquisa, inserindo palavras-chave como "computador", "celulares", etc. Ao encontrar um produto desejado, eles podem clicar em "comprar".

<h1>Carrinho de Compras:</h1>

Cada produto selecionado pelo usuário é automaticamente adicionado ao carrinho do site. O carrinho permite que os usuários visualizem todos os itens que selecionaram para compra. Se necessário, eles podem excluir produtos individualmente do carrinho.

 ##

 Irei mostrar passo a passo como este projeto foi construído. Antes de começarmos, acesse o link do projeto:

 <h2> https://react-mercado-livre-tawny.vercel.app/   </h2>


 
<h2>Primeiros passos</h2>

1 - No arquivo principal, "App.js", temos 4 tags. Vou explicar o que cada uma representa.


2 - Primeiro, criei o Header dentro da tag "Provider".


3 - Vou falar sobre o Provider mais à frente, mas inicialmente ele foi criado porque
 quero compartilhar algumas informações dentro dele para seus
 filhos (Header, Products e Cart).


4 - O Header nada mais é que o cabeçalho do sistema. Dentro dele, temos uma logo, a tag
 SearchBar e Cart.


5 - Primeiro, faremos o design do sistema antes de explicar a lógica. Começando pela
 SearchBar.


6 - Layout da Tag SearchBar:
Dentro dela, criei um formulário que contém um "input" (campo de digitar) e um botão.



Após criar o designer...


##

Segunda Parte:

<h2>Logica do SearchBar Parte (1 de 3)</h2>


7 - Voltando para a SearchBar, iremos criar um estado para armazenar o valor digitado
 no input. Utilizaremos a constante BuscarValor, que inicialmente não tem valor, e
 utilizaremos a função setBuscarValor para atualizar BuscarValor.


8 - Em nosso input, utilizaremos o evento onChange.


9 - Criamos uma função dentro de onChange e, nela, definimos que a resposta/busca feita
 dentro deste input será o valor de setBuscarValor.


10 - A partir de agora, setBuscarValor terá um valor a cada momento em que o input for 
digitado.


11 - Agora, iremos colocar um valor para controlar isso. Colocaremos value={BuscarValor}.
 Como está escrito acima, o BuscarValor começa vazio e o setBuscarValor atualiza
 o BuscarValor.

 

##
Terceira Parte:


<h2> Criação Da API </h2>


12 - Na pasta api, temos um documento chamado "API.js" que contém a estrutura de uma API. 
Neste projeto, utilizamos a API do Mercado Livre, cujo endereço é 
"https://api.mercadolibre.com/sites/MLB/search?q=NOMEDOPRODUTOS" 
(no link, a parte onde está NOMEDOPRODUTOS pode ser substituída pelo que deseja buscar, 
por exemplo, celular).



13 - Criamos uma constante chamada ApiProdutos e a declaramos como async. O async permite que o 
JavaScript continue a executar outras operações enquanto aguarda uma resposta.



14 - Nesta constante, criamos uma função que tem como objetivo especificar de onde buscaremos as 
informações da API.



Const Response (AUMENTAR A FONTE AQUI)
15 - Dentro de ApiProdutos, a constante Response recebe este link contendo os produtos da API. 
Utilizamos o await para aguardar a informação e o fetch para captar o link da API.



16 - Nota-se que, após async, estamos colocando (query), assim como no link. Isso significa
 que query terá o mesmo valor digitado no input. Ou seja, se no input eu digitar "celular", 
o link da API será "https://api.mercadolibre.com/sites/MLB/search?q=celular".



17 - Agora, precisamos criar uma constante para extrair as informações em JSON.



Const Guardar
18 - A constante Guardar receberá a resposta de "Response". Note que utilizamos await novamente.



19 - E então pedimos para o return (retornar) a constante Guardar.results. Irei explicar o 
motivo do results na linha a seguir.



20 - Explicação de results: Se você acessar o 
link "https://api.mercadolibre.com/sites/MLB/search?q=iphone", irá notar que existe este 
results. Clicando nele, você verá as informações que realmente são necessárias para nossa API.
 Dentro de results, temos título, imagem, preço, etc. Portanto, results contém as informações 
que precisamos e não incluiremos outros dados para deixar o sistema mais leve.

##

Quarta PARTE

<h2>Criação do layout/Logica do Products.jsx: </h2>


21 - Vamos criar dois arquivos para produtos. O primeiro será "Products" e dentro dele uma outra
tag chamada "ProductsCards".


Products.jsx explicando a lógica:

22 - Dentro do arquivo "Products", vamos criar uma constante que contém { Products, setProducts }.
Utilizaremos o "useContext" importado do React. (Lembrando que a const atualmente está dentro
do Provider, poderá utilizar a estrutura que está neste arquivo "Provider.jsx" e colar dentro de
Products.jsx)


23 - Como o useContext precisa de um valor inicial, deixaremos nesta estrutura:
const [ Products, setProducts ] = useState ( [] ).



24 - Vamos então criar o useEffect. Deveremos importar esta biblioteca através do React.


25 - O useEffect recebe uma função e estamos importando nossa ApiProdutos que se encontra no 
arquivo que criamos, Api.js. Note que ApiProdutos possui uma props ("Celulares"). Vou explicar 
o que isso significa na linha a seguir.


26 -  Essa props "celulares" substitui o "query" que se encontra dentro do Api.js.
Então, em vez de o link ser::
(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`) ele é:
(`https://api.mercadolibre.com/sites/MLB/search?q=${celulares}`).


27 - Dentro do useEffect, usamos o setLoading. Não vou abordar muito sobre isso agora, 
mas basicamente, é uma tela de carregamento que aparecerá enquanto os produtos estão sendo 
buscados.

28 - Acredito que seja melhor fazermos um teste para identificar se estamos conseguindo listar
os produtos. Após fazer o useState e o useEffect, coloque a estrutura abaixo.


29 - return ( 

	<section>

		{Products.map( (product) => <p key={product.title}> {product.title} </p>
			
	</section>

)


30 - Lembre-se de exportar este documento para visualização.

31 - Deverá aparecer todos os títulos de celulares na tela, exemplo,
 "Apple iPhone etc.". Caso não esteja aparecendo nada, existe algum erro.

Após fazer o teste de visualização do título, podemos apagar o parágrafo
<p> e substituir por <ProductsCards />, que por sinal, iremos criar essa tag
agora.

##

<h2> Layout da Tag ProductsCards.jsx (1/2): </h2>


32 - Dentro desta tag, temos uma section cujo objetivo é criar um tipo
de "card". Dentro desses cards, temos uma imagem, valor do produto, título e 
um botão.

33 - Basicamente, o Products é onde ficarão os produtos à venda.

34 - Existe o import do propTypes e estamos utilizando-o nas últimas linhas deste 
documento. Não existe a necessidade de utilizá-lo, mas ele ajuda na verificação 
de tipos de props, se é uma string, etc.

35 - Dentro da função ProductsCards, estamos recebendo uma prop que eu chamei de 
"data".

36 - A seguir, criamos uma constante {title, thumbnail, price} e nela dizemos que
está recebendo "data". (Lembrando que "title", "thumbnail", "price" têm que ser 
exatamente os nomes que estão na API (result)).

37 - Isso quer dizer que "data" guardará todas essas informações como título,
imagem e preço.

38 - Agora é só realocar thumbnail dentro da imagem, etc. (dentro do return).

39 - A lógica neste arquivo não termina por aqui. Devemos prosseguir, mas antes 
devemos testar e verificar se a lógica que fizemos está funcional.

40 - No arquivo principal Products.jsx, dentro da section, exclua:

	  {
            Products.map ( (produtc) => <ProductsCards key={produtc.id} data={produtc} />)
          }

41 - coloque <ProductsCards data= { {title: "teste", price"123123"} }

42 - verifique se title e price está aparecendo.

43 - após fazermos o teste podemos deixar a estrutura que antes estava:

	{
            Products.map ( (produtc) => <ProductsCards key={produtc.id} data={produtc} />)
            
          }

44 - Você irá verificar que as imagens, preços e títulos estão aparecendo.
Caso não estejam, algo no código está errado.

##

Quinta parte


<h2> Logica do SearchBar Parte (2 de 3) </h2>


     Agora que temos os produtos na tela (Lembrando que, de início, teremos celulares como
exemplo) e estamos utilizando a API do Mercado Livre, o usuário poderá procurar outro 
objeto/aparelho para comprar. Para fazermos isso, temos que pegar a informação do que o usuário 
digitou/procura e mostrar as opções de compra na tela. Por esse motivo, voltaremos para
SearchBar, já que o input de digitação se encontra neste componente.



(ATENÇÃO: dentro de SearchBar, tínhamos uma const que foi levada para o documento Provider.
O formato é: const [BuscarValor, setBuscarValor] = useState(""). Você pode colocar esse formato 
dentro de SearchBar).



45 - Primeiro passo é deixarmos nosso formulário (que contém o campo de digitação e um botão) 
em submit e darmos um nome a ele. Neste projeto, utilizamos o nome "HandleSearch".



46 - Então, criaremos uma Arrow function para "HandleSearch" e a primeira coisa que vemos é
"preventDefault". Toda vez que pesquisamos algo no input, a página recarrega, e isso faz com que 
o Loading não seja executado.



47 - Sobre o Loading, não irei abordar, reforçando novamente que o Loading é uma função
(o sistema funcionará sem o Loading) que criei apenas para design. Essa função faz com que, 
enquanto a página não recarrega, apareça uma tela de Loading.



48 - O "preventDefault" faz com que o Loading seja executado toda vez que digitamos algo 
dentro do input.


(ATENÇÃO: De 50 até 51, você provavelmente não conseguirá executar devido à não criação de
Context. Leia a 52. E caso você queira já fazer a 50 e 51, poderá executar em
console.log(BuscarValor) para verificar se o valor do input está sendo executado).



49 - Criamos uma const chamada Produtos. Nela, estamos dizendo que o nosso documento de API.js, 
na props dele, receberá o "BuscarValor". Sabemos que o valor do nosso input (campo de digitação) 
recebe "BuscarValor". Sendo mais específico, o link da API dentro de ${query} passa a ser o valor
digitado no input.



50 - Quando executarmos as funções acima, o "setBuscarValor" faz com que o campo do input fique 
limpo após a digitação e clicarmos em buscar/enter.



51 - Antes de irmos para "setProducts(Produtos)", precisamos enviar a informação da const
"Produtos" (criada dentro de SearchBar) para dentro do componente/pasta Products. Sabemos que 
não conseguimos levar uma const que vem do "filho" para seu superior "Pai". Então, precisamos 
criar um Contexto (Pai) para que todos os seus filhos consigam herdar as informações de seu pai 
caso necessário.


##

<h2>Criação do Contexto </h2>


52 - Primeiro passo: Em App.js, você perceberá que existe a tag Provider e dentro dela existem 
outros componentes (Header, Products, etc.).


53 - Então, tudo o que está dentro de Provider conseguirá acessar as informações que deseja
buscar.


54 - Criaremos, então, uma pasta e o arquivo (neste sistema, o nome da pasta é Context).


55 - No arquivo principal, que é Context.js, iremos importar uma biblioteca "createContext" e,
por último, um const "Contexto" que utilizará essa biblioteca. E daremos export no Contexto.



56 - Iremos criar outro documento Provider que irá importar o Context.js para prover as
informações aos seus filhos.

57 - Dentro de Provider, notamos que ele tem uma props (children). É exatamente essa props que
dará as informações dadas pelo provider aos seus filhos (tudo que está dentro da tag Provider
em App.js).


58 - Nela, percebemos que dará um return. Colocaremos a Tag Contexto 
(Contexto.js) + "ponto (.)" + o Provider (Provider.jsx).


59 - Colocaremos um value e daremos um nome a ela. Neste sistema, utilizamos "acesso".


60 - Então, o Provider terá um valor, e esse valor poderá ser consultado pelos seus filhos. 
Observe os códigos dentro de Provider.jsx. Nela, contém uma const chamada "acesso", que contém 
as informações que seus filhos poderão consumir.


62 - Voltando em <Contexto.Provider value={acesso}>, dentro dela colocaremos o "children",
que é a props do Provider.


##

Sexta Parte:

<h2>Lógica do SearchBar Parte (3 de 3) </h2>

63 - Agora que o Contexto foi criado, poderemos enviar e receber informações de arquivos e fazer 
a interação entre eles.

64 - Iremos importar no documento SearchBar a biblioteca (useContext).

65 - setProducts(Produtos) = Precisamos fazer com que o arquivo SearchBar.jsx receba
a setProducts localizada em Products.jsx e em Provider.jsx (Provider.jsx é o nosso Contexto). 
Então, como o Provider é o pai, poderemos buscar o setProducts através dele.


66 - setLoading(false) = Após executar tudo o que está acima, precisamos dizer
(caso você faça a função de Loading) que o setLoading passa a ser falso. Se nós deixássemos
verdadeiro, quando fôssemos digitar algo no input, o Loading ficaria rodando para sempre.


##


<h2> Resumindo SearchBar e Products.jsx: </h2>


O Products.jsx está recebendo a ApiProdutos com "celulares" como props. E em SearchBar, temos um input (campo de digitação). 
O valor digitado nele entra dentro da props de ApiProdutos. Ou seja, o valor inicial da API é "celulares", e se digitarmos "Computadores", o valor passa a ser o que 
foi digitado no input do SearchBar.


##


Sexta Parte:

<h2> Criação do Carrinho: </h2>

Teremos 3 arquivos nesta criação: Cart.jsx, CartItens.jsx e CartButton.jsx.

Cart.jsx: " "

CartItens.jsx: " "

CartButton.jsx: " "

Criação do Layout/Lógica do Cart.jsx Parte (1 de 3):

67 - O arquivo principal (Cart.jsx) será importado no App.js.

68 - Neste arquivo, teremos o CartItens (que serão os produtos selecionados pelo usuário),
e nele conterá a imagem do produto, descrição e valor. Por fim, teremos o valor total da compra.

69 - Ou seja, a section terá duas div's: uma que contém os produtos e a outra div que contém o 
valor total da compra.



##

<h2>Criação do Layout/Lógica do CartItens.jsx (PARTE 1 DE 2):</h2>

70 - Neste documento, iremos criar o cart dos produtos que foram selecionados.


71 - E neste cart, teremos imagem, título e preço.


72 - Como ainda não fizemos a lógica em "Cart.jsx", precisamos colocar algo dentro de imagem, 
título e preço para podermos visualizar o layout. Então, coloque uma imagem teste, um título 
qualquer e um valor qualquer. Faça a estilização.


73 - Feita a estilização, agora teremos que exportar o "CartItens.jsx" para o arquivo principal 
"Cart.jsx". Porém, queremos informar que o CartItens.jsx quer buscar algumas informações que 
estão em outros arquivos, e deveremos deixar claro onde exatamente queremos colocar essas 
informações.


74 - Dentro de CartItens, iremos colocar a props e daremos um nome. Neste projeto, colocamos o 
nome "data".


75 - Agora, deveremos informar o que o "data" espera receber. Por esse motivo, criaremos uma 
const.


76 - Dentro desta const, colocaremos "title, thumbnail, price" e diremos que é igual a "data".


77 - Como nós já fizemos a estilização do nosso cart (imagem, título e preço), podemos apagar o 
que usamos para fazer a estilização e substituir por "title, thumbnail, price" nos seus devidos 
lugares.


Neste momento, precisamos fazer a função do botão "Comprar". Toda vez que clicarmos neste botão, 
a opção de comprar deverá aparecer em nosso "Cart.jsx".


78 - Precisamos criar um estado para que o nosso Cart.jsx possa utilizar.


79 - Sendo mais específico, iremos criar um estado onde guardaremos as informações como img, 
title e price após clicarmos no botão de compra. E essas informações serão utilizadas pelo 
Cart.jsx.


80 - Então, vamos criar esse estado em Provider.jsx.

81 - Estrutura: const [CartItem, setCartItens] = useState([])

##

<h2>Layout da Tag ProductsCards.jsx (2/2): </h2>


Nosso botão de compra está neste arquivo, então é nele que vamos trabalhar.


82 - Neste arquivo, iremos criar um botão onClick dentro do button.


83 - Após darmos um nome a ele, iremos fazer a seguinte função:


84 - Iremos pegar nossa const que está em provider.jsx e colocá-la neste arquivo "ProductsCards".


85 - Lembrando que o "CartItem, setCartItens" começa vazio ([]), porém, no arquivo 
"ProductsCards", o () colocaremos o "Contexto".


86 - Então, no botão "AddCompras", iremos fazer uma arrow function que pegará o setCartItens e 
diremos que ele atualizará o CartItem, pegando as informações do "data".


87 - Explicando o formato: setCartItens([ ...CartItem, data ])


88 - Lembrando que "data" nada mais é que "title, thumbnail, price" (Como está neste arquivo).


89 - Como temos mais de um item no "data", por esse motivo utilizamos os "...".


90 - Os 3 pontos "...CartItem" passam a ser "item1, item2, item3".

##

<h2>Criação do Layout/Lógica do Cart.jsx Parte (2 de 3): </h2>


Agora que temos o valor de CartItem, podemos utilizá-lo em nosso arquivo que contém o carrinho.


91 - Iremos criar uma const e puxar nosso "CartItem" utilizando o "Contexto".


92 - Então, no return, iremos colocar o "CartItem" e pedir para mapear ele, faremos uma arrow 
function e, dentro dele, colocaremos o nosso arquivo "CartItens.jsx" (Nossa estrutura do cart).


93 - Isso faz com que "const CartItem" trabalhe com "CartItens.jsx", então o "title, thumbnail, 
price" sejam preenchidos.


94 - Estrutura: CartItem.map((cartitens) => <CartItens key={cartitens.id} data={cartitens} />)


##

Agora que temos os itens dentro do carrinho, precisamos fazer as últimas 3 lógicas:

A primeira lógica é criar um botão para excluir o item do carrinho.
A segunda lógica é criar o valor total de cada item dentro do carrinho.
A terceira lógica é criar um botão do carrinho para abrir e fechar.
Primeiro, iremos criar a função que informe o valor total da compra.


<h2>Criação do Layout/Lógica do Cart.jsx Parte (3 de 3):</h2>


95 - Dentro deste arquivo "Cart.jsx", iremos criar uma const chamada "ValorPreco".


96 - Iremos informar que o "ValorPreco" é igual a "CartItem".


97 - Explicando o "reduce": basicamente, o reduce tem a função de reduzir um array em um só. 
Exemplo: o "ValorPreco" possui o valor de "1 / 2 / 3 / 8", o reduce transforma isso em "14".


98 - Iremos ter 2 parâmetros "acumulador e item". No final deste código, percebe-se que temos o 
número "0", isso quer dizer que o "acumulador" inicia com "0".


99 - Iremos pedir para dar um return, colocaremos o "item.price". Lembrando que o price estamos 
pegando do nosso Provider "CartItem".


100 - Então será "item.price + acumulador".

101 - Como ficará? O acumulador inicia como "0". Quando nós clicamos em "Comprar", 
o "item.price" passa a valer o valor correspondente ao aparelho/objeto.


102 - Digamos que o preço seja R$ 2.000,00. Agora, o acumulador passa a ser este valor, e caso 
nós cliquemos em comprar novamente (outro aparelho que custa R$ 3.000,00), o acumulador passa a 
ser R$ 5.000,00.


103 - Agora, só colocamos o "ValorPreco" dentro do nosso return em "Cart.jsx".

Assim, teremos o valor total da compra.

##

Iremos construir a lógica do recolhimento ou abertura do carrinho.


Começaremos pelo layout:


<h2> Lógica da Tag CartButton: </h2>


104 - Não irei abordar muito sobre a construção do layout do carrinho (abrir e fechar), 
porém em "Cart.scss" tem os "transform" e "transition" bem detalhados. Basicamente, quando 
clicamos no carrinho, ele abrirá suavemente, assim como quando fechamos.


105 - Outra coisa importante é mostrar para o usuário quantos aparelhos/objetos tem no carrinho 
(quando o carrinho estiver fechado). Bem simples, apenas utilizamos o length.


106 - A estrutura está assim: 
{CartItem.length > 0 && <span className='Cart-Status'>{CartItem.length}</span>}


107 - Estamos dizendo o seguinte: se o "CartItem" for maior que zero, execute a contagem 
(1, 2, 3, 4, 5, etc.).


108 - Obviamente, o layout da contagem (class="Cart-Status") está em Cart.scss.


<h3> Iremos fazer a abertura e fechamento do carrinho. </h3>


109 - Iremos colocar a seguinte estrutura: const [AbreCart, setFechaCart] = useState(false) 
dentro de Provider.


110 - Feito isso, estamos dizendo que o "AbreCart" começa como falso e iremos utilizar o 
setFechaCart para modificar o valor de "AbreCart".


111 - Agora, iremos importar essa const dentro de CartButton.jsx e Cart.jsx.


112 - Começaremos por "Cart.jsx", na section deste arquivo está assim:
<section className={cart ${AbreCart ? "cart--active" : ""}}>


113 - Estamos dizendo que, se o "AbreCart" vier como true, execute a class "cart--active". 
E se não, ":" não execute nada " ".


Lembrando que de inicio o "AbreCart" inicia falso.


114 - Agora voltaremos ao nosso arquivo "CartButton" e iremos importar o "AbreCart, 
setFechaCart".


115 - Como em nosso provider o "AbreCart, setFechaCart" utiliza estados, só precisamos fazer uma 
função para manipulá-los.


116 - Dentro do "CartButton", no "button", faremos um onClick simples para manipular.


117 - Estrutura: <button onClick={() => setFechaCart(!AbreCart)}>


118 - Estamos dizendo o seguinte: o setFechaCart será diferente de "AbreCart". Ou seja, se o 
setFechaCart é verdadeiro, o AbreCart é falso, e vice-versa.

##

<h3> E por fim, iremos fazer o botão de exclusão de itens no carrinho. </h3>


<h2>Criação do Layout/Lógica do CartItens.jsx (PARTE 2 DE 2):</h2>


119 - Dentro do nosso botão, criaremos o onClick. Neste projeto, o nome é "RemoveItem".


120 - Agora, em nossa const do "data", deveremos acrescentar o "id". O id fica responsável por 
toda a estrutura como "title, thumbnail, price".


121 - Dentro do RemoveItem, criamos a const updatedItem. Estrutura:

const updatedItem = CartItem.filter( (item) => item.id !== id);

setCartItens(updatedItem)


122 - Nela, estamos pegando o "CartItem" e iremos filtrar esses produtos. Ou seja, o carrinho 
irá renderizar sem alguns produtos que removemos ("item.id !== id").

123 - E, no fim, pedimos setCartItens(updatedItem). Isso significa que queremos que renderize 
atualizada a lista de produtos do carrinho.

##

<h2>BrazilianCurrency.js</h2>

É um documento feito para validação da moeda nacional. Normalmente, quando colocamos números, 
ele fica (400000) e, quando fazemos o formato "currency", o número ficará (R$: 4.000,00).

<h2>Sobre o Loading.jsx: </h2>

Como dito anteriormente, o Loading é uma tela de carregamento que será executada quando a API 
não estiver pronta para uso.
