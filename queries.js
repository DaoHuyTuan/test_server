const Pool = require("pg").Pool;
const pool = new Pool({
    user: 'jlaqphzvtaxxiy',
    host: 'ec2-184-73-216-48.compute-1.amazonaws.com',
    database: 'dfgrfdjse5hont',
    password: '3dce4897c693a2574fc796c6cb9042ba1ff8a4cdaad83b0f86c461da28bdb906',
    port: 5432,
    ssl:true
})
const getData = (request,respond) => {
    respond.header("Access-Control-Allow-Origin", "*");
    respond.header("Access-Control-Allow-Headers", "X-Requested-With");
    pool.query("SELECT * FROM Infor",(error,results) => {
        if(error) {
            console.log(error);
        }
       respond.json(results.rows)
    })
}
const sendData = (request,respond) => {
    respond.header("Access-Control-Allow-Origin", "*");
    respond.header("Access-Control-Allow-Headers", "X-Requested-With");
    const data = request.body;
    const query = 'INSERT INTO Infor( name, dob, phone, cmnd, content, image) VALUES (' 
    + data.name + "," 
    + data.dob + "," 
    + data.phone + "," 
    + data.cmnd + "," 
    + data.des + "," 
    + data.image + ');';
    console.log(query)
    pool.query(query, (error,result) => {
        if(error) {
            console.log(error);
        }
        respond.json(result)
    })
    
}
module.exports = {
    getData,
    sendData
}
