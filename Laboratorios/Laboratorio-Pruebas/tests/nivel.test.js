const { calcularRecompensa } = require('../src/nivel');

describe('calcularRecompensa', () => {
  // 
  test("enemigo 3+ niveles abajo (≤ -3)", () => {
    // Arrange
    const xpBase = 100;
    const nivelEnemigo = 2;
    const nivelPersonaje = 5;

    // Act
    const xp = calcularRecompensa(
      xpBase,
      nivelEnemigo,
      nivelPersonaje
    );

    // Assert
    expect(xp).toBe(50);
  });
  // enemigo 1 ó 2 abajo (−2 a −1)
  test("enemigo 1 ó 2 abajo (-2 a -1)", () => {
    // Arrange
    const xpBase = 100;
    const nivelEnemigo = 3;
    const nivelPersonaje = 5;

    // Act
    const xp = calcularRecompensa(
      xpBase,
      nivelEnemigo,
      nivelPersonaje
    );

    // Assert
    expect(xp).toBe(75);
  });
  // mismo nivel (0)
  test("mismo nivel (0)", () => {
    // Arrange
    const xpBase = 100;
    const nivelEnemigo = 5;
    const nivelPersonaje = 5;

    // Act
    const xp = calcularRecompensa(
      xpBase,
      nivelEnemigo,
      nivelPersonaje
    );

    // Assert
    expect(xp).toBe(100);
  });
  // enemigo 1 ó 2 arriba (1 a 2)
  test("enemigo 1 ó 2 arriba (1 a 2)", () => {
    // Arrange
    const xpBase = 100;
    const nivelEnemigo = 7;
    const nivelPersonaje = 5;

    // Act
    const xp = calcularRecompensa(
      xpBase,
      nivelEnemigo,
      nivelPersonaje
    );

    // Assert
    expect(xp).toBe(150);
  });
  // enemigo 3+ arriba (≥ 3)
  test("enemigo 3+ arriba (≥ 3)", () => {
    // Arrange
    const xpBase = 100;
    const nivelEnemigo = 8;
    const nivelPersonaje = 5;

    // Act
    const xp = calcularRecompensa(
      xpBase,
      nivelEnemigo,
      nivelPersonaje
    );

    // Assert
    expect(xp).toBe(200);
  });

});