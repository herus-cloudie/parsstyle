import {Schema , model , models} from 'mongoose'



let ParsStyleSchema = new Schema({
    Email : {
        type : String,
        require : true
    },
    Password : {
        type : String,
        require : true
    },
    Cart : {
        default : []
    },
    
} , {timestamps : true}
)

let ParsStyleUser = models.ParsStyleUser || model("ParsStyleUser" , ParsStyleSchema)

export default ParsStyleUser