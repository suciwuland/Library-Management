<<<<<<< HEAD
# Library Management System

## 📚 Deskripsi
Ini adalah aplikasi RESTful API untuk sistem manajemen perpustakaan menggunakan Express.js. 

Proyek ini menggunakan PostgreSQL sebagai database dan mengikuti struktur direktori yang ditentukan sebagai tugas teknikal.

## 📂 Struktur Proyek
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

## 🚀 Project Setup
  
**1. Installation Steps**

 ```
git clone https://github.com/suciwuland/Library-Management.git
cd Library-Management
npm install
```

**2. Configure Database**

```
psql -U postgres
CREATE DATABASE library_management;
```
 **Database Schema**
Struktur database yang digunakan dalam sistem ini adalah sebagai berikut:

**Tabel `books`**
```
 CREATE TABLE books (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 title VARCHAR(255) NOT NULL,
 author VARCHAR(255) NOT NULL,
 published_year INTEGER NOT NULL,
 stock INTEGER NOT NULL DEFAULT 0,
 isbn VARCHAR(13) UNIQUE NOT NULL,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
```
**Tabel `members`**
``` CREATE TABLE members (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 name VARCHAR(255) NOT NULL,
 email VARCHAR(255) UNIQUE NOT NULL,
 phone VARCHAR(15) NOT NULL,
 address TEXT NOT NULL,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
```
**Tabel `borrowings`**
```
CREATE TABLE borrowings (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 book_id UUID REFERENCES books(id),
 member_id UUID REFERENCES members(id),
 borrow_date DATE NOT NULL,
 return_date DATE,
 status VARCHAR(10) NOT NULL DEFAULT 'BORROWED',
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
```

