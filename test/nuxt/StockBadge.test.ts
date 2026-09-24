import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import StockBadge from '~/components/StockBadge.vue'

describe('StockBadge', () => {
  it('shows "In stock" when the part is in stock', async () => {
    const wrapper = await mountSuspended(StockBadge, {
      props: { inStock: true },
    })

    expect(wrapper.text()).toBe('In stock')
  })

  it('shows "Out of stock" when the part is not in stock', async () => {
    const wrapper = await mountSuspended(StockBadge, {
      props: { inStock: false },
    })

    expect(wrapper.text()).toBe('Out of stock')
  })
})