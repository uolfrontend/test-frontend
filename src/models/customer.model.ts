export type Customer = {
  id: string
  name: string
  email: string
  phone: string
  document: string
  status: "ACTIVE" | "INACTIVE" | "DISABLED" | "WAITING_FOR_ACTIVATION"
}