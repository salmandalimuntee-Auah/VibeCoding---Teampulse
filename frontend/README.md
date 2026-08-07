# TeamPulse Frontend App (Next.js + TypeScript) Architecture Foundation

This directory houses the frontend web client architecture for **TeamPulse**, engineered with Next.js (App Router), TypeScript, Tailwind CSS, and Apple-Inspired Design Tokens (`DESIGN-apple.md`).

## Folder Structure

```
frontend/
├── public/                            # Static Public Assets (Fonts, SVG Icons)
├── src/
│   ├── app/                           # Next.js App Router Shells & Page Layouts
│   ├── design-system/                 # Apple Design System Tokens & Style Engine
│   │   ├── tokens/                    # Color (#0066cc), Typography, Spacing Tokens
│   │   └── styles/                    # Theme Engine & Utilities
│   ├── components/                    # Atomic Presentational Primitives
│   │   ├── ui/                        # Button, Card, Badge, Modal, Progress, Input
│   │   ├── layouts/                   # 44px Black Nav, 52px Frosted Sub-Nav Shells
│   │   └── feedback/                  # Skeleton, Empty State, Error Shells
│   ├── features/                      # Domain Features (Auth, Dashboard, Projects, Meetings, Directory, Reports, Admin)
│   ├── services/                      # API Client & Storage Services
│   ├── stores/                        # Zustand Global State
│   ├── providers/                     # React Context Providers
│   ├── hooks/                         # Universal Utility Hooks
│   ├── utils/                         # Formatter & Validation Utilities
│   ├── types/                         # Shared Type Definitions
│   └── constants/                     # Immutable App Constants
├── tailwind.config.ts                 # Tailwind Config Ingesting Design Tokens
├── tsconfig.json                      # Strict TypeScript Configuration
└── package.json
```
