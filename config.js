const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "McDonaldSibz" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717087726";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_10_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0LFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICA3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0LFxuICAgICAgICA5MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICA0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg3LFxuICAgICAgICA4MixcbiAgICAgICAgODUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk1LFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MixcbiAgICAgICAgMjU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgODUsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDkzLFxuICAgICAgICA2LFxuICAgICAgICAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxVmtFWnJONERnUzlNbkxGRHZtVTlWVHdMcGxqdkh2SVEyRzhTSzhlQm1vPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKV1k2WmZRVlFNT0xkaWRnVGlwNWl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjkxNmJmMTg0LTUzODAtNDJlNy1hYzNjLTY2NTU2Yzk4YjZmMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICA1OSxcbiAgICAgIDIyMixcbiAgICAgIDI1NCxcbiAgICAgIDIzNixcbiAgICAgIDExOSxcbiAgICAgIDE5MixcbiAgICAgIDI2LFxuICAgICAgMTAxLFxuICAgICAgMTc2LFxuICAgICAgMTQyLFxuICAgICAgMjE2LFxuICAgICAgMTY3LFxuICAgICAgMTk4LFxuICAgICAgMjI5LFxuICAgICAgMTMxLFxuICAgICAgMjQxLFxuICAgICAgODMsXG4gICAgICAyMTIsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzUsXG4gICAgICAxOTYsXG4gICAgICAxMSxcbiAgICAgIDExNixcbiAgICAgIDIwLFxuICAgICAgMjAwLFxuICAgICAgMjUxLFxuICAgICAgMTEyLFxuICAgICAgOTEsXG4gICAgICA4OCxcbiAgICAgIDEzNSxcbiAgICAgIDM2LFxuICAgICAgMjI0LFxuICAgICAgMixcbiAgICAgIDExMixcbiAgICAgIDIzOSxcbiAgICAgIDEyMSxcbiAgICAgIDI0NyxcbiAgICAgIDczLFxuICAgICAgMTk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVCTE4xVFBUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTcwODc3MjY6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MTA4NDEwMjA0MzE0OjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09mbHFmNERFSmZhcnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQXljQVZTV2JzbjBYL1hLa1BUOG4zdUtTU2h0dURWS0dvcDgzdWNFL1FqWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUM09xQ1ByUlljSWdDeklSVWhHSWhSWGdTTm5ZNVJ6RUpaUThaYTVpS0JGd2xnKzk3a3JJbUhwOWY2a3pmZE0vYXFydkJhYzI1Y2x3OVpwWTRURzZEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIQzBSWm9HMW12ajNBMm1DWlE3U24wSTl2SWsxRUpsSlNnU241NkE0M0FraWFLbzhFengrVnoyMVkvaWtwN21lNHQ1aUlLWVk1MytPTkFoTHFwTURnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTcwODc3MjY6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQyOTg1MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "McDonald",
  packname: process.env.PACK_NAME || "Sibloe-mcd",
  botname : process.env.BOT_NAME  || "Sibloe-MD",
  ownername:process.env.OWNER_NAME|| "Sibloe",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
