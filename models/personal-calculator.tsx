import mongoose from 'mongoose'



/* PetSchema will correspond to a collection in your MongoDB database. */
const personalCalcSchema = new mongoose.Schema({
  vehicleArray: {
    type: Array
  }
})

export default mongoose.models.Pet || mongoose.model('PersonalCalc', personalCalcSchema)
