@echo off
title Stop TeamPulse Localhost Server
echo Stopping process running on port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000 ^| findstr LISTENING') do taskkill /F /PID %%a 2>nul
echo Done! Localhost on port 3000 has been stopped.
timeout /t 3
