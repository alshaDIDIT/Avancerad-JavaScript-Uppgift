import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { animalList, getLastAteDateFromStorage, now } from '../config/AppExports';
import { IAnimal } from '../models/IAnimal';
import { LongInfo } from '../styled/Info';
import { StyledButton } from '../styled/StyledButton';
import { AnimalInfo, Container } from '../styled/StyledContainer';
import { Title } from '../styled/StyledHeader';

export const Animal = () => {
  const [animal, setAnimal] = useState<IAnimal>({
    id: 0,
    imageUrl: '',
    isFed: false,
    lastFed: new Date(),
    latinName: '',
    longDescription: '',
    medicine: '',
    name: '',
    shortDescription: '',
    yearOfBirth: 0
  });
  const [time, setTime] = useState<Date>(new Date());
  const [show, setShow] = useState<string>("");

  let params = useParams();

  let theAnimal: IAnimal = animalList.filter(function (thisAnimal) {
    return thisAnimal.id.toString() == params.id;
  })[0];
  const index: number = animalList.findIndex(i => i.id === theAnimal.id);

  useEffect(() => {
    setAnimal(theAnimal);

    if (now.valueOf() - getLastAteDateFromStorage(animal.lastFed, theAnimal).valueOf() > 3600000 * 3) {
      animalList[index].isFed = false;
      localStorage.setItem('listOfAnimals', JSON.stringify(animalList));
      setShow("block");
      return;
    }
  }, []);

  const feed = () => {
    if (!animal.isFed) {
      setAnimal({ ...animal, isFed: true, lastFed: new Date() });
      setTime(new Date());
      setShow("none");
      animalList[index].isFed = true;
      animalList[index].lastFed = new Date();
      localStorage.setItem('listOfAnimals', JSON.stringify(animalList));
      return;
    }
  }

  return (
    <AnimalInfo>
      <Title>{animal.latinName}</Title>
      <img src={animal.imageUrl} alt={animal.latinName} />
      <div>
        <StyledButton
          onClick={feed}
          show={show}
        >
          Mata {animal.name}
        </StyledButton>
        <LongInfo>
          {animal.longDescription}
          <span>
          {animal.name + "s "}
          födelseår:
          {" " + animal.yearOfBirth}
          <br /><br />
          {animal.name + "s "}
          medicin:
          {" " + animal.medicine}
          </span>
        </LongInfo>
        <h3>
          <span>
            {animal.name + " "}
          </span> 
          matades senast:
          <span>
            {" " + time.toUTCString()}
          </span>
        </h3>
      </div>
    </AnimalInfo>
  )
}
