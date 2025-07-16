<!-- src/lib/components/ParticleCanvasBackground.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	interface Particle {
		x: number;
		y: number;
		size: number;
		speedX: number;
		speedY: number;
		opacity: number;
	}

	let canvasElement: HTMLCanvasElement;

	onMount(() => {
		const canvas = canvasElement;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationFrameId: number;
		let particles: Particle[] = [];

		const resizeCanvas = () => {
			// Use parentElement dimensions for better layout fitting
			const parent = canvas.parentElement;
			if (parent) {
				canvas.width = parent.clientWidth;
				canvas.height = parent.clientHeight;
			}
		};

		const createParticles = () => {
			particles = [];
			const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);

			for (let i = 0; i < numberOfParticles; i++) {
				particles.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					size: Math.random() * 2 + 0.5,
					speedX: Math.random() * 0.5 - 0.25,
					speedY: Math.random() * 0.5 - 0.25,
					opacity: Math.random() * 0.5 + 0.2
				});
			}
		};

		const drawParticles = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			particles.forEach((particle) => {
				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(148, 163, 184, ${particle.opacity})`; // slate-400
				ctx.fill();

				particle.x += particle.speedX;
				particle.y += particle.speedY;

				// Wrap particles around screen edges
				if (particle.x < 0) particle.x = canvas.width;
				if (particle.x > canvas.width) particle.x = 0;
				if (particle.y < 0) particle.y = canvas.height;
				if (particle.y > canvas.height) particle.y = 0;
			});

			animationFrameId = requestAnimationFrame(drawParticles);
		};

		const handleResize = () => {
			resizeCanvas();
			createParticles();
		}

		resizeCanvas();
		createParticles();
		drawParticles();

		window.addEventListener('resize', handleResize);

		// Cleanup function returned from onMount
		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<canvas
	bind:this={canvasElement}
	class="absolute inset-0 w-full h-full -z-10"
	style="opacity: 0.3;"
/>