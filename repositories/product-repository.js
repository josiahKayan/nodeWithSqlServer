var sql = require('mssql');
const dbConfig = require('../connection/connection');


//Logar
// app.get( '/create', function(req,res){
//     res.send({token:createUserToken(1)});
// });

//GET ALL PRODUCTS API
exports.getAll = (req,res) => {
    var query = "select * from Produto";
    return executeQuery(1, query);
};

//GET PRODUCT BY ID API
exports.get =  (id) => {
    var query = "select * from Produto where ProdutoId = "+ id;
    return executeQuery(1, query);
};

//POST API
exports.post = ( produtoNome, preco) => {
    var query = "Insert into Produto values('"+produtoNome+"',"+preco +")";
    return executeQuery(1, query);
};

//PUT API
exports.put = (produtoNome, preco,id) => {
    var query = "UPDATE Produto SET ProdutoNome= '" + produtoNome  +  "' , Preco=  " + preco + "  WHERE ProdutoId= " + id;
    return executeQuery (1, query);
};

// DELETE API
exports.delete = (id) =>{
    var query = "DELETE FROM Produto WHERE ProdutoId=" + id;
    return executeQuery (1, query);
};








//Function to connect to database and execute query
var executeQuery = function(res , query){

    return new Promise( function( resolve,reject  ){

        sql.connect( dbConfig , function (err){

                if(err){
                    console.log("Error while connecting database:-" + err);
                    reject(err);
                }
                else{
                    //create Request object
                    var request = new sql.Request();
                    //query to the database
                    request.query( query , function(err, rs){
                        if(err){
                            console.log("Error while querying database: - "+err);
                            sql.close();
                            // res.send(err);
                            reject( err );
                        }
                        else{
                            sql.close();
                            // res.send(rs.recordset);
                            resolve( rs.recordset );
                        }
                    });
                }

        });
    });
}