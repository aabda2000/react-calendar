# react-calendar
React est clairement agnostique en matière de rendu : Je lui associe la librairie react-dom pour le "web desktop", d'autres librairies sont disponibles pour des plateformes différentes,...

L'idée est de placer les évènements sur un calendrier "automatiquement". Les évènements de la même semaine sont qualifiées ainsi:
- un événement à un jour de commencement
- un événement dure un jour ou plus 

Une semaine est divisée en plusieurs tranches horaires fixées(par exemple 5 tranches).

Ceux-ci sont des événements :

Enseignant 1: "placer mes TDs [à la même tranche horaire] à partir de 08/11/2023 (mercredi). Durée 4 jours" 

Enseignant 2:"placer mes TDs [à la même tranche horaire] à partir de 10/11/2023 (vendredi). Durée 2 jours"

Enseignant 3:"placer mes TDs [à la même tranche horaire] à partir de 10/11/2023 (vendredi). Durée 1 jour"

Enseignant 4:"placer mes TDs [à la même tranche horaire] à partir de 6/11/2023 (lundi). Durée 1 jour"

Il faut remplir, dans la mesure de possible, chaque tranche en évitant le conflit ; le cas échéant, nous chercherons une autre tranche.

Ici, l’événement 4, qui dure 1 jour, a pu être placé dans la même tranche horaire que l’évènement 1.


Avant le placement des évènements:

![calendar2](https://github.com/aabda2000/react-calendar/assets/38082725/3398acbf-7422-4f74-ab2e-2b6b76631b9c)

Après le placement des évènements:

![calendar](https://github.com/aabda2000/react-calendar/assets/38082725/571118f4-37d3-4ed5-8717-dfae52f784a4)
