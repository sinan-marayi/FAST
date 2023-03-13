const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URL,
  {
    dbName:process.env.DB,
    useNewUrlParser: true,
  }
).then(()=>{
    console.log('mongo connected')
}).catch(err=>{
    console.log(`error: ${err}`)
});
 