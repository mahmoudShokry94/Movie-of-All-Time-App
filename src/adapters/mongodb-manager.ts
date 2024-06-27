import mongoose from 'mongoose';

const moviesDBMongoBinding =
    process.env.MONGO_URL ??
    'mongodb://localhost:27017/movies';

let _moviesDB: mongoose.Connection;

export const initDB = async function initDB(callback: {
    (err: unknown): void;
    (arg0: null, arg1: mongoose.Connection): void;
}) {
    try {
        console.log('Intializing Movies DB Connection');

        _moviesDB = await mongoose
            .createConnection(moviesDBMongoBinding)
            .asPromise();


        console.log('Movies DB Connection Intialized Successfully');

        console.log('Calling initDB Callback');
        return callback(null);
    } catch (err) {
        console.log('Error when Intializing DB Connection');

        console.log('Calling Callback................ in catch block');
        callback(err);
    }
};

export const getMoviesDb = function getDb() {
    return _moviesDB;
};
