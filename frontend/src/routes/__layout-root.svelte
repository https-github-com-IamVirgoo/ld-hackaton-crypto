<slot/>


<script>
    // Place here onMount scripts
</script>
<script context="module">

/**
 * Handling that use does't have cookie setted, Put here in future
 * check of headers
 */
export async function load({ session }) {
    if (!session?.user) {
        return {
            status: 302,
            redirect: "/login"
        }
    }
    return {
        status: 200,
        props: {
            user: session.user
        }
    };
};
</script>