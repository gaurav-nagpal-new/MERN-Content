import { getDataFromDB } from "../database/db.js";
import Abhinav from "../database/db.js"; // when importing default exports, any name can be used

export function callAPI() {
  console.log("API called");

  // call DB method
  Abhinav();
  getDataFromDB();
}
