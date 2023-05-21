Certainly, here's an enhanced version of your README file:

# MagicDoor Portal Frontend Development and Production Setup

This guide will walk you through the steps to build and run the development and production Docker images for the MagicDoor Portal Frontend.

## Advantages of Docker-Based Development

By using Docker, we ensure that all contributors, no matter their operating system, have access to the same development environment. This mitigates the issue of discrepancies between local development environments and helps maintain consistency across the team. Furthermore, Docker enables easy scalability and deployability of our application.

## Development Setup

We use Docker to create an isolated environment that mimics our production environment. Our setup also supports hot reloading, meaning your code changes will automatically reflect in the running application, ensuring a smooth development experience.

### Building the Development Docker Image

To build the dev image, run the `buildDevImage.sh` script if you're on Unix/Linux or `buildDevImage.ps1` for Windows:

```bash
./buildDevImage.sh
```

or

```powershell
./buildDevImage.ps1
```

This will build a development image tagged as `magicdoor-portal-frontend:dev`.

### Running the Development Docker Container

To start the dev image, run the `runDev.sh` or `runDev.ps1` scripts:

```bash
./runDev.sh
```

or

```powershell
./runDev.ps1
```

This will launch the app on port 3000, and you can access it via `http://localhost:3000`. It emulates the behavior of `npm run dev`.

### When to Rebuild the Dev Image?

You'd need to rebuild your development Docker image in the following cases:

- When you add or remove dependencies: If you update your `package.json` file to add, remove, or change the version of dependencies.

- When you make changes to your Dockerfile: If you modify the Dockerfile itself.

- When you update Node.js or other parts of your base image: If you decide to use a newer version of Node.js or any other tools included in your base image.

Note: Since we're using volume mounts to bind your local development files to the Docker container, code changes don't require an image rebuild. These changes will be automatically reflected in the running Docker container.

## Production Setup

The production Docker image creates a static version of our application, optimized for performance and security. It doesn't support hot reloading.

### Building the Production Docker Image

To build the production image, run the `buildProd.sh` or `buildProd.ps1` scripts:

```bash
./buildProd.sh
```

or

```powershell
./buildProd.ps1
```

This will create a Docker image tagged as `magicdoor-portal-frontend:prod`. The production image runs the built version of the app on an internal Nginx server on port 80.

### Running the Production Docker Container

To start the production Docker container, run the `runProd.sh` or `runProd.ps1` scripts:

```bash
./runProd.sh
```

or

```powershell
./runProd.ps1
```

This will serve the production version of the app on port 8080, and you can access it via `http://localhost:8080`.

Please ensure you read and understand this guide fully before starting your development work. Happy coding!

# Testing

https://docs.solidjs.com/guides/how-to-guides/testing-in-solid/vitest
