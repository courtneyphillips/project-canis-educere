## Project Canis Educere
Courtney Phillips<br>
March 2023

### Topic

This learning module provides a hands-on introduction to Serverless programming using Google Cloud Functions.

After a brief introduction to serverless terminology and concepts, we'll walk through creating an automated cloud workflow together, step-by-step.

Specifically, we'll construct a self-serve reporting process that allows users to request LMS reports on-demand. These reports are created, compiled, and delivered via Cloud Functions logic.  

This project aims to simultaneously expose learners to serverless concepts used by large engineering teams, while also depicting how they can solve everyday workplace challenges.

### Prerequisite Knowledge

This module is designed for learners familiar with:

- Simple HTTP requests, especially in the context of APIs
- RESTful API structure
- Fundamental JavaScript syntax and logic, including defining and exporting functions, handling asynchronous tasks with basic callbacks, manipulating string and JSON data, etc.
- Node.js, including foundational syntax, npm package management, etc.

### Learning Objectives

After completing this module, learners will be able to:

- Create and invoke event-based triggers in Google Apps Scripts
- Follow best practices to obfuscate sensitive values in Google Cloud Platform using Google Cloud Secrets Manager
- Construct automated workflows across multiple APIs in Google Cloud Functions
- Create, configure, and access a new project in Google Cloud Platform
- Author and deploy a Cloud Functions in JavaScript and Node.js
- Access, review, and analyze execution logs for Google Apps Script and Cloud Functions
- Create, execute, and manage interdependent HTTP GET and POST requests in Cloud Functions
- Manage sensitive data in cloud projects using using Google Secrets Manager

### Tools and Services  

The following tools are used in this module. Outside of owning a Google account and email address, no pre-emptive setup is required. Lessons will walk through accessing and configuring each tool as necessary.    

- **Google Suite**: Used to create and operate Forms, Spreadsheets, and Apps Script.
- **Google Cloud Platform**: Used to create and manage a Google Cloud Project containing a Cloud Function and Secrets Manager service.
- [**Twilio SendGrid API**](https://docs.sendgrid.com/): Used to send basic emails via HTTP request.
- [**Mocked LMS API**](https://github.com/courtneyphillips/project-canis-educere): Used as a placeholder for LMS data, for purposes of this exercise.

### Navigating the Module

* Lessons are located in the [`curriculum` directory](./curriculum) of this repository.  
* They are designed to be worked through in order, right here on GitHub.
* At the end of each lesson you will find navigation links to access the next.

# [➡️ CLICK HERE TO BEGIN ⬅️ ](./curriculum/1.0_intro_to_serverless_and_faas.md)
