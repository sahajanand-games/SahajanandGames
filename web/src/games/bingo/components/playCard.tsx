import * as React from 'react';
import orange from '@material-ui/core/colors/orange';

import { INumberState } from '../definitions';
import { GRID_SIZE, CALL_BOX_SIZE, STROKE_WIDTH, WILDCARD_NUM } from '../constants';
import commonCSS from './biComponent.module.css';
import { MURTIS } from './murtis';

const fbgIcon = require('../media/fbg_icon.png');
const cornerAdjustment = 1 + 1 / GRID_SIZE;

interface IOneCardProps {
  number: INumberState;
  onNumberClicked: (number: INumberState) => void;
  murtisRef: number[];
}

function OneCard(props: IOneCardProps) {
  const { number } = props;
  const xPos = Math.floor(number.id / GRID_SIZE);
  const yPos = number.id % GRID_SIZE;
  const boxMargin = STROKE_WIDTH * 1.5;
  const isWildcard = number.value === WILDCARD_NUM;
  const imageScale = isWildcard ? 0.2 : boxMargin * (number.marked ? 5 : 1.2);

  return (
    <g
      key={`bi_card_group_${number.id}`}
      data-testid={`bi-card-group-${number.id}`}
      onClick={() => {
        if (!isWildcard) {
          props.onNumberClicked(number);
        }
      }}
    >
      <image
        key={`bi_wildcard_image_${number.value}`}
        x={xPos + imageScale}
        y={yPos + imageScale + CALL_BOX_SIZE}
        width={1 - 2 * imageScale}
        height={1 - 2 * imageScale}
        href={isWildcard ? fbgIcon : MURTIS[`murti_${props.murtisRef[number.value - 1]}`]}
      />
      <rect
        id={`bi_card_rect_id_${number.id}`}
        key={`bi_card_rect_${number.id}`}
        x={xPos + boxMargin}
        y={yPos + boxMargin + CALL_BOX_SIZE}
        width={1 - 2 * boxMargin}
        height={1 - 2 * boxMargin}
        rx={STROKE_WIDTH * cornerAdjustment}
        style={{
          stroke: number.marked ? orange['600'] : 'white',
          strokeWidth: STROKE_WIDTH * (isWildcard ? 0 : 1),
          fillOpacity: 0,
        }}
      />
      <text
        key={`bi_card_text_${number.id}`}
        className={commonCSS.noselect}
        x={xPos + 0.83}
        y={yPos + 0.925 + CALL_BOX_SIZE}
        fontSize={0.2}
        textAnchor="middle"
        fill="white"
      >
        {isWildcard ? '' : number.value}
      </text>
    </g>
  );
}

interface IPlayCardProps {
  numbers: INumberState[];
  onNumberClicked: (number: INumberState) => void;
  murtisRef: number[];
}

export default function PlayCard(props: IPlayCardProps) {
  return (
    <>
      {props.numbers.map((n, idx) => (
        <OneCard
          key={`bi_card_${idx}`}
          number={n}
          onNumberClicked={props.onNumberClicked}
          murtisRef={props.murtisRef}
        />
      ))}
    </>
  );
}
