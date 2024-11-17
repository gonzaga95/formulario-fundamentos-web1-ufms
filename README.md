# **Documentação do Projeto: Formulário de Cadastro**

## **Descrição**
Este é um projeto em React que implementa um formulário de cadastro com validações e estilizações avançadas. O formulário é composto por campos organizados em categorias (dados pessoais, dados de contato e dados de cadastro) e inclui funcionalidades como validação em tempo real e navegação para uma página de relatório.

Ox' projeto foi desenvolvido para a disciplina **Fundamentos de Web** do curso superior em **Tecnologia da Informação** na **Universidade Federal de Mato Grosso do Sul (AGEAD/UFMS)**. 

Entre em contato comigo via [gonzaga.carlos@ufms.br](mailto:gonzaga.carlos@ufms.br).

---

## **Funcionalidades**
- **Formulário dinâmico**: Permite a entrada de informações organizadas por categorias.
- **Validações em tempo real**:
  - **Data de nascimento**: Deve ser anterior à data atual.
  - **Celular**: Deve estar no formato brasileiro `(XX) XXXXX-XXXX` ou `(XX) XXXX-XXXX`.
  - **CEP**: Deve estar no formato brasileiro `XXXXX-XXX`.
- **Mensagens de erro**: Aparecem em vermelho abaixo dos campos inválidos e permanecem enquanto a validação falhar.
- **Navegação dinâmica**:
  - Após o envio dos dados válidos, o formulário redireciona o usuário para uma página de relatório (`/cadastro_resultado`) que exibe os dados submetidos.
- **Estilização customizada**: O projeto utiliza CSS com classes para estilizar o formulário, os campos e as mensagens de erro.

---

## **Configuração do Ambiente**
### **Pré-requisitos**
1. **Node.js** (v18.19.1 ou superior).
2. **npm** (v9.2.0 ou superior).

---

## **Como Buildar o Projeto**
1. Clone o repositório para sua máquina:
   ```bash
   git clone https://github.com/gonzaga95/formulario-fundamentos-web1-ufms
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd formulario-react
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o projeto:
   ```bash
   npm start
   ```
5. Acesse o projeto no navegador:
   [http://localhost:3000](http://localhost:3000)

---

## **Estrutura do Projeto**
### **Componentes**
- **`Formulario`**:
  - Componente principal que contém o formulário e suas validações.
  - Organiza os campos em três categorias: dados pessoais, dados de contato e dados de cadastro.
- **`Relatorio`**:
  - Página de relatório que exibe os dados submetidos via query parameters.

---

### **Validações**
1. **Data de nascimento**:
   - Deve ser anterior ao dia atual.
   - Mensagem: *"A data de nascimento deve ser anterior ao dia atual."*
2. **Celular**:
   - Formato esperado: `(XX) XXXXX-XXXX` ou `(XX) XXXX-XXXX`.
   - Mensagem: *"O número de celular deve estar no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX."*
3. **CEP**:
   - Formato esperado: `XXXXX-XXX`.
   - Mensagem: *"O CEP deve estar no formato XXXXX-XXX."*

---

## **Classes CSS Utilizadas**
### **Formulário e Estrutura**
- `.form`: Estilização principal do formulário.
- `.fieldset`: Margens e espaçamento entre grupos de campos.
- `.legend`: Estilização dos títulos de cada categoria.

### **Inputs e Campos**
- `input`, `select`: Define o tamanho, bordas e espaçamento dos campos.
- `input:focus`, `select:focus`: Adiciona destaque ao campo selecionado.
- `.invalid`: Aplica estilo aos campos com erro de validação (borda e sombra vermelha).

### **Mensagens de Erro**
- `.error`: Define o estilo das mensagens de erro com cor vermelha e ajuste de espaçamento.

