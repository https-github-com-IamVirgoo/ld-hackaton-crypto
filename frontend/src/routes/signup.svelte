<title>Enigma | Signup</title>

<section class="hero singlton">
    <div class="left--aligned">
        <img src="image/abs_pattern.png" alt="">
    </div>
    <div class="container">
        <div class="two-blocks c">
            <div class="block">
                <div class="inline-logo">
                    <img src="image/logo.svg" alt="Logo not loaded"> enigma
                </div>
            </div>
            <div class="block">
                <form on:submit|preventDefault={formSubmit}>
                    <input type="text" placeholder="Login" name="login">
                    <input type="password" placeholder="Password" name="pwd">
                    <input type="submit"  value="Submit">
                </form>
            </div>
        </div>
    </div>
    <div class="blue_wave">
        <img src="image/blue_wave.png" alt="">
    </div>
</section>

<script>
const formSubmit = async (data) => {
    const formData = new FormData(data.currentTarget);
    const res = await fetch("/api/user/auth", {
        method: "POST",
        body: formData,
    });
    if (res.redirected) {
        session.result = true
    }
};
</script>