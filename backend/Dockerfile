# Use Node.js as base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy all backend files
COPY . .

# Install dependencies
RUN npm install

# Expose backend port
EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
