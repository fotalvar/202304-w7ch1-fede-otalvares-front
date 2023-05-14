import { useCallback } from "react";
import axios from "axios";

export const apiURL = import.meta.env.VITE_API_URL;

const useApi = () => {
  const getRobots = useCallback(async () => {
    const {
      data: { robots },
    } = await axios.get(`${apiURL}/robots`);
    return robots;
  }, []);

  const getRobot = async (robotId: string) => {
    const { data, status } = await axios.get(`${apiURL}/robots/${robotId}`);
    return { data, status };
  };

  return { getRobots, getRobot };
};

export default useApi;
