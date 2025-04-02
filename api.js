let express = require('express');
let app=express();

app.listen(3000,()=>{
  console.log('Server is running on port 3000');
});
// api  
app.get('/',(request,response)=>{
  response.send(
    [{
        name: 'meet',
        age: 21,
        city: 'Ahmedabad'
    },
{
    name: 'meet',
    age: 21,
    city: 'Ahmedabad'
}]
  )
})
