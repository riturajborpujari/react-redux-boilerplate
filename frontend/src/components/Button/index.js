import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: ${props => props.padding ? props.padding : '6px 16px'};
  ${props => props.bg && `background-color: ${props.bg};`}
  ${props => props.color && `color: ${props.color};`}
  ${props => props.rounded && 'border-radius: 4px;'}
  ${props => props.disabled && 'background-color: #EEE; color: #AAA;'}

  cursor: pointer;

  &:hover{
    ${props => !props.disabled &&
    `color: ${props.bg ? props.bg : '#222'};`
    }
    ${props => !props.disabled && 'background-color: #FFF;'}
    ${props => !props.disabled && `box-shadow: 0 0 1px ${props.bg ? props.bg : '#222'};`}
  }
`;

export default Button;