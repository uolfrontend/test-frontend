import React, { createContext, useState, useEffect } from 'react'

const StoreContext = createContext(null)

const StoreProvider = ({
  loadAllCustomers,
  insertAllCustomersCache,
  checkCustomers,
  children,
}) => {
  const defaultValue = {
    isNewCustomer: true,
    loading: false,
    customer: null,
  }

  const [data, setData] = useState(defaultValue)

  useEffect(() => {
    checkCustomers.check().then((check) => {
      if (check) return
      loadAllCustomers
        .loadAll()
        .then((costumers) => {
          insertAllCustomersCache.insertAll(
            costumers.map((customer, index) => ({ ...customer, index }))
          )
          setData((prev) => ({ ...prev, loading: true }))
        })
        .catch((error) => {
          insertAllCustomersCache.insertAll([])
        })
    })
  }, [loadAllCustomers, insertAllCustomersCache])

  const editCustomer = (customer) => {
    setData((prev) => ({
      ...prev,
      isNewCustomer: false,
      customer,
    }))
  }

  const newCustomer = () => {
    setData((prev) => ({
      ...prev,
      isNewCustomer: true,
      customer: null,
    }))
  }

  const resetData = () => {
    setData(defaultValue)
  }

  return (
    <StoreContext.Provider
      value={{ data, editCustomer, newCustomer, resetData }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, StoreProvider }
