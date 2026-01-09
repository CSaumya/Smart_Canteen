## Project Structure

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── OrderModal.jsx
│   └── SnackCard.jsx
├── data/
│   ├── FoodData.js
│   ├── StudentData.js
│   └── MockApi.js
├── pages/
│   ├── Snacks.jsx
│   ├── Students.jsx
│   ├── StudentDetails.jsx
│   └── StudentForm.jsx
├── App.jsx
├── index.css
└── main.jsx

1- State Management
~ Combination of local state and global state

~ Redux Toolkit used for:
Students data
Snacks data
Orders management

~ Predictable and scalable state flow

2- Form Handling & Validation

~ Forms handled using React Hook Form
~ Client-side validation for:
~ Required fields
~ Quantity limits (1–5)

Clean error messages and UX-friendly form behavior

3- Component Composition

~ Reusable and modular components, such as:
~ SnackCard
~ StudentDetails
~ OrderModal
~ Navbar

Promotes clean code, reusability, and maintainability.

4- API Integration (Mocked)
~ Data is fetched using mocked APIs (or json-server)
~ Async actions handled properly with loading & error states

5- Tech Stack Used
~ React.js – UI library
~ Redux Toolkit – Global state management
~ React Hook Form – Form handling & validation
~ React Router DOM – Client-side routing
~ Tailwind CSS – Styling & responsiveness
~ Mock API / json-server – Backend simulation










