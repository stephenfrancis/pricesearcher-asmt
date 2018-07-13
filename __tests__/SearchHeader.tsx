
import * as React from "react";
import * as Renderer from "react-test-renderer";
import * as ReactTestUtils from 'react-dom/test-utils';
import { GridListTile, } from '@material-ui/core';

import SearchHeader from "../src/SearchHeader";


test("appearance", () => {

  const setFullTextSearch = jest.fn();

  const component = Renderer.create(
    <SearchHeader setFullTextSearch={setFullTextSearch} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); // modal closed

  const inputs = component.root.findAllByType("input");
  expect(inputs.length).toBe(1); // only 1 tiie component
  expect(setFullTextSearch.mock.calls.length).toBe(0); // not called yet

  // ReactTestUtils.Simulate.change(inputs[0], { target: { value: "some text" } } as any);

  // expect(setFullTextSearch.mock.calls.length).toBe(1);

  // tree.children[0].props.onClick();
  // ReactTestUtils.Simulate.click(tile[0].instance);

  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot(); // modal open
});
