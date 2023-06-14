import React, { useState } from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';



function FlutterWavePayment({ amount, email, username, descrition}) {
    

    function getCurrentTime() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');
        const currentTime = `${year}-${month}-${day},${hours}:${minutes}:${seconds}`;

        return currentTime;
    }



   









    const config = {
        public_key: 'FLWPUBK_TEST-03db37124e5570cb191b65425abfb963-X',
        tx_ref: Date.now(),
        amount: amount,
        currency: 'UGX',
        payment_options:'card',
        customer: {
            email: email,
            name: username,
        },
        customizations: {
            title: 'AVHA UGANDA DONATION',
            description: '',
        },
    };

    const fwConfig = {
        ...config,
        text: 'Donate',
        callback: (response) => {
            console.log(response);
            // closePaymentModal() // this will close the modal programmatically

            if (response.status === 'successful') {
                try {

                    closePaymentModal();
                    console.log('Everything successful');

                } catch (error) {
                    console.error('Error saving date and time:', error);
                }
            }

        },
        onClose: () => { console.log('oi') },
    };

    return (
        <div className="App">

            <FlutterWaveButton {...fwConfig} className="rounded bg-green-800 text-white p-2">

            </FlutterWaveButton>

        </div>
    );
}
export default FlutterWavePayment;