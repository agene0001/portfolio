# Stage 1: Build the SvelteKit application
FROM node:18-alpine AS build

WORKDIR /app

# Using alpine-linux-headers for sharp/libvips which is a common dependency
RUN apk add --no-cache libc6-compat

COPY package*.json ./

# Use 'npm ci' for cleaner, more reliable installs in CI/CD environments
RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Create the final, smaller production image
FROM node:18-alpine AS production

WORKDIR /app

# Using alpine-linux-headers for sharp/libvips which is a common dependency
RUN apk add --no-cache libc6-compat

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy only the necessary files from the build stage
# This includes the build output, the production node_modules, and package.json
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expose the port the app will run on (default for adapter-node is 3000)
# You can override this with the PORT environment variable
# Expose port 3000
ENV PORT=8080

EXPOSE 8080

# The correct command to start the Node server built by SvelteKit
CMD [ "node", "build" ]