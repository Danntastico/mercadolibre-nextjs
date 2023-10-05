'use client'

import useSuggestions from "@/lib/hooks/useSuggestion"
import { Autocomplete } from "@mantine/core"
import { IconSearch } from '@tabler/icons-react'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

import "@/styles/components/searchbar.scss"

export default function SearchBar() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const q = searchParams.get('q') 
  const { handleInputChange, results, query, setQuery } = useSuggestions(q)


  const handleOptionSubmit = (val) => router.push(`/items?q=${val}`)

  return (
    <header className="topbar">
      <div className="topbar-content">
        <Link className="topbar-logo" href="/">
          <Image
            src="/logo_meli.png"
            alt="Mercado Libre Logo"
            width={60}
            height={40}
            style={{ objectFit: 'cover' }}
          />
        </Link>
          <Autocomplete
            data={results || []}

            onChange={(value) => {
              handleInputChange(value)
              setQuery(value)
            }}
            onKeyDown={e => e.key === 'Enter' && !!query && handleOptionSubmit(query)}
            onOptionSubmit={(value) => handleOptionSubmit(value)}
            placeholder="Nunca dejes de buscar"
            value={query}
            width={100}
          />
        <button
          className="topbar-search-button"
          onClick={() => !!query && handleOptionSubmit(query)}
        >
          <IconSearch color="gray" />
        </button>
      </div>
    </header>
  )
}
