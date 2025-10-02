# 📚 PLP Bookstore – MongoDB Assignment (Week 1)

## 🚀 Objective
This project demonstrates the fundamentals of MongoDB, including:
- Installation and setup
- Creating databases and collections
- Performing CRUD operations
- Writing advanced queries with filtering, projection, sorting, and pagination
- Using aggregation pipelines for data analysis
- Implementing indexing for performance optimization

---

## 📂 Project Structure
- **insert_books.js** → Script to populate the `plp_bookstore` database with sample book data  
- **queries.js** → Contains all MongoDB queries (CRUD, advanced queries, aggregation, indexing)  
- **README.md** → Documentation and instructions  
- **screenshot.png** → Screenshot of MongoDB Compass/Atlas showing the `books` collection with sample data  

---

## 🛠️ Setup Instructions

### 1. Install MongoDB
- Option A: [Download MongoDB Community Edition](https://www.mongodb.com/try/download/community) and install locally  
- Option B: [Create a free MongoDB Atlas cluster](https://www.mongodb.com/atlas/database)  

### 2. Clone the Repository
```bash
git clone <https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-Aizohke.git>
cd <mongodb-data-layer-fundamentals-and-advanced-techniques-Aizohke>
```

### 3. Install Dependencies
This project uses the official MongoDB Node.js driver.
```bash
npm install mongodb
```

### 4. Configure Connection
- If using **local MongoDB**, keep the URI as:
  ```
  mongodb://localhost:27017
  ```
- If using **MongoDB Atlas**, replace the URI in both `insert_books.js` and `queries.js` with your Atlas connection string.

---

## ▶️ Running the Scripts

### Step 1: Insert Sample Data
Run the script to populate the database:
```bash
node insert_books.js
```
This will create the `plp_bookstore` database and insert sample book documents into the `books` collection.

### Step 2: Run Queries
Execute all queries (CRUD, advanced, aggregation, indexing):
```bash
node queries.js
```
Results will be printed in the terminal, grouped by task.

---

## ✅ Expected Outcomes
- A functioning MongoDB database (`plp_bookstore`) with a `books` collection
- CRUD operations (insert, find, update, delete) demonstrated
- Advanced queries with filtering, projection, sorting, and pagination
- Aggregation pipelines for analysis (average price by genre, most prolific author, books by decade)
- Indexes created and tested with `explain()`

---

---

## 📌 Notes
- All queries are written in **Node.js** using the official MongoDB driver.  
- Ensure MongoDB is running before executing scripts.  
- If you re-run `insert_books.js`, it will drop the existing collection and re-insert fresh data.  

---

## 👨‍💻 Author
Prepared by **Isaac Mathenge** for the **PLP MongoDB Week 1 Assignment**.
```