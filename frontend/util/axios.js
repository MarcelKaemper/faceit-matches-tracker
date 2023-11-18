import axios from "axios";
import { API_URL, BACKEND_URL } from "./constants";

export async function serverGetRequest(path, jwt) {
  try {
    const result = await axios.get(`${BACKEND_URL}/${path}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    return { success: true, data: result.data };
  } catch (e) {
    return { success: false };
  }
}

export async function serverPostRequest(path, data) {
  try {
    const result = await axios.post(`${BACKEND_URL}/${path}`, data);
    return { success: true, data: result.data };
  } catch (e) {
    return { success: false };
  }
}

export async function getRequest(path) {
  try {
    const result = await axios.get(`${API_URL}/${path}`);
    return { success: true, data: result.data };
  } catch (e) {
    return { success: false };
  }
}

export async function postRequest(path, data) {
  try {
    const result = await axios.post(`${API_URL}/${path}`, data);
    return { success: true, data: result.data };
  } catch (e) {
    return { success: false };
  }
}
