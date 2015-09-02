import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dumb from './Dumb';
import generateList from '../utils/generateList';
import generatePayload from '../utils/generatePayload';
import invariant from '../utils/invariant';
import capitalize from '../utils/capitalize';
import { PAYLOAD_LIST, WHITE_LIST } from '../constants';

const mapStateToProps = state => ({ ...state });

const mergeProps =
  (stateProps, dispatchProps, { is, ...clean }) => ({
    ...clean,
    grid: {
      ...stateProps,
      is
    }
  });

const gridShape =
  PropTypes.shape({
    context: PropTypes.object.isRequired,
    is: PropTypes.string,
    reference: PropTypes.object.isRequired
  }).isRequired;

export function smart(tag) {
  return class Smart extends Component {
    static propTypes = {
      grid: gridShape
    };

    shouldComponentUpdate(nextProps) {
      return nextProps.grid.context !== this.props.grid.context;
    }

    render() {
      const {
        grid: { context, reference, is },
        ...clean
        } = this.props;

      const payload = generatePayload(
        context,
        generateList(tag, is)
      );

      payload[PAYLOAD_LIST].forEach(n => {
        const value = (Array.isArray(n)) ? n[0] : n;
        invariant(
          WHITE_LIST[tag].indexOf(value) > -1,
          `Property '${value}' is not allowed for <${capitalize(tag)}> component.`
        );
      });

      return <Dumb grid={{ payload, reference }} {...clean}/>;
    }
  };
}

export default function createSmart(tag) {
  return connect(
    mapStateToProps,
    null,
    mergeProps)(smart(tag));
}
