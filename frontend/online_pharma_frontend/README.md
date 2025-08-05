# 💊 Online Pharmacy Management System

> 🎓 A **Full Stack Web Application** developed as part of the **ExcelR Full Stack Java Developer Program**. This project simulates an online pharmacy platform with user roles, inventory, and ordering capabilities.

---

## 📌 Problem Statement

Build an **Online Pharmacy Portal** that enables:
- 🧾 Registered users to browse and order drugs
- 🔐 Secure login/logout system
- 🧑‍⚕️ Admins to manage inventory, users, and orders

---

## 🚀 Features Roadmap

### 🔧 Setup
- ✔️ REST API with Spring Boot  
- ✔️ Database integration using MySQL  
- ✔️ Exception handling & validation  
- ✔️ Layered architecture: Repository → Service → Controller  

### 🔐 Authentication
- ✅ Login / Logout  
- ✅ Role-based access for Admin and Members  

### 📦 Drug Module
- 🧑‍⚕️ Admin: Add, Edit, Delete, View by ID/Name  
- 👥 Members: View/search drugs by name or ID  

### 👥 Member Module
- 📄 Register with approval  
- 🔧 Edit profile (email, phone)  
- 👮 Admin: Approve/disable/delete members  

### 🛒 Order Module
- ➕ Add drugs to cart  
- 🧮 Auto-calculate total cost  
- ❌ Prevent order if out of stock  
- ✅ Clear cart on successful order  
- 📉 Stock gets updated post order  

> 💳 *Payment processing is not in scope*

---

## 🧑‍💻 User Roles

| Role | Capabilities |
|------|--------------|
| 👤 **Member** | Register, login, browse drugs, add to cart, edit profile |
| 🧑‍⚕️ **Admin** | Manage drugs, approve users, manage members |

---

## 🧠 Modules Overview

1. **Authentication** – Login/logout  
2. **Drug Management** – CRUD by admin  
3. **Member Management** – Registration & approvals  
4. **Order Handling** – Cart & inventory tracking  

---

## 🧪 API Testing (Postman)

All APIs tested via Postman including:
- 🔐 Login / Logout  
- 🧾 Drug CRUD  
- 👥 Member registration & management  
- 🛒 Cart operations

---

## 📦 Project Deliverables

- 📄 User stories  
- 📌 Use case diagrams  
- 🧑‍💻 Source code  
- ✅ JUnit test cases  

---

## 👨‍💻 Contributors

- Vaishnavi Sinde  
- Hemanshi  
- Sneha Mandan  
- Shubham Patil  
- Shradha Missal  
- Shubham Gaytadkar  

---

## 🌐 Languages and Tools

<p align="left">
  <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/>
  </a>
  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
  </a>
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
  </a>
  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
  </a>
  <a href="https://www.java.com" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  </a>
  <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
  </a>
  <a href="https://postman.com" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/>
  </a>
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
  </a>
  <a href="https://spring.io/" target="_blank" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/>
  </a>
</p>
