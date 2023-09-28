const Discord = require('discord.js');
const Client = new Discord.Client();
//توکن و چیزی که میخواهید به عنوان اسلش استفاده شود رو مشخص کنید \\
// {
token = ""
slash = ""
// }
slash = slash + " "

Client.on('ready' , () => {
    console.log('Ready!');
});
// شما با کپی گردن این کد میتوانید کامند های جدید اضافه کنید \\
// {
Client.on('message' , (message) => {
    if (message.content === slash + 'Hello'){
        message.reply('Hello')
    }
});
// }
Client.login(token)