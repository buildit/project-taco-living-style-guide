import React from 'react'
import MenuCategoryItem from 'taco-components/components/2-Molecules/MenuCategoryItem';

const menuItemData = {
    name: "MenuCategoryItem",
    component: (
      <MenuCategoryItem
        name="Drinks"
        reverseType={false}
      />
    ),
    type: "",
    description: 'Displays a single food category, such as "Drinks" or "Tacos".',
    reactComponent: "MenuCategoryItem",
    reactComponentLibrary: "TacoComponents",
    context: {
      children: [],
      parents: ["MenuCategoryList"]
    },
    style: {}
  }

export default menuItemData
