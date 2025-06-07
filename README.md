# 🌊 SafeHydro

### 👨‍💻 Desenvolvido por: Amaury Tenório Niza (RM: 559108) | Mateus Miranda (RM: 559215)

---

## 📱 Aplicativo Mobile com Monitoramento em Tempo Real

**Disciplina:** *Advanced Programming and Mobile DEV*  
**Objetivo:** Criar um app mobile que funcione como um **sistema inteligente de detecção, alerta e contenção de enchentes**, utilizando sensores, APIs e visualizações intuitivas para proteger vidas em áreas urbanas.

---

## ✨ Visão Geral

O **SafeHydro** é mais do que um aplicativo — é um **guardião digital** contra enchentes. Com uma interface moderna, dados ao vivo e alertas inteligentes, ele ajuda comunidades a reagirem rapidamente frente a situações críticas.

Totalmente integrado com um backend Spring Boot, o app consome APIs que fornecem **nível de água em tempo real**, **histórico de enchentes**, e **ações automatizadas de controle**.

---

## 🔐 Autenticação

Logo no início, o usuário realiza um **login seguro**, garantindo que apenas usuários autorizados possam acessar e controlar as informações sensíveis do sistema.

---

## 🚀 Funcionalidades do Aplicativo

O app conta com 5 telas principais e totalmente funcionais:

1. **👋 Tela de Boas-vindas**  
   - Apresenta o projeto e direciona o usuário para login ou início rápido.

2. **📡 Tela de Monitoramento**  
   - Mostra o nível de água em tempo real, integrado com sensores via **API REST**.

3. **🚨 Tela de Alertas**  
   - Emite notificações automáticas em caso de risco iminente de enchente.

4. **🛠 Tela de Ação e Controle**  
   - Simula ações de contenção como barreiras, válvulas ou drenagem.

5. **📊 Tela de Histórico**  
   - Exibe registros detalhados das medições e alertas anteriores.

---

## 🧑‍💻 Tecnologias Utilizadas

- **React Native** + **Expo**
- **React Navigation** para navegação entre telas
- **Context API** para autenticação
- **Spring Boot (Java)** no backend
  - API RESTful com endpoints para sensores, alertas e controle
  - Banco H2 com persistência simulada

---

## 🔄 Integração com APIs

O SafeHydro se conecta com um backend Java que disponibiliza:

- 🔄 Nível de água em tempo real via sensores simulados
- ⚠️ Alertas automáticos
- 📚 Histórico completo de eventos
- ✅ Login com autenticação básica (via token ou sessão)
- 🔧 Simulação de ações de contenção

---

## 🧪 Como Executar o Projeto

### ✅ Requisitos

- Node.js (recomendado: versão LTS)
- Expo CLI instalado globalmente:
  ```bash
  npm install -g expo-cli
