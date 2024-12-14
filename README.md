## Library Management System 
### Deskripsi
Ini adalah aplikasi RESTful API untuk sistem manajemen perpustakaan menggunakan Express.js. 
Proyek ini menggunakan PostgreSQL sebagai database dan mengikuti struktur direktori yang ditentukan sebagai tugas teknikal.

### Struktur Proyek 
/library-management-system
│
├── /config
│   └── database.js
│
├── /controllers
│   ├── bookController.js
│   ├── memberController.js
│   └── borrowingController.js
│
├── /models
│   ├── book.js
│   ├── member.js
│   └── borrowing.js
│
├── /services
│   ├── bookService.js
│   ├── memberService.js
│   └── borrowingService.js
│
├── /routes
│   ├── bookRoutes.js
│   ├── memberRoutes.js
│   └── borrowingRoutes.js
│
├── /views
│   └── index.ejs
│
└── app.js

### Project Setup

**1. Installation Steps**
git clone https://github.com/suciwuland/Library-Management.git
cd Library-Management
npm install

**2. Configure Database**
psql -U postgres
CREATE DATABASE library_management;
\c library_management;

psql -U postgres -d library_management -f Library-Management/schema.sql

**update your configuration**
{ user: 'postgres',
 host: 'localhost',
 database: 'library_management',
 password: '<your_password>',
 port: 5432
 }

**3. Start the Application**
npm start
the server will run on http://localhost:4000


