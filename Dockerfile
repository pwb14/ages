# Use an official node runtime as a parent image
FROM node:10

# Set the working directory to /home/app
WORKDIR /home/app/

# Bundle app source
COPY . /home/app/

# If you are building your code for production
RUN npm install

# Make port 8000 available to the world outside this container
EXPOSE 3000

CMD npm run dev