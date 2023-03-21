<template>
	<main>
		<HeroSection>
			<template #bgImage>
				<img src="@/assets/img/hero-section-bg.png" alt="background" />
			</template>
			<template #title>
				<h1>
					Exclusive Deals <br />
					of Furniture Collection
				</h1>
			</template>
			<template #content>
				<p>Explore different categories. Find the best deals.</p>
			</template>
			<template #button>
				<a href="#" class="button">Shop Now</a>
			</template>
		</HeroSection>
		<PopularProducts />
	</main>
</template>

<script setup>
	import HeroSection from "../components/HeroSection.vue";
	import PopularProducts from "../components/PopularProducts.vue";
</script>
