import * as React from 'react';
import { connect } from 'react-redux';
import { default as styled } from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';
import { setTheme } from '../../store/application/actions';
import { bindActionCreators } from 'redux';
import { modularSize } from '../../styles/typography';

const SwitchWrapper = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
  z-index: 999999;
`;

const SwitchLabel = styled.label`
  color: ${props => props.theme.text};
  padding-right: 10px;
  font-size: ${modularSize(-2)};
`;

type SwitchProps = {
  checked: boolean,
  theme: 'dark' | 'light',
  onChange: (newTheme: 'light' | 'dark') => void,
};

const SwitchComp = (props: ReactSwitchProps & SwitchProps) => {

  const clickHandler = () => {
    const newTheme: 'dark' | 'light' = props.theme === 'dark' ?
      'light' : 'dark'; 
    props.onChange(newTheme);
  };

  return (
    <SwitchWrapper>
      <SwitchLabel htmlFor="themeSwitch">
        Dark theme
      </SwitchLabel>
      <Switch
        id="themeSwitch"
        checked={props.checked}
        onChange={clickHandler}
        className="themeSwitch"
        checkedIcon={false}
        uncheckedIcon={false}
        width={35}
        height={20}
        onColor="#5383D6"
        offColor="#A4BCAD"
      />
    </SwitchWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  checked: state.application.theme === 'dark',
  theme: state.application.theme,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  { onChange: setTheme }, 
  dispatch
);

export const ThemeSwitch = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(SwitchComp as React.ComponentType);