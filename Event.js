const express = require('express');
const app = express();
app.use(express.json());

let bookings = [];
let bookingIdCounter = bookings.length + 1;

let events = [
    {
        title: "Treasure Hunt",
        desc: "Treasure hunt game for 3 hrs",
        image: "",
        capacity: 100,
        date: new Date("2025-11-06")
    },
    {
        title: "Aerophilia",
        desc: "A competition",
        image: "",
        capacity: 50,
        date: new Date("2025-11-08")
    },
    {
        title: "Devhack",
        desc: "A Hackathon",
        image: "",
        capacity: 200,
        date: new Date("2025-11-06")
    },
    {
        title: "Variety",
        desc: "Cultural performance",
        image: "",
        capacity: 30,
        date: new Date("2025-11-01")
    }
];

let eventIndex = events.findIndex((event)=>event.title=='Devhack')
events[eventIndex] = {
    title : "Sahyadri Devhack",
    'desc' : "A Hackathon",
    'image' :" ",
    'capacity' : 200,
    'date' : new Date('06-11-2025')
}

console.log(events)


// GET: Return all events
app.get('/events', (req, res) => {
    res.json(events);
});

// POST: Add a new event
app.post('/events', (req, res) => {
    const event = req.body;
    event.date = new Date(event.date); 
    events.push(event);
    res.status(201).json({ message: "Event created!", event });
});

// Update event by title
app.put('/events/:title', (req, res) => {
    const title = req.params.title;
    const index = events.findIndex(event => event.title === title);

    if (index !== -1) {
        events[index] = req.body;  
        events[index].date = new Date(events[index].date);
        res.send({ message: "Event updated successfully", event: events[index] });
    } else {
        res.status(404).send({ message: "Event not found" });
    }
});

// Delete event by title
app.delete('/events/:title', (req, res) => {
    const title = req.params.title;
    const index = events.findIndex(event => event.title === title);

    if (index !== -1) {
        events.splice(index, 1);  
        res.send({ message: "Event deleted successfully" });
    } else {
        res.status(404).send({ message: "Event not found" });
    }
});

app.listen(3000, () => {
    console.log("server started!!");
});


// GET all bookings
app.get('/bookings', (req, res) => {
    res.json(bookings);
});

// POST create a new booking
app.post('/bookings', (req, res) => {
    const { eventTitle, participantName, participantEmail, participantPhone } = req.body;

    // Validate event exists
    const event = events.find(e => e.title === eventTitle);
    if (!event) {
        return res.status(404).json({ message: "Event not found" });
    }

    // Count existing bookings for the event
    const bookedCount = bookings.filter(b => b.eventTitle === eventTitle).length;

    if (bookedCount >= event.capacity) {
        return res.status(400).json({ message: "Event is fully booked" });
    }

    const booking = {
        id: bookingIdCounter++,
        eventTitle,
        participantName,
        participantEmail,
        participantPhone,
    };

    bookings.push(booking);
    res.status(201).json({ message: "Booking successful", booking });
});

// GET booking by id
app.get('/bookings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const booking = bookings.find(b => b.id === id);
    if (booking) {
        res.json(booking);
    } else {
        res.status(404).json({ message: "Booking not found" });
    }
});

// PUT update participant details on booking
app.put('/bookings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = bookings.findIndex(b => b.id === id);
    if (index !== -1) {
        bookings[index] = { ...bookings[index], ...req.body };
        res.json({ message: "Booking updated", booking: bookings[index] });
    } else {
        res.status(404).json({ message: "Booking not found" });
    }
});

// DELETE cancel a booking by id
app.delete('/bookings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = bookings.findIndex(b => b.id === id);
    if (index !== -1) {
        bookings.splice(index, 1);
        res.json({ message: "Booking canceled" });
    } else {
        res.status(404).json({ message: "Booking not found" });
    }
});

app.listen(3000, () => {
    console.log("server started!!");
});


