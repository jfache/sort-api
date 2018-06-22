# Sort API

## How to run

### `npm install && npm start`

Runs the server.
Open [http://localhost:4001/apidocs](http://localhost:4001/apidocs) to view the Swagger definitions of the API.

## Available endpoints

### POST /bubbleSort

This endpoint will take in an array of numbers and rearrange them using the bubble sort algorithm.

### POST /mergeSort

This endpoint will take in an array of numbers and rearrange them using the merge sort algorithm.

Both endpoints take only one parameter: an array of numbers called `unsortedNumbers`.