**Data `books`**
```
 INSERT INTO books (title, author, published_year, stock, isbn) VALUES
 ('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 5, '9780743273565'),
 ('To Kill a Mockingbird', 'Harper Lee', 1960, 3, '9780446310789'),
 ('1984', 'George Orwell', 1949, 4, '9780451524935'),
 ('Pride and Prejudice', 'Jane Austen', 1813, 6, '9780141439518'),
 ('The Catcher in the Rye', 'J.D. Salinger', 1951, 3, '9780316769488'),
 ('The Hobbit', 'J.R.R. Tolkien', 1937, 7, '9780547928227'),
 ('The Da Vinci Code', 'Dan Brown', 2003, 4, '9780307474278'),
 ('The Alchemist', 'Paulo Coelho', 1988, 5, '9780062315007'),
 ('The Little Prince', 'Antoine de Saint-Exupéry', 1943, 8, '9780156012195'),
 ('Brave New World', 'Aldous Huxley', 1932, 4, '9780060850524'),
 ('The Lord of the Rings', 'J.R.R. Tolkien', 1954, 6, '9780618640157'),
 ('Harry Potter and the Sorcerers Stone', 'J.K. Rowling', 1997, 7, '9780590353427'),
 ('The Chronicles of Narnia', 'C.S. Lewis', 1950, 5, '9780066238501'),
 ('One Hundred Years of Solitude', 'Gabriel García Márquez', 1967, 3, '9780060883287'),
 ('The Hunger Games', 'Suzanne Collins', 2008, 6, '9780439023481'),
 ('The Road', 'Cormac McCarthy', 2006, 4, '9780307387899'),
 ('The Kite Runner', 'Khaled Hosseini', 2003, 5, '9781594631931'),
 ('The Girl with the Dragon Tattoo', 'Stieg Larsson', 2005, 4, '9780307949486'),
 ('The Book Thief', 'Markus Zusak', 2005, 6, '9780375842207'),
 ('Life of Pi', 'Yann Martel', 2001, 5, '9780156027328');
```
**Data `members`**
```
 INSERT INTO members (name, email, phone, address) VALUES
 ('John Doe', 'john.doe@email.com', '081234567890', '123 Main St, City'),
 ('Jane Smith', 'jane.smith@email.com', '081234567891', '456 Oak Ave, Town'),
 ('Robert Johnson', 'robert.j@email.com', '081234567892', '789 Pine Rd, Village'),
 ('Mary Williams', 'mary.w@email.com', '081234567893', '321 Elm St, Borough'),
 ('Michael Brown', 'michael.b@email.com', '081234567894', '654 Maple Dr, District'),
 ('Sarah Davis', 'sarah.d@email.com', '081234567895', '987 Cedar Ln, County'),
 ('James Wilson', 'james.w@email.com', '081234567896', '147 Birch Ave, State'),
 ('Emily Taylor', 'emily.t@email.com', '081234567897', '258 Spruce St, Province'),
 ('David Anderson', 'david.a@email.com', '081234567898', '369 Ash Rd, Territory'),
 ('Lisa Thomas', 'lisa.t@email.com', '081234567899', '741 Walnut Ct, Region'),
 ('Kevin Martin', 'kevin.m@email.com', '081234567800', '852 Cherry Ln, Area'),
 ('Jennifer White', 'jennifer.w@email.com', '081234567801', '963 Palm Ave, Zone'),
('Christopher Lee', 'chris.l@email.com', '081234567802', '159 Beach Rd, Sector'),
 ('Amanda Clark', 'amanda.c@email.com', '081234567803', '357 Coast St, District'),
 ('Daniel Martinez', 'daniel.m@email.com', '081234567804', '468 River Dr, County'),
 ('Michelle Garcia', 'michelle.g@email.com', '081234567805', '789 Lake Ave, State'),
 ('Andrew Robinson', 'andrew.r@email.com', '081234567806', '951 Ocean Blvd, Province'),
 ('Patricia Rodriguez', 'patricia.r@email.com', '081234567807', '753 Bay St, Territory'),
 ('Joseph Hall', 'joseph.h@email.com', '081234567808', '246 Harbor Rd, Region'),
 ('Nicole King', 'nicole.k@email.com', '081234567809', '135 Port Ave, Area');
```
**Data `borrowings`**
```
 INSERT INTO borrowings (book_id, member_id,
 borrow_date, return_date, status) VALUES ('b1a2c3d4-e5f6-4321-a123-987654321abc',
 'u1b2c3d4-e5f6-4321-a123-987654321def', '2024-11-21', '2024-11-28', 'RETURNED'),
 ('b2a3c4d5-e6f7-4321-a123-987654321abc', 'u2b3c4d5-e6f7-4321-a123-987654321def',
 '2024-11-22', '2024-11-29', 'RETURNED'), ('b3a4c5d6-e7f8-4321-a123-987654321abc',
 'u3b4c5d6-e7f8-4321-a123-987654321def', '2024-11-23', '2024-11-30', 'RETURNED'),
 ('b4a5c6d7-e8f9-4321-a123-987654321abc', 'u4b5c6d7-e8f9-4321-a123-987654321def',
 '2024-11-24', NULL, 'BORROWED'), ('b5a6c7d8-e9f0-4321-a123-987654321abc',
 'u5b6c7d8-e9f0-4321-a123-987654321def', '2024-11-25', NULL, 'BORROWED'),
 ('b6a7c8d9-e0f1-4321-a123-987654321abc', 'u6b7c8d9-e0f1-4321-a123-987654321def',
 '2024-11-26', '2024-12-03', 'RETURNED'), ('b7a8c9d0-e1f2-4321-a123-987654321abc',
 'u7b8c9d0-e1f2-4321-a123-987654321def', '2024-11-27', NULL, 'BORROWED'),
 ('b8a9c0d1-e2f3-4321-a123-987654321abc', 'u8b9c0d1-e2f3-4321-a123-987654321def',
 '2024-11-28', '2024-12-05', 'RETURNED'), ('b9a0c1d2-e3f4-4321-a123-987654321abc',
 'u9b0c1d2-e3f4-4321-a123-987654321def', '2024-11-29', NULL, 'BORROWED'),
 ('b0a1c2d3-e4f5-4321-a123-987654321abc', 'u0b1c2d3-e4f5-4321-a123-987654321def',
 '2024-11-30', '2024-12-07', 'RETURNED'), ('c1b2d3e4-f5a6-4321-a123-987654321abc',
 'v1w2x3y4-z5a6-4321-a123-987654321def', '2024-12-01', NULL, 'BORROWED'),
 ('c2b3d4e5-f6a7-4321-a123-987654321abc', 'v2w3x4y5-z6a7-4321-a123-987654321def',
 '2024-12-02', '2024-12-09', 'RETURNED'), ('c3b4d5e6-f7a8-4321-a123-987654321abc',
 'v3w4x5y6-z7a8-4321-a123-987654321def', '2024-12-03', NULL, 'BORROWED'),
 ('c4b5d6e7-f8a9-4321-a123-987654321abc', 'v4w5x6y7-z8a9-4321-a123-987654321def',
 '2024-12-04', '2024-12-11', 'RETURNED'), ('c5b6d7e8-f9a0-4321-a123-987654321abc',
 'v5w6x7y8-z9a0-4321-a123-987654321def', '2024-12-05', NULL, 'BORROWED'),
 ('c6b7d8e9-f0a1-4321-a123-987654321abc', 'v6w7x8y9-z0a1-4321-a123-987654321def',
 '2024-12-06', '2024-12-13', 'RETURNED'), ('c7b8d9e0-f1a2-4321-a123-987654321abc',
 'v7w8x9y0-z1a2-4321-a123-987654321def', '2024-12-07', NULL, 'BORROWED'),
('c8b9d0e1-f2a3-4321-a123-987654321abc', 'v8w9x0y1-z2a3-4321-a123-987654321def',
 '2024-12-08', NULL, 'BORROWED'), ('c9b0d1e2-f3a4-4321-a123-987654321abc',
 'v9w0x1y2-z3a4-4321-a123-987654321def', '2024-12-09', NULL, 'BORROWED'),
 ('c0b1d2e3-f4a5-4321-a123-987654321abc', 'v0w1x2y3-z4a5-4321-a123-987654321def',
 '2024-12-10', '2024-12-17', 'RETURNED');
```

