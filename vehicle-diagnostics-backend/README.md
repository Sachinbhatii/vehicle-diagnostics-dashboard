# 🔧 Vehicle Diagnostics Dashboard - Backend

A robust NestJS backend API for processing and serving vehicle diagnostic data with real-time log parsing and filtering capabilities.

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and **npm** 9+
- **NestJS CLI** (optional)

### Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run start:dev
   ```

3. **API available at**
   `http://localhost:3000`

## 📋 Requirements

### System Requirements
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- TypeScript 5.1+

### Database
- **LowDB** - File-based JSON database
- Auto-creates `db.json` on first run
- Sample data seeded automatically

## 🛠 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run start:dev` | Start development server with watch mode |
| `npm run start:debug` | Start with debug mode |
| `npm run build` | Build for production |
| `npm test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run lint` | Run ESLint |

## 🏗 Architecture

### Tech Stack
- **NestJS** - Node.js framework
- **TypeScript** - Type safety
- **LowDB** - JSON file database
- **Class Validator** - Input validation
- **Express** - HTTP server

### Project Structure
```
src/
├── logs/
│   ├── dto/                 # Data Transfer Objects
│   │   └── log-query.dto.ts # Query validation
│   ├── interfaces/          # TypeScript interfaces
│   │   └── log-entry.interface.ts
│   ├── logs.controller.ts   # REST endpoints
│   ├── logs.service.ts      # Business logic
│   └── logs.module.ts       # Module definition
├── app.controller.ts        # Root controller
├── app.module.ts           # Root module
└── main.ts                 # Application entry point
```

## 🔌 API Endpoints

### Base URL: `http://localhost:3000`

#### GET `/logs`
Retrieve diagnostic logs with optional filtering

**Query Parameters:**
- `vehicle` - Filter by vehicle ID (e.g., `1234`)
- `code` - Filter by error code (e.g., `U0420`)
- `from` - Start date (ISO format)
- `to` - End date (ISO format)

**Examples:**
```bash
# Get all logs
GET /logs

# Filter by vehicle ID
GET /logs?vehicle=1234

# Filter by error code
GET /logs?code=U0420

# Filter by date range
GET /logs?from=2025-01-24T00:00:00Z&to=2025-01-25T23:59:59Z

# Combined filters
GET /logs?vehicle=1234&code=U0420&from=2025-01-24T00:00:00Z
```

**Response Format:**
```json
[
  {
    "timestamp": "2025-01-24T14:21:08.000Z",
    "vehicleId": "1234",
    "code": "U0420",
    "description": "Steering angle sensor malfunction"
  }
]
```

#### POST `/logs`
Add new diagnostic log entry

**Request Body:**
```json
{
  "log": "[2025-07-24 14:21:08] [VEHICLE_ID:1234] [ERROR] [CODE:U0420] [Steering angle sensor malfunction]"
}
```

## 📊 Data Format

### Log Entry Structure
```typescript
interface LogEntry {
  timestamp: string;    // ISO date string
  vehicleId: string;    // Vehicle identifier
  code: string;         // Diagnostic error code
  description: string;  // Error description
}
```

### Supported Log Format
```
[YYYY-MM-DD HH:mm:ss] [VEHICLE_ID:xxxx] [ERROR] [CODE:xxxx] [Description]
```

## 🔧 Configuration

### Environment Variables
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode

### CORS Configuration
- Enabled for frontend at `http://localhost:4200`
- Configurable in `main.ts`

## 🚨 Error Handling

### HTTP Status Codes
- `200` - Success
- `400` - Bad Request (invalid query parameters)
- `422` - Unprocessable Entity (invalid log format)
- `500` - Internal Server Error

### Error Response Format
```json
{
  "statusCode": 400,
  "message": "Invalid query parameters",
  "error": "Bad Request"
}
```

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:cov
```

## 🐳 Docker Support

### Build Image
```bash
docker build -t vehicle-diagnostics-backend .
```

### Run Container
```bash
docker run -p 3000:3000 vehicle-diagnostics-backend
```

### Docker Compose
```bash
docker-compose up
```

## 🚨 Troubleshooting

### Common Issues

**Port 3000 already in use**
```bash
PORT=3001 npm run start:dev
```

**Database file permissions**
```bash
chmod 644 db.json
```

**Module not found errors**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🔄 Development Workflow

1. **Start backend** (`npm run start:dev`)
2. **API available** at `http://localhost:3000`
3. **Test endpoints** with Postman/curl
4. **View logs** in `db.json`
5. **Frontend connects** automatically

## 📈 Performance

- **In-memory caching** for frequent queries
- **File-based storage** for persistence
- **Efficient filtering** with indexed searches
- **CORS optimization** for frontend integration

# Architecture
![Alt text](backend-design.png)
