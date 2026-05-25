// ============================================================
// data.js — Dashboard Practice Dataset
// Covers all 27 tasks: Grouping, Filtering, Metrics, Recharts
// ============================================================

// --- SALES ORDERS ---
// Fields: id, date, month, category, product, rep, region, country, status, quantity, unitPrice, revenue
export const orders = [
  { id: 1,  date: "2024-01-05", month: "Jan", category: "Electronics", product: "Wireless Headphones", rep: "Sara",  region: "North", country: "USA",  status: "delivered", quantity: 3, unitPrice: 120, revenue: 360 },
  { id: 2,  date: "2024-01-12", month: "Jan", category: "Clothing",    product: "Winter Jacket",       rep: "Mike",  region: "South", country: "USA",  status: "pending",   quantity: 2, unitPrice: 85,  revenue: 170 },
  { id: 3,  date: "2024-01-18", month: "Jan", category: "Electronics", product: "Smart Watch",         rep: "Sara",  region: "East",  country: "UK",   status: "delivered", quantity: 1, unitPrice: 200, revenue: 200 },
  { id: 4,  date: "2024-01-25", month: "Jan", category: "Furniture",   product: "Office Chair",        rep: "James", region: "West",  country: "USA",  status: "cancelled", quantity: 1, unitPrice: 250, revenue: 250 },
  { id: 5,  date: "2024-02-03", month: "Feb", category: "Electronics", product: "Bluetooth Speaker",   rep: "Mike",  region: "North", country: "USA",  status: "delivered", quantity: 4, unitPrice: 75,  revenue: 300 },
  { id: 6,  date: "2024-02-10", month: "Feb", category: "Clothing",    product: "Running Shoes",       rep: "Sara",  region: "South", country: "UK",   status: "delivered", quantity: 3, unitPrice: 95,  revenue: 285 },
  { id: 7,  date: "2024-02-14", month: "Feb", category: "Furniture",   product: "Standing Desk",       rep: "James", region: "East",  country: "USA",  status: "pending",   quantity: 2, unitPrice: 400, revenue: 800 },
  { id: 8,  date: "2024-02-20", month: "Feb", category: "Books",       product: "React Deep Dive",     rep: "Lena",  region: "West",  country: "USA",  status: "delivered", quantity: 6, unitPrice: 35,  revenue: 210 },
  { id: 9,  date: "2024-03-07", month: "Mar", category: "Electronics", product: "Laptop Stand",        rep: "Lena",  region: "North", country: "Canada", status: "delivered", quantity: 5, unitPrice: 55, revenue: 275 },
  { id: 10, date: "2024-03-11", month: "Mar", category: "Clothing",    product: "Casual T-Shirt",      rep: "Mike",  region: "South", country: "USA",  status: "delivered", quantity: 10, unitPrice: 25, revenue: 250 },
  { id: 11, date: "2024-03-15", month: "Mar", category: "Books",       product: "JS: The Good Parts",  rep: "Sara",  region: "East",  country: "UK",   status: "pending",   quantity: 4, unitPrice: 28,  revenue: 112 },
  { id: 12, date: "2024-03-22", month: "Mar", category: "Furniture",   product: "Bookshelf",           rep: "James", region: "West",  country: "USA",  status: "delivered", quantity: 2, unitPrice: 180, revenue: 360 },
  { id: 13, date: "2024-04-02", month: "Apr", category: "Electronics", product: "Mechanical Keyboard", rep: "Lena",  region: "North", country: "USA",  status: "delivered", quantity: 3, unitPrice: 110, revenue: 330 },
  { id: 14, date: "2024-04-09", month: "Apr", category: "Clothing",    product: "Denim Jeans",         rep: "Sara",  region: "South", country: "Canada", status: "cancelled", quantity: 2, unitPrice: 65, revenue: 130 },
  { id: 15, date: "2024-04-17", month: "Apr", category: "Books",       product: "Clean Code",          rep: "Mike",  region: "East",  country: "USA",  status: "delivered", quantity: 7, unitPrice: 32,  revenue: 224 },
  { id: 16, date: "2024-04-25", month: "Apr", category: "Furniture",   product: "Monitor Arm",         rep: "James", region: "West",  country: "UK",   status: "delivered", quantity: 4, unitPrice: 90,  revenue: 360 },
  { id: 17, date: "2024-05-05", month: "May", category: "Electronics", product: "USB-C Hub",           rep: "Sara",  region: "North", country: "USA",  status: "delivered", quantity: 8, unitPrice: 45,  revenue: 360 },
  { id: 18, date: "2024-05-13", month: "May", category: "Clothing",    product: "Summer Dress",        rep: "Lena",  region: "South", country: "USA",  status: "pending",   quantity: 3, unitPrice: 55,  revenue: 165 },
  { id: 19, date: "2024-05-19", month: "May", category: "Books",       product: "You Don't Know JS",   rep: "Mike",  region: "East",  country: "Canada", status: "delivered", quantity: 5, unitPrice: 30, revenue: 150 },
  { id: 20, date: "2024-05-27", month: "May", category: "Furniture",   product: "Ergonomic Footrest",  rep: "James", region: "West",  country: "USA",  status: "delivered", quantity: 6, unitPrice: 40,  revenue: 240 },
  { id: 21, date: "2024-06-04", month: "Jun", category: "Electronics", product: "Webcam HD",           rep: "Lena",  region: "North", country: "UK",   status: "delivered", quantity: 2, unitPrice: 130, revenue: 260 },
  { id: 22, date: "2024-06-11", month: "Jun", category: "Clothing",    product: "Polo Shirt",          rep: "Sara",  region: "South", country: "USA",  status: "delivered", quantity: 5, unitPrice: 40,  revenue: 200 },
  { id: 23, date: "2024-06-18", month: "Jun", category: "Books",       product: "Atomic Habits",       rep: "Mike",  region: "East",  country: "USA",  status: "cancelled", quantity: 3, unitPrice: 22,  revenue: 66  },
  { id: 24, date: "2024-06-24", month: "Jun", category: "Furniture",   product: "Desk Lamp",           rep: "James", region: "West",  country: "Canada", status: "delivered", quantity: 7, unitPrice: 35, revenue: 245 },
  { id: 25, date: "2024-07-03", month: "Jul", category: "Electronics", product: "Wireless Mouse",      rep: "Sara",  region: "North", country: "USA",  status: "delivered", quantity: 9, unitPrice: 50,  revenue: 450 },
  { id: 26, date: "2024-07-10", month: "Jul", category: "Clothing",    product: "Hoodie",              rep: "Lena",  region: "South", country: "UK",   status: "delivered", quantity: 4, unitPrice: 70,  revenue: 280 },
  { id: 27, date: "2024-07-16", month: "Jul", category: "Books",       product: "The Pragmatic Programmer", rep: "Mike", region: "East", country: "USA", status: "pending", quantity: 6, unitPrice: 38, revenue: 228 },
  { id: 28, date: "2024-07-23", month: "Jul", category: "Furniture",   product: "Cable Organizer",     rep: "James", region: "West",  country: "USA",  status: "delivered", quantity: 12, unitPrice: 18, revenue: 216 },
  { id: 29, date: "2024-08-06", month: "Aug", category: "Electronics", product: "Smart Plug",          rep: "Lena",  region: "North", country: "Canada", status: "delivered", quantity: 6, unitPrice: 30, revenue: 180 },
  { id: 30, date: "2024-08-14", month: "Aug", category: "Clothing",    product: "Formal Shirt",        rep: "Sara",  region: "South", country: "USA",  status: "delivered", quantity: 3, unitPrice: 60,  revenue: 180 },
  { id: 31, date: "2024-08-20", month: "Aug", category: "Books",       product: "Deep Work",           rep: "Mike",  region: "East",  country: "UK",   status: "delivered", quantity: 8, unitPrice: 25,  revenue: 200 },
  { id: 32, date: "2024-08-27", month: "Aug", category: "Furniture",   product: "Whiteboard",          rep: "James", region: "West",  country: "USA",  status: "cancelled", quantity: 1, unitPrice: 150, revenue: 150 },
  { id: 33, date: "2024-09-04", month: "Sep", category: "Electronics", product: "Noise Cancelling Earbuds", rep: "Sara", region: "North", country: "USA", status: "delivered", quantity: 4, unitPrice: 90, revenue: 360 },
  { id: 34, date: "2024-09-12", month: "Sep", category: "Clothing",    product: "Sports Shorts",       rep: "Lena",  region: "South", country: "Canada", status: "delivered", quantity: 6, unitPrice: 30, revenue: 180 },
  { id: 35, date: "2024-09-19", month: "Sep", category: "Books",       product: "Zero to One",         rep: "Mike",  region: "East",  country: "USA",  status: "pending",   quantity: 4, unitPrice: 20,  revenue: 80  },
  { id: 36, date: "2024-09-26", month: "Sep", category: "Furniture",   product: "Filing Cabinet",      rep: "James", region: "West",  country: "UK",   status: "delivered", quantity: 2, unitPrice: 200, revenue: 400 },
  { id: 37, date: "2024-10-03", month: "Oct", category: "Electronics", product: "Portable Charger",    rep: "Lena",  region: "North", country: "USA",  status: "delivered", quantity: 7, unitPrice: 40,  revenue: 280 },
  { id: 38, date: "2024-10-10", month: "Oct", category: "Clothing",    product: "Leather Belt",        rep: "Sara",  region: "South", country: "USA",  status: "delivered", quantity: 5, unitPrice: 35,  revenue: 175 },
  { id: 39, date: "2024-10-17", month: "Oct", category: "Books",       product: "Thinking Fast & Slow", rep: "Mike", region: "East",  country: "Canada", status: "delivered", quantity: 3, unitPrice: 18, revenue: 54 },
  { id: 40, date: "2024-10-24", month: "Oct", category: "Furniture",   product: "Wall Clock",          rep: "James", region: "West",  country: "USA",  status: "pending",   quantity: 4, unitPrice: 45,  revenue: 180 },
  { id: 41, date: "2024-11-05", month: "Nov", category: "Electronics", product: "LED Desk Light",      rep: "Sara",  region: "North", country: "UK",   status: "delivered", quantity: 5, unitPrice: 60,  revenue: 300 },
  { id: 42, date: "2024-11-12", month: "Nov", category: "Clothing",    product: "Woolen Scarf",        rep: "Lena",  region: "South", country: "USA",  status: "delivered", quantity: 8, unitPrice: 25,  revenue: 200 },
  { id: 43, date: "2024-11-19", month: "Nov", category: "Books",       product: "The Lean Startup",    rep: "Mike",  region: "East",  country: "USA",  status: "cancelled", quantity: 2, unitPrice: 22,  revenue: 44  },
  { id: 44, date: "2024-11-26", month: "Nov", category: "Furniture",   product: "Sofa Cushion Set",    rep: "James", region: "West",  country: "Canada", status: "delivered", quantity: 3, unitPrice: 80, revenue: 240 },
  { id: 45, date: "2024-12-03", month: "Dec", category: "Electronics", product: "Smart Bulb Pack",     rep: "Lena",  region: "North", country: "USA",  status: "delivered", quantity: 6, unitPrice: 50,  revenue: 300 },
  { id: 46, date: "2024-12-10", month: "Dec", category: "Clothing",    product: "Winter Gloves",       rep: "Sara",  region: "South", country: "UK",   status: "delivered", quantity: 10, unitPrice: 20, revenue: 200 },
  { id: 47, date: "2024-12-17", month: "Dec", category: "Books",       product: "Shoe Dog",            rep: "Mike",  region: "East",  country: "USA",  status: "delivered", quantity: 5, unitPrice: 18,  revenue: 90  },
  { id: 48, date: "2024-12-24", month: "Dec", category: "Furniture",   product: "Christmas Tree Stand", rep: "James", region: "West", country: "USA",  status: "pending",   quantity: 2, unitPrice: 55,  revenue: 110 },
];

