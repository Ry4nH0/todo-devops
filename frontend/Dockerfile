# Use Node.js as base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy all frontend files
COPY . .

# Install dependencies
RUN npm install

# Expose frontend port
EXPOSE 5500

# Start the frontend server
CMD ["npm", "start"]
