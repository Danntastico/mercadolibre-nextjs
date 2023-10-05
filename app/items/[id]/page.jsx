import { ProductDetailsCard } from "@/components"
import getItemById from "@/lib/api/getItemById"
import { Breadcrumbs } from "@mantine/core"

export default async function Items({ params }) {
  const data = await getItemById(params.id)
  const categories = data?.item.category.path_from_root ?? [data?.item.category.name]
  console.log(data)
  return (
    <>
      <Breadcrumbs>
        {categories}
      </Breadcrumbs>
      {data && (
        <ProductDetailsCard
          description={data.item.description}
          imageUrl={data.item.picture}
          name={data.item.title}
          price={data.item.price.amount}
          productStatus={data.item.condition}
          soldQuantity={data.item.sold_quantity}
          currency={data.item.price.currency}
        />
      )}
    </>
  )
}
