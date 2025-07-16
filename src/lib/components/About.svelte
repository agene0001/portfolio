<!-- src/lib/components/About.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { User, Mail, Calendar, MapPin, Download, Code, Database, Cloud, Shield, Brain, Zap } from '@lucide/svelte';

	// Enhanced skills with more detailed categories and current technologies
	// Note: We store the component constructor itself, not a JSX instance.
	const skillCategories = {
		'Frontend Development': {
			skills: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Vue.js', 'Svelte'],
			level: 90,
			icon: Code
		},
		'Backend Development': {
			skills: ['Python/Flask', 'Quarkus', 'Spring-boot', 'FastAPI', 'RESTful APIs'],
			level: 88,
			icon: Database
		},
		'Data Science & ML': {
			skills: ['Python', 'Pandas', 'spacy', 'Scikit-learn', 'TensorFlow', 'SQL', 'nlp'],
			level: 85,
			icon: Brain
		},
		'Cloud & DevOps': {
			skills: ['Google Cloud', 'Docker', 'Firebase', 'CI/CD'],
			level: 75,
			icon: Cloud
		},
		'Database Management': {
			skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'],
			level: 82,
			icon: Database
		},
		'Cybersecurity': {
			skills: ['Network Security', 'Penetration Testing', 'Risk Assessment'],
			level: 70,
			icon: Shield
		}
	};

	const achievements = [
		{ number: '40+', label: 'Projects Completed', icon: Code },
		{ number: '3+', label: 'Years Experience', icon: Calendar },
		{ number: '15+', label: 'Technologies Mastered', icon: Zap },
		{ number: '100%', label: 'Client Satisfaction', icon: User }
	];

	const profileInfo = [
		{ icon: User, label: 'Full Name', value: 'Felix Agene' },
		{ icon: Calendar, label: 'Birth Date', value: 'May 10, 2004' },
		{ icon: MapPin, label: 'Location', value: 'Minneapolis, MN' },
		{ icon: Code, label: 'Role', value: 'Full Stack Developer & Data Scientist' },
		{ icon: Mail, label: 'Email', value: 'agene001@umn.edu' }
	];

	let isVisible = false;
	let animatedSkills = {};

	onMount(() => {
		isVisible = true;

		// Animate skill bars with delay
		const timer = setTimeout(() => {
			Object.keys(skillCategories).forEach((skill, index) => {
				setTimeout(() => {
					// Svelte's reactivity handles the update
					animatedSkills[skill] = skillCategories[skill].level;
					animatedSkills = animatedSkills; // Trigger reactivity
				}, index * 200);
			});
		}, 500);

		return () => clearTimeout(timer); // Cleanup on component destroy
	});
</script>

