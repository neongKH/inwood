<template>
	<div class="hero-section">
		<div class="hero-section__bg">
			<slot name="bgImage"></slot>
		</div>
		<div class="container">
			<div class="hero-section-holder">
				<slot name="title"> </slot>
				<slot name="content"> </slot>
				<slot name="button"> </slot>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
	.hero-section {
		min-height: 700px;
		height: 100vh;
		position: relative;
		display: flex;
		align-items: center;
		&__bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			:slotted(img) {
				width: 100%;
				height: 100%;
				object-fit: cover;
				@media (max-width: 767px) {
					object-position: -200px 0;
				}
			}
		}
		&-holder {
			@media (max-width: 767px) {
				text-align: center;
			}
			:slotted(.button) {
				margin-top: 55px;
				@media (max-width: 767px) {
					margin: 0 auto;
					margin-top: 52px;
					font-size: 18px;
					line-height: 23px;
					padding: 15px 40px;
				}
			}
		}
	}
</style>
