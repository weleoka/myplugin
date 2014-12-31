<?php $title='jQuery! slideshow.'; include 'incl/header.php'; include 'src/filereader.php' ?>
<?php $pictures = readAllItemsinDir('img/gallery'); ?>

<div id="main">
		<h1>Slideshow YES!.</h1>
		<p>slideshow example.</p>

		<div class="slideshow">
			<?=$pictures?>
		</div>
		
		<div class="slideshow_thumbs">
			<?=$pictures?>
		</div>

</div>
		
<?php $path = __DIR__; include 'incl/footer.php' ?>

