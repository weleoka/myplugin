<?php $title='JS - JQuery!'; include '../testRAW/header.php'; include 'filereader.php' ?>
<?php $pictures = readAllItemsinDir('../img/gallery'); ?>

<div id='flash'>
	<div id='box1' class='box'>
		<h1>Slideshow YES!.</h1>
		<p>Se vad roligt man kan ha när man kan JQuery.</p>
		<div id="slideshow">
			<?=$pictures?>
		</div>
		
	</div>
</div>

<?php $path = __DIR__; include '../testRAW/footer.php' ?>

