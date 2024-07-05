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
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


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
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_45_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjExLFxuICAgICAgICA2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE0LFxuICAgICAgICA2NixcbiAgICAgICAgMjMzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMjIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDU4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDgzLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMxLFxuICAgICAgICAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNixcbiAgICAgICAgODEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1MDhhSkIrWkFnM2VGUkE3cHBIWW5pSjVpeE5WaU50N2Q4V01XcTB5Y1JZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNzA4NzcyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkYwMTI1RDY3MzhCOTc1Nzc2RDM1NDk1NzhCMzQ5MUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTkwNzEwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlwUjdjUUYwUnAyU2VNX1Z4QVVuTmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmI5ZTczNjgtYjFkOC00ZjUzLWJmNGItZWI3OTQ2YmUxYTlhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDM2LFxuICAgICAgMTg4LFxuICAgICAgMjMzLFxuICAgICAgMTMsXG4gICAgICAxMzAsXG4gICAgICAxNTUsXG4gICAgICAyMTYsXG4gICAgICA1MSxcbiAgICAgIDI0MyxcbiAgICAgIDc5LFxuICAgICAgMTYsXG4gICAgICAxMjEsXG4gICAgICA4MCxcbiAgICAgIDE3OSxcbiAgICAgIDIzOSxcbiAgICAgIDM3LFxuICAgICAgMjM2LFxuICAgICAgNSxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY3LFxuICAgICAgNDAsXG4gICAgICA3NCxcbiAgICAgIDQxLFxuICAgICAgMTM2LFxuICAgICAgNzAsXG4gICAgICA1NCxcbiAgICAgIDIzNyxcbiAgICAgIDE5MyxcbiAgICAgIDIwNyxcbiAgICAgIDQ2LFxuICAgICAgMTksXG4gICAgICA1LFxuICAgICAgMjQ5LFxuICAgICAgMTExLFxuICAgICAgOSxcbiAgICAgIDEzOCxcbiAgICAgIDI0OSxcbiAgICAgIDc5LFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVJYVllZNTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNzA4NzcyNjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkxMDg0MTAyMDQzMTQ6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1RscWY0REVPeU5vTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBeWNBVlNXYnNuMFgvWEtrUFQ4bjN1S1NTaHR1RFZLR29wODN1Y0UvUWpZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhGVzlxNUlzUEpvUGlwSno3TFRkQWUvVVk5WVJicmRmU1NQZ0lLWllRc2NJa2pXblg2ajVRdTIvTDVJeE5ueDdjbXRWejBEMnduTXdodVBHdHZscEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdMR1NuNTRlajdWRmVYTkpBcGNyS0FXYUI0UjYrZkUzR1M3a1VqdEp5TnRrRFkza0dHTEF1QjlHanhiQlZqVmE5UVZxaXNGM0RhRHN5b1pZSWplNUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNzA4NzcyNjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTkwNzAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ1JPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDUk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVOUdlQnIwbS9YZVNBb1RvUG5yWDNxODkvUFRFenlRZlcvQTR5L2RTWDljPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNzAyMzIyODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
