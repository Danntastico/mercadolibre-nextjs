import axios from "axios";
import { URL_MELI } from '@/constants'

export async function getItemSuggestions(_url, { arg }) {
  const { data } = await axios.get(`${URL_MELI}/sites/MCO/search?q=${arg}`)

  return [...new Set(data.results.map(item => item.title))]
}
