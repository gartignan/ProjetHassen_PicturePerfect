chercher();

function chercher() {

   var url = "https://private-ca59b3-perfect1.apiary-mock.com/questions";
   var req = new XMLHttpRequest();
   req.open('GET', url, true);
   req.addEventListener('readystatechange', changementEtat);
   req.send();
}

function changementEtat(data) {
   if (data.target.readyState == 4) {
      var donnees = JSON.parse(data.target.response);

      var titre = document.getElementById('titre1');
      titre.innerHTML = donnees.titre;
      var depat = document.getElementById('depat');
      depat.innerHTML = donnees.soustitre;

      var startsome = document.getElementById('startsome');
      startsome.innerHTML = donnees.start.titre;

      var designyooo = document.getElementById('designyooo');
      designyooo.innerHTML = donnees.start.section[0].titre;

      var yopapa = document.getElementById('yopapa');
      yopapa.innerHTML = donnees.start.section[0].description;

      var yoooooooooooooooolll = document.getElementById('yoooooooooooooooolll');
      yoooooooooooooooolll.innerHTML = donnees.start.section[1].titre;
      var yaaaaaa = document.getElementById('yaaaaaa');
      yaaaaaa.innerHTML = donnees.start.section[1].description;

      var yuuuu = document.getElementById('yuuuu');
      yuuuu.innerHTML = donnees.start.section[2].titre;
      var yuu = document.getElementById('yuu');
      yuu.innerHTML = donnees.start.section[2].description;

      var potatozzzzz = document.getElementById('potatozzzzz');
      potatozzzzz.innerHTML = donnees.start.section[3].titre;
      var potatazzzz = document.getElementById('potatazzzz');
      potatazzzz.innerHTML = donnees.start.section[3].description;

      var radis = document.getElementById('sign');
      radis.innerHTML = donnees.start.section[4].titre;
      var salade = document.getElementById('sign2');
      salade.innerHTML = donnees.start.section[4].description;

      var fraise = document.getElementById('fraise');
      fraise.innerHTML = donnees.start.section[5].titre;
      var fraise2 = document.getElementById('fraise2');
      fraise2.innerHTML = donnees.start.section[5].description;

      var kiwi = document.getElementById('kiwi');
      kiwi.innerHTML = donnees.start.section[6].titre;
      var kiwi2 = document.getElementById('kiwi2');
      kiwi2.innerHTML = donnees.start.section[6].description;
    
      
      var banane = document.getElementById('banane');
      banane.innerHTML = donnees.look.titre;

      var pouvoir = document.getElementById('pouvoir');
      pouvoir.innerHTML = donnees.more.titre;

      var raisontjrs = document.getElementById('raisontjrs');
      raisontjrs.innerHTML = donnees.raison.titre;
   }
}