**3. Update konfigurasi di ```src/config/database.js```**

```{ user: 'postgres',
 host: 'localhost',
 database: 'library_management',
 password: '<your_password>',
 port: 5432
 }
```

## 📜 Cara Menjalankan Aplikasi

```
npm start
```

the server will run on ```http://localhost:4000```

## 📌 Fitur

- Kelola data buku: Tambah, hapus, dan lihat buku di perpustakaan.
- Kelola data anggota: Tambah anggota
- Kelola transaksi peminjaman dan pengembalian: Proses peminjaman dan pengembalian buku dengan status otomatis.

## 📷 Interface Project

![Library Management Screenshot](main/Screenshot-1.png)
![Library Management Screenshot](main/Screenshot-2.png)
![Library Management Screenshot](main/Screenshot-3.png)
![Library Management Screenshot](main/Screenshot-4.png)
![Library Management Screenshot](main/Screenshot-5.png)
![Library Management Screenshot](main/Screenshot-6.png)

## ⚙️ Dokumentasi API

**1. GET  /api/books/allbook?page=1&limit=2**

Response:
```
{
  "data": [
    {
      "id": "4cca4872-b6b0-4731-8e14-7ba73aadbdb7",
      "title": "1984",
      "author": "George Orwell",
      "published_year": 1949,
      "stock": 3,
      "isbn": "9780451524935",
      "available": true
    },
    {
      "id": "d1dbed67-5241-4bea-8859-bcd969f36379",
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "published_year": 1932,
      "stock": 4,
      "isbn": "9780060850524",
      "available": true
    }
  ],
  "pagination": {
    "total": 22,
    "page": 1,
    "limit": 2,
    "totalPages": 11
  }
}
```

**2.  POST /api/members**

Request:
```
{
    name: "suciwulan",
    email: "suciwd3@gmail.com",
    phone: "089507495248",
    address: "lhokseumawe"
}
```

Response:
```
{
    "id": "3c4e66a7-5aac-45d8-9f49-21e617a5d5d6",
    "name": "suciwulan",
    "email": "suciwd3@gmail.com",
    "phone": "089507495248",
    "address": "lhokseumawe",
    "created_at": "2024-12-14T09:47:45.154Z",
    "updated_at": "2024-12-14T09:47:45.154Z"
}
```
 **3. POST /api/borrowings**

Request:
```
{
    bookId: 'ab55f00a-7bab-49f5-be8b-10e4a4de6050',
    memberId: '3c4e66a7-5aac-45d8-9f49-21e617a5d5d6'
}
```

