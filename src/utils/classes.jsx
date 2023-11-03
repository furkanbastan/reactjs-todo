export const classes = (...classes) => {
  let className = "";

  for (let index = 0; index < classes.length - 1; index++) {
    className += classes[index] + " ";
  }

  className += classes[classes.length - 1];

  return className;
};
