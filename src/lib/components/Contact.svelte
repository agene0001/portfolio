<!-- src/lib/components/Contact.svelte -->
<script lang="ts">
	import { Mail, Phone, MapPin } from '@lucide/svelte';

	let formData = {
		name: '',
		email: '',
		message: ''
	};

	function handleSubmit() {
		// Handle form submission, e.g., send to an API endpoint
		console.log(formData);
		// You would typically use fetch() here to post to a SvelteKit API route
		alert('Form submitted! Check the console.');
		// Reset form
		formData = { name: '', email: '', message: '' };
	}
</script>

<section id="contact" class="py-20 bg-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl font-bold text-white mb-4">Get in Touch</h2>
			<p class="text-lg text-gray-300 max-w-2xl mx-auto">
				Have a project in mind? Let's work together to create something amazing.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<div class="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8">
				<h3 class="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
				<div class="space-y-6">
					<!-- Contact Info -->
					<div class="flex items-center">
						<Mail class="w-6 h-6 text-indigo-400 mr-4" />
						<div>
							<p class="text-sm text-gray-400">Email</p>
							<p class="text-gray-300">agene001@umn.edu</p>
						</div>
					</div>
					<div class="flex items-center">
						<Phone class="w-6 h-6 text-indigo-400 mr-4" />
						<div>
							<p class="text-sm text-gray-400">Phone</p>
							<p class="text-gray-300">+1 (763) 357-4122</p>
						</div>
					</div>
					<div class="flex items-center">
						<MapPin class="w-6 h-6 text-indigo-400 mr-4" />
						<div>
							<p class="text-sm text-gray-400">Location</p>
							<p class="text-gray-300">Minneapolis, MN</p>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8">
				<form on:submit|preventDefault={handleSubmit} class="space-y-6">
					<div>
						<label for="name" class="block text-sm font-medium text-gray-300 mb-1">Name</label>
						<input
							type="text"
							id="name"
							bind:value={formData.name}
							class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
							required
						/>
					</div>
					<div>
						<label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
							required
						/>
					</div>
					<div>
						<label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
						<textarea
							id="message"
							bind:value={formData.message}
							rows={4}
							class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
							required
						/>
					</div>
					<button type="submit" class="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
						Send Message
					</button>
				</form>
			</div>
		</div>
	</div>
</section>