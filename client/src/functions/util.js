const colors = ["#FFCA28", "#FFA726", "#66BB6A", "#5C6BC0"];
export const generateBGColor = (index) => {
  const randIndex = Math.floor(Math.random() * colors.length)
  console.log(randIndex);
  return colors[index ? index : randIndex];
}