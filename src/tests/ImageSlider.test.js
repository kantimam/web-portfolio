import React from 'react';
import {
    unmountComponentAtNode,
    render
} from 'react-dom';
import {
    act
} from "react-dom/test-utils";
import ImageSlider from '../components/ImageSlider'



let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("displays the right link", () => {
    act(() => {
        render(<ImageSlider />, container)
    })

    expect(container).toBeDefined();

    /* act(() => {
        render(<NpmIcon packageLink="https://github.com" />, container)
    })

    expect(container.querySelector(".npmIconLink").getAttribute("href")).toBe("https://github.com") */


})