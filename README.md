# Space Flight News

Projeto para implementação de uma pequena aplicação usando o Vue 3 e a Composition API.

## Tecnologias usadas

- [VueJS (Versão 3)](https://v3.vuejs.org/)
- [Vuex (Versão 4)](https://next.vuex.vuejs.org/)
- [Axios](https://github.com/axios/axios)
- [DayJS](https://github.com/iamkun/dayjs/)
- [FeatherIcons](https://feathericons.com/)

## Instalação - Servidor de desenvolvimento

Para rodar o projeto você deve clonar o repositório do git, como está a seguir:

```sh
$ git clone https://github.com/mateusmcordeiro/space-flight-news.git spaceflight
$ cd spaceflight
$ cp .env.example .env
```

Em seguida, edite o .env com o link da api do spaceflight, caso já não esteja configurada e inicialize o projeto:

```sh
$ npm install
$ npm run serve
```

## Instalação - Docker

Para rodar o projeto você deve clonar o repositório do git e configurar o arquivo .env com o link da api do spaceflightnewsapi, como está a seguir:

```sh
$ git clone https://lab.coodesh.com/mateusmcordeiro/space-flight-news.git spaceflight
$ cd spaceflight
$ cp .env.example .env
```

seu .env deve estar assim:

```
VUE_APP_MAIN_API_URL=https://api.spaceflightnewsapi.net/v3/
```

Em seguida, instale todos os pacotes do projeto e rode o build para "compilar" o projeto:

```sh
$ npm install
$ npm run build
```

e por fim, você deve rodar rodar os comandos do docker-compose para criar os containers do nginx;

```
docker-compose up
```

### Importante

Em ambos os casos, a porta 8080 não deve estar em uso antes da inicializaçao do projeto/docker. Dando tudo certo, a aplicaçao estará acessível pelo link:

```
http://localhost:8080/
```
