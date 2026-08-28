# Estágio de construção (Build)
FROM node:20-alpine as build

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Executa o build da aplicação Vite
RUN npm run build

# Estágio de produção (Nginx)
FROM nginx:alpine

# Copia os arquivos buildados do estágio anterior para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração customizado do Nginx (para rotas do React)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
