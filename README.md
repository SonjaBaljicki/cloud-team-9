# Project for class Cloud Computing

# CloudCinema
This project is a web application for storing and managing movie content, developed using AWS cloud services following a cloud-native architecture.

## User Types
### Unauthenticated User
- After registering on the system the user can log in or if they already have an account, they just log in.
### Administrator
- Authenticated user in the administrator role. This user can upload new content, view, edit, and delete existing content.
### Regular User
- Authenticated user who can search and view existing content, rate content, subscribe to content and manage subscriptions and receive notifications for subscribed content. This user has a personalized feed based on previous interactions with the system and can download uploaded content locally.
## System Components
### Client Application
- Provides a graphical interface through which users access system functionalities, implemented using Angular.
### Server Application
- Cloud-native application containing the system's business logic implemented using appropriate AWS services.
