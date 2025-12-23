# Date & Time

In JavaScript, we use the `Date` object to work with dates and times. It helps us get the current date, create specific dates, and format them easily.

- In javaScript date calculate in milliseconds.
- Date are picked from system date.

## Creating Dates

| Method       | Description                                                                                                                                         |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `new Date()` | Creates a new date object with the **current** date and time.                                                                                       |
| `Date.now()` | Returns the current timestamp (milliseconds since Jan 1, 1970). just like (1671672000000)                                                           |
| `new Date()` | Creates a specific date (Note: Month starts from 0) which return date object just like (Tue Dec 23 2025 22:57:13 GMT+0500 (Pakistan Standard Time)) |

```js
const now = new Date();
console.log(now); 
// Tue Dec 23 2025 22:57:13 GMT+0500 (Pakistan Standard Time) 
```

- In both browser and node console show date in local time and it is object.
- Browser console show date in local time.
- Node console show date in UTC time `2025-12-23T17:59:02.944Z`

## Getting Date Information

Once we have a date object, we can pull out specific parts like the year, month, or day.

| Method              | Returns               | Example (for 2025-12-21) |
| :------------------ | :-------------------- | :----------------------- |
| `getFullYear()`     | Year                  | `2025`                   |
| `getMonth()`        | Month (0-11)          | `11` (December)          |
| `getDate()`         | Day of the month      | `21`                     |
| `getDay()`          | Day of the week (0-6) | `0` (Sunday)             |
| `getHours()`        | Hour (0-23)           | `14` (2 PM)              |
| `getMinutes()`      | Minutes               | `30`                     |
| `getSeconds()`      | Seconds               | `45`                     |
| `getMilliseconds()` | Milliseconds          | `123`                    |

## Formatting Dates

We can convert dates into readable strings using these methods.

| Method                 | Description                | Output Example             |
| :--------------------- | :------------------------- | :------------------------- |
| `toDateString()`       | Readable date only         | `"Sun Dec 21 2025"`        |
| `toTimeString()`       | Time with time zone        | `"14:30:00 GMT+0500..."`   |
| `toLocaleDateString()` | Date based on local format | `"12/21/2025"`             |
| `toLocaleTimeString()` | Time based on local format | `"2:30:00 PM"`             |
| `toLocaleString()`     | Full date & time locally   | `"12/21/2025, 2:30:00 PM"` |

---

For more details, visit: [MDN Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
