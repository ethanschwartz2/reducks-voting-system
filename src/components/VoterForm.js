import { useForm } from "../hooks/useForm";

export const VoterForm = props => {
    
    const [ voterForm, change, resetVoterForm] = useForm({
        firstName: '',
        lastName: '',
        address: '',
        countyOrCity: '',
        birthdate: '',
        email: '',
        phone: '',
    });

    const submitVoter = () =>{

        props.onSubmitVoter({ ...voterForm});

        resetVoterForm();
    }

    return(
        <form>
            <br/><br/>
            <table>
            <thead>
                <tr><td>
                First Name:</td><td> <input type="text" name="firstName" value={voterForm.firstName} onChange={change}/>
            </td></tr>
            <tr><td>
                Last Name:</td><td> <input type="text" name="lastName" value={voterForm.lastName} onChange={change}/>
            </td></tr>
            <tr><td>
                Address:</td><td> <input type="text" name="address" value={voterForm.address} onChange={change}/>
            </td></tr>
            <tr><td>
                CountyOrCity:</td><td> <input type="text" name="countyOrCity" value={voterForm.countyOrCity} onChange={change}/>
            </td></tr>
            <tr><td>
                BirthDate:</td><td> <input type="text" name="birthdate" value={voterForm.birthdate} onChange={change}/>
            </td></tr>
            <tr><td>
                Email:</td><td> <input type="text" name="email" value={voterForm.email} onChange={change}/>
            </td></tr>
            <tr><td>
                Phone:</td><td> <input type="text" name="phone" value={voterForm.phone} onChange={change}/>
            </td></tr>
            </thead>
            <tbody><tr><td colSpan="2">
            <button type="button" onClick={submitVoter}>{props.buttonText}</button>
            </td></tr></tbody>
            </table>
      
        </form>
    );
};