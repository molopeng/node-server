const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Sample data arrays
let movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  { id: 2, title: 'The Matrix', director: 'The Wachowskis', year: 1999 }
];

let series = [
  { id: 1, title: 'Stranger Things', seasons: 4, genre: 'Sci-Fi' },
  { id: 2, title: 'Breaking Bad', seasons: 5, genre: 'Crime Drama' }
];

let songs = [
  { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', year: 2019 },
  { id: 2, title: 'Shape of You', artist: 'Ed Sheeran', year: 2017 }
];

// Utility function to update item by id
function updateItem(array, id, newData) {
  const index = array.findIndex(item => item.id === id);
  if (index !== -1) {
    array[index] = { ...array[index], ...newData };
  }
  return array;
}

// Movies
app.get('/movies', (req, res) => res.json(movies));
app.post('/movies', (req, res) => {
  const newMovie = { id: Date.now(), ...req.body };
  movies.push(newMovie);
  res.json(movies);
});
app.put('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(updateItem(movies, id, req.body));
});
app.delete('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  movies = movies.filter(m => m.id !== id);
  res.json(movies);
});

// Series
app.get('/series', (req, res) => res.json(series));
app.post('/series', (req, res) => {
  const newSeries = { id: Date.now(), ...req.body };
  series.push(newSeries);
  res.json(series);
});
app.put('/series/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(updateItem(series, id, req.body));
});
app.delete('/series/:id', (req, res) => {
  const id = parseInt(req.params.id);
  series = series.filter(s => s.id !== id);
  res.json(series);
});

// Songs
app.get('/songs', (req, res) => res.json(songs));
app.post('/songs', (req, res) => {
  const newSong = { id: Date.now(), ...req.body };
  songs.push(newSong);
  res.json(songs);
});
app.put('/songs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(updateItem(songs, id, req.body));
});
app.delete('/songs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  songs = songs.filter(song => song.id !== id);
  res.json(songs);
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
