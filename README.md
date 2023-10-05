# MERN Job Portal

Brief description of the project.

## How to run this?

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js and npm should be installed on your machine.

### Cloning and Setup

1. Clone the Git repository:

    ```bash
    git clone https://github.com/irfanhsajid/Job-Portal--MERN.git
    ```

2. Navigate to the cloned directory:

    ```bash
    cd Job-Portal--MERN
    ```

3. Set up the React app:

    ```bash
    cd client
    npm install 
    or yarn add
    ```

4. Set up the Express app:

    ```bash
    cd server
    npm install
    ```

### Running the Apps

In separate terminal windows, run the following commands:

- For Vite React App:

    ```bash
    cd client
    npm run dev
    or yarn dev
    ```

- For Express App:

    ```bash
    cd server
    nodemon
    ```

### Accessing the Apps

- The Vite React app will be accessible at `http://localhost:5173`
- The Express app will be accessible at `http://localhost:7000`
#### .env Dependency and CORS issue
Though it is supposed to be fine, but the app will show errors because of Environment Variables Dependency and CORS policy. So first of all, open your server make a .env file inside the root directory, and set this:
```js
MONGO_URL= mongodb+srv://mern-job-portal:447pxlwbgNx2LIY8@cluster0.vaopm.mongodb.net/mern-job-poral?retryWrites=true&w=majority
JWT_SECRET = 474764dhk944
```
Then, fix the CORS origin issue.
For this: 

* Open your React app, select App.jsx, and change the origin URL
```js
// axios.defaults.baseURL = 'https://auth-skeleton-api.vercel.app';
axios.defaults.baseURL = 'http://localhost:7000';
```
* Open your express app, select the routes folder, and set this origin inside the authRoutes.js and jobRoutes.js file
```js
router.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173",
        // origin: "https://techforing-job-portal.vercel.app",
    })
)
```
After doing all this, close your terminal and make a fresh start. Hope it will work fine! 

## Author

[Irfanul Haque Sajid](https://www.linkedin.com/in/irfanhsajid)

