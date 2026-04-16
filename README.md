# 🚀 AI Prompt Library

A full-stack application to manage and explore AI image generation prompts, built with a clean architecture and modern web stack.

---

## 🧩 Overview

This project enables users to:

* Create and store AI prompts
* Browse prompts with complexity levels
* View prompt details
* Track real-time view counts (via Redis)

The system is designed with scalability and modularity in mind, separating concerns across backend services, frontend UI, and caching layers.

---

## 🏗️ Tech Stack

### Frontend

* Angular (Standalone Components)
* TypeScript
* Reactive Forms

### Backend

* Django (without DRF)
* Clean service + serializer pattern

### Database

* SQLite (development)
* PostgreSQL-ready

### Caching

* Redis (with graceful fallback)

### DevOps

* Docker (optional setup ready)

---

## ⚙️ Features

### Core Features

* 📄 List all prompts
* ➕ Create new prompts (validated form)
* 🔍 View prompt details
* 📊 Complexity rating (1–10)

### Advanced Features

* ⚡ Redis-based view counter
* 🛡️ Graceful fallback if Redis is unavailable
* 🧱 Clean separation of concerns (services layer)

---

## 📁 Project Structure

```
backend/
  config/
  prompts/
    models.py
    views.py
    services.py
    serializers.py

frontend-clean/
  src/app/
    core/
    features/prompts/
      prompt-list/
      prompt-detail/
      prompt-form/
```

---

## 🚀 Getting Started

### 🔧 Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend runs at:
👉 http://127.0.0.1:8000/

---

### 💻 Frontend Setup

```bash
cd frontend-clean
npm install
npm start
```

Frontend runs at:
👉 http://localhost:4200/

---

## 🔌 API Endpoints

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | `/prompts/`        | List all prompts  |
| POST   | `/prompts/create/` | Create prompt     |
| GET    | `/prompts/:id/`    | Get prompt detail |

---

## ⚠️ Redis Configuration

By default:

```python
REDIS_HOST = 'localhost'
REDIS_PORT = 6379
```

### Behavior:

* If Redis is running → view count increments
* If Redis is NOT running → app continues without crashing

---

## 🧠 Design Decisions

* Avoided Django REST Framework to demonstrate manual API handling
* Introduced a **services layer** for Redis logic (separation of concerns)
* Implemented **fail-safe Redis integration** to ensure system stability
* Used Angular standalone components for simplified architecture

---

## 📸 Screenshots

*Add screenshots here for better presentation (recommended)*

---

## 🌍 Deployment (Optional)

Can be deployed on:

* Render
* Railway
* GCP / AWS

SQLite can be used for quick deployment.

---

## 👤 Author

**Harshitha**

---

## ✨ Future Improvements

* Authentication (JWT)
* Tagging system
* Search & filtering
* Real-time updates (WebSockets)
* UI enhancements (Material UI / Tailwind)

---

## 📌 Summary

This project demonstrates:

* Full-stack development capability
* API design without heavy frameworks
* State management and reactive UI
* Integration of caching systems (Redis)
* Production-aware error handling

---
