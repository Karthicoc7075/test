const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const http = require('http');
const socketIo = require('socket.io');
const { instrument } = require("@socket.io/admin-ui");
const appConfig = require('./config/appConfig');
const mongodbConfig = require('./config/mongodbConfig');
const connectToDatabase = require('./services/mongodb/mongodbservice');
const authRoutes = require('./routes/auth_route');
const postRoutes = require('./routes/post_route');
const userRoutes = require('./routes/user_route');
const errorHandler = require('./middleware/errorHandler');
const configureSocket = require('./socket');


const port =  appConfig.PORT|| 8000;
const mongodbUrl = mongodbConfig.url;

const server = http.createServer(app);

configureSocket(server);

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

app.use('/api/v2/auth', authRoutes);
app.use('/api/v2/post', postRoutes);
app.use('/api/v2/user', userRoutes);

app.use(errorHandler)


app.get('/', (req, res) => {    
    res.send('Welcome to the API');
}   );




async function startServer() {
    try {
        await connectToDatabase(mongodbUrl);   
        server.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        
        console.error('Error connecting to database:', error);
        process.exit(1);
    }
}

startServer();


