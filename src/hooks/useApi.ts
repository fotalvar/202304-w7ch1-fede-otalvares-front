import { useCallback } from "react";
import { RobotsStructure } from "../store/robotsSlice/types";
import axios from "axios";

interface UseApiStructure {
  getRobots: () => Promise<RobotsStructure[]>;
}

const apiURL = import.meta.env.VITE_API_URL;

const useApi = (): UseApiStructure => {
  const getRobots = useCallback(async () => {
    const {
      data: { robots },
    } = await axios.get(`${apiURL}/robots`);
    return robots;
  }, []);

  return { getRobots };
};

export default useApi;
