import React from 'react';
import { StyledText } from '../AppStyled.Styled';
import PropTypes from 'prop-types';

export const Notification = ({ message, appreciation }) => {
  return <StyledText $appreciation={appreciation}>{message}</StyledText>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
  appreciation: PropTypes.bool,
};
