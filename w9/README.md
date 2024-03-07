# localStorage

## my understanding
localStorage is a web storage feature in web browsers that allows websites to store key-value pairs locally on a user's device. This storage is persistent across browser sessions and even when the browser is closed and reopened
- localStorage is essentially a key-value store, where data is stored as pairs of keys and corresponding values.
- The values stored in localStorage are always converted to strings
- Unlike cookies, localStorage data does not have an expiration date. It will persist until explicitly removed by the user or cleared programmatically.
- It's essential to be cautious about storing sensitive information in localStorage

## How to use?
- using 'setItem' to set value to localStorage
- using 'getItem' to get value from localStorage
- using 'removeItem' to remove value from localStorage
- using 'clear' to swipe all stored data

## Pros and Cons
- Pros:
  - Data stored in localStorage persists even when the user closes and reopens the browser or navigates away from the page
  - Large storage capacity
  - Reduces the need to repeatedly fetch the same data from the server, improving performance and reducing server load
- Cons:
  - Cannot store complex data, have to convert into string key-value pairs
  - While data stored in localStorage is secure against cross-origin requests, it is accessible by JavaScript on the same domain
  - No expiry