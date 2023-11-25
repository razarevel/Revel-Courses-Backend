import Achivement from "../models/achiveSchema";

const getAchivements = async (req: any, res: any) => {
  const achive = await Achivement.find().select("-__v");
  res.status(200).json({
    status: "success",
    result: achive.length,
    Data: { achive },
  });
};
export default getAchivements;
