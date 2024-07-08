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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_22_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTksXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODksXG4gICAgICAgIDM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgODIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMixcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk1LFxuICAgICAgICA0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDY5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDczLFxuICAgICAgICA1LFxuICAgICAgICA3LFxuICAgICAgICA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NixcbiAgICAgICAgMjUwLFxuICAgICAgICA0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MixcbiAgICAgICAgMTczLFxuICAgICAgICA1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ2xLdWJjWWRVS3Y0eUJvL2YyU0lQZDFNdWNCTm1HNGZncHVWbzZSUlJTOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiejFPOUw3UTlTdnlISVBHaG9nbGo5QVwiLFxuICBcInBob25lSWRcIjogXCIwMjM5M2EzYi00YTFkLTQxOTYtYTEwMC1jZmI1MjUzMDZkOGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMTAzLFxuICAgICAgMTYsXG4gICAgICA2OCxcbiAgICAgIDIxNCxcbiAgICAgIDk0LFxuICAgICAgMTEyLFxuICAgICAgNzAsXG4gICAgICAxMDQsXG4gICAgICAxOTUsXG4gICAgICAxMTQsXG4gICAgICAxNSxcbiAgICAgIDI0LFxuICAgICAgODgsXG4gICAgICAxNTIsXG4gICAgICAyNTQsXG4gICAgICAxNjYsXG4gICAgICAxOTAsXG4gICAgICAyMjMsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgNCxcbiAgICAgIDY5LFxuICAgICAgNCxcbiAgICAgIDE4NyxcbiAgICAgIDE2NyxcbiAgICAgIDIxNixcbiAgICAgIDIwNixcbiAgICAgIDYwLFxuICAgICAgMjAsXG4gICAgICAyNCxcbiAgICAgIDk3LFxuICAgICAgMTY2LFxuICAgICAgMjIsXG4gICAgICAyMjMsXG4gICAgICAxMjcsXG4gICAgICAxMDEsXG4gICAgICA2NyxcbiAgICAgIDE4MyxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGNFJEMjFBTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE3MDg3NzI2OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTEwODQxMDIwNDMxNDoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYmxxZjRERUo3RHJyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkF5Y0FWU1dic24wWC9YS2tQVDhuM3VLU1NodHVEVktHb3A4M3VjRS9Ralk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU1orYkRjTHZYR25TNjhvN0liemJMbjNvdHpVQ24zUXoydzFoMmZTUmFQWmgya3lRU29vZzhidlRsaEIyNnQvcG4vcHVBTk5yQjVvelUvQ2JOaFpTQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNnlORC9tVjgwUTlNRVl1elhZa0JUeThJY1p3bDg0bEJ5R1k0WVVQL2Exa2ZGYW0xMkpBWTRDU05qaEdJNUVFd2VtUzFRcVJ6c3BGcWdSTUJnZkRCQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3MDg3NzI2OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0MjY5MTRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
