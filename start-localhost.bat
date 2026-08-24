@echo off
title TeamPulse Localhost Server
echo ========================================================
echo Starting TeamPulse Localhost at http://localhost:3000
echo ========================================================
cd /d "%~dp0frontend"
cmd /c npm run dev
pause
