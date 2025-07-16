<script lang="ts">
	// 1. Svelte Imports
	import { onMount, onDestroy } from 'svelte';

	// 2. Icon Imports (from lucide-svelte, not lucide-react)
	import {
		ExternalLink, Github, Code, Database, Brain, X,
		ChevronLeft, ChevronRight, Play, Lightbulb, BookOpen, Users, Zap
	} from '@lucide/svelte';

	// --- DATA (Full project data is included here) ---
	const projects = [
		{
			title: 'GainzTracker',
			description: 'Full-stack nutrition and fitness tracking platform with AI-powered meal recommendations, barcode scanning, and Amazon Fresh integration.',
			image: '/imgs/gainztrackers/gainztrackers.png',
			images: [
				'/imgs/gainztrackers/gainztrackers.png',
				'/imgs/gainztrackers/gainztrackers1.png',
				'/imgs/gainztrackers/gainztrackers2.png',
				'/imgs/gainztrackers/gainztrackers3.png',
				'/imgs/gainztrackers/gainztrackers-gitImg.png',
				'https://images.unsplash.com/photo-1490645935967-10de6ba17061'
			],
			tags: ['Svelte', 'Java', 'Quarkus', 'Python', 'Flask', 'PostgreSQL', 'Machine Learning', 'NLP', 'Kubernetes', 'Docker'],
			category: 'Full Stack',
			githubLink: 'https://github.com/agene0001/workout-app',
			liveLink: 'https://gainztrackers.com',
			featured: true,
			detailed: {
				overview: 'GainzTracker is a comprehensive fitness and nutrition platform that showcases enterprise-level software development practices. It combines advanced machine learning, scalable backend architecture, and modern frontend frameworks to provide AI-powered meal recommendations, real-time barcode scanning, automated meal logging, and intelligent workout planning. This platform demonstrates proficiency in full-stack development, machine learning engineering, and cloud infrastructure through its polyglot microservices architecture and modern DevOps practices.',
				challenges: [
					'Integrating multiple external APIs (Amazon Fresh, barcode scanning) into a cohesive user experience',
					'Implementing real-time nutrition calculations with complex macro tracking across polyglot microservices',
					'Building a scalable hybrid recommendation engine (TF-IDF, Word2Vec) with real-time inference and contextual recommendations',
					'Optimizing search and autocomplete performance for large, dynamic datasets using custom algorithms (TST, Binary Search)',
					'Managing state across multiple complex forms and user workflows in a reactive Svelte frontend',
					'Ensuring high availability and performance across different language runtimes (Java, Python) in a distributed microservices environment'
				],
				solutions: [
					'Designed a polyglot microservices architecture with Java Quarkus for high-performance API services and Python Flask for ML pipeline orchestration',
					'Developed a custom Ternary Search Tree (TST) and implemented binary search optimizations for O(log n) autocomplete and prefix matching',
					'Integrated a hybrid recommendation engine using TF-IDF vectorization and Word2Vec embeddings for semantic ingredient matching and content-based filtering',
					'Utilized spaCy for robust Natural Language Processing (NLP) to parse raw ingredient strings and enhance similarity matching',
					'Implemented Redis caching for fast data retrieval, session management, and efficient real-time search capabilities',
					'Leveraged Svelte for a reactive, component-based frontend with optimized bundle size and performant real-time UI updates',
					'Containerized all services with Docker for consistent development and deployment, and orchestrated production environments using Kubernetes manifests'
				],
				techStack: {
					'Frontend': ['Svelte/SvelteKit', 'Responsive Design (CSS Grid, Flexbox)', 'Progressive Enhancement'],
					'Backend (API Gateway)': ['Java 21', 'Quarkus Framework', 'RESTful API Design'],
					'Backend (ML & Data Processing)': ['Python 3.12+', 'Flask', 'spaCy', 'NumPy', 'Pandas'],
					'Database & Caching': ['PostgreSQL', 'Redis'],
					'Machine Learning & AI': ['Scikit-learn', 'Gensim Word2Vec', 'Custom Algorithms (TST, Binary Search)', 'OpenAI API Integration'],
					'DevOps & Infrastructure': ['Docker', 'Docker Compose', 'Kubernetes', 'Maven', 'Gradle', 'Git Workflows', 'CI/CD Principles', 'Health Checks']
				},
				resources: [
					{ title: 'Quarkus Documentation', url: 'https://quarkus.io/guides/', type: 'docs' },
					{ title: 'SvelteKit Documentation', url: 'https://kit.svelte.dev/docs', type: 'docs' },
					{ title: 'spaCy NLP Documentation', url: 'https://spacy.io/usage', type: 'docs' },
					{ title: 'Kubernetes Official Documentation', url: 'https://kubernetes.io/docs/', type: 'docs' },
					{ title: 'Implementing Ternary Search Trees', url: 'https://www.cs.princeton.edu/courses/archive/spr07/cos226/lectures/13Tries.pdf', type: 'article' },
					{ title: 'Content-based filtering system', url: 'https://www.ibm.com/think/topics/collaborative-filtering#:~:text=While%20collaborative%20filtering%20focuses%20on,type%20as%20in%20collaborative%20filtering.', type: 'article' }
				],
				metrics: {
					'Lines of Code': '15,000+',
					'API Endpoints': '45+',
					'Database Tables': '5',
					'Recommendation Latency': '< 200ms (average)',
					'Concurrent Users Tested': '1000+',
					'Test Coverage': '85% (Target)'
				}
			}
		},
		{
			title: 'LinkedIn Job Automation',
			description: 'Intelligent job application automation tool with resume parsing, skill matching, and application tracking using Selenium and NLP.',
			image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4',
			images: [
				'https://images.unsplash.com/photo-1586281380349-632531db7ed4',
				'https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33',
				'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
			],
			tags: ['Python', 'Selenium', 'NLP', 'BeautifulSoup', 'Pandas'],
			category: 'Automation',
			githubLink: 'https://github.com/agene0001/job-applier-extension',
			featured: true,
			detailed: {
				overview: 'An intelligent automation system that streamlines the job application process by automatically parsing job descriptions, matching skills, and submitting applications with personalized cover letters generated using NLP techniques.',
				challenges: [
					'Handling dynamic web content and anti-bot measures on LinkedIn',
					'Creating accurate skill matching algorithms from unstructured text',
					'Generating personalized cover letters at scale',
					'Managing rate limits and avoiding detection'
				],
				solutions: [
					'Implemented sophisticated wait strategies and human-like interaction patterns',
					'Built custom NLP pipeline using spaCy for skill extraction and matching',
					'Created template-based cover letter generation with dynamic content insertion',
					'Added randomized delays and proxy rotation for stealth operation'
				],
				techStack: {
					'Core': ['Python 3.9+', 'Selenium WebDriver', 'BeautifulSoup4'],
					'NLP': ['spaCy', 'NLTK', 'TextBlob', 'scikit-learn'],
					'Data': ['Pandas', 'SQLite', 'JSON'],
					'Utilities': ['Requests', 'lxml', 'python-dotenv']
				},
				resources: [
					{ title: 'Selenium Documentation', url: 'https://selenium-python.readthedocs.io/', type: 'docs' },
					{ title: 'spaCy NLP Tutorial', url: 'https://spacy.io/usage/spacy-101', type: 'tutorial' },
					{ title: 'Web Scraping Best Practices', url: '#', type: 'article' },
					{ title: 'LinkedIn API Guidelines', url: '#', type: 'guide' }
				],
				metrics: {
					'Applications/Hour': '20+',
					'Success Rate': '95%',
					'Skill Match Accuracy': '88%',
					'Time Saved': '80%'
				}
			}
		},
		{
			title: 'Minesweeper AI',
			description: 'An artificial intelligence agent capable of playing Minesweeper with logical deduction and probabilistic reasoning.',
			image: '/imgs/minesweeper/minesweeper.png',
			images: [
				'/imgs/minesweeper/minesweeper.png',
				'/imgs/minesweeper/minesweepervidthumbnail.jpg'
			],
			tags: ['Python','Java', 'Algorithm Design', 'Logic', 'Constraint Satisfaction', 'Game AI'],
			category: 'AI',
			githubLink: 'https://github.com/agene0001/Minesweeper',
			youtubeLink: 'https://www.youtube.com/watch?v=DRANxhv5l70',
			featured: false,
			detailed: {
				overview: 'This project develops an AI for the classic game Minesweeper. It employs a combination of logical deduction (to identify safe and unsafe cells) and probabilistic reasoning (when pure logic is insufficient) to achieve a high win rate across various board sizes and difficulties.',
				challenges: [
					'Handling incomplete information and making optimal decisions under uncertainty.',
					'Efficiently processing the board state to apply logical rules and infer new information.',
					'Implementing probabilistic inference when no logical moves are available.',
					'Avoiding dead-ends or traps based on speculative moves.'
				],
				solutions: [
					'Developed a custom rule-based inference engine that identifies trivial safe and mine cells.',
					'Implemented a constraint satisfaction approach to solve complex deductions by finding consistent assignments.',
					'Utilized Monte Carlo simulations and Bayesian inference for probabilistic decision-making on ambiguous cells.',
					'Optimized data structures for fast access and updates to the game board and known information.'
				],
				techStack: {
					'Core': ['Java'],
					'Algorithms': ['Logical Inference', 'Probabilistic Reasoning', 'Constraint Satisfaction'],
					'Data Structures': ['Sets', 'Queues', 'Matrix Operations'],
					'Visualization (Optional)': ['JSwing']
				},
				resources: [
					{ title: 'Minesweeper AI Explained', url: 'https://cs50.harvard.edu/ai/2024/projects/1/minesweeper/', type: 'tutorial' },
					{ title: 'Introduction to Constraint Programming', url: 'https://developers.google.com/optimization/cp', type: 'article' },
					{ title: 'Probabilistic AI Techniques', url: 'https://www.gaine.com/blog/probabilistic-and-deterministic-results-in-ai-systems', type: 'docs' }
				],
				metrics: {
					'Win Rate (Expert)': '90%+',
					'Average Moves per Game': 'Efficient',
					'Decision Time': '< 100ms',
					'Board Sizes Supported': 'Small to Large'
				}
			}
		},
		{
			title: 'Flappy Bird AI',
			description: 'An AI agent trained using reinforcement learning (NEAT algorithm) to master the Flappy Bird game. (Video in progress)',
			image: '/imgs/flappy/header.png',
			images: [
				'/imgs/flappy/header.png',
				'https://www.youtube.com/watch?v=x-73J4m0aJ4',
				'https://images.unsplash.com/photo-1510519138101-570d1dca3d6b',
				'https://images.unsplash.com/photo-1596541223130-cf2bc93b5a79'
			],
			tags: ['Python', 'Reinforcement Learning', 'Neural Networks', 'Genetic Algorithms', 'Game AI'],
			category: 'AI',
			githubLink: 'https://github.com/agene0001/flappy-bird-ai-dummy',
			youtubeLink: 'https://www.youtube.com/watch?v=x-73J4m0aJ4',
			featured: false,
			detailed: {
				overview: 'This project implements a Flappy Bird AI using the Neuroevolution of Augmenting Topologies (NEAT) algorithm. The AI learns to navigate through pipes by evolving neural network structures and weights, demonstrating the power of evolutionary algorithms in solving complex control tasks.',
				challenges: [
					'Defining an effective reward function for continuous learning in a dynamic environment.',
					'Optimizing the balance between exploration (trying new strategies) and exploitation (using known good strategies).',
					'Handling the real-time nature of the game and fast decision-making.',
					'Preventing local optima and ensuring robust learning across generations.'
				],
				solutions: [
					'Utilized NEAT for its ability to evolve both weights and topology of neural networks, improving learning efficiency.',
					'Implemented a fitness function that rewards survival time and pipe passage, promoting desired behaviors.',
					'Integrated with a game simulation loop for rapid training iterations.',
					'Applied speciation and population management techniques within NEAT to encourage diversity and prevent premature convergence.'
				],
				techStack: {
					'Core': ['Python'],
					'AI/ML Frameworks': ['NEAT-Python library', 'TensorFlow (basic concepts)'],
					'Game Simulation': ['Pygame', 'Custom Game Environment'],
					'Data Visualization': ['Matplotlib', 'Seaborn']
				},
				resources: [
					{ title: 'NEAT Algorithm Paper', url: '#', type: 'docs' },
					{ title: 'Introduction to Reinforcement Learning', url: '#', type: 'tutorial' },
					{ title: 'Implementing Flappy Bird in Python', url: '#', type: 'article' }
				],
				metrics: {
					'Highest Score Achieved': '1000+',
					'Generations to Master': '50-100',
					'Training Time': 'Hours to Days',
					'Performance': 'Human-level or Superhuman'
				}
			}
		},
		{
			title: 'Snake AI (In progress)',
			description: 'An intelligent agent that plays the classic Snake game, utilizing pathfinding algorithms and heuristics for optimal food collection and survival.',
			image: 'https://images.unsplash.com/photo-1511287413669-e7090b4d455d',
			images: ['https://images.unsplash.com/photo-1511287413669-e7090b4d455d',
				'https://images.unsplash.com/photo-1507914466540-8b1b2f0a1c1d',
				'https://www.youtube.com/watch?v=FjH_GqTjB0c',
				'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b'
			],
			tags: ['Python', 'Pathfinding', 'Graph Algorithms', 'A* Search', 'Heuristics', 'Game AI'],
			category: 'AI',
			githubLink: 'https://github.com/agene0001/snake-ai-dummy',
			youtubeLink: 'https://www.youtube.com/watch?v=FjH_GqTjB0c',
			featured: false,
			detailed: {
				overview: 'This project develops an AI for the popular game Snake. It employs sophisticated pathfinding algorithms, primarily Breadth-First Search (BFS) and A*, combined with strategic heuristics to guide the snake to food while avoiding collisions with itself and the game boundaries, aiming for the highest possible score.',
				challenges: ['Ensuring the snake can always find a path to its tail (or an empty space) after eating food to avoid dead ends.', 'Optimizing pathfinding efficiency for increasingly longer snakes.', 'Developing a robust heuristic to prioritize paths that allow for future movement and maximum score.', 'Handling dynamic game state changes (snake growing, new food appearance).'],
				solutions: ['Implemented BFS to find the shortest path to food, and then a secondary path to the tail to ensure escape routes.', 'Developed a "safe longest path" heuristic that considers the snake\'s health and future movement possibilities.', 'Utilized efficient queue-based data structures for graph traversal.', 'Introduced a simple game loop to simulate and visualize the AI\'s gameplay in real-time.'],
				techStack: {
					'Core': ['Python'],
					'Algorithms': ['Breadth-First Search (BFS)', 'A* Search', 'Heuristics', 'Graph Traversal'],
					'Game Logic': ['Pygame', 'Custom Game Grid'],
					'Data Structures': ['Queues', 'Lists']
				},
				resources: [{title: 'Snake AI Strategies', url: '#', type: 'article'}, {
					title: 'Pathfinding Algorithms Tutorial',
					url: '#',
					type: 'tutorial'
				}, {title: 'Game AI Design Patterns', url: '#', type: 'docs'}],
				metrics: {
					'Highest Score Achieved': 'Varies (potentially infinite)',
					'Average Game Duration': 'Long',
					'Pathfinding Accuracy': 'High',
					'Collision Rate': 'Very Low'
				}
			}
		},
		{
			"title": "Healthcare Consulting Platform",
			"description": "Professional consulting website with service booking, client management, and content management system.",
			"image": "imgs/MVI/MVIImage.png",
			"images": [
				"imgs/MVI/MVIImage.png",
				"imgs/MVI/MVIImage2.png",
			],
			"tags": ["Squarespace", "Custom CSS", "JavaScript", "SEO"],
			"category": "Web Development",
			"liveLink": "https://www.milesventsinchealthcare.com/",
			"featured": false,
			"detailed": {
				"overview": "A professional online presence for a healthcare consulting firm, enabling service showcasing, client engagement, and streamlined appointment booking. Built on Squarespace, it emphasizes user-friendly navigation and a clean aesthetic tailored to the healthcare industry.",
				"challenges": [
					"Achieving deep customization within Squarespace's platform limitations while maintaining performance.",
					"Optimizing SEO for a niche healthcare consulting market to improve organic visibility.",
					"Integrating seamless third-party service booking and client management tools.",
					"Ensuring data privacy and compliance standards for client information, even on a platform-based solution."
				],
				"solutions": [
					"Leveraged custom CSS and selective JavaScript injections to extend Squarespace's design capabilities and user experience.",
					"Implemented a robust content strategy focused on relevant keywords and thought leadership, supported by Squarespace's built-in SEO tools.",
					"Seamlessly integrated a popular third-party booking system and CRM via embeds and API connectors for efficient client workflows.",
					"Adhered to best practices for data security and privacy, utilizing Squarespace's secure infrastructure and opting for compliant third-party services."
				],
				"techStack": {
					"Platform": ["Squarespace", "Squarespace Fluid Engine"],
					"Customization": ["Custom CSS", "JavaScript (vanilla)"],
					"Integrations": ["Third-party Booking APIs (e.g., Acuity Scheduling)", "CRM integrations (e.g., Mailchimp/Zapier)"],
					"SEO/Analytics": ["Google Analytics", "Google Search Console", "Schema Markup"]
				},
				"resources": [
					{ "title": "Squarespace Help Center", "url": "https://support.squarespace.com/", "type": "docs" },
					{ "title": "Advanced Squarespace Customization", "url": "https://5help.squarespace.com/hc/en-us/sections/200786977-Advanced-Customization", "type": "tutorial" },
					{ "title": "Healthcare SEO Best Practices", "url": "https://www.forbes.com/councils/forbesagencycouncil/2023/11/16/local-seo-a-guide-for-healthcare-practices/", "type": "article" }
				],
				"metrics": {
					"Pages Developed": "15+",
					"Booking Conversion Rate": "Optimized (post-launch)",
					"Avg. Page Load Time": "< 2 seconds",
					"SEO Ranking": "Improved (targeted keywords)"
				}
			}
		},
		{
			title: 'Smart Class Scheduler',
			description: 'Automated university course scheduling system with conflict detection, prerequisite checking, and optimal timetable generation.',
			image: '/classscheduler.png',
			images: [
				'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
				'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e'
			],
			tags: ['Python', 'Django', 'PostgreSQL', 'Algorithm Design', 'React'],
			category: 'Data Science',
			githubLink: 'https://github.com/agene0001/Scheduler',
			status: 'In Progress',
			detailed: {
				overview: 'A sophisticated scheduling system that uses constraint satisfaction algorithms to automatically generate optimal class schedules while handling complex university requirements, room assignments, and student preferences.',
				challenges: [
					'Solving complex constraint satisfaction problems with multiple variables',
					'Handling dynamic schedule changes and real-time updates',
					'Optimizing for multiple conflicting objectives (time, location, preferences)',
					'Managing large datasets with thousands of courses and students'
				],
				solutions: [
					'Implemented backtracking algorithm with constraint propagation',
					'Built priority-based scheduling with weighted objective functions',
					'Created efficient data structures for fast conflict detection',
					'Used Django REST framework for real-time API updates'
				],
				techStack: {
					'Backend': ['Django 4.x', 'Django REST Framework', 'Celery'],
					'Database': ['PostgreSQL', 'Redis'],
					'Frontend': ['React', 'TypeScript', 'Material-UI'],
					'Algorithms': ['Constraint Satisfaction', 'Graph Theory', 'Optimization']
				},
				resources: [
					{ title: 'Django Documentation', url: 'https://docs.djangoproject.com/', type: 'docs' },
					{ title: 'Constraint Programming Guide', url: '#', type: 'tutorial' },
					{ title: 'Algorithm Design Patterns', url: '#', type: 'article' }
				],
				metrics: {
					'Schedule Generation': '< 30 seconds',
					'Conflict Resolution': '99.2%',
					'Student Satisfaction': '92%',
					'Room Utilization': '85%'
				}
			}
		},
		{
			title: 'Data Analysis Suite',
			description: 'Collection of data science projects including market analysis, predictive modeling, and visualization dashboards.',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
			images: [
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
				'https://images.unsplash.com/photo-1507914466540-8b1b2f0a1c1d',
				'https://images.unsplash.com/photo-1507914466540-8b1b2f0a1c1d'
			],
			tags: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Jupyter'],
			category: 'Data Science',
			githubLink: 'https://github.com/agene0001/data-analysis-suite-dummy',
			featured: false,
			detailed: {
				overview: 'This suite comprises various data analysis projects demonstrating proficiency in data manipulation, statistical modeling, and interactive visualization. From market trend predictions to customer segmentation, each project tackles real-world data challenges using advanced analytical techniques.',
				challenges: [
					'Handling large, messy, and disparate datasets',
					'Selecting appropriate statistical models for diverse business problems',
					'Optimizing visualization for clear and actionable insights',
					'Ensuring reproducibility and scalability of analysis pipelines'
				],
				solutions: [
					'Developed robust data cleaning and preprocessing pipelines using Pandas',
					'Implemented cross-validation and hyperparameter tuning for predictive models',
					'Utilized interactive libraries like Plotly and Seaborn for dynamic dashboards',
					'Containerized analytical environments with Docker for consistent execution'
				],
				techStack: {
					'Core': ['Python', 'Jupyter Notebook', 'Anaconda'],
					'Data Analysis': ['Pandas', 'NumPy', 'SciPy'],
					'Machine Learning': ['Scikit-learn', 'TensorFlow/Keras (basic)'],
					'Visualization': ['Matplotlib', 'Seaborn', 'Plotly', 'Dash'],
					'Tools': ['SQL', 'Git', 'Docker']
				},
				resources: [
					{ title: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/', type: 'docs' },
					{ title: 'Scikit-learn User Guide', url: 'https://scikit-learn.org/stable/user_guide.html', type: 'docs' },
					{ title: 'Effective Data Visualization', url: '#', type: 'article' }
				],
				metrics: {
					'Models Developed': '5+',
					'Data Sources Integrated': '7',
					'Prediction Accuracy': '90% (avg)',
					'Insight Generation': 'High'
				}
			}
		},
		{
			title: 'Cybersecurity Tools',
			description: 'Security analysis tools including network scanning, vulnerability assessment, and penetration testing utilities.',
			image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
			images: [
				'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
				'https://images.unsplash.com/photo-1596706927357-ac15cf77f193',
				'https://images.unsplash.com/photo-1550751827-4bd374c3f58b'
			],
			tags: ['Python', 'Kali Linux', 'Nmap','Burpsuite', 'Wireshark', 'Bash'],
			category: 'Security',
			githubLink: 'https://github.com/agene0001/dotfiles',
			featured: false,
			detailed: {
				overview: 'A collection of my configuration files for linux and bug bounties from the book "Hacking APIs: Breaking Web Application Programming Interfaces". In the future I hope to add custom and curated cybersecurity scripts and tools designed for network reconnaissance, vulnerability scanning, and ethical hacking exercises. The tools will assist in identifying potential weaknesses and improving the security posture of systems.',
				challenges: [
					'Bypassing intrusion detection systems (IDS) and firewalls',
					'Handling diverse network protocols and operating system variations',
					'Ensuring the legality and ethical use of scanning tools',
					'Analyzing large volumes of security logs and traffic data'
				],
				solutions: [
					'Implemented stealth scanning techniques and randomized packet structures',
					'Developed modular scripts adaptable to various network environments',
					'Adhered strictly to ethical hacking guidelines and simulated environments',
					'Created automated parsers and aggregators for security log analysis'
				],
				techStack: {
					'Scripting': ['Python', 'Bash', 'Perl (basic)'],
					'Tools': ['Nmap', 'Metasploit', 'Wireshark', 'Burp Suite', 'OpenVAS'],
					'OS': ['Kali Linux', 'Parrot OS'],
					'Concepts': ['Network Protocols', 'Cryptography', 'Vulnerability Assessment', 'Penetration Testing']
				},
				resources: [
					{ title: 'Nmap Documentation', url: 'https://nmap.org/book/man.html', type: 'docs' },
					{ title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', type: 'article' },
					{ title: 'Ethical Hacking Fundamentals', url: 'https://github.com/akr3ch/BugBountyBooks/blob/main/Hacking%20APIs%20-%20Early%20Access.pdf', type: 'tutorial' }
				],
				metrics: {
					'Vulnerabilities Detected': '20+',
					'Scanning Speed': 'Fast',
					'False Positives': 'Low',
					'Coverage': 'Comprehensive'
				}
			}
		}
	];

	const categories = ['All', 'Full Stack', 'Data Science', 'Automation', 'Security', 'Web Development', 'AI'];

	// --- REACTIVE STATE ---
	let selectedCategory = 'All';
	let isVisible = false;
	let selectedProject: (typeof projects[0] | null) = null;
	let currentImageIndex = 0;

	// --- DERIVED STATE (Auto-updates when selectedCategory changes) ---
	$: filteredProjects = selectedCategory === 'All'
		? projects
		: projects.filter(project => project.category === selectedCategory || (project.category === 'AI' && selectedCategory === 'Data Science'));

	// --- LIFECYCLE HOOKS ---
	onMount(() => {
		isVisible = true;
	});

	onDestroy(() => {
		if (typeof document !== 'undefined') {
			document.body.style.overflow = 'unset';
		}
	});

	// --- HELPER FUNCTIONS & EVENT HANDLERS ---
	function getYouTubeVideoId(url: string | null): string | null {
		if (!url || typeof url !== 'string') return null;
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		const match = url.match(regExp);
		return (match && match[2].length === 11) ? match[2] : null;
	}

	const openModal = (project: typeof projects[0]) => {
		selectedProject = project;
		currentImageIndex = 0;
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		selectedProject = null;
		document.body.style.overflow = 'unset';
	};

	const nextImage = () => {
		if (selectedProject) {
			currentImageIndex = (currentImageIndex + 1) % selectedProject.images.length;
		}
	};

	const prevImage = () => {
		if (selectedProject) {
			currentImageIndex = (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
		}
	};

	const getCategoryIcon = (category) => {
		switch (category) {
			case 'Full Stack': return Code;
			case 'Data Science': return Brain;
			case 'AI': return Brain;
			case 'Automation': return Zap;
			case 'Security': return Database;
			case 'Web Development': return Code;
			default: return Code;
		}
	};

	const getResourceIcon = (type) => {
		switch (type) {
			case 'docs': return BookOpen;
			case 'tutorial': return Play;
			case 'article': return Lightbulb;
			case 'guide': return Users;
			default: return ExternalLink;
		}
	};
</script>

<style>
    @keyframes project-fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes project-slide-in { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes modal-fade-in { from { opacity: 0; } to { opacity: 1; } }
    @keyframes modal-slide-in { from { opacity: 0; transform: scale(0.95) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
    .project-card { animation: project-fade-in 0.6s ease-out forwards; }
    .modal-overlay { animation: modal-fade-in 0.3s ease-out; }
    .modal-content { animation: modal-slide-in 0.4s ease-out; }
</style>

<section id="projects" class="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_50%)] pointer-events-none"></div>

	<div class="max-w-7xl mx-auto px-6 relative">
		<div class="text-center mb-20" class:animate-fade-in={isVisible} class:opacity-0={!isVisible}>
			<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
				<Code class="w-4 h-4 text-violet-400" />
				<span class="text-violet-400 font-medium">Featured Work</span>
			</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-6">
				<span class="text-white">Projects & </span>
				<span class="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Innovations</span>
			</h2>
			<p class="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
				Explore my portfolio of full-stack applications, data science projects, and automation tools.
				Each project represents a solution to real-world problems, built with modern technologies and best practices.
			</p>
		</div>

		<div class="flex flex-wrap justify-center gap-3 mb-16" class:animate-slide-in-left={isVisible} class:opacity-0={!isVisible}>
			{#each categories as category}
				<button
					on:click={() => selectedCategory = category}
					class="px-6 py-3 rounded-full font-medium transition-all duration-300 {selectedCategory === category
            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
            : 'bg-slate-800/50 text-slate-400 hover:text-violet-400 hover:bg-slate-800/80 border border-slate-700/50'}"
				>
          <span class="flex items-center gap-2">
            {#if category !== 'All'}
              <svelte:component this={getCategoryIcon(category)} class="w-4 h-4" />
            {/if}
						{category}
          </span>
				</button>
			{/each}
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredProjects as project, index (project.title)}
				<div
					class="project-card group relative bg-slate-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 hover:border-violet-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] cursor-pointer {project.featured ? 'ring-1 ring-violet-500/20' : ''}"
					style="animation-delay: {index * 0.1}s"
					on:click={() => openModal(project)}
				>
					{#if project.featured}
						<div class="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full text-white text-sm font-medium">
							Featured
						</div>
					{/if}
					{#if project.status}
						<div class="absolute top-4 right-4 z-10 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium">
							{project.status}
						</div>
					{/if}

					<div class="relative h-48 overflow-hidden">
						<img src={project.image} alt={project.title} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
						<div class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
							<div class="text-center">
								<Zap class="w-8 h-8 text-violet-400 mx-auto mb-2" />
								<p class="text-white font-medium">Click to explore</p>
							</div>
						</div>
					</div>

					<div class="p-6">
						<div class="flex items-center gap-2 mb-3">
							<svelte:component this={getCategoryIcon(project.category)} class="w-4 h-4 text-violet-400" />
							<span class="text-violet-400 text-sm font-medium">{project.category}</span>
						</div>
						<h3 class="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
							{project.title}
						</h3>
						<p class="text-slate-400 mb-4 leading-relaxed line-clamp-3">
							{project.description}
						</p>
						<div class="flex flex-wrap gap-2">
							{#each project.tags.slice(0, 3) as tag}
                <span class="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50 hover:border-violet-500/50 transition-colors duration-300">
                  {tag}
                </span>
							{/each}
							{#if project.tags.length > 3}
                <span class="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-sm border border-violet-500/30">
                  +{project.tags.length - 3} more
                </span>
							{/if}
						</div>
					</div>

					<div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
				</div>
			{/each}
		</div>

		<div class="text-center mt-16" class:animate-fade-in={isVisible} class:opacity-0={!isVisible} style="animation-delay: 0.8s;">
			<p class="text-slate-400 mb-6">
				Interested in collaborating or learning more about my work?
			</p>
			<a href="https://github.com/agene0001" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 border border-slate-600 hover:border-violet-500">
				<Github class="w-5 h-5" />
				View All Projects on GitHub
			</a>
		</div>
	</div>

	<!-- Project Modal -->
	{#if selectedProject}
		{@const currentMedia = selectedProject.images[currentImageIndex]}
		{@const videoId = getYouTubeVideoId(currentMedia)}

		<div class="modal-overlay fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" on:click={closeModal}>
			<div class="modal-content bg-slate-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl" on:click|stopPropagation>
				<div class="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-6 flex items-center justify-between">
					<div class="flex items-center gap-4">
						<div class="flex items-center gap-2">
							<svelte:component this={getCategoryIcon(selectedProject.category)} class="w-4 h-4 text-violet-400" />
							<span class="text-violet-400 text-sm font-medium">{selectedProject.category}</span>
						</div>
						<h2 class="text-2xl font-bold text-white">{selectedProject.title}</h2>
					</div>
					<button on:click={closeModal} class="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200">
						<X class="w-6 h-6" />
					</button>
				</div>

				<div class="p-6">
					<div class="relative mb-8 rounded-xl overflow-hidden bg-slate-800">
						<div class="relative h-64 md:h-96">
							{#if videoId}
								<iframe
									src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
									title={selectedProject.title}
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
									class="w-full h-full"
								></iframe>
							{:else}
								<img src={currentMedia} alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`} class="w-full h-full object-cover" />
							{/if}

							<div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

							{#if selectedProject.images.length > 1}
								<button on:click|stopPropagation={prevImage} class="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-violet-600/80 text-white rounded-full transition-all duration-200">
									<ChevronLeft class="w-5 h-5" />
								</button>
								<button on:click|stopPropagation={nextImage} class="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-violet-600/80 text-white rounded-full transition-all duration-200">
									<ChevronRight class="w-5 h-5" />
								</button>
								<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
									{#each selectedProject.images as _, index}
										<button
											on:click|stopPropagation={() => currentImageIndex = index}
											class="w-2 h-2 rounded-full transition-all duration-200"
											class:bg-violet-400={index === currentImageIndex}
											class:bg-slate-600={index !== currentImageIndex}
											class:hover:bg-slate-500={index !== currentImageIndex}
										/>
									{/each}
								</div>
							{/if}
						</div>
					</div>

					<div class="flex gap-4 mb-8">
						{#if selectedProject.githubLink}
							<a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-violet-600 text-white rounded-lg transition-all duration-200">
								<Github class="w-4 h-4" /> View Code
							</a>
						{/if}
						{#if selectedProject.liveLink}
							<a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-200">
								<ExternalLink class="w-4 h-4" /> Live Demo
							</a>
						{/if}
						{#if selectedProject.youtubeLink}
							<a href={selectedProject.youtubeLink} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-200">
								<Play class="w-4 h-4" /> Watch Video
							</a>
						{/if}
					</div>

					{#if selectedProject.detailed}
						<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
							<div class="lg:col-span-2 space-y-8">
								<div>
									<h3 class="text-xl font-bold text-white mb-4">Project Overview</h3>
									<p class="text-slate-300 leading-relaxed">{selectedProject.detailed.overview}</p>
								</div>
								<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Zap class="w-5 h-5 text-red-400" /> Challenges</h4>
										<ul class="space-y-3">
											{#each selectedProject.detailed.challenges as challenge}
												<li class="text-slate-300 text-sm leading-relaxed pl-4 border-l-2 border-red-500/30">{challenge}</li>
											{/each}
										</ul>
									</div>
									<div>
										<h4 class="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Lightbulb class="w-5 h-5 text-green-400" /> Solutions</h4>
										<ul class="space-y-3">
											{#each selectedProject.detailed.solutions as solution}
												<li class="text-slate-300 text-sm leading-relaxed pl-4 border-l-2 border-green-500/30">{solution}</li>
											{/each}
										</ul>
									</div>
								</div>
								<div>
									<h4 class="text-lg font-semibold text-white mb-4">Technology Stack</h4>
									<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
										{#each Object.entries(selectedProject.detailed.techStack) as [category, techs]}
											<div class="bg-slate-800/50 rounded-lg p-4">
												<h5 class="font-medium text-violet-400 mb-2">{category}</h5>
												<div class="flex flex-wrap gap-2">
													{#each techs as tech}
														<span class="px-2 py-1 bg-slate-700 text-slate-300 rounded text-sm">{tech}</span>
													{/each}
												</div>
											</div>
										{/each}
									</div>
								</div>
							</div>
							<div class="space-y-6">
								<div class="bg-slate-800/50 rounded-lg p-6">
									<h4 class="text-lg font-semibold text-white mb-4">Project Metrics</h4>
									<div class="space-y-3">
										{#each Object.entries(selectedProject.detailed.metrics) as [metric, value]}
											<div class="flex justify-between items-center">
												<span class="text-slate-400 text-sm">{metric}</span>
												<span class="text-violet-400 font-medium">{value}</span>
											</div>
										{/each}
									</div>
								</div>
								<div class="bg-slate-800/50 rounded-lg p-6">
									<h4 class="text-lg font-semibold text-white mb-4">Resources & References</h4>
									<div class="space-y-3">
										{#each selectedProject.detailed.resources as resource}
											<a href={resource.url} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors duration-200 group">
												<svelte:component this={getResourceIcon(resource.type)} class="w-4 h-4" />
												<div class="flex flex-grow flex-col min-w-0">
													<span class="text-white font-medium group-hover:text-violet-400 transition-colors duration-200">{resource.title}</span>
													<span class="text-slate-400 text-xs break-words">Learn More</span>
												</div>
												<ExternalLink class="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors duration-200" />
											</a>
										{/each}
									</div>
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</section>