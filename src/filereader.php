<?php
/**
 * Read directory and return all items as HTML.
 *
 * @param string $path to the current gallery directory.
 * @param array $validImages to define extensions on what are considered to be valid images.
 * @return string html with ul/li to display the gallery.
 */
function readAllItemsInDir($path, $validImages = array('png', 'jpg', 'jpeg')) {
  $files = glob($path . '/*');
  $gallery = "";
  $len = strlen($path);

  foreach($files as $file) {
    $parts = pathinfo($file);

    // Is this an image or a directory
    if(is_file($file) && in_array($parts['extension'], $validImages)) {
      $item    = $file;
      $caption = basename($file);
    } else {
      continue;
    }

    // Avoid to long captions breaking layout
    $fullCaption = $caption;
    if(strlen($caption) > 18) {
      $caption = substr($caption, 0, 10) . '…' . substr($caption, -5);
    }

    $href = $path . $file;
    $gallery .= "<img src='$item'/>\n";
  }
  $gallery .= "";

  return $gallery;
}
