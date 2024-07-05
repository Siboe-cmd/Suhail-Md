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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_17_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgODUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDExLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDg3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzLFxuICAgICAgICA3MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDg5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMixcbiAgICAgICAgMjksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDcwLFxuICAgICAgICA2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMixcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICA3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQnRadGxnT1h1Y2wxc3l0aTBYakgzQ1pQR2xBdHIyVWtBTXcrSWk2cmtiRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWlpiLWJHZEVUTXFPTnlrdTRMNDNEZ1wiLFxuICBcInBob25lSWRcIjogXCIxNmEyZjMzMS1iZmVjLTQ4NWEtYTJkYi1hNThkMjJhY2UwMTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgMTg3LFxuICAgICAgNjQsXG4gICAgICAxMDcsXG4gICAgICAyMzksXG4gICAgICAxOTUsXG4gICAgICA0NixcbiAgICAgIDYsXG4gICAgICAyMzMsXG4gICAgICAyNDIsXG4gICAgICA3MCxcbiAgICAgIDIwNixcbiAgICAgIDEzOCxcbiAgICAgIDEzNyxcbiAgICAgIDIzOSxcbiAgICAgIDQ0LFxuICAgICAgMjQ4LFxuICAgICAgMTIyLFxuICAgICAgMTMxLFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgMTM3LFxuICAgICAgMjE2LFxuICAgICAgMTM1LFxuICAgICAgMTkwLFxuICAgICAgNzIsXG4gICAgICAxMTMsXG4gICAgICAxMzYsXG4gICAgICAyMzcsXG4gICAgICAxMTMsXG4gICAgICAyMTMsXG4gICAgICAxNTcsXG4gICAgICA1NixcbiAgICAgIDIzMyxcbiAgICAgIDIxOCxcbiAgICAgIDE3MCxcbiAgICAgIDE1OCxcbiAgICAgIDY2LFxuICAgICAgMTE0LFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVE1TUNYVzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNzA4NzcyNjoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkxMDg0MTAyMDQzMTQ6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0xscWY0REVQK0FvTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBeWNBVlNXYnNuMFgvWEtrUFQ4bjN1S1NTaHR1RFZLR29wODN1Y0UvUWpZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkg1Z2p1RlFQcitvNHpLNkNyU1ZuVzNzNTltU0c0VTZnQ1djM1JVb2dlT3IvRmpUejVPZnpCYmhhMmtPSHVPNVgzTWtpMlgyTGhVZWN3RFlDRlRGSUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlMSjRsTVMvdU9EQUhzNTEyZVAxZ1BKZlpqQ3Y0NlRpaW93RnlvNHBJcjVHZDhkVURmNE56VFlSZnBsUStobjhLSDVuN0NmWldtellMMU5CczA3aGpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNzA4NzcyNjoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTg5MDU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ1JPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDUk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVOUdlQnIwbS9YZVNBb1RvUG5yWDNxODkvUFRFenlRZlcvQTR5L2RTWDljPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNzAyMzIyODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
