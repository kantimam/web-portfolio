import React from 'react';
import {
    render,
    cleanup,
    fireEvent,
    act,
    waitFor
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactSection from '../components/ContactSection';


afterEach(cleanup);


describe("contact section should handle form submit", () => {
    test("renders correctly", () => {
        const { asFragment, getByText } = render(<ContactSection />)
        expect(asFragment).toBeDefined();

        expect(asFragment).toMatchSnapshot();

        expect(getByText("email")).toBeInTheDocument();
    })

    test("should handle form correctly", () => {
        const { asFragment, getByText, getByTestId } = render(<ContactSection />)
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

        const message = getByTestId("message");
        const email = getByTestId("mail");

        message.nodeValue = "test";
        email.nodeValue = "kantemir.imam@gmail.com"

        act(() => {
            fireEvent.change(message, {
                target: { value: "test" }
            })
            fireEvent.change(email, {
                target: { value: "kantemir.imam@gmail.com" }
            })
        })


        expect(getByText("kantemir.imam@gmail.com")).toBeInTheDocument();

        const submitButton = getByText("SEND MESSAGE");
        act(() => {
            fireEvent.click(submitButton);

        })

        expect(fetch).toHaveBeenCalled();

        waitFor(() => expect(getByText("succesfully send")).toBeInTheDocument())
    })

})