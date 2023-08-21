<script>
    import { base } from "$app/paths";

	import { Banner } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
	import { Carousel } from 'flowbite-svelte';

	let showThumbs = false;
	let showCaptions = false;

    export const images = [
    {
        id: 0,
        name: 'Cristina Gottardi',
        imgurl: `${base}/images/carousel/2.jpg`,
        attribution: '2'
    },
    {
        id: 2,
        name: 'Johannes Plenio',
        imgurl: `${base}/images/carousel/3.jpg`,
        attribution: '3'
    },
    {
        id: 3,
        name: 'Jonatan Pie',
        imgurl: `${base}/images/carousel/4.jpg`,
        attribution: '4'
    },
    {
        id: 4,
        name: 'Mark Harpur',
        imgurl: `${base}/images/carousel/5.jpg`,
        attribution: '5'
    }
];
</script>

<div class="bg-white">
	<Banner id="default-banner">
		<p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
			<span class="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600">
				<Icon name="bullhorn-solid" class="w-3 h-3 text-gray-500 dark:text-gray-400" />
				<span class="sr-only">Light bulb</span>
			</span>
			<span>
				The Mulch Pit website has been pruned, ready for new growth!
			</span>
		</p>
	</Banner>
	<div class="mx-auto max-w-7xl py-2 sm:px-32 lg:px-32">
		<!-- <div class="max-w-4xl"> -->
		<Carousel {images} loop {showCaptions} {showThumbs} duration="3000" />
		<!-- </div> -->
	</div>
</div>
