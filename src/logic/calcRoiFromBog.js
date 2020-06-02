export const calcRoiFromBog = (sum, rate, buyOrSell) => {
  let feeRate = 0.00595;
  if (sum > 20000 && sum < 50001) feeRate = 0.00483;
  if (sum > 50001 && sum < 100000) feeRate = 0.00458;
  if (sum > 100001 && sum < 200000) feeRate = 0.00448;
  if (sum > 200000 && sum < 400000) feeRate = 0.00432;
  if (sum > 400000 && sum < 1000000) feeRate = 0.00381;
  if (sum > 1000000) feeRate = 0.00331;

  let fees = sum * feeRate;
  if (fees < 75) fees = 75;

  console.log(
    `Amount: ${sum}\n Rate: ${rate}\n Fees: ${fees}\n ROI: ${
      (sum - fees) / rate
    }`
  );
  return ((sum - fees) / rate).toFixed(8);
};
