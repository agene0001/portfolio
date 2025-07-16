<!-- src/routes/+layout.svelte -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css'; // Import global styles
</script>

<div class="min-h-screen bg-gray-900">
	<Header />
	<main>
		<!-- The <slot /> tag is where the content of the current page will be rendered -->
		<slot />
	</main>
	<Footer />
</div>