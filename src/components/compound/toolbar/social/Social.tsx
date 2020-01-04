import React from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { StyledTools } from '../Toolbar.styled';
import Tooltip from 'components/common/tooltip';
import LinkIcon from 'components/common/link_icon';
import { version } from '../../../../../package.json';

interface Props {
  iconSize: SizeProp;
}

const Social: React.FC<Props> = ({ iconSize }) => (
  <StyledTools>
    <Tooltip direction="bottom" content={`Version ${version}`}>
      <LinkIcon icon={faInfoCircle} size={iconSize} href="" />
    </Tooltip>
    <Tooltip direction="bottom" content="Tweet about us">
      <LinkIcon icon={faTwitter} size={iconSize} href="" />
    </Tooltip>
    <Tooltip direction="bottom" content="See the code">
      <LinkIcon icon={faGithub} size={iconSize} href="https://github.com/afternoon2/svg-gradient-editor" />
    </Tooltip>
  </StyledTools>
);

export default Social;
