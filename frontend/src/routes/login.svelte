<h1>Login/Reg</h1>
<form on:submit|preventDefault={handleLogin}></form>
<input type="text" placeholder="login" bind:value={email}>
<input type="text" placeholder="pwd" bind:value={password}>
<button>Click</button>


<script>
let email = '';
let password = '';

const handleLogin = async function() {
	
};
</script>
