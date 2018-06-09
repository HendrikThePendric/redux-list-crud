export const dummy = (add: boolean) => {
  const four = 4;
  const six = 6;
  const twelve = 12;
  const twenty = 20;
  if (add) {
    return four + six + twelve + twenty;
  }
  return four - six;
};
