@echo off
echo Instalando dependencias...
call npm install
if %errorlevel% neq 0 (
    echo Error en npm install
    pause
    exit /b %errorlevel%
)

echo Ejecutando build...
call npm run build
if %errorlevel% neq 0 (
    echo Error en npm run build
    pause
    exit /b %errorlevel%
)

echo Build completado exitosamente!
pause

