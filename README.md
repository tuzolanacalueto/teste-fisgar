# teste-fisgar
Projeto React js + Next js

# Listagem de Imóveis - Aplicação Next.js

## 📋 Sobre o Projeto

Esta aplicação é uma plataforma de listagem de imóveis desenvolvida com Next.js, TypeScript e Material UI. O projeto oferece uma interface moderna e responsiva para visualização e filtragem de propriedades imobiliárias.

## 🚀 Tecnologias Utilizadas

- *Next.js 13* - Framework React com suporte a Server Components e otimizações de performance
- *TypeScript* - Tipagem estática para maior segurança e manutenibilidade do código
- *Material UI* - Biblioteca de componentes para interface consistente e responsiva
- *Jest & React Testing Library* - Framework de testes para garantir a qualidade do código
- *Lucide React* - Biblioteca de ícones moderna e leve

## 🔧 Decisões Técnicas

### Arquitetura
- Utilização do Next.js 13 com App Router para melhor performance e SEO
- Componentes modulares e reutilizáveis
- Separação clara entre lógica de negócio e apresentação

### Interface do Usuário
- Material UI para componentes consistentes e responsivos
- Layout adaptativo para diferentes tamanhos de tela
- Animações suaves para melhor experiência do usuário

### Gerenciamento de Estado
- React Hooks para gerenciamento local de estado
- Componentes otimizados para evitar re-renderizações desnecessárias

### Testes
- Testes de componentes com Jest e React Testing Library
- Cobertura de casos de uso principais
- Testes de integração para funcionalidades críticas

## 📥 Instalação

1. Clone o repositório:
bash
git clone [url-do-repositorio]


2. Instale as dependências:
bash
npm install


3. Execute o projeto em modo de desenvolvimento:
bash
npm run dev


4. Para executar os testes:
bash
npm test


## 🌐 Estrutura do Projeto


├── app/                  # Páginas e layouts Next.js
├── components/          # Componentes React reutilizáveis
├── lib/                 # Utilitários, tipos e configurações
├── __tests__/          # Testes automatizados
└── public/             # Arquivos estáticos


## 🔍 Funcionalidades Principais

- Listagem de imóveis com cards informativos
- Filtros por tipo de imóvel, preço e características
- Interface responsiva para mobile e desktop
- Animações suaves nos cards de imóveis
- Sistema de filtragem em tempo real

## 🧪 Testes

O projeto inclui testes automatizados para:
- Renderização correta dos componentes
- Funcionalidade dos filtros
- Interações do usuário
- Comportamento responsivo

Para executar os testes:
bash
npm test            # Executa todos os testes
npm run test:watch  # Executa testes em modo watch


## 🔄 Continuous Integration

O projeto está configurado com:
- Verificações de tipo TypeScript
- Linting automático
- Testes automatizados em cada commit

## 📱 Responsividade

A aplicação é totalmente responsiva, adaptando-se a:
- Dispositivos móveis
- Tablets
- Desktops
- Telas grandes

## 🛠 Scripts Disponíveis

- npm run dev - Inicia o servidor de desenvolvimento
- npm run build - Cria a build de produção
- npm start - Inicia o servidor de produção
- npm test - Executa os testes
- npm run lint - Executa o linter

## 🤝 Contribuição

1. Faça o fork do projeto
2. Crie sua branch de feature (git checkout -b feature/AmazingFeature)
3. Commit suas mudanças (git commit -m 'Add some AmazingFeature')
4. Push para a branch (git push origin feature/AmazingFeature)
5. Abra um Pull Request