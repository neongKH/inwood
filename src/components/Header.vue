<template>
	<header class="header">
		<div class="container">
			<div class="header__row">
				<div
					class="header__menu-opener"
					@click="menuToggle"
					:class="{ active: menuActive }"
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div class="header__logo">
					<RouterLink to="/">
						<img src="@/assets/img/logo.png" alt="logo" />
					</RouterLink>
				</div>
				<nav class="header__nav" :class="{ active: menuActive }">
					<ul>
						<li>
							<RouterLink to="/">Home</RouterLink>
						</li>
						<li>
							<RouterLink to="/products">Products</RouterLink>
						</li>
						<li>
							<RouterLink to="/categories">Categories</RouterLink>
						</li>
						<li>
							<RouterLink to="/about">About</RouterLink>
						</li>
						<li>
							<RouterLink to="/contactus">Contact Us</RouterLink>
						</li>
					</ul>
				</nav>
				<div class="header__buttons">
					<a href="#" class="header__buttons-item">
						<img src="@/assets/img/seach-icon.svg" alt="icon" />
					</a>
					<a href="#" class="header__buttons-item">
						<img src="@/assets/img/cart-icon.svg" alt="icon" />
					</a>
					<a href="#" class="header__buttons-item">
						<img src="@/assets/img/user-icon.svg" alt="icon" />
					</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				menuActive: false,
			};
		},
		methods: {
			menuToggle() {
				this.menuActive = !this.menuActive;
				if (this.menuActive) {
					document.body.classList.add("menu-open");
				} else {
					document.body.classList.remove("menu-open");
				}
			},
		},
		watch: {
			$route(to, from) {
				this.menuActive = false;
				document.body.classList.remove("menu-open");
			},
		},
	};
</script>

<style lang="scss" scoped>
	:global(body),
	:global(#app) {
		overflow-x: hidden;
	}
	:global(body.menu-open),
	:global(body.menu-open #app) {
		overflow: hidden;
	}
	.header {
		background: rgba(224, 246, 241, 0.5);
		padding-top: 25px;
		padding-bottom: 25px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 20;
		&__menu-opener {
			width: 31px;
			span {
				background-color: #07484a;
				border-radius: 3px;
				height: 3px;
				width: 100%;
				display: block;
				transition: all 0.3s ease-in-out;
				transform-origin: right;
				&:not(:last-child) {
					margin-bottom: 6px;
				}
			}
			&.active {
				span {
					&:nth-child(1) {
						transform: rotate(-45deg);
						margin-left: -5px;
					}
					&:nth-child(2) {
						opacity: 0;
					}
					&:nth-child(3) {
						transform: rotate(45deg);
						margin-left: -5px;
						margin-top: 9.5px;
					}
				}
			}
			@media (min-width: 1200px) {
				display: none;
			}
			@media (min-width: 767px) and (max-width: 1200px) {
				order: 2;
			}
		}
		&__logo {
			a {
				display: flex;
				align-items: center;
				width: 150px;
				transition: opacity 0.3s ease-in-out;
				img {
					width: 100%;
				}
				&:hover {
					opacity: 0.7;
				}
			}
			@media (min-width: 767px) and (max-width: 1200px) {
				order: 1;
			}
		}
		&__row {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&__nav {
			@media (max-width: 1200px) {
				position: fixed;
				left: 0;
				top: 86px;
				width: 100vw;
				height: calc(100vh - 73px);
				padding-top: 50px;
				padding-bottom: 50px;
				background-color: rgba(224, 246, 241, 0.8);
				transform: translateX(100%);
				transition: transform 0.3s ease-in-out;
				overflow: auto;
				&.active {
					transform: translateX(0);
				}
			}

			@media (min-width: 767px) and (max-width: 1200px) {
				top: 87px;
			}

			@media (min-width: 1200px) {
				display: block;
			}
			ul {
				display: flex;
				align-items: center;
				height: 100%;

				@media (max-width: 1200px) {
					flex-direction: column;
				}
				li {
					&:not(:last-child) {
						@media (max-width: 1200px) {
							margin-bottom: 45px;
						}
						@media (min-width: 1200px) {
							margin-right: 45px;
						}
					}
					a {
						display: block;
						font-family: "Playfair Display";
						font-size: 20px;
						line-height: 27px;
						letter-spacing: 0.05em;
						color: var(--color-darkgreen);
						border-bottom: 3px solid transparent;
						transition: all 0.3s ease-in-out;
						@media (max-width: 1200px) {
							font-size: 26px;
						}
						&:hover {
							opacity: 0.7;
						}
						&.router-link-active {
							font-weight: 700;
							border-color: var(--color-darkgreen);
						}
					}
				}
			}
		}
		&__buttons {
			display: flex;
			align-items: center;
			@media (min-width: 767px) and (max-width: 1200px) {
				order: 3;
			}
		}

		&__buttons-item {
			width: 27px;
			height: 27px;
			display: block;
			transition: opacity 0.3s ease-in-out;
			&:not(:last-child) {
				margin-right: 60px;
				@media (max-width: 767px) {
					margin-right: 12px;
				}
			}
			img,
			svg {
				width: 100%;
				height: 100%;
			}
			&:hover {
				opacity: 0.7;
			}
		}
	}
</style>
