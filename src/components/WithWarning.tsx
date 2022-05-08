import { Link } from 'react-router-dom';
import { IAnimal } from '../models/IAnimal';
import { Info } from '../styled/Info';
import { AnimalContainer } from '../styled/StyledContainer';
import { Heading2 } from '../styled/StyledHeader';
import { Warning } from '../styled/Warning';

export function WithWarning(props: IAnimal) {

  return (
    <AnimalContainer key={props.id} className='img-container'>
        <Link to={"/animal/" + props.id}>
            <Heading2>{props.name}</Heading2>
            <Warning></Warning>
            <img src={props.imageUrl} alt={props.latinName} />
            <Info>{props.shortDescription}</Info>
        </Link>
    </AnimalContainer>
  )
}
