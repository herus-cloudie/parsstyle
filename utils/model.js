import {Schema , model , models} from 'mongoose'

const ParsStyleSchema = new Schema({
    Email : {
        type : String,
        require : true
    },
    Password : {
        type : String,
        require : true
    },
    Cart : [],
    
} , {timestamps : true}
)
let ParsStyleUser = models.ParsStyleUser || model("ParsStyleUser" , ParsStyleSchema)

export {ParsStyleUser};

const ParsStyleCommentSchema = new Schema({
    text : {
        type : String,
        require : true
    },
    score : {
        type : String,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    id : {
        type : String,
        require : true
    }, 
    recommendation : {
        type : Boolean,
        require : true
    },
    seller : {
        type : String,
        require : true
    }, 
} ,  {timestamps : true})
const ParsStyleComment = models.ParsStyleComment || model("ParsStyleComment" , ParsStyleCommentSchema)
export {ParsStyleComment}
