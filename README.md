Synergia Event Booking API

This is a simple RESTful API for managing event bookings for the Synergia technical event. It allows users to view events, register for events, update participant information, view specific bookings, and cancel bookings. Data is stored temporarily in-memory using JavaScript arrays, with no database dependencies.

Features
1.View all available events
2.Create new events
3.Update events by title
4.Delete events by title
5.View all bookings
6.Register participants for an event
7.View a booking by ID
8.Update participant details for bookings
9.Cancel bookings by ID

Technologies Used
Node.js
Express.js

API Endpoints
Events :
Method	Endpoint	       Description
GET	    /events	         Get all events
POST	  /events	         Create a new event
PUT	    /events/:title	 Update event details by title
DELETE	/events/:title	 Delete event by title
Bookings :
Method	Endpoint	          Description
GET	    /bookings	          Get all bookings
POST	  /bookings	          Create a new booking
GET	    /bookings/:id	      Get booking details by ID
PUT	    /bookings/:id	      Update booking by ID
DELETE	/bookings/:id	      Cancel booking by ID

Example Request Body for Booking Creation
json
{
  "eventTitle": "Variety",
  "participantName": "Harshitha",
  "participantEmail": "h@gmail.com",
  "participantPhone": "9856704321"
}

Running the Project
1.Clone the repository
2.Install dependencies
  npm install express
3.Start the server
  node Event.js
4.The server will run on http://localhost:3000.
