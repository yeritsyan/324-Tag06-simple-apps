# Use official Node.js image as base
FROM node:22-alpine

# Set working directory inside the backend folder
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the entire backend folder
COPY . .

# Build the NestJS app
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the NestJS app in production mode
CMD ["npm", "run", "start:prod"]