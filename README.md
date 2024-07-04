# Web developer challenge : Full stack position

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This project was rapidly prototype using Next.js framework for fullstack functionality, Using Tailwind and DaisyUI for quick styling and responsiveness. with Prisma as the ORM and PostgreSQL for data management. Containerized using Docker for ease of deployment and scalability.

#### Basic requirement checklist

- ✔️ A complete clone of Figma design. Built with the most robust css foundation. Designed to be scalable for future enhancement in both code and styling wise.
- ✔️ Complete CRUD operation, Not just Adding a data. Now you can also Add, Edit, Delete Filter and even Sorting. Data is sorted by chronological order by default.

#### Non functional requirement checklist

- 🎯 Fully responsive for various device sizes. Starting at 320px (the lowest screen size to consider).
- 🎯 Record persistence. With the database integration, records will be persist indefinitely.
- 🎯 Partial text search to ensure the fastest possible data retrieval.

#### Additional enhancement to touch up the application

- ⭐ A collapsable sidebar for bigger screen space.
- ⭐ Now able to redirect to all routes displayed in the UI.
- ⭐ Pagination for handling large data sets, if the record is exceed certain limits.
- ⭐ Various quality-of-life improvements, such as little meaningful animations, multiple button states, and a filter button indicating the current filtering state.
- ⭐ Error handling and error display for unexpected issues.
- ⭐ Form validation to ensure the correct data management.
- ⭐ Catch all 404 page for unmatched routes.

####

---

## Prerequisite

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To ensure that an application will be working in fully ideal state.
Before you begin, Please prepare the following tools installed on your system

- Docker

## Setup

&nbsp;1. Clone the repository\
&nbsp;2. Change directory to root folder\
&nbsp;3. Run this command

    docker-compose up -d

This command will start the following services:

- next-app (Next.js application running on port 3000)
- postgres (PostgreSQL database running on port 5432)
- pgadmin (pgAdmin running on port 5050)

And finally, Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the Next.js application.

If you don't have Docker installed, you can still view the UI by running in the root directory

    npm run dev

\
**_In case of something not working as expected, Feel free to contact me and please report me the issue_**

####

---

![mock](/web-challenge/public/images/mock.png)

\
_Created by Mossarelladev, 2024_.\
Thanks for sticking to here ⭐
