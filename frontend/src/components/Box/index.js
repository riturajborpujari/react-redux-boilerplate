import styled from 'styled-components';

/**
 * Base component
 * @property {Number} padding applied in counts of 4px, 1 means 4px 2 means 8px...
 * @property {Boolean} outlined draws an outline
 * @property {String} outlineColor CSS color value for outline `default: #AAA`
 */

const Box = styled.div`
  ${({ padding }) =>
    padding && `padding: ${padding * 4}px;`};
    
  ${({ outlined, outlineColor }) => outlined &&
    `box-shadow: 0 0 1px ${outlineColor ? outlineColor : '#AAA'};`
  }

  ${({rounded}) => rounded &&
    `border-radius: 8px;`
  }
`;

export default Box;