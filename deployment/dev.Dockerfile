# Base on offical Node.js Alpine image
FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Expose the listening port
EXPOSE 3000

# Run npm start script when container starts
CMD ["sh", "/usr/app/deploy/run_dev.sh"]
