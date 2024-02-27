
FROM node:latest

RUN npm install --force --global bcrypt@latest

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install


# Copy the current directory contents into the container at /app
COPY . .


EXPOSE 4000

# Start the Node.js app
CMD ["npm", "start"]