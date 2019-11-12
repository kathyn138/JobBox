# JobBox

JobBox is a full stack job posting and job application website built with React, Express, and PostgreSQL. 

Users can create an account, log-in, search for companies, search for jobs and apply to them.

JobBox is [live on Heroku](https://jobbox-io.herokuapp.com).

![Alt text](frontend/src/assets/jobbox-demo.gif "Landing")
![Alt text](frontend/src/assets/login-screenshot.png?raw=true "Log In Page")
![Alt text](frontend/src/assets/home-screenshot?raw=true "Home Page")
![Alt text](frontend/src/assets/companies-screenshot?raw=true "Companies")
![Alt text](frontend/src/assets/companydetail-screenshot?raw=true "Company Detail")
![Alt text](frontend/src/assets/searchedjobs-screenshot?raw=true "Searched Jobs")

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
    │ ├── Search
    │ └── CompanyCard 
    ├─┬ CompanyDetail
    │ └── JobCard 
    ├─┬ Jobs
    │ ├── Search
    │ └── JobCard
    └── Profile
```

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