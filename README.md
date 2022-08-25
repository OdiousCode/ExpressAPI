Till en början valde jag att följa en guide på youtube, som använde sig av en statisk JSON fil för data. Kändes halvbekant och bra att veta hur det fungerar tänkte jag. Så tänkte jag att man kan skriva/läsa filen genom API't. Sedan tittade jag igenom videos ifrån våra lektioner för att försöka knyta ihop de två, så jag skriver till filen gamelist.json med hjälp av endpoints.
Efter en hel del experimenterande har jag fått det att fungera, vet ej om det är exakt så som du tänkt. Men det gör sitt jobb!
För att starta projektet så kör vi scriptet "npm run dev", då öppnas en localhost server med port 3000 som bör stå i console loggen.
Sedan för att testa endpoints, ligger det en rest-fil, game.rest under katalogen api_src/games.

För att kunna lista alla spel i JSON filen, går man till http://localhost:3000/api/games så får man ett svar i JSON, med alla spelen.

För att kunna lägga till ett nytt spel, så skickar man en post request till http://localhost:3000/api/games, med JSON data i bodyn.

För att kunna ta bort ett specifikt spel ur JSON filen, så går man till http://localhost:3000/api/games/abc där "abc" är ID:t på spelet i fråga.

För att kunna uppdatera ett specifikt spel, t.ex ändra namnet, så går man till http://localhost:3000/api/games/abc med en PUT request och där "abc" är spelets id, med JSON data i bodyn. Denna kräver bara en "partial" av objekttypen game, dvs jag behöver ej ange samtliga attributer, kan t.ex skippa priset så behåller den det tidigare. dock måste man skicka med ID, annars kastas ett fel.

# ExpressAPI
Express/typescript simple CRUD API

I den här laborationen ska du individuellt skapa ett enklare REST-API i NodeJS med
express och typescript. Då API:et skall har funktionalitet för CRUD skall det finnas 4 st
endpoints inkluderat GET, DELETE, PUT och POST för en resurs. Varje endpoint skall
utföra vad dess anropsmetod ämnar att utföra, dvs. POST för att lägga till, PUT för att
uppdatera, GET för att hämta osv. GET anropet skall hämta alla objekt. Vad API:et
hanterar för typ av resurs väljer du själva, det viktiga är att det finns minst 4 st egenskaper
för ett objekt varav en egenskap är id. Projektet skall inte ha någon databas utan istället ha
all data sparad lokalt i serverfilen (exempelvis en array med produkter). För att testa ert
API rekommenderas du att använda VS Code tilläget REST Client.

För att bli godkänd på den här uppgiften MÅSTE du använda GIT och GitHub.
Inlämningen sker som vanligt via läroplattformen där du ska zippa ihop din projektmapp.
I din projektmapp ska det finnas (utöver all kod) en README.md fil. Den ska innehålla en
titel, beskrivning av projektet, vilka krav som är uppfyllda, info om hur projektet byggs
och körs. Kom ihåg att ta bort node_modules!!!

## Krav för godkänt ##

- [X] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [X] Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [X] Datan som API:et hanterar sparas lokalt i serverfilen
- [X] APIét ska svara med 404 om datan saknas.
- [X] Git & GitHub har använts
- [X] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [X] Uppgiften lämnas in i tid!

## Krav för väl godkänt ##

- [X] Alla punkter för godkänt är uppfyllda
- [X] All data skall vara sparad i en JSON-fil istället för i serverfilen
- [X] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [ ] Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och presentera datan, redigeringsformulär skall fyllas i med befintlig information.
- [ ] Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
