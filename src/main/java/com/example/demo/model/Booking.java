package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "userid")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    private User user;

    @OneToOne
    @MapsId
    @JoinColumn(name = "movieid")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    private Movie movie;

    private String date;

    public Booking() {
    }

    public Booking(Long id, User user, Movie movie, String date) {
        this.id = id;
        this.user = user;
        this.movie = movie;
        this.date = date;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", user=" + user +
                ", movie=" + movie +
                ", date='" + date + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Booking booking = (Booking) o;
        return Objects.equals(id, booking.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
