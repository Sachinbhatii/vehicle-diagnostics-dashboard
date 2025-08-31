# 🚘 Vehicle Diagnostics Dashboard - Frontend

A modern Angular application for monitoring and analyzing vehicle diagnostic data with a sleek automotive-themed interface.

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and **npm** 9+
- **Angular CLI** 18+

### Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Open browser**
   Navigate to `http://localhost:4200`

## 📋 Requirements

### System Requirements
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Modern browser with ES2022 support

### Backend Dependency
- Vehicle Diagnostics Backend running on `http://localhost:3000`
- Ensure backend is started before using the frontend

## 🛠 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on port 4200 |
| `npm run build` | Build for production |
| `npm test` | Run unit tests |
| `npm run watch` | Build and watch for changes |

## 🏗 Architecture

### Tech Stack
- **Angular 18** - Frontend framework
- **NgRx** - State management
- **RxJS** - Reactive programming
- **TypeScript** - Type safety

### 🏛️ Architecture Layers

```
┌─────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                       │
├─────────────────────────────────────────────────────────────┤
│  Components  │  Directives  │  Pipes  │  Guards  │  Routes  │
├─────────────────────────────────────────────────────────────┤
│                     BUSINESS LAYER                          │
├─────────────────────────────────────────────────────────────┤
│    Services   │   Effects   │  Facades  │  Validators       │
├─────────────────────────────────────────────────────────────┤
│                      STATE LAYER                            │
├─────────────────────────────────────────────────────────────┤
│   NgRx Store  │  Reducers   │ Selectors │   Actions         │
├─────────────────────────────────────────────────────────────┤
│                      DATA LAYER                             │
├─────────────────────────────────────────────────────────────┤
│  HTTP Client  │ Interceptors │  Models   │  Interfaces      │
└─────────────────────────────────────────────────────────────┘
```

### Key Features
- 🔍 **Real-time Search** - Filter by vehicle ID, error code, date range
- 📊 **Data Table** - Sortable diagnostic logs display
- 🎨 **Automotive Theme** - Dark tech interface with animations
- ♿ **Accessibility** - WCAG compliant with ARIA labels
- 📱 **Responsive** - Mobile-friendly design

### 📁 Project Structure
```
src/
├── app/
│   ├── core/                    # Singleton services, guards, interceptors
│   │   ├── guards/
│   │   ├── interceptors/
│   │   └── services/
│   ├── shared/                  # Reusable components, pipes, directives
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── utils/
│   ├── features/                # Feature modules
│   │   └── diagnostics/
│   │       ├── components/
│   │       ├── services/
│   │       └── store/
│   ├── components/              # Current UI components
│   │   ├── logs-table/          # Diagnostic logs table
│   │   └── search-panel/        # Search form
│   ├── models/                  # TypeScript interfaces
│   ├── services/                # HTTP services
│   ├── store/                   # NgRx state management
│   │   ├── logs/
│   │   └── index.ts
│   ├── app.component.*          # Root component
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/                      # Static assets
├── environments/                # Environment configurations
├── styles/                      # Global styles and themes
└── index.html                   # Entry point
```

## 🎨 UI Features

### Visual Design
- **Dark automotive theme** with circuit board patterns
- **Animated background** with diagnostic indicators
- **Glass morphism** panels with backdrop blur
- **Glowing accents** and hover effects

### Accessibility
- Screen reader support
- Keyboard navigation
- Focus indicators
- ARIA labels and roles

## 🔧 Configuration

### Environment Setup
The app connects to backend at `http://localhost:3000` by default.

### Build Configuration
- **Development**: Source maps enabled, no optimization
- **Production**: Minified, optimized bundle

## 🚨 Troubleshooting

### Common Issues

**Port 4200 already in use**
```bash
ng serve --port 4201
```

**Backend connection failed**
- Ensure backend is running on port 3000
- Check CORS configuration

**Build errors**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📱 Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔄 Development Workflow

1. **Start backend** (port 3000)
2. **Start frontend** (`npm start`)
3. **Open** `http://localhost:4200`
4. **Search** diagnostic logs
5. **Filter** by criteria


# screenshots
![Alt text](./vehicle-diagnostics-frontend
/desktop.png)


![Alt text](./vehicle-diagnostics-frontend
/iPhone.png)
