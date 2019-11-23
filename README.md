Projeto de conclusão da matéria de 'Desenvolvimento de APIS com NodeJS' do curso de MBA em Mobile Development turma 18MOB.

A API tem como objetivo disponibilizar um CRUD de clientes e usuários. Somente usuários autenticados poderão ter acesso ao CRUD. 

A API foi utilizada usando os conceitos de: Routes, Controllers, Models e Middlewares.

Segue abaixo algumas tecnologias/serviços utilizados:
+ Heroku 
+ Firebase
+ JWT
+ Express
+ Cache Manager
+ Body Parser

Passo a passo para uso da API
Rota no Heroku ==> http://nodeapi18mob.herokuapp.com

POST - Rota p/ Buscar Token (as rotas só funcionam com autenticação) ==> http://nodeapi18mob.herokuapp.com/auth

Para todas as rotas abaixo incluir autenticação no Header
KEY -> x-access-token
VALUE -> string do token da rota de auth

GET - Rota p/ Buscar Usuarios ==> http://nodeapi18mob.herokuapp.com/users
GET - Rota p/ Buscar Clientes ==> http://nodeapi18mob.herokuapp.com/clients

POST - Rota p/ criar Usuario ==> http://nodeapi18mob.herokuapp.com/users
Incluir JSON no Body:
   {
        "email": "teste@teste.com",
        "name": "Teste",
        "password": "123456"
    }

POST - Rota p/ criar Cliente ==> http://nodeapi18mob.herokuapp.com/clients
Incluir JSON no Body:
   {
        "CPF": "999.999.999-99",
        "RG": "999999999-9",
        "name": "Teste"
    }
    
 PUT - Rota p/ alterar Usuário ==> http://nodeapi18mob.herokuapp.com/users/JsBzMyaw2uQFkNaFNvvh 
 Passar Id como prâmetro na rota e incluir JSON no Body:
   {
      "name": "Altera Teste"
   }
    
 PUT - Rota p/ alterar Cliente ==>   http://nodeapi18mob.herokuapp.com/clients/W98EZcLh64gGdB9XZRAm
 Passar Id como prâmetro na rota e incluir JSON no Body:
   {
      "name": "Altera Teste"
   }
   
 DELETE - Rota p/ excluir Usuário ==> http://nodeapi18mob.herokuapp.com/users/JsBzMyaw2uQFkNaFNvvh 
 
 DELETE - Rota p/ excluir Cliente ==>   http://nodeapi18mob.herokuapp.com/clients/W98EZcLh64gGdB9XZRAm
