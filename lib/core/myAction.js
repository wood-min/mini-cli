const createAction = require('./creatAction')

const myAction = function(program){
    program.command('create <project>[others...]')
    .alias('crt')
    .description('create project') 
    .action(createAction);
    program
    .command('config <project> [others...]')
    .alias('cfg')
    .description('配置项目')
    .action((name,args) =>{

    })
}

module.exports=myAction