# TeamPulse Backend API (NestJS) Architecture Foundation

This directory houses the backend server architecture for **TeamPulse**, engineered with Node.js, NestJS, TypeScript, PostgreSQL, Redis, and BullMQ as specified in PRD Section 20.

## Module Structure

```
backend/
├── src/
│   ├── modules/
│   │   ├── auth/                      # Google Workspace OAuth 2.0 & JWT Sessions
│   │   ├── users/                     # Employee Data Management (RBAC & Profiles)
│   │   ├── projects/                  # Project Lifecycle & Audit Trail
│   │   ├── meetings/                  # Meeting Hours Aggregator & Manual Logs
│   │   ├── departments/               # Department Hierarchy
│   │   ├── dashboard/                 # Aggregated KPI & Redis Cache Queries
│   │   ├── reports/                   # Document Export Generators (PDF/CSV)
│   │   └── integrations/
│   │       └── google-calendar/       # GCal Cron Worker (BullMQ Batch Sync)
│   ├── common/                        # Global Interceptors, Guards, Middleware
│   ├── config/                        # Environment & Connection Configs
│   ├── database/                      # PostgreSQL Migrations & TypeORM Entities
│   ├── main.ts                        # Application Entry Point Shell
│   └── app.module.ts                  # Root App Module Shell
├── nest-cli.json
├── package.json
└── tsconfig.json
```
