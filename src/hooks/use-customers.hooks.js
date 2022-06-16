import useFetch from 'use-http'
import toast from 'react-hot-toast'
import { useLocalStorage, writeStorage } from '@rehooks/local-storage'
import { API_ENDPOINTS } from 'constants/request.constants'
import { useCallback, useEffect } from 'react'

const notify = (message, severity) => toast[severity](message)

export const useCustomers = () => {
  const [customersState] = useLocalStorage('customers')

  const { get, response, loading, error } = useFetch(
    API_ENDPOINTS.GET_CUSTOMERS,
    { data: [] }
  )

  const loadInitialCustomers = useCallback(async () => {
    const { customers } = await get()

    if (response && error) {
      notify(error.message, 'error')
    }

    if (response.ok) setCustomersState(customers)
  }, [get, response])

  useEffect(() => {
    if (!customersState) loadInitialCustomers()
  }, [loadInitialCustomers, customersState])

  const setCustomersState = customers => {
    writeStorage('customers', customers)
  }

  const addCustomer = customer => {
    if (error && !customersState) return setCustomersState([customer])
    writeStorage('customers', [...customersState, customer])
    notify('Cliente adicionado com sucesso!', 'success')
  }

  const updateCustomer = (id, customer) => {
    const newCustomersState = customersState.map(item => {
      if (item.id === id) {
        return { ...item, ...customer }
      }
      return item
    })
    notify('Cliente atualizado com sucesso!', 'success')
    return writeStorage('customers', newCustomersState)
  }

  const getCustomer = customerId => {
    if (!customerId) return null
    return customersState?.find(customer => customer.id === customerId)
  }

  return {
    customersState,
    loading,
    error,
    updateCustomer,
    getCustomer,
    setCustomersState,
    addCustomer
  }
}
