import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ path, children }) => {
  return (
    <StyledLink to={path}>
      <HiArrowLeft />
      {children}
    </StyledLink>
  );
};
BackLink.propTypes = {
  path: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};
