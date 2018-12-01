import * as React from 'react';
import { Link } from 'react-router-dom';
import { default as styled } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft)

const HomeLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 99999;
  background-color: transparent;
`;

export const HomeLink = () => (
  <HomeLinkWrapper>
    <Link to="/">
      <FontAwesomeIcon
        icon="chevron-left"
        size="lg"
      />
    </Link>
  </HomeLinkWrapper>
);
