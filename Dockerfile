# Use Node.js official image as a base
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app for production
RUN npm run build

# Use the Node.js image to serve the app
FROM node:18 AS serve

# Set the working directory for serving the app
WORKDIR /app

# Copy the build folder from the previous step
COPY --from=build /app/dist /app/dist

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Expose port 3000
EXPOSE 8080

# Start the HTTP server to serve the React app
CMD ["serve", "-s", "dist", "-l", "tcp://0.0.0.0:8080"]
