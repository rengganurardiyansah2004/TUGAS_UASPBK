import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import ProdukList from '../views/ProdukList.vue'
import { createTestingPinia } from '@pinia/testing'

describe('ProdukList.vue', () => {
  it('renders title', () => {
    const wrapper = mount(ProdukList, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn
        })]
      }
    })

    expect(wrapper.text()).toContain('Daftar Produk Samsung')
  })
})
