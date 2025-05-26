# 🔐 Personal Backend Project: JWT Authentication & Third-Party Integrations

A backend system built with **Node.js**, **Express**, and **MongoDB**, implementing **JWT-based authentication**, optimized **user listing**, and **third-party API integration**. Designed with clean, scalable architecture for handling large user bases.

---

## 🚀 Features

- 🔐 **JWT Authentication** – Secure login with token-based access.
- 📝 **User Registration** – Includes name, email, password (hashed), and weekday logic.
- 📅 **Day-wise User Listing** – Fetch users by weekday (optimized for millions of records).
- 🌍 **Third-Party API Integration** – Secure external API consumption.
- 🧱 **MVC Architecture** – Controller → Service → Repository structure.
- ✅ **Validation & Error Handling** – Clean request/response flow with meaningful errors.
- 🔒 **Protected Routes** – Access control via token middleware.
- 📁 **Modular Codebase** – Easily extendable and readable.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Auth**: JWT, Bcrypt.js
- **Environment Management**: dotenv
- **Testing**: Postman (Collection Included)

---


---

## 📬 API Endpoints

| Method | Endpoint         | Description                       | Auth (JWT) Required  |
|--------|------------------|-----------------------------------|----------------------|
| POST   | /create-user     | Register a new user               | ❌                  |
| PUT    | /update-status   | Change the user active status     | ✅                  |
| GET    | /get-distance    | Get distance                      | ✅                  |
| POST   | /get-users       | Get users by weekday numbers      | ✅                  |

> **Note**: `0 = Sunday`, `1 = Monday`, ..., `6 = Saturday`

---

## 🔑 How to Use

1. **Clone the repo**
   ```bash
   git clone https://github.com/sumitkumar210711/NodeJs-Users-Project.git

2. **Run the Project**
   ```bash
   node backendServer.js

