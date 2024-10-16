# Use an official Node.js image as a base
FROM node:18-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) from the safeplace directory into the container
COPY safeplace/package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code from the safeplace directory into the container
COPY safeplace/ .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js will run on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
