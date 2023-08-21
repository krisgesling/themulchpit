<script>
	import '../app.css';
    import { base } from "$app/paths";
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
    let copyrightMessage = "";
</script>

<header class="bg-white">
	<div class="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
		<Navbar let:hidden let:toggle>
			<NavBrand href="{base}/">
				<img
					src="{base}/images/uca-logo_no-bg.png"
					class="mr-3 h-6 sm:h-9"
					alt="Uniting Church of Australia Logo"
				/>
				<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
					>The Mulch Pit</span
				>
			</NavBrand>
			<NavHamburger on:click={toggle} />
			<NavUl {hidden}>
				<NavLi href="{base}/">Home</NavLi>
				<NavLi href="{base}/">About</NavLi>
				<NavLi href="{base}/">Blog</NavLi>
				<NavLi href="{base}/">Events</NavLi>
				<NavLi href="{base}/">Contact</NavLi>
			</NavUl>
		</Navbar>
	</div>
</header>

<slot />

<Footer>
	<FooterCopyright href="{base}/" by="Uniting Church of Australia" year={2023} {copyrightMessage} />
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="{base}/">About</FooterLink>
		<FooterLink href="{base}/">Privacy Policy</FooterLink>
		<FooterLink href="{base}/">Licensing</FooterLink>
		<FooterLink href="{base}/">Contact</FooterLink>
	</FooterLinkGroup>
</Footer>
