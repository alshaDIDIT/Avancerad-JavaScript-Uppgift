import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { animalList } from '../config/AppExports';
import { IAnimal } from '../models/IAnimal';
import { Info } from '../styled/Info';
import { AnimalContainer, Container } from '../styled/StyledContainer';
import { Heading2 } from '../styled/StyledHeader';

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    if (animals.length !== 0) return;
    setAnimals(animalList); // inside '../config/AppExports'
  });


  return (
    <Container>
    {
      animals.map((animal) => {
        return (
          <AnimalContainer key={animal.id} className='img-container'>
            <Link to={"/animal/" + animal.id}>
              <Heading2>{animal.name}</Heading2>
              <img src={animal.imageUrl} alt={animal.latinName} />
              <Info>{animal.shortDescription}</Info>
            </Link>
          </AnimalContainer>
        )
      })
    }
    </Container>
  )
}
