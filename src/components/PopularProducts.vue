<template>
	<div class="popular-products">
		<div class="popular-products__bg-image">
			<img src="@/assets/img/chair-bg.png" alt="bg" />
		</div>
		<h1 class="popular-products__title">Popular Products</h1>
		<div class="popular-products__list">
			<swiper
				:slidesPerView="'auto'"
				:freeMode="true"
				:scrollbar="{
					hide: false,
					dragSize: 120,
				}"
				:mousewheel="{
					forceToAxis: true,
				}"
				:modules="modules"
				:navigation="true"
				class="popular-products__list-holder mySwiper"
			>
				<swiper-slide
					class="product-card"
					v-for="card in products"
					:key="card"
				>
					<div class="product-card__img">
						<img :src="card.imgPath" :alt="card.title" />
					</div>
					<div class="product-card__title">
						{{ card.title }}
					</div>
					<div class="product-card__desc">
						{{ card.desc }}
					</div>
					<div class="product-card__price">
						{{ card.price }}
					</div>
				</swiper-slide>
			</swiper>
		</div>
		<div class="popular-products__all-btn">
			<a href="#" class="button">
				Explore all items
				<icon-arrow></icon-arrow>
			</a>
		</div>
	</div>
</template>
<script>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { FreeMode, Mousewheel, Scrollbar, Navigation } from "swiper";
	import "swiper/css";
	import "swiper/css/free-mode";
	import "swiper/css/scrollbar";
	import "swiper/css/navigation";
	import iconArrow from "../components/icons/iconArrow.vue";

	const getImagePath = function (imgFile) {
		return new URL(`/src/assets/img/${imgFile}`, import.meta.url);
	};

	export default {
		data() {
			return {
				products: [
					{
						title: "Armchair",
						desc: "Light single chair",
						price: "$145",
						imgPath: getImagePath("chair-1.png"),
					},
					{
						title: "Premium Sofa",
						desc: "Light single chair",
						price: "$145",
						imgPath: getImagePath("chair-2.png"),
					},
					{
						title: "Minimal Sofa",
						desc: "Light single chair",
						price: "$145",
						imgPath: getImagePath("chair-3.png"),
					},
					{
						title: "Dining Chair",
						desc: "Light single chair",
						price: "$145",
						imgPath: getImagePath("chair-4.png"),
					},
					{
						title: "Armchair",
						desc: "Light single chair",
						price: "$145",
						imgPath: getImagePath("chair-1.png"),
					},
					{
						title: "Premium Sofa",
						desc: "Light single chair",
						price: "$145",
						imgPath: getImagePath("chair-2.png"),
					},
					{
						title: "Minimal Sofa",
						desc: "Light single chair",
						price: "$145",
						imgPath: getImagePath("chair-3.png"),
					},
					{
						title: "Dining Chair",
						desc: "Light single chair",
						price: "$145",
						imgPath: getImagePath("chair-4.png"),
					},
				],
			};
		},
		methods: {
			scrollRight() {
				const container = document.querySelector(
					".popular-products__list-holder"
				);
				const cardWidth =
					document.querySelector(".product-card").offsetWidth;
				container.scrollBy({
					left: cardWidth,
					behavior: "smooth",
				});
			},
		},
		components: {
			Swiper,
			SwiperSlide,
			iconArrow,
		},
		setup() {
			return {
				modules: [FreeMode, Mousewheel, Scrollbar, Navigation],
			};
		},
	};
