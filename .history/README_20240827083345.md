# Star Destroyer

## Overview

Welcome to the **Star Destroyer** project! This React application is designed to help practice using the powerful hooks `useEffect` and `useRef`. The goal is to create an interactive space environment where stars are generated randomly in the viewport every 2.5 seconds, and users can destroy these stars by clicking on them.

## Features

- **Star Generation:** Stars are generated at random positions within the viewport every 2.5 seconds.
- **Star Destruction:** Click on a star to destroy it and remove it from the screen.
- **Focus Effect:** Each star is automatically focused upon creation, with a visual indication such as a shadow.

## Project Structure

````plaintext
star-destroyer/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Space.js
│   │   └── Star.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── README.md
└── package.json

```## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/star-destroyer.git
   cd star-destroyer
````

2.**Install dependencies**

### Technical Details

```markdown
## Technical Details

- **React Hooks:**

  - `useEffect`: Used to handle the interval for generating stars and cleaning up the interval on component unmount.
  - `useRef`: Used to automatically focus on each star when it is created.

- **State Management:**
  - `useState`: Manages the array of stars, each with a unique ID and position.
```
