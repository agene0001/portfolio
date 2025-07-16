<!-- src/routes/+page.svelte -->
<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import { onMount } from 'svelte';
	import { ArrowDown, Github, Linkedin, Mail } from '@lucide/svelte';
	import ParticleBackground from '$lib/components/ParticleBackground.svelte';

	let isLoaded = false;

	// Typewriter effect logic
	const fullText = "Felix Agene";
	let nameText = "";
	let nameComplete = false;

	onMount(() => {
		isLoaded = true;

		const interval = setInterval(() => {
			if (nameText.length < fullText.length) {
				nameText = fullText.slice(0, nameText.length + 1);
			} else {
				nameComplete = true;
				clearInterval(interval);
			}
		}, 100);

		return () => clearInterval(interval);
	});

	const scrollToSection = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	};

	const roles = [
		{ label: 'Full Stack Engineer', color: 'from-blue-500 to-cyan-500' },
		{ label: 'Data Scientist', color: 'from-purple-500 to-pink-500' },
		{ label: 'Security Researcher', color: 'from-red-500 to-orange-500' }
	];

	const socialLinks = [
		{ Icon: Github, href: 'https://github.com/agene0001', label: 'GitHub' },
		{ Icon: Linkedin, href: 'https://www.linkedin.com/in/felix-agene/', label: 'LinkedIn' }
	];
</script>



<style>
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
    }
    @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
        50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
    }
    @keyframes slideInFromLeft {
        from { transform: translateX(-100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideInFromRight {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeInScale {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }

    .slide-in-left { animation: slideInFromLeft 0.8s ease-out forwards; }
    .slide-in-right { animation: slideInFromRight 0.8s ease-out forwards; }
    .fade-in-scale { animation: fadeInScale 0.6s ease-out forwards; }
    .glow-effect { animation: glow 3s ease-in-out infinite; }

    /* Class for typewriter cursor visibility */
    .cursor-hidden {
        opacity: 0;
    }
</style>

<section id="hero" class="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
	<!-- Subtle grid pattern overlay -->
	<div
		class="absolute inset-0 opacity-10"
		style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"
	/>

	<ParticleBackground />

	<div class="relative max-w-6xl mx-auto px-6 py-20 flex items-center justify-center min-h-screen">
		<div class="text-center w-full">
			<!-- Greeting -->
			<div class="mb-6" class:slide-in-left={isLoaded} class:opacity-0={!isLoaded}>
        <span class="text-slate-400 text-lg font-mono tracking-wide">
          > hello_world.execute()
        </span>
			</div>

			<!-- Name with typewriter effect -->
			<div class="mb-8">
				<h1 class="text-6xl md:text-8xl font-bold tracking-tight">
					<span class="text-white font-light">I'm </span>
					<span class="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {nameText}<span class="transition-opacity duration-300" class:cursor-hidden={nameComplete}>|</span>
          </span>
				</h1>
			</div>

			<!-- Role tags -->
			<div class="flex flex-wrap justify-center gap-3 mb-10" class:fade-in-scale={isLoaded} class:opacity-0={!isLoaded} style="animation-delay: 0.4s;">
				{#each roles as role (role.label)}
					<div class="px-6 py-3 rounded-full border border-slate-700/50 backdrop-blur-sm bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 cursor-default">
            <span class="bg-gradient-to-r {role.color} bg-clip-text text-transparent font-medium">
              {role.label}
            </span>
					</div>
				{/each}
			</div>

			<!-- Description -->
			<div class="mb-12" class:slide-in-right={isLoaded} class:opacity-0={!isLoaded} style="animation-delay: 0.8s;">
				<p class="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
					Computer Science student at UMN Twin Cities, crafting scalable web applications, extracting insights from complex datasets, and exploring cybersecurity frontiers.
				</p>
			</div>

			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row justify-center gap-6 mb-16" class:fade-in-scale={isLoaded} class:opacity-0={!isLoaded} style="animation-delay: 1s;">
				<button on:click={() => scrollToSection('contact')} class="group px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-violet-500 hover:to-indigo-500 transform hover:scale-105 transition-all duration-300 glow-effect">
          <span class="flex items-center justify-center gap-2">
            <Mail class="w-5 h-5" />
            Let's Connect
          </span>
				</button>
				<button on:click={() => scrollToSection('projects')} class="px-8 py-4 border-2 border-slate-600 text-slate-300 rounded-xl font-semibold hover:border-violet-500 hover:text-violet-400 hover:bg-violet-500/10 transform hover:scale-105 transition-all duration-300">
					Explore My Work
				</button>
			</div>

			<!-- Social Links -->
			<div class="flex justify-center gap-6" class:slide-in-left={isLoaded} class:opacity-0={!isLoaded} style="animation-delay: 1.2s;">
				{#each socialLinks as { Icon, href, label }}
					<a {href} target="_blank" rel="noopener noreferrer" class="p-3 rounded-full border border-slate-700/50 bg-slate-800/30 text-slate-400 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 transform hover:scale-110" aria-label={label}>
						<Icon class="w-6 h-6" />
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<button on:click={() => scrollToSection('about')} class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-violet-400 transition-colors duration-300 animate-bounce" aria-label="Scroll to about section">
		<ArrowDown class="w-6 h-6" />
	</button>

	<!-- Decorative elements -->
	<div class="absolute top-20 left-10 w-2 h-2 bg-violet-500 rounded-full opacity-60 animate-pulse" />
	<div class="absolute top-40 right-20 w-1 h-1 bg-indigo-400 rounded-full opacity-40 animate-pulse" style="animation-delay: 1s;" />
	<div class="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 animate-pulse" style="animation-delay: 2s;" />
</section>
<About />
<Projects />
<Skills />
<Contact />