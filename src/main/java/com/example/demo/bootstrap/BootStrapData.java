package com.example.demo.bootstrap;

import com.example.demo.model.Booking;
import com.example.demo.model.Movie;
import com.example.demo.model.User;
import com.example.demo.repository.BookingRepository;
import com.example.demo.repository.MovieRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.awt.print.Book;

@Component
public class BootStrapData implements CommandLineRunner {
    private final MovieRepository movieRepository;
    private final UserRepository userRepository;
    private final BookingRepository bookingRepository;


    public BootStrapData(MovieRepository movieRepository, UserRepository userRepository, BookingRepository bookingRepository) {
        this.userRepository = userRepository;
        this.movieRepository = movieRepository;
        this.bookingRepository =bookingRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        User user = new User();
        user.setFirstname("R");
        user.setLastname("T");
        user.setUsername("rtbio");
        user.setPassword("kode");
        user.setBookedMovies("2, 1, 3");
        userRepository.save(user);

        Booking booking = new Booking();
        booking.setUserid(1);
        booking.setMovieid(1);
        booking.setDate("2021-03-25");
        booking.setMovieHall("Small hall");
        booking.setMovieTitle("Rejsen til Saturn");
        booking.setMovieTimeslot("14-16");

        Booking booking1 = new Booking();
        booking1.setUserid(1);
        booking1.setMovieid(2);
        booking1.setDate("2021-03-25");
        booking1.setMovieHall("Large hall");
        booking1.setMovieTitle("Kong vs Godzilla");
        booking1.setMovieTimeslot("22-24");


        Booking booking2 = new Booking();
        booking2.setUserid(1);
        booking2.setMovieid(3);
        booking2.setDate("2021-03-25");
        booking2.setMovieHall("Small hall");
        booking2.setMovieTitle("Terkel i Knibe");
        booking2.setMovieTimeslot("20-22");

        bookingRepository.save(booking2);
        bookingRepository.save(booking1);
        bookingRepository.save(booking);



        Movie movie = new Movie();
        movie.setMovieTitle("Rejsen til Saturn");
        movie.setGenre("Komedie");
        movie.setReleaseYear(2006);
        movie.setImage("https://m.media-amazon.com/images/M/MV5BNDQ2NjIzNDMtMGZjOS00ZGIwLThiYTktM2JiN2E4MTIyZTdhXkEyXkFqcGdeQXVyNjY0ODg0MTA@._V1_.jpg");
        movie.setHall("Small hall");
        movie.setTimeslot("14-16");


        Movie movie1 = new Movie();
        movie1.setMovieTitle("Godzilla vs Kong");
        movie1.setGenre("Dokumentar");
        movie1.setReleaseYear(2006);
        movie1.setImage("https://upload.wikimedia.org/wikipedia/en/6/63/Godzilla_vs._Kong.png");
        movie1.setHall("Large hall");
        movie1.setTimeslot("22-24");


        Movie movie2 = new Movie();
        movie2.setMovieTitle("Terkel i Knibe");
        movie2.setGenre("Komedie");
        movie2.setReleaseYear(2006);
        movie2.setImage("https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/84/396/EG-273_po-reg-medium_orig-1576227034165.jpg");
        movie2.setHall("Small hall");
        movie2.setTimeslot("20-22");

        movieRepository.save(movie);
        movieRepository.save(movie1);
        movieRepository.save(movie2);
    }
}
