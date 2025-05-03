import axios from "axios";
import { API_URL } from "../config/api";

export const storeTransaction = async (userId, packageId) => {
  try {
    const response = await axios.post(API_URL + "/transactions", {
      userId,
      packageId,
    });

    if (response.status === 201) {
      console.log("transaksi berhasil", response.data);
    } else {
      throw new Error("Gagal menyimpan transaksi");
    }
  } catch (error) {
    console.error("Error membuat transaksi:", error);
    throw error;
  }
};
