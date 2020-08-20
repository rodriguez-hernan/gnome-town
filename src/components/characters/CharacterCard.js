import React from 'react';

export default function CharacterCard({item}) {
    return (
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
              <img src={item.thumbnail} alt='profile picture' />
            </div>
            <div className='card-back'>
              <h1>{item.name}</h1>
              <ul>
                <li>
                  <strong>Gnome age:</strong> {item.age}
                </li>
                <li>
                  <strong>weight:</strong> {item.weight}
                </li>
                <li>
                  <strong>height:</strong> {item.height}
                </li>
                <li>
                  <strong>Hair color:</strong> {item.hair_color}
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
}
