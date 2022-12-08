import Donation from "../models/donation.model";
import collegeReadiness from 'src/app/repositories/collegeReadiness.repository'
import diaperProgram from 'src/app/repositories/diaperProgram.repository'
import foodPantry from 'src/app/repositories/foodPantry.repository'
import periodProgram from 'src/app/repositories/periodProgam.repository'

let donationRepository: Donation[] = [
    { id: '0001', name: 'Canned Black Beans', vendor: 'Food Bank', program: 'Food Pantry', donationDate: '9/01/2022', quantity: 20},
    { id: '0007', name: 'Canned Corn Beef', vendor: 'Publix', program: 'Food Pantry', donationDate: '9/01/2022', quantity: 20},
    { id: '0006', name: 'Canned Corn', vendor: 'Grocery Store', program: 'Food Pantry', donationDate: '9/01/2022', quantity: 20},
    { id: '0005', name: 'Canned Pinto Beans', vendor: 'Publix', program: 'Food Pantry', donationDate: '9/01/2022', quantity: 20},
    { id: '0004', name: 'Canned Vienna Sausages', vendor: 'Publix', program: 'Food Pantry', donationDate: '9/01/2022', quantity: 20},
    { id: '0003', name: 'Bag of Rice', vendor: 'Publix', program: 'Food Pantry', donationDate: '9/01/2022', quantity: 20},
    { id: '0002', name: 'Bag of Lo Mein Noodles', vendor: 'Publix', program: 'Food Pantry', donationDate: '9/01/2022', quantity: 20},
  ];;

export default donationRepository;