/* ===== DATI DALLA DIETA ===== */
const CAT=['Pane, cereali e patate','Legumi (cotti)','Verdure e aromi','Frutta','Carne e affettati','Pesce','Uova e latticini','Condimenti e dispensa'];
// id:[nome, categoria, unità]
const IT={
pane:['Pane integrale',0,'g'],fette:['Fette biscottate integrali',0,'pz'],pasta:['Pasta integrale, di kamut o di farro',0,'g'],
pastal:['Pasta di legumi',0,'g'],sarac:['Pasta di grano saraceno',0,'g'],riso:['Riso integrale',0,'g'],farro:['Farro',0,'g'],
orzo:['Orzo perlato',0,'g'],orzoc:['Orzo perlato (peso da cotto)',0,'g'],farroc:['Farro (peso da cotto)',0,'g'],risoc:['Riso integrale (peso da cotto)',0,'g'],cous:['Cous cous integrale',0,'g'],avena:["Fiocchi d'avena",0,'g'],polenta:['Polenta (fettine)',0,'pz'],
patate:['Patate',0,'g'],patdol:['Patate dolci',0,'g'],farcec:['Farina di ceci',0,'g'],farina:['Farina',0,'g'],pangr:['Pangrattato',0,'g'],
farmand:['Farina di mandorle',0,'g'],
ceci:['Ceci',1,'g'],lent:['Lenticchie',1,'g'],cann:['Fagioli cannellini',1,'g'],ross:['Fagioli rossi',1,'g'],borl:['Fagioli borlotti',1,'g'],
fave:['Fave',1,'g'],pis:['Piselli',1,'g'],lentr:['Lenticchie rosse decorticate (secche)',1,'g'],fagioli:['Fagioli',1,'g'],
zucchine:['Zucchine',2,'g'],carote:['Carote',2,'g'],finocchi:['Finocchi',2,'pz'],pomod:['Pomodorini',2,'g'],pelati:['Pomodori pelati',2,'g'],
peperoni:['Peperoni',2,'g'],melanz:['Melanzane',2,'pz'],broccoli:['Broccoli',2,'g'],cavneri:['Cavolo nero',2,'g'],cicoria:['Cicoria',2,'g'],
sedano:['Sedano',2,'g'],cipolla:['Cipolla',2,'pz'],spinaci:['Spinaci freschi',2,'g'],asparagi:['Asparagi',2,'g'],fagiolini:['Fagiolini',2,'g'],
cetrioli:['Cetrioli',2,'g'],zucca:['Zucca',2,'g'],verza:['Cavolo verza',2,'pz'],porri:['Porri',2,'pz'],bietole:['Bietole',2,'g'],
cavolfiore:['Cavolfiore',2,'pz'],topinambur:['Topinambur',2,'g'],sedrapa:['Sedano rapa',2,'pz'],verdmix:['Verdure di stagione a piacere',2,'g'],
crude:['Verdure crude per il piattino (carote, finocchi, sedano, insalata)',2,'g'],limone:['Limone',2,'pz'],aromi:['Aromi e spezie (basilico, rosmarino, origano, aglio, curcuma, zenzero)',2,'g'],
frutta:['Frutta fresca di stagione',3,'pz'],banana:['Banana',3,'pz'],mele:['Mele',3,'pz'],arance:['Arance',3,'pz'],bosco:['Frutti di bosco',3,'g'],avocado:['Avocado',3,'pz'],
macin:['Carne macinata',4,'g'],pollo:['Pollo (bocconcini)',4,'g'],tacchino:['Fesa di tacchino',4,'g'],affet:['Affettato magro (tacchino, bresaola, cotto)',4,'pz'],
gamb:['Gamberetti',5,'g'],salaff:['Salmone affumicato selvatico',5,'g'],salfr:['Salmone fresco',5,'g'],branz:['Branzino',5,'g'],tonno:['Tonno in scatola',5,'pz'],
uova:['Uova biologiche',6,'pz'],ricotta:['Ricotta',6,'g'],fiocchil:['Fiocchi di latte',6,'g'],feta:['Feta',6,'g'],yogurt:['Yogurt bianco, greco o kefir',6,'g'],
parm:['Parmigiano',6,'g'],latte:['Latte (parzialmente scremato, intero o bevanda vegetale)',6,'g'],
olio:['Olio extravergine di oliva',7,'cucchiai'],fruttas:['Frutta secca e semi',7,'g'],cremaf:['Crema di frutta secca 100%',7,'g'],marm:['Marmellata senza zuccheri aggiunti',7,'g'],
ghee:['Burro ghee',7,'g'],cacao:['Cacao amaro',7,'g'],ciocc:['Cioccolato fondente almeno 85%',7,'quadretti'],olive:['Olive',7,'g'],tahina:['Tahina',7,'g'],
senape:['Senape',7,'g'],aceto:['Aceto (mele o balsamico)',7,'g'],brodo:['Brodo vegetale',7,'g'],lievito:['Lievito per dolci',7,'g'],miele:['Miele',7,'g'],ococ:['Olio di cocco o di semi',7,'g']
};
const TYPE_NAME={pp:'Proteine',pc:'Carboidrati',pl:'Legumi e verdure',lib:'Libera',cs:'Salata',cd:'Dolce',ca:'Yogurt e altro'};
const FORM={
 pp:'40 g pane integrale (o 40 g di cereali) · verdure a volontà · 3 cucchiai di olio EVO · proteina in porzione abituale',
 pc:'80 g di carboidrato (peso a crudo) · verdure a volontà · 2 cucchiai di olio EVO · condimento semplice',
 pl:'150 g di legumi cotti (70 g se secchi) oppure verdure a volontà · pane integrale 40 g facoltativo'
};
const DRINK={cs:'Caffè, tè, tisane o spremuta d\'arancia',cd:'Latte p.s. o bevanda vegetale (anche macchiata), caffè / orzo / cicoria, spremuta d\'arancia, tè o tisane amare',ca:'Tè o tisane senza zucchero, caffè / orzo / cicoria'};

