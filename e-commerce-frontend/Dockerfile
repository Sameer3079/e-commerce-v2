# Use the official Node.js image as base
FROM node:20.12.2 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the entire Angular app source code to the container
COPY . .

# Build the Angular app for production
RUN ng build

# Use Nginx as the server to serve the Angular app
FROM nginx:latest

# Copy the built Angular app from the previous stage to the nginx html directory
COPY --from=build /app/dist/e-commerce-frontend/browser /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
