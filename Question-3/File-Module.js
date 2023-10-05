const fs = require('fs');
const path = require ('path');

const logsDirectory = path.join(__dirname,'Logs');

const removeLogFiles = () => {
    try {
        if(fs.existsSync(logsDirectory)){
            const files = fs.readdirSync(logsDirectory);

            console.log('Files To Delete');
            files.forEach((file) =>{
                console.log(file);
                fs.unlinkSync(path.join(logsDirectory,file))
            });

            fs.rmdirSync(logsDirectory);
            console.log('Logs Directory Removed.');
        }else{
            console.log('Logs Directory Does Not Exist.');
        }
        }catch(error){
            console.log(`Error Removing Log Files: ${error}`);
        }
};

const createLogFiles = () =>{
    try{
        if(!fs.existsSync(logsDirectory)){
            fs.mkdirSync(logsDirectory);
    }

    process.chdir(logsDirectory);
    console.log(`Changed Current Directory To : ${logsDirectory}` );

    for(let i = 0;i < 10;i++){
        const fileName = `log${i}.txt`;
        const textToWrite = `This Is Log File ${i}`;

        fs.writeFileSync(fileName,textToWrite);
        console.log(`Created And Wrote To ${fileName}`);
    }
}catch(error){
    console.log(`Error Creating Logs Files : ${error}`) ;
    } 
};


createLogFiles();
removeLogFiles();