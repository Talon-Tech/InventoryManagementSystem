import { SAFEProgram } from "./SAFEProgram.type"

export default interface Donation {
    id: string,
    name: string,
    donator: string,
    program: SAFEProgram,
    quantity: number;
}