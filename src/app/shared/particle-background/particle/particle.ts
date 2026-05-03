import { Bodies, Body, Constraint } from 'matter-js';

export class Particle {
  readonly x: number;
  readonly y: number;
  readonly radius: number;
  readonly stiffness: number;
  readonly body: Body;
  readonly constraint: Constraint;

  constructor(x = 0, y = 0, radius = 5, stiffness = 0.003) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.stiffness = stiffness;

    this.body = Bodies.circle(x, y, radius, {
      render: {
        fillStyle: 'oklch(96.8% 0.007 247.896)',
      },
    });
    this.constraint = Constraint.create({
      bodyA: this.body,
      pointB: { x, y },
      stiffness,
      length: 0,
      render: { visible: false },
    });
  }
}
