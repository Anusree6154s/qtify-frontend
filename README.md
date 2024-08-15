> [!NOTE] 
> **Repo contents:** Has frontend.<br> 
> **Purpose of repo:** To deploy frontend for this module.<br> 
> **Tasks in module:** To implement frontend.

# Module: QTify Frontend

## Overview of Module

### QTify

QTify is a song browsing web-app. We’ll be building the frontend of this web-app. The objective of this ME is to obtain a develop the skill of being able to build the UI of an application from scratch, when provided with its [Figma design](https://www.figma.com/file/tuCV26ozM1R75Ze6ShZxKs/Qtify?type=design&node-id=0-1&mode=design).

During the course of this project:

- Implemented core logic for various components such as the navbar, hero section, albums, and songs sections.
- Added features such as auto search and the ability to play songs.
- Improved UI by adding responsive design elements for a uniform experience across different devices.
- Utilized REST APIs to dynamically load and render data served by the backend server.
- Deployed the website to Vercel.

<br>
<div align="center"> 
<img src="readme images/home page.png" width="70%" >
<p align="center">QTify Home Page Interface</p>
</div>

## My Tasks

1. **Adding frontend features for**:
   - Home page and Songs page
   - Dynamic Songs and Albums listing
   - Search Bar
   - Playing Songs
2. **Deployment**

## Deployment URL

- Frontend (Vercel) - https://qtify-ten-gamma.vercel.app/

## Milestones

### 1. Add Navbar and Hero Section

- **Scope of work**:
  - Developed a responsive Navbar with a reusable Logo component, Search bar, and Feedback button with hover effects.
  - Designed the Hero Section featuring a catchy heading and a prominent image.
  - Exported assets from Figma for visual consistency.
- **Skills used**:
  - React.js, Component Design, Responsive Design, CSS, Reusable Components, Event Handling, Figma Assets
  <br>
  <div align="center"> 
  <img src="readme images/navbar and hero.png" width="70%" >
  <p align="center"> Navbar and Hero section</p>
  </div>

### 2. Add Album Grid and Albums Section with Grid Layout

- **Scope of work**:
  - Created a **Card component** as a reusable component to display information about albums using **Material UI**.
  - Fetched data from the backend API for **Top Albums** and populated the card component.
  - Implemented a **Grid layout** to display multiple cards for top albums.
  - Created a reusable **Section component** with a title, “Collapse” button, followed by the grid of album cards.
- **Skills used**:
  - Material UI, Axios, CSS Grid, Figma Implementations
  <br>
  <div align="center"> 
  <img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004889_image_12.png" width="15%" >
  <p > Album Card component</p>
  </div>

<br>
<div align="center"> 
<img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004889_image_14.png" width="50%" >
<p > Albums sections using Grid componnet</p>
</div>

### 3. Implement Songs Filter and Carousel with Genre Tabs

- **Scope of work**:
  - Created a Songs section with a Tab component for genre filtering (All, Rock, Pop, Jazz, Blues).
  - Fetched API data to display a carousel of songs by genre.
  - Styled Material UI Tabs to match Figma design and updated Card component to show Likes.
  - Enabled genre-based filtering and omitted a Show All button to avoid grid layout expansion.
- **Skills used**:
  - CSS Styling, Conditional Rendering, Carousel, Figma Design

<br>
<div align="center"> 
<img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004892_image_19.png" width="80%" >
<p>Songs section with genre based Tab filtering</p>
</div>

### 4. Implement FAQ Section, Album Details Page and Music Bar

- **Scope of work**:
  - Created an FAQ section with dynamic Accordions from Material UI and data fetched from the API.
  - Added a Music Bar component to play songs within the app.
  - Implemented a Modal for feedback with a full-screen overlay.
  - Enhanced search with a dropdown listing albums and routing to the Album Details Page.
  - Integrated pagination on the Album Details Page to display 13 songs per page.
- **Skills used**:
  - Functional Components, React Router, Pagination

<br>
<div align="center"> 
<img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004894_image_22.png" width="70%" >
<p>FAQ Section and Music Bar</p>
</div>
<br>
<div align="center"> 
<img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004894_image_23.png" width="80%" >
<p>Feedback Modal</p>
</div>
<br>
<div align="center"> 
<img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004895_image_24.gif" width="80%" >
<p>Search with Dropdown Listing</p>
</div>
<br>
<div align="center"> 
<img src="https://storage.googleapis.com/crio-content-container-assets/ME_BUILDOUT_QTIFY_V2_MODULE_ME_BUILDOUT_QTIFY_V2_MODULE_ONE_1720004895_image_25.png" width="50%" >
<p>Album Details Page</p>
</div>



### 5. Deploy the Qtify Website

- **Scope of work**:
  - Deployed the QTify React app to Vercel.
- **Skills used**:
  - Deployment, Vercel
