<!-- src/lib/components/Header.svelte -->
<script lang="ts">
	import { Github, Linkedin, Mail, Menu, X } from '@lucide/svelte';
	import config from '$lib/config';

	let isMenuOpen = false;

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<header class="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<a href="#hero" class="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
				FA
			</a>

			<nav class="hidden md:flex space-x-8">
				<a href="#about" class="text-gray-300 hover:text-indigo-400 transition-colors">About</a>
				<a href="#projects" class="text-gray-300 hover:text-indigo-400 transition-colors">Projects</a>
				<a href="#skills" class="text-gray-300 hover:text-indigo-400 transition-colors">Skills</a>
				<a href="#contact" class="text-gray-300 hover:text-indigo-400 transition-colors">Contact</a>
			</nav>

			<div class="hidden md:flex items-center space-x-4">
				<a href={config.profileLinks.github} target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-indigo-400 transition-colors">
					<Github class="w-5 h-5" />
				</a>
				<a href={config.profileLinks.linkedin} target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-indigo-400 transition-colors">
					<Linkedin class="w-5 h-5" />
				</a>
				<a href={config.profileLinks.email} class="text-gray-300 hover:text-indigo-400 transition-colors">
					<Mail class="w-5 h-5" />
				</a>
			</div>

			<button class="md:hidden text-gray-300" on:click={() => (isMenuOpen = !isMenuOpen)}>
				{#if isMenuOpen}
					<X class="w-6 h-6" />
				{:else}
					<Menu class="w-6 h-6" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if isMenuOpen}
		<div class="md:hidden">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-b border-gray-700">
				<a href="#about" class="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors" on:click={closeMenu}>About</a>
				<a href="#projects" class="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors" on:click={closeMenu}>Projects</a>
				<a href="#skills" class="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors" on:click={closeMenu}>Skills</a>
				<a href="#contact" class="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors" on:click={closeMenu}>Contact</a>
			</div>
		</div>
	{/if}
</header>