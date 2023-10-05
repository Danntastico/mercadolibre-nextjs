import { currencyFormatter } from "@/lib/functions"
import { Button } from "@mantine/core"
import '@/styles/containers/product-details-card.scss';
import Image from "next/image";

export default function ProductDetailsCard(
  {
    currency,
    description,
    imageUrl,
    name,
    price,
    productStatus,
    soldQuantity,
  }
) {
  const soldQuantityLabel = soldQuantity > 1 ? 'vendidos' : 'vendido'

  return (
    <div className="details-container">
      <section className="details-main">
        <div className="image-container">
          <Image
            src={imageUrl}
            alt="Modelo del producto"
            fill
          />
        </div>
        <div className="details-description">
          <h3>Descripción del producto</h3>
          <p>{description}</p>
        </div>
      </section>
      <section className="details-action">
        <span>{productStatus} - {soldQuantity} {soldQuantityLabel}</span>
        <h1>{name}</h1>
        <h2>
          {currencyFormatter(price, currency)}
        </h2>
        <Button>Comprar</Button>
      </section>
    </div>
  )
}

