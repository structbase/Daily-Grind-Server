# ☕ Daily Grind – Express Server

A simple Node.js and Express application built to serve multiple static HTML pages for a local coffee shop called **The Daily Grind**.

This project demonstrates basic Express server setup, routing, and serving HTML files.

---

## 📌 Features

* Express server running on Node.js
* Serves a homepage and a contact page
* Uses explicit routes with `res.sendFile()`
* Clean and simple project structure

---

## 📂 Project Structure

```
daily-grind-server/
├── server.js
├── package.json
└── public/
    ├── index.html
    └── contact.html
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
node server.js
```

### 3. View in browser

* Home page: `http://localhost:3000/`
* Contact page: `http://localhost:3000/contact`

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* HTML

---

## 📚 Learning Goals

* Initialize a Node.js project
* Create an Express server
* Define routes using `app.get()`
* Serve static HTML files using absolute paths

---

## ✅ Status

Project complete and functioning as expected.
