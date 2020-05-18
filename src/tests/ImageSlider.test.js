import React from 'react';
import {
    unmountComponentAtNode,
    render
} from 'react-dom';
import {
    act
} from "react-dom/test-utils";
import ImageSlider from '../components/ImageSlider'
import { shallow } from 'enzyme'



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

it("handle 0 or 1 image", () => {
    act(() => {
        //render(<ImageSlider />, container)
        expect(() => ImageSlider()).toThrow(TypeError);

    })

    const imageUrl = "https://i.imgur.com/TCMSH9Z.png"
    act(() => {
        render(<ImageSlider images={[imageUrl]} />, container)
    })

    expect(container).toMatchSnapshot();

    expect(container.querySelector("img").src).toBe(imageUrl);

    const imageTwo = "https://i.imgur.com/rtA9EKz.jpg"
    act(() => {
        render(<ImageSlider images={[imageTwo, imageUrl]} active={false} />, container)
    })

    expect(container).toMatchSnapshot();

    expect(container.querySelector("img").src).toBe(imageUrl);

    //expect(container.querySelector(".npmIconLink").getAttribute("href")).toBe("https://github.com")


})


it("handle multiple images", () => {

    const imageUrl = "https://i.imgur.com/TCMSH9Z.png"
    const imageTwo = "https://i.imgur.com/rtA9EKz.jpg"
    act(() => {
        render(<ImageSlider images={[imageTwo, imageUrl]} active={false} />, container)
    })

    expect(container).toMatchSnapshot();


    expect(container.querySelector("img").src).toBe(imageTwo);

})


it("check state when inactive", async () => {
    let wrapper;
    const imageUrl = "https://i.imgur.com/TCMSH9Z.png"
    const imageTwo = "https://i.imgur.com/rtA9EKz.jpg"
    act(() => {
        wrapper = shallow(<ImageSlider images={[imageTwo, imageUrl]} active={false} />)
    })

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.state("bottomImage")).not.toBeDefined();

    expect(wrapper.find("img").prop("src")).toEqual(imageTwo);

    expect(wrapper.state("topImage")).toEqual(imageTwo);

    expect(wrapper.state("bottomImage")).not.toBeDefined();

    await wrapper.setState({ bottomImage: "test" });
    expect(wrapper.state("bottomImage")).toEqual("test");

})

it("check state when active", async () => {
    let wrapper;
    const imageUrl = "https://i.imgur.com/TCMSH9Z.png"
    const imageTwo = "https://i.imgur.com/rtA9EKz.jpg"
    act(() => {
        wrapper = shallow(<ImageSlider duration={4000} images={[imageTwo, imageUrl]} active={true} />)
    })

    expect(wrapper).toMatchSnapshot();


    expect(wrapper.find("img").last().prop("src")).toEqual(imageTwo);

    expect(wrapper.state("topImage")).toEqual(imageTwo);

    expect(wrapper.state("bottomImage")).toBeDefined();

    await new Promise(res => setTimeout(() => {
        expect(wrapper.state("topImage")).toEqual(imageUrl);
        expect(wrapper.state("transition")).not.toEqual(0);
        res()

    }, 5000))

    await wrapper.setState({ bottomImage: "test" });
    expect(wrapper.state("bottomImage")).toEqual("test");

})