# Role Based User Authentication

## Table of Contents

-   [About](#about)
-   [Getting Started](#getting_started)
-   [Usage](#usage)

## About <a name = "about"></a>

Minimal Project to get started with NodeJS JWT based authentication

## Getting Started <a name = "getting_started"></a>

### Prerequisites

-   nodejs, npm
-   expressjs
-   bcryptjs
-   cookie-parser
-   @hapi/joi
-   jsonwebtoken
-   mongoose
-   cors
-   dotenv
-   nodemon

```
npm install expressjs bcryptjs cookie-parser @hapi/joi jsonwebtoken mongoose cors dotenv

npm install -g nodemon
```

### Installing

1. Clone this repository
2. Install required packages
3. Configure .env file

## **Usage <a name = "usage"></a>**

### Public Routes

_Register User_

```
POST - localhost:3000/user/register
data {
  username
  emailid
  password
  role
}
```

Roles are of 3 types

1. Local
2. Supervisor
3. Admin

_Login_

```
POST - localhost:3000/user/login
data {
  emailid
  password
}
```

_Logout_

```
GET - localhost:3000/user/logout
```

### Local Routes

_Getuserdetail_

```
GET - localhost:3000/details/userdetail
```

returns :
{username} is logged in

### Admin Routes

_GetAll_

```
GET - localhost:3000/details/all
```

returns :
list of all users
