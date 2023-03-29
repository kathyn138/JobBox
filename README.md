# JobBox

JobBox is a full stack job posting and job application website built with React, Express, and PostgreSQL. 

Users can create an account, log-in, search for companies, search for jobs and apply to them. 

JobBox is [live on Netlify](https://jobbox.netlify.app/).

Front end unit tests are written with Enzyme.

Test user information:
- Username: testuser123
- Password: testuser123

![Alt text](frontend/src/assets/jobbox-demo.gif "Demo Gif")
![Alt text](frontend/src/assets/searchedjobs-screenshot?raw=true "Searched Jobs")

## Table Of Contents
- [Installation](https://github.com/kathyn138/JobBox#installation)
- [Testing](https://github.com/kathyn138/JobBox#testing)
- [Technologies](https://github.com/kathyn138/JobBox#technologies)
- [Component Hierarchy](https://github.com/kathyn138/JobBox#component-hierarchy)
- [Future Implementation](https://github.com/kathyn138/JobBox#future-implementation)

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

## Testing 

Front end unit tests are written with Enzyme. Run the tests with the following commands: 

```
cd frontend
npm test
```

## Technologies
- React
- Create-React-App
- React Router
- Axios
- HTML/CSS
- Bootstrap
- Node/Express
- PostgreSQL
- Enzyme
- Bcrypt
- JSONSchema


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

## Future Implementation
- Display message on front end for wrong user credentials 
- Add visual indication for current page user is on 
- Back end testing 