// --- EMPLOYEES ---
// Used for: Task 3 (group by department), Task 12 (best rep per region)
export const employees = [
  { id: 1, name: "Sara",  department: "Sales",     region: "North", country: "USA",    salary: 52000 },
  { id: 2, name: "Mike",  department: "Sales",     region: "East",  country: "USA",    salary: 48000 },
  { id: 3, name: "James", department: "Logistics", region: "West",  country: "USA",    salary: 45000 },
  { id: 4, name: "Lena",  department: "Marketing", region: "North", country: "UK",     salary: 50000 },
  { id: 5, name: "Chris", department: "Sales",     region: "South", country: "Canada", salary: 47000 },
  { id: 6, name: "Priya", department: "Marketing", region: "East",  country: "USA",    salary: 53000 },
  { id: 7, name: "Ravi",  department: "Logistics", region: "South", country: "USA",    salary: 44000 },
  { id: 8, name: "Nora",  department: "HR",        region: "West",  country: "UK",     salary: 46000 },
];

// --- PRODUCTS ---
// Used for: Task 1 (group by category), Task 6 (price range grouping)
export const products = [
  { id: 1,  name: "Wireless Headphones",      category: "Electronics", price: 120 },
  { id: 2,  name: "Smart Watch",              category: "Electronics", price: 200 },
  { id: 3,  name: "Bluetooth Speaker",        category: "Electronics", price: 75  },
  { id: 4,  name: "Laptop Stand",             category: "Electronics", price: 55  },
  { id: 5,  name: "Mechanical Keyboard",      category: "Electronics", price: 110 },
  { id: 6,  name: "USB-C Hub",               category: "Electronics", price: 45  },
  { id: 7,  name: "Webcam HD",               category: "Electronics", price: 130 },
  { id: 8,  name: "Wireless Mouse",           category: "Electronics", price: 50  },
  { id: 9,  name: "Smart Plug",              category: "Electronics", price: 30  },
  { id: 10, name: "Portable Charger",         category: "Electronics", price: 40  },
  { id: 11, name: "Winter Jacket",            category: "Clothing",    price: 85  },
  { id: 12, name: "Running Shoes",            category: "Clothing",    price: 95  },
  { id: 13, name: "Casual T-Shirt",           category: "Clothing",    price: 25  },
  { id: 14, name: "Denim Jeans",              category: "Clothing",    price: 65  },
  { id: 15, name: "Summer Dress",             category: "Clothing",    price: 55  },
  { id: 16, name: "Hoodie",                   category: "Clothing",    price: 70  },
  { id: 17, name: "Office Chair",             category: "Furniture",   price: 250 },
  { id: 18, name: "Standing Desk",            category: "Furniture",   price: 400 },
  { id: 19, name: "Bookshelf",                category: "Furniture",   price: 180 },
  { id: 20, name: "Monitor Arm",              category: "Furniture",   price: 90  },
  { id: 21, name: "React Deep Dive",          category: "Books",       price: 35  },
  { id: 22, name: "JS: The Good Parts",       category: "Books",       price: 28  },
  { id: 23, name: "Clean Code",               category: "Books",       price: 32  },
  { id: 24, name: "Atomic Habits",            category: "Books",       price: 22  },
  { id: 25, name: "The Lean Startup",         category: "Books",       price: 22  },
];

