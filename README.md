# JobBox

JobBox is a full stack job posting and job application website built with React, Express, and PostgreSQL. 

Users can create an account, log-in, search for companies, search for jobs and apply to them.

JobBox is [live on Heroku](https://jobbox-io.herokuapp.com).

![Alt text](frontend/src/assets/jobbox-demo.gif "Demo Gif")
![Alt text](frontend/src/assets/searchedjobs-screenshot?raw=true "Searched Jobs")

## Table Of Contents
- [Installation](https://github.com/kathyn262/JobBox#installation)
- [Component Hierarchy](https://github.com/kathyn262/JobBox#component-hierarchy)

## Installation 

Use npm to install dependencies and start servers for the frontend and backend. 

Backend Setup: 

```
cd backend
npm install
npm start
```

Frontend Setup: 
```
cd frontend
npm install 
npm start
```

## Component Hierarchy 
```
App
└─┬ Routes
  ├── NavBar
  ├── Home
  ├── LoginContainer
  ├── RegisterForm
  └─┬ PrivateRoutes 
    ├─┬ CompanyList
    │ ├── SearchBar
    │ └── CompanyCard 
    ├── CompanyDetails
    ├─┬ JobList
    │ ├── SearchBar
    │ └── JobCard
    └─┬ Profile
      └── ProfileForm  
```
