import Donation from "../models/donation.model";
import collegeReadiness from 'src/app/repositories/collegeReadiness.repository'
import diaperProgram from 'src/app/repositories/diaperProgram.repository'
import foodPantry from 'src/app/repositories/foodPantry.repository'
import periodProgram from 'src/app/repositories/periodProgam.repository'

let donationRepository: Donation[] = [...collegeReadiness, ...diaperProgram, ...foodPantry, ...periodProgram];

export default donationRepository;