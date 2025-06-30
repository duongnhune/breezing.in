# Breezing.In - Vue 3 Ticket Booking App

This project implements a responsive ticket booking interface using **Vue 3**, **SCSS**, and **Bootstrap**.  
It supports two main routes (cases):

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/duongnhune/breezing.in.git
cd breezing.in
npm install
```

### 2. Run the Dev Server

```bash
npm run dev
```

---

## 🧭 Routes

### ✅ Case 1 (Default)
- URL: `/`
- Description: Default Ticket Booking Page
- Component: `UserManagement.vue`

### ✅ Case 2
- URL: `/case-2`
- Description: Second version or layout for booking
- Component: `Case2Layout.vue` (you can modify to suit your use case)

---

## 📁 Project Structure

```
src/
├── components/             # Shared components
├── views/
│   ├── TicketBookingPage.vue   # Case 1 main view
│   └── Case2Layout.vue         # Case 2 main view
├── styles/
│   └── variables.scss      # SCSS variables for color, spacing, etc.
├── router/
│   └── index.js            # Vue Router configuration
└── App.vue
```

---

## 🛠 Technology Stack

- Vue 3 (Composition API)
- Vite
- Bootstrap Icons
- SCSS
- Responsive Design (Mobile-first)

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🧼 Lint & Format

```bash
npm run lint
```

---

## 📝 License

MIT