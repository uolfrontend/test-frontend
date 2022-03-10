import {FormNewClient} from '../../components/FormNewClient.js'
export function NewClient(props){
    return(
        <>
            <FormNewClient handleState={props.state}/>
        </>
        
    );
}