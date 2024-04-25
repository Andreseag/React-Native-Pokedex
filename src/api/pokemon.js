import { API_HOST } from "../utils/constants";

export async function getPokemonApi() {
  const url = `${API_HOST}/pokemon?limit=20&offset=0`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }
  catch (error)
  {
    return null;
  }
}