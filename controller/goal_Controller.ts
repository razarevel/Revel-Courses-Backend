import Goal from "../models/goalSchema";
const getGoal = async (req: any, res: any) => {
  const goals = await Goal.find().select("-__v");
  res.status(200).json({
    status: "success",
    result: goals.length,
    Data: { goals },
  });
};
export default getGoal;
