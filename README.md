# Signup MERN Rest Api

## Backend deployed link

https://signup-mern-restapi.herokuapp.com/

### Admin Credentials

```
email: admin@gmail.com
password: Ab12#$
```

## Routes for User

### to register a new user

- user/register : post

```
{
    name:
    email:
    userType:
    affiliateId:
}
```

### to create a user password

- user/create-password : post

```
{
    email:
    password:
}
```

### to login an existing user

- user/login :post

```
{
    email:
    password:
}
```

## Routes for affiliates

### to add a new affiliate

- affiliate/add :post

```
{
    name:
}
```

### to get all affiliates

- affiliate/get-all :get

### to get a specific affiliate

- affiliate/get :get

```
{
    affiliateId:
}
```
