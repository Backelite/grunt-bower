grunt-bower
===========
> Une configuration grunt/bower pour démarrer un projet en 2min chrono, avec bootstrap (en less) intégré !



Première installation :
=======================


* Ouvrir une console dans assets/
* `npm install`
* `grunt bower:init`
* `grunt watch`
* Commencer à développer !

Installer une nouvelle librairie :
==================================
> (Ici angular pour l'exemple)


* Ouvrir une console dans assets/
* `bower install angularjs`
* `grunt bower`
* `grunt watch`
* Continuer à développer en utilisant angular !


> `grunt watch` n'exécute rien tant qu'aucune modification n'a été détectée, pour forcer la compilation il suffit d'executer `grunt` seul d'abord.

> La commande `grunt bower:init` ne doit plus être lancée après installation, utiliser seulement `grunt bower` à la place. 

