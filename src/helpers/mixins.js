export const transition = (...props) => {
  return `
    transition-property: ${props.join(', ')};
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  `;
};

export const ishidden = () => {
  return `
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    ${transition('visibility', 'opacity')};
  `;
};
