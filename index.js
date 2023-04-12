const express = require("express")

const app=express()

app.set('views','./static');
app.set('view engine', 'ejs');


// Home
app.get("/",(req,res)=>{
   
    res.render('index');
})


//Clientes
app.get("/clientes",(req,res)=>{
    var clientes= [
        {
            nombre:"Ricardo",
            apellido:"Guerrero",
            edad:"19"
        },
        {
            nombre:"Josue",
            apellido:"Mendoza",
            edad:"21"
        },
        {   
            nombre:"Mario",
            apellido:"Bros",
            edad:"27"
        }
        ];
        res.render('second',{resultado:clientes});
})


//Productos
app.get("/productos",(req,res)=>{
    var productos = [
        {
            nombre:"Agua",
            tipo:"Bebida",
            f_ven:"15/06/2023"
        },
        {
            nombre:"Rips",
            tipo:"Galleta",
            f_ven:"07/10/2023"
        },
        {   
            nombre:"Piqueos",
            tipo:"Snack",
            f_ven:"17/03/2023"
        }
        ];

    res.render('third',{resultado:productos});
})

app.use((req,res)=>{
    res.status(404).send("No se encontro tu página")
})

const a = 5000
app.listen(a)
console.log("Server on port " + a )