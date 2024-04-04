const useEmptyArray = (n: number) => {
  const iterate = [...Array(n).keys()];
  return iterate;
};

export default useEmptyArray;
