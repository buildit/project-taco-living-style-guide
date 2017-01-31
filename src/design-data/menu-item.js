import React from 'react'
import MenuItem from 'taco-components/components/2-Molecules/MenuItem';

const menuItemData = {
    name: "MenuItem",
    component: (
      <MenuItem
        name="Funny Taco Things"
        quantity={1}
        price="2.99"
      />
    ),
    type: "",
    description: "Displays a single item from the menu with the item price and the quantity the user has selected.",
    reactComponent: "MenuItem",
    reactComponentLibrary: "TacoComponents",
    context: {
      children: ["QuantityPicker"],
      parents: ["MenuItemList"]
    },
    style: {},
    approved: true,
  }

export default menuItemData
