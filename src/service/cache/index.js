export const loadAllCustomersCache = (key, cache) => {
  return {
    loadAll: async () => {
      const data = await cache.get(key)
      if (!data) return []
      return data
    },
  }
}

export const insertAllCustomersCache = (key, cache) => {
  const payload = (key, data) => {
    return { [key]: data }
  }

  return {
    insertAll: async (data) => {
      await cache.set(key, payload('customers', data))
    },
  }
}

export const checkCacheExists = (key, cache) => {
  return {
    check: async () => {
      const data = await cache.get(key)
      if (!data) return false
      return true
    },
  }
}

export const handleCustomersCache = (key, cache) => {
  const loadCustomers = async () => {
    const { customers } = await cache.get(key)
    return customers
  }

  const insertAll = async (data) => {
    await insertAllCustomersCache(key, cache).insertAll(data)
  }

  return {
    get: async (keyCustomer) => {
      const customers = loadCustomers()
      const customer = customers.find((customer) => customer.id === keyCustomer)
      if (!customer) return null
      return customer
    },
    set: async (keyCustomer, values) => {
      const customers = await loadCustomers()
      const customerIndex = customers.findIndex(
        (customer) => customer.index === keyCustomer
      )
      if (customerIndex < 0) return null
      customers[customerIndex] = { ...customers[customerIndex], ...values }
      insertAll(customers)
    },
    insert: async (newCustomer) => {
      const customers = await loadCustomers()
      insertAll([...customers, { ...newCustomer, index: customers.length }])
    },
  }
}
