const helpOption = function(program){
    const examples = {
        create: ['mini-cli create|crt <project>'],
        config:[
            'mini-cli config|cfg set <k><v>',
            'mini-cli config|cfg get <k>'
        ]
    }
    
    program.on("--help",() =>{
        console.log('Examples')
        Object.keys(examples).forEach(actionName =>{
            examples[actionName].forEach(item =>{
                console.log('  '+item);
            })
        })
    })
}

module.exports = helpOption