import { SAFEProgram } from "./SAFEProgram.type"

export default interface Donation {
    id: string,
    name: string,
    vendor: string,
    program: SAFEProgram,
    quantity: number;
    donationDate?: string
}