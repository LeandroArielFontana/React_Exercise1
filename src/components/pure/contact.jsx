import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../model/contact.class';


const ContactComponent = ( { contact }) => {
    return (
        <div>
            <h2>
                Name: { contact.name }
            </h2>
            <h3>
                LastName: { contact.lastName }
            </h3>
            <h4>
                Email: { contact.email }
            </h4>
            <h5>
                Status is: { contact.conected ? 'CONNECTED' : 'DISCONNECTED' }
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
