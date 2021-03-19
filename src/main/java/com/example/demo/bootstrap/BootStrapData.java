package com.example.demo.bootstrap;

import com.example.demo.model.Movie;
import com.example.demo.repository.MovieRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BootStrapData implements CommandLineRunner {
    private final MovieRepository movieRepository;

    public BootStrapData(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Movie movie = new Movie();
        movie.setMovieTitle("Rejsen til Saturn");
        movie.setGenre("Komedie");
        movie.setReleaseYear(2006);
        movie.setImage("https://m.media-amazon.com/images/M/MV5BNDQ2NjIzNDMtMGZjOS00ZGIwLThiYTktM2JiN2E4MTIyZTdhXkEyXkFqcGdeQXVyNjY0ODg0MTA@._V1_.jpg");
        movie.setHall("Small hall");


        Movie movie1 = new Movie();
        movie1.setMovieTitle("Godzilla vs Kong");
        movie1.setGenre("Dokumentar");
        movie1.setReleaseYear(2006);
        movie1.setImage("https://upload.wikimedia.org/wikipedia/en/6/63/Godzilla_vs._Kong.png");
        movie1.setHall("Large hall");


        Movie movie2 = new Movie();
        movie2.setMovieTitle("Terkel i Knibe");
        movie2.setGenre("Komedie");
        movie2.setReleaseYear(2006);
        movie2.setImage("https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/84/396/EG-273_po-reg-medium_orig-1576227034165.jpg");
        movie2.setHall("Small hall");

        movieRepository.save(movie);
        movieRepository.save(movie1);
        movieRepository.save(movie2);

    }
}