// --- CUSTOMERS ---
// Used for: Task 5 (count by country)
export const customers = [
  { id: 1,  name: "Alice Johnson",  country: "USA",    city: "New York"  },
  { id: 2,  name: "Bob Smith",      country: "UK",     city: "London"    },
  { id: 3,  name: "Carlos Rivera",  country: "Canada", city: "Toronto"   },
  { id: 4,  name: "Diana Chen",     country: "USA",    city: "Chicago"   },
  { id: 5,  name: "Ethan Brown",    country: "USA",    city: "Houston"   },
  { id: 6,  name: "Fatima Malik",   country: "UK",     city: "Manchester"},
  { id: 7,  name: "George Kim",     country: "Canada", city: "Vancouver" },
  { id: 8,  name: "Hannah Lee",     country: "USA",    city: "Austin"    },
  { id: 9,  name: "Ivan Petrov",    country: "UK",     city: "Bristol"   },
  { id: 10, name: "Julia Santos",   country: "Canada", city: "Montreal"  },
  { id: 11, name: "Kevin Patel",    country: "USA",    city: "Dallas"    },
  { id: 12, name: "Laura Nguyen",   country: "USA",    city: "Seattle"   },
  { id: 13, name: "Marco Rossi",    country: "UK",     city: "Edinburgh" },
  { id: 14, name: "Nina Walsh",     country: "Canada", city: "Calgary"   },
  { id: 15, name: "Oscar Diaz",     country: "USA",    city: "Miami"     },
];

// --- MONTH ORDER (helper) ---
// Use this to sort months Jan → Dec in Tasks 11, 24
export const monthOrder = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
