# Authentication System with React, TypeScript, Node.js, and MongoDB 🚀

Welcome to our Authentication System, a robust and secure application crafted with love and technology! 🌐✨
This repository contains a simple authentication system built with React (TypeScript), Node.js, and MongoDB. The project structure consists of two main folders: `client` and `server`.

## Client

### Components

#### `LoginForm.tsx`

A React functional component responsible for rendering a login form. It utilizes MobX for state management and Axios for handling HTTP requests.

```tsx
// client/Components/LoginForm.tsx
import React, { FC, useContext, useState } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const LoginForm: FC = () => {
  // ... (component code)
};

export default observer(LoginForm);
```

#### `Http/index.ts`

An Axios instance configured with base URL and interceptors for handling authentication headers and token refresh.

```ts
// client/Http/index.ts
import axios from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';

// ... (axios instance code)

export default $api;
```

### Models

#### `IUser.ts`

An interface defining the structure of a user object.

```ts
// client/models/IUser.ts
export interface IUser {
  email: string;
  isActivated: string;
  id: string;
}
```

#### `response/AuthResponse.ts`

An interface defining the structure of the authentication response.

```ts
// client/models/response/AuthResponse.ts
import { IUser } from '../IUser';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
```

### Services

#### `AuthService.ts`

A service class providing methods for user authentication, registration, and logout.

```ts
// client/services/AuthService.ts
import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';

// ... (AuthService code)

export default class AuthService {
  // ... (methods code)
}
```

#### `UserService.ts`

A service class for fetching user data from the server.

```ts
// client/services/UserService.ts
import { IUser } from '../models/IUser';
import { AxiosResponse } from 'axios';
import $api from '../http';

// ... (UserService code)

export default class UserService {
  // ... (methods code)
}
```

### Store

#### `store.ts`

MobX store managing application state, including user authentication, user data, and loading status.

```ts
// client/store/store.ts
import { IUser } from '../models/IUser';
import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import axios from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
import { API_URL } from '../http';

// ... (Store code)

export default class Store {
  // ... (store code)
}
```

### App

#### `App.tsx`

The main React component handling user authentication, displaying the login form, and fetching user data.

```tsx
// client/App.tsx
import React, { FC, useContext, useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import { Context } from './index';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/IUser';
import UserService from './services/UserService';

// ... (App code)

export default observer(App);
```

## Server
Behold the gateway, `index.js`, where the server is summoned into existence, connecting with MongoDB and paving the way for the grand journey.

Certainly! Here's the revised "Start Your Adventure" section:

### Controllers

#### `user-controller.js`

Express controller handling user registration, login, logout, activation, token refresh, and user data retrieval.

```js
// server/controllers/user-controller.js
const userService = require('../service/user-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');

class UserController {
  // ... (controller code)
}

module.exports = new UserController();
```

### DTOs

#### `user-dto.js`

Data Transfer Object (DTO) for user data.

```js
// server/dtos/user-dto.js
module.exports = class UserDto {
  // ... (UserDto code)
};
```

### Exceptions

#### `api-error.js`

Custom API error class for handling various error scenarios.

```js
// server/exceptions/api-error.js
module.exports = class ApiError extends Error {
  // ... (ApiError code)
};
```

### Middleware

#### `auth-middleware.js`

Express middleware for validating and handling user authentication.

```js
// server/middleware/auth-middleware.js
const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');

// ... (auth-middleware code)
```

#### `error-middleware.js`

Express middleware for handling errors and returning appropriate responses.

```js
// server/middleware/error-middleware.js
const ApiError = require('../exceptions/api-error');

// ... (error-middleware code)
```

### Models

#### `token-model.js`

Mongoose model for storing refresh tokens.

```js
// server/models/token-model.js
const { Schema, model } = require('mongoose');

// ... (token-model code)

module.exports = model('Token', TokenSchema);
```

#### `user-model.js`

Mongoose model for storing user data.

```js
// server/models/user-model.js
const { Schema, model } = require('mongoose');

// ... (user-model code)

module.exports = model('User', UserSchema);
```

### Router

#### `index.js`

Express router defining routes for user-related operations.

```js
// server/router/index.js
const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

// ... (router code)

module.exports = router;
```

### Services

#### `mail-service.js`

Service for sending activation emails using Nodemailer.

```js
// server/service/mail-service.js
const nodemailer = require('nodemailer');

// ... (mail-service code)
```

#### `token-service.js`

Service for handling JWT tokens, including generation, validation, and storage.

```js
// server/service/token-service.js
const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token-model');

// ... (token-service code)
```

#### `user-service.js`

Service for user-related operations, including registration, activation, login, logout, token refresh, and user data retrieval.

```js
// server/service/user-service.js
const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

// ... (user-service code)

module.exports = new UserService();
```

### Environment Configuration

#### `.env`

Environment configuration file containing various parameters, such as port, database URL, JWT secrets, SMTP settings, and API URLs.

```env
PORT=5000
DB_URL=url
JWT_ACCESS_SECRET=jwt-secret-key
JWT_REFRESH_SECRET=jwt-refresh-secret-key
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=your_port
SMTP_USER=your_email
SMTP_PASSWORD=your_password
API_URL=http://localhost:5000
CLIENT_URL=http://localhost:3000
```

### Server Initialization

####

 `index.js`

Main server file that configures Express, connects to the MongoDB database, and starts the server.

```js
// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;
const app = express();

// ... (index.js code)

const start = async () => {
  // ... (start code)
};

start();
```

## Start Your Adventure 🚀

Embark on an enchanting journey through the realms of authentication and user management. Follow these steps to set up and explore our magical Authentication System:

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   ```
   Clone the repository to your local machine using the provided repository URL.

2. **Navigate to Client and Install Dependencies**:
   ```bash
   cd client
   npm install
   ```
   Move into the `client` directory and install the necessary dependencies for the React application.

3. **Navigate to Server and Install Dependencies**:
   ```bash
   cd ../server
   npm install
   ```
   Move into the `server` directory and install the required Node.js dependencies.

4. **Launch the Server**:
   ```bash
   npm start
   ```
   Start the server in development mode with hot-reloading. Run this command within the `server` directory. The server will be live at the specified port.

5. **Run the React App**:
   ```bash
   cd ../client
   npm start
   ```
   Move back to the `client` directory and launch the React app. The application will be accessible in your web browser.

Feel the magic as you navigate through the ethereal realms of user authentication, registration, and beyond. Customize the enchantment for your own quests and may your coding journey be filled with joy and success! ✨🛡️🔮

## MIT License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. May the magic of open-source be with you! 🌟🤝
