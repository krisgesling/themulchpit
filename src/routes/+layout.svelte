<script>
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
    let copyrightMessage = ""
</script>

<header class="bg-white">
	<div class="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
		<Navbar let:hidden let:toggle>
			<NavBrand href="/">
				<img
					src="/images/uca-logo_no-bg.png"
					class="mr-3 h-6 sm:h-9"
					alt="Uniting Church of Australia Logo"
				/>
				<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
					>The Mulch Pit</span
				>
			</NavBrand>
			<NavHamburger on:click={toggle} />
			<NavUl {hidden}>
				<NavLi href="/">Home</NavLi>
				<NavLi href="/about">About</NavLi>
				<NavLi href="/blog">Blog</NavLi>
				<NavLi href="/events">Events</NavLi>
				<NavLi href="/contact">Contact</NavLi>
			</NavUl>
		</Navbar>
	</div>
</header>

<slot />

<Footer>
	<FooterCopyright href="/" by="Uniting Church of Australia" year={2023} {copyrightMessage} />
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="/">About</FooterLink>
		<FooterLink href="/">Privacy Policy</FooterLink>
		<FooterLink href="/">Licensing</FooterLink>
		<FooterLink href="/">Contact</FooterLink>
	</FooterLinkGroup>
</Footer>