/* R: id, t=tipo, n=nome, k=tag, ing="id:qta id", how="passo|passo", note, pesce/pat=1 */
const R=[
/* COLAZIONI SALATE (fortemente consigliate) */
{id:'cs1',t:'cs',n:'Pane integrale tostato con affettato magro',ing:'pane:40 affet:2:fette',how:'Tosta la fetta di pane integrale (40 g).|Accompagnala con 2 fette di affettato magro.'},
{id:'cs2',t:'cs',n:'Pancake salato con salmone e crema di avocado',ing:'uova:1~ farmand:20~ salaff avocado:0.5~',how:'Prepara il pancake e cuocilo in padella antiaderente.|Farcisci con salmone affumicato e crema di avocado schiacciato.',note:'La ricetta del pancake salato non è nei documenti. Le quantità sono una proposta, sulla base del pancake alla banana senza la banana.'},
{id:'cs3',t:'cs',n:'2 uova con pane tostato',ing:'uova:2 pane:40',how:'Cuoci le uova come preferisci (sode, in camicia, strapazzate).|Servi con una fetta di pane tostato.'},
{id:'cs4',t:'cs',n:'Bruschetta con pomodorini',ing:'pane:40 pomod olio',how:'Tosta una fetta di pane integrale.|Condisci con pomodorini, sale e olio EVO.'},
/* COLAZIONI DOLCI */
{id:'cd1',t:'cd',n:'Pane tostato con burro ghee e velo di marmellata',ing:'pane:40 ghee marm',how:'Tosta 40 g di pane integrale (o 4 fette biscottate integrali).|Spalma il burro chiarificato e un velo di marmellata senza zuccheri aggiunti.',note:'Senza burro non serve la marmellata.'},
{id:'cd2',t:'cd',n:'Pane tostato con crema di mandorle o pistacchio',ing:'pane:40 cremaf',how:'Tosta 40 g di pane integrale (o 4 fette biscottate).|Spalma crema di mandorle o pistacchio 100%, senza zuccheri né edulcoranti.'},
{id:'cd3',t:'cd',n:'Pancake alla banana',ing:'banana:1 uova:1 farmand:20~ bosco',how:'Schiaccia la banana, mescola con 1 uovo e 2 cucchiai di farina di mandorle.|Cuoci in padella antiaderente da entrambi i lati.|Completa con frutti di bosco.'},
{id:'cd4',t:'cd',n:'Mug cake alle mandorle',ing:'farmand:45 uova:1 ococ cacao lievito',how:'Mescola in una tazza 45 g di farina di mandorle, 1 uovo, 1 cucchiaino di olio, ½ cucchiaino di lievito e cacao amaro o scaglie di cioccolato fondente.|Cuoci al microonde 90 secondi a massima potenza.',note:'Per addolcire: 1-2 cucchiaini di eritritolo.'},
/* ALTRE ALTERNATIVE */
{id:'ca1',t:'ca',n:"Yogurt con fiocchi d'avena",ing:'yogurt:125 avena',how:'125 g di yogurt bianco, greco o kefir con fiocchi d\'avena o quinoa soffiata.'},
{id:'ca2',t:'ca',n:'Yogurt con frutta secca e semi',ing:'yogurt:125 fruttas:15~',how:'125 g di yogurt bianco, greco o kefir con 1 cucchiaio di frutta secca e/o semi.'},
{id:'ca3',t:'ca',n:'Yogurt con frutta fresca e pinoli',ing:'yogurt:125 frutta:1 fruttas:15~',how:'125 g di yogurt bianco, greco o kefir con frutta fresca e 1 cucchiaio di frutta secca (per es. pinoli).'},
{id:'ca4',t:'ca',n:"Porridge d'avena",ing:'avena yogurt fruttas cacao',how:'Mescola fiocchi d\'avena, yogurt greco, una manciata di frutta secca e 1 cucchiaino di caffè o cacao amaro.|Si mangia freddo, oppure cuoci l\'avena nel latte per la versione calda.'},
{id:'ca5',t:'ca',n:'Latte intero con cacao amaro e noci',ing:'latte cacao fruttas',how:'Scalda il latte intero con cacao amaro.|Accompagna con noci o mandorle.'},
{id:'ca6',t:'ca',n:'Ricotta e frutta',ing:'ricotta:60~ frutta:1 fruttas:15~',how:'3-4 cucchiai di ricotta fresca con 1 frutto e 1 cucchiaio di noci o semi.'},
/* PRANZO / CENA CON PROTEINE */
{id:'pp1',t:'pp',k:'carne',n:'Carne macinata e zucchine',ing:'macin zucchine aromi',how:'Salta la carne macinata con zucchine a rondelle, scalogno o aglio e olio EVO.|Servi con pane integrale e il piattino di verdure crude.'},
{id:'pp2',t:'pp',k:'pesce',pesce:1,n:'Gamberetti, zucchine e pomodori cotti',ing:'gamb zucchine pelati',how:'Salta i gamberetti in padella.|Aggiungi zucchine a julienne, crude o grigliate, e i pomodori cotti.|Servi con pane integrale.',note:'Crostacei con moderazione.'},
{id:'pp3',t:'pp',k:'carne',n:'Fesa di tacchino e pomodorini',ing:'tacchino:100 pomod aromi',how:'100 g di fesa di tacchino con pomodorini ciliegino, origano e un filo d\'olio.|Servi con pane integrale.'},
{id:'pp4',t:'pp',k:'pesce',pesce:1,n:'Salmone affumicato e verdure saltate',ing:'salaff:100 carote zucchine peperoni',how:'Salta in padella carote, zucchine e peperoni.|Servi con 100 g di salmone affumicato e pane integrale.',note:'Meglio il salmone selvatico.'},
{id:'pp5',t:'pp',k:'carne',n:'Pollo insaporito con verdure in padella',ing:'pollo verdmix cipolla aromi',how:'Cuoci i bocconcini di pollo con gli aromi.|Ripassa le verdure in padella con aglio e/o cipolla e olio EVO.|Servi con pane integrale.'},
{id:'pp6',t:'pp',k:'formaggi',n:'Ricotta e finocchi crudi',ing:'ricotta:100 finocchi',how:'100 g di ricotta con finocchi crudi.|Servi con pane integrale.'},
{id:'pp7',t:'pp',k:'formaggi',n:'Fiocchi di latte e verdure saltate',ing:'fiocchil verdmix aceto',how:'Cuoci le verdure a cubetti e condisci con olio e aceto balsamico.|Aggiungi fiocchi di latte (o ricotta) e servi con pane integrale.'},
{id:'pp8',t:'pp',k:'formaggi',n:'Insalata greca',ing:'feta olive pomod cetrioli cipolla',how:'Taglia feta, pomodorini, cetrioli e cipolla (se gradita).|Aggiungi 4-5 olive e condisci con olio EVO.|Servi con pane integrale.'},
{id:'pp9',t:'pp',k:'uova',pat:1,n:'Frittata di verdure al forno',ing:'uova:2 zucchine:1:pz patate:1:pz cipolla:1 parm:50',how:'Taglia zucchina, patata e cipolla a fettine.|Sbatti le uova con parmigiano, sale e pepe e unisci le verdure.|Cuoci in forno in una teglia oliata.|Servi con pane integrale.',note:'La ricetta originale usa parmigiano e una patata. Il parmigiano è un formaggio stagionato e le patate sono previste una volta a settimana: se hai dubbi, chiedi alla tua nutrizionista.'},
{id:'pp10',t:'pp',k:'uova',n:'Uova alla mediterranea',ing:'uova:2 pelati:1:lattina cipolla:1 olive:50 aromi verdmix',how:'Soffriggi la cipolla tritata con olio e peperoncino.|Aggiungi i pelati e cuoci 10 minuti.|Fai dei piccoli spazi nel sugo e rompi le uova direttamente in padella.|Copri e cuoci a fuoco lento finché le uova sono cotte a piacere.|Aggiungi olive e basilico. Servi con verdure e pane integrale.'},
{id:'pp11',t:'pp',k:'uova',n:'Tortini di uova e ricotta',ing:'uova:2~ ricotta:100~ spinaci:20~ parm:12~ verdmix',how:'Scalda il forno a 180 °C.|Mescola uova, ricotta, parmigiano, sale, pepe e noce moscata.|Aggiungi gli spinaci tritati.|Versa in una teglia oliata e cuoci 30 minuti.|Servi con verdure e pane integrale.',note:'La ricetta originale è per più porzioni (5 uova, 250 g di ricotta, 50 g di spinaci, 30 g di parmigiano). Qui le quantità sono ridotte a circa 2 uova e sono una stima.'},
{id:'pp12',t:'pp',k:'uova',n:'Uova ripiene con avocado',ing:'uova:2 avocado:0.5 limone:0.5 yogurt:15~ verdmix',how:'Cuoci le uova sode, sgusciale e tagliale a metà.|Togli i tuorli e mescolali con avocado schiacciato, succo di limone, yogurt greco, sale e pepe.|Riempi le uova col composto.|Servi con verdure e pane integrale.'},
{id:'pp13',t:'pp',k:'uova',n:'Insalata di uova e asparagi',ing:'uova:2 asparagi:1:mazzetto senape:1:cucchiaio aceto:1:cucchiaio verdmix',how:'Cuoci gli asparagi a vapore e le uova sode.|Prepara la vinaigrette con senape, olio, aceto di mele, sale e pepe.|Disponi uova a fette e asparagi, condisci.|Servi con verdure e pane integrale.'},
{id:'pp14',t:'pp',k:'pesce',pesce:1,pat:1,nopane:1,n:'Branzino con patate',ing:'branz patate:250',how:'Cuoci il branzino in padella o al forno.|Accompagna con 250 g di patate (peso a crudo).',note:'Le patate sono previste una volta a settimana, meglio se dolci. Qui sostituiscono il pane.'},
{id:'pp15',t:'pp',k:'pesce',pesce:1,n:'Salmone ai ferri con fagiolini',ing:'salfr fagiolini',how:'Cuoci il salmone ai ferri e i fagiolini al vapore.|Condisci con olio EVO a crudo e servi con pane integrale.'},
/* PRANZI CON CARBOIDRATI (80 g a crudo) */
{id:'pc1',t:'pc',n:'Pasta integrale al pomodoro e basilico',ing:'pasta:80 pelati aromi',how:'Cuoci 80 g di pasta integrale.|Condisci con sugo di pomodoro e basilico e olio a crudo.|Aggiungi verdure a volontà come contorno.'},
{id:'pc2',t:'pc',n:'Pasta di farro con ragù leggero',ing:'pasta:80 macin pelati carote sedano cipolla',how:'Prepara un ragù leggero con poca carne macinata, carota, sedano, cipolla e pelati.|Condisci 80 g di pasta di farro.|Contorno di verdure a volontà.'},
{id:'pc3',t:'pc',tonno:1,n:'Pasta di kamut con tonno e pomodorini',ing:'pasta:80 tonno:1~ pomod',how:'Cuoci 80 g di pasta di kamut.|Salta i pomodorini e unisci il tonno sgocciolato.|Contorno di verdure a volontà.',note:'Tonno e sgombro in scatola: massimo 2 scatolette a settimana.'},
{id:'pc4',t:'pc',n:'Riso integrale con verdure saltate',ing:'riso:80 zucchine carote',how:'Cuoci 80 g di riso integrale.|Salta zucchine e carote con olio EVO e uniscile al riso.'},
{id:'pc5',t:'pc',n:'Pasta di grano saraceno con verdure',ing:'sarac:80 zucchine peperoni',how:'Cuoci 80 g di pasta di grano saraceno.|Salta zucchine e peperoni e condisci.'},
{id:'pc6',t:'pc',n:'Cous cous integrale con verdure',ing:'cous:80 zucchine pomod',how:'Prepara 80 g di cous cous integrale secondo le istruzioni.|Unisci zucchine e pomodorini saltati.'},
{id:'pc7',t:'pc',n:'Polenta con sugo di pomodoro e verdure',ing:'polenta:3~:fettine pelati cipolla',how:'2-3 fettine di polenta solida (oppure 1 mestolo abbondante se liquida).|Condisci con sugo di pomodoro e verdure.'},
{id:'pc8',t:'pc',n:'Insalata di farro con pomodorini e cetrioli',ing:'farro:80 pomod cetrioli',how:'Cuoci 80 g di farro e lascialo raffreddare.|Unisci pomodorini, cetrioli e olio EVO.'},
{id:'pc9',t:'pc',n:'Pasta di legumi con verdure',ing:'pastal:80 zucchine pomod',how:'Cuoci 80 g di pasta di legumi.|Condisci con zucchine e pomodorini saltati.'},
{id:'pc10',t:'pc',n:'Pasta e fagioli (dose di pasta dimezzata)',ing:'pasta:40 borl pelati',how:'Cuoci 40 g di pasta dentro i fagioli.|Aggiungi un po\' di pomodoro e olio a crudo.',note:'Se i carboidrati si associano a legumi o minestre, la dose si dimezza: 80 g diventano 40 g. La quantità di fagioli non è indicata per i pranzi: porzione abituale.'},
{id:'pc11',t:'pc',n:'Riso e piselli (dose di riso dimezzata)',ing:'riso:40 pis cipolla',how:'Cuoci 40 g di riso integrale con i piselli e un soffritto leggero di cipolla.|Olio a crudo.',note:'Carboidrato dimezzato perché associato ai legumi.'},
{id:'pc12',t:'pc',pat:1,n:'Patate dolci al forno con verdure',ing:'patdol:250 verdmix aromi',how:'Taglia 250 g di patate dolci (peso a crudo) e cuocile in forno.|Servi con verdure a volontà.',note:'Patate: una volta a settimana, meglio quelle dolci.'},
/* CENE CON LEGUMI E/O VERDURE */
{id:'pl1',t:'pl',n:'Insalata di ceci e verdure',ing:'ceci:150 zucchine cipolla limone',how:'Mescola i ceci con le zucchine e la cipolla tritata.|Condisci con olio, succo di limone e un pizzico di sale.'},
{id:'pl2',t:'pl',n:'Zuppa di lenticchie e cavolo nero',ing:'lent:150 cavneri carote sedano orzoc:30',how:'Stufa carota e sedano a dadini in olio.|Aggiungi le lenticchie e il cavolo nero.|Versa acqua calda e fai sobbollire.|Unisci l\'orzo perlato già cotto (30 g) e servi caldo.'},
{id:'pl3',t:'pl',n:'Hummus di cannellini con verdure crude',ing:'cann:150 carote finocchi pane:40 tahina:5 limone',how:'Frulla i fagioli con tahina (5 g), succo di limone e un pizzico di sale.|Servi con bastoncini di carota e finocchio.|Accompagna con pane integrale tostato.'},
{id:'pl4',t:'pl',n:'Burger di lenticchie e carote o zucca',ing:'lent:150 carote farcec',how:'Mescola lenticchie, carote cotte (o zucca in stagione) e farina di ceci fino a un composto compatto.|Forma un burger e cuocilo in padella con olio.|Contorno di verdure.'},
{id:'pl5',t:'pl',n:'Cous cous integrale con ceci e zucchine',ing:'cous:30 ceci:100 zucchine',how:'Cuoci 30 g di cous cous integrale.|Salta le zucchine a rondelle con olio e aggiungi 100 g di ceci.|Unisci il cous cous e mescola.'},
{id:'pl6',t:'pl',n:'Insalata tiepida di fagioli rossi e broccoli',ing:'ross:150 broccoli aromi',how:'Mescola i fagioli con i broccoli cotti al vapore.|Condisci con olio e un pizzico di peperoncino.'},
{id:'pl7',t:'pl',n:'Farro con piselli e carote',ing:'farroc:30 pis:100 carote',how:'Cuoci le carote a cubetti con i piselli in padella con olio.|Aggiungi 30 g di farro cotto e mescola.'},
{id:'pl8',t:'pl',n:'Crema di fave e cicoria',ing:'fave:150 cicoria',how:'Frulla le fave con un po\' d\'acqua di cottura.|Servi con la cicoria lessata.'},
{id:'pl9',t:'pl',n:'Insalata di borlotti e melanzane grigliate',ing:'borl:150 melanz aromi',how:'Griglia le melanzane e tagliale a cubetti.|Mescola con i borlotti.|Condisci con olio, origano e un pizzico di sale.'},
{id:'pl10',t:'pl',n:'Riso integrale con ceci e peperoni',ing:'risoc:30 ceci:100~ peperoni',how:'Salta i peperoni a cubetti in padella con olio.|Aggiungi i ceci e 30 g di riso integrale cotto, mescolando bene.'},
{id:'pl11',t:'pl',n:'Vellutata di lenticchie rosse e carote',ing:'lentr:70 carote cipolla brodo',how:'Cuoci lenticchie, carote e cipolla in acqua o brodo.|Frulla e condisci con olio a crudo.'},
{id:'pl12',t:'pl',n:'Vellutata di ceci e rosmarino',ing:'ceci:150 brodo aromi',how:'Riscalda i ceci con il brodo e il rosmarino.|Frulla e servi con un filo d\'olio.'},
{id:'pl13',t:'pl',n:'Frittelle di verdure',ing:'carote:250~ zucchine:250~ uova:1 farina:120 parm:30~ lievito olio',how:'Taglia le verdure a julienne.|Crea la pastella con uovo, acqua, farina, parmigiano, lievito e sale.|Cuoci dischi di impasto in una padella unta, 3-4 minuti per lato.',note:'Ricetta abbondante, adatta a più porzioni. Si possono aggiungere legumi a piacere.'},
{id:'pl14',t:'pl',n:'Polpette di melanzane',ing:'melanz:2 uova:1 pane:2:fette pangr:50 parm:30',how:'Cuoci le melanzane al vapore, raffreddale e frullale con uovo, pane integrale e parmigiano.|Forma polpette, passale nel pangrattato.|Cuoci al forno o in padella.',note:'Ricetta per 2 porzioni. Si possono aggiungere ceci, lenticchie o fagioli nell\'impasto.'},
{id:'pm1',t:'pl',n:'Vellutata di zucca e zenzero',ing:'zucca:500 cipolla:1 aromi brodo',how:'Taglia la zucca a cubetti e trita la cipolla.|Soffriggi la cipolla con olio.|Aggiungi zucca e zenzero grattugiato, copri con brodo e cuoci fino a che la zucca è morbida.|Frulla e regola di sale e pepe.'},
{id:'pm2',t:'pl',pat:1,n:'Minestra di cavolo verza e patate',ing:'verza:1 patate:2:pz carote:2:pz porri:1 brodo',how:'Taglia verza a strisce, patate a cubetti, carote a rondelle.|Soffriggi il porro con olio.|Aggiungi le verdure, copri con brodo e cuoci fino a che sono morbide.'},
{id:'pm3',t:'pl',n:'Vellutata di carote e arance',ing:'carote:500 cipolla:1 arance:2 brodo',how:'Soffriggi la cipolla, aggiungi le carote a pezzetti.|Copri con brodo e cuoci fino a che sono morbide.|Aggiungi il succo di arancia e frulla.'},
{id:'pm4',t:'pl',n:'Minestra di finocchi e sedano',ing:'finocchi:2 sedano:2:coste cipolla:1 brodo',how:'Taglia finocchi e sedano a fettine.|Soffriggi la cipolla tritata, aggiungi le verdure, copri con brodo e cuoci fino a che sono morbide.'},
{id:'pm5',t:'pl',n:'Vellutata di cavolfiore e curcuma',ing:'cavolfiore:1 cipolla:1 aromi brodo',how:'Dividi il cavolfiore in cimette.|Soffriggi la cipolla, aggiungi cavolfiore e 1 cucchiaino di curcuma.|Copri con brodo, cuoci e frulla.'},
{id:'pm6',t:'pl',pat:1,n:'Minestra di porri e patate',ing:'porri:2 patate:3:pz brodo',how:'Soffriggi i porri a rondelle con olio.|Aggiungi le patate a cubetti, copri con brodo e cuoci fino a che sono morbide.'},
{id:'pm7',t:'pl',n:'Vellutata di topinambur e mele',ing:'topinambur:500 mele:2 cipolla:1 brodo',how:'Sbuccia e taglia topinambur e mele, trita la cipolla.|Soffriggi la cipolla, aggiungi topinambur e mele.|Copri con brodo, cuoci e frulla.'},
{id:'pm8',t:'pl',n:'Minestra di bietole e zucchine',ing:'bietole:300 zucchine:2:pz cipolla:1 brodo',how:'Taglia bietole e zucchine a pezzi.|Soffriggi la cipolla, aggiungi le verdure, copri con brodo e cuoci fino a che sono morbide.'},
{id:'pm9',t:'pl',n:'Vellutata di sedano rapa e noci',ing:'sedrapa:1 cipolla:1 fruttas:50 brodo',how:'Sbuccia e taglia il sedano rapa a cubetti.|Soffriggi la cipolla, aggiungi il sedano rapa, copri con brodo e cuoci.|Frulla e aggiungi le noci tritate.'},
{id:'pm10',t:'pl',n:'Minestra di broccoli e cavolo nero',ing:'broccoli:300 cavneri:200 cipolla:1 carote:2:pz brodo',how:'Dividi i broccoli in cimette, taglia cavolo nero e carote.|Soffriggi la cipolla, aggiungi le verdure, copri con brodo e cuoci fino a che sono morbide.'}
];
const SP=[
{id:'sp1',n:'30 g di frutta secca',ing:'fruttas:30'},
{id:'sp2',n:'1 frutto o macedonia + 1 manciata di frutta secca',ing:'frutta:1 fruttas'},
{id:'sp3',n:'Yogurt o kefir intero senza zuccheri + 1 cucchiaio di gocce di cioccolato fondente o cacao amaro',ing:'yogurt cacao',note:'Se vuoi, dolcifica con poco miele.'},
{id:'sp4',n:'2 quadretti di cioccolato fondente 85%',ing:'ciocc:2'}
];
const RB={};R.forEach(r=>RB[r.id]=r);const SB={};SP.forEach(s=>SB[s.id]=s);
const BYT=t=>R.filter(r=>r.t===t);
/* ===== DATE, STATO, PIANO ===== */
const DOW=['Lun','Mar','Mer','Gio','Ven','Sab','Dom'];
const DOWL=['Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato','Domenica'];
const MON=['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic'];
const MONL=['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];
const pad=n=>String(n).padStart(2,'0');
const iso=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
function addDays(d,n){const x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()+n);return x}
const NOW=new Date();
const TODAY_D=(NOW.getDay()+6)%7;
const TODAY_W=addDays(NOW,-TODAY_D);
const wdate=(w,d)=>addDays(TODAY_W,w*7+d);
const wkey=w=>iso(wdate(w,0));
const dm=d=>d.getDate()+' '+MON[d.getMonth()];
const range=w=>DOW[0]+' '+dm(wdate(w,0))+' – '+DOW[6]+' '+dm(wdate(w,6));

