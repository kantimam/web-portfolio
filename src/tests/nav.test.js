import React from 'react';
import {
    render,
    cleanup,
    fireEvent
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Nav from '../components/Nav'

afterEach(cleanup);


test('does not render when invisible', () => {
    const { container } = render(<Nav ></Nav>)

    expect(container).toBeEmpty();
})


test('nav renders correctly', () => {

    const { getByText } = render(<Nav bgOpacity={0.6}></Nav>)

    expect(getByText("projects")).toBeInTheDocument()

    fireEvent.click(getByText("projects"));
})

test('click to work', () => {
    const portfolioFun = jest.fn();
    const contactFun = jest.fn();
    const { asFragment, getByText } = render(<Nav scrollToContact={contactFun} scrollToPortfolio={portfolioFun} bgOpacity={0.6}></Nav>)

    expect(getByText("projects")).toBeInTheDocument()

    expect(asFragment).toMatchSnapshot();

    fireEvent.click(getByText("projects"));

    expect(portfolioFun).toHaveBeenCalledTimes(1);
    expect(contactFun).not.toHaveBeenCalled();

})

