import * as React from 'react';
import { createPortal } from 'react-dom';
import { rgba } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SHeaderIconButton } from '../editor/settings/header/layout';
import styled from '../../styles/styledComponents';
import { mediaMixin } from '../../styles/mixins';

const AppModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 15%;
  z-index: 999;
  background-color: ${props => props.theme.colors.main_200};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: .5em;
  ${props => mediaMixin(props.theme, {
    sm: `
      width: 80%;
      left: 10%;
    `,
    md: `
      width: 500px;
      left: calc(50% - 250px);
    `,
  })}
`;

const AppModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 998;
  background-color: ${props => rgba(props.theme.colors.main_200, 0.85)};
`;

const AppModalHeader = styled.header`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: space-between;
  h4 {
    margin: 0;
  }
`;

const AppModalContent = styled.main`
  box-sizing: border-box;
  width: 100%;
  padding: 1em;
`;

export type AppModalProps = {
  containerId: string,
  children: any,
  heading: string,
  onClose: () => void,
};

export const AppModal = (props: AppModalProps): React.ReactPortal => {
  const {
    containerId,
    children,
    heading,
    onClose,
  } = props;
  const container = document.getElementById(containerId);
  return createPortal(
    <React.Fragment>
      <AppModalOverlay onClick={onClose} />
      <AppModalWrapper>
        <AppModalHeader>
          <h4>{heading}</h4>
          <SHeaderIconButton
            title="Close"
            onClick={onClose}
            style={{
              justifySelf: 'flex-end',
            }}
          >
            <FontAwesomeIcon
              icon="times"
              size="2x"
            />
          </SHeaderIconButton>
        </AppModalHeader>
        <AppModalContent>
          {children}
        </AppModalContent>
      </AppModalWrapper>
    </React.Fragment>,
    container as HTMLElement,
  );
};
