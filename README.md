starsoft-frontend-challenge

# Sobre o projeto

Aplicação web desenvolvida como desafio da Starsoft, consiste na criação de uma loja com items virtuais para compra por ETH.

# Configurando:

    git clone https://github.com/JonatasOFF/starsoft-frontend-challenge.git

Navegue até o diretório do projeto:

    cd starsoft-frontend-challenge

Instale as dependências:

    yarn
ou

    npm install

Execute o servidor de desenvolvimento:

    # Com npm
    npm run dev

    # Com yarn
    yarn dev


# Funcionalidades Implementadas

    Listagem de NFTs: Exibição de uma lista de tokens não fungíveis disponíveis para compra, com detalhes como imagem, nome e preço.

    Carrinho de Compras: Funcionalidade que permite ao usuário adicionar NFTs ao carrinho, visualizar os itens adicionados e proceder para a finalização da compra.

    Responsividade: A interface adapta-se a diferentes tamanhos de tela, garantindo uma experiência consistente em dispositivos móveis e desktops.

# Tecnologias Utilizadas

    Next.js: Framework React que oferece recursos como renderização no lado do servidor (SSR) e geração de sites estáticos (SSG), proporcionando melhor performance e SEO.

    React: Biblioteca JavaScript para construção de interfaces de usuário baseadas em componentes.

    TypeScript: Tipagem estática ao código, aumentando a segurança e a escalabilidade do projeto.

    Styled Components: Biblioteca para estilização de componentes utilizando CSS-in-JS, permitindo a criação de estilos encapsulados e dinâmicos.

    Redux Toolkit: Usado para gerenciamento de estado global da aplicação de forma eficiente e bem estruturada.

    Motion: Usado em alguns componentes para uma animação fluida.

    React-Icons: Biblioteca para buscar por icones.

Possíveis Limitações e Melhorias Futuras

    Otimização de performance: Analisar e otimizar o carregamento de imagens e outros recursos para melhorar o tempo de resposta da aplicação.

    Poucos testes: Faltaria cobrir mais testes e criar uma métrica de coverage de código.

    Estrutura de pastas: A estrutura de arquivos não está preparada para um aumento na complexidade do projeto a longo prazo.
