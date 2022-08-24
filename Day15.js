const isPangram = (input) => {
  // Code here
  const inputLowered = input.toLowerCase();
  return [..."abcdefghijklmnopqrstuvwxyz"].every((c) =>
    inputLowered.includes(c)
  );
};
