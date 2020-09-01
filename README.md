# Matracometro

Bem vindos ao ZapZap Matracometro! 
Aqui você poderá analisar seus grupos do whatsapp e denunciar aqueles que não calam a boca.

Caso esteja só interessado em usar o serviço, acesse o site oficial:

https://matracometro.herokuapp.com/


## Como usar (Visão Usuário)

Abra o whatsapp pelo celular, nas opções do grupo clique em 'Baixar Conversa' (Baixe sem mídia inclusa).
O Whatsapp irá gerar um arquivo.txt! 

Ao acessar a página, há um botão para incluir arquivo. Ao clicar selecione seu arquivo e espere o navegador processar.


## Desenvolvedores

Clone o repositório.
Instale as dependencias node ```npm install```

Execute ```npm run server``` para rodar localmente.
Não é necessário configurar variaveis de ambiente.

### Arquitetura

O aplicativo foi desenvolvido em [React](https://pt-br.reactjs.org/) e hospedado gratuitamente no [Heroku](https://www.heroku.com/) no formato de aplicação [NodeJs](https://nodejs.org/) usando [express](https://expressjs.com/pt-br/).

A pasta src (em React) é convertida em uma pasta estatica 'build' (Web javascript). No Heroku é executado um servidor Node para o arquivo ``ìndex.js``` que cria um middleware para disponibilizar em formato url a pasta web estática.



