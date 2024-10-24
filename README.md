<div align="center">
  <img src="https://github.com/user-attachments/assets/99e89633-aea8-454c-b972-9a5f1ea54bf2" width="100"/>
  <h1 id="title">QTify v2 Frontend</h1>
  <p><strong>Frontend for QTify - A Song Browsing Web App</strong></p>
  <p>
    <a href="https://qtify-ten-gamma.vercel.app/">View QTify Frontend</a> •
    <a href="https://www.figma.com/file/tuCV26ozM1R75Ze6ShZxKs/Qtify?type=design&node-id=0-1&mode=design">View Figma Design</a>
  </p>
  <img src="https://github.com/user-attachments/assets/97d4388d-c953-47dc-8579-0d221fef3ea7" width="700"/>
</div>

## Table of Contents

1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
3. [Project Breakdown](#project-breakdown)
4. [Potential Improvements](#potential-improvements)

## Project Overview

<p id="description">QTify is a song browsing web-app developed to provide a smooth music discovery experience. This project focuses on building the frontend of the application using a provided Figma design.</p>

### Tech Stack

- React.js
- Material UI
- Axios
- Vercel (for deployment)

### Features

- Responsive Navbar with Search Bar and Feedback modal.
- Album Grid with dynamic data fetched via REST APIs.
- Song Carousel with genre-based filtering and Likes.
- FAQ Section with Material UI Accordions.
- Music Bar to play songs within the app.
- Search with dropdown listing of albums and navigation to Album Details page.
- Deployed on Vercel for live access.

## Setup Instructions

### Frontend

- #### Installation

    ```bash
    # clone repo
    git clone https://github.com/Anusree6154s/qtify-frontend
    cd qtify-frontend/qtify

    # install dependencies
    npm install
    ```

- #### Running the App
    ```bash
    npm start
    ```

## Project Breakdown

### Components

- **Navbar and Hero Section**:
  - **Scope of Work**:
    - Developed a responsive Navbar that includes reusable components: Logo, Search Bar, and Feedback Button.
    - Designed an engaging Hero Section with a visually striking image and attention-grabbing headline.
  - **Skills Used**: React.js, Component Design, Responsive Design, CSS, Figma Assets.

    <div align="center">
      <img src="readme images/navbar and hero.png" width="70%"/>
      <h5>Navbar and Hero Section</h5>
    </div>

- **Album Grid and Albums Section**:
  - **Scope of Work**:
    - Created a reusable Album Card component using Material UI for a consistent design.
    - Fetched and dynamically populated the grid with data from the API, displaying top albums.
  - **Skills Used**: Material UI, Axios, CSS Grid.

    <div align="center">
      <img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004889_image_12.png" width="15%"/>
      <h5>Album Card Component</h5>
    </div>

- **Songs Filter and Carousel with Genre Tabs**:
  - **Scope of Work**:
    - Developed a genre-filtered song section with a Tab component and a carousel for better navigation.
    - Fetched genre-specific song data from the API, ensuring the content dynamically updates based on the genre selected.
  - **Skills Used**: CSS Styling, Conditional Rendering, Swiper Carousel, Figma Design.

    <div align="center">
      <img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004892_image_19.png" width="80%"/>
      <h5>Songs Section with Genre-based Tabs</h5>
    </div>

- **FAQ Section, Album Details Page, and Music Bar**:
  - **Scope of Work**:
    - Implemented the FAQ section using Material UI's Accordion component for smooth interaction.
    - Designed and integrated a Music Bar for seamless song playback within the app.
    - Built a search functionality with dropdown results and created a detailed album page with pagination.
  - **Skills Used**: Functional Components, React Router, Pagination.

    <div align="center">
      <img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004894_image_22.png" width="70%"/>
      <h5>FAQ Section and Music Bar</h5>
    </div>
  
    <div align="center">
      <img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004895_image_25.png" width="50%"/>
      <h5>Album Details Page</h5>
    </div>

### Deployment
Deployed the frontend application on Vercel for easy access and continuous deployment.

## Potential Improvements

- [ ] Add user login and authentication.
- [ ] Implement a playlist feature for users.
- [ ] Enable user ratings and reviews for songs and albums.
- [ ] Optimize the website for better performance and loading times.

<p align="center"> 
<img src="https://github.com/user-attachments/assets/01e12f26-2bd5-4ed2-80a5-bcefa74f9f80" width="0" id="image" alt="demo-gif"/>
</p>
