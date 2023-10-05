'use client'

import { Button } from "@mantine/core"
import { useEffect } from "react"
import { IconAlertTriangle } from '@tabler/icons-react';
import '@/styles/pages/error.scss'

export default function Error({ error, reset }) {

  useEffect(() => {
    console.error(error)
  }, [error])

  const handleErrorCLick = () => reset();

  return (
    <div
      className="container"
      style={{ height: `calc(100vh - 70px)` }}
    >
      <IconAlertTriangle size={200} color="yellow" />
      <h1>Ooops!</h1>
      <h2>Something went wrong!</h2>
      <Button onClick={handleErrorCLick} size="md" color="#3483FA">Try again</Button>
    </div>
  )
}

