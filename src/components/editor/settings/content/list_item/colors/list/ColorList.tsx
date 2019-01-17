import * as React from 'react';
import { connect } from 'react-redux';
import { CList, CListItem } from './layout';
import { Color } from '../color/Color';
import * as selectors from '../../../../../../../store/editor/selectors';

type ColorListComponentProps = {
  colorIdsList: string[],
  gradientId: string,
};

class ColorListComponent extends React.Component<ColorListComponentProps> {

  public render() {
    const { colorIdsList } = this.props;
    return (
      <CList>
        {colorIdsList.length > 0 ? this.renderColors() : null}
      </CList>
    );
  }

  private renderColors = () => {
    return this.props.colorIdsList
      .map((id: string) => (
        <CListItem key={id}>
          <Color
            colorId={id}
            gradientId={this.props.gradientId}
          />
        </CListItem>
      ));
  }
  
  public shouldComponentUpdate(nextProps: ColorListComponentProps, nextState: any) {
    if (nextProps.colorIdsList.length !== this.props.colorIdsList.length) {
      return true;
    }
    return false;
  }
};

const mapStateToProps = (state: any, ownProps: { [key: string]: string }) => ({
  colorIdsList: selectors.colorIdsFromGradient(state, ownProps.gradientId),
});

export const ColorList = connect(
  mapStateToProps,
  null,
  null,
  { pure: true },
)(ColorListComponent);
