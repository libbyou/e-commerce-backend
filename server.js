const express = require('express');
const routes = require('./routes');
// import sequelize connection
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://i4mdsdg4at5sdvt2:wbg0r5cn25cyb9s8@eyvqcfxf5reja3nv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/cvd6k2vjnp5om40d')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// app.listen(PORT, async () => {
//   console.log(`App listening on port ${PORT}!`);
//   try{
//     await sequelize.authenticate();
//   }catch(error){
//     console.log('having error')
//   }

//   sequelize.sync({force: false});
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});