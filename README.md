# Sort API

## How to run

### `npm install && npm start`

Runs the server.
Open [http://localhost:4001/apidocs](http://localhost:4001/apidocs) to view the Swagger definitions of the API.

## Available endpoints

Both endpoints consume and produce JSON payloads. Make sure to set your `Content-Type` header to `application/json`.

They also both share the same payload:

```
{
	"unsortedNumbers": [1, 4, 6, 2, 3]
}
```

where `[1, 4, 6, 2, 3]` is the array of numbers to sort.

### POST /bubbleSort

This endpoint will take in an array of numbers and rearrange them using the bubble sort algorithm.

### POST /mergeSort

This endpoint will take in an array of numbers and rearrange them using the merge sort algorithm.

## Time and space complexity

### Bubble Sort

The current implementation of bubble sort has a time complexity of O(n^2) and a space complexity of O(1).

Performance will decrease as the size of the array of unsorted numbers increases.

### Merge Sort

The current implementation of merge sort has a time complexity of O(n log(n)) and a space complexity of O(n).
