# 🎓 Student Portfolio - React Practical 1

A simple **Student Portfolio** web application built using **React** and **Vite**. This project demonstrates the fundamentals of React, including reusable functional components, props, and component-based architecture.

---

## 📖 Project Overview

This project was created as part of **Practical 1: Introduction to React and Component Architecture**.

The application displays a student portfolio consisting of:

- 🏠 Navbar
- 👤 Header
- 📄 About Section
- 💻 Skills Section
- 📁 Projects Section
- 📞 Footer

The application follows React's component-based architecture and uses **props** to pass data between components.

---

## 🚀 Features

- Built with React + Vite
- Reusable Functional Components
- Props for Data Passing
- Dynamic Skills List
- Clean Component Structure
- Beginner-Friendly Code
- Responsive Layout

---

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6)
- HTML5
- CSS3
- Node.js
- npm

---

## 📂 Project Structure

```text
student-portfolio/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/dondakhushi/AWDF_Student-Portfolio.git
```

### 2. Navigate to the Project Folder

```bash
cd portfolio-24IT01
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Open in Browser

```text
http://localhost:5173
```

---

## 📌 Components

### Navbar

- Displays navigation links.

### Header

- Displays student name.
- Receives `name` and `themeColor` using props.

### About

- Displays a short introduction about the student.

### Skills

- Receives an array of skills using the `skillList` prop.
- Renders the list dynamically using `map()`.

### Projects

- Displays a list of sample projects.

### Footer

- Displays email and copyright information.

---

## 📋 Props Used

| Component | Props |
|-----------|-------|
| Header | `name`, `themeColor` |
| Skills | `skillList` |
| Footer | `email` |

---

## 📸 Expected Output

The webpage contains:

- Navigation Bar
- Student Name
- About Section
- Skills List
- Projects List
- Footer

---

## 🎯 Learning Outcomes

After completing this project, you will be able to:

- Create a React project using Vite.
- Build reusable functional components.
- Pass data using props.
- Organize components in a modular structure.
- Render lists dynamically using `map()`.
- Understand React component composition.

---

## 📚 Concepts Covered

- React
- JSX
- Functional Components
- Props
- Component Architecture
- Array Mapping
- Vite Project Setup

---

## 🔮 Future Enhancements

- Add Routing with React Router
- Add Dark/Light Theme
- Add Contact Form
- Fetch Projects from an API
- Add Responsive Design
- Add Animations

---

## 👩‍💻 Author

**Khushi Donda**

Information Technology Student

---

## 📄 License

This project is created for educational purposes as part of a college React practical.
