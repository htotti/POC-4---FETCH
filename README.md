# 💼 POC 4 - FUNCIONALIDADES E EXEMPLO SOBRE O MÉTODO FETCH 💼

--- 


> [!IMPORTANT]
> ## PARA QUE SERVE?



O método fetch é uma API moderna do JavaScript usada para realizar requisições assíncronas a servidores. Ela permite que você obtenha ou envie dados entre seu aplicativo e um servidor remoto de forma fácil e eficiente, sem recarregar a página. É uma alternativa mais simples e poderosa ao antigo XMLHttpRequest.

Principais Funcionalidades do fetch:
Requisições Assíncronas:

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
> ⚙️LINGUAGENS UTILIZADAS.
   - **HTML5**: Utilizado para o layout inicial da página.
   - **CSS**: Usado para estilização da página.
   - **JavaScript**: Usado para a criação do Fetch.



> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
