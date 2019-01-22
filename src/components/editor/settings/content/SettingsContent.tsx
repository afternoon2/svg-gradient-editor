import * as React from 'react';
import { connect } from 'react-redux';
import { SContent, ContentList } from './layout';
import { ListItem } from './list_item/ListItem';
import * as selectors from '../../../../store/editor/selectors';

type SettingsContentComponentProps = {
  idList: string[],
};

class SettingsContentComponent extends React.Component<SettingsContentComponentProps> {
  public render(): React.ReactNode {
    return (
      <SContent>
        <ContentList>
          {this.renderList()}
        </ContentList>
      </SContent>
    );
  }

  private renderList = () => {
    return this.props.idList
      .map((id: string): React.ReactElement<string> => (
        <ListItem
          key={id}
          id={id}
          index={this.props.idList.indexOf(id)}
        />
      ));
  }

  public shouldComponentUpdate(nextProps: SettingsContentComponentProps, nextState: any) {
    if (nextProps.idList.length !== this.props.idList.length) {
      return true;
    }
    return false;
  }


}

const mapStateToProps = (state: any) => ({
  idList: selectors.idList(state),
});

export const SettingsContent = connect(
  mapStateToProps,
  null,
  null,
  { pure: false },
)(SettingsContentComponent);
