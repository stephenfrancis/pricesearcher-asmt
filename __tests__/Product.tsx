
import * as React from "react";
import * as Renderer from "react-test-renderer";
import * as ReactTestUtils from 'react-dom/test-utils';
import { GridListTile, } from '@material-ui/core';

import Product from "../src/Product";


const data = {
  "product_id": "34053722_gb19",
  "price": 299,
  "price_history": {
    "2017-12-03": 349,
    "2018-01-01": 299
  },
  "product_name": "Dyson V7 Animal Cordless Stick Vacuum Cleaner",
  "description": "The Dyson V7 Animal cord-free vacuum is engineered to clean all floor types. For deeper carpet cleaning, the direct-drive cleaner head delivers 75% more brush bar power than the Dyson V6 Cord-free vacuum. Up to 30 minutes of fade-free suction (20 minutes with direct drive cleaner head, or mini motorized tool). Powerful suction generated by the Dyson digital motor. Mini motorised tool for tougher tasks. Direct-drive cleaner head for carpets. Up to 30 minutes of fade-free suction (20 minutes with direct drive cleaner head, or mini motorized tool). Max mode up to 6 minutes of higher suction for tougher tasks. Hygienic bin emptying. docking station stores and charges the machine so it's ready to use . 22. 5 volts. 20 mins running time on full charge. Low battery indicator. Ideal for pet hair. Variable power. Total capacity 0. 54 litre. Includes mini motorised tool, soft dusting brush and tools included. Size H124. 3, W21, D25cm. Weight 2. 3kg. Manufacturer's 2 year parts and labour guarantee.",
  "image_url": "https://img.fruugo.com/product/8/24/33566248_max.jpg",
  "ps_category": "Vacuum > Stick",
  "brand": "Dyson"
};


test("appearance", () => {
  const component = Renderer.create(
    <Product data={data} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); // modal closed

  const tile = component.root.findAllByType(GridListTile);
  expect(tile.length).toBe(1); // only 1 tiie component
  // tree.children[0].props.onClick();
  // ReactTestUtils.Simulate.click(tile[0].instance);

  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot(); // modal open
});
