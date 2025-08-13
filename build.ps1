#!/usr/bin/env pwsh

Write-Host "Iniciando build de Next.js..." -ForegroundColor Green

# Verificar que Next.js esté instalado
if (!(Test-Path "node_modules/next")) {
    Write-Host "Next.js no está instalado. Instalando dependencias..." -ForegroundColor Yellow
    npm install
}

# Ejecutar el build
try {
    Write-Host "Ejecutando npm run build..." -ForegroundColor Blue
    npm run build
    Write-Host "Build completado exitosamente!" -ForegroundColor Green
} catch {
    Write-Host "Error durante el build: $_" -ForegroundColor Red
    exit 1
}

