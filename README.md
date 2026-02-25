🚀 React Counter App

A simple and beginner-friendly Counter Application built using React and the useState hook.
This project demonstrates state management, event handling, and dynamic UI updates in a React functional component.

📌 Project Description

The React Counter App allows users to:

➕ Increment the counter

➖ Decrement the counter

🔄 Reset the counter to zero

🎨 View dynamic color changes based on the counter value

This project is created to strengthen understanding of React fundamentals and build a strong foundation for more advanced applications.

✨ Features

Functional component-based structure

useState hook for state management

Event handling using onClick

Conditional styling (dynamic color updates)

Clean and responsive UI design

Centered layout using Flexbox

🧠 Concepts Covered

This project demonstrates the following React concepts:

1️⃣ Functional Components

The application is built entirely using a React functional component.

2️⃣ useState Hook

Used to manage and update the counter value dynamically.

const [count, setCount] = useState(0);
3️⃣ State Updates

React automatically re-renders the UI whenever the state changes.

4️⃣ Event Handling
<button onClick={increase}>+</button>

Button clicks trigger functions that update the state.

5️⃣ Conditional Rendering & Styling
color: count > 0 ? "green" : count < 0 ? "red" : "black"

Green → Positive values


🎯 Learning Outcome

After completing this project, you will understand:

How React state works

How UI updates when state changes

How to handle user interactions

How to apply dynamic styling

How to structure a basic React application

Red → Negative values

Black → Zero
