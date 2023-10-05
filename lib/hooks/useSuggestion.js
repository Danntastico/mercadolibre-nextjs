import useSWRMutation from "swr/mutation";
import { getItemSuggestions } from "../api/getItemSuggestions";
import { useEffect, useRef, useState } from "react";

export default function useSuggestions(initialQuery) {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState(initialQuery || '')
  const { data, trigger, } = useSWRMutation('items/fetch', getItemSuggestions)
  const cache = useRef({})
  console.log(initialQuery)
  useEffect(() => {
    if (data) {
      cache.current[query] = data;
      setResults(data)
    }
  }, [cache, data, query])

  useEffect(() => {
    initialQuery === null && setQuery('')
  },[initialQuery])

  const handleInputChange = (inputVal) => {
    if (cache.current[inputVal]) {
      setResults(cache.current[inputVal])
      return
    }
    setQuery(inputVal)
    trigger(inputVal)
  }

  return { results, handleInputChange, query, setQuery }
}
