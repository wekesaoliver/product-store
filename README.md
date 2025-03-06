# Product Store Project

This project is a web application for managing a product store, built using the MERN stack (MongoDB, Express.js, React, and Node.js). The frontend utilizes React with Vite for fast development and Chakra UI for styling.

## Features

- Create, read, update, and delete products
- Responsive UI using Chakra UI
- State management with Zustand
- RESTful API with Express and MongoDB

## Prerequisites

Ensure you have these installed on your machine:

- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB (local or cloud)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/wekesaoliver/product-store.git
   cd product-store
   ```

2. **Install backend dependencies**

   Navigate to the backend directory and install dependencies:

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**

   Navigate to the frontend directory and install dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

## Configuration

1. **Environment Variables**

   In the `backend` directory, create a `.env` file and add your MongoDB connection string:

   ```
   MONGO_URI=your_mongodb_connection_string
   ```

## Running the Application

1. **Start the Backend Server**

   In the `backend` directory, run:

   ```bash
   npm run dev
   ```

   This will start the backend server on the default port 5000.

2. **Start the Frontend Server**

   In the `frontend` directory, run:

   ```bash
   npm run dev
   ```

   This will start the frontend development server. Visit `http://localhost:3000` to view the application.

## Build for Production

To build the frontend for production, run in the `frontend` directory:

```bash
npm run build
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [Zustand](https://github.com/pmndrs/zustand)
