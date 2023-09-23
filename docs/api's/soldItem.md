# POST  /api/soldItem/add

Example: localhost:3000/api/solditems/add
```json
{
  "name": "Iphone 12",
  "credit": 100,
  "userId": "650234dfae5ea437c88813b4",
  "Ewaste": ":id",
  "model": "Iphone 12",
}
```ß

OUTPUT:
```json
{
  "_id": "650cd1284161f16a983a5a75",
  "name": "Iphone 12",
  "credit": 100,
  "userId": "650234dfae5ea437c88813b4",
  "soldOn": "2023-09-21T23:26:32.816Z",
  "Ewaste": ":id",
  "model": "Iphone 12",
  "__v": 0
}
```

# Get /api/soldItem/:id

Example: localhost:3000/api/solditems/650234dfae5ea437c88813b4

Input: none

OUTPUT:
```json
[
  {
    "_id": "650cd1284161f16a983a5a75",
    "name": "Iphone 12",
    "credit": 100,
    "userId": "650234dfae5ea437c88813b4",
    "soldOn": "2023-09-21T23:26:32.816Z",
    "__v": 0
  }
]
```