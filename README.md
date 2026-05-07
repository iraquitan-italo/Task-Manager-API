# 🚀 Task Manager API
Status: Em desenvolvimento

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

API REST para gerenciamento de tarefas desenvolvida com Node.js, Express e MySQL, aplicando conceitos de CRUD, arquitetura backend, middlewares e integração com banco de dados.

---

# 📌 Funcionalidades

✅ Criar tarefas  
✅ Listar tarefas  
✅ Atualizar tarefas  
✅ Deletar tarefas  
✅ Integração com banco MySQL  
✅ Middleware de validação  
✅ UUID para IDs únicos  

---

# 🛠 Tecnologias utilizadas

- Node.js
- Express
- MySQL
- UUID
- Dotenv
- Nodemon

---

# 📂 Estrutura do projeto

```bash
src/
├── config/
├── controllers/
├── middlewares/
├── routes/
└── app.js
```

---

# ⚙️ Instalação

## Clone o repositório

```bash
git clone https://github.com/iraquitan-italo/Task-Manager-API.git
```

## Instale as dependências

```bash
npm install
```

## Configure o .env

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=task_manager
DB_PORT=3306
```

## Rode o projeto

```bash
npm run dev
```

---

# 🗄 Banco de dados

## Criar database

```sql
CREATE DATABASE task_manager;
```

## Criar tabela

```sql
CREATE TABLE tasks (
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    status VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# 📌 Endpoints

## 📥 Listar tarefas

```http
GET /tasks
```

---

## 📤 Criar tarefa

```http
POST /tasks
```

### Body

```json
{
  "titulo": "Estudar Node.js",
  "status": "pendente"
}
```

---

## ✏️ Atualizar tarefa

```http
PUT /tasks/:id
```

---

## ❌ Deletar tarefa

```http
DELETE /tasks/:id
```

---

# 🧪 Testes

A API foi testada utilizando:

- Insomnia
- Postman

---

# 📚 Aprendizados

Nesse projeto pratiquei:

- API REST
- CRUD
- Métodos HTTP
- Node.js
- Express
- Integração com MySQL
- Organização backend
- Middlewares
- Git e GitHub

---

# 👨‍💻 Autor

Iraquitan Ítalo Da Silva Santos

LinkedIn:
www.linkedin.com/in/iraquitan-ítalo-da-silva-santos-212001229

GitHub:
https://github.com/iraquitan-italo
