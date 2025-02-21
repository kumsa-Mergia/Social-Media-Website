# Use Nginx to serve the static files
FROM nginx:alpine

# Copy website files to the Nginx default directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
