# 📖 Dictionary Web App (Frontend + Backend)

A dictionary web application that allows users to search for word meanings using a **secure backend API**.

---

## **🛠 Features**
✅ Search for word meanings  
✅ Backend API with Express.js  
✅ Frontend using HTML, CSS, and JavaScript  
✅ Uses **RapidAPI** for fetching dictionary data  
✅ Secure API key handling with `.env`  
✅ **CORS enabled** for frontend-backend communication  
✅ **CI/CD pipeline implemented** for automatic deployment of backend (Render/Heroku/Railway) and frontend (GitHub Pages)

---

## **Backend**
```bash
cd backend
# Start backend
node server.js
```

## **Frontend**

Run the HTML file using Live Server or access it via the deployed GitHub Pages URL:
https://sheikhjaveed.github.io/Dictionary-website/

.env
```bash
API_KEY=your_rapidapi_key
CORS_ORIGIN=https://sheikhjaveed.github.io/Dictionary-website
PORT=3000 # optional, Render sets it automatically
```

## **Deployment**

Backend automatically deploys via CI/CD to Render on push to main branch.

Frontend automatically deploys via CI/CD to GitHub Pages on push to main branch.
