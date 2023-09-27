# Simple Read Me for Express.js and MongoDB Code

This simple Express.js application demonstrates basic MongoDB interactions, including reading data from a MongoDB database. Below, you'll find an overview of the code and its functionality.

## Prerequisites

Before running this code, make sure you have the following set up:

-   Node.js installed on your system.
-   A MongoDB instance running and accessible.
-   MongoDB connection details (URI) stored in a `.env` file, as this code uses the "dotenv" library for configuration.

## Installation

1. Clone this repository or download the code to your local machine.

2. Navigate to the project directory in your terminal.

3. Install the required dependencies using the following command:

4. Create a `.env` file in the project root directory and add your MongoDB URI in the following format:

## Running the Application

To start the application, run the following command:

This will start the Express.js server on the specified port (default is 3000) and connect to the MongoDB database using the provided URI.

## Usage

### 1. Home Page

-   Access the home page by opening a web browser and navigating to `http://localhost:3000/`.

### 2. Read All Data

-   Access the "Read All" page by clicking the "Read All" link on the home page.
-   This route connects to the MongoDB database, retrieves data from the "listingsAndReviews" collection, and logs it to the console.

### 3. Read One Data

-   Access the "Read One" page by clicking the "Read One" link on the home page.
-   This route connects to the MongoDB database, finds and retrieves a document from the "listingsAndReviews" collection with the name "Ribeira Charming Duplex," and sends it as a response.

### 4. Create One Data

-   To add a new listing to the database, you can use an HTTP POST request to the "/createOne" endpoint. You may use tools like Postman or cURL for this.
-   The code in this route connects to the MongoDB database, inserts a new document into the "listingsAndReviews" collection, and responds with a message indicating whether the operation was successful.

## Important Notes

-   Proper error handling is implemented to catch any exceptions during MongoDB interactions.
-   After each operation (read or write), the MongoDB client connection is closed in the `finally` block to ensure a clean exit.

Please ensure that you have set up MongoDB and provided the correct URI in the `.env` file before running this code. Additionally, be cautious when adding or modifying data using the "Create One Data" route, as it does not include validation or input sanitation in this simple example.
