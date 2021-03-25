package com.example.demo.controller;

import com.example.demo.model.Booking;
import com.example.demo.model.Movie;
import com.example.demo.model.User;
import com.example.demo.repository.BookingRepository;
import com.example.demo.repository.MovieRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Book;
import java.util.List;
import java.util.Optional;

@org.springframework.web.bind.annotation.RestController
public class RestController {
    private final MovieRepository movieRepository;
    private final UserRepository userRepository;
    private final BookingRepository bookingRepository;
    //Klassen her er tiltænkt at være vores RestController. Altså indeholde de metoder der skal returnere et html svar og laves om til JSON


    public RestController(MovieRepository movieRepository, UserRepository userRepository, BookingRepository bookingRepository) {
        this.movieRepository = movieRepository;
        this.userRepository = userRepository;
        this.bookingRepository = bookingRepository;
    }

    @GetMapping("/getAllMovies")
    public List<Movie> findAllMovies() {
        List<Movie> movies = movieRepository.findAll();
        return movies;
    }

    @PostMapping(value = "/createUser", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }


    @GetMapping("/getUsername/{username}")
    public List<User> getUsername(@PathVariable String username) {
        return userRepository.findByUsername(username);
    }

    @PostMapping(value = "/createMovie", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public Movie createMovie(@RequestBody Movie movie) {
        return movieRepository.save(movie);
    }

    @GetMapping("/getMovie/{id}")
    public ResponseEntity<Movie> getBookingMovie(@PathVariable Long id) {
        Optional<Movie> movie = movieRepository.findById(id);
        if (movie.isPresent()) {
            Movie realMovie = movie.get();
            return new ResponseEntity<>(realMovie, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(value = "/updateBookedMovies", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public User updateBookedMovies(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/getUserById/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            User realUser = user.get();
            return new ResponseEntity<>(realUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

    }

    @RequestMapping(value = "/deleteMovie/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteMovie(@PathVariable Long id){
        movieRepository.deleteById(id);
        return "Movie deleted successfully";
    }

    @GetMapping("/bookings/{userid}")
    public List<Booking> getByUserid(@PathVariable Integer userid) {
        return bookingRepository.findByUserid(userid);
    }


    @RequestMapping(value = "/deleteBooking/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteBooking(@PathVariable Long id){
        bookingRepository.deleteById(id);
        return "Movie deleted successfully";
    }

    @PostMapping(value = "/newBooking", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public Booking newBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    @GetMapping("/getAllBookings")
    public List<Booking> getAllBookings() {
        List<Booking> bookings = bookingRepository.findAll();
        return bookings;
    }



}
