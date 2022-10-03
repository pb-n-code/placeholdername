import React, { useState, useEffect } from 'react';
import data from './data.json';

function Main() {
  const [photoArr, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    setPhotos(data);
  }, []);



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