Response:
```
{
    "id": "f263effb-7317-4eb5-915e-8f53e1f17043",
    "book_id": "ab55f00a-7bab-49f5-be8b-10e4a4de6050",
    "member_id": "3c4e66a7-5aac-45d8-9f49-21e617a5d5d6",
    "borrow_date": "2024-12-14",
    "status": "BORROWED",
    "created_at": "2024-12-14T09:49:09.690Z",
    "updated_at": "2024-12-14T09:49:09.690Z",
    "return_date": null
}
```
**4. PUT  /api/borrowings/:id/return**

Response:
```
{
    "message": "Book returned successfully",
    "borrowing": {
        "id": "f263effb-7317-4eb5-915e-8f53e1f17043",
        "book_id": "ab55f00a-7bab-49f5-be8b-10e4a4de6050",
        "member_id": "3c4e66a7-5aac-45d8-9f49-21e617a5d5d6",
        "borrow_date": "2024-12-14",
        "return_date": "2024-12-14T16:56:16.672Z",
        "status": "RETURNED",
        "created_at": "2024-12-14T09:49:09.690Z",
        "updated_at": "2024-12-14T09:49:09.690Z"
    }
}
```
**5. GET  /api/members/:id/borrowings?status=RETURNED&page=1&limit=2**

Response:
```
[
  {
    "id": "1db7deb9-df99-4a1b-8270-a85f9a71a47e",
    "book_id": "262701f6-2425-42fe-8915-dc70143d576d",
    "member_id": "0713f40c-8776-4516-9ec1-9f5649c93839",
    "borrow_date": "2024-12-13",
    "return_date": "2024-12-13",
    "status": "RETURNED",
    "created_at": "2024-12-13T11:46:24.704Z",
    "updated_at": "2024-12-13T11:46:24.704Z",
    "Book": {
      "id": "262701f6-2425-42fe-8915-dc70143d576d",
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel García Márquez",
      "published_year": 1967,
      "isbn": "9780060883287"
    },
    "Member": {
      "id": "0713f40c-8776-4516-9ec1-9f5649c93839",
      "name": "Suci"
    }
  },
  {
    "id": "5011b916-355a-4f46-bb4a-f6fed631f259",
    "book_id": "d70d3eed-e3a2-4868-8117-d801b784333d",
    "member_id": "0713f40c-8776-4516-9ec1-9f5649c93839",
    "borrow_date": "2024-12-13",
    "return_date": "2024-12-13",
    "status": "RETURNED",
    "created_at": "2024-12-13T08:45:21.545Z",
    "updated_at": "2024-12-13T08:45:21.545Z",
    "Book": {
      "id": "d70d3eed-e3a2-4868-8117-d801b784333d",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "published_year": 1925,
      "isbn": "9780743273565"
    },
    "Member": {
      "id": "0713f40c-8776-4516-9ec1-9f5649c93839",
      "name": "Suci"
    }
  }
]
```

**6. POST  /api/books/addbooks**

Request:
```
{
   title: "Laskar Pelangi",
   author: "Andrea Hirata",
   published_year: 2005,
   stock: 6,
   isbn: "9789792720160"
}
```
Response:
```
{
    "id": "e269915f-7e6f-4b70-a872-b410aaf9c686",
    "title": "Laskar Pelangi",
    "author": "Andrea Hirata",
    "published_year": 2005,
    "stock": 6,
    "isbn": "9789792720160",
    "created_at": "2024-12-14T10:06:43.936Z",
    "updated_at": "2024-12-14T10:06:43.936Z"
}
```
**7. DELETE  /api/books/delete/:id**
```
{
  "message": "Book deleted successfully!"
}
```
## ✨ Penutup
Terima kasih telah meluangkan waktu untuk meninjau proyek ini.

Saya berharap implementasi ini dapat menunjukkan pemahaman saya dalam membangun RESTful API serta mengelola kode dengan struktur yang baik. 


## Library Management System 
### Deskripsi
Ini adalah aplikasi RESTful API untuk sistem manajemen perpustakaan menggunakan Express.js. 
Proyek ini menggunakan PostgreSQL sebagai database dan mengikuti struktur direktori yang ditentukan sebagai tugas teknikal.
=======
# Library Management System 
## 📚 Deskripsi
Ini adalah aplikasi RESTful API untuk sistem manajemen perpustakaan menggunakan Express.js.  

