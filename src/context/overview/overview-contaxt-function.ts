export const intToString = (num: number) => {
  const numToString = String(num).replace(/[^0-9.]/g, "");
  if (Number(numToString) < 1000) {
    return numToString;
  }
  const si = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (Number(numToString) >= si[index].v) {
      break;
    }
  }
  return (
    (Number(numToString) / si[index].v)
      .toFixed(2)
      .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s
  );
};
