<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app bg-slate-100">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		
	</footer>
</div>

<style>
	

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