const isObj=v=>!!v&&typeof v==='object'&&!Array.isArray(v);
function okSlot(y){return isObj(y)&&(y.t==='lib'?y.id==null:['pp','pc','pl'].indexOf(y.t)>=0&&!!RB[y.id]&&RB[y.id].t===y.t)}
function validPlan(p){return isObj(p)&&Array.isArray(p.days)&&p.days.length===7&&p.days.every(x=>isObj(x)&&!!RB[x.c]&&['cs','cd','ca'].indexOf(RB[x.c].t)>=0&&okSlot(x.l)&&okSlot(x.d)&&(x.s==null||!!SB[x.s]))}
function cleanState(s){
  const o={plans:{},done:{},have:{},ppl:2};
  if(!isObj(s))return o;
  if(isObj(s.plans))Object.keys(s.plans).forEach(k=>{if(/^\d{4}-\d{2}-\d{2}$/.test(k)&&validPlan(s.plans[k]))o.plans[k]={seed:Number.isInteger(s.plans[k].seed)?s.plans[k].seed:0,days:s.plans[k].days.map(x=>({c:x.c,l:{t:x.l.t,id:x.l.id==null?null:x.l.id},d:{t:x.d.t,id:x.d.id==null?null:x.d.id},s:x.s==null?null:x.s,m:Array.isArray(x.m)?x.m.filter(v=>['c','l','d'].indexOf(v)>=0):[]}))}});
  if(isObj(s.done))Object.keys(s.done).forEach(k=>{if(s.done[k]===true)o.done[k]=true});
  if(isObj(s.have))Object.keys(s.have).forEach(k=>{if(isObj(s.have[k])){o.have[k]={};Object.keys(s.have[k]).forEach(i=>{if(s.have[k][i])o.have[k][i.split('|')[0]]=1})}});
  if(s.ppl===1)o.ppl=1;
  return o;
}
let S={plans:{},done:{},have:{},ppl:2};
try{const j=localStorage.getItem('dietaSemplice.v1');if(j){const p=JSON.parse(j);S=cleanState(p)}}catch(e){}
const save=()=>{try{localStorage.setItem('dietaSemplice.v1',JSON.stringify(S))}catch(e){}};
const U={tab:'oggi',w:0,d:TODAY_D,open:{},vs:null,vt:null,copy:null,anim:true,undo:null};

