import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Body, Composite, Engine, Events, Render, Runner } from 'matter-js';
import { Particle } from '../../particle/particle';

export interface PlaceParticleOptions {
  radius?: number;
  stiffness?: number;
}

const REPULSION_RADIUS = 40;
const REPULSION_STRENGTH = 0.005;
const MIN_REPULSION_SCALE = 0.8;
const PARTICLE_REPULSION_RADIUS = 60;
const PARTICLE_REPULSION_STRENGTH = 0.003;
const GRID_SPACING = 60;

@Component({
  selector: 'app-particle-grid',
  imports: [],
  templateUrl: './particle-grid.html',
  encapsulation: ViewEncapsulation.None,
})
export class ParticleGrid implements OnInit, AfterViewInit {
  @ViewChild('stage') stageRef!: ElementRef<HTMLDivElement>;

  engine!: Engine;
  readonly particles: Particle[] = [];

  private mouseX = 0;
  private mouseY = 0;
  private mouseSpeed = 0;
  private isPointerActive = false;
  private resizeTimer: ReturnType<typeof setTimeout> | null = null;
  private render!: Render;

  ngOnInit(): void {
    this.engine = Engine.create({ gravity: { x: 0, y: 0 } });
  }

  ngAfterViewInit(): void {
    this.render = Render.create({
      element: this.stageRef.nativeElement,
      engine: this.engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: '#ffffff',
      },
    });

    const SPEED_SMOOTHING = 0.2;
    const MAX_SPEED = 50;

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = this.render.canvas.getBoundingClientRect();
      const newX = clientX - rect.left;
      const newY = clientY - rect.top;
      const dx = newX - this.mouseX;
      const dy = newY - this.mouseY;
      const rawSpeed = Math.sqrt(dx * dx + dy * dy);
      this.mouseSpeed = this.mouseSpeed * (1 - SPEED_SMOOTHING) + rawSpeed * SPEED_SMOOTHING;
      this.mouseX = newX;
      this.mouseY = newY;
      this.isPointerActive = true;
    };

    const deactivatePointer = () => {
      this.isPointerActive = false;
      this.mouseSpeed = 0;
    };

    window.addEventListener('mousemove', (e: MouseEvent) => {
      updatePointer(e.clientX, e.clientY);
    });
    document.addEventListener('mouseleave', deactivatePointer);

    window.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      },
      { passive: true },
    );
    window.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      },
      { passive: true },
    );
    window.addEventListener('touchend', deactivatePointer);
    window.addEventListener('touchcancel', deactivatePointer);

    Events.on(this.engine, 'beforeUpdate', () => {
      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        // Mouse repulsion — only active while pointer/touch is on canvas
        if (this.isPointerActive) {
          const speedFactor = Math.min(this.mouseSpeed / MAX_SPEED, 1) + MIN_REPULSION_SCALE;
          const activeRadius = REPULSION_RADIUS * speedFactor;
          const activeStrength = REPULSION_STRENGTH * speedFactor;
          const mdx = p.body.position.x - this.mouseX;
          const mdy = p.body.position.y - this.mouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (activeRadius > 0 && mdist < activeRadius && mdist > 0) {
            const strength = activeStrength * (1 - mdist / activeRadius);
            Body.applyForce(p.body, p.body.position, {
              x: (mdx / mdist) * strength,
              y: (mdy / mdist) * strength,
            });
          }
        }

        // Particle-to-particle repulsion
        for (let j = i + 1; j < this.particles.length; j++) {
          const q = this.particles[j];
          const dx = p.body.position.x - q.body.position.x;
          const dy = p.body.position.y - q.body.position.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < PARTICLE_REPULSION_RADIUS && dist > 0) {
            const strength = PARTICLE_REPULSION_STRENGTH * (1 - dist / PARTICLE_REPULSION_RADIUS);
            const fx = (dx / dist) * strength;
            const fy = (dy / dist) * strength;
            Body.applyForce(p.body, p.body.position, { x: fx, y: fy });
            Body.applyForce(q.body, q.body.position, { x: -fx, y: -fy });
          }
        }
      }
    });

    Runner.run(Runner.create(), this.engine);
    Render.run(this.render);

    this.initializeGrid();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.render.options.width = window.innerWidth;
    this.render.options.height = window.innerHeight;
    this.render.canvas.width = window.innerWidth;
    this.render.canvas.height = window.innerHeight;
    this.render.bounds.max.x = window.innerWidth;
    this.render.bounds.max.y = window.innerHeight;

    if (this.resizeTimer !== null) clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.resizeTimer = null;
      Composite.clear(this.engine.world, false);
      this.particles.length = 0;
      this.initializeGrid();
    }, 150);
  }

  initializeGrid(): void {
    const cols = Math.floor(window.innerWidth / GRID_SPACING);
    const rows = Math.floor(window.innerHeight / GRID_SPACING);
    const offsetX = (window.innerWidth - (cols - 1) * GRID_SPACING) / 2;
    const offsetY = (window.innerHeight - (rows - 1) * GRID_SPACING) / 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        this.placeParticle(offsetX + col * GRID_SPACING, offsetY + row * GRID_SPACING);
      }
    }
  }

  placeParticle(x: number, y: number, options: PlaceParticleOptions = {}): Particle {
    const particle = new Particle(x, y, options.radius, options.stiffness);

    Composite.add(this.engine.world, [particle.body, particle.constraint]);
    this.particles.push(particle);
    return particle;
  }
}
