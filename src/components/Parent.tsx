import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../styled/StyledButton';
import { Container } from '../styled/StyledContainer';
import { Heading } from '../styled/StyledHeader';
import { StyledNavbar } from '../styled/StyledNavbar';

export function Parent() {
  return (
    <>
    <StyledNavbar />
      <Container>
        <Heading>Lorem ipsum</Heading>
      </Container>

      <StyledButton>hello</StyledButton>
      <StyledButton color='red' background='black'>Bye</StyledButton>
    </>
  );
}