/* Schema della dieta: pranzi con carboidrati a giorni alterni, cena libera di sabato (pranzo con proteine) */
const LUN=['pc','pp','pc','pp','pc','pp','pp'];
const CEN=['pp','pl','pp','pl','pp','lib','pl'];
const COL=['cs','ca','cs','cs','ca','cd','cs'];
const weekNum=w=>{const d=wdate(w,0);return Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/604800000)};
function genPlan(w,seed){
  const base=(weekNum(w)+seed)*7, used=new Set();
  const pick=(list,i)=>{for(let k=0;k<list.length;k++){const r=list[(i+k)%list.length];if(!used.has(r.id)){used.add(r.id);return r.id}}return list[i%list.length].id};
  const free=t=>BYT(t).filter(r=>!r.pat);
  const ppAll=free('pp'), fish=ppAll.filter(r=>r.pesce), other=ppAll.filter(r=>!r.pesce);
  const days=[];
  for(let d=0;d<7;d++){
    const o=base+d*5;
    const c=pick(BYT(COL[d]),o);
    const lt=LUN[d],dt=CEN[d];
    const l={t:lt,id:lt==='pp'?pick(other,o):pick(free('pc'),o)};
    let dd={t:dt,id:null};
    if(dt==='pp')dd.id=pick((d===2?other:fish),o);
    if(dt==='pl')dd.id=pick(free('pl'),o);
    days.push({c,l,d:dd,s:null});
  }
  return {seed,days};
}
function getPlan(w){const k=wkey(w);if(!S.plans[k]){S.plans[k]=genPlan(w,0);save()}return S.plans[k]}

