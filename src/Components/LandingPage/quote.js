import React, {useState} from 'react';
import {Input} from '../Ui/Input';
import {Button} from '../Ui/Button';
import {QuoteOuterContainer, QuoteInnerContainer, FormContainer, QuoteTitle, SuccessMessage} from './styles/quote';

const Quote = () => {

    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [formStatus, setFormStatus] = useState('');

    const handleForm = () => {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if((name !== '') && (phoneNo.length === 10) && (emailRegex.test(email))){
            setName('');
            setPhoneNo('');
            setEmail('');
            setFormStatus(true);
        }else{
            setFormStatus(false);
        }
    }

    return(
        <QuoteOuterContainer>
            <QuoteTitle>Travelling as a group? Get a Quote</QuoteTitle>
            <QuoteInnerContainer>
                <FormContainer>
                    <Input status={formStatus} label={'Your Name'} value={name} onChange={e => setName(e.target.value)} />
                    <Input status={formStatus} label={'Contact No'} value={phoneNo} method={'number'} maxLength={10} onChange={e => setPhoneNo(e.target.value)} />
                    <Input status={formStatus} label={'Email'} value={email} onChange={e => setEmail(e.target.value)} />
                    {formStatus && <SuccessMessage>We hear you! We will get back to you for planning your vacation.</SuccessMessage>}
                </FormContainer>
                <Button onClick={handleForm}>SUBMIT</Button>
            </QuoteInnerContainer>
        </QuoteOuterContainer>
    );
};

export default Quote;