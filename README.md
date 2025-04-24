📚 API Anti-Racismo
Node.js
Express

API para conscientização e combate ao racismo, oferecendo recursos educacionais e registro de incidentes raciais.

✨ Funcionalidades
Recursos Educacionais

Cadastro de materiais anti-racistas (livros, filmes, artigos)

Listagem completa de recursos

Incidentes Raciais

Registro de casos de racismo

Consulta de relatos por gravidade

🛠️ Instalação
Clone o repositório:

bash
git clone https://github.com/seu-usuario/api-antiracismo.git
cd api-antiracismo
Instale as dependências:

bash
npm install
Inicie o servidor:

bash
npm start
🌐 Endpoints
Base URL
http://localhost:3000/api

Recursos Educacionais
Método	Endpoint	Descrição
GET	/resources	Lista todos os recursos
POST	/resources	Adiciona novo recurso
Incidentes Raciais
Método	Endpoint	Descrição
GET	/incidents	Lista todos os incidentes
POST	/incidents	Reporta novo incidente


Criar Recurso
bash
curl -X POST http://localhost:3000/api/resources \
-H "Content-Type: application/json" \
-d '{
  "title": "Documentário '13ª Emenda'",
  "description": "Análise do sistema prisional americano",
  "type": "filme"
}'
Listar Incidentes
bash
curl http://localhost:3000/api/incidents

Desenvolvido por João Henrique - hjoao5206@gmail.com