/* ===== INGREDIENTI, SPESA, CONTROLLI ===== */
function tokens(r){
  let s=r.ing||'';
  if(r.t==='pp')s+=(r.nopane?'':' pane:40')+' olio:3 crude';
  if(r.t==='pc')s+=' olio:2';
  if(r.t==='pl')s+=' olio';
  return s.trim().split(/\s+/).map(t=>{const p=t.split(':'),id=p[0],q=parseFloat(p[1]);return {id,q:isNaN(q)?0:q,u:p[2]||IT[id][2],est:(p[1]||'').indexOf('~')>=0}});
}
const num=q=>q===0.5?'½':(Number.isInteger(q)?String(q):String(Math.round(q*10)/10).replace('.',','));
function fq(id,q,u,est){if(!q)return 'q.b.';u=u||IT[id][2];return (est?'≈ ':'')+num(q)+(u==='g'?' g':' '+u)}
function shop(plan){
  const A={};
  const add=r=>tokens(r).forEach(t=>{const a=A[t.id]||(A[t.id]={key:t.id,id:t.id,qs:{},n:0,qb:0,est:false});a.n++;if(t.q){a.qs[t.u]=(a.qs[t.u]||0)+t.q*S.ppl;if(t.est)a.est=true}else a.qb++});
  plan.days.forEach(x=>{
    add(RB[x.c]);
    if(x.l.id)add(RB[x.l.id]);
    if(x.d.id)add(RB[x.d.id]);
    if(x.s)add({t:'sp',ing:SB[x.s].ing});
  });
  return Object.values(A).sort((a,b)=>IT[a.id][1]-IT[b.id][1]||IT[a.id][0].localeCompare(IT[b.id][0],'it'));
}
function shopQ(a){
  const us=Object.keys(a.qs);
  if(!us.length)return 'q.b.';
  let t=us.map((u,i)=>fq(a.id,a.qs[u],u,a.est&&i===0)+(a.id==='olio'&&u==='cucchiai'?' (circa '+Math.round(a.qs[u]*15)+' ml)':'')).join(' + ');
  if(a.qb)t+=' + q.b.';
  return t;
}
function checks(plan){
  const D=plan.days,out=[],ok=t=>out.push({ok:1,t}),no=t=>out.push({ok:0,t});
  const c=(f)=>D.filter(f).length;
  const lp=c(x=>x.l.t==='pp'),lc=c(x=>x.l.t==='pc');
  (lp===4&&lc===3)?ok('Pranzi: 4 con proteine e 3 con carboidrati.'):no('Pranzi: '+lp+' con proteine e '+lc+' con carboidrati. Lo schema prevede 4 e 3.');
  let adj=0;for(let i=0;i<6;i++)if(D[i].l.t==='pc'&&D[i+1].l.t==='pc')adj++;
  adj===0?ok('I pranzi con carboidrati sono a giorni alterni.'):no('Due pranzi con carboidrati sono di fila. Vanno a giorni alterni.');
  const dl=c(x=>x.d.t==='pl'),dp=c(x=>x.d.t==='pp'),df=c(x=>x.d.t==='lib');
  (dl>=2&&dl<=3&&dp>=3&&dp<=4&&df===1)?ok('Cene: '+dl+' con legumi o verdure, '+dp+' con proteine, 1 libera.'):no('Cene: '+dl+' legumi/verdure, '+dp+' proteine, '+df+' libere. Servono 2-3 legumi/verdure, 3-4 proteine e 1 libera.');
  const fish=c(x=>x.d.t==='pp'&&x.d.id&&RB[x.d.id].pesce);
  fish>=2?ok('Pesce a cena: '+fish+' volte (almeno 2).'):no('Pesce a cena: '+fish+' volte. Il piano chiede possibilmente almeno 2.');
  D.forEach((x,i)=>{if(x.d.t==='lib'&&x.l.t==='pc')no(DOWL[i]+': con la cena libera il pranzo va con le proteine e verdure, non con pasta o cereali.')});
  let pat=0,tonno=0;
  D.forEach(x=>{[x.l,x.d].forEach(y=>{if(y.id){const r=RB[y.id];if(r.pat)pat++;if(r.tonno)tonno+=1}})});
  pat<=1?ok('Patate: '+pat+' su 1 a settimana.'):no('Patate in '+pat+' pasti. Ne è prevista una volta a settimana (250 g a crudo).');
  tonno<=2?ok('Tonno in scatola: '+tonno+' su 2 scatolette a settimana.'):no('Tonno in scatola: '+tonno+' scatolette. Massimo 2 a settimana.');
  return out;
}

/* ===== RENDER ===== */
const $=s=>document.querySelector(s);
const TICK='<svg viewBox="0 0 16 16"><path d="M3 8.5l3.2 3L13 4.5"/></svg>';
const ICON={
 oggi:'<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
 sett:'<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
 spesa:'<svg viewBox="0 0 24 24"><path d="M5 9h14l-1.4 9.2a2 2 0 0 1-2 1.8H8.4a2 2 0 0 1-2-1.8L5 9z"/><path d="M9 9l3-5 3 5"/></svg>',
 regole:'<svg viewBox="0 0 24 24"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z"/><path d="M8 17h11M9 8h6"/></svg>'};
const TABS=[['oggi','Oggi'],['sett','Settimana'],['spesa','Spesa'],['regole','Regole']];
const pill=t=>'<span class="pill p-'+t+'">'+TYPE_NAME[t]+'</span>';
const slotType=(day,s)=>s==='c'?RB[day.c].t:day[s].t;

