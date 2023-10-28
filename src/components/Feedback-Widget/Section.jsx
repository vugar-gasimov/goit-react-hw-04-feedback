import React from 'react';
import { SectionContainer, SectionTitle } from '../AppStyled.Styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
