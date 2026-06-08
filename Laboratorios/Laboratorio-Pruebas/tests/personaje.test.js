const Personaje = require('../src/personaje');

describe('Personaje', () => {
  test('Personaje recién creado tiene vida completa', () => {
    const heroe = new Personaje('Pers1', 100, 15, 5);

    expect(heroe.vidaActual).toBe(100);
  });

  test('recibirDanio reduce la vida correctamente', () => {
    const heroe = new Personaje('Aria', 100, 15, 5);

    heroe.recibirDanio(30);

    expect(heroe.vidaActual).toBe(70);
  });

  test('recibirDanio con valor letal deja la vida en 0', () => {
    const heroe = new Personaje('Pers3', 100, 15, 5);

    heroe.recibirDanio(100);

    expect(heroe.vidaActual).toBe(0);
  });

  test('recibirDanio con valor negativo lanza error', () => {
    const heroe = new Personaje('Pers4', 100, 15, 5);

    expect(() => heroe.recibirDanio(-10)).toThrow();
  });

  test('curar aumenta la vida correctamente', () => {
    const heroe = new Personaje('Pers5', 100, 15, 5);

    heroe.recibirDanio(50);
    heroe.curar(30);

    expect(heroe.vidaActual).toBe(80);
  });

  test('curar nunca excede la vida máxima', () => {
    const heroe = new Personaje('Pers6', 100, 15, 5);

    heroe.curar(50);

    expect(heroe.vidaActual).toBe(heroe.vidaMaxima);
  });

  test('estaVivo retorna true si vida > 0', () => {
    const heroe = new Personaje('Pers7', 100, 15, 5);

    expect(heroe.estaVivo()).toBeTruthy();
  });

  test('estaVivo retorna false si vida = 0', () => {
    const heroe = new Personaje('Pers8', 100, 15, 5);

    heroe.recibirDanio(100);

    expect(heroe.estaVivo()).toBeFalsy();
  });

  test('subirNivel restaura la vida y aumenta stats', () => {
    const heroe = new Personaje('Pers9', 40, 15, 5);
    const vidaAnterior = heroe.vidaMaxima;
    const ataqueAnterior = heroe.ataque;
    const defensaAnterior = heroe.defensa;

    heroe.recibirDanio(20);
    heroe.subirNivel();

    expect(heroe.vidaActual).toBe(heroe.vidaMaxima);
    expect(heroe.vidaMaxima).toBeGreaterThan(vidaAnterior);
    expect(heroe.ataque).toBeGreaterThan(ataqueAnterior);
    expect(heroe.defensa).toBeGreaterThan(defensaAnterior);
  });

  test('ganarExperiencia sube de nivel al pasar el umbral', () => {
    const heroe = new Personaje('Pers10', 100, 15, 5);

    heroe.ganarExperiencia(100);

    expect(heroe.nivel).toBe(2);
  });
});