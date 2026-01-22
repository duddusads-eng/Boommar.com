# DEPLOYMENT GUIDE

## Deploying the Mechanic Marketplace

This guide provides step-by-step instructions for deploying the mechanic marketplace, including deployment on various platforms: GitHub Pages, Vercel, Render, Railway, and setting up locally.

---

### 1. Deploying on GitHub Pages

#### Step 1: Prepare Your Project
- Ensure your project is ready for deployment by building it with `npm run build`.

#### Step 2: Push to `gh-pages` Branch
- Install `gh-pages` package:  
  `npm install --save gh-pages`
- Add the following script in your `package.json`:
   ```json
   "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
   }
   ```
- Deploy:  
   `npm run deploy`
    
#### Step 3: Enable GitHub Pages in Settings
- Go to your repository settings, then to the "Pages" section.  
- Set the source to `gh-pages` branch and save.

---

### 2. Deploying on Vercel

#### Step 1: Sign Up/Login
- Go to [Vercel](https://vercel.com/) and sign up or log in.

#### Step 2: Import Your Project
- Click on "New Project" and select your repository.

#### Step 3: Configuration
- Vercel auto-detects most frameworks; configure any necessary settings, then click on "Deploy".

#### Step 4: Post-Deployment
- You’ll receive a URL to your deployed application.

---

### 3. Deploying on Render

#### Step 1: Sign Up/Login
- Go to [Render](https://render.com/) and sign up or log in.

#### Step 2: Create New Web Service
- Click on "New" > "Web Service".

#### Step 3: Link Repository
- Choose your repository and configure settings such as build command and start command (e.g. `npm run build` and `npm start`).

#### Step 4: Deploy
- Click on "Create Web Service" to begin the deployment.

---

### 4. Deploying on Railway

#### Step 1: Sign Up/Login
- Go to [Railway](https://railway.app/) and sign up or log in.

#### Step 2: Start a New Project
- Click on "New Project" and select your repository.

#### Step 3: Configuration
- Define your build and start commands. Railway will handle deployment automatically.

---

### 5. Local Setup Instructions

#### Step 1: Clone the Repository
- Use the following command:  
  `git clone https://github.com/duddusads-eng/Boommar.com.git`

#### Step 2: Install Dependencies
- Navigate into the project directory:  
  `cd Boommar.com`
- Install dependencies:  
  `npm install`

#### Step 3: Running the Project
- Start the development server:  
  `npm start`

You can view the application at `http://localhost:3000`.

---

This guide should assist you in deploying the mechanic marketplace on various platforms seamlessly. Happy coding!