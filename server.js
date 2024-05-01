import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import CORS middleware

const app = express();
// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Sample user data (replace with your database)
const users = [
    { id: 1, username: 'admin', password: 'admin123' },
    { id: 2, username: 'user', password: 'user123' }
];
let users1 = [
    { id: 1, username: 'admin', email: 'admin@example.com', password: 'admin123' },
    { id: 2, username: 'user', email: 'user@example.com', password: 'user123' }
];
// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Find user by username
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }


    // Check password
    if (user.password !== password) {
        console.log('Password: ' + user.password);
        console.log('username: ' + user.username);
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Successful login
    res.status(200).json({ message: 'Login successful', userExists:true , user });
});
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    // Check if the username or email already exists
    const existingUser = users.find(user1 => user1.username === username || user1.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists' });
    }
    // Add the new user to the users array
    const newUser = { id: users1.length + 1, username, email, password };
    users1.push(newUser);
    res.status(201).json({ message: 'Signup successful', user: newUser });
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
