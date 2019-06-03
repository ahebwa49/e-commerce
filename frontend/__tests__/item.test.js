import Item from "../components/Item";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

const fakeItem = {
  id: "ABCD",
  title: "A cool item",
  price: 4000,
  description: "This is really cool",
  image: "dog.jpg",
  largeImage: "largedog.jpg"
};

describe("<Item />", () => {
  /*it("renders and displays title and pricetag properly", () => {
    const wrapper = shallow(<Item item={fakeItem} />);
    const PriceTag = wrapper.find("PriceTag");
    console.log(wrapper.debug());
    console.log(PriceTag.children().text());
    expect(PriceTag.children().text()).toBe("$50");
    expect(wrapper.find("Title a").text()).toBe(fakeItem.title);
  });
  it("renders the image properly", () => {
    const wrapper = shallow(<Item item={fakeItem} />);
    const img = wrapper.find("img");
    console.log(img.debug());
    expect(img.props().src).toBe(fakeItem.image);
    expect(img.props().alt).toBe(fakeItem.title);
  });*/
  it("renders and matches the snapshot", () => {
    const wrapper = shallow(<Item item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
