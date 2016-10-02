import React from 'react';
import { Sparklines, SparklinesCurve, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return (_.round(_.sum(data)/data.length));
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesCurve color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
