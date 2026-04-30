<div align="center">

<h3>UPV CRS</h3>

<img src="https://img.shields.io/badge/v2.0-7A0019?style=for-the-badge" alt="v2.0"/>

_University of the Philippines Visayas Computer Registration System_

</div>

---

## Team

- Jemarco Briz
- Dejel Cyrus De Asis
- John Romyr Lopez
- Andrian Lloyd Maagma

---

## System Summary

### System Overview

The UPV Computerized Registration System (CRS) 2.0 is a university-scale academic registration platform designed to support enrollment, schedule management, and academic record interaction for the entire University of the Philippines Visayas community.

The system operates under predictable but highly bursty load patterns, primarily driven by academic enrollment periods where a large fraction of the user base (estimated ~3000-3500 students, alongside faculty and administrative staff) may simultaneously access and perform write-heavy operations within short time windows.

This creates a system with the following defining characteristics:

- **Strict correctness constraints over raw performance**. Incorrect enrollment state is considered a system failure even if performance is acceptable

- **High concurrency during enrollment windows**. Many users attempting slot reservations and course enrollments within seconds of each other

- **Strong consistency requirements for enrollment data**. Prevent over-enrollment, duplicate registration, and race conditions

- **Read-heavy baseline workload outside enrollment periods**. Schedule viewing, course browsing, and dashboard access dominate normal usage

- **Write contention concentrated on a small subset of operations**. Primarily course enrollment, section assignment, and schedule locking

The system is therefore designed as a transactionally consistent, web-based distributed application, where correctness of enrollment operations is prioritized over horizontal scalability complexity.

---

### Target Audience

- Undergraduate and graduate students
- Faculty members
- Administrative staff (registrar and department coordinators)

---

### Diagram

```mermaid
sequenceDiagram
    actor U as Users (Students / Faculty / Admins)
    participant FE as Next.js Frontend (Vercel)
    participant BE as Django API (Render)
    participant R as Redis Cache
    participant DB as PostgreSQL Database
    participant AUTH as Auth (JWT / Session)
    participant S3 as Object Storage

    U->>FE: Open CRS application / interact UI
    FE->>BE: API request (fetch data / enroll / login)

    BE->>AUTH: Validate authentication token/session
    AUTH-->>BE: Auth result (valid/invalid)

    BE->>R: Check cache (e.g., courses, schedules)

    alt Cache Hit
        R-->>BE: Return cached data
    else Cache Miss
        R-->>BE: No cached data
        BE->>DB: Query relational data
        DB-->>BE: Return results
        BE->>R: Store computed result in cache
    end

    BE->>S3: Fetch/store static or media assets (if needed)
    S3-->>BE: Asset response

    BE-->>FE: API response (JSON data)
    FE-->>U: Render updated UI / state
```

---

## Technology Stack

### Frontend Tools

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3068B7?style=flat-square)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat-square)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white)

**Language: TypeScript**

- Enforces type safety for schedule and enrollment data models
- Reduces runtime errors in complex UI state transitions
- Supports maintainable multi-developer architecture

**UI Library: React**

- Component-based architecture suitable for dashboard-heavy systems
- Efficient UI updates for dynamic enrollment states

**Framework: Next.js**

- Provides routing, SSR, and optimized client-server integration
- Enables separation of public vs authenticated system surfaces

**Styling: TailwindCSS**

- Utility-first styling for rapid iteration
- Reduces CSS maintenance overhead in multi-component systems

**Component Library: shadcn/ui**

- Accessible base components without architectural lock-in
- Supports customization for institutional branding requirements

**Data Fetching: TanStack Query**

- Centralized server-state management
- Reduces redundant API calls during high traffic periods

**State Management: Redux Toolkit**

- Global state consistency for authentication and enrollment flow
- Predictable state transitions for complex UI interactions

**Validation: Zod**

- Shared schema validation between frontend and backend
- Prevents invalid enrollment and scheduling payloads

**Form Handling: React Hook Form**

- Efficient handling of complex enrollment forms
- Minimizes re-render overhead under large forms

**Linting & Formatting: ESLint + Prettier**

- Ensures consistent codebase across contributors
- Reduces integration issues during collaboration

**Package Management: pnpm**

- Deterministic dependency resolution
- Efficient monorepo-friendly structure

---

