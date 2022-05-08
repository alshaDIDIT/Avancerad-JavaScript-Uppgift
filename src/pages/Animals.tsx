import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { animalList } from '../config/AppExports';
import { IAnimal } from '../models/IAnimal';

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    if (animals.length !== 0) return;
    setAnimals(animalList); // inside '../config/AppExports'
  });


  return (
    <>
    {
      animals.map((animal) => {
        return (
          <div key={animal.id} className='img-container'>
            <Link to={"/animal/" + animal.id}>
              <h3>{animal.name}</h3>
              <img src={animal.imageUrl} alt={animal.latinName} />
              <p>{animal.shortDescription}</p>
            </Link>
          </div>
        )
      })
    }
    </>
  )
}
