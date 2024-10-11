# 💼 POC 4 - Fetch

🤔 **Descrição**
> Esta POC mostra o funcionamento do método assíncrono Fetch para consumo de APIs e como ele pode ser utilizado para fazer requisições HTTPS sem recarregar a página.

--- 

> [!IMPORTANT]
> ## Para que serve?

O método assíncrono Fetch do JavaScript é utilizado para buscar dados de uma página ou até servidores de forma assíncronas. É uma alternativa mais simples e poderosa ao antigo XMLHttpRequest.

## Funcionalidades:

Com requisições ao servidor de forma assíncrona, o código continua sendo executado sem esperar a resposta do servidor. Isso evita que a interface fique travada.

**Suporte a Promises:**

O método Fetch retorna uma Promise, o que facilita o tratamento de sucesso ou erro de uma requisição com os métodos ```.then()``` para sucesso e ```.catch()``` para erros.

**Requisições GET e POST:**

O Fetch pode ser usado para fazer requisições do tipo ```GET```, que obtém dados, ou ```POST```, para enviar dados ao servidor.

**Facilidade no Tratamento de Respostas:**

O Fetch retorna uma Response que pode ser manipulada para extrair diferentes formatos de dados, como:

- ```.json()``` – Para dados em formato JSON.
- ```.text()``` – Para dados em texto simples.
- ```.blob()``` – Para arquivos binários como imagens ou vídeos.

---

<h2 id="tecnologias">💻 Tecnologias</h2>

[![My Skills](https://skillicons.dev/icons?i=html,css,js&theme=light)](https://skillicons.dev)

---

 ⭐ **Home Page**
   - **Layout**: Introduzimos um layout básico com pouca estilização apenas para mostrar o funcionamento.
   - **Botão**:  No momento que o usuário clica no botão "Proximo Gatinho", o método Fetch será acionado gerando uma nova imagem.

---

📜 **Como funciona o método Fetch?**
   Esse código busca uma imagem aleatória de gato usando a API [The Cat API] e a exibe na página ao clicar no botão.

```javascript
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
   
**Passo a passo**:

**Aqui, dois elementos HTML são capturados pelo JavaScript**:
```btn``` armazena o botão identificado pelo ID 'mudar-imagem'. Este botão será usado para acionar a troca de imagem.
```imgDiv``` armazena o elemento com o ID 'imagem-idx1', que é onde a imagem do gato será exibida.

**Esta é uma função assíncrona que busca uma imagem de gato através da API**.
Primeiro, utiliza fetch para fazer a requisição HTTP para a API, que retorna uma lista com uma URL de uma imagem.
A resposta é convertida em JSON através do ```response.json()```, e a imagem é extraída com ```data[0].url```.
O código ```imgDiv.innerHTML = ''``` limpa o conteúdo atual do ```imgDiv``` (se já houver uma imagem exibida).
Um novo elemento ```<img>``` é criado e configurado com o atributo ```src``` (a URL da imagem) e ```alt``` (texto alternativo).
A imagem é então adicionada à div através de ```appendChild(img)```.
O console exibe uma mensagem de sucesso com a URL da imagem gerada.

```javascript
window.onload = () => {
  getCat('https://api.thecatapi.com/v1/images/search');
}
```
Esta linha garante que, ao carregar a página, a função getCat seja chamada automaticamente, exibindo uma imagem de gato logo ao abrir a página

```javascript
btn.addEventListener('click', getCat);
```
Aqui, adiciona-se um "ouvinte" de eventos ao botão btn, que chama a função getCat sempre que o botão for clicado. Isso faz com que uma nova imagem de gato seja buscada e exibida a cada clique.

🚀**Conferindo a execução do código**
   - **Primeiramente, abra o console. Para isso:**
      - Botão direito na página;
      - Clique em "Inspecionar Elemento";
      - Selecione o console;

   **Se o código for executado com sucesso:**
   ```javascript
      Imagem gerada com sucesso.
   ```

   **Se apresentar algum erro:**
   ```javascript
      Erro ao buscar imagem.
   ```

<h2 id="colabs">🤝 Colaboradores</h2>

- Rafael Trindade Dal Maso
- Fernando Lacava Olival Rodrigues
- Henrique Totti Ulbricht Lapa
