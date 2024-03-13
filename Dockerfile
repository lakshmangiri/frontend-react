# Base Image (on what image the project [app] must run)
FROM node:20.11.0-alpine

# Working directory (default is app, on what working directory in the container the project must run)
WORKDIR /app

# Moving the entire project source code to folder named /app in the image using Copy command.
COPY package.json .

# We will install all the dependcies mentioned in the package.json in the /app working directory.
RUN npm install

# Copy all the files, from the current directory (code base directory[frontend-react]) to working directory (/app)
COPY . .

# Expose the port
EXPOSE 3000

# Run the project (code)
CMD ["npm", "start"]