import React, { useState, useEffect } from 'react'


export function useBackgroundImage(city) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${city}&client_id=BzSfVucYTI5CJ6qniGcyLfBul-fmqCuBl5UF4HOZ--A`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        };
        const data = await response.json();
        setImage(data.results[2].urls.full);
      } catch(error) {
        console.error(error);
      }
    }
    fetchImage()
  }, [city]);
  return image;
}
