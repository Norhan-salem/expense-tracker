# **💰 Expense Tracker App**

This is my submission for Palm's tech assessment, an expense tracker built with **React, Redux Toolkit, Bootstrap, and Framer Motion** to help you efficiently manage your finances. Designed with a modern **Neon Yellow & Dark Teal** theme, this app offers **real-time expense tracking, filtering, and sorting** for a seamless user experience. 🚀

----------

## **🌟 Features**

✅ **Add & Delete Expenses** – Easily log your expenses with category selection.  
✅ **Form Validation with Zod** – Ensures valid inputs for name, amount, and category.  
✅ **Persistent Storage** – Data is saved in **localStorage** to retain expenses across sessions.  
✅ **Filter by Category** – Quickly view expenses within specific categories.  
✅ **Sort by Name or Amount** – Organize expenses dynamically with sorting buttons.  
✅ **Smooth Animations** – Experience **Framer Motion** animations for a polished UI.  
✅ **Responsive Design** – Fully optimized for mobile and desktop users.

----------

## **🛠️ Tech Stack**

- **Frontend**: React.js, Redux Toolkit, Framer Motion
- **State Management**: Redux Toolkit (with localStorage persistence)
- **Form Validation**: Zod (Ensures correct input data)
- **Styling**: Bootstrap, Custom CSS
- **Icons**: React Icons

----------

## **⚙️ Prerequisites**  

Before running the project, ensure you have the following installed on your system:  

- **Node.js (v16 or later)** – [Download here](https://nodejs.org/)  
- **npm (v8 or later)** – Comes with Node.js
- **Git** – [Download here](https://git-scm.com/) to clone the repository  

----------

## **🚀 Installation & Setup**

1️⃣ **Clone the repository:**

```bash
git clone https://github.com/Norhan-salem/expense-tracker.git
cd expense-tracker
```

2️⃣ **Install dependencies:**

```bash
npm install
```

3️⃣ **Run the app locally:**

```bash
npm start
```

4️⃣ **Open in your browser:**

```
http://localhost:3000
```

----------

## **📂 Project Structure**

```
📦 expense-tracker
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 ExpenseForm.jsx
 ┃ ┃ ┣ 📜 ExpenseList.jsx
 ┃ ┃ ┣ 📜 ExpenseItem.jsx
 ┃ ┃ ┣ 📜 ExpenseInput.jsx
 ┃ ┃ ┣ 📜 ExpenseSelect.jsx
 ┃ ┃ ┣ 📜 ExpenseSort.jsx
 ┃ ┃ ┣ 📜 ExpenseFilter.jsx
 ┃ ┃ ┣ 📜 DeleteModal.jsx
 ┃ ┃ ┣ 📜 Footer.jsx
 ┃ ┣ 📂 redux
 ┃ ┃ ┣ 📜 expenseSlice.js
 ┃ ┃ ┣ 📜 store.js
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ 📜 style.css
 ┃ ┃ ┣ 📜 footer.css
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.js
 ┣ 📜 package.json
 ┣ 📜 README.md
```

----------

## **📘 Usage Guide**

### **1. Adding an Expense:**
   - Fill in the **expense name, amount, and category**.
   - Click **"Add Expense"**.
   - Expenses appear in the list immediately.

### **2. Filtering & Sorting:**
   - Select a category from the **dropdown** to filter expenses.
   - Use the **"Sort by Name"** and **"Sort by Amount"** buttons to organize entries.

### **3. Deleting an Expense:**
   - Click the **trash icon** next to an expense to remove it.
   - A confirmation modal will appear before deletion.

### **4. Form Validation:**
   - The form **will not submit** if fields are empty or the amount is negative.
   - An error message will indicate the issue.
