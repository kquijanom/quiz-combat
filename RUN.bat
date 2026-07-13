@echo off
REM Quiz Combat - Iniciar la aplicación

echo ========================================
echo  Quiz Combat - Duelos de Conocimiento
echo ========================================
echo.

REM Opción 1: Abrir directamente en el navegador
echo Abriendo la aplicación en tu navegador...
start "" "%~dp0public\app.html"

echo.
echo La aplicación se ha abierto en tu navegador predeterminado.
echo Si no se abrió automáticamente, ve a:
echo   file:///%~dp0public/app.html
echo.
pause
