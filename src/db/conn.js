const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost: 27017/empRegistration" , {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
}).then(() => {
     console.log("connection successful");
}).catch((e) => {
    console.log(e);
})