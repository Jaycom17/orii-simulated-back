export const getId = (data) => {
  const ids = data.map((d) => d.id);
  return ids.length ? Math.max(...ids) + 1 : 1;
};
