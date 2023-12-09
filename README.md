# <a align="center" href="https://urban-tattoo-react.web.app/">Urban Tattoo Sofia</a>

<p align="left">
  <a>
    <img src="site-view.gif" />
  </a>
</p>

#### Front-end:
<p align="left">
  <a>
    <img src="https://skillicons.dev/icons?i=html,css,js,react" />
  </a>
</p>

#### Back-end:
<p align="left">
  <a>
    <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb" />
  </a>
</p>

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
   - [Gallery](#gallery)
   - [User Registration and Authentication](#user-registration-and-authentication)
   - [Reservation](#reservation)
   - [Admin Privileges](#admin-privileges)
   - [User Profile](#user-profile)
   - [Contact Page](#contact-page)
3. [Functionalities](#functionalities)
4. [Getting Started](#getting-started)
   - [Installation](#installation)
5. [Usage](#usage)
   - [Gallery Page](#gallery-page)
   - [Booking Page](#booking-page)
   - [User Profile Page](#user-profile-page)
   - [Contact Page](#contact-page-usage)
   - [Home page](#homepage)
   - [Admin Actions](#admin-actions)
   - [Admin Register](#admin-register)
6. [Host](#host)
7. [Structure of application](#structure) 


## Introduction <a name="introduction"></a>

Application is built with React.Responsive design.Project is focused on providing potential clients with an accessible platform to view the artist's portfolio and easily book appointments.

## Features <a name="features"></a>

### Gallery <a name="gallery"></a>

The heart of the application, the Gallery page, displays all the tattoo images. Users can view images with pagination, like, and comment on them. Only registered users have the ability to interact with images.

### User Registration and Authentication <a name="user-registration-and-authentication"></a>
There are 3 types of users: Visitor, User and Admin.
Users can register on the platform to access additional features such as liking images, leaving comments,editing his comment, making reservations, and managing their profiles.

### Reservation <a name="reservation"></a>

The Booking page allows users to make reservations for tattoos. This feature optimize  the appointment process, making it convenient for both the artist and the clients.

### Admin Privileges <a name="admin-privileges"></a>

An admin account is granted special privileges, including the ability to upload and delete images from the Gallery.Also can remove or edit comments. This ensures control over the content displayed on the application.

### User Profile <a name="user-profile"></a>

Each registered user has a dedicated profile page containing information about their reservations and other details. Users can edit their profile information or choose to delete their profiles.

### Contact Page <a name="contact-page"></a>

The Contact page provides essential information for clients, including the studio's location on Google Maps, working hours, and address.

## Functionalities <a name="functionalities"></a> 

ACCESS/FUNCIONALITY  | Visitor | User | Admin
-------------  | ------------- | ------------- | ------------- |
Gallery   | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png) | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png) | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png)
Booking   | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png) | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png) | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png) 
Contact  | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png) | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png) | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png)
Profile/Edit profile   | ![alt](https://img.icons8.com/emoji/60/000000/cross-mark-emoji.png) | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png) | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png)
Upload   | ![alt](https://img.icons8.com/emoji/60/000000/cross-mark-emoji.png) | ![alt](https://img.icons8.com/emoji/60/000000/cross-mark-emoji.png) | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png)
Booking | ![alt](https://img.icons8.com/emoji/60/000000/cross-mark-emoji.png) | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png) | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png)
Like/Comment image | ![alt](https://img.icons8.com/emoji/60/000000/cross-mark-emoji.png) | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png) | ![alt](https://img.icons8.com/fluency/60/000000/checkmark.png)



## Getting Started <a name="getting-started"></a>

### Installation <a name="installation"></a>

Type in the terminal
```
npm i
```
Install all dependecies and then go for:

```
npm run start
```

Open new terminal and type:
```
cd ./server
```
Install all dependecies for the server: 
```
npm i
```
Then run the server:

```
npm start
```

WARNING!
```
Do not forget to change host to local from \src\service\request.js
```


## Usage <a name="usage"></a>

### Gallery Page <a name="gallery-page"></a>

- Browse through the tattoo images listed on the Gallery page with pagination.
- Registered users can like and comment on images.
- Admin can upload new images and delete existing ones.

### Booking Page <a name="booking-page"></a>

- Make reservations for tattoos on the Booking page.
- Provide necessary details, such as preferred date and time.

### User Profile Page <a name="user-profile-page"></a>

- View and edit user profile information.
- Access information about past and upcoming reservations.
- Delete the user profile if needed.

### Contact Page <a name="contact-page-usage"></a>

- Find information about the studio's location on Google Maps.
- Check working hours and address details.

### Home Page <a name="homepage"></a>

- Information about studio and tattoo artists.

### Admin Actions <a name="admin-actions"></a>

- Log in with admin credentials to access special privileges.
- Upload new tattoo images to the Gallery.
- Delete existing images from the Gallery.
- Delete or edit comments.

### How to register admin <a name="admin-register"></a>

```
on register form use: _admin for lastName.

```

## Host <a name="host"></a>

- Front-End deployed on Firebase.
- Back-End deployed on Railway.

You can check it here <a href="https://urban-tattoo-react.web.app/">Urban Tattoo Sofia</a>

## Structure <a name="structure"></a>
<a>
    <img src="Structure.png" />
</a>
