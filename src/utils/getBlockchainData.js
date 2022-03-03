import { getFundingCount } from '../Web3Client'

export const countOfFunding = async () => {
  const fcount = await getFundingCount();
  return fcount;
};
