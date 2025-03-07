# React Small Apps Collection

This repository contains small React apps that demonstrate various fundamental concepts such as state management, event handling, and UI interactions. Each app is designed to be simple yet effective for learning and practicing React.

## 📌 Apps Included

### 1️⃣ Rating App ⭐
A simple star rating app that allows users to rate by clicking on stars. It uses `useState` for managing the selected rating and hover effects.

- **Features:**
  - Click on stars to set a rating
  - Hover over stars to see a preview rating
  - Uses conditional class names for active/inactive stars

### 2️⃣ Random Background Changer 🎨
Changes the background color of the webpage randomly when a button is clicked.

- **Features:**
  - Uses `useState` to track background color
  - Generates random RGB colors
  - Simple UI with a button to trigger color change

### 3️⃣ Accordion 📜
A collapsible accordion component that shows or hides content when clicked.

- **Features:**
  - Uses `useState` to toggle visibility
  - Can be extended for multiple items
  - Simple and responsive design

### 4️⃣ Counter 🔢
A simple counter app that increments or decrements a number.

- **Features:**
  - Uses `useState` to track count value
  - Buttons to increase, decrease, and reset the count
  - Shows real-time updates

### 5️⃣ To-Do App (Using Redux) ✅
A task management app that uses Redux for state management.

- **Features:**
  - Add, remove, and mark tasks as complete
  - Uses `Redux Toolkit` for global state management
  - State persists across components

### 6 Image Slider✅
An image slider with left and right buttons plus indicator buttons.

- **Features:**
  - Uses api for getting images
  - left and right key for moving image left and right
  - indicator for showing which image is open and to jump for certain image by clicking

### 7 Load more Products ✅
A program which fetches products from and api

- **Features:**
  - Fetchec Products and show them in proper way
  - load more button for fetching more data 
  - previous data will not be fetched again and it will remain render, just new data will be render and fetched when click

### 8 useMemo Hook
Used useMemo hook to avoid re-render of code when it remains unchanged in previous render

- **Features:**
  - used to avoid a calculation from happening in each render
  - dependicies for re-perform that code when dependicies state changed 
  - utilizes useMemo in program for avoiding a computation from happenning in each render which effect web performance

### 9 useReducer Hook
works as useState hook but it has some benefits, it manages all its state change in one reducer function, helps to debug and overlook state change

- **Features:**
  - used for complex state mangement
  - crated a counter app and todo app with useReducer hook,
  - todo can update previous task with new one
  
### 10 useRef Hook
used useRef to maintian a value even after re-render of component, useRef is also used to reference to dom element and maintain that element, 
- **Features:**
  - use ref for maintaining a vairable value even after rerrender
  - use ref dont cause component re-render when its value is changed ,
  - it is used to manipulate dom elements 
### 11 axios
works like fetch method but it is advanced form and have many more features,
- **Features:**
  - used axios to get data from omdb api 
  - ombd provides an api through which we can access movie details, and can be useful for practicing  projects

### 11 Tree view menu
a tree like menu where each parent may have children and children may have multiple grandchildren and so on, clicking parent open children menu and toggle it from hidden to visible
- **Features:**
  - toggle between hidden and visible


## 🛠 Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/Irfan-alyy/react-app-one.git
   cd react-app-one
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the app:
   ```sh
   npm start
   ```

## 🔗 Technologies Used
- React.js
- Redux Toolkit (for To-Do App)
- React Icons (for Rating App)
- CSS for styling

## 📜 License
This project is open-source and available under the MIT License.

---
💡 *Feel free to explore, modify, and contribute to improve these small but powerful React apps!* 🚀

