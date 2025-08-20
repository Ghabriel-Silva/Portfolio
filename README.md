# 🌐 Portfólio - Gabriel Silva

Bem-vindo ao repositório do meu portfólio!  
Aqui compartilho um pouco do meu trabalho como desenvolvedor fullStack, além de reflexões pessoais em um mini blog integrado. 🚀  

---

## 📸 Visão Geral

O projeto foi construído com base em um **design system** definido no Figma, o que tornou o desenvolvimento muito mais ágil.  
Minha escolha por **React + TypeScript** veio da vontade de aprofundar o aprendizado em tipagem, interfaces e type literals — e a experiência foi incrível!  

Para o design, utilizei **Chakra UI**, que se encaixou perfeitamente com os tokens criados no Figma. Em algumas animações, optei por **CSS puro** para maior flexibilidade.  

O portfólio também conta com:  
- Uma **API de envio de e-mails** (com status em tempo real);  
- Um **mini blog** com textos autorais desde 2024.  

---

## 🛠️ Tecnologias Utilizadas

- **React** + **TypeScript**  
- **Chakra UI**  
- **CSS** (para animações customizadas)  
- **Node.js** (API de e-mails)  

---

## 🚀 Como Rodar o Projeto Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/Ghabriel-Silva/Portfolio.git
cd pdf
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Rodar o projeto
```bash
npm run dev
```

### 4. API de e-mails (Importante ⚡)
A API de e-mails **não está incluída neste repositório**.  
Você precisa criar sua própria API para envio de mensagens (por exemplo, utilizando **Node.js + Nodemailer** ou outro serviço).  

No front-end, basta definir o endpoint da sua API no `fetch` do formulário de contato.  

Exemplo:
```ts
fetch("https://sua-api.com/send-email", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message })
})
```
---

## ✍️ Mini Blog

No blog compartilho textos autorais que escrevo desde 2024.  
Em um cenário onde a **IA** está cada vez mais presente, acredito que compartilhar ideias e reflexões próprias tem um valor enorme.  

---

## 🤝 Contribuindo

Esse é só o começo!  
Se você tiver:  
- 💡 Sugestões de design  
- 📝 Ideias para novos textos  
- 🔧 Melhorias no código  

Fique à vontade para abrir uma **issue** ou enviar um **pull request**.  

---

## 📬 Contato

- LinkedIn: https://www.linkedin.com/in/ghaabriieel/
- E-mail:ghaabriieel@gmail.com

---

## 📄 Licença

Este projeto está sob a licença MIT.  
Sinta-se livre para utilizar como referência.  

