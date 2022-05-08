import { Link } from 'react-router-dom'
import { DisplayHead } from '../styled/DisplayHead'
import { Heading } from '../styled/StyledHeader'
import { StyledNavbar } from '../styled/StyledNavbar'

export const Navbar = () => {
  return (
    <StyledNavbar>
        <DisplayHead>Animal Zoo</DisplayHead>
        <Link to="/">
            <Heading>Animals</Heading>
        </Link>
    </StyledNavbar>
  )
}
