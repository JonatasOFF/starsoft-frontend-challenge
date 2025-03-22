# Usar a imagem oficial do Node.js com a versão 20.14.0
FROM node:20.14.0-alpine

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos de dependência (yarn.lock e package.json) para instalar as dependências
COPY package.json yarn.lock ./

# Instalar as dependências com Yarn
RUN yarn install

# Copiar o restante dos arquivos da aplicação para dentro do contêiner
COPY . .

# Rodar a aplicação Next.js em modo desenvolvimento
EXPOSE 3000

# Definir o comando para iniciar a aplicação
CMD ["yarn", "dev"]
