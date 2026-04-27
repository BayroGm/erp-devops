const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint de Salud (Para que App Runner sepa que el ERP no ha tronado)
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'UP', 
        timestamp: new Date().toISOString(),
        env: process.env.NODE_ENV || 'development'
    });
});

// El servicio que pediste: Datos simulados del ERP
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