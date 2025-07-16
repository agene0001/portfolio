<!-- src/lib/components/ParticleBackground.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	interface Particle {
		id: number;
		x: number;
		y: number;
		size: number;
		duration: number;
		delay: number;
	}

	let particles: Particle[] = [];

	onMount(() => {
		const particleArray: Particle[] = [];
		for (let i = 0; i < 50; i++) {
			particleArray.push({
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				size: Math.random() * 3 + 1,
				duration: Math.random() * 20 + 10,
				delay: Math.random() * 5
			});
		}
		particles = particleArray;
	});
</script>

<div class="absolute inset-0 overflow-hidden pointer-events-none">
	{#each particles as particle (particle.id)}
		<div
			class="absolute rounded-full bg-slate-400/20"
			style="
        left: {particle.x}%;
        top: {particle.y}%;
        width: {particle.size}px;
        height: {particle.size}px;
        animation: float {particle.duration}s infinite ease-in-out;
        animation-delay: {particle.delay}s;
      "
		/>
	{/each}
</div>