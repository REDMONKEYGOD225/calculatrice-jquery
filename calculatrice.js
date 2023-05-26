$(document).ready(function() {
  $('.touches button').click(function() {
    var valeurBouton = $(this).text();
    var valeurEcran = $('.ecrant').val();

    // Vérifie si l'utilisateur a cliqué sur le bouton "=" pour calculer le résultat
    if (valeurBouton === '=') {
      var resultat = eval(valeurEcran);
      $('.ecrant').val(resultat);
    }

    // Vérifie si l'utilisateur a cliqué sur le bouton "C" pour effacer l'écran
    else if (valeurBouton === 'C') {
      $('.ecrant').val('');
    }

    // Ajoute la valeur du bouton cliqué à l'écran
    else {
      $('.ecrant').val(valeurEcran + valeurBouton);
    }

     // Ajoute la fonctionnalité pour chaque opérateur
     if (valeurBouton === '/') {
      $('.ecrant').val(valeurEcran + '/');
    } else if (valeurBouton === 'X') {
      $('.ecrant').val(valeurEcran + '*');
    } else if (valeurBouton === '-') {
      $('.ecrant').val(valeurEcran + '-');
    } else if (valeurBouton === '+') {
      $('.ecrant').val(valeurEcran + '+');
    }
  });
});


