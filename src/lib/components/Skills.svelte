<script lang="ts">
	// Data structure for skills
	const skillCategories = {
		'Frontend Development': {
			skills: [
				'React/Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Vue.js', 'Svelte',
				'Redux/Zustand', 'GraphQL', 'Webpack/Vite', 'SASS/SCSS', 'Progressive Web Apps',
				'Responsive Design'
			],
			level: 90,
			icon: '⚛️'
		},
		'Backend Development': {
			skills: [
				'Python/Flask', 'Quarkus', 'Spring Boot', 'FastAPI', 'RESTful APIs', 'Node.js/Express',
				'GraphQL APIs', 'Microservices', 'API Gateway', 'Message Queues (Redis/RabbitMQ)',
				'WebSocket', 'Authentication/JWT'
			],
			level: 88,
			icon: '🔧'
		},
		'Data Science & ML': {
			skills: [
				'Python', 'Pandas', 'spaCy', 'Scikit-learn', 'TensorFlow', 'SQL', 'NLP', 'PyTorch',
				'Jupyter Notebooks', 'NumPy', 'Matplotlib/Seaborn', 'Apache Spark', 'MLOps', 'Feature Engineering'
			],
			level: 85,
			icon: '📊'
		},
		'Web Scraping & Automation': {
			skills: [
				'Beautiful Soup', 'Scrapy', 'Selenium', 'Playwright', 'Requests/HTTP', 'Puppeteer',
				'XPath/CSS Selectors', 'Data Pipeline Automation', 'Scheduled Tasks (Cron)',
				'API Integration', 'Browser Automation', 'Anti-bot Evasion'
			],
			level: 83,
			icon: '🤖'
		},
		'Testing & QA': {
			skills: [
				'Jest/Vitest', 'React Testing Library', 'Pytest', 'Cypress', 'Selenium WebDriver',
				'Unit Testing', 'Integration Testing', 'E2E Testing', 'Test-Driven Development',
				'API Testing (Postman)', 'Performance Testing', 'Load Testing'
			],
			level: 80,
			icon: '🧪'
		},
		'Cloud & DevOps': {
			skills: [
				'Google Cloud', 'Docker', 'Firebase', 'CI/CD', 'Kubernetes', 'AWS Services',
				'GitHub Actions', 'Terraform', 'Nginx/Apache', 'Load Balancing',
				'Monitoring (Prometheus)', 'Log Management'
			],
			level: 75,
			icon: '☁️'
		},
		'Database Management': {
			skills: [
				'PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis', 'Database Design',
				'Query Optimization', 'Database Migration', 'Backup Strategies', 'Data Modeling',
				'ACID Properties', 'NoSQL vs SQL'
			],
			level: 82,
			icon: '🗄️'
		},
		'Cybersecurity': {
			skills: [
				'Network Security', 'Penetration Testing', 'Risk Assessment', 'OWASP Top 10',
				'SQL Injection Prevention', 'XSS/CSRF Protection', 'Security Auditing',
				'Vulnerability Scanning', 'Incident Response', 'Encryption/Hashing',
				'Security Frameworks', 'Compliance (SOC2/GDPR)'
			],
			level: 70,
			icon: '🔒'
		}
	};

	// State for the selected category and hovered skill
	let selectedCategoryName = 'Frontend Development';
	let hoveredSkill: string | null = null;

	// Reactive statement: derived state that updates automatically when `selectedCategoryName` changes
	$: selectedCategoryData = skillCategories[selectedCategoryName];

	// Helper functions
	const getSkillColor = (level: number) => {
		if (level >= 85) return 'from-emerald-400 to-emerald-600';
		if (level >= 80) return 'from-blue-400 to-blue-600';
		if (level >= 75) return 'from-purple-400 to-purple-600';
		return 'from-orange-400 to-orange-600';
	};

	const getLevelLabel = (level: number) => {
		if (level >= 85) return 'Expert';
		if (level >= 80) return 'Advanced';
		if (level >= 75) return 'Proficient';
		return 'Intermediate';
	};

	// Pre-calculated summary data
	const expertCount = Object.values(skillCategories).filter(cat => cat.level >= 85).length;
	const advancedCount = Object.values(skillCategories).filter(cat => cat.level >= 80 && cat.level < 85).length;
	const totalSkills = Object.values(skillCategories).reduce((total, cat) => total + cat.skills.length, 0);
	const totalCategories = Object.keys(skillCategories).length;

</script>

