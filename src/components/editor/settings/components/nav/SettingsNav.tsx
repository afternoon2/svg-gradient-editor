import * as React from 'react';
import { connect } from 'react-redux';
import { setSettingsView } from '../../../../../store/editor/settings/nav/actions';
import { EditorSettingsView } from '../../../../../store/editor/settings/nav/reducer';
import { bindActionCreators } from 'redux';
import { Navbar, NavbarButton } from './layout';

type SettingsNavComponentProps = {
  view: EditorSettingsView,
  clickHandler: (newView: EditorSettingsView) => void,
};

const SettingsNavComponent = (props: SettingsNavComponentProps): React.ReactNode => {
  return (
    <Navbar>
      <NavbarButton
        active={props.view === 'list'}
        onClick={() => props.clickHandler('list')}
      >
        List
      </NavbarButton>
      <NavbarButton
        active={props.view === 'gradient'}
        onClick={() => props.clickHandler('gradient')}
      >
        Gradient
      </NavbarButton>
    </Navbar>
  );
};

const mapStateToProps = (state: any) => ({
  view: state.editor.settings.nav.view,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  { clickHandler: setSettingsView },
  dispatch,
);

export const SettingsNav = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false },
)(SettingsNavComponent as React.ComponentType);
