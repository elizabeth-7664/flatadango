document.addEventListener("DOMContentLoaded", () => {
    fetchMoviesList();
  });
  
  let movies = [
    {
      id: "1",
      title: "The Avengers",
      poster: "./Avengers.png",
      description: "A group of superheroes save the world.",
      runtime: 143,
      showtime: "7:00 PM",
      capacity: 50,
      tickets_sold: 36
    },
    {
      id: "2",
      title: "Black Panther",
      poster: "./BlackPanther.png",
      description: "The king of Wakanda fights for his people.",
      runtime: 134,
      showtime: "9:00 PM",
      capacity: 60,
      tickets_sold: 21
    }
  ];
  
  function fetchMoviesList() {
    const movieList = document.getElementById("films");
    movieList.innerHTML = "";
  
    movies.forEach(movie => {
      const li = document.createElement("li");
      li.textContent = movie.title;
      li.classList.add('film', 'item');
      li.addEventListener("click", () => displayMovieDetails(movie));
      movieList.appendChild(li);
    });
  
    if (movies.length > 0) {
      displayMovieDetails(movies[0]);
    }
  }
  
  function displayMovieDetails(movie) {
    document.getElementById("movie-title").textContent = movie.title;
    document.getElementById("movie-poster").src = movie.poster;
    document.getElementById("movie-description").textContent = movie.description;
    document.getElementById("runtime").textContent = `${movie.runtime} mins`;
    document.getElementById("showtime").textContent = movie.showtime;
  
    const availableTickets = movie.capacity - movie.tickets_sold;
    document.getElementById("tickets").textContent = availableTickets > 0 ? availableTickets : "Sold Out";
  
    const button = document.getElementById("buy-ticket");
    button.textContent = availableTickets === 0 ? "Sold Out" : "Buy Ticket";
    button.disabled = availableTickets === 0;
  
    button.onclick = () => buyTicket(movie);
  }
  
  function buyTicket(movie) {
    if (movie.capacity - movie.tickets_sold > 0) {
      movie.tickets_sold++;
      displayMovieDetails(movie);
    }
  } 
  