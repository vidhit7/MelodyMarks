import React, {Component} from 'react';

import Previewer from '../components/Previewer/Previewer';
import PinBtn from '../components/PinBtn/PinBtn';

class Result extends Component {
  state = {
    // Basic information of this song
    headerForm: {},
    // Editor content
    editorForm: {},
    isExistData: false
  };

  componentDidMount() {
    const routeState = this.props.history.location.state;

    if (routeState) {
      this.setState({
        headerForm: routeState.headerForm,
        editorForm: routeState.editorForm,
        isExistData: true
      });
    }
  };



  back = () => {
    this.props.history.goBack();
  };

  save = () => {
    window.print();
  };

  render() {
    const {headerForm, editorForm, isExistData} = this.state;

    return (
      <div className="ge-result">
        {
          isExistData ?
            <div>
              <Previewer headerForm={headerForm} editorForm={editorForm}/>
              <PinBtn onClick={this.save} right={30} bottom={210} bgColor="#909399">Save</PinBtn>
            </div>
            :
            <div className="ge-result-err">
              No data is to preview.
            </div>
        }

        <PinBtn onClick={this.back} right={30} bottom={30}>Back</PinBtn>
      </div>
    );
  }
}

export default Result;
