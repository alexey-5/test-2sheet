import { configureStore } from "@reduxjs/toolkit";
import home from './homeSlice'

export default configureStore({
   reducer:{
      home,
   }
})