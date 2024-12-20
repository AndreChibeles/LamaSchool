FROM node

WORKDIR /my-app

COPY package.json .

# Check if node_modules folder is present before running npm install --force
RUN npm install --force

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]