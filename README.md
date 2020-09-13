# Servidor do Snack (Time 7)

## Pré-requisitos

- npm (ou yarn)
- node
- Docker e Docker Compose

## Instalação

Utilize npm ou yarn para efetuar a instalação das dependências do projeto utilizando os comandos

`npm install` **ou** `yarn install`

## Rodando o servidor

Para rodar o servidor utilize os comandos

`npm run start` **ou** `yarn start`

## Iniciando e rodando o banco de dados

Para rodar o banco de dados utilize o comando

`$ docker-compose up -d`

Após a conclusão, para verificar o banco foi subido corretamente, rode

`$ docker ps`

e veja se existe um container de nome _"mysql-container"_. Pronto, agora o banco de dados está rodando.

Para adicionar as tabelas e views ao banco de dados é necessário rodar os comandos

```
$ docker exec -it mysql-container /bin/bash
$ cd /var/lib/sql_scripts
$ mysql -uroot -ptechneesafra < Geral.SQL
```