function weekNav(){
  const w=U.w;
  const nm=w===0?'Questa settimana':w===1?'Prossima settimana':w===-1?'Settimana scorsa':w>1?'Tra '+w+' settimane':Math.abs(w)+' settimane fa';
  return '<div class="wnav"><button class="btn" data-a="wk" data-v="-1" aria-label="Settimana precedente">‹</button><div class="wl"><b>'+nm+'</b><small>'+range(w)+'</small></div><button class="btn" data-a="wk" data-v="1" aria-label="Settimana successiva">›</button></div>'+(w!==0?'<div class="row" style="margin-top:0"><button class="btn sm" data-a="today">Torna a oggi</button></div>':'');
}
function ingList(r){
  return '<ul class="ing">'+tokens(r).map(t=>'<li><span>'+IT[t.id][0]+'</span><span class="q">'+fq(t.id,t.q,t.u,t.est)+'</span></li>').join('')+'</ul>';
}
function slotCard(s){
  const plan=getPlan(U.w),day=plan.days[U.d];
  const t=slotType(day,s),id=s==='c'?day.c:day[s].id,r=id?RB[id]:null;
  const key=wkey(U.w)+'|'+U.d+'|'+s,done=!!S.done[key],ok=U.open[key];
  const label={c:'Colazione',l:'Pranzo',d:'Cena'}[s];
  let h='<section class="slot'+(done?' done':'')+'" data-t="'+t+'"><div class="slot-h"><span class="lbl">'+label+'</span>'+pill(t)+'</div>';
  if(t==='lib'){
    h+='<h3>Cena libera</h3><p class="note">Un pasto a settimana è libero, per esempio la pizza. Se la sera hai la pizza, a pranzo mangia il secondo con le verdure e lascia da parte pasta e cereali.</p>';
  }else{
    h+='<h3>'+r.n+'</h3><div class="formula">'+(FORM[t]||('Bevande: '+DRINK[t]))+'</div>';
    if(t==='cs')h+='<p class="note">Le colazioni salate sono fortemente consigliate.</p>';
    if(ok){
      h+='<div class="det"><h4>Ingredienti</h4>'+ingList(r)+'<h4>Come si prepara</h4><ol class="steps">'+r.how.split('|').map(x=>'<li>'+x+'</li>').join('')+'</ol>';
      if(r.note)h+='<p class="note">'+r.note+'</p>';
      if(t==='pp')h+='<p class="note">Aggiungi sempre un piattino di verdure crude. A fine pasto, se non ti gonfia, puoi mangiare un frutto. Le proteine non vanno pesate, i carboidrati sì.</p>';
      if(t==='pl')h+='<p class="note">Se abbini pane integrale, 40 g. I legumi in barattolo di vetro vanno bene. Con carboidrati e legumi insieme dimezza la dose del carboidrato.</p>';
      h+='</div>';
    }
  }
  h+='<div class="row">';
  if(r)h+='<button class="btn" data-a="rec" data-k="'+key+'" aria-expanded="'+!!ok+'">'+(ok?'Nascondi ricetta':'Come si prepara')+'</button>';
  h+='<button class="btn'+(U.vs===s?' on':'')+'" data-a="var" data-s="'+s+'" aria-expanded="'+(U.vs===s)+'">Cambia</button>';
  h+='<button class="chk'+(done?' on':'')+'" data-a="done" data-k="'+key+'" aria-pressed="'+done+'"><span class="tick">'+TICK+'</span>Fatto</button></div>';
  if(U.vs===s)h+=variants(s,t,id);
  return h+'</section>';
}
function variants(s,t,cur){
  const types=s==='c'?['cs','cd','ca']:s==='l'?['pp','pc']:['pp','pl','lib'];
  const vt=U.vt||t;
  let h='<div class="det"><div class="chips">'+types.map(x=>'<button class="btn sm'+(vt===x?' on':'')+'" data-a="vt" data-t="'+x+'" aria-pressed="'+(vt===x)+'">'+TYPE_NAME[x]+'</button>').join('')+'</div>';
  if(vt==='lib')h+='<div class="var"><button data-a="pick" data-s="'+s+'" data-t="lib" data-id=""'+(t==='lib'?' class="cur" aria-current="true"':'')+'><span>Cena libera (pizza o quello che preferisci)</span></button></div>';
  else h+='<div class="var">'+BYT(vt).map(r=>'<button data-a="pick" data-s="'+s+'" data-t="'+vt+'" data-id="'+r.id+'"'+(r.id===cur?' class="cur" aria-current="true"':'')+'><span>'+r.n+'</span>'+(r.k?'<small>'+r.k+'</small>':'')+'</button>').join('')+'</div>';
  return h+'</div>';
}
function viewOggi(){
  const plan=getPlan(U.w),dt=wdate(U.w,U.d);
  let h=weekNav()+'<div class="days">';
  for(let i=0;i<7;i++){
    const x=plan.days[i],dd=wdate(U.w,i);
    h+='<button class="day'+(i===U.d?' sel':'')+((U.w===0&&i===TODAY_D)?' today':'')+'" data-a="day" data-v="'+i+'" aria-pressed="'+(i===U.d)+'" aria-label="'+DOWL[i]+' '+dd.getDate()+', pranzo '+TYPE_NAME[x.l.t].toLowerCase()+', cena '+TYPE_NAME[x.d.t].toLowerCase()+'"><small>'+DOW[i]+'</small><b>'+dd.getDate()+'</b><div class="dots" aria-hidden="true"><span class="t-'+x.l.t+'"></span><span class="t-'+x.d.t+'"></span></div></button>';
  }
  h+='</div><div class="legend"><span><i class="t-pp"></i>Proteine</span><span><i class="t-pc"></i>Carboidrati</span><span><i class="t-pl"></i>Legumi e verdure</span><span><i class="t-lib"></i>Libera</span></div>';
  h+='<h2 class="h2">'+DOWL[U.d]+' '+dt.getDate()+' '+MONL[dt.getMonth()]+'</h2>';
  h+='<p class="sub">'+(U.w===0&&U.d===TODAY_D?'Oggi. ':'')+'Pranzo '+TYPE_NAME[plan.days[U.d].l.t].toLowerCase()+', cena '+TYPE_NAME[plan.days[U.d].d.t].toLowerCase()+'.</p>';
  h+=slotCard('c')+slotCard('l')+slotCard('d');
  const x=plan.days[U.d];
  h+='<section class="slot"><div class="slot-h"><span class="lbl">Spuntino, solo se hai fame</span></div><div class="chips"><button class="btn sm'+(!x.s?' on':'')+'" data-a="sp" data-id="" aria-pressed="'+!x.s+'">Nessuno</button>'+SP.map(s=>'<button class="btn sm'+(x.s===s.id?' on':'')+'" data-a="sp" data-id="'+s.id+'" aria-pressed="'+(x.s===s.id)+'">'+s.n+'</button>').join('')+'</div>'+(x.s&&SB[x.s].note?'<p class="note">'+SB[x.s].note+'</p>':'')+'</section>';
  const tips=['Bevi acqua. Niente bibite zuccherate e niente bibite zero.','Non ridurre l\'olio EVO indicato. Meglio a crudo, in padella senza temperature troppo alte.'];
  if(U.d>=5)tips.push('Nel weekend: 1 bicchiere di alcol.');
  if(U.d<5)tips.push('Durante la settimana niente dolciumi: al loro posto cioccolato fondente.');
  h+='<div class="box"><h3>Da ricordare</h3><ul class="list">'+tips.map(t=>'<li>'+t+'</li>').join('')+'</ul></div>';
  return h;
}
function viewSett(){
  const plan=getPlan(U.w);
  let h='<h2 class="h2">La settimana</h2>'+weekNav();
  h+='<div class="box"><h3>Rispetta la dieta?</h3><ul class="checks">'+checks(plan).map(c=>'<li><span class="badge '+(c.ok?'b-ok':'b-warn')+'">'+(c.ok?'✓':'!')+'</span><span>'+c.t+'</span></li>').join('')+'</ul></div>';
  plan.days.forEach((x,i)=>{
    const nm=y=>y.id?RB[y.id].n:'Cena libera';
    h+='<button class="wrow'+((U.w===0&&i===TODAY_D)?' today':'')+'" data-a="goto" data-v="'+i+'"><div class="wd"><small>'+DOW[i]+'</small><b>'+wdate(U.w,i).getDate()+'</b></div><div><div class="ml"><em>Colaz.</em><span>'+RB[x.c].n+'</span></div><div class="ml"><em>Pranzo</em><span>'+nm(x.l)+' '+pill(x.l.t)+'</span></div><div class="ml"><em>Cena</em><span>'+nm(x.d)+' '+pill(x.d.t)+'</span></div></div></button>';
  });
  h+=sendBtns('plan')+'<p class="note">Tocca un giorno per aprirlo, vedere le ricette e cambiare i pasti. Tipo di pasto e alternanza restano quelli della dieta.</p>';
  h+='<div class="row"><button class="btn" data-a="regen">Proponi altri piatti</button></div><p class="note">Cambia i piatti scelti dall\'app. Quelli che hai scelto tu restano.</p>';
  return h;
}
function shopText(){
  const k=wkey(U.w),list=shop(getPlan(U.w)).filter(a=>!(S.have[k]||{})[a.key]);
  return 'Spesa '+range(U.w)+' ('+(S.ppl===1?'1 persona':'2 persone')+')\n'+list.map(a=>'- '+IT[a.id][0]+': '+shopQ(a)).join('\n');
}

