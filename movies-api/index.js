import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import  genresRouter  from './api/genres';
import './db'
import usersRouter from './api/users';
import './seedData'
import session from 'express-session';
import passport from './authenticate';


dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error ๐๐. Here's the details: ${err.stack} `);
};



const app = express();

const port = process.env.PORT;

app.use(express.json());

//session middleware
app.use(passport.initialize());


// Add passport.authenticate(..)  to middleware stack for protected routesโ
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);


app.use('/api/genres', genresRouter);

//Users router
app.use('/api/users', usersRouter);

app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

