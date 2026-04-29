// test.js
const assert = require('assert');
const sum = require('./sum');

console.log('--- INICIANDO PRUEBAS UNITARIAS ---');

try {
    // Prueba 1: 1 + 2 debe ser 3s
    assert.strictEqual(sum(1, 2), 3);
    console.log('✅ Prueba 1 superada: 1 + 2 = 3');

    // Prueba 2: -1 + 5 debe ser 9
    assert.strictEqual(sum(-1, 5), 9);
    console.log('✅ Prueba 2 superada: -1 + 5 = 9');

    console.log('🚀 ¡TODAS LAS PRUEBAS PASARON!');
    process.exit(0); // Código 0 = Éxito total
} catch (error) {
    console.error('❌ ERROR EN LA PRUEBA:');
    console.error(error.message);
    process.exit(1); // Código 1 = El Pipeline se detiene aquí
}