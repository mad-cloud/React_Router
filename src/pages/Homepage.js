import React from 'react';
import {movieData} from '../movieData';
const Homepage = () => {
  return (
    <div>
      {movieData.results.map((val)=>(
        <div key={val.id}>
           <img width='200px' src={movieData.baseUrlImage+val.poster_path} alt="No image Found" />
           <h3>{val.title}</h3>
           <p>{val.release_date}</p>
          </div>
      )  
      )}
    </div>
  );
}

export default Homepage;
