import * as React from 'react';
import { rgba } from 'polished';
import styled from '../../styles/styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: ${props => rgba(props.theme.colors.main_200, 0.75)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MWrapper = styled.div`
  width: 75%;
  max-height: 80vh;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.main_300};
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const MHeader = styled.header`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    width: 90%;
  }
  a {
    width: 10%;
  }
`;

const MContent = styled.main`
  width: 100%;
  height: auto;
  box-sizing: border-box;
`;

const MLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`;

type ModalProps = {
  heading: string,
  children: React.ReactNode,
  closeHandler: () => void,
};

export const Modal = (props: ModalProps) => (
  <MOverlay onClick={props.closeHandler}>
    <MWrapper>
      <MHeader>
        <h4>
          {props.heading}
        </h4>
        <MLink onClick={props.closeHandler}>
          <FontAwesomeIcon icon="times" />
        </MLink>
      </MHeader>
      <MContent>
        {props.children}
      </MContent>
    </MWrapper>
  </MOverlay>
);
