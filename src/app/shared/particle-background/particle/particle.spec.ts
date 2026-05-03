import { describe, it, expect, beforeEach } from 'vitest';
import { Particle } from './particle';

describe('Particle', () => {
  let particle: Particle;

  beforeEach(() => {
    particle = new Particle(100, 200, 10);
  });

  it('should create a body and constraint on init', () => {
    expect(particle.body).toBeDefined();
    expect(particle.constraint).toBeDefined();
  });

  it('should position the body at the given coordinates', () => {
    expect(particle.body.position.x).toBe(100);
    expect(particle.body.position.y).toBe(200);
  });

  it('should use a variable radius', () => {
    expect(particle.radius).toBe(10);
  });

  it('should attach the constraint to its own body', () => {
    expect(particle.constraint.bodyA).toBe(particle.body);
  });

  it('should anchor the constraint to the initial position', () => {
    expect(particle.constraint.pointB).toEqual({ x: 100, y: 200 });
  });

  it('should use default stiffness', () => {
    const p = new Particle();
    expect(p.constraint.stiffness).toBe(0.003);
  });

  it('should accept custom stiffness', () => {
    const p = new Particle(0, 0, 5, 0.1);
    expect(p.constraint.stiffness).toBe(0.1);
  });

  it('should have zero rest length so it pulls toward origin', () => {
    expect(particle.constraint.length).toBe(0);
  });
});
