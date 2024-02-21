import React, { useEffect, useState } from 'react';

function Card() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.results[0]);
      });
  }, []);

  return (
    <div className='container'>
      <div className='card'>
        <div className='outline'>
          <div className='card-img'>
            {userData && userData.picture && (
              <img src={userData.picture.large} alt='User' />
            )}
          </div>
          <div className='card-text'>
            {userData && (
              <div className='card-container'>
                <div className='card-name'>
                  <p>{userData.name.first}</p>
                  <p>{userData.name.last}</p>
                </div>
                <div className='card-details'>
                  <p>{userData.gender}</p>
                  <p>{userData.phone}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
