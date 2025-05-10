FROM node:23-slim
WORKDIR /app
COPY package.json package-lock.json ./  
RUN npm install --force                 
COPY . .
CMD ["node", "index.js"]