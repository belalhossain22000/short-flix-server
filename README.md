
```markdown
# 🎬 Short-Flix Backend API
**Express.js + TypeScript + Modular Architecture**

This is the backend API for **Short-Flix**, a Netflix-style shorts streaming platform.  
The backend is built with **Express.js**, **TypeScript**, and a clean modular folder structure, providing a scalable foundation for production-ready APIs.  
The API is deployed on **Vercel** and consumed by the Next.js frontend at:

```

/api/shorts

```

---

##  Tech Stack

- **Express.js**
- **TypeScript**
- **Modular Architecture (Controller → Service → Route → Model)**
- **Zod / Joi** for validation (if applicable)
- **CORS**
- **Vercel Serverless Deployment**
- **ESM / TS-Node / Build Output Dist Folder**

---

##  Project Structure

```

src/
├── app/
│    ├── modules/
│    │      └── shorts/
│    │            ├── shorts.controller.ts
│    │            ├── shorts.service.ts
│    │            ├── shorts.route.ts
│    │            ├── shorts.validation.ts
│    │            └── shorts.interface.ts
│    ├── middlewares/
│    ├── utils/
│    └── config/
├── server.ts
└── app.ts

dist/  → Compiled production build

````

This structure cleanly separates logic and supports scaling into micro-modules.

---

##  Features

- Create and fetch short-videos  
- Pagination + filtering (tags, search)  
- Centralized error handler  
- DTO validation for incoming data  
- Scalable modular architecture  
- Ready for database integration (currently file / in-memory storage)  
- Deployed on Vercel as serverless Express API  

---

## API Endpoints

### **GET /api/shorts**
Fetch all shorts  
Supports query parameters:

- `page`  
- `limit`  
- `search`  
- `tag`  

### **POST /api/shorts**
Create a new short  

Example body:

```json
{
  "title": "My Demo Short",
  "videoUrl": "https://example.com/video.mp4",
  "tags": ["fun", "action"]
}
````

---

##  Improvements With More Time

* Connect to MongoDB/PostgreSQL using Prisma
* Add likes, views, analytics tracking
* Add user authentication (JWT)
* Video upload using AWS S3 / Cloudflare R2
* Add rate limiting and caching for performance
* Migrate to microservices for scaling

---

##  Tools Used During Development

* **ChatGPT** for optimizing architecture, validation patterns, and generating boilerplate
* **GitHub Copilot** for faster TypeScript controller/service scaffolding
* **Postman** for API testing
* **Vercel** for serverless deployment

```


