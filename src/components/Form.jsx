import { useState } from "react";

function Form(){
    const [formData, setFormData] = useState({});

    const handleAgeChange = (e)=>{
        setFormData(oldFormData => ({...oldFormData, age: e.target.value}));
    }
    const handleFirstNameChange = (e)=>{
        setFormData(oldFormData => ({...oldFormData, firstName: e.target.value}));
    }
    const handleLastNameChange = (e)=>{
        setFormData(oldFormData => ({...oldFormData, lastName: e.target.value}));
    }
    const handleEmailChange = (e)=>{
        setFormData(oldFormData => ({...oldFormData, email: e.target.value}));
    }

    return (<form>
        <div>age is: {formData.age}</div>
        <div>first name is: {formData.firstName}</div>
        <div>last name is: {formData.lastName}</div>
        <div>email is: {formData.email}</div>
        <div>
            <label>Age</label>
            <input type="number" name="age" onChange={handleAgeChange} value={formData.age} />
        </div>
        <div>
        <label>first name</label>
            <input type="text" name="firstName" onChange={handleFirstNameChange} value={formData.firstName} />
        </div>
        <div>
        <label>last name</label>
            <input type="text" name="lastName" onChange={handleLastNameChange} value={formData.lastName} />
        </div>
        <div>
        <label>Email</label>
         <input type="email" name="email" onChange={handleEmailChange} value={formData.email} />
        </div>
    </form>);
}
export default Form;