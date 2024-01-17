# Authentication System with React, TypeScript, Node.js, and MongoDB 🚀

Welcome to our Authentication System, a robust and secure application crafted with love and technology! 🌐✨

## Client-side Magic 🧙‍♂️

### Components
Explore the intuitive `LoginForm.tsx` that seamlessly integrates with MobX for state management. Axios powers up the `Http/index.ts` to handle HTTP requests with grace.

### Models
Meet the `IUser.ts` and `AuthResponse.ts`, defining the elegant structures of our user objects and authentication responses.

### Services
The dynamic duo, `AuthService.ts` and `UserService.ts`, orchestrates the authentication symphony by providing methods for login, registration, and user data retrieval.

### Store
The mastermind `store.ts` oversees the state of the application, ensuring a smooth and reactive user experience.

### App
Witness the main protagonist, `App.tsx`, orchestrating user authentication, displaying the login form, and fetching user data with a touch of elegance.

## Server-side Sorcery 🧙‍♀️

### Controllers
Meet the maestro `user-controller.js`, orchestrating user registration, login, logout, activation, token refresh, and user data retrieval.

### DTOs
The enchanting `user-dto.js` encapsulates user data in a magical Data Transfer Object.

### Exceptions
Enter the realm of `api-error.js`, a custom API error class gracefully handling errors and guiding the users through unforeseen adventures.

### Middleware
Meet the guardians, `auth-middleware.js` ensuring secure authentication, and `error-middleware.js` gracefully handling errors.

### Models
Explore the mystique `token-model.js` and `user-model.js`, the guardians of refresh tokens and user data in the ethereal realm of MongoDB.

### Router
Journey through the Express router, `index.js`, carving paths for user-related operations and securing them with the trusted `authMiddleware`.

### Services
The magical `mail-service.js`, `token-service.js`, and `user-service.js` unveil secrets of sending emails, handling tokens, and orchestrating user-related affairs.

### Environment Configuration
Unlock the secrets of `.env`, the ethereal realm where configurations are woven into the fabric of the server's existence.

### Server Initialization
Behold the gateway, `index.js`, where the server is summoned into existence, connecting with MongoDB and paving the way for the grand journey.

Certainly! Here's the revised "Start Your Adventure" section:

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
