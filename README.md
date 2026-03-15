# Haproxy load balancing

On explore une solution de load balancing entre deux servers js. 
Cette architecture est la brique élémentaire pour utiliser du load balancing entre plusieurs servers.

## C'est quoi le load balancing

Le load balancing est une methode de redirection des requetes entre plusieurs servers. 
Ici Haproxy sert d'orchestrateur entre deux simples serveurs js.

## Installation

Par souci de simplicité et de portabilité un simple docker est nécésaire ici.

### Étape 1 : cloner le repertoire
```bash

```

### Étape 2 : composer le docker
```bash
  docker-compose up
```

## Visualisation

Pour se rendre compte du load balancing il suffit de se rendre à cette adresse ```http://localhost```.
En rafraichissant la page on se rend compte que le server que l'on requete change.

Enfin pour voir les stats et monitorer nos serveurs, on peut se rendre à cette adresse ```http://localhost:8080/stats```
