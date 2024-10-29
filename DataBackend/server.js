import express from 'express';
const app=express();
app.get('/api/country',(req,res)=>{
    const country=[
        {
            id:1,
            name:'India',
            population: 1300000000
        },
        {
            id:2,
            name:'pakistan',
            population: 2000000000
        },
        {
            id:3,
            name:'USA',
            population: 3000000000
        },
        {
            id:4,
            name:'UK',
            population: 4000000000
        }
    ];
    res.send(country)
});
const  port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
