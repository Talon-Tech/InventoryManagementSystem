import Vendor from "../models/vendor.model";
import { v4 as uuidv4} from "uuid";

let vendorArr: Vendor[] = [
    {id: uuidv4(), name: "Food Bank", contactFirst: "Homer", contactLast: "Simpson", contactPhone: "555-555-5555"},
    {id: uuidv4(), name: "Diaper Store", contactFirst: "Bart", contactLast: "Simpson", contactPhone: "555-555-5555"},
    {id: uuidv4(), name: "Grocery Store", contactFirst: "test", contactLast: "test", contactPhone: "555-555-5555"},
];

export default vendorArr