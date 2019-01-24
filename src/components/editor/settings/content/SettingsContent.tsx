import * as React from 'react';
import { connect } from 'react-redux';
import { SContent, ContentList } from './layout';
import { ListItem } from './list_item/ListItem';
import * as selectors from '../../../../store/editor/selectors';

type SettingsContentComponentProps = {
  idList: string[],
};

class SettingsContentComponent extends React.PureComponent<SettingsContentComponentProps> {
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
}

const mapStateToProps = (state: any) => ({
  idList: selectors.idList(state),
});

export const SettingsContent = connect(
  mapStateToProps,
  null,
)(SettingsContentComponent);
