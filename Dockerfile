# Etapa 1: Construir a aplicação
FROM node:18-alpine AS build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o código fonte para dentro do contêiner
COPY . .

# Construir a aplicação com Vite
RUN npm run build

# Etapa 2: Configuração do servidor para servir a aplicação
FROM nginx:alpine

# Copiar os arquivos construídos para o diretório de publicação do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta 80 para o Nginx
EXPOSE 80

# Iniciar o Nginx para servir a aplicação
CMD ["nginx", "-g", "daemon off;"]