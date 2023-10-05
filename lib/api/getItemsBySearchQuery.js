
import { URL_MELI } from '@/constants'
import axios from 'axios'

const getCategoryName = async (categoryIds) => {
  let categories = []

  const getCategoryNameById = async (id) => {
    const response = await axios.get(`${URL_MELI}/categories/${id}`)
    return response.data.name
  }

  if (Array.isArray(categoryIds)) {
    const promises = categoryIds.map((id) => getCategoryNameById(id))
    categories = await Promise.all(promises)
  } else {
    const categoryName = await getCategoryNameById(categoryIds)
    categories.push(categoryName)
  }

  return categories
}

export async function getItemsBySearchQuery(query) {
  const { data } = await axios.get(`${URL_MELI}/sites/MCO/search?q=${query}`)

  const availableCategoryFilter = data.available_filters.find((filter) => filter.id === 'category')
  const availableCategoryNames = availableCategoryFilter &&
    availableCategoryFilter.values.sort((a, b) => b.results - a.results).map((i) => i.name)

  const categoriesIds = [...new Set(data.results.map((result) => result.category_id))]
  const categoriesNames = await getCategoryName(categoriesIds)

  const response = {
    author: {
      "name": "Danilo",
      "lastName": "Peña"
    },
    categories: categoriesNames,
    avaible_category_filter: availableCategoryNames,
    items: data.results.map((result) => ({
      condition: result.condition,
      free_shipping: result.shipping.free_shipping,
      id: result.id,
      location: result.seller_address.country.name,
      price: {
        currency: result.currency_id,
        amount: result.price,
        decimals: 0
      },
      picture: result.thumbnail,
      title: result.title,
    }))
  }
  return response
}
