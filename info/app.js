const si = require('systeminformation')
const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

function main(){
   


    si.osInfo().then(async function (os) {
        console.log("os name: " + os.platform)

            si.uuid().then(ids=>{
                console.log( "device uuId: " + JSON.stringify(ids) ) // ids.os.toLowerCase())
            })
        
    })
}
main()