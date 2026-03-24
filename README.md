# Web App Portfolio

## A full-stack portfolio web application featuring a locally hosted AI assistant and a dynamic project management system.

This project demonstrates how to integrate a self-hosted language model with a modern full-stack architecture, including a React frontend, Node.js API layer, PostgreSQL database, and a Python-based AI service.

```
## Features
AI System
Interactive AI chat assistant powered by a local LLM (Phi-3 via Ollama)
Custom personality using structured system context (context.py)
Chat history handling with role mapping (user / assistant)
AI warm-up system to reduce cold start latency
Node.js proxy layer (Express) connecting frontend → FastAPI → Ollama
User warning system for slow responses
```

```
## Frontend & UI
React-based responsive UI
Smooth page transitions using Framer Motion
Interactive project showcase with modal system
Image slideshow inside project modal
Click-outside and close button modal UX
Stable image container (prevents layout shift)
Lazy-loaded images for performance
Scroll-based storytelling page (My Story)
```
```
## Admin Upload Panel (Connected to Backend)
Custom admin upload page (protected route ready)
Modern form UI inspired by content upload platforms
Structured input layout (aligned, consistent spacing)
Image upload with preview system
Form connected to backend API (POST request)
Ready for full CRUD operations (Create implemented)
```
```
## About Page (Modern CV Design)
Two-column CV layout (content + sticky photo)
Responsive mobile layout (column stack)
Developer timeline with structured milestones
Toggle system:
Quick Summary
Full Story
Clean typography and readable hierarchy
```
```
## UX Decisions
Sticky → static layout switch for mobile responsiveness
Timeline toggle for recruiter-friendly reading
Content-first design for clarity and accessibility
```
```
## Backend & Infrastructure
Main Backend (Node.js / Express)
REST API for project management
CRUD-ready architecture (Create + Read implemented)
Middleware handling (CORS, JSON parsing)
Central API gateway for frontend
AI Backend (FastAPI)
Handles AI requests and prompt construction
Communicates with Ollama for LLM inference
Optimized request pipeline and response handling
```
```
## Database
PostgreSQL database integration
Structured project storage (title, description, links, image, timestamp)
Ordered queries (latest projects first)
```
```
## Architecture Pattern
Multi-service architecture (microservice-style)
Node.js acts as API gateway between frontend and AI backend
```
```
## Project Showcase (Dynamic Data)
Projects loaded dynamically from PostgreSQL
API-driven project rendering
Real-time updates via backend
Modal system with:
  Image slideshow
  GitHub + Demo links
  Project details
```
```
## UX Decisions
Modal-based interaction for faster navigation
Fixed layout to prevent UI shifting
Clean separation of data and UI
```
```
Architecture
React (Frontend)
       ↓
Node.js / Express (API Gateway)
 ├── /api/projects → PostgreSQL
 └── /api/chat → FastAPI
                    ↓
                 Ollama
                    ↓
              Local LLM (Phi-3)
```
```
## Tech Stack
Frontend
React
Vite
JavaScript
HTML / CSS
Framer Motion

## Backend
Node.js
Express
Python
FastAPI

## Database
PostgreSQL

## Infrastructure
Docker (multi-service setup)
Ubuntu (server environment)
SSH

## AI Integration
Ollama
Phi-3

## Setup & Installation
Clone Repository
git clone https://github.com/yourusername/your-repo.git
cd your-repo

## Run Everything (Docker)
docker-compose up --build

## Services:
Frontend → http://localhost:5173
Backend → http://localhost:5000
AI → http://localhost:8000

## Run Ollama (if not containerized)
ollama serve
ollama pull phi3
API Endpoints

## Projects API
GET /api/projects
POST /api/projects

## AI Chat API
POST /api/chat
```
```
Request Example
{
  "messages": [
    { "role": "user", "content": "Tell me about yourself" }
  ]
}

Response Example

{
  "reply": "I’m Fahmi Aji Pranata..."
}
Performance Considerations
```
```
## Problems Faced
Cold start delay for local LLM
Slow inference (~40–120 seconds)
API timeout handling

## Solutions
AI warm-up system on startup
Reduced token generation
Limited chat history
Optimized request payload
Frontend user warning system

## UI / UX Highlights
### AI Chat Experience
Message-based UI
Loading state (“Thinking…”)
Pre-chat warning screen

### Project Modal System
Interactive modal UI
Image slideshow
Stable layout (no shift)
External links integration

### Admin Upload Experience
Structured form UI
Backend-connected submission
Preview-ready image system
Designed for CMS scalability

### Story Page (My Story)
Scroll-based storytelling
Intersection Observer animations
Alternating layout
Mobile-optimized stacking
```
```
Project Structure
project-root/
├── frontend/
├── web-app-backend/
│   ├── routes/
│   ├── config/
│   └── server.js
├── ai-backend/
│   ├── main.py
│   ├── context.py
│   └── …
├── docker-compose.yml
```
```
What I Learned
Building full-stack applications (React + Node + PostgreSQL)
Designing API architecture and routing systems
Connecting multiple backends (Node ↔ FastAPI)
Integrating local LLMs into applications
Using Docker for multi-service environments
Handling real-world errors (CORS, DB auth, API failures)
Creating admin tools and CRUD workflows
Debugging layout issues across devices
Managing UI + animation conflicts
Future Improvements
Full CRUD (update & delete projects)
Image upload with Multer
Authentication system (admin login)
Streaming AI responses
Cloud deployment (VPS)
HTTPS + domain setup
Performance optimization for AI
```

About
I am a self-taught full-stack developer based in Japan, building real-world applications that integrate frontend, backend, and AI systems. Alongside my professional role, I continuously develop and deploy projects independently, focusing on practical problem-solving, system design, and user experience. This portfolio reflects my ability to learn quickly, adapt across technologies, and build complete, production-style applications.

License
This project is for learning and portfolio purposes.
