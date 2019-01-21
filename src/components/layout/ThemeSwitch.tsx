import * as React from 'react';
import { connect } from 'react-redux';
import Switch, { ReactSwitchProps } from 'react-switch';
import { setTheme } from '../../store/application/actions';
import { bindActionCreators } from 'redux';
import { modularSize } from '../../styles/typography';
import styled from '../../styles/styledComponents';
import { AppTheme } from '../../styles/themes';
import { mediaMixin } from '../../styles/mixins';
import { rgba } from 'polished';

const SwitchWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: .5em;
  box-sizing: border-box;
  background-color: ${props => rgba(props.theme.colors.main_400, 0.5)};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  ${props => mediaMixin(props.theme, {
    sm: `
      right: 10px;
      top: 10px;
    `,
    md: `
      left: 10px;
      bottom: 10px;
    `,
  })}
`;

type SwitchLabelProps = {
  theme: AppTheme,
  children: React.ReactNode,
  htmlFor: string,
};

const SwitchLabel = styled.label<SwitchLabelProps>`
  color: ${props => props.theme.colors.text};
  padding-right: 10px;
  font-size: ${modularSize(-2)};
  font-weight: bold;
`;

type SwitchProps = {
  theme: 'dark' | 'light',
  onChange: (newTheme: 'light' | 'dark') => void,
};

class SwitchComp extends React.PureComponent<ReactSwitchProps & SwitchProps> {

  private changeHandler = () => {
    const { theme, onChange } = this.props;
    const newTheme: 'dark' | 'light' = theme === 'dark' ?
      'light' : 'dark';
    onChange(newTheme);
  }

  public render() {
    const { theme } = this.props;
    return (
      <SwitchWrapper>
        <SwitchLabel htmlFor="themeSwitch">
          Toggle theme
        </SwitchLabel>
        <Switch
          id="themeSwitch"
          checked={theme === 'light'}
          onChange={this.changeHandler}
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
  }
};

const mapStateToProps = (state: any) => ({
  theme: state.application.theme,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  { onChange: setTheme }, 
  dispatch
);

export const ThemeSwitch = connect(
  mapStateToProps,
  mapDispatchToProps,
  // @ts-ignore
)(SwitchComp);
