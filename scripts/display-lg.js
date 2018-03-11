function artData(val) {
  switch (val) {
    case 0:
      document.getElementById('image').src="./assets/nighthawks.jpg";
      document.getElementById('info').innerHTML="\
      <h2> Nighthawks </h2>\
      <b>Date of Production</b><br>1942<br><br>\
      <b>Medium</b><br>Oil on canvas<br><br>\
      <b>Dimensions</b><br>84.1 cm x 152.4 cm<br><br>\
      <b>Location</b><br>Art Institute of Chicago<br><br>\
      <b>Artist</b><br>Edward Hopper<br><br>\
      <b>Price</b><br>$3,000<br><br>\
      <b>Genre</b><br>Realism<br><br>\
      <button type=\"button\" class=\"btn btn-outline-secondary\">\
        <img src=\"assets/cart.svg\" width=17px> Shopping Cart </img>\
      </button>\
      ";
      break;
    case 1:
      document.getElementById('image').src="./assets/lastsupper.jpg";
      document.getElementById('info').innerHTML="\
      <h2> The Last Supper </h2>\
      <b>Date of Production</b><br>1490s<br><br>\
      <b>Medium</b><br>fresco-secco<br><br>\
      <b>Dimensions</b><br>460 cm x 880 cm<br><br>\
      <b>Location</b><br>Convent of Santa Maria delle Grazie in Milan<br><br>\
      <b>Artist</b><br>Leonardo Da Vinci<br><br>\
      <b>Price</b><br>Priceless<br><br>\
      <b>Genre</b><br>Renaissance<br><br>\
      <button type=\"button\" class=\"btn btn-outline-secondary\">\
        <img src=\"assets/cart.svg\" width=17px> Shopping Cart </img>\
      </button>\
      ";
      break;
    case 2:
      document.getElementById('image').src="./assets/starry.jpg";
      document.getElementById('info').innerHTML="\
      <h2> The Starry Night </h2>\
      <b>Date of Production</b><br>1889<br><br>\
      <b>Medium</b><br>Oil on canvas<br><br>\
      <b>Dimensions</b><br>73.7 cm x 92.1 cm<br><br>\
      <b>Location</b><br>Art Museum of Modern Art, New York City<br><br>\
      <b>Artist</b><br>Vincent van Gogh<br><br>\
      <b>Price</b><br>Estimated at ~$100,000,000<br><br>\
      <b>Genre</b><br>Landscape Painting<br><br>\
      <button type=\"button\" class=\"btn btn-outline-secondary\">\
        <img src=\"assets/cart.svg\" width=17px> Shopping Cart </img>\
      </button>\
      ";
      break;
    case 3:
      document.getElementById('image').src="./assets/gothic.jpg";
      document.getElementById('info').innerHTML="\
      <h2> American Gothic </h2>\
      <b>Date of Production</b><br>1930<br><br>\
      <b>Medium</b><br>Oil on beaverboard<br><br>\
      <b>Dimensions</b><br>78 cm x 65.3 cm<br><br>\
      <b>Location</b><br>Art Institute of Chicago<br><br>\
      <b>Artist</b><br>Grant Wood<br><br>\
      <b>Price</b><br>~$6,960,000<br><br>\
      <b>Genre</b><br>Modernism<br><br>\
      <button type=\"button\" class=\"btn btn-outline-secondary\">\
        <img src=\"assets/cart.svg\" width=17px> Shopping Cart </img>\
      </button>\
      ";
      break;
    case 4:
      document.getElementById('image').src="./assets/mandolin.jpg";
      document.getElementById('info').innerHTML="\
      <h2> Girl With A Mandolin </h2>\
      <b>Date of Production</b><br>1910<br><br>\
      <b>Medium</b><br>Oil paint<br><br>\
      <b>Dimensions</b><br>100.3 cm x 73.6 cm<br><br>\
      <b>Location</b><br>Art Museum of Modern Art, New York City<br><br>\
      <b>Artist</b><br>Pablo Picasso<br><br>\
      <b>Price</b><br>~$7,000,000<br><br>\
      <b>Genre</b><br>History Painting<br><br>\
      <button type=\"button\" class=\"btn btn-outline-secondary\">\
        <img src=\"assets/cart.svg\" width=17px> Shopping Cart </img>\
      </button>\
      ";
      break;
    default:
      document.getElementById('info').innerHTML="\
      <h1> Data not found </h1>\
      "
  }
}

