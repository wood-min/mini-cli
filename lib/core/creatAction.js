const axios = require('axios');
const inquirer = require('inquirer');
const createAction = async function(projectName){
    console.log('create执行了');
    const ret = await axios('https://api.github.com/users/zcegg/repos')
    const repos = ret.data.map(itme =>itme.name);
   
    const queList = [{
        type:'list',
        message:"选着目标模板",
        choices:repos,
        name:'tmRepo'
    }
]
    const targetTem = await inquirer.prompt(queList);
    
    const tem_v = await axios(`https://api.github.com/repos/zcegg/${targetTem.tmRepo}/tags`);
   
    const version_l = tem_v.data.map(itme =>targetTem.tmRepo+itme.name)
    const downList = [{
            type:'list',
            message:"选着目标版本",
            choices:version_l,
            name:'version'
        }
    ]
    const version =  await inquirer.prompt(downList);
    console.log("执行下载"+version.version+"操作.....");
}
module.exports = createAction