</script>
<style lang="scss" scoped>
	.popular-products {
		padding-top: 115px;
		padding-bottom: 100px;
		position: relative;
		overflow: hidden;
		@media (max-width: 1200px) {
			padding-top: 55px;
			padding-bottom: 100px;
		}
		@media (max-width: 767px) {
			padding-top: 40px;
			padding-bottom: 80px;
		}
		&__bg-image {
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			width: 410px;
			height: 1100px;
			pointer-events: none;
			z-index: -1;
			@media (max-width: 767px) {
				width: 179px;
				height: 435px;
			}
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
		&__title {
			text-align: center;
			@media (max-width: 1200px) {
				margin-bottom: 105px;
			}
			@media (max-width: 767px) {
				margin-bottom: 60px;
			}
		}
		&__list {
			margin-bottom: 115px;
			@media (max-width: 767px) {
				margin-bottom: 60px;
			}
		}
		&__list-holder {
			display: flex;
			padding-right: 40px;
			padding-bottom: 55px;
			overflow: visible;
			margin-left: 30px;
			margin-right: 30px;
			@media (max-width: 1200px) {
				padding-bottom: 100px;
			}
			@media (max-width: 767px) {
				padding-bottom: 60px;
			}
			@media (min-width: 1200px) {
				margin-left: calc((100vw - 1180px) / 2);
				margin-right: calc((100vw - 1180px) / 2);
			}
			@media (min-width: 1800px) {
				margin-left: calc((100vw - 1620px) / 2);
				margin-right: calc((100vw - 1620px) / 2);
			}
			:deep(.swiper-scrollbar) {
				background-color: #07484a;
				height: 6px;
				border-radius: 0;
				.swiper-scrollbar-drag {
					background-color: #70908b;
					height: 12px;
					margin-top: -3px;
					border-radius: 0;
				}
			}
			:deep(.swiper-button-prev),
			:deep(.swiper-button-next) {
				bottom: -60px;
				top: auto;
				left: auto;
				right: 65px;
				width: 40px;
				height: 40px;
				background: #e0eff6;
				border-radius: 50%;
				background-image: url("/src/assets/img/arrow.svg");
				background-size: 12px;
				background-position: center;
				background-repeat: no-repeat;
				&::after {
					display: none;
				}
				&.swiper-button-disabled {
					opacity: 0.7;
				}

				@media (max-width: 1200px) {
					display: none;
				}
			}
			:deep(.swiper-button-next) {
				background-color: #f9d9da;
				transform: rotate(180deg);
				right: 0;
			}
		}
		&__all-btn {
			display: flex;
			justify-content: center;
			.button {
				svg,
				img {
					margin-left: 20px;
					display: inline-block;
				}
				:deep(svg path) {
					transition: fill 0.2s ease-in-out;
				}
				@media (max-width: 767px) {
					padding-left: 38px;
					padding-right: 38px;
				}
				&:hover {
					:deep(svg path) {
						fill: #07484a;
					}
				}
				// highlight mark
			}
		}
	}
	.product-card {
		width: 430px;
		border-radius: 16px;
		padding: 85px 40px 60px 40px;
		flex-shrink: 0;
		color: #70908b;
		font-size: 24px;
		line-height: 34px;
		flex-shrink: 0;
		@media (max-width: 767px) {
			width: 240px;
			padding: 20px;
		}
		&:nth-child(4n + 1),
		&:nth-child(1) {
			background-color: #caf3e5;
		}
		&:nth-child(4n + 2),
		&:nth-child(2) {
			background-color: #e0eff6;
		}
		&:nth-child(4n + 3),
		&:nth-child(3) {
			background-color: #eeebff;
		}
		&:nth-child(4n + 4),
		&:nth-child(4) {
			background-color: #fff4e7;
		}

		&:not(:last-child) {
			margin-right: 32px;
		}

		&__img {
			width: 100%;
			margin-bottom: 40px;
			@media (max-width: 767px) {
				min-height: 200px;
				margin-bottom: 0;
			}
			img {
				width: 100%;
				min-height: 300px;
				object-fit: contain;
				@media (max-width: 767px) {
					min-height: 1px;
				}
			}
		}

		&__title {
			font-weight: 700;
			margin-bottom: 15px;
		}

		&__desc {
			margin-bottom: 15px;
			font-size: 18px;
			line-height: 24px;
		}

		&__price {
			font-weight: 700;
		}

		& > *:last-child {
			margin-bottom: 0;
		}
	}
</style>
