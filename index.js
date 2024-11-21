const app = require('express')();

const PORT =8080;

app.listen(
    PORT,
    () => console.log(`rver running on ${PORT}`)
);

app.get('/fruits', (req, res)=> {
    res.send({
        apple: 2,
        banana: 12
    })
});
app.get('/vegetables', (req, res)=> {
    res.send({
        tomato: 2,
        potato: 12
    })
});
