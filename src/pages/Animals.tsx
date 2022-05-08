import { useEffect, useState } from 'react'
import { WithOutWarning } from '../components/WithOutWarning';
import { WithWarning } from '../components/WithWarning';
import { animalList, getLastAteDateFromStorage, now } from '../config/AppExports';
import { IAnimal } from '../models/IAnimal';
import { Container } from '../styled/StyledContainer';

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
        if (
            now // from /config/AppExports (gets new Date)
              .valueOf()
            -
            getLastAteDateFromStorage(animal.lastFed, animal) // from /config/AppExports
              .valueOf()
            >=
            3600000 * 4 // 1 Hour x 4
          ) {
          return (
            <WithWarning
              id={animal.id}
              name={animal.name}
              imageUrl={animal.imageUrl}
              shortDescription={animal.shortDescription}
              isFed={animal.isFed}
              lastFed={animal.lastFed}
              latinName={animal.latinName}
              longDescription={animal.longDescription}
              medicine={animal.medicine}
              yearOfBirth={animal.yearOfBirth}
            />
          )
        }

        return (
          <WithOutWarning 
            id={animal.id}
            name={animal.name}
            imageUrl={animal.imageUrl}
            shortDescription={animal.shortDescription}
            isFed={animal.isFed}
            lastFed={animal.lastFed}
            latinName={animal.latinName}
            longDescription={animal.longDescription}
            medicine={animal.medicine}
            yearOfBirth={animal.yearOfBirth}
          />
        )
      })
    }
    </Container>
  )
}
