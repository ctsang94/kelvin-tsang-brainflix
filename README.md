## BrainFlix: React Video Platform

This project implements a basic video platform using React. It features video playback, details, comments, and video uploading.

### Features:

- **Homepage:** Displays a featured video with playback controls. Includes the video's details, comments, and a list of related videos for users to explore.
- **Video Details:** Provides information about the currently playing video, including title, channel, upload date, views, likes, and description.
- **Comments:** Shows comments related to the active video and allows users to add their own.
- **Upload Page:** Enables users to upload new videos by providing a form to enter title, description, and upload a thumbnail image.

### Structure:

- **`src/App.jsx`:** The root component of the application. It manages navigation and renders other components.
- **`src/pages/HomePage/HomePage.jsx`:**  Handles the display of the homepage, including the featured video, details, comments, and video list.
- **`src/pages/UploadPage/UploadPage.jsx`:**  Renders the form for video upload.
- **Components:** Several components are used to build the user interface, including `VideoPlayer`, `VideoDetails`, `Comments`, `VideoList`, `UploadForm`, and `Header`.

### Usage:

1.  **Navigate to the homepage:**  `/`
2.  **View video details and comments:**  Click on the featured video or select a related video from the list.
3.  **Upload a new video:** Click on the "UPLOAD" button in the header and fill out the form on the `/upload` page.

### Data Handling:

- The project fetches video data using an API endpoint at `http://localhost:8080/videos`. 
- The data is stored in the `src/Data/video-details.json` file, which includes information about each video, including its title, channel, image, description, views, likes, comments, and timestamp.

### Future Improvements:

- **User Authentication:** Add user login/registration functionality to enable user-specific features.
- **Video Library:** Implement a video library to allow users to create playlists, bookmark videos, and view their watch history.
- **Search:** Enhance search functionality to allow users to filter videos by keyword, channel, or category.
- **Additional Features:**  Consider adding features like subscriptions, notifications, and more.