Proyek ini menggunakan PostgreSQL sebagai database dan mengikuti struktur direktori yang ditentukan sebagai tes teknikal.


## 📂 Struktur Proyek 
/library-management-system  
>>>>>>> dfa006289efdb7cba00325118a9475577c53f788

│

├ ── /config

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


## 🚀 Project Setup

**1. Installation Steps**
```
git clone https://github.com/suciwuland/Library-Management.git
cd Library-Management
npm install
```

**2. Create Database**
```
psql -U postgres
CREATE DATABASE library_management;
```
**Table `books`**
```
 CREATE TABLE books (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 title VARCHAR(255) NOT NULL,
 author VARCHAR(255) NOT NULL,
 published_year INTEGER NOT NULL,
 stock INTEGER NOT NULL DEFAULT 0,
 isbn VARCHAR(13) UNIQUE NOT NULL,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
```
**Table `members`**
```
 CREATE TABLE members (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 name VARCHAR(255) NOT NULL,
 email VARCHAR(255) UNIQUE NOT NULL,
 phone VARCHAR(15) NOT NULL,
 address TEXT NOT NULL,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
```
**Table `borrowings`**
```
 CREATE TABLE borrowings (
 id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 book_id UUID REFERENCES books(id),
 member_id UUID REFERENCES members(id),
 borrow_date DATE NOT NULL,
 return_date DATE,
 status VARCHAR(10) NOT NULL DEFAULT 'BORROWED',
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
```