### Backend Tools

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)
![Django REST Framework](https://img.shields.io/badge/DRF-A30000?style=flat-square)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![Gunicorn](https://img.shields.io/badge/Gunicorn-499848?style=flat-square)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)
![Ruff](https://img.shields.io/badge/Ruff-000000?style=flat-square)
![Poetry](https://img.shields.io/badge/Poetry-60A5FA?style=flat-square&logo=poetry&logoColor=white)

**Runtime: Python**

- Rapid backend development for academic systems
- Strong ecosystem for structured data processing

**Framework: Django**

- Provides built-in authentication, ORM, and admin interface
- Strong transactional consistency model for relational data

**API Layer: Django REST Framework (DRF)**

- Standardized API abstraction layer
- Integrates tightly with Django ORM and auth system

**Authentication: JWT / Session-based Hybrid Model**

- JWT for stateless API access (frontend decoupling)
- Session-based fallback for admin and internal tools

**Caching: Redis**

- Improves performance for frequently accessed course and schedule data
- Reduces database load during enrollment peaks

**Web Server: Gunicorn + Nginx**

- Gunicorn handles application process management
- Nginx handles TLS termination, routing, and static assets

**Code Quality: Ruff (Python)**

- Static analysis and formatting enforcement
- Early detection of backend logic issues

**Dependency Management: Poetry**

- Reproducible Python environments
- Simplified dependency resolution

---

### Database

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

**Database Model: Relational (SQL-based)**

- Required due to structured academic relationships (students, courses, prerequisites)

**DBMS: PostgreSQL**

- Strong ACID guarantees for enrollment correctness
- Supports transactional locking required for concurrent registration
- Efficient handling of relational constraints and joins

---

### Other Tools

**Version Control: Git (GitHub)**

![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)

- Collaborative development workflow
- Code review and rollback capabilities

**Containerization: Docker**

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

- Standardized deployment across development and production
- Eliminates environment drift issues

**CI/CD: GitHub Actions**

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

- Automated testing and deployment pipeline
- Ensures consistency across environments

---

## Hosting and Deployment

### Deployment Architecture

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=black)

The system follows a decoupled frontend-backend architecture with managed cloud hosting services:

- Frontend: Vercel-hosted Next.js application
- Backend: Render-hosted Django API service
- Database: Managed PostgreSQL (Render)
- Object storage: S3-compatible storage

---

### Scalability and Reliability

The system is designed for burst-heavy academic workloads, particularly enrollment periods.

- Frontend scales automatically via CDN distribution
- Backend scales vertically (primary approach) with optional horizontal scaling if required
- Database is the primary constraint under peak load and is optimized for transactional integrity
- Redis caching is introduced selectively for read-heavy endpoints

Assumption: System bottleneck is expected at the database transaction layer during enrollment, not at the frontend or network layer.

---

### Security Model

- TLS encryption for all traffic (HTTPS enforced)
- Role-based access control (student, faculty, admin)
- Strict input validation at both frontend and backend layers
- Protection against common web vulnerabilities (CSRF, XSS, SQL injection)
- Environment-based secret management

---

### Deployment Workflow

```mermaid
flowchart TB
    Dev[Developers]

    subgraph GH[GitHub]
        Repo[Repository]
        Actions[GitHub Actions CI/CD]
    end

    subgraph FE_DEPLOY[Frontend Deployment]
        Vercel[Vercel Hosting]
    end

    subgraph BE_DEPLOY[Backend Deployment]
        Render[Render Web Service]
    end

    subgraph DB_DEPLOY[Database]
        PG[(PostgreSQL Managed DB)]
    end

    Dev --> Repo
    Repo --> Actions

    Actions -->|Build & Test Frontend| Vercel
    Actions -->|Build & Deploy Backend| Render

    Render -->|Run Migrations| PG
    PG --> Render

    Vercel -->|API Calls| Render
```

---

1. Code pushed to GitHub repository
2. CI pipeline executes:
   - Linting
   - Unit tests
   - Build validation

3. Frontend automatically deployed to Vercel
4. Backend automatically deployed to Render
5. Database migrations executed as part of backend deployment
6. Health checks validate system availability post-deployment

---

## Mockups

Access: <https://cmsc-126-activity-unit5-unit6.vercel.app/>

### Homepage

<img src="./docs/images/home.png" alt="Home"/>

### Login Page

<img src="./docs/images/login.png" alt="Login"/>

### Student Dashboard

<img src="./docs/images/dashboard.png" alt="Dashboard"/>

### Enlistment

<img src="./docs/images/enlistment.png" alt="Enlistment"/>

### Schedule / Conflict Check

<img src="./docs/images/schedule.png" alt="Schedule"/>

### Grades

<img src="./docs/images/grades.png" alt="Grades"/>
