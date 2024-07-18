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
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_58_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM3LFxuICAgICAgICA0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OSxcbiAgICAgICAgODksXG4gICAgICAgIDk5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU1LFxuICAgICAgICA0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDg3LFxuICAgICAgICA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM2LFxuICAgICAgICA0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDUyLFxuICAgICAgICA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAyLFxuICAgICAgICA4LFxuICAgICAgICA0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDczLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4LFxuICAgICAgICA2OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI2LFxuICAgICAgICA4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ2RVcUIrQmR6RXN4alJUeThqVmtqUml1bnU4UzlYbXMxdzRCR0VDZE4wND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV196MTFibUpUY1dnaERRQ3JWSk1wZ1wiLFxuICBcInBob25lSWRcIjogXCJmMWUxMjk4OC00ODY2LTRlODktYWZkZi02Y2QxYjk3ZTkyODBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgNCxcbiAgICAgIDE0OCxcbiAgICAgIDg5LFxuICAgICAgMjM5LFxuICAgICAgMjE0LFxuICAgICAgMTAsXG4gICAgICA4LFxuICAgICAgMTU5LFxuICAgICAgMTQsXG4gICAgICAxNixcbiAgICAgIDg0LFxuICAgICAgMTc3LFxuICAgICAgMjA2LFxuICAgICAgNDQsXG4gICAgICAxNjQsXG4gICAgICAyMTQsXG4gICAgICAyMDYsXG4gICAgICAxODgsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgMjEsXG4gICAgICAxOTYsXG4gICAgICAyMzYsXG4gICAgICAxOTIsXG4gICAgICAxMjksXG4gICAgICAyMDUsXG4gICAgICAzOSxcbiAgICAgIDE4OSxcbiAgICAgIDY3LFxuICAgICAgMTA2LFxuICAgICAgODEsXG4gICAgICAxMDUsXG4gICAgICAyMjAsXG4gICAgICAyNDMsXG4gICAgICA3OSxcbiAgICAgIDIyNSxcbiAgICAgIDcwLFxuICAgICAgMTg1LFxuICAgICAgMTY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpZV0pSWDJYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTcwODc3MjY6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MTA4NDEwMjA0MzE0OjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09ubHFmNERFUE9HNUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQXljQVZTV2JzbjBYL1hLa1BUOG4zdUtTU2h0dURWS0dvcDgzdWNFL1FqWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3MTlMVUlmOTVuOVBaMTNQaytYdXIzMXBHZFpsWDNBWVZpeks2elkrczN4dDJTTW9pSDJ5blg3dU1rU1BwVEFJdWZJRTl1UmZhSjd1MDJHcTNRbXJBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0TXZXWGdRaU5sK1lybzkweVRxOG8yNXU4L2wzWlIzSHFlNlA0RU8rQjVwTUU4Wm5hOWF6TVMxaUZFcjYzaVVTb3VWK2xjOWdqbjBMYy9rMzFYRXpqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTcwODc3MjY6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMwMzkyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZQTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlBMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUCtNWXlHQjc3em5yc1d4NC9SM3NSWnBuSEFyU3hFL2FEYy9GcVA0L3Rpbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDcwMjMyMjk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNDI5NjAwMDczXCJ9Igp9"  // PUT your SESSION_ID 


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
