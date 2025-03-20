#Forum-Project-NodeJs.
 
  Projeto de um Fórum com enfase nos Fundamentos do DDD (Domain Driven Design).
 
  - Design de Software se refere à criação intencional e organizada de sistemas de software, com o objetivo de satisfazer necessidades específicas dos usuários, cumprir requisitos de qualidade e de performance, e garantir a manutenibilidade do código.
  - Já o DDD (Domain Driven Design) é uma abordagem de design de software que se concentra na modelagem do domínio da aplicação, visando representar as regras e conceitos de negócios do mundo real.
 
 
  ----- serão abordados os conceitos de Entidades e Casos de Uso no desenvolvimento de software no decorrer do projeto.
 
 
  - Entidades representam objetos do mundo real que possuem uma identidade e que mantêm um estado que é relevante para a aplicação.
  - Casos de uso descrevem as funcionalidades (ações) que o software deve realizar para atender às necessidades dos usuários ou do negócio.
 
  ____________________________________________________________________________________________________________________________________________________________________________________________________________________
  ____________________________________________________________________________________________________________________________________________________________________________________________________________________
  - No primeiro Caso de Uso:
  - Foi implementado as entidades e casos de uso utilizando Programação Orientada a Objetos (POO).
  - Foi  implementada uma classe chamada Entity que servirá de base para as outras entidades da aplicação. As entidades serão criadas a partir do extends da classe Entity, herdando assim suas propriedades e métodos comuns.
 
 -------> Clean Architecture.
  - Implementado os fundamentos da Clean Architecture, que é um conjunto de princípios e práticas que visam desenvolver sistemas de software de alta qualidade, com baixo acoplamento e alta coesão.
  - Refatoração na estrutura de pastas do projeto, criando uma pasta de domínio chamada forum e dentro dela as pastas application e enterprise.
  - Caso de Uso: criado o caso de uso (use case) para a criação de uma Question na aplicação, bem como seu teste unitário. O objetivo é implementar uma funcionalidade que permita a criação de uma nova pergunta no fórum.
  - Refatoração nos testes unitários para utilizar in-memory-repositories.
 
  ____________________________________________________________________________________________________________________________________________________________________________________________________________________
  ____________________________________________________________________________________________________________________________________________________________________________________________________________________
  -------> Adicionado Casos de Uso da Aplicação:
  - Caso de uso: Deletar pergunta.        
  - Caso de uso: Deletar resposta.     
  - Caso de uso: Editar pergunta.        
  - Caso de uso: Editar resposta.
  - Caso de uso: Escolher melhor resposta.
  - Caso de uso: Listar perguntas recentes.
  - Caso de uso: Listar respostas da pergunta.
  - Caso de uso: Comentar na pergunta.
  - Caso de uso: Comentar na resposta.
  - Caso de uso: Deletar comentário da pergunta.
  - Caso de uso: Deletar comentário da resposta.           
  - Caso de uso: Listar comentários da pergunta.
  - Caso de uso: Listar comentários da resposta.

 ____________________________________________________________________________________________________________________________________________________________________________________________________________________
 ____________________________________________________________________________________________________________________________________________________________________________________________________________________
 -------> Adicionado Functional Error Handling:
 - Uma abordagem para lidar com erros de forma mais eficiente e segura nas aplicações.
 - Testada classe de erros e criado testes para validar a implementação da funcionalidade de Functional Error Handling, que permite o tratamento de erros de forma mais elegante e funcional.
 - Criado dois arquivos para tratamento de erros em Use Cases: ResourceNotFoundError e NotAllowedError. Esses arquivos serão utilizados para lidar com erros de recursos não encontrados e de acesso não permitido, respectivamente. Com eles, será    possível reaproveitar alguns erros comuns, evitando repetições desnecessárias.
 - Refatorado todos os use-cases para retornarem os erros utilizando as funções e classes criadas e refatoração dos testes unitários para validar os erros e sucessos corretamente. 
 ____________________________________________________________________________________________________________________________________________________________________________________________________________________
 ____________________________________________________________________________________________________________________________________________________________________________________________________________________
 -------> Adicionado Aggregates e Watched Lists:
 Aggregates e como eles ajudam a organizar e manter a consistência de objetos relacionados e o conceito de Watched Lists, que são listas de objetos que são monitorados conforme ocorrem alterações nos objetos agregados.
 - Criado as classes Attachment, QuestionAttachment e AnswerAttachment para lidar com os anexos de perguntas e respostas.
 - Atualização do use-case de criação de uma pergunta para lidar com o novo campo "attachments", que permite adicionar anexos à pergunta.
 - Criação da classe abstrata WatchedList: com as funcionalidades dessa classe, incluindo a capacidade de adicionar, remover e atualizar elementos da lista.




 
 
