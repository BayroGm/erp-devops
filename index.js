const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


let TOKEN ="snyk_uat.1fcad39e.eyJlIjoxNzg1MDQ2NzY3LCJoIjoic255ay5pbyIsImoiOiJBWjNObC1hVjJPNkF3azJCSmJjU3hnIiwicyI6IlI0eDlwSTZvUWk2YnA4NFNjVzlaYXciLCJ0aWQiOiJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBIn0.MKj52aA4CzZuTzwn_x8l8KtJHBWQH6bnc7cnDy6surE3dHLUbb46N9Y1FvuDO8tteS_oMJil3ZTh7yeAqWpnAA"
// Endpoint de Salud (Para que App Runner sepa que el ERP no ha tronado)s
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'UP', 
        timestamp: new Date().toISOString(),
        env: process.env.NODE_ENV || 'development'
    });
});

// El servicio que pediste: Datos simulados sdel ERPs
app.get('/api/dashboard', (req, res) => {
    res.json({
        empresa: "Startup ERP Demo",
        modulo: "Ventas Semanales",
        datos: [
            { dia: "Lunes", ventas: 1500 },
            { dia: "Martes", ventas: 2300 },
            { dia: "Miércoles", ventas: 1800 }
        ],
        audit: "Verificado por Tubería DevSecOps"
    });
});

app.get('/', (req, res) => {
    res.send('<h1>ERP Demo: Sistema Blindado con DevOps</h1><p>Estado: Operativo</p>');
});

app.listen(port, () => {
    console.log(`ERP corriendo en http://localhost:${port}`);
});