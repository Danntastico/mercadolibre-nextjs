import axios from "axios"
import { URL_MELI } from "@/constants"

export default async function getItemById(id) {
  const meliItem = await (await axios.get(`${URL_MELI}/items/${id}`)).data
  const itemDescription = await (await axios.get(`${URL_MELI}/items/${id}/description`)).data
  const categoryRes = await axios.get(`${URL_MELI}/categories/${meliItem.category_id}`)

  const response = {
    author: {
      name: 'Danilo',
      lastname: 'Peña'
    },
    item: {
      category: {
        id: categoryRes.data.id,
        name: categoryRes.data.name,
        path_from_root: categoryRes.data.path_from_root.map((i) => i.name)
      },
      condition: meliItem.condition,
      description: itemDescription.plain_text,
      free_shipping: meliItem.shipping.free_shipping,
      id: meliItem.id,
      picture: meliItem.pictures[0].secure_url,
      price: {
        amount: meliItem.price,
        currency: meliItem.currency_id,
        decimals: 0
      },
      sold_quantity: meliItem.sold_quantity,
      title: meliItem.title
    }
  }
  return response
}
