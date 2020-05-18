import React from 'react';
import {
    unmountComponentAtNode,
    render
} from 'react-dom';
import {
    act
} from "react-dom/test-utils";
import NpmIcon from '../components/NpmIcon'



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
        render(<NpmIcon />, container)
    })

    expect(container).toBeDefined();

    act(() => {
        render(<NpmIcon packageLink="https://github.com" />, container)
    })

    expect(container.querySelector(".npmIconLink").getAttribute("href")).toBe("https://github.com")
})