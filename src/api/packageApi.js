import axios from "axios";
import { API_URL } from "../config/api";

export const getStreamingPackage = async () => {
  const response = await axios.get(API_URL + "/packages?type=Streaming");
  return response.data;
};

export const getRegularPackage = async () => {
  const response = await axios.get(API_URL + "/packages?type=Regular");
  return response.data;
};

export const getPackageById = async (id) => {
  try {
    const response = await axios.get(API_URL + "/packages/" + id);
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil data paket:", error);
    return null;
  }
};
