import { SearchResultItem } from '@/containers/SearchResultItem/SearchResultItem'
import { getItemsBySearchQuery } from '@/lib/api/getItemsBySearchQuery'
import { Breadcrumbs } from '@mantine/core';
import '@/styles/pages/search-results.scss'

export default async function Items({ searchParams }) {
  const query = searchParams.q
  const data = await getItemsBySearchQuery(query)
  const breadcrumbs = data?.avaible_category_filter ?? data?.categories

  return (
    <>
      <Breadcrumbs className='breadcrumbs-container'>
        {breadcrumbs?.slice(0, 3).reverse()}
      </Breadcrumbs>
      <div className='search-results-container'>
        {data && data.items.slice(0, 10).map(item => (
          <SearchResultItem
            imageUrl={item.picture}
            isShipped={item.free_shipping}
            location={item.location}
            name={item.title}
            price={item.price.amount}
            currency={item.price.currency}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </>
  )
}
