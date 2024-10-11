# 💼 POC 4 - FUNCIONALIDADES E EXEMPLO SOBRE O MÉTODO FETCH API 💼

🤔 - **DESCRIÇÃO E DETALHAMENTO DO PROJETO** 🤔
> Criamos esse POC, para mostrar o funcionamento do método assíncrono API FETCH, e como ele pode ser usado para buscar novos dados HTTP sem ter que recarregar a página.
> A página é simples apenas para mostrar o funcionamento, onde o usuário clica no botão e o método busca uma imagem nova de um gato

--- 


> [!IMPORTANT]
> ## PARA QUE SERVE?



O método fetch é uma API moderna do JavaScript usada para realizar requisições assíncronas a servidores. Ela permite que você obtenha ou envie dados entre seu aplicativo e um servidor remoto de forma fácil e eficiente, sem recarregar a página. É uma alternativa mais simples e poderosa ao antigo XMLHttpRequest.

- **Principais Funcionalidades do fetch**:

Permite fazer requisições ao servidor de forma assíncrona, ou seja, o código continua sendo executado sem esperar a resposta do servidor. Isso evita que a interface fique travada.
Suporte a Promises:

O método fetch retorna uma Promise, o que facilita o tratamento de sucesso ou erro de uma requisição com os métodos .then() (para sucesso) e .catch() (para erros).
Requisições GET e POST:

O fetch pode ser usado para fazer requisições do tipo GET (para obter dados) ou POST (para enviar dados ao servidor), além de outros métodos HTTP como PUT, DELETE, etc.
Facilidade no Tratamento de Respostas:

O fetch retorna uma Response que pode ser manipulada para extrair diferentes formatos de dados, como:
.json() – para dados em formato JSON.
.text() – para dados em texto simples.
.blob() – para arquivos binários como imagens ou vídeos.
Headers Personalizáveis:

Permite a configuração de cabeçalhos HTTP personalizados para enviar informações como tokens de autenticação, tipo de conteúdo, etc.
Suporte a CORS (Cross-Origin Resource Sharing):

O fetch respeita as políticas de CORS, que determinam como os recursos podem ser acessados entre diferentes domínios.
Opções Flexíveis de Configuração:

Permite configurar diversas opções na requisição, como:
Método HTTP (GET, POST, PUT, DELETE, etc.).
Corpo da requisição (para envio de dados).
Modo de requisição (como 'cors', 'no-cors', 'same-origin').
Suporte a Requisições e Respostas Baseadas em Streams:

Permite trabalhar com grandes volumes de dados utilizando Streams, carregando os dados em partes sem sobrecarregar a memória.

---

> [!NOTE]
> ⚙️**LINGUAGENS UTILIZADAS**.
   - **HTML5**: Utilizado para o layout inicial da página.
   - **CSS**: Usado para estilização da página.
   - **JavaScript**: Usado para a criação do Fetch.


---

 ⭐ **NOSSA PÁGINA**.
   - **LAYOUT**: Introduzimos um layout básico com pouca estilização apenas para mostrar o funcionamento.
   - **BOTÃO**:  Na hora que o usuário clica no botão "Proximo Gatinho" o método FETCH será acionado gernado uma nova imagem.
   - IMAGEM

---

📜 **EXPLICANDO COMO FUNCIONA O MÉTODO API FETCH**:
   - Esse código busca uma imagem aleatória de gato usando a API [The Cat API] e a exibe na página ao clicar no botão.

```
   const btn = document.getElementById('mudar-imagem');
   const imgDiv = document.getElementById('imagem-idx1');
   
   const getCat = async () => {
     try {
       const response = await fetch('https://api.thecatapi.com/v1/images/search');
       const data = await response.json();
   
       imgDiv.innerHTML = '';
       const img = document.createElement('img');
       img.src = data[0].url;
       img.alt = 'Imagem de um gato';
       imgDiv.appendChild(img);
   
       console.log('Imagem gerada com sucesso: ', data[0].url);
     } catch (error) {
       console.log('Erro ao buscar imagem: ', error);
     }
   };
   
   window.onload = () => {
     getCat('https://api.thecatapi.com/v1/images/search')
   }
   
   btn.addEventListener('click', getCat);
```
   
   -**Passo a passo**:

**Aqui, dois elementos HTML são capturados pelo JavaScript**:
btn armazena o botão identificado pelo ID 'mudar-imagem'. Este botão será usado para acionar a troca de imagem.
imgDiv armazena o elemento com o ID 'imagem-idx1', que é onde a imagem do gato será exibida.

**Esta é uma função assíncrona que busca uma imagem de gato através da API**.
Primeiro, utiliza fetch para fazer a requisição HTTP para a API (https://api.thecatapi.com/v1/images/search), que retorna uma lista com uma URL de uma imagem.
A resposta é convertida em JSON através de response.json(), e a imagem é extraída como data[0].url.
A linha imgDiv.innerHTML = ''; limpa o conteúdo atual do imgDiv (se já houver uma imagem exibida).
Um novo elemento <img> é criado e configurado com o atributo src (a URL da imagem) e alt (texto alternativo).
A imagem é então adicionada à div através de appendChild(img).
O console exibe uma mensagem de sucesso com a URL da imagem gerada

```
window.onload = () => {
  getCat('https://api.thecatapi.com/v1/images/search');
}
```
Esta linha garante que, ao carregar a página, a função getCat seja chamada automaticamente, exibindo uma imagem de gato logo ao abrir a página

```
btn.addEventListener('click', getCat);
```
Aqui, adiciona-se um "ouvinte" de eventos ao botão btn, que chama a função getCat sempre que o botão for clicado. Isso faz com que uma nova imagem de gato seja buscada e exibida a cada clique.


---

🚀**CONFERINDO SE O CÓDIGO FOI EXECUTADO COM SUCESSO**
   -


