<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import best from '$lib/images/best.png';
	import dateFun from '$lib/funcs/dateConverter.js';
	import { each } from 'svelte/internal';
	import SiClubhouse from "svelte-icons-pack/si/SiClubhouse";
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import ImTicket from "svelte-icons-pack/im/ImTicket";

	export let data;

	$: items = data.item ? data.item : []
	console.log(data)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="game predictions" />
</svelte:head>

<section class=" w-full ">
	<div class=" flex justify-between items-center w-full  bg-gradient-to-r from-[#060210]  via-[#0d0523] to-[#160839] p-3">
		<div class=" flex flex-col gap-5 items-start ">
			<div class="font-bold text-2xl text-white">Get 300% on your first deposit</div>
			<div class="text-gray-300">Top up your account with minimum of NGN1000 to start getting sure games on our email</div>
			<a href="/payment" class="bg-white py-3 px-4 rounded-lg font-semibold">Get Started</a>
		</div>

		<img alt='' class=" w-[40%]" src={best}/>
	</div>

	<div class=" my-4 flex flex-col gap-3 p-4">
		{#if items.length > 1}
			{#each items as item} 
				<div class=" bg-slate-200 py-4 px-2 rounded-lg flex flex-col gap-4">
					<div class="flex justify-center gap-2 item-center my-4">
						<Icon src={SiClubhouse} color="green" size="24" title="Custom icon params" />
						<div>{item.sport_title}</div>
					</div>
					<div class="flex justify-between">
						<div class=" flex flex-col items-center w-[40%] text-center gap-4 justify-between">
							<div class="text-xl font-semibold">{item.home_team}</div>
							<div>Home</div>
						</div>
						<div class="p-2 bg-gray-400 h-[100%]">{dateFun(item.commence_time)}</div>
						<div class=" flex flex-col items-center w-[40%] text-center gap-4 justify-between">
							<div class="text-xl font-semibold">{item.away_team}</div>
							<div>Away</div>
						</div>
					</div>
				<div class="flex justify-between items-center">
					<div class="my-4">
						<a href='/payment' class="p-3 text-blue-600 rounded-3xl bg-blue-300">Prediction: VIP</a>
					</div>
					<div class="flex gap-2 items-center"><div>{item.bookmakers.length}</div><Icon src={ImTicket} color="green" size="24" title="Custom icon params" /></div>
				</div>
				</div>
			{/each}
		{:else}
			<div class=' my-5 text-center'>Loading...</div>
		{/if}
	</div>


</section>

