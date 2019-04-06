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
    pool.query("SELECT * FROM Infor",(error,results) => {
        if(error) {
            console.log(error);
        }
        console.log(respond.json(results.rows))
    })
}
module.exports = {
    getData
}