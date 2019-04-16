import ItemComponent from "../components/Item";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

const fakeItem = {
  id: "12345",
  title: "A cool item",
  description: "This item is really cool",
  price: 4000,
  image: "dog.jpg",
  largeImage: "largeImage.jpg"
};

describe("<Item />", () => {
  it("renders and matches the matches the snapshot", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  /*it("renders and displays the title and pricetag", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const PriceTag = wrapper.find("PriceTag");
    //console.log(PriceTag.children().text());
    //console.log(wrapper.debug());
    expect(PriceTag.children().text()).toBe("$50");
    expect(wrapper.find("Title a").text()).toBe(fakeItem.title);
  });
  it("renders the image properly", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const img = wrapper.find("img");
    //console.log(img.debug());
    expect(img.props().src).toBe(fakeItem.image);
    expect(img.props().alt).toBe(fakeItem.title);
  });
  it("renders out the buttons properly", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //console.log(wrapper.debug());
    const buttonList = wrapper.find(".buttonList");
    console.log(buttonList.debug());
    console.log(buttonList.children().length);
    expect(buttonList.children()).toHaveLength(3);
    expect(buttonList.find("Link").exists()).toBe(true);
    expect(buttonList.find("Link")).toHaveLength(1);
    expect(buttonList.find("Link")).toBeTruthy();
    expect(buttonList.find("AddToCart").exists()).toBe(true);
    expect(buttonList.find("DeleteItem").exists()).toBe(true);
  });*/
});
