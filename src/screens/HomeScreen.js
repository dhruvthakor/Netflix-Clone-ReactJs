import React from 'react';
import Nav from '../Nav';
import Banner from '../Banner';
import './HomeScreen.css';
import requests from '../Requests';
import Row from '../Row';
import Footer from '../Footer';

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row 
        title='NETFLIX ORIGINALS'
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Films" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Chick-flix" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default HomeScreen;