**Insert Data `books`**
```
 INSERT INTO books (title, author, published_year, stock, isbn) VALUES
 ('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 5, '9780743273565'),
 ('To Kill a Mockingbird', 'Harper Lee', 1960, 3, '9780446310789'),
 ('1984', 'George Orwell', 1949, 4, '9780451524935'),
 ('Pride and Prejudice', 'Jane Austen', 1813, 6, '9780141439518'),
 ('The Catcher in the Rye', 'J.D. Salinger', 1951, 3, '9780316769488'),
 ('The Hobbit', 'J.R.R. Tolkien', 1937, 7, '9780547928227'),
 ('The Da Vinci Code', 'Dan Brown', 2003, 4, '9780307474278'),
 ('The Alchemist', 'Paulo Coelho', 1988, 5, '9780062315007'),
 ('The Little Prince', 'Antoine de Saint-Exupéry', 1943, 8, '9780156012195'),
 ('Brave New World', 'Aldous Huxley', 1932, 4, '9780060850524'),
 ('The Lord of the Rings', 'J.R.R. Tolkien', 1954, 6, '9780618640157'),
 ('Harry Potter and the Sorcerer's Stone', 'J.K. Rowling', 1997, 7, '9780590353427'),
 ('The Chronicles of Narnia', 'C.S. Lewis', 1950, 5, '9780066238501'),
 ('One Hundred Years of Solitude', 'Gabriel García Márquez', 1967, 3, '9780060883287'),
 ('The Hunger Games', 'Suzanne Collins', 2008, 6, '9780439023481'),
 ('The Road', 'Cormac McCarthy', 2006, 4, '9780307387899'),
 ('The Kite Runner', 'Khaled Hosseini', 2003, 5, '9781594631931'),
 ('The Girl with the Dragon Tattoo', 'Stieg Larsson', 2005, 4, '9780307949486'),
 ('The Book Thief', 'Markus Zusak', 2005, 6, '9780375842207'),
 ('Life of Pi', 'Yann Martel', 2001, 5, '9780156027328');
```
**Insert Data `members`**
```
 INSERT INTO members (name, email, phone, address) VALUES
 ('John Doe', 'john.doe@email.com', '081234567890', '123 Main St, City'),
 ('Jane Smith', 'jane.smith@email.com', '081234567891', '456 Oak Ave, Town'),
 ('Robert Johnson', 'robert.j@email.com', '081234567892', '789 Pine Rd, Village'),
 ('Mary Williams', 'mary.w@email.com', '081234567893', '321 Elm St, Borough'),
 ('Michael Brown', 'michael.b@email.com', '081234567894', '654 Maple Dr, District'),
 ('Sarah Davis', 'sarah.d@email.com', '081234567895', '987 Cedar Ln, County'),
 ('James Wilson', 'james.w@email.com', '081234567896', '147 Birch Ave, State'),
 ('Emily Taylor', 'emily.t@email.com', '081234567897', '258 Spruce St, Province'),
 ('David Anderson', 'david.a@email.com', '081234567898', '369 Ash Rd, Territory'),
 ('Lisa Thomas', 'lisa.t@email.com', '081234567899', '741 Walnut Ct, Region'),
 ('Kevin Martin', 'kevin.m@email.com', '081234567800', '852 Cherry Ln, Area'),
 ('Jennifer White', 'jennifer.w@email.com', '081234567801', '963 Palm Ave, Zone'),
('Christopher Lee', 'chris.l@email.com', '081234567802', '159 Beach Rd, Sector'),
 ('Amanda Clark', 'amanda.c@email.com', '081234567803', '357 Coast St, District'),
 ('Daniel Martinez', 'daniel.m@email.com', '081234567804', '468 River Dr, County'),
 ('Michelle Garcia', 'michelle.g@email.com', '081234567805', '789 Lake Ave, State'),
 ('Andrew Robinson', 'andrew.r@email.com', '081234567806', '951 Ocean Blvd, Province'),
 ('Patricia Rodriguez', 'patricia.r@email.com', '081234567807', '753 Bay St, Territory'),
 ('Joseph Hall', 'joseph.h@email.com', '081234567808', '246 Harbor Rd, Region'),
 ('Nicole King', 'nicole.k@email.com', '081234567809', '135 Port Ave, Area');
```
**Insert Data `borrowings`**
```
 INSERT INTO borrowings (book_id, member_id,
 borrow_date, return_date, status) VALUES ('b1a2c3d4-e5f6-4321-a123-987654321abc',
 'u1b2c3d4-e5f6-4321-a123-987654321def', '2024-11-21', '2024-11-28', 'RETURNED'),
 ('b2a3c4d5-e6f7-4321-a123-987654321abc', 'u2b3c4d5-e6f7-4321-a123-987654321def',
 '2024-11-22', '2024-11-29', 'RETURNED'), ('b3a4c5d6-e7f8-4321-a123-987654321abc',
 'u3b4c5d6-e7f8-4321-a123-987654321def', '2024-11-23', '2024-11-30', 'RETURNED'),
 ('b4a5c6d7-e8f9-4321-a123-987654321abc', 'u4b5c6d7-e8f9-4321-a123-987654321def',
 '2024-11-24', NULL, 'BORROWED'), ('b5a6c7d8-e9f0-4321-a123-987654321abc',
 'u5b6c7d8-e9f0-4321-a123-987654321def', '2024-11-25', NULL, 'BORROWED'),
 ('b6a7c8d9-e0f1-4321-a123-987654321abc', 'u6b7c8d9-e0f1-4321-a123-987654321def',
 '2024-11-26', '2024-12-03', 'RETURNED'), ('b7a8c9d0-e1f2-4321-a123-987654321abc',
 'u7b8c9d0-e1f2-4321-a123-987654321def', '2024-11-27', NULL, 'BORROWED'),
 ('b8a9c0d1-e2f3-4321-a123-987654321abc', 'u8b9c0d1-e2f3-4321-a123-987654321def',
 '2024-11-28', '2024-12-05', 'RETURNED'), ('b9a0c1d2-e3f4-4321-a123-987654321abc',
 'u9b0c1d2-e3f4-4321-a123-987654321def', '2024-11-29', NULL, 'BORROWED'),
 ('b0a1c2d3-e4f5-4321-a123-987654321abc', 'u0b1c2d3-e4f5-4321-a123-987654321def',
 '2024-11-30', '2024-12-07', 'RETURNED'), ('c1b2d3e4-f5a6-4321-a123-987654321abc',
 'v1w2x3y4-z5a6-4321-a123-987654321def', '2024-12-01', NULL, 'BORROWED'),
 ('c2b3d4e5-f6a7-4321-a123-987654321abc', 'v2w3x4y5-z6a7-4321-a123-987654321def',
 '2024-12-02', '2024-12-09', 'RETURNED'), ('c3b4d5e6-f7a8-4321-a123-987654321abc',
 'v3w4x5y6-z7a8-4321-a123-987654321def', '2024-12-03', NULL, 'BORROWED'),
 ('c4b5d6e7-f8a9-4321-a123-987654321abc', 'v4w5x6y7-z8a9-4321-a123-987654321def',
 '2024-12-04', '2024-12-11', 'RETURNED'), ('c5b6d7e8-f9a0-4321-a123-987654321abc',
 'v5w6x7y8-z9a0-4321-a123-987654321def', '2024-12-05', NULL, 'BORROWED'),
 ('c6b7d8e9-f0a1-4321-a123-987654321abc', 'v6w7x8y9-z0a1-4321-a123-987654321def',
 '2024-12-06', '2024-12-13', 'RETURNED'), ('c7b8d9e0-f1a2-4321-a123-987654321abc',
 'v7w8x9y0-z1a2-4321-a123-987654321def', '2024-12-07', NULL, 'BORROWED'),
('c8b9d0e1-f2a3-4321-a123-987654321abc', 'v8w9x0y1-z2a3-4321-a123-987654321def',
 '2024-12-08', NULL, 'BORROWED'), ('c9b0d1e2-f3a4-4321-a123-987654321abc',
 'v9w0x1y2-z3a4-4321-a123-987654321def', '2024-12-09', NULL, 'BORROWED'),
 ('c0b1d2e3-f4a5-4321-a123-987654321abc', 'v0w1x2y3-z4a5-4321-a123-987654321def',
 '2024-12-10', '2024-12-17', 'RETURNED')
```

