# Airline Seats

## A sample web application that allows users to select seats on a flight.

This app was written with HTML, CSS, JavaScript, JSX, and React.

## To run the application:
1. Clone this repository to your local machine.
2. Navigate to the root directory (airline-seats) in your terminal and run the command "npm install" to install required Node modules. Ensure you have Node and NPM installed.
3. Run the command "yarn start" and the application will automatically run in a new browser window.

## Developer notes:
I imported the seating information from seats.json and sorted the seats by row and cabin class. I then broke up the app into several components:
1. Aircraft, which represents the entire plane and contains all of the cabins
2. Cabin, which represents each cabin class and contains the seats
3. Seat, which represents each individual seat

Given more time, I would denote each cabin class by a different background color. I would also make the app responsive to different screen sizes.
