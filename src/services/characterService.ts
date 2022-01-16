import axios from "./axios";
import { AxiosResponse } from "axios";
import { Character } from "@/interfaces/Character";

interface Info {
  count: number;
  next: string;
  pages: number;
  prev: null | string;
}

export const getCharacters = async (): Promise<
  AxiosResponse<{
    info: Info;
    results: Character[];
  }>
> => await axios.get("/character");
