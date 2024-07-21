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
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://sibloe_mcd_user:sxoy1qOxg9xmwZ7HXgxHxVOf1zzRRQzC@dpg-cqe9u7ogph6c73akeje0-a.oregon-postgres.render.com/sibloe_mcd"

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_44_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICA1MSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgODQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY1LFxuICAgICAgICA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3MixcbiAgICAgICAgODIsXG4gICAgICAgIDkwLFxuICAgICAgICA5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTgxLFxuICAgICAgICA3MyxcbiAgICAgICAgODIsXG4gICAgICAgIDU3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgODAsXG4gICAgICAgIDMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDI3LFxuICAgICAgICA3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDY0LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYTjdUSFVTTlVSbHV1NWl2dVhEditlSzVYWXRKSkwwSTBicjRsbkhNTElvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBYkNhenVhNFRfdUNSUUtlYVFQd1R3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhjOGVhOTFiLWZjZmUtNGI0Yi1iZTMwLTBhNjg0M2RhMTMxZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAxNzUsXG4gICAgICAxNTEsXG4gICAgICAxLFxuICAgICAgOTQsXG4gICAgICAzOSxcbiAgICAgIDkzLFxuICAgICAgOTUsXG4gICAgICA4MixcbiAgICAgIDkxLFxuICAgICAgMTU2LFxuICAgICAgOTIsXG4gICAgICAxNTcsXG4gICAgICAxNjksXG4gICAgICAyMTQsXG4gICAgICAyOCxcbiAgICAgIDE1MyxcbiAgICAgIDEzLFxuICAgICAgNjYsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxMSxcbiAgICAgIDE2MyxcbiAgICAgIDIyNixcbiAgICAgIDIwOSxcbiAgICAgIDMsXG4gICAgICAxNTksXG4gICAgICA1MCxcbiAgICAgIDEyMCxcbiAgICAgIDE3OCxcbiAgICAgIDE4MixcbiAgICAgIDE0NixcbiAgICAgIDEwMixcbiAgICAgIDEwNCxcbiAgICAgIDkzLFxuICAgICAgMjIwLFxuICAgICAgMzEsXG4gICAgICAxMjMsXG4gICAgICA1NixcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTRUhQOFBNSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE3MDg3NzI2OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTEwODQxMDIwNDMxNDoyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdmxxZjRERUxiQThyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkF5Y0FWU1dic24wWC9YS2tQVDhuM3VLU1NodHVEVktHb3A4M3VjRS9Ralk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVnppT3RBVnUvTktzelBrQVB5S2ZGN05zVDlmc3pmZHlESjVBZmt3RmRzSkUwZVZUK2NyTjlWS2RoNnMrN0V4RlJlUm9GNXBVQ3hPcGR2Y3p6VkY4RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMUFaQnFNOXhxTG9hcmNScUhqajlSdFhqTTN6enQ1ZTBaTC9kelJrUGdsTS9Jd1JpbWxVTkkwZHRmeDRMZGlmVTN2SXdTTnlaaloyR1JaeWxZb0lERGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3MDg3NzI2OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1NDA2NjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGUExcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZQTC5qc29uIjogIntcImtleURhdGFcIjpcIlArTVl5R0I3N3pucnNXeDQvUjNzUlpwbkhBclN4RS9hRGMvRnFQNC90aW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3MDIzMjI5NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQyOTYwMDA3M1wifSIKfQ=="  // PUT your SESSION_ID 


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
