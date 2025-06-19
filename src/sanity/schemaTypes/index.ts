import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { blockContentType } from './blockContentType'
import { productType } from './productType'
import { orderType } from './orderType'
import { brandType } from './brandTypes'
import { blogCategoryType } from './blogCategoryType'
import { authorType } from './authorType'
import { addressType } from './addressType'
import { blogType } from './blogType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    blockContentType,
    productType,
    orderType,
    brandType,
    blogType,
    blogCategoryType,
    authorType,
    addressType,
  ],
}
