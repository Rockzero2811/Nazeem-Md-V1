const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID|| "put your session_id",
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/R3sxdrc/a2f544d404cedbaa.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "I'Am Online Now 🧚‍♂️",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_VOICE:"true" 
};
