# BandMate Rehearsal Scheduler

A comprehensive web application designed to help bands and musical groups efficiently organize their rehearsal sessions. The app automatically schedules band rehearsals, sends reminders to members, tracks attendance, and suggests optimal rehearsal times based on member availability.

## Features

- **User Authentication & Band Management**
  - Secure login and registration
  - Create and manage multiple bands
  - Invite members via email
  - Role-based permissions (band admin, regular member)

- **Rehearsal Scheduling**
  - Create one-time and recurring rehearsals
  - Set location, duration, and additional details
  - Conflict detection with existing events
  - Bulk scheduling options

- **Smart Availability Management**
  - Set regular availability patterns
  - Mark one-off exceptions
  - Visual availability calendar
  - AI-powered optimal rehearsal time suggestions

- **RSVP & Attendance Tracking**
  - Simple response options (attending, maybe, cannot attend)
  - Attendance history and statistics
  - Automated reminders for non-responders

- **Notifications & Reminders**
  - Email notifications for new rehearsals
  - Configurable reminder timing
  - Push notifications for web/mobile

- **Calendar Integration**
  - Sync with Google Calendar, iCal, and Outlook
  - Public/private calendar links

- **Communication Tools**
  - Rehearsal-specific discussion threads
  - File sharing for sheet music and recordings
  - Announcements for all band members

## Technology Stack

### Frontend
- React.js with TypeScript
- Material-UI for component library
- Redux Toolkit for state management
- FullCalendar.js for calendar visualization
- Formik with Yup for form validation
- Service Workers for push notifications

### Backend
- Node.js with Express
- JWT authentication with OAuth 2.0 social logins
- Prisma ORM for database operations
- SendGrid for email services
- Firebase Cloud Messaging for push notifications
- AWS S3 for file storage

### Database
- PostgreSQL for primary data storage
- Redis for caching and real-time features

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- npm or yarn
- PostgreSQL (v14+)
- Redis
- AWS account (for S3)
- SendGrid account (for emails)
- Firebase project (for push notifications)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/dxaginfo/bandmate-rehearsal-app.git
   cd bandmate-rehearsal-app
   ```

2. Install dependencies:
   ```
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both `server` and `client` directories
   - Fill in the required environment variables

4. Set up the database:
   ```
   cd server
   npx prisma migrate dev
   ```

5. Start the development servers:
   ```
   # Start backend server
   cd server
   npm run dev

   # Start frontend server (in a new terminal)
   cd client
   npm start
   ```

6. Open `http://localhost:3000` in your browser

### Deployment

For production deployment, we recommend:
- Frontend: Vercel or Netlify
- Backend: AWS Elastic Beanstalk or Heroku
- Database: AWS RDS or similar managed PostgreSQL service
- Redis: AWS ElastiCache or similar managed Redis service

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [https://github.com/dxaginfo/bandmate-rehearsal-app](https://github.com/dxaginfo/bandmate-rehearsal-app)