import { describe, it, expect, beforeEach } from 'vitest';
import { Composite } from 'matter-js';
import { ParticleGrid } from './particle-grid';

describe('ParticleGrid', () => {
  let grid: ParticleGrid;

  beforeEach(() => {
    grid = new ParticleGrid();
    grid.ngOnInit();
  });

  it('should create an engine on init', () => {
    expect(grid.engine).toBeDefined();
  });

  it('should place a particle at the given pixel coordinates', () => {
    const particle = grid.placeParticle(100, 200);
    expect(particle.body.position.x).toBe(100);
    expect(particle.body.position.y).toBe(200);
  });

  it('should register the particle in the particles array', () => {
    grid.placeParticle(100, 200);
    expect(grid.particles).toHaveLength(1);
  });

  it('should add the particle body to the composite', () => {
    const particle = grid.placeParticle(100, 200);
    expect(Composite.allBodies(grid.engine.world)).toContain(particle.body);
  });

  it('should add the particle constraint to the composite', () => {
    const particle = grid.placeParticle(100, 200);
    expect(Composite.allConstraints(grid.engine.world)).toContain(particle.constraint);
  });

  it('should support placing multiple particles', () => {
    grid.placeParticle(0, 0);
    grid.placeParticle(100, 100);
    expect(grid.particles).toHaveLength(2);
    expect(Composite.allBodies(grid.engine.world)).toHaveLength(2);
    expect(Composite.allConstraints(grid.engine.world)).toHaveLength(2);
  });

  it('should forward custom options to the particle', () => {
    const particle = grid.placeParticle(50, 50, { radius: 12, stiffness: 0.1 });
    expect(particle.radius).toBe(12);
    expect(particle.constraint.stiffness).toBe(0.1);
  });

  it('should use particle defaults when no options are given', () => {
    const particle = grid.placeParticle(50, 50);
    expect(particle.radius).toBe(5);
    expect(particle.constraint.stiffness).toBe(0.003);
  });

  it('should create a particle for each grid cell based on window size', () => {
    const savedWidth = window.innerWidth;
    const savedHeight = window.innerHeight;
    Object.defineProperty(window, 'innerWidth', { value: 300, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 240, configurable: true });
    grid.initializeGrid();
    Object.defineProperty(window, 'innerWidth', { value: savedWidth, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: savedHeight, configurable: true });

    // cols = floor(300 / 60) = 5, rows = floor(240 / 60) = 4 → 20 particles
    expect(grid.particles).toHaveLength(20);
    expect(Composite.allBodies(grid.engine.world)).toHaveLength(20);
    expect(Composite.allConstraints(grid.engine.world)).toHaveLength(20);
  });

  it('should space particles GRID_SPACING apart', () => {
    const savedWidth = window.innerWidth;
    const savedHeight = window.innerHeight;
    Object.defineProperty(window, 'innerWidth', { value: 180, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: 120, configurable: true });
    grid.initializeGrid();
    Object.defineProperty(window, 'innerWidth', { value: savedWidth, configurable: true });
    Object.defineProperty(window, 'innerHeight', { value: savedHeight, configurable: true });

    // cols = 3, rows = 2 → 6 particles; check that x-neighbours are 60px apart
    const bodies = Composite.allBodies(grid.engine.world);
    const firstRowBodies = bodies.filter((b) => Math.abs(b.position.y - bodies[0].position.y) < 1);
    expect(firstRowBodies).toHaveLength(3);
    const xPositions = firstRowBodies.map((b) => b.position.x).sort((a, b) => a - b);
    expect(xPositions[1] - xPositions[0]).toBeCloseTo(60);
    expect(xPositions[2] - xPositions[1]).toBeCloseTo(60);
  });
});
