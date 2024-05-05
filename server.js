import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    // Extract form data from the request body
    const { name, email, phone, idcard, selectedTimes } = req.body;

    // Log all the received data, including selected days and their times
    console.log('Received form data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('ID Card:', idcard);
    console.log('Selected Times:');
      Object.keys(selectedTimes).forEach(day => {
        console.log(`${day}:`);
        selectedTimes[day].forEach(time => {
            console.log(`Start: ${time.start}, End: ${time.end}`);
        });
    });
    // selectedTimes.forEach(({ day, times }) => {
    //     console.log('Day:', day);
    //     console.log('Times:');
    //     times.forEach(({ start, end }) => {
    //         console.log('Start:', start);
    //         console.log('End:', end);
    //     });
    // });

    // Here you can process the form data as needed (e.g., store in a database)

    // Send a response back to the client
    res.status(200).json({ message: 'Form submitted successfully!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
