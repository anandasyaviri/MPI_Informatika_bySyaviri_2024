function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6d0N4kjmClF":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="dreams.mp3";
audio.load();
audio.play();
audio.volume=0.05;
}

