<script>
	import { openModal } from './../store/index.js';
</script>
<header class="flex flex-col bg-white fixed top-0 left-0 w-full  z-20 px-4 fadeIn ">
    <div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6">
        <a href="/">
            <h1 class="font-semibold">Swoley <span class="text-indigo-400">Moley</span></h1>
        </a>
        <button on:click={() => $openModal = true} class="md:hidden grid place-items-center">
            <i class="fa-solid fa-bars"></i>
        </button>
        <nav class="hidden md:flex items-center gap-4 lg:gap-6">
            <a href="/#product" class="duration-200 hover:text-indigo-400 cursor-pointer">Product</a>
            <a href="/#reviews" class="duration-200 hover:text-indigo-400 cursor-pointer">Reviews</a>
            <a href="/#faqs" class="duration-200 hover:text-indigo-400 cursor-pointer">FAQs</a>
            <a href="/login">
                <button class="specialBtn">
                    <p>Start free today</p>
                </button>
            </a>
        </nav>
    </div>
</header>