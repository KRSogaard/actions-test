# MagicDoor Portal Frontend: Development and Production Setup

Welcome to the guide to building and executing the development and production Docker images for the MagicDoor Portal Frontend.

## Leveraging Docker for Development

Docker allows us to establish a uniform development environment for all contributors, irrespective of their operating systems. This eliminates discrepancies between local development environments and ensures standardization across our team. In addition, Docker facilitates efficient scalability and deployability of our application.

## Setup for Development

We employ Docker to fabricate a secluded environment akin to our production setting. Our arrangement also accommodates hot reloading, enabling automatic reflection of your code modifications in the running application, thereby enhancing the development experience.

### Executing the Development Docker Container

To assemble the dev image, execute `npm run dev`. This command initiates 2 containers - one running the app in dev mode that restarts upon file alterations and another that executes all unit tests when files are modified. The web application can be accessed at `http://localhost:3000`.

### When to Reconstruct the Dev Image?

The development Docker image needs reconstruction under the following circumstances:

- Dependency alterations: Upon addition, removal, or version changes of dependencies in your `package.json` file.

- Dockerfile modifications: Upon changes to the Dockerfile itself.

- Updates to Node.js or other components of your base image: When a newer version of Node.js or any other tools included in your base image is adopted.

Please note: Given that we utilize volume mounts to bind your local development files to the Docker container, code modifications do not necessitate an image reconstruction. Such changes will be spontaneously mirrored in the operational Docker container.

## Setup for Production

The production Docker image constructs a static version of our application, optimized for performance and security, without supporting hot reloading.

### Running the Production Docker Container

To initiate the production Docker container, execute `npm run prod`.

This command serves the production version of the app on port 8080, which can be accessed via `http://localhost:8080`.

# Guidelines for Testing

For detailed guidance on testing in Solid with Vitest, please visit [this link](https://docs.solidjs.com/guides/how-to-guides/testing-in-solid/vitest).
