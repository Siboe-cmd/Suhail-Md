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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_53_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDExOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5LFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxODIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTY3LFxuICAgICAgICA0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg0LFxuICAgICAgICA4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5engrZTdqL0VOU1lLLzIzdy9MdHJzR0JDUzY4VXpzSCtxZmlLZE5ycW5ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLb0ZvLUtROVQ1aXpYYTNqRWJ1ZUhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ2ZDI2OWJlLTQ4NWEtNDc3NS1iNWNlLTk5ZGZlNDNhZTJlMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDE3MCxcbiAgICAgIDE2MixcbiAgICAgIDgwLFxuICAgICAgMjQsXG4gICAgICAyNCxcbiAgICAgIDM3LFxuICAgICAgNzUsXG4gICAgICAxODMsXG4gICAgICA0OCxcbiAgICAgIDEyMSxcbiAgICAgIDExOSxcbiAgICAgIDU2LFxuICAgICAgMTg4LFxuICAgICAgMTIzLFxuICAgICAgMTcsXG4gICAgICAzMCxcbiAgICAgIDExNSxcbiAgICAgIDgzLFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDEyNSxcbiAgICAgIDk5LFxuICAgICAgMTEwLFxuICAgICAgNzMsXG4gICAgICA1LFxuICAgICAgMTMzLFxuICAgICAgNTIsXG4gICAgICAxOTMsXG4gICAgICAxMDQsXG4gICAgICAyNDMsXG4gICAgICAyMzksXG4gICAgICA2OCxcbiAgICAgIDE2MixcbiAgICAgIDEzMyxcbiAgICAgIDc0LFxuICAgICAgMTM5LFxuICAgICAgMSxcbiAgICAgIDExMSxcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRXVllBU0hOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTcwODc3MjY6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MTA4NDEwMjA0MzE0OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09IbHFmNERFS2JabjdRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQXljQVZTV2JzbjBYL1hLa1BUOG4zdUtTU2h0dURWS0dvcDgzdWNFL1FqWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0Rkk3dEpaYkVLTjhISFV5dFYwcXBsWEZXNWFza1N5U0RaYnBqWHF3aFAzVnlDVDhhUGw3dThGNHdRUkJYU0V1N1B5TGc0QVRncmFMeDhMeERzam5BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBblA0alFENE0vVmNFM09xeFZLRWprMlI5eHdYdlBQeVI2NEt4bzJQaWJ5cDZiUWFEYVJjQkFLa2w1VEZpdkRWU3FTa2QzUnN3YnI4N0Z0NDhQR3BBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTcwODc3MjY6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE4Mzk3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNST1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1JPLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVTlHZUJyMG0vWGVTQW9Ub1BuclgzcTg5L1BURXp5UWZXL0E0eS9kU1g5Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDcwMjMyMjg5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
