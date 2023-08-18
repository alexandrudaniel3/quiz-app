const signsData = [
    {
        id: 'avertizare',
        title: 'Avertizare',
        content: [
            {
                id: 'curba-dreapta',
                title: 'Curbă la dreapta',
                description: 'Este amplasat la cel mult 200 m de o curba la dreapta. Conducatorul trebuie sa circule cu viteza redusa in curbe, iar daca vizibilitatea este redusa sub 50 m., toate manevrele (depasirea, oprirea, stationarea, mersul inapoi, intoarcerea) sunt interzise. Este permisa depasirea in curbele cu vizibilitate.'
            },
            {
                id: 'curba-stanga',
                title: 'Curbă la stânga',
                description: 'Este amplasat la cel mult 200 m de o curba la stanga. Conducatorul trebuie sa circule cu viteza redusa in curbe, iar daca vizibilitatea este redusa sub 50 m., toate manevrele (depasirea, oprirea, stationarea, mersul inapoi, intoarcerea) sunt interzise.',
            },
            {
                id: 'curbe-succesive-dreapta',
                title: 'Curbă dublă sau o succesiune de mai multe curbe, prima la dreapta',
                description: 'Indicatorul se instaleaza atunci cand urmeaza o succesiune de curbe daca distanta dintre acestea e mai mica de 250 m. Se amplaseaza la 100-200 m inaintea primei curbe. Aceste indicatoare pot fi insotite si de panouri aditionale pe care este specificata distanta pana la terminarea sectorului de drum periculos daca lungimea acestuia depaseste 1000 m. Canducatorul trebuie sa circule cu viteza redusa in curbe iar daca vizibilitatea este redusa toate manevrele (depasirea oprirea stationarea mersul inapoi intoarcerea) sunt interzise.',
            },
            {
                id: 'curbe-succesive-stanga',
                title: 'Curbă dublă sau o succesiune de mai multe curbe, prima la stânga',
                description: 'Indicatorul se instaleaza atunci cand urmeaza o succesiune de curbe daca distanta dintre acestea e mai mica de 250 m. Se amplaseaza la 100-200 m inaintea primei curbe. Aceste indicatoare pot fi insotite si de panouri aditionale pe care este specificata distanta pana la terminarea sectorului de drum periculos daca lungimea acestuia depaseste 1000 m. Canducatorul trebuie sa circule cu viteza redusa in curbe iar daca vizibilitatea este redusa toate manevrele (depasirea oprirea stationarea mersul inapoi intoarcerea) sunt interzise.',
            },
            {
                id: 'drum-ingustat',
                title: 'Drum îngustat pe ambele părți',
                description: 'Indicatoarele se amplaseaza la 100-200 m de locul in care sectorul de drum incepe sa se ingusteze pe ambele parti cu cel putin jumatate de metru. La intalnirea acestui indicator conducatorul auto este obligat sa reduca viteza iar manevrele de oprire stationare mersul inapoi si intoarcerea sunt interzise. Indicatorul poate fi insotit si de indicatoare pentru reglementarea prioritatii de drum ingustat. In acest caz toate manevrele sunt interzise (inclusiv depasirea).',
            },
            {
                id: 'drum-ingustat-stanga',
                title: 'Drum îngustat pe partea stângă',
                description: 'Indicatoarele se amplaseaza la 100-200 m de locul in care sectorul de drum incepe sa se ingusteze pe partea stanga cu cel putin jumatate de metru. La intalnirea acestui indicator conducatorul auto este obligat sa reduca viteza iar manevrele de oprire.',
            },
            {
                id: 'drum-ingustat-dreapta',
                title: 'Drum îngustat pe partea dreaptă',
                description: 'Indicatoarele se amplaseaza la 100-200 m de locul in care sectorul de drum incepe sa se ingusteze pe partea dreapta cu cel putin jumatate de metru. La intalnirea acestui indicator conducatorul auto este obligat sa reduca viteza iar manevrele de oprire stationare mersul inapoi si intoarcerea sunt interzise. Indicatorul poate fi insotit si de indicatoare pentru reglementarea prioritatii de drum ingustat. In acest caz toate manevrele sunt interzise (inclusiv depasirea).',
            },
            {
                id: 'drum-aglomerat',
                title: 'Drum aglomerat',
                description: 'La intalnirea acestui indicator conducatorul auto este obligat sa pastreza o distanta de siguranta fata de vehiculul care se deplaseaza in fata sa. Se amplaseaza pe drumurile publice pe care traficul este intens.',
            },
            {
                id: 'pan-suc-curba-deosebit-periculoasa',
                title: 'Panouri succesive pentru curbe deosebit de periculoase',
                description: 'Se instaleaza cate 5 astfel de panouri in curbe cu raze mai mici de 100 m sau in curbe periculoase precedate de aliniamente mai lungi de 1000 m. Sunt amplasate in zona exterioara a curbelor varful sagetilor indicand sensul virajului.',
            },
            {
                id: 'curba-deosebit-periculoasa',
                title: 'Curbă deosebit de periculoasă',
                description: 'Indicatorul se monteaza in curbe cu raze mai mici de 100 m sensul sagetilor indicand sensul virajului. Canducatorul trebuie sa circule cu viteza redusa in curba toate manevrele (depasirea oprirea stationarea mersul inapoi intoarcerea) fiind interzise.',
            },
            {
                id: 'coborare-periculoasa',
                title: 'Coborâre periculoasă',
                description: 'Indicatorul alaturat se amplaseaza la 100-200 m de inceputul sectorului de drum cand panta depaseste 7%. Conducatorul auto nu este obligat sa reduca viteza dar nu are voie sa stationeze pe toata lungimea pantei. Daca in varful pantei vizibilitatea este redusa sub 50 m toate manevrele sunt interzise. Daca drumul nu este suficient de lat pentru a permite trecerea a doua vehicule unul pe langa celalalt are prioritate cel care urca fata de cel care coboara.',
            },
            {
                id: 'urcare-inclinatie',
                title: 'Urcare cu înclinație mare',
                description: 'Se instaleaza la 100-200 m de inceputul sectorului de drum cand panta depaseste 7%. Conducatorul auto nu este obligat sa reduca viteza dar toate manevrele sunt interzise. Daca drumul nu este suficient de lat pentru a permite trecerea a doua vehicule unul pe langa celalalt are prioritate cel care urca fata de cel care coboara.',
            },
            {
                id: 'acostament',
                title: 'Acostament',
                description: 'Intoarcerea este interzisa (soliditatea drumului nu permite).',
            },
            {
                id: 'pod-mobil',
                title: 'Pod mobil',
                description: 'Se amplaseaza la 100-200 m de podul mobil. Daca podul este ridicat oprirea este obligatorie. Pe pod conducatorul auto este obligat se reduca viteza si sunt interzise toate manevrele (depasirea oprirea stationarea mersul inapoi intoarcerea).',
            },
            {
                id: 'tunel',
                title: 'Tunel',
                description: 'Indicatorul se gaseste la 50-200 m de intrarea in tunel. In tunel conducatorul auto este obligat se reduca viteza si toate manevrele (depasirea oprirea stationarea mersul inapoi intoarcerea) sunt interzise.',
            },
        ]
    },
    {
        id: 'interzicere',
        title: 'Interzicere',
        content: [
            {
                id: 'acces',
                title:'Accesul interzis',
                description: 'In general, se amplaseaza pe drumurile cu sens unic, pe sensul pe care nu este permisa circulatia. Interzice accesul tuturor vehiculelor (inclusiv bicicletelor si vehiculelor cu tractiune animala). Acest indicator poate fi insotit si de un panou aditional pe care sunt precizate categoriile de autovehicule care au voie sa intre pe sectorul de drum respectiv, carora nu li se adreseaza deci restrictia de fata.',
            },
            {
                id: 'circulatie-ambele-sensuri',
                title:'Circulația interzisă în ambele sensuri',
                description: 'Se amplaseaza la intrarea pe drumurile publice pe care accesul tuturor vehiculelor este interzis in ambele sensuri. Se poate permite accesul riveranilor (persoanele care locuiesc in zona). Acest indicator poate fi insotit si de un panou aditional pe care sunt precizate categoriile de autovehicule exceptate.',
            },
            {
                id: 'autovehicule',
                title:'Accesul interzis autovehiculelor cu excepția motocicletelor fără ataș',
                description: 'Interzice accesul autoturismelor, autocamioanelor, autobuzelor, tractoarelor, etc; permite accesul motocicletelor fara atas, ciclomotoarelor, vehiculelor fara motor.',
            },
            {
                id: 'motociclete',
                title:'Accesul interzis motocicletelor',
                description: 'Se amplaseaza la intrarea pe drumurile publice pe care accesul motocicletelor este interzis.',
            },
            {
                id: 'biciclete',
                title:'Accesul interzis bicicletelor',
                description: 'Se amplaseaza la intrarea pe drumurile publice pe care accesul bicicletelor este interzis.',
            },
            {
                id: 'mopede',
                title:'Accesul interzis mopedelor',
                description: 'Se amplaseaza la intrarea pe drumurile publice pe care accesul mopedelor este interzis.',
            },
            {
                id: 'marfa',
                title:'Accesul interzis vehiculelor destinate transportului de mărfuri',
                description: 'Se instaleaza la inceputul drumurilor publice pe care accesul vehiculelor destinate transportului de marfuri este interzis. Acest indicator poate fi insotit si de un panou aditional pe care este inscrisa masa maxima autorizata. Vehiculele destinate transportului de marfuri care nu depasesc aceasta masa au voie sa circule pe sectorul de drum respectiv.',
            },
            {
                id: 'remorca',
                title:'Accesul interzis autovehiculelor cu remorcă, cu excepția celor cu semiremorcă sau cu remorcă cu o osie',
                description: 'Se instaleaza la intrarea pe drumurile publice pe care accesul autovehiculelor cu remorca, cu exceptia celor cu semiremorca sau cu remorca cu o osie, este interzis.',
            },
            {
                id: 'autobuze',
                title:'Accesul interzis autobuzelor',
                description: 'Se monteaza la intrarea pe drumurile publice pe care accesul autobuzelor este interzis.',
            },
            {
                id: 'pietoni',
                title:'Accesul interzis pietonilor',
                description: 'Intezice accesul pietonilor pe sectorul de drum public pe care este amplasat. Daca indicatorul se afla numai pe una dintre partile drumului, atunci circulatia pietonilor este interzisa numai pe acea parte. Pentru a se interzice accesul pietonilor pe ambele sensuri, se vor instala doua indicatoare, cate unul pe fiecare parte.',
            },
            {
                id: 'carute',
                title:'Accesul interzis vehiculelor cu tracțiune animală',
                description: 'Se monteaza la intrarea pe drumurile publice pe care accesul vehiculelor cu tractiune animala este interzis.',
            },
            {
                id: 'impinse',
                title:'Accesul interzis vehiculelor împinse sau trase cu mâna',
                description: 'Se amplaseaza la intrarea pe drumurile publice pe care accesul vehiculelor impinse sau trase cu mana este interzis.',
            },
            {
                id: 'oprire',
                title:'Oprire interzisă',
                description: 'Se afla instalat in locurile in care oprirea vehiculelor este interzisa. Semnificaţia indicatoarelor de interzicere sau de restricţie începe din dreptul acestora. În lipsa unei semnalizări care să precizeze lungimea sectorului pe care se aplică reglementarea ori a unor indicatoare care să anunţe sfârşitul interdicţiei sau al restricţiei, semnificaţia acestor indicatoare încetează în intersecţia cea mai apropiată. Acest indicator poate fi insotit si de alte panouri aditionale care marcheaza inceputul, continuarea sau sfarsitul zonei de actiune ("Inceputul zonei de actiune a indicatorului", "Confirmarea zonei de actiune a indicatorului", "Sfarsitul zonei de actiune a indicatorului") sau poate avea inscriptionate pe panou niste sageti cu aceeasi semnificatie.',
            },
            {
                id: 'stationare',
                title:'Staționare interzisă',
                description: 'La intalnirea acestui indicator stationarea vehiculelor este interzisa. Zona de actiune a indicatorului inceteaza la cel mai apropiat colt de intersectie pe sensul de mers. Acest indicator poate fi insotit si de alte panouri aditionale care marcheaza inceputul, continuarea sau sfarsitul zonei de actiune ("Inceputul zonei de actiune a indicatorului", "Confirmarea zonei de actiune a indicatorului", "Sfarsitul zonei de actiune a indicatorului") sau poate avea inscriptionate pe panou niste sageti cu aceeasi semnificatie.',
            },
        ]
    },
    {
        id: 'informare',
        title: 'Informare',
        content: [
            {
                id:'trecere-pietoni',
                title:'Trecere de pietoni',
                description: 'Acest indicator se instaleaza in apropierea unei treceri pentru pietoni. Acesta poate fi precedat si de indicatorul "Presemnalizare trecere pentru pietoni"',
            },
            {
                id:'parcare',
                title:'Parcare',
                description: 'Are rolul de a informa conducatorul auto ca in apropiere se afla un spatiu destinat parcarii. Pe indicator pot fi inscriptionate anumite reguli stabilite de administratorul responsabil.',
            },
            {
                id:'parcare-2',
                title:'Parcare',
                description: 'Are rolul de a informa conducatorul auto ca in apropiere se afla un spatiu destinat parcarii. Pe indicator pot fi inscriptionate anumite reguli stabilite de administratorul responsabil.',
            },
            {
                id:'drum-autovehicule',
                title:'Drum pentru autovehicule',
                description: 'Se afla amplasat la intrarea pe drumurile pe care este permisa doar circulatia autovehiculelor.',
            },
            {
                id:'autostrada',
                title:'Autostradă',
                description: 'Conducatorul auto va intalni acest indicator la intrarea pe autostrada. La intalnirea acestui indicator conducatorii auto sunt obligati sa circule cu cel putin 50 km/h. Pe autostrada sunt interzise mersul inapoi, oprirea, stationarea, intoarcerea precum si circulatia sau imobilizarea voluntara pe banda de urgenta.',
            },
            {
                id:'sens-unic',
                title:'Sens unic',
                description: 'Se monteaza la intrarea pe drumurile cu sens unic. Terminarea sectorului cu sens unic se semnalizeaza cu indicatorul "Circulatia in ambele sensuri". Pe drumul cu sens unic este interzisa manevra de intoarcere. Depasirea se poate face si pe partea stanga; se poate opri sau stationa si pe stanga; este permis mersul inapoi cel mult 50 m; este permis virajul stanga sau dreapta; virajul la stanga presupune incadrarea pe banda de langa bordura din stanga.',
            },
            {
                id:'spital',
                title:'Spital',
                description: 'Este montat in apropierea spitalelor pentru informarea conducatorilor auto in legatura cu existenta unei unitati medicale. Poate fi insotit de un panou aditional pe care este inscriptionata distanta pana la spital.',
            },
            {
                id:'statie-bus',
                title:'Stație de autobuz',
                description: 'Se instaleaza pe trotuar, foarte aproape de partea carosabila, in statiile de autobuz sau troleibuz.',
            },
            {
                id:'statie-tram',
                title:'Stație de tramvai',
                description: 'Se instaleaza atat pe trotuar (in cazul statiilor fara refugiu pentru pietoni), cat si in spatiile de refugiu (in cazul in care exista).',
            },
            {
                id:'politie',
                title:'Poliția',
                description: 'Se amplaseaza in apropierea unui post de politie la care se pot declara accidentele de circulatie, precum si existenta obstacolelor intalnite pe drumul public. Pe indicator poate fi inscrisa si distanta pana la sediu.',
            },
            {
                id:'prim-ajutor',
                title:'Post prim-ajutor',
                description: 'Are rolul de a informa conducatorul auto ca in apropiere se afla un post de prim ajutor. Pe indicator poate fi inscrisa si distanta pana la respectivul punct.',
            },
            {
                id:'zona-pietonala',
                title:'Zonă pietonală',
                description: 'Se monteaza la intrarea in zonele pietonale. Acestea reprezinta una sau mai multe strazi rezervate pietonilor, unde accesul vehiculelor se face numai daca se locuieste in zona sau presteaza servicii publice si nu exista alta posibilitate de acces. Conducatorii auto sunt obligati sa circule cu viteza de cel mult 5 km/h.',
            },
            {
                id:'pasarela',
                title:'Pasarelă pentru pietoni',
                description: 'Se amplaseaza in apropierea pasarelelor pentru pietoni. Pentru traversarea drumurilor din zona pietonii sunt obligati sa circule folosind pasarela.',
            },
        ]
    },
    {
        id: 'prioritate',
        title: 'Prioritate',
        content: [
            {
                id:'stop',
                title:'Oprire',
                description: 'Este instalat pe drumul public fara prioritate, la intersectia acestuia cu un drum public prioritar, cand vizibilitatea este redusa. Conducatorul de vehicul care intalneste acest indicator este obligat sa opreasca in locul cu vizibilitate maxima, fara a depasi coltul intersectiei, si sa acorde prioritate tuturor vehiculelor care circula pe drumul prioritar.',
            },
            {
                id:'cedeaza',
                title:'Cedează trecerea',
                description: 'Se amplaseaza pe drumul public fara prioritate, la intersectia acestuia cu un drum public prioritar. La intalnirea acestui indicator, conducatorul auto este obligat sa reduca viteza si sa se asigure ca pe drumul prioritar nu circula autovehicule, si abia apoi poate sa patrunda in intersectie. Daca pe drumul prioritar circula alte autovehicule, conducatorul auto este obligat sa opreasca pentru a le acorda prioritate.',
            },
            {
                id:'prioritate',
                title:'Drum cu prioritate',
                description: 'Se instaleaza la inceputul drumului cu prioritate sau inaintea intersectiilor cu un drum fara prioritate. Are rolul de a anunta conducatorul auto ca are prioritate in intersectiile in care va patrunde. Drumurile care intersecteaza drumul cu prioritate vor avea instalate unul dintre indicatoarele "Oprire" sau "Cedeaza trecerea". Cand este amplasat inaintea unei intersectii, acest indicator poate fi insotit si de un panou aditional care va preciza directia drumului cu prioritate.',
            },
            {
                id:'sfarsit-prioritate',
                title:'Sfârșitul drumului cu prioritate',
                description: 'Se amplaseaza la 50-200 m de locul unde inceteaza semnificatia indicatorului "Drum cu prioritate", avand rolul de a informa conducatorul auto ca in urmatoarea intersectie in care va patrunde, toate drumurile vor fi de aceeasi categorie si se va aplica regula prioritatii de dreapta.',
            },
            {
                id:'prioriate-fata-de',
                title:'Prioritate față circulația din sens invers',
                description: 'Montat pe sectoarele de drum ingustat unde nu au loc sa circule doua vehicule unul pe langa celalalt indicatorul din imagine este precedat de indicatorul "Drum ingustat". La intalnirea acestui indicator, conducatorul autovehiculului are prioritate fata de toate autovehiculele care circula din sens opus.',
            },
            {
                id:'prioritate-opus',
                title:'Prioritate pentru circulația din sens invers',
                description: 'Se monteaza pe sectoarele de drum ingustat unde nu au loc sa circule doua vehicule unul pe langa celalalt, fiind precedat de indicatorul "Drum ingustat". La intalnirea acestui indicator, conducatorul autovehiculului pierde prioritatea fata de toate autovehiculele care circula din sens opus. Acest indicator poate fi insotit si de un panou aditional pe care sunt precizate categoriile de autovehicule carora li se adreseaza acest indicator.',
            },
        ]
    },
    {
        id: 'cale-ferata',
        title: 'Cale ferată',
        content: [
            {
                id:'simpla',
                title:'Trecere la nivel cu o cale ferată simplă, fără bariere, prevăzută cu semnale luminoase de avertizare a apropierii trenului',
                description: '',
            },
            {
                id:'dubla',
                title:'Trecere la nivel cu o cale ferată dublă, fără bariere, prevăzută cu semnale luminoase de avertizare a apropierii trenului',
                description: '',
            },
            {
                id:'semi-bariere',
                title:'Trecere la nivel cu o cale ferată simplă cu semibarieră, prevăzută cu semnale luminoase de avertizare a apropierii trenului',
                description: '',
            },
        ]
    },
    {
        id: 'turism',
        title: 'Turism',
        content: [
            {
                id:'biserica',
                title:'Biserică',
                description: '',
            },
            {
                id:'manastire',
                title:'Mănăstire',
                description: '',
            },
            {
                id:'castel',
                title:'Castel/Cetate',
                description: '',
            },
            {
                id:'histrie',
                title:'Vestigii istorice',
                description: '',
            },
            {
                id:'mausoleu',
                title:'Monument',
                description: '',
            },
            {
                id:'rezervatie',
                title:'Rezervație naturală',
                description: '',
            },
            {
                id:'cascada',
                title:'Cascadă',
                description: '',
            },
            {
                id:'pestera',
                title:'Peșteră',
                description: '',
            },
            {
                id:'partie',
                title:'Pârtie',
                description: '',
            },
        ]
    }
]


export default signsData;