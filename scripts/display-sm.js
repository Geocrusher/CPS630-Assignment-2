function artData(val) {
  switch (val) {
    case 0:
      document.getElementById('window').style.visibility= "visible";
      document.getElementById('image').src="./assets/nighthawks.jpg";
      document.getElementById('info').innerHTML="\
      <a href=\"viewer.php?type=art&no=0\"> <h2> Nighthawks </h2> </a>\
      <b>Date of Production</b><br>1942<br><br>\
      <b>Artist</b><br>Edward Hopper<br><br>\
      ";
      break;
    case 1:
      document.getElementById('window').style.visibility= "visible";
      document.getElementById('image').src="./assets/lastsupper.jpg";
      document.getElementById('info').innerHTML="\
      <a href=\"viewer.php?type=art&no=1\"> <h2> The Last Supper </h2> </a>\
      <b>Date of Production</b><br>1490s<br><br>\
      <b>Artist</b><br>Leonardo Da Vinci<br><br>\
      ";
      break;
    case 2:
      document.getElementById('window').style.visibility= "visible";
      document.getElementById('image').src="./assets/starry.jpg";
      document.getElementById('info').innerHTML="\
      <a href=\"viewer.php?type=art&no=2\"> <h2> The Starry Night </h2> </a>\
      <b>Date of Production</b><br>1889<br><br>\
      <b>Artist</b><br>Vincent van Gogh<br><br>\
      ";
      break;
    case 3:
      document.getElementById('window').style.visibility= "visible";
      document.getElementById('image').src="./assets/gothic.jpg";
      document.getElementById('info').innerHTML="\
      <a href=\"viewer.php?type=art&no=3\"> <h2> American Gothic </h2> </a>\
      <b>Date of Production</b><br>1930<br><br>\
      <b>Artist</b><br>Grant Wood<br><br>\
      ";
      break;
    case 4:
      document.getElementById('window').style.visibility= "visible";
      document.getElementById('image').src="./assets/mandolin.jpg";
      document.getElementById('info').innerHTML="\
      <a href=\"viewer.php?type=art&no=4\"> <h2> Girl With A Mandolin </h2> </a>\
      <b>Date of Production</b><br>1910<br><br>\
      <b>Artist</b><br>Pablo Picasso<br><br>\
      ";
      break;
  }
}

function artistData(val) {
  switch (val) {
    case 0:
      document.getElementById('window').style.visibility= "visible";
      document.getElementById('image').src="./assets/picasso.jpg";
      document.getElementById('info').innerHTML="\
      <a href=\"viewer.php?type=artist&no=0\"> <h2> Pablo Picasso </h2> </a>\
      <b>Date of Birth - Date of Death</b><br> October 25, 1881 - April 8, 1973 <br><br>\
      <b>Notable Works</b><br>La Vie, The Weeping Woman<br><br>\
      ";
      break;
    case 1:
      document.getElementById('window').style.visibility= "visible";
      document.getElementById('image').src="./assets/davinci.jpg";
      document.getElementById('info').innerHTML="\
      <a href=\"viewer.php?type=artist&no=1\"> <h2> Leonardo Da Vinci </h2> </a>\
      <b>Date of Birth - Date of Death</b><br> April 15, 1452 - May 2, 1519 <br><br>\
      <b>Notable Works</b><br>Mona Lisa, The Last Supper<br><br>\
      ";
      break;
    case 2:
      document.getElementById('window').style.visibility= "visible";
      document.getElementById('image').src="./assets/warhol.jpg";
      document.getElementById('info').innerHTML="\
      <a href=\"viewer.php?type=artist&no=2\"> <h2> Andy Warhol </h2> </a>\
      <b>Date of Birth - Date of Death</b><br>August 6, 1928 - Feburary 22, 1987<br><br>\
      <b>Notable Works</b><br>Campbell's Soup Cans<br><br>\
      ";
      break;
    case 3:
      document.getElementById('window').style.visibility= "visible";
      document.getElementById('image').src="./assets/dali.jpg";
      document.getElementById('info').innerHTML="\
      <a href=\"viewer.php?type=artist&no=3\"> <h2> Salvador Dali </h2> </a>\
      <b>Date of Birth - Date of Death</b><br> May 11, 1904 - January 23, 1989<br><br>\
      <b>Notable Works</b><br>The Persistence of Memory, The Elephants<br><br>\
      ";
      break;
    case 4:
      document.getElementById('window').style.visibility= "visible";
      document.getElementById('image').src="./assets/norval.jpg";
      document.getElementById('info').innerHTML="\
      <a href=\"viewer.php?type=artist&no=4\"> <h2> Norval Morrisseau </h2> </a>\
      <b>Date of Birth - Date of Death</b><br> March 14, 1932 - December 4, 2007 <br><br>\
      <b>Notable Works</b><br> Multiple Untitled Works <br><br>\
      ";
      break;
  }
}