function artistData(val) {
  switch (val) {
    case 0:
      document.getElementById('image').src="./assets/picasso.jpg";
      document.getElementById('info').innerHTML="\
      <h2> Pablo Picasso </h2>\
      <b>Date of Birth - Date of Death</b><br> October 25, 1881 - April 8, 1973 <br><br>\
      <b>Residence</b><br>Mougins, France<br><br>\
      <b>Genre(s)</b><br>Cubism, Surrealsm<br><br>\
      <b>Notable Works</b><br>La Vie, The Weeping Woman<br><br>\
      <button type=\"button\" class=\"btn btn-outline-secondary\">\
        <img src=\"assets/cart.svg\" width=17px> Shopping Cart </img>\
      </button>\
      ";
      break;
    case 1:
      document.getElementById('image').src="./assets/davinci.jpg";
      document.getElementById('info').innerHTML="\
      <h2> Leonardo Da Vinci </h2>\
      <b>Date of Birth - Date of Death</b><br> April 15, 1452 - May 2, 1519 <br><br>\
      <b>Residence</b><br>Amboise, France<br><br>\
      <b>Genre(s)</b><br>High Renaissance<br><br>\
      <b>Notable Works</b><br>Mona Lisa, The Last Supper<br><br>\
      <button type=\"button\" class=\"btn btn-outline-secondary\">\
        <img src=\"assets/cart.svg\" width=17px> Shopping Cart </img>\
      </button>\
      ";
      break;
    case 2:
      document.getElementById('image').src="./assets/warhol.jpg";
      document.getElementById('info').innerHTML="\
      <h2> Andy Warhol </h2>\
      <b>Date of Birth - Date of Death</b><br>August 6, 1928 - Feburary 22, 1987<br><br>\
      <b>Residence</b><br>New York City, New York, U.S.<br><br>\
      <b>Genre(s)</b><br>Pop Art<br><br>\
      <b>Notable Works</b><br>Campbell's Soup Cans<br><br>\
      <button type=\"button\" class=\"btn btn-outline-secondary\">\
        <img src=\"assets/cart.svg\" width=17px> Shopping Cart </img>\
      </button>\
      ";
      break;
    case 3:
      document.getElementById('image').src="./assets/dali.jpg";
      document.getElementById('info').innerHTML="\
      <h2> Salvador Dali </h2>\
      <b>Date of Birth - Date of Death</b><br> May 11, 1904 - January 23, 1989<br><br>\
      <b>Residence</b><br>Figueres, Catalonia, Spain<br><br>\
      <b>Genre(s)</b><br>Cubism, Dada, Surrealism<br><br>\
      <b>Notable Works</b><br>The Persistence of Memory, The Elephants<br><br>\
      <button type=\"button\" class=\"btn btn-outline-secondary\">\
        <img src=\"assets/cart.svg\" width=17px> Shopping Cart </img>\
      </button>\
      ";
      break;
    case 4:
      document.getElementById('image').src="./assets/norval.jpg";
      document.getElementById('info').innerHTML="\
      <h2> Norval Morrisseau </h2>\
      <b>Date of Birth - Date of Death</b><br> March 14, 1932 – December 4, 2007 <br><br>\
      <b>Residence</b><br> Toronto, Ontario, Canada <br><br>\
      <b>Genre(s)</b><br> Woodlands Style <br><br>\
      <b>Notable Works</b><br> Multiple Untitled Works <br><br>\
      <button type=\"button\" class=\"btn btn-outline-secondary\">\
        <img src=\"assets/cart.svg\" width=17px> Shopping Cart </img>\
      </button>\
      ";
      break;
    default:
        document.getElementById('info').innerHTML="\
        <h1> Data not found </h1>\
        "
  }
}
