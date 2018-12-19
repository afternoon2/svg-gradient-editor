import * as React from 'react';
import { connect } from 'react-redux';
import { Content } from './layout';
import { GradientList } from './components/list/GradientList';

const SettingsContentComponent = (props: any): React.ReactNode => (
  <Content>
    {
      props.view === 'list' ?
        <GradientList /> : null
    }
  </Content>
);

const mapStateToProps = (state: any) => ({
  view: state.editor.settings.nav.view,
});

export const SettingsContent = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(SettingsContentComponent as React.ComponentType)