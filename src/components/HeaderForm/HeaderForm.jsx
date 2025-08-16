import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Import react-switch
import Switch from 'react-switch';

// Import custom components
import Button from '../Button/Button';
import Input from '../Input/Input';
import {checkedIcon, uncheckedIcon} from './SwitchIcon';

// Import custom styles
import './styles.css';
import styles from './styles';

export default class HeaderForm extends Component {
  // Input handler
  onChange = (event) => {
    // Emit form to APP component
    this.props.onChange({
      ...this.props.form,
      [event.target.name]: event.target.value
    });
  };

  // Switch handler
  onSwitchChange = (isEmbedChord) => {
    this.props.onChange({
      ...this.props.form,
      isEmbedChord
    })
  };

  render() {
    const {
      form,
      preview,
      tips
    } = this.props;

    return (
      <div className="ge-header-form">
        <form>
          <Input
            name="song"
            value={form.song}
            style={styles.offsetRight}
            type="text"
            placeholder="Song"
            onChange={this.onChange}/>

          <Input
            name="singer"
            value={form.singer}
            style={styles.offsetRight}
            type="text"
            placeholder="Singer"
            onChange={this.onChange}/>

          <Input
            name="composer"
            value={form.composer}
            type="text"
            placeholder="Composer"
            onChange={this.onChange}/>
        </form>

        <div className="ge-operation">


          <Switch
            width={75}
            className="ge-embedchord-switch"
            onColor="#CD5C5C"
            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            onChange={this.onSwitchChange}
            checked={form.isEmbedChord}>
          </Switch>

          <Button
            style={styles.offsetRight}
            type="primary"
            onClick={preview}>
            Preview
          </Button>

          <Button
            type="danger"
            onClick={tips}>
            Tips
          </Button>
        </div>
      </div>
    )
  }
}

HeaderForm.propTypes = {
  onChange: PropTypes.func,
  preview: PropTypes.func,
  tips: PropTypes.func,
  form: PropTypes.object
};

HeaderForm.defaultProps = {
  onChange: () => {
  },
  preview: () => {
  },
  tips: () => {
  },
  form: {
    song: '',
    singer: '',
    composer: '',
  }
}