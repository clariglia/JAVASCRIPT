# Object Copying - Exercise 1
In questo esercizio sono stati creati due oggetti: `person1` e `person2`. All'oggetto `person2` è stato assegnato l'oggetto `person1`. Si desidera che venga modificata la proprietà `firstName` dell'oggetto `person2` in "Simon".

Sai spiegare il perché modificando l'oggetto `person2` viene modificato anche l'oggetto `person1`?
Perché non copierà il contenuto, passerà il riferimento all'allocazione di memoria e punterà allo stesso spazio di memoria, quindi all'oggetto