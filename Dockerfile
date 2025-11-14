FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Corrige permissões do tsc
RUN chmod +x node_modules/.bin/tsc

# Alternativa: usa o npx (melhor ainda)
RUN npx tsc

EXPOSE 3001

CMD ["npm", "start"]
