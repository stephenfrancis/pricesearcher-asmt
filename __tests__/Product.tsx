
import * as Jsdom from "jsdom";
import * as Data from "../__test_data/Product.json";

// A super simple DOM ready for React to render into
// Store this DOM and the window in global scope ready for React to access
global["document"] = new Jsdom.JSDOM("<!doctype html><html><body></body></html>");
global["window"] = document["parentWindow"];

// React import must be placed AFTER jsdom setup
import * as React from "react";
import * as ReactTestUtils from 'react-dom/test-utils';
import { GridListTile, } from '@material-ui/core';
import Product, { Props, State } from "../src/Product";


test("appearance", () => {
  // const renderer = ShallowRenderer.createRenderer();

  const element = <Product data={Data} />;

  const comp = ReactTestUtils.renderIntoDocument(element) as React.Component<any, any>;
  // console.log(JSON.stringify(component.getInstance()));
  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot(); // modal closed
  // if (!comp) {
  //   throw new Error();
  // }

  expect(ReactTestUtils.isElement(element)).toBe(true);
  const tile = ReactTestUtils.scryRenderedComponentsWithType(comp,
    GridListTile as any);


  // const result = renderer.getRenderOutput();

  // const tile = component.root.findAllByType(GridListTile);
  expect(comp.state.modal_open).toBe(false);
  expect(tile.length).toBe(1); // only 1 tiie component
  // tree.children[0].props.onClick();

  const divs1 = ReactTestUtils.scryRenderedDOMComponentsWithTag(comp, "div");

  ReactTestUtils.Simulate.click(divs1[1]);

  expect(comp.state.modal_open).toBe(true);

  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot(); // modal open
});
