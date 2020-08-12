# API setup project

Setup for an API project using Node.js and Express.

### Installation

1. Install dependencies

```sh
yarn install
```

2. Create a `.env` file with the following content

```
PORT=8080
NODE_ENV=dev
```

GitHub will ignore `.env` based on `.gitignore`.

3. Run API in development

```sh
yarn dev
# Expected output
# Listening on http://localhost:8080
```