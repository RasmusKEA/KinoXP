package com.example.demo.controller;

import com.example.demo.model.Movie;
import com.example.demo.model.User;
import com.example.demo.repository.MovieRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@org.springframework.web.bind.annotation.RestController
public class RestController {
    private final MovieRepository movieRepository;
    private final UserRepository userRepository;
    //Klassen her er tiltænkt at være vores RestController. Altså indeholde de metoder der skal returnere et html svar og laves om til JSON


    public RestController(MovieRepository movieRepository, UserRepository userRepository) {
        this.movieRepository = movieRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/getAllMovies")
    public List<Movie> findAllMovies(){
        List<Movie> movies = movieRepository.findAll();
        return movies;
    }

    @PostMapping(value = "/createUser", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user){
        return userRepository.save(user);
    }


    @GetMapping("/getUsername/{username}")
    public List<User> getUsername(@PathVariable String username){
        return userRepository.findByUsername(username);
    }

    @PostMapping(value = "/createMovie", consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public Movie createMovie(@RequestBody Movie movie){
        return movieRepository.save(movie);
    }

    @GetMapping("/getMovie/{id}")
    public ResponseEntity<Movie> getBookingMovie(@PathVariable Long id){
        Optional<Movie> movie = movieRepository.findById(id);
        if(movie.isPresent()){
            Movie realMovie = movie.get();
            return new ResponseEntity<>(realMovie, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }


    }
}
