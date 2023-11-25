import Benefit from "../models/benefit";
const getBenefit = async (req: any, res: any) => {
  const benefit = await Benefit.find().sort({ number: 1 }).select("-__v");
  res.status(200).json({
    status: "success",
    result: benefit.length,
    Data: { benefit },
  });
};
export default getBenefit;