function planText(){
  const plan=getPlan(U.w),nm=y=>y.id?RB[y.id].n:'Cena libera';
  return 'Piano '+range(U.w)+'\n\n'+plan.days.map((x,i)=>DOWL[i]+' '+wdate(U.w,i).getDate()+'\n- Colazione: '+RB[x.c].n+'\n- Pranzo: '+nm(x.l)+'\n- Cena: '+nm(x.d)).join('\n\n');
}
function sendBtns(w){
  const lab=w==='plan'?'il piano':'la lista';
  let h='<div class="row"><button class="btn pri" data-a="send" data-w="'+w+'">Invia '+lab+'</button><button class="btn" data-a="copy" data-w="'+w+'">Copia</button></div>';
  if(U.copyW===w&&U.copy==='fail')h+='<p class="note">Non riesco a copiare in automatico. Seleziona il testo qui sotto.</p><textarea readonly rows="8" style="width:100%;margin-top:6px;font:12px var(--f-mono);background:var(--bg);color:var(--ink);border:1px solid var(--line);border-radius:8px;padding:8px">'+(w==='plan'?planText():shopText())+'</textarea>';
  return h;
}
function clip(t,done){try{navigator.clipboard.writeText(t).then(()=>done('ok'),()=>done('fail'))}catch(e){done('fail')}}
function viewSpesa(){
  const k=wkey(U.w),H=S.have[k]||{},list=shop(getPlan(U.w));
  const need=list.filter(a=>!H[a.key]),got=list.filter(a=>H[a.key]);
  const row=a=>{const q=shopQ(a);return '<button class="item'+(H[a.key]?' on':'')+'" data-a="have" data-id="'+a.key+'" aria-pressed="'+!!H[a.key]+'"><span class="tick">'+TICK+'</span><span class="nm">'+IT[a.id][0]+'<small>per '+a.n+(a.n===1?' pasto':' pasti')+'</small></span><span class="q'+(q==='q.b.'?' qb':'')+'">'+q+'</span></button>'};
  let h='<h2 class="h2">Spesa</h2>'+weekNav();
  h+='<div class="box"><b>'+got.length+' di '+list.length+' prodotti già in casa</b><div class="prog"><i style="width:'+Math.round(got.length/list.length*100)+'%"></i></div><div class="seg" role="group" aria-label="Quantità per">'+[1,2].map(n=>'<button class="btn sm'+(S.ppl===n?' on':'')+'" data-a="ppl" data-v="'+n+'" aria-pressed="'+(S.ppl===n)+'">'+(n===1?'1 persona':'2 persone')+'</button>').join('')+'</div><p class="note">Tocca un prodotto che hai già: passa tra quelli che ci sono e non lo devi comprare. Le quantità sono per tutti i pasti della settimana, per '+(S.ppl===1?'1 persona':'2 persone')+'.</p>'+sendBtns('shop');
  h+='</div>';
  let last=-1;
  need.forEach(a=>{const c=IT[a.id][1];if(c!==last){h+='<div class="grp">'+CAT[c]+'</div>'+(c===1?'<p class="note">Quantità di legumi già cotti, per esempio da barattolo. Se usi quelli secchi servono circa 70 g ogni 150 g.</p>':'');last=c}h+=row(a)});
  if(!need.length)h+='<p class="note" style="margin-top:16px">Hai già tutto per questa settimana.</p>';
  if(got.length)h+='<details style="margin-top:18px"><summary>Già in casa ('+got.length+')</summary>'+got.map(row).join('')+'</details>';
  return h;
}
const RULES=`
<h2 class="h2">Le regole della dieta</h2>
<p class="sub">Tutto quello che l'app controlla, in un posto solo.</p>
<div class="box"><h3>Schema della settimana</h3><div class="sch">
<div><h4>Pranzo</h4>4 pranzi con proteine: proteina, verdure libere, 40 g pane integrale o cereali, 3 cucchiai di olio.<br>3 pranzi a giorni alterni con 80 g di carboidrato, verdure libere, 2 cucchiai di olio.</div>
<div><h4>Cena</h4>2-3 cene con legumi e/o verdure (legumi cotti 150 g, secchi 70 g).<br>3-4 cene come il pranzo con proteine, pesce almeno 2 volte.<br>1 cena libera.</div>
<div><h4>Spuntini, solo se hai fame</h4>30 g di frutta secca, oppure frutto + frutta secca, oppure yogurt o kefir + cioccolato fondente, oppure 2 quadretti di fondente 85%.</div></div></div>
<div class="box"><h3>Le regole d'oro</h3><ul class="list">
<li>Pesa i carboidrati con cura. Le proteine non vanno pesate: porzione abituale.</li>
<li>I pesi sono a crudo, tranne dove c'è scritto "cotto", come i legumi.</li>
<li>Carboidrati insieme a legumi o minestre: dimezza la dose (80 g di pasta diventano 40 g).</li>
<li>Non ridurre l'olio EVO. Meglio a crudo, o in padella senza temperature troppo alte.</li>
<li>Con la pizza la sera, a pranzo il secondo con le verdure, non la pasta.</li>
<li>Ogni pasto con proteine ha un piattino di verdure crude. A fine pasto un frutto, se non gonfia.</li>
<li>Acqua. Niente bibite zuccherate e niente bibite zero.</li>
<li>Alcol: 1 bicchiere nel weekend. In settimana niente dolciumi, al loro posto cioccolato fondente.</li></ul></div>
<div class="cols">
<div class="box"><h3>Limiti</h3><ul class="list no">
<li>Affettati: mai oltre 100 g.</li><li>Formaggi: 100-150 g a porzione al massimo, evita quelli stagionati.</li>
<li>Tonno e sgombro in scatola: max 2 scatolette a settimana.</li><li>Patate: 1 volta a settimana, 250 g a crudo, meglio dolci.</li>
<li>Uova: 2-3 a porzione, anche più volte a settimana.</li><li>Avocado: mezzo per volta. Olive: 4-5.</li></ul></div>
<div class="box"><h3>Da evitare</h3><ul class="list no">
<li>Pesce spada, tilapia, cozze e vongole.</li><li>Pesce d'allevamento, quando possibile.</li><li>Formaggi stagionati.</li><li>Bibite zuccherate e bibite zero.</li><li>Dolciumi in settimana.</li></ul></div></div>
<div class="box"><h3>Alimenti consentiti</h3>
<details><summary>Carboidrati</summary><ul class="list yes"><li>Grano antico (per esempio Cappelli).</li><li>Pasta integrale, di kamut, di legumi, di farro, di riso integrale, di grano saraceno, di grano duro.</li><li>Cereali: farro, orzo, avena, ideali nelle minestre.</li><li>Riso integrale, basmati, rosso, nero.</li><li>Pseudocereali: grano saraceno, quinoa.</li><li>Legumi: fagioli, piselli, lenticchie, ceci.</li><li>Patate, meglio dolci. Cous cous.</li><li>Polenta: 2-3 fettine se solida, 1 mestolo abbondante se liquida.</li></ul></details>
<details><summary>Proteine</summary><ul class="list yes"><li>Affettati di alta qualità senza conservanti: bresaola, tacchino, pollo, prosciutto cotto.</li><li>Meglio carne bianca, la rossa non è vietata.</li><li>Pesce spesso. Salmone affumicato selvatico. Crostacei con moderazione. Preferisci i pesci piccoli.</li><li>Formaggi: ricotta, fiocchi di latte, caprino fresco, feta, mozzarella, crescenza, stracchino.</li><li>Uova biologiche.</li></ul></details>
<details><summary>Grassi</summary><ul class="list yes"><li>Olio EVO, di lino, di canapa.</li><li>Burro ghee.</li><li>Frutta secca, creme di frutta secca 100% e semi oleosi.</li><li>Avocado, olive.</li><li>Cioccolato fondente almeno 85%.</li></ul></details></div>
<div class="box"><h3>Quantità stimate</h3><p class="note" style="margin-top:0">Il simbolo ≈ indica una quantità che i documenti della dieta non riportano: serve solo per la lista della spesa. Gli ingredienti senza quantità nei documenti mostrano q.b.</p></div>
<div class="box"><h3>Su iPhone</h3><ul class="list"><li>Installa: apri l'indirizzo in Safari, tocca Condividi (il quadrato con la freccia) e poi Aggiungi alla schermata Home.</li><li>I tuoi dati restano sul telefono: spunte, varianti e prodotti già in casa.</li><li>Per mandare il piano o la lista a un'altra persona usa il pulsante Invia in Settimana e in Spesa.</li></ul></div>`;
function render(){
  try{renderMain()}catch(e){
    $('#app').innerHTML='<div class="box"><h3>Qualcosa non va</h3><p class="note">I dati salvati sul telefono non si leggono. Puoi ripristinarli: perdi spunte e varianti, non l\'app.</p><div class="row"><button class="btn pri" data-a="reset">Ripristina i dati</button></div></div>';
  }
}
function focusKey(el){
  if(!el||!el.dataset||!el.dataset.a)return null;
  const D=el.dataset;
  if(D.a==='pick')return '[data-a="var"][data-s="'+D.s+'"]';
  if(D.a==='goto')return '[data-a="day"][data-v="'+D.v+'"]';
  if(D.a==='have')return '[data-a="have"][data-id="'+D.id+'"]';
  const at=['k','id','v','s','t','w'].find(x=>D[x]!=null);
  return '[data-a="'+D.a+'"]'+(at?'[data-'+at+'="'+D[at]+'"]':'');
}
function renderMain(){
  const y=window.scrollY,fk=focusKey(document.activeElement);
  let h='<header class="top"><h1 class="brand">Dieta Semplice</h1><span class="date">'+DOWL[TODAY_D]+' '+NOW.getDate()+' '+MON[NOW.getMonth()]+'</span></header>';
  h+=U.tab==='oggi'?viewOggi():U.tab==='sett'?viewSett():U.tab==='spesa'?viewSpesa():RULES;
  $('#app').className='wrap'+(U.anim?' enter':'');U.anim=false;
  $('#app').innerHTML=h;
  $('#nav').innerHTML=TABS.map(t=>'<button class="'+(U.tab===t[0]?'on':'')+'" data-a="tab" data-v="'+t[0]+'" aria-current="'+(U.tab===t[0])+'">'+ICON[t[0]]+t[1]+'</button>').join('');
  window.scrollTo(0,y);
  const f=fk&&document.querySelector(fk);if(f)f.focus({preventScroll:true});
}
/* Avviso in basso, letto anche da VoiceOver; con Annulla quando l'azione cambia i dati */
const toast=document.createElement('div');toast.className='toast';toast.hidden=true;document.body.appendChild(toast);
const live=document.createElement('p');live.className='sr';live.setAttribute('role','status');document.body.appendChild(live);
let toastT=0;
function say(msg,undo){
  U.undo=undo?JSON.stringify(S):null;
  toast.innerHTML='<span>'+msg+'</span>'+(undo?'<button class="btn sm" data-a="undo">Annulla</button>':'');
  toast.hidden=false;live.textContent=msg;clearTimeout(toastT);
  toastT=setTimeout(()=>{toast.hidden=true;toast.innerHTML='';U.undo=null},undo?8000:4000);
}
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-a]');if(!el)return;
  const D=el.dataset,a=D.a;
  if(a==='undo'){if(U.undo){S=cleanState(JSON.parse(U.undo));save()}toast.hidden=true;toast.innerHTML='';U.undo=null;clearTimeout(toastT)}
  else if(a==='tab'){U.tab=D.v;U.vs=null;U.copy=null;U.copyW=null;U.anim=true;window.scrollTo(0,0)}
  else if(a==='day'){U.d=+D.v;U.vs=null;U.vt=null;U.anim=true}
  else if(a==='today'){U.w=0;U.d=TODAY_D;U.vs=null;U.anim=true}
  else if(a==='rec')U.open[D.k]=!U.open[D.k];
  else if(a==='var'){U.vs=U.vs===D.s?null:D.s;U.vt=null}
  else if(a==='vt')U.vt=D.t;
  else if(a==='pick'){const day=getPlan(U.w).days[U.d];say('Piatto cambiato.',true);if(D.s==='c')day.c=D.id;else day[D.s]={t:D.t,id:D.t==='lib'?null:D.id};day.m=(day.m||[]).filter(v=>v!==D.s).concat(D.s);U.vs=null;U.vt=null;save()}
  else if(a==='done'){const on=!S.done[D.k];if(on)S.done[D.k]=true;else delete S.done[D.k];save()}
  else if(a==='sp'){const day=getPlan(U.w).days[U.d];day.s=D.id||null;save()}
  else if(a==='reset'){try{localStorage.removeItem('dietaSemplice.v1')}catch(err){}S={plans:{},done:{},have:{},ppl:2};U.tab='oggi';U.w=0;U.d=TODAY_D;U.vs=null}
  else if(a==='wk'){U.w+=+D.v;U.vs=null;U.vt=null;U.copy=null;U.copyW=null;U.anim=true}
  else if(a==='goto'){U.d=+D.v;U.tab='oggi';U.vs=null;U.anim=true;window.scrollTo(0,0)}
  else if(a==='regen'){
    const k=wkey(U.w),old=getPlan(U.w),np=genPlan(U.w,(old.seed||0)+1);
    say('Ho proposto altri piatti. Quelli scelti da te sono rimasti.',true);
    np.days.forEach((x,i)=>{const o=old.days[i];o.m=o.m||[];o.m.forEach(s=>{if(s==='c')x.c=o.c;else x[s]={t:o[s].t,id:o[s].id}});x.m=o.m;x.s=o.s});
    S.plans[k]=np;save()}
  else if(a==='have'){const k=wkey(U.w);S.have[k]=S.have[k]||{};const on=!S.have[k][D.id];say(IT[D.id][0]+(on?': già in casa.':': da comprare.'),true);if(on)S.have[k][D.id]=1;else delete S.have[k][D.id];save()}
  else if(a==='ppl'){S.ppl=+D.v===1?1:2;save()}
  else if(a==='send'||a==='copy'){
    const txt=D.w==='plan'?planText():shopText();
    U.copyW=D.w;
    const done=r=>{U.copy=r;if(r==='ok')say('Testo copiato. Incollalo in una chat.');render()};
    if(a==='send'&&navigator.share){navigator.share({text:txt}).then(()=>done(null),e=>{if(e&&e.name==='AbortError')done(null);else clip(txt,done)})}
    else clip(txt,done);
    return;
  }
  render();
});
render();


if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('sw.js').catch(()=>{})})}
