import { useCallback, useState, useEffect } from 'react';
import { Container } from './style';
import CustomerService from '../../services/CustomerService';
import { ICustomer } from '../../interfaces/ICustomer';
import Customer from '../customer';
import { configDB } from '../../configs/database';

interface Props {
    testing?: boolean
}

const CustomerList = (props: Props) => {
    const { testing } = props;


    useEffect(() => {
        if(!testing)
            getCustomers()
    }, [])

    const [customers, setCustomers] = useState<ICustomer[]>([])

    const getCustomers = useCallback(async () => {
        let ctms: ICustomer[] = [];
        configDB((db) => {
            db.openCursor().onsuccess = async (event) => {
                let customer = event.target.result;
                if (customer) {
                    ctms.push(customer.value)
                    customer.continue()
                } else {
                    const response = await CustomerService.get();

                    response.data.customers.forEach((customer: ICustomer) => {
                        configDB((db: any) => {
                            db.add(customer, customer.id)
                        })
                    })
                    setCustomers(response.data.customers)
                }
                if(customers.length === 0){
                    setCustomers(ctms)
                }
            }
        });

    }, []);

    return (
        <Container data-testid="customer-list">
            {
                customers.map((customer) => {
                    return <Customer key={customer.id} customer={customer} />
                })
            }
            <span style={{
                fontWeight: 200,
                color: '#afafaf',
            }}>Exibindo {customers.length} clientes</span>
        </Container>
    );
};

export default CustomerList;
