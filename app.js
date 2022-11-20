const express=require('express');
const app=express();
const cors=require('cors');
const sequelize=require('./util/db.js')
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
dotenv.config();

app.use(cors());
app.use(bodyParser.json())

const LoginRoutes=require('./Routes/LoginRoutes');
const signupRoutes=require('./Routes/SignupRoutes');
const movieRoutes=require('./Routes/movieRoutes');
const reviewRoutes=require('./Routes/reviewRoutes');
const actorRoutes=require('./Routes/actorRoutes');

app.use(LoginRoutes);
app.use(signupRoutes);
app.use(movieRoutes);
app.use(reviewRoutes);
app.use(actorRoutes);

const MOVIE=require('./models/movies');
const ACTOR=require('./models/actors');
const REVIEW=require('./models/reviews');


MOVIE.hasMany(ACTOR);
ACTOR.belongsTo(MOVIE);

MOVIE.hasMany(REVIEW);
REVIEW.belongsTo(MOVIE);

//{force:true}
sequelize.sync();



app.listen(4000)