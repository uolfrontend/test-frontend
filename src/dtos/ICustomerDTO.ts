export interface ICustomerDTO {
    id: string;
    name: string;
    email: string;
    phone: string;
    // status: "active" | "inactive" | "waiting" | "disabled" | "select";
    status: string;
}
