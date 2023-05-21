docker run -it --rm `
    -v "$(Get-Location):/app" `
    -v "/app/node_modules" `
    -p 3000:3000 `
    -e "CHOKIDAR_USEPOLLING=true" `
    -t "magicdoor-portal-frontend:dev"
