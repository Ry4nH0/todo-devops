const { execSync } = require('child_process');

const service = process.env.RENDER_SERVICE_NAME;

if (service === 'todo-backend:latest') {
  execSync('cd backend && npm install && npm start', { stdio: 'inherit' });
} else if (service === 'todo-frontend:latest') {
  execSync('cd frontend && npm install && npm start', { stdio: 'inherit' });
} else {
  console.error('Unknown service. Set RENDER_SERVICE_NAME to todo-backend or todo-frontend.');
  process.exit(1);
}