**3. Update konfigurasi di `./config/database.js`**
```
{ user: 'postgres',
 host: 'localhost',
 database: 'library_management',
 password: '<your_password>',
 port: 5432
 }
```


## 📜 Cara Menjalankan Aplikasi
```
npm start
```
the server will run on `http://localhost:4000`


## 📌 Fitur
- Kelola data buku: Tambah, hapus, dan lihat buku di perpustakaan.
- Kelola data anggota: Tambah anggota perpustakaan.
- Kelola transaksi peminjaman dan pengembalian: Proses peminjaman dan pengembalian buku dengan status otomatis.


## 📷 Interface Project 
![Library Management Screenshot](main/Screenshot-1.png)
![Library Management Screenshot](main/Screenshot-2.png)
![Library Management Screenshot](main/Screenshot-3.png)
![Library Management Screenshot](main/Screenshot-4.png)
![Library Management Screenshot](main/Screenshot-5.png)
![Library Management Screenshot](main/Screenshot-6.png)


## ⚙️ Dokumentasi API

**1. GET /api/books/allbook?page=1&limit=2**

Response:
```
{
  "data": [
    {
      "id": "4cca4872-b6b0-4731-8e14-7ba73aadbdb7",
      "title": "1984",
      "author": "George Orwell",
      "published_year": 1949,
      "stock": 3,
      "isbn": "9780451524935",
      "available": true
    },
    {
      "id": "d1dbed67-5241-4bea-8859-bcd969f36379",
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "published_year": 1932,
      "stock": 4,
      "isbn": "9780060850524",
      "available": true
    }
  ],
  "pagination": {
    "total": 20,
    "page": 1,
    "limit": 2,
    "totalPages": 10
  }
}
```


**2. POST /api/members**

Request:
```
{
   name: "Suci Wulan Dari",
   email: "suciwulan@gmail.com",
   phone: "08245678561",
   address: "panggoi"
}
```


**3. POST /api/borrowings**

Request:
```
{
    bookId: 'd70d3eed-e3a2-4868-8117-d801b784333d',
    memberId: '2c97d38b-e44a-4616-92b1-10fd9e60f1a1'
}
```
Response:
```
{
    "id": "9daff41c-8560-458e-8ad4-6d88582a5378",
    "book_id": "d70d3eed-e3a2-4868-8117-d801b784333d",
    "member_id": "2c97d38b-e44a-4616-92b1-10fd9e60f1a1",
    "borrow_date": "2024-12-14",
    "status": "BORROWED",
    "created_at": "2024-12-14T11:29:05.007Z",
    "updated_at": "2024-12-14T11:29:05.007Z",
    "return_date": null
}
```


**4. PUT  /api/borrowings/:id/return**

