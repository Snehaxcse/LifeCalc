🧮 LifeCalc — A Smart Life-Aware Calculator


📌 Project Description

LifeCalc is a fully interactive, DOM-based web application built using Vanilla JavaScript, HTML, and CSS.
At first glance, it behaves like a normal calculator — but beyond basic arithmetic, it introduces life-oriented calculation modes such as savings planning, study planning, burnout checking, and a fun prank mode.

The project focuses on core JavaScript fundamentals, DOM manipulation, and event-driven programming, without relying on any frontend frameworks or libraries.

❓ Problem Statement

Traditional calculators only perform arithmetic operations and fail to assist users with real-life planning problems such as:

How much money to save monthly to reach a goal
How to divide study workload efficiently
Identifying early signs of burnout
Making calculations more engaging and human-friendly

LifeCalc solves this by extending a standard calculator into a multi-mode life utility, while still keeping the interface simple, intuitive, and browser-based.

✨ Features Implemented
🔢 Normal Calculator
Supports addition, subtraction, multiplication, and division
Decimal calculations
Fully operable via mouse and laptop keyboard

💰 Savings Calculator
Calculates monthly savings required to reach a financial goal
Input format: Goal Amount, Amount Saved, Months

📚 Study Planner
Calculates how many chapters to study per day
Input format: Total Chapters, Number of Days

🧠 Burnout Checker
Analyzes work hours, sleep hours, and break time
Provides feedback on burnout risk
Input format: Work Hours, Sleep Hours, Breaks

🤡 Prank Mode (Easter Egg)
Displays a fake result for a calculation
Reveals the correct answer after a short delay using a popup
Demonstrates creative use of DOM manipulation and timers

⌨️ Keyboard Support
Numbers, operators, Enter, Backspace, and Escape keys supported
Makes the calculator feel like a real desktop application

🧩 DOM Concepts Used

This project heavily utilizes core DOM concepts, including:
Dynamic DOM updates (innerText, value)
Creating and removing elements dynamically (createElement, appendChild)
Event handling (click, keydown)
Conditional rendering based on application state
DOM-based popup creation and removal
Styling and UI changes triggered through JavaScript
Timer-based DOM updates using setTimeout

▶️ Steps to Run the Project

Clone or download the repository
Ensure all files are in the same folder:
index.html
style2.css
script2.js

Open index.html in any modern web browser
(Chrome, Edge, Firefox recommended)

Optional:
Use VS Code Live Server for better testing
Open on mobile browser for touch interaction

⚠️ Known Limitations

No backend or database (data does not persist after refresh)
Mobile layout is functional but optimized primarily for desktop use
Uses basic expression evaluation suitable for simple calculations
Not intended for scientific or advanced mathematical operations

🎯 Final Notes

LifeCalc is intentionally designed to be simple, stable, and explainable, focusing on JavaScript fundamentals rather than excessive features.
The project demonstrates strong understanding of DOM manipulation, application logic, and user interaction, aligning closely with the Web Dev II course objectives.
