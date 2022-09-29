import Organization from "../models/org.model";
import { v4 as uuidv4} from "uuid";

let orgArray: Organization[] = [
    {id: uuidv4(), orgName: "Food Bank", orgContactFirstName: "Homer", orgContactLastName: "Simpson", orgContactPhone: "555-555-5555"},
    {id: uuidv4(), orgName: "Diaper Store", orgContactFirstName: "Bart", orgContactLastName: "Simpson", orgContactPhone: "555-555-5555"},
    {id: uuidv4(), orgName: "Grocery Store", orgContactFirstName: "test", orgContactLastName: "test", orgContactPhone: "555-555-5555"},
];

export default orgArray