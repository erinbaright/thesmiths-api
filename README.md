<div align="center">

# The Smiths API

</div>

### About

REST API of The Smiths' discography with full CRUD functionality.

### Model

Raw data on the albums is located in the albums.json file in the seed folder.

A GET request at https://localhost:3000/albums would display all of the Smiths' albums. The model for the albums:

```
let Album = new Schema({
  title: { type: String },
  yearRecorded: { type: String },
  releaseDate: { type: String },
  releaseYear: { type: Number },
  lengthSeconds: { type: Number },
  lengthMinutes: { type: String },
  genre: { type: String },
  albumType: { type: String },
  label: { type: String },
  ukChartPosition: { type: Number },
  ukGold: { type: Boolean },
  ukPlatinum: { type: Boolean },
  usGold: { type: Boolean },
  songs: [{type: String}],
  review: { type: String },
  img: { type: String },
  spotifyLink: { type: String },
  appleMusicLink: { type: String }
});
```

### Skills & Frameworks Used:

- MongoDB, Mongoose, Express.js
- JSON, JavaScript, Node.js
- Data Modeling and Schemas
- Routing, Postman, Railway, CRUD, Controller Logic
