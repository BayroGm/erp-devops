const { sumar } = require('./utils');

test('Validación de lógica de negocio (IVA/Sumas)', () => {
    expect(sumar(1, 2)).toBe(3); // Cámbialo a 4 para que el demo se ponga ROJO
});