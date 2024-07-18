const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Harare,Zimbabwe."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Harare";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Powered by McDonaldSibz" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_29_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDUwLFxuICAgICAgICA0NixcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg5LFxuICAgICAgICA4MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDY3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMTE2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICA0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI3LFxuICAgICAgICA0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NixcbiAgICAgICAgMTU5LFxuICAgICAgICA5NSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDM4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MixcbiAgICAgICAgODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM2LFxuICAgICAgICA1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL21jS1o2VkRqeFpERjhxRFN4V0VWTmVBcjMzMEd2TGlKMUtIanBXZ0dTVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYlc4cC11NmpTaVNKRFVFVmpiUWZiUVwiLFxuICBcInBob25lSWRcIjogXCJiYmE2ZTMyNC05YzE1LTQ0ODAtYTU3Yy1hM2JhNmE3ZTFkZDRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMTE2LFxuICAgICAgNDYsXG4gICAgICAxODMsXG4gICAgICAxMDksXG4gICAgICAxNjgsXG4gICAgICAxNDYsXG4gICAgICAxNjEsXG4gICAgICAyMTksXG4gICAgICAzMCxcbiAgICAgIDI0MixcbiAgICAgIDEyNSxcbiAgICAgIDE3MyxcbiAgICAgIDE5NSxcbiAgICAgIDE3MSxcbiAgICAgIDI4LFxuICAgICAgMTEwLFxuICAgICAgMTM4LFxuICAgICAgMjEyLFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMjI0LFxuICAgICAgMjE0LFxuICAgICAgMzYsXG4gICAgICA3NSxcbiAgICAgIDE4NCxcbiAgICAgIDE4LFxuICAgICAgMTMxLFxuICAgICAgMTAwLFxuICAgICAgMTYsXG4gICAgICAyMzcsXG4gICAgICAxOTAsXG4gICAgICAyMDEsXG4gICAgICAxMzksXG4gICAgICA1MSxcbiAgICAgIDEzOCxcbiAgICAgIDkyLFxuICAgICAgMTcwLFxuICAgICAgNjIsXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlNFSldCS1lcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNzA4NzcyNjoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkxMDg0MTAyMDQzMTQ6MjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3JscWY0REVKZVY1TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBeWNBVlNXYnNuMFgvWEtrUFQ4bjN1S1NTaHR1RFZLR29wODN1Y0UvUWpZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInF5cmp3YzJSUGZ5RmlHRUZTblMwWHg0cFo2Y05QNVV4aW1HOG1YU2xtVzBtQ09td1JCRTJxRXlKd3dzT3Y4SzNyUGd0MUNGM1pEYk4yTXZEU1BOSkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRTTlIvSjM4b0Uwb2E1VkJ4Y2ZPSkc5Nzh3NTZpOHc5N3l5a3ZGTE9RMUJNb0hzVHNaV3FoWm5GZGY1bnA3RHZhYWQwVjFSSnJ5TGtXT29sbjhIOEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNzA4NzcyNjoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzA1NzU0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRlBMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGUEwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQK01ZeUdCNzd6bnJzV3g0L1Izc1JacG5IQXJTeEUvYURjL0ZxUDQvdGlvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNzAyMzIyOTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0Mjk2MDAwNzNcIn0iCn0="  // PUT your SESSION_ID 


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
