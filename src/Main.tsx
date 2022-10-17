import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
  const [photoArr, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    const url = `${process.env.REACT_APP_SERVER}/photos`;
    const response = await axios.get(url);
    setPhotos(response.data);
  }



  return (
    <>
      {photoArr.map(photo => {
        return (<img src={photo.image_url} alt={photo.keyword} />)
      })
      }
    </>

  );
}

export default Main;
