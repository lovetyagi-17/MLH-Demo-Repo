# MLH-Demo-Repo
An project have UI &amp; API in MEAN-Stack. The app have feature of authentication & once user will logout the cookie will destroy automatically. The schema of user, products & cart is well designed & the cart will only once at the time of user-first time-login in to app along with that multiple product will add into cart in array format.
## Features

- [x] user-registraion
- [x] user-login
- [x] all-product-view
- [x] single products details
- [x] add to cart
- [x] clear-cart



<h4 align="center">A desktop app based on "MEAN-Stack" </a>.</h4>

## Post-Installation
- You must have node in your system. 
- You must have angular in your system.
- You must have mongo in your system.

### For developers
Clone the source locally: 

```sh
$ git clone https://github.com/lovetyagi-17/MLH-Demo-Repo.git
$ cd MLH-Demo-Repo
```

### STEP-1 - Install API project dependencies:

```sh
$ $ cd api
```

```sh
$ npm install
```
Start the app:

```sh
$ nodemon app.js  
```
### STEP-2 - Install UI project dependencies:

```sh
$  cd ui
```
```sh
$ npm install
```
Start the app:

```sh
$ ng serve --poll 2000
```
### STEP-3 - mongo setup

Open up the terminal:

```sh
$ sudo mongod
$ mongo
```


