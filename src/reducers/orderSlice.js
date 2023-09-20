import { createSlice } from "@reduxjs/toolkit";
import bpm from "../../public/ButterPaneerMasala.png"
import chapati from "../../public/Chapati.png"
import pickle from "../../public/Pickle.png"
import gulabjamun from "../../public/GulabJamun.png"
import curd from "../../public/Curd.png"
import daal from "../../public/Daal.png"

const initialState = {
  value: "",
  products: [
    {
      id: 1,
      image:
        bpm,
        description: "Butter Paneer Masala is a rich and creamy Indian dish made with succulent paneer (Indian cottage cheese) cooked in a luscious tomato and cashew gravy, flavored with aromatic spices, and finished with a generous amount of butter for a delightful indulgence. It's a beloved vegetarian curry that combines the goodness of paneer with the irresistible creaminess of butter, making it a true culinary delight.",
      name: "Paneer Butter Masala",
      price: "250",
    },

    {
      id: 2,
      image:
        chapati,
        description: "Roti is a traditional flatbread from the Indian subcontinent, made from whole wheat flour and typically cooked on a hot griddle.It is a staple food in many South Asian countries and is often served with curries or used as a wrap for various fillings.",
      name: "Chapati",
      price: "15",
    },
    {
      id: 3,
      image:daal,
      description: "Daal, also known as lentil soup, is a popular and nutritious dish in South Asian cuisine, made from simmering lentils with aromatic spices and herbs.It is a staple food that provides a good source of plant-based protein and is enjoyed with rice or bread in many households.",
      name: "Dal",
      price: "250",
      
    },
    {
      id: 4,
      image:pickle,
      description: "Tangy and tantalizing, mango pickle bursts with vibrant flavors, adding a delightful zest to any meal. Its mouthwatering blend of spices and the juicy sweetness of ripe mangoes make it a perfect accompaniment for a burst of taste.",
      name: "Pickle",
      price: "20",
    },
    {
      id: 5,
      image:curd,
      description:"Curd, also known as yogurt, is a creamy and tangy dairy product made by fermenting milk with live bacteria cultures, offering a rich source of protein and probiotics.It is often enjoyed as a refreshing accompaniment to meals or used as an ingredient in various culinary preparations, adding a delightful creaminess and distinct flavor.",
      name: "Curd",
      price: "20",
    },
    {
      id: 6,
      image:gulabjamun,
      description:"Gulab jamun is a delectable Indian dessert made from milk solids, deep-fried to a golden brown perfection and soaked in a fragrant sugar syrup. With its irresistibly sweet and syrupy taste, gulab jamun is a cherished treat that melts in your mouth, leaving behind a delightful blend of flavors.",
      name: "Gulab Jamun",
      price: "100",
    },
  ],
  thali: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addTothali: (state, action) => {
      state.thali.push(action.payload);
    },
    RemoveItem:(state,action)=>{
      state.thali.splice(action.payload,1)
   },
   RemoveAllItems: (state) => {
    state.thali = [];
  },
  },
});

export const { addTothali, RemoveItem, RemoveAllItems} = orderSlice.actions;
export default orderSlice.reducer;
