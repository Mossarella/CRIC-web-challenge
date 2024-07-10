# Use the official Node.js image with a specified version
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./
COPY .env ./.env
COPY prisma ./prisma/

# Install dependencies
RUN npm install

RUN npm install -g prisma


# Copy the rest of the application code
COPY . .



# Build the Next.js application

RUN npm run build

# Second stage: Use a smaller image for production
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the built application code and necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules ./node_modules




# Expose the port Next.js runs on (usually 3000)
EXPOSE 3000


# Command to run the Next.js application
CMD ["npm","run", "start:prod"]
