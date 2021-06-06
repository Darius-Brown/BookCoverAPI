import React from "react";
import "./styles.css";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyAPhGOrnFvJb8JfYysnrGrAH9wYppYy-V4"
  );

  function handleChange(event) {
    const book = event.target.value;

    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(book);
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control mt-10"
            placeholder="Set your favorite book cover as profile image"
            autoComplete="off"
          ></input>
        </div>
        <button type="submit" className="btn-danger">
          Search
        </button>
      </form>

      {result.map((book) => (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
      ))}
    </div>
  );
}
