## MERN APP deployment steps on Vercel: 

1. sign in to vercel > configure github > import git repository

2. go to server files > add verce.json and update server git repo

 ```json
 {
    "version":2,
     "builds": [
         { 
         "src":"*.js",
         "use":"@vercel/node"
         }
    ],

    "routes" : [
        {
            "src":"/(.*)",
            "dest":"/"
        }
      ]
    }
```

3. * go to vercel and choose git repo (server),
   *  put all the .env values (if required) >>
   * press Deploy! 
 after successfully deployment, copy the URL(example: https://auth-skeleton-api.vercel.app
 )  

4. * go to client side (React app) 
   * open app.jsx code and update your cors origin with the server-side vercel api (copied URL ) like this 
```js 
//cors policy setup
axios.defaults.baseURL='https://auth-skeleton-api.vercel.app';
axios.defaults.withCredentials = true;
```
5. Also add verce.json file to the root directory of your React App to fix react router reload issue 

```js
{
  "rewrites":  [
    {"source": "/(.*)", "destination": "/"}
  ]
}
```
6. Now go to server side code and make cors origin : " ",
```js
router.use(
    cors({
        credentials: true,
        origin: " ",
    })
)
```
7. deploy your React APP and it will be successfully deoployed 

8. go to your server again and update the cors origin with deployed react-app URL

```js
router.use(
    cors({
        credentials: true,
        origin: "https://auth-skeleton-frontend.vercel.app",
    })
)
```

BOOM!!! You are done with the vercel deployment!