<section id="skills" class="py-20 relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-5 -z-10">
		<div
			class="absolute inset-0"
			style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"
		></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
		<div class="text-center mb-16">
			<h2
				class="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
			>
				Skills & Expertise
			</h2>
			<p class="text-lg text-gray-300 max-w-3xl mx-auto">
				A comprehensive showcase of my technical skills across full-stack development, data science, and
				cybersecurity domains.
			</p>
		</div>

		<!-- Category Navigation -->
		<div class="flex flex-wrap justify-center gap-3 mb-12">
			{#each Object.entries(skillCategories) as [category, data]}
				<!-- ... inside the {#each} loop ... -->
				<button
					on:click={() => (selectedCategoryName = category)}
					class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105
    {selectedCategoryName === category
		? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
		: 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'}"
				>
					<span class="mr-2">{data.icon}</span>
					{category.replace(' Development', '').replace(' Management', '')}
				</button>
			{/each}
		</div>

		<!-- Selected Category Details -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<!-- Category Overview -->
			<div class="lg:col-span-1">
				<div
					class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-xl"
				>
					<div class="text-center">
						<div class="text-6xl mb-4">{selectedCategoryData.icon}</div>
						<h3 class="text-2xl font-bold text-white mb-4">{selectedCategoryName}</h3>

						<!-- Proficiency Level -->
						<div class="mb-6">
							<div class="flex justify-between items-center mb-2">
								<span class="text-gray-300 font-medium">Overall Proficiency</span>
								<span
									class="px-3 py-1 rounded-full text-xs font-bold"
									class:bg-emerald-100={selectedCategoryData.level >= 85}
									class:text-emerald-800={selectedCategoryData.level >= 85}
									class:bg-blue-100={selectedCategoryData.level >= 80 && selectedCategoryData.level < 85}
									class:text-blue-800={selectedCategoryData.level >= 80 && selectedCategoryData.level < 85}
									class:bg-purple-100={selectedCategoryData.level >= 75 && selectedCategoryData.level < 80}
									class:text-purple-800={selectedCategoryData.level >= 75 && selectedCategoryData.level < 80}
									class:bg-orange-100={selectedCategoryData.level < 75}
									class:text-orange-800={selectedCategoryData.level < 75}
								>
									{getLevelLabel(selectedCategoryData.level)}
								</span>
							</div>
							<div class="w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
								<div
									class="h-3 rounded-full bg-gradient-to-r transition-all duration-1000 ease-out {getSkillColor(
										selectedCategoryData.level
									)}"
									style="width: {selectedCategoryData.level}%"
								/>
							</div>
							<div class="text-right">
								<span class="text-2xl font-bold text-white">{selectedCategoryData.level}%</span>
							</div>
						</div>

						<div class="text-gray-400 text-sm">{selectedCategoryData.skills.length} Technologies</div>
					</div>
				</div>
			</div>

			<!-- Skills Grid -->
			<div class="lg:col-span-2">
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{#each selectedCategoryData.skills as skill (skill)}
						<div
							class="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
							on:mouseenter={() => (hoveredSkill = skill)}
							on:mouseleave={() => (hoveredSkill = null)}
						>
							<div class="flex items-center justify-between">
								<div class="flex items-center space-x-3">
									<div
										class="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:animate-pulse"
									></div>
									<span class="text-white font-medium group-hover:text-blue-300 transition-colors">
										{skill}
									</span>
								</div>

								{#if hoveredSkill === skill}
									<div
										class="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
									>
										{getLevelLabel(selectedCategoryData.level)}
									</div>
								{/if}
							</div>

							<!-- Hover Effect -->
							<div
								class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							></div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Skills Summary -->
		<div class="mt-16 text-center">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
				<div
					class="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-xl p-6 border border-emerald-500/20"
				>
					<div class="text-2xl font-bold text-emerald-400 mb-2">{expertCount}</div>
					<div class="text-emerald-300 text-sm">Expert Level</div>
				</div>
				<div
					class="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-6 border border-blue-500/20"
				>
					<div class="text-2xl font-bold text-blue-400 mb-2">{advancedCount}</div>
					<div class="text-blue-300 text-sm">Advanced</div>
				</div>
				<div
					class="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 border border-purple-500/20"
				>
					<div class="text-2xl font-bold text-purple-400 mb-2">{totalSkills}</div>
					<div class="text-purple-300 text-sm">Total Skills</div>
				</div>
				<div
					class="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl p-6 border border-orange-500/20"
				>
					<div class="text-2xl font-bold text-orange-400 mb-2">{totalCategories}</div>
					<div class="text-orange-300 text-sm">Categories</div>
				</div>
			</div>
		</div>
	</div>
</section>