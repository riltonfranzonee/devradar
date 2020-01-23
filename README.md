# DevRadar


## API installation

Clone this repository;

Enter the folder running `cd backend`;

run `yarn` or `npm install` to install the dependencies;

Create a connection in `mongodb` and paste your connection string on `index.js` file;

#### `Example`

```
mongoose.connect(
  'mongodb+srv://username:yourpassword@cluster0-u3b1b.mongodb.net/databasename?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
```

8. run `yarn dev` to start the server.

## Front end web

Enter the folder running `cd web`;

run `yarn` or `npm install` to install the dependencies;

now you should run `yarn start` or `npm start`

## Front end mobile

You need install expo in your machine 

run `yarn global add expo-cli` or `npm install expo-cli --global`

#### obs ( when use yarn installation ):
To use the installed packages, the install location has to be added to the PATH environment variable of your shell. For bash for example, you can add this line at the end of your .bashrc:
```
export PATH="$(yarn global bin):$PATH"
```

Enter the folder running `cd mobile`;

run `yarn` or `npm install` to install the dependencies;

now you should run `yarn start` or `npm start`