Request:
```
{
   borrowing: {
              id: "9daff41c-8560-458e-8ad4-6d88582a5378",
              book_id: "d70d3eed-e3a2-4868-8117-d801b784333d",
              ...,
              status: "BORROWED"
              ...}
}
```
Response:
```
{
   id: "9daff41c-8560-458e-8ad4-6d88582a5378",
   book_id: "d70d3eed-e3a2-4868-8117-d801b784333d",
   member_id: "2c97d38b-e44a-4616-92b1-10fd9e60f1a1",
   borrow_date: "2024-12-14",
   return_date: "2024-12-14T18:31:29.136Z",
   status: "RETURNED",
   created_at: "2024-12-14T11:29:05.007Z",
   updated_at: "2024-12-14T11:29:05.007Z"
}
```


**5. GET  /api/members/:id/borrowings?status=RETURNED&page=1&limit=3**

Response:
```
[
  {
    "id": "5011b916-355a-4f46-bb4a-f6fed631f259",
    "book_id": "d70d3eed-e3a2-4868-8117-d801b784333d",
    "member_id": "0713f40c-8776-4516-9ec1-9f5649c93839",
    "borrow_date": "2024-12-13",
    "return_date": "2024-12-13",
    "status": "RETURNED",
    "created_at": "2024-12-13T08:45:21.545Z",
    "updated_at": "2024-12-13T08:45:21.545Z",
    "Book": {
      "id": "d70d3eed-e3a2-4868-8117-d801b784333d",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "published_year": 1925,
      "isbn": "9780743273565"
    },
    "Member": {
      "id": "0713f40c-8776-4516-9ec1-9f5649c93839",
      "name": "Suci"
    }
  },
  {
    "id": "1db7deb9-df99-4a1b-8270-a85f9a71a47e",
    "book_id": "262701f6-2425-42fe-8915-dc70143d576d",
    "member_id": "0713f40c-8776-4516-9ec1-9f5649c93839",
    "borrow_date": "2024-12-13",
    "return_date": "2024-12-13",
    "status": "RETURNED",
    "created_at": "2024-12-13T11:46:24.704Z",
    "updated_at": "2024-12-13T11:46:24.704Z",
    "Book": {
      "id": "262701f6-2425-42fe-8915-dc70143d576d",
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel García Márquez",
      "published_year": 1967,
      "isbn": "9780060883287"
    },
    "Member": {
      "id": "0713f40c-8776-4516-9ec1-9f5649c93839",
      "name": "Suci"
    }
  },
  {
    "id": "18be8be3-f170-4b0d-8886-7b3313b3e12c",
    "book_id": "14f0a418-2cab-4a71-9bed-cfedd2e74acc",
    "member_id": "0713f40c-8776-4516-9ec1-9f5649c93839",
    "borrow_date": "2024-12-13",
    "return_date": "2024-12-13",
    "status": "RETURNED",
    "created_at": "2024-12-13T11:48:02.245Z",
    "updated_at": "2024-12-13T11:48:02.245Z",
    "Book": {
      "id": "14f0a418-2cab-4a71-9bed-cfedd2e74acc",
      "title": "The Little Prince",
      "author": "Antoine de Saint-Exupéry",
      "published_year": 1943,
      "isbn": "9780156012195"
    },
    "Member": {
      "id": "0713f40c-8776-4516-9ec1-9f5649c93839",
      "name": "Suci"
    }
  }
]
```


**6. POST api/books/addbooks**

Request:
```
{
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    published_year: 2005,
    stock: 5,
    isbn: "9789792720160"
}
```
Response:
```
{
    "id": "bf71d926-92a2-4170-8d68-337142b8ffd5",
    "title": "Laskar Pelangi",
    "author": "Andrea Hirata",
    "published_year": 2005,
    "stock": 5,
    "isbn": "9789792720160",
    "created_at": "2024-12-14T11:45:36.107Z",
    "updated_at": "2024-12-14T11:45:36.107Z"
}
```


**7. DELETE api/books/delete/:id**

Response
```
{
    "message": "Book deleted successfully!"
}
```

## ✨ Penutup
Terima kasih telah meluangkan waktu untuk meninjau proyek ini.

Saya berharap implementasi ini dapat menunjukkan pemahaman saya dalam membangun RESTful API serta mengelola kode dengan struktur yang baik.
