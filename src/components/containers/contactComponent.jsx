import React from 'react';
import { Contact } from '../../model/contact.class';
import ContactComponent from '../pure/contact';


const ListContactComponent = () => {

    const defaultContact = new Contact('Leandro', 'Fontana', 'leandroFontana@mail.com', true)

    return (
        <div>
            <div>
                <h1>
                    Your Contact: 
                </h1>
            </div>
            <ContactComponent contact={ defaultContact }></ContactComponent>
        </div>
    );
};

export default ListContactComponent;
