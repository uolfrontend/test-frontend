export const STATUS = {
  DEFAULT: 'status',
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  WAITING: 'waiting',
  DISABLED: 'disabled'
}

export const STATUS_LABEL = {
  [STATUS.DEFAULT]: 'Status',
  [STATUS.ACTIVE]: 'Ativo',
  [STATUS.INACTIVE]: 'Inativo',
  [STATUS.WAITING]: 'Aguardando',
  [STATUS.DISABLED]: 'Desativado'
}

export const CUSTOMER_STATUS = Object.values(STATUS).map(status => ({
  value: status,
  label: STATUS_LABEL[status]
}))
