'use client'

import { useRouter } from "next/navigation"
import Image from "next/image";
import Link from "next/link";

import "@/styles/components/search-result-item.scss";
import { currencyFormatter } from "@/lib/functions";

export const SearchResultItem = (props) => {
  const router = useRouter()
  const {
    currency,
    id,
    imageUrl,
    isShipped,
    location,
    name,
    price
  } = props

  const handleClickNavigate = () => {
    router.push(`/items/${id}`)
  }

  return (
    <div className='product-card'>
      <div onClick={handleClickNavigate} className='product-cart-image-wrapper'>
        <Image
          src={imageUrl}
          alt={`Product ${name}`}
          width={180}
          height={180}
          className="product-image"
        />
      </div>
      <div className="product-description">
        <Link href={`/items/${id}`} title={name}>
          <div className='product-price'>
            <h3>{currencyFormatter(price, currency)}</h3>
            {/* isShipped && <Icon name='shipping' width='20px' />*/}
          </div>
        </Link>
        <p>{name}</p>
      </div>
      <div style={{ minWidth: '200px' }}>
        <p className='product-location'>{location}</p>
      </div>
    </div>
  )
}

