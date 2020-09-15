module.exports = {
    name: 'hello' ,
    description: "this is a hello dm command! ",
    execute(message, args){
        message.author.send('Hi! Nice to meet you');
    }
}