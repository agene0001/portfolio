<script lang="ts">
	// 1. Import icons from the Svelte version of the library
	import { Github, Linkedin, Mail } from '@lucide/svelte';

	// 2. Import your configuration file (path might need adjustment)
	import config from '../config';

	// 3. Define the dynamic year in the script for a cleaner template
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-950 text-white py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Section 1: Name and Description -->
			<div>
				<h3 class="text-2xl font-bold mb-4">Felix Agene</h3>
				<p class="text-gray-400">
					Full Stack Developer & UI/UX Enthusiast creating amazing digital experiences.
				</p>
			</div>

			<!-- Section 2: Quick Links -->
			<div>
				<h4 class="text-lg font-semibold mb-4">Quick Links</h4>
				<ul class="space-y-2">
					<li>
						<a href="#about" class="text-gray-400 hover:text-indigo-400 transition-colors">About</a>
					</li>
					<li>
						<a href="#projects" class="text-gray-400 hover:text-indigo-400 transition-colors">Projects</a>
					</li>
					<li>
						<a href="#skills" class="text-gray-400 hover:text-indigo-400 transition-colors">Skills</a>
					</li>
					<li>
						<a href="#contact" class="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a>
					</li>
				</ul>
			</div>

			<!-- Section 3: Social Links -->
			<div>
				<h4 class="text-lg font-semibold mb-4">Connect</h4>
				<div class="flex space-x-4">
					<a
						href={config.profileLinks.github}
						target="_blank"
						rel="noopener noreferrer"
						class="text-gray-400 hover:text-indigo-400 transition-colors"
						aria-label="GitHub Profile"
					>
						<Github class="w-6 h-6" />
					</a>
					<a
						href={config.profileLinks.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						class="text-gray-400 hover:text-indigo-400 transition-colors"
						aria-label="LinkedIn Profile"
					>
						<Linkedin class="w-6 h-6" />
					</a>
					<!-- Improved mailto link -->
					<a
						href="mailto:{config.profileLinks.email}"
						class="text-gray-400 hover:text-indigo-400 transition-colors"
						aria-label="Send an Email"
					>
						<Mail class="w-6 h-6" />
					</a>
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
			<p>© {currentYear} Felix Agene. All rights reserved.</p>
		</div>
	</div>
</footer>