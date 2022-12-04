import { SAFEProgram } from "./SAFEProgram.type"

export default interface Donation {
    id: string,
    name: string,
    vendor: string,
    program: SAFEProgram,
    quantity: number;
    donationDate?: string
}

export const EMPTY_DONATION: Donation = {
  id: "",
  donationDate: "",
  name: '',
  program: "Diaper Program",
  quantity: 0,
  vendor: ''
}
