// 4. Write the function get the get the Extension of file:
// “image.png” => “png”. “Sound.mp3” => “mp3”

const getExtension = str => {
  const parts = str.split('.');

  return parts[1];
};

// test cases:
console.log(getExtension('image.png'));
console.log(getExtension('Sound.mp3'));
