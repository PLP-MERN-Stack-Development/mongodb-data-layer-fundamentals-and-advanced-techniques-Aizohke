const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const dbName = 'plp_bookstore';
const collectionName = 'books';

async function runQueries() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const books = db.collection(collectionName);

//Task 2: Basic crud opperations

// 1. Find all books in a specific genre (Fiction)
console.log("Books in Fiction genre:");
console.log(await books.find({ genre: "Fiction" }).toArray());

// 2. Find books published after a certain year (1950)
console.log("Books published after 1950:");
console.log(await books.find({ published_year: { $gt: 1950 } }).toArray());

// 3. Find books by a specific author (George Orwell)
console.log("Books by George Orwell:");
console.log(await books.find({ author: "George Orwell" }).toArray());

// 4. Update the price of a specific book ('1984')
await books.updateOne({ title: "1984" }, { $set: { price: 12.99 } });
console.log("Updated price of 1984");

// 5. Delete a book by its title ('Moby Dick')
await books.deleteOne({ title: "Moby Dick" });
console.log("Deleted Moby Dick");

// Task 3: Advanced queries

// // 1. Books in stock and published after 2010
console.log("Books in stock and published after 2010:");
console.log(await books.find({ in_stock: true, published_year: { $gt: 2010 } }).toArray());

// 2. Projection (only title, author, price)
console.log("Projection (title, author, price):");
console.log(await books.find({}, { projection: { title: 1, author: 1, price: 1, _id: 0 } }).toArray());

// 3. Sorting by price ascending
console.log("Books sorted by price ascending:");
    
console.log(await books.find().sort({ price: 1 }).toArray());

// 4. Sorting by price descending
console.log("Books sorted by price descending:");
console.log(await books.find().sort({ price: -1 }).toArray());

// 5. Pagination (5 books per page, page 2)
console.log("Page 2 (5 books per page):");
console.log(await books.find().skip(5).limit(5).toArray());

// Task 4: Aggregation Pipelines

// 1. Average price of books by genre
console.log("\nAverage price by genre:");
console.log(await books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]).toArray());

 // 2. Author with the most books
console.log("\nAuthor with most books:");
console.log(await books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]).toArray());

// 3. Group books by publication decade
console.log("\nBooks grouped by decade:");
console.log(await books.aggregate([
  { $project: { decade: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] } } },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]).toArray());

// Task 5: Indexing and performance

// 1. Index on title
await books.createIndex({ title: 1 });
console.log("Index created on title");

// 2. Compound index on author + published_year
await books.createIndex({ author: 1, published_year: -1 });
console.log("Compound index created on author + published_year");

// 3. Explain query performance
console.log("Explain query with index:");
console.log(await books.find({ title: "1984" }).explain("executionStats"));

    } catch (err) {
    console.error('An error occurred while running queries:', err);
    } finally {
    await client.close();
    console.log('Connection closed');
    }
}

// Run the queries
runQueries().catch(console.error);