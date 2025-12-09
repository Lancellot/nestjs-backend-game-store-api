# NestJS Backend Game Store API
<p align="center">
  <a href="https://brazil.generation.org/">
    <img src="./.github/assets/generation-bg.png" width="150" alt="Generation Brasil"/>
  </a>
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS"/>
  </a>
</p>

<p align="center">
  <strong>API REST para gerenciamento de blog pessoal desenvolvida com NestJS</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue" alt="Versão">
  <img src="https://img.shields.io/badge/node-%3E%3D18.0.0-green" alt="Node >= 18">
  <img src="https://img.shields.io/badge/nestjs-10.0.0-red" alt="NestJS 10">
  <img src="https://img.shields.io/badge/license-MIT-yellow" alt="MIT">
</p>


API RESTful de uma loja de jogos desenvolvida com NestJS, TypeORM e MySQL.

## 📋 Descrição

Backend de uma aplicação de loja de jogos com funcionalidades de gerenciamento de categorias e produtos. A API implementa endpoints CRUD completos para manipulação de dados com validação e tratamento de erros.

## 🚀 Tecnologias

- **NestJS** - Framework Node.js progressivo
- **TypeORM** - ORM para TypeScript
- **MySQL** - Banco de dados relacional
- **TypeScript** - Linguagem de programação
- **Class Validator** - Validação de dados
- **ESLint** - Linting de código
- **Jest** - Framework de testes

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd nestjs-backend-game-store-api
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto:
```env
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_DATABASE=game_store
DB_SYNCHRONIZE=development
```

## 🏃 Como Executar

### Desenvolvimento
```bash
npm run start:dev
```bash
npm run test

# Testes em modo watch
npm run test:watch

# Cobertura de testes
npm run test:cov
```

## 📝 Linting e Formatação

```bash
# Executar ESLint
npm run lint

# Formatar código com Prettier
npm run format
```

## 📚 Módulos

### Categoria Module
Gerenciamento de categorias de produtos.

**Endpoints:**
- `GET /categorias` - Listar todas as categorias
- `GET /categorias/:id` - Obter categoria por ID
- `GET /categorias/descricao/:descricao` - Buscar categorias por descrição
- `POST /categorias` - Criar nova categoria
- `PUT /categorias` - Atualizar categoria
- `DELETE /categorias/:id` - Deletar categoria

### Produto Module
Gerenciamento de produtos da loja.

**Endpoints:**
- `GET /produtos` - Listar todos os produtos
- `GET /produtos/:id` - Obter produto por ID
- `GET /produtos/nome/:nome` - Buscar produtos por nome
- `POST /produtos` - Criar novo produto
- `PUT /produtos` - Atualizar produto
- `DELETE /produtos/:id` - Deletar produto

## 📊 Estrutura do Projeto

```
src/
├── app.module.ts           # Módulo principal da aplicação
├── main.ts                 # Arquivo de inicialização
├── categoria/              # Módulo de Categorias
│   ├── categoria.module.ts
│   ├── controllers/
│   │   └── categoria.controller.ts
│   ├── services/
│   │   └── categoria.service.ts
│   └── entities/
│       └── categoria.entity.ts
└── produto/                # Módulo de Produtos
    ├── produto.module.ts
    ├── controllers/
    │   └── produto.controller.ts
    ├── services/
    │   └── produto.services.ts
    └── entities/
        └── produto.entity.ts
```

## 🔄 Relacionamentos

- **Categoria ↔ Produto**: One-to-Many
  - Uma categoria pode ter múltiplos produtos
  - Um produto pertence a uma categoria
  - Delete em cascade: ao deletar uma categoria, seus produtos são deletados

## 🛠️ Configuração do Banco de Dados

O TypeORM sincroniza automaticamente as entidades com o banco de dados em ambiente de desenvolvimento. Para sincronizar as tabelas:

```typescript
synchronize: process.env.DB_SYNCHRONIZE === 'development'
```

As tabelas criadas:
- `tb_categorias` - Tabela de categorias
- `tb_produtos` - Tabela de produtos

## ✨ Funcionalidades

- ✅ CRUD completo para Categorias e Produtos
- ✅ Busca por nome/descrição com ILIKE (case-insensitive)
- ✅ Validação de dados com Class Validator
- ✅ Tratamento de erros HTTP apropriados
- ✅ Relacionamento bidirecional Categoria-Produto
- ✅ Delete em cascade
- ✅ Type hints completos
- ✅ Decorators de rota com status codes apropriados

## 👤 Autor

**Assis Pires Neto**

## 📄 Licença

UNLICENSED

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
