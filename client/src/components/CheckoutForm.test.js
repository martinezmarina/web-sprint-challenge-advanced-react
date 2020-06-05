import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)

    const header = getByText(/checkout form/i);

    expect(header).toBeInTheDocument();
});



test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByTestId, getByText } = render(<CheckoutForm />)
    const firstNameInput = getByLabelText(/first name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const addressInput = getByLabelText(/address/i)
    const cityInput = getByLabelText(/city/i)
    const stateInput = getByLabelText(/state/i)
    const zipInput = getByLabelText(/zip/i)
    const checkoutButton = getByTestId(/checkout/i)

    fireEvent.change(firstNameInput, { target: { value: 'Marina' } });
    fireEvent.change(lastNameInput, { target: { value: 'Martinez' } });
    fireEvent.change(addressInput, { target: { value: '1234 EasyStreet' } });
    fireEvent.change(cityInput, { target: { value: 'Raleigh' } });
    fireEvent.change(stateInput, { target: { value: 'NC' } });
    fireEvent.change(zipInput, { target: { value: '27615' } });
    fireEvent.click(checkoutButton);


    const successMessage = getByText(/woo-hoo!/i)
    expect(successMessage).toBeInTheDocument();
});