<style>
    @keyframes skill-fill {
        from {
            width: 0%;
        }
        to {
            width: var(--target-width);
        }
    }

    @keyframes counter-up {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Note: Svelte's transition system is an alternative, but keyframes work well here. */
    .skill-bar-fill {
        animation: skill-fill 1.5s ease-out forwards;
    }

    .achievement-item {
        animation: counter-up 0.6s ease-out forwards;
        /* Hide until animation starts */
        opacity: 0;
    }
</style>

<section id="about" class="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
	<!-- Background decorations -->
	<div class="absolute top-20 left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl" />
	<div class="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />

	<div class="max-w-7xl mx-auto px-6 relative">
		<!-- Header -->
		<div class="text-center mb-20" class:animate-fade-in={isVisible} class:opacity-0={!isVisible}>
			<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
				<User class="w-4 h-4 text-indigo-400" />
				<span class="text-indigo-400 font-medium">About Me</span>
			</div>

			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				<span class="text-white">Get to Know </span>
				<span class="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
          Felix Agene
        </span>
			</h2>

			<p class="text-slate-300 text-lg max-w-4xl mx-auto leading-relaxed">
				I'm a Computer Science and Data Science student at the University of Minnesota Twin Cities, passionate about creating scalable web applications, extracting insights from complex data, and securing digital infrastructure. I thrive at the intersection of technology and innovation.
			</p>
		</div>

		<!-- Main content grid -->
		<div class="grid lg:grid-cols-2 gap-16 mb-20">
			<!-- Profile Information -->
			<div class:animate-slide-in-left={isVisible} class:opacity-0={!isVisible} style="animation-delay: 0.2s;">
				<div class="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
					<h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
						<User class="w-6 h-6 text-indigo-400" />
						Professional Profile
					</h3>

					<div class="space-y-6">
						{#each profileInfo as item (item.label)}
							<div class="flex items-center gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-300">
								<div class="text-indigo-400">
									<svelte:component this={item.icon} class="w-5 h-5" />
								</div>
								<div class="flex-1 flex justify-between">
									<span class="font-medium text-slate-300">{item.label}:</span>
									<span class="text-slate-400">{item.value}</span>
								</div>
							</div>
						{/each}
					</div>

					<!-- Action buttons -->
					<div class="flex flex-col sm:flex-row gap-4 mt-8">
						<a href="#contact" class="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 transform hover:scale-105 text-center">
							Get In Touch
						</a>
						<a href="/resume-latest.pdf" download class="flex-1 px-6 py-3 border-2 border-slate-600 text-slate-300 rounded-lg font-semibold hover:border-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 flex items-center justify-center gap-2">
							<Download class="w-4 h-4" />
							Download CV
						</a>
					</div>
				</div>
			</div>

			<!-- Skills Section -->
			<div class:animate-slide-in-right={isVisible} class:opacity-0={!isVisible} style="animation-delay: 0.4s;">
				<div class="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300">
					<h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
						<Brain class="w-6 h-6 text-violet-400" />
						Technical Expertise
					</h3>

					<div class="space-y-6">
						{#each Object.entries(skillCategories) as [category, data] (category)}
							<div class="group">
								<div class="flex items-center justify-between mb-3">
									<div class="flex items-center gap-3">
										<div class="text-violet-400">
											<svelte:component this={data.icon} class="w-5 h-5" />
										</div>
										<span class="font-medium text-slate-300">{category}</span>
									</div>
									<span class="text-slate-400 font-semibold">{data.level}%</span>
								</div>

								<div class="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
									<div class="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out" style="width: {animatedSkills[category] || 0}%; box-shadow: {animatedSkills[category] ? '0 0 10px rgba(139, 92, 246, 0.5)' : 'none'};" />
								</div>

								<div class="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									{#each data.skills as skill (skill)}
                    <span class="px-2 py-1 bg-slate-700/50 text-slate-400 rounded text-xs">
                      {skill}
                    </span>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Achievements/Stats -->
		<div class:animate-fade-in={isVisible} class:opacity-0={!isVisible} style="animation-delay: 0.6s;">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
				{#each achievements as achievement, index (achievement.label)}
					<div class="achievement-item bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 text-center border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105" style="animation-delay: {0.8 + index * 0.1}s;">
						<div class="text-indigo-400 mb-3 flex justify-center">
							<svelte:component this={achievement.icon} class="w-6 h-6" />
						</div>
						<div class="text-3xl font-bold text-white mb-2">{achievement.number}</div>
						<div class="text-slate-400 text-sm">{achievement.label}</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Background quote/philosophy -->
		<div class="mt-20 text-center" class:animate-fade-in={isVisible} class:opacity-0={!isVisible} style="animation-delay: 1s;">
			<div class="max-w-4xl mx-auto bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50">
				<blockquote class="text-slate-300 text-lg italic leading-relaxed">
					"My goal is to craft solutions that are both technically excellent and genuinely useful"
				</blockquote>
				<div class="mt-4 text-indigo-400 font-semibold">— Felix Agene</div>
			</div>
		</div>
	</div>
</section>