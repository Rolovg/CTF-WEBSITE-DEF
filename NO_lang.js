const translations = {
  ca: {
  
    title: "COP_CTF",
    subtitle: "Hot Pursuit for Hackers",
    hero_title: "COP_CTF",
    hero_sub: "Hot Pursuit for Hackers",
    btn_ctf: "CTF",
    btn_doc: "Documentació",
    btn_roadmap: "Roadmap",
    challenges_title: "Reptes Disponibles",
    challenges_hint: "Pressiona un repte per començar",
    toc_title: "Llista de continguts",
    learn_intro: "Trieu un tema a l'esquerra per veure contingut d'aprenentatge.",
    close: "Tanca",
    submit: "Enviar",
    view_solution: "Veure solució",
    no_flag: "⚠️ Introdueix una flag",
    correct: "✅ Correcte!",
    wrong: "❌ Incorrecte",
    roadmap_title: "Roadmap d'aprenentatge",
    roadmap_sub: "Segueix un camí aleatori de reptes CTF",
    roadmap_intro: "Cada vegada que carreguis aquesta pàgina es generarà un recorregut aleatori de reptes.",
    roadmap_generate: "Genera nou recorregut",
    final_unlocked: "Tots completats! Accés al repte final desbloquejat!",
    btn_welcome: "Benvingut",
      btn_story: "Mode història",

      welcome_title: "COP_CTF",
      welcome_intro: "Trieu un tema a l'esquerra per veure contingut d'aprenentatge.",
      story_title: "Mode història",
      story_intro: "Segueix el teu progrés i sessions.",

      // Llistes de temes (com Documentació) — OMPLE els body:
welcome_docs: [
  { 
    title: "Benvingut a COP_CTF!",    
    body: `
Benvingut a COP_CTF agent! <br><br>
<div class="section-image-container">
  <img src="galeria/logo_def-COP_DEF.jpg" alt="Intro CTF" class="section-image">
</div>
<br>
Aquí aprendràs en aquest entorn web els exercicis més bàsics de la competició que es practica en els entorns de ciberseguretat anomenada 'Captura la Bandera' (CTF = Capture The Flag). <br>
Si no has fet mai un CTF, o no saps el que és: no et preocupis pas. <br>
Aquests exercicis et serviran per preparar-te abans de fer CTFs amb un nivell més alt com els que ofereixen 'TryHackMe', 'HackTheBox', 'HackThisSite', etc. <br><br>
Un cop explicat això, som-hi! <br>`
  },
  { 
  title: "Què vol dir CTF?",   
  body: `
  CTF vol dir 'Capture The Flag', és a dir, 'Captura la Bandera'. En ciberseguretat, un CTF és un conjunt de reptes pràctics on has de trobar 'banderes' (petits codis secrets) amagades dins d'arxius, pàgines web, servidors o sistemes vulnerables. <br>
  L’objectiu és resoldre problemes d’anàlisi, hacking ètic, criptografia, enginyeria inversa, entre d'altres, per millorar les teves habilitats d’investigació. <br><br>

    Seràs el millor dels teus agents a 'COP_CTF'? Demostra-ho fent clic a la secció "CTF" per començar amb una serie d'exercisis a triar lliurament que et farà rumiar per averiguar quin es el 'prompt' que resol l'exercici.

  <div class="image-row-balanced">
    <img src="galeria/CTF1.jpg" alt="CTF Image 1" class="image-balanced">
    <img src="galeria/CTF2.jpg" alt="CTF Image 2" class="image-balanced">
  </div>`



}
,
  { 
    title: "Per què COP_CTF?", 
    body: `
    La ciberseguretat presenta especialitzacions com el 'Digital Forensics' (pericial digital), l’'Incident Response' o l’'Ethical Hacking', on s’assembla molt a la feina tradicional d’un policia: en ambdós camps es vol investigar l’entorn a la cerca d’esdeveniments sospitosos, descobrir proves i capturar 'els culpables', siguin delictes físics o ciberatacs. <br>Per això mateix, com que els CTF són exercicis d’investigació, nosaltres hem volgut adaptar-los amb una estètica policial i una narrativa pròpia explicada al 'Mode Història'. <br><br>Vols conèixer-la? Fes clic allà i endinsa’t en una nova aventura policial que et vindrà ganes d’acabar de principi a fi. <br> Endavant!
  <div class="image-row-balanced">
      <img src="galeria/mossos.jpg" alt="CTF Suspects" class="image-balanced">
    <img src="galeria/suspects.png" alt="CTF Suspects" class="image-balanced">

  </div>

    `
  }
  
  ,
  { 
    title: "Documentació", 
    body: `
   Has començat els exercisis de "CTF" o el "Roadmap" i et notes encallat? No et preocupis! <br> A la secció de "Documentació" trobaràs explicacions bàsiques sobre els conceptes més comuns que apareixen en els reptes CTF. <br><br>
   No et desanimis pas! Llegeix cada secció detenidament i torna als reptes quan et sentis preparat.
  <div class="image-row-balanced">
      <img src="galeria/eddison.jpg" alt="CTF Suspects" class="image-balanced">
    <img src="galeria/jobs.jpg" alt="CTF Suspects" class="image-balanced">

  </div>

    `
  }
],


story_docs: [
  { 
    title: 'Mode Història',  
    body: `Un robatori a gran escala ha sacsejat un dels casinos més importants de Las Vegas. Aquest esdeveniment S\'ha convertit en l\'escenari d\'un dels robatoris digitals més sofisticats de l\'última dècada a tots els EE.UU.<br><br>Durant la matinada, els clients del casino van començar a denunciar que els seus comptes bancaris havien estat buidats, tots des del caixer automàtic principal de l\'establiment.<br><br>L\'equip de ciberforenses va descobrir una placa RFID falsa instal·lada sobre el lector contactless del caixer automàtic principal del casino, que capturava les dades de les targetes dels clients.<br><br>Aquest tipus d\'atac es coneix com a <i>RFID skimming</i>, i permet copiar la informació bancària de les víctimes cap a un servidor extern per poder després extreure els diners del compte malgrat no ser el propietari.<br><br>La Policia Metropolitana de Las Vegas, juntament amb l\'equip de Ciberdelinqüència dirigits pel Leon Kennedy (policia de l\'esquerra) i Chris Redfield (policia de la dreta), han identificat sis sospitosos internacionals que es trobaven al casino la nit de l\'incident.<br><br> ¿Podràs averiguar quin dels sis sospitos es debò el culpable? Averigue\'m-ho! Comencem per saber quins sospitossos es mencionen
     <div class="image-row-balanced">
      <img src="galeria/police.jpg" alt="CTF Suspects" class="image-balanced">
    <img src="galeria/suspects.png" alt="CTF Suspects" class="image-balanced">

  </div>
    `
  },
{
  title: 'Niko Dimitrovik',
  body: `
  <div class="suspect-card">
    <figure class="suspect-media">
      <img src="galeria/1_niko_Dimitrovik.png" alt="Retrat de Niko Dimitrovik" loading="lazy">
    </figure>

    <div class="suspect-info">
      <ul class="suspect-meta">
        <li><span class="label">Edat</span><span>34</span></li>
        <li><span class="label">Gènere</span><span>Home</span></li>
        <li><span class="label">Nacionalitat</span><span>Sèrbia</span></li>
        <li><span class="label">Rol</span><span>Matemàtic i Físic</span></li>
      </ul>
<h4>Paraules clau (KeyWords)</h4>
      <div class="pills">
        <span class="pill">Matemàtiques</span>
        <span class="pill">Física</span>
        <span class="pill">RFID</span>
        <span class="pill">Electrònica avançada</span>
      </div>

      <h4>Perfil</h4>
      <p>Excampió nacional de matemàtiques i física a Belgrad. La seva complexió atlètica, i els seus 1,96 metres, el fa semblar més un guardaespatlles que un científic a simple vista.</p>

      <h4>Motiu</h4>
      <p>La seva habilitat amb els números i l’historial d’experiments en electrònica avançada el vinculen amb dispositius RFID modificats. Registres de viatges recents el situen a Las Vegas el dia de l’atac; el seu perfil tècnic suggereix que podria haver dissenyat el sistema de xifrat utilitzat.</p>
    </div>
  </div>`
},
{
  title: 'Eva Poliakov',
  body: `
  <div class="suspect-card">
    <figure class="suspect-media">
      <img src="galeria/4_Eva_Poliakov.png" alt="Retrat d'Eva Poliakov" loading="lazy">
    </figure>
    <div class="suspect-info">
      <ul class="suspect-meta">
        <li><span class="label">Edat</span><span>28</span></li>
        <li><span class="label">Gènere</span><span>Dona</span></li>
        <li><span class="label">Nacionalitat</span><span>Rússia</span></li>
        <li><span class="label">Rol</span><span>Model</span></li>
      </ul>
      <h4>Paraules clau (KeyWords)</h4>
      <div class="pills">
        <span class="pill">Buscada per la InterPol</span>
        <span class="pill">A prop del ATM durant el hackeig</span>
        <span class="pill">Forro metàl·lic</span>
      </div>
      <h4>Perfil</h4>
      <p>Model internacional i guanyadora de diversos concursos de bellesa. Segons la Interpol, sospitosa de dirigir una xarxa de robatoris de rellotges de luxe a Suïssa.</p>
      <h4>Motiu</h4>
      <p>Vista sortint del casino poc abans del hackeig. Les càmeres la van enregistrar a prop del caixer minuts abans de l’atac amb una jaqueta de folre metàl·lic, possiblement per ocultar dispositius RFID.</p>
    </div>
  </div>`
},
{
  title: 'Clara Bekker',
  body: `
  <div class="suspect-card">
    <figure class="suspect-media">
      <img src="galeria/5_Clara_Bekker.png" alt="Retrat de Clara Bekker" loading="lazy">
    </figure>
    <div class="suspect-info">
      <ul class="suspect-meta">
        <li><span class="label">Edat</span><span>72</span></li>
        <li><span class="label">Gènere</span><span>Dona</span></li>
        <li><span class="label">Nacionalitat</span><span>Sud-Àfrica</span></li>
        <li><span class="label">Rol</span><span>Empresària</span></li>
      </ul>
            <h4>Paraules clau (KeyWords)</h4>
      <div class="pills">
        <span class="pill">Finances</span> <span class="pill">Distracció al personal</span>
      </div>
      <h4>Perfil</h4>
      <p>Inversora de múltiples empreses a Pretòria i una de les principals finançadores de l’aeroport de Johannesburg.</p>
      <h4>Motiu</h4>
      <p>Captada engalipant als guàrdies quan es va detectar la primera transferència fraudulenta.</p>
    </div>
  </div>`
},
{
  title: 'David McCloud',
  body: `
  <div class="suspect-card">
    <figure class="suspect-media">
      <img src="galeria/6_David_McCloud.png" alt="Retrat de David McCloud" loading="lazy">
    </figure>
    <div class="suspect-info">
      <ul class="suspect-meta">
        <li><span class="label">Edat</span><span>50</span></li>
        <li><span class="label">Gènere</span><span>Home</span></li>
        <li><span class="label">Nacionalitat</span><span>Luxemburg</span></li>
        <li><span class="label">Rol</span><span>Influencer</span></li>
      </ul>
           <h4>Paraules clau (KeyWords)</h4>
      <div class="pills">
        <span class="pill">Crypto Influencer</span><span class="pill">Augment de saldo sospitós</span><span class="pill">Vídeo de YT que pot delatar-lo</span>
      </div>
      <h4>Perfil</h4>
      <p>Influencer multimilionari, famós per passar de viure al carrer durant dos anys a posseïr tres mansions i deu cotxes de luxe gràcies a invertir el seu patrimoni en criptomonedes a través d'un PC de la Biblioteca Nacional de Luxemburg.</p>
      <h4>Motiu</h4>
      <p>Els seus comptes van ser els únics en augmentar durant aquest fet.
Es més, el seu canal de YouTube emetia en directe des d'una suite del mateix casino, on va retransmetre com cada un dels seus comptes van rebre 'transferències anònimes' en criptomonedes coincidents amb l'hora del ciberatac.</p>
    </div>
  </div>`
},
{
  title: 'João Du Santos',
  body: `
  <div class="suspect-card">
    <figure class="suspect-media">
      <img src="galeria/3_Joao_Du_Santos.png" alt="Retrat de João Du Santos" loading="lazy">
    </figure>
    <div class="suspect-info">
      <ul class="suspect-meta">
        <li><span class="label">Edat</span><span>41</span></li>
        <li><span class="label">Gènere</span><span>Home</span></li>
        <li><span class="label">Nacionalitat</span><span>Brasil</span></li>
        <li><span class="label">Rol</span><span>DJ</span></li>
      </ul>
         <h4>Paraules clau (KeyWords)</h4>
      <div class="pills">
        <span class="pill">DJ al casino</span><span class="pill">Utilitzat ATM</span> <span class="pill">Compte bancaria no afectada</span>
      </div>
      <h4>Perfil</h4>
      <p>Famós a tot el Brazil per ser el DJ favorit durant els carnavals anuals de Brasília i Rio de Janeiro.</p>
      <h4>Motiu</h4>
      <p>Estava actuant al casino durant l’incident. Va utilitzar el caixer minuts després de la primera victima sense resultar pas afectat.
      És més, els registres del sistema revelen que la seva targeta es va autenticar de manera anòmala: sense contacte físic ni contactless.</p>
    </div>
  </div>`
},
{
  title: 'Kojiro Wakabayashi',
  body: `
  <div class="suspect-card">
    <figure class="suspect-media">
      <img src="galeria/2_Kojiro_Wakabayashi.png" alt="Retrat de Kojiro Wakabayashi" loading="lazy">
    </figure>
    <div class="suspect-info">
      <ul class="suspect-meta">
        <li><span class="label">Edat</span><span>65</span></li>
        <li><span class="label">Gènere</span><span>Home</span></li>
        <li><span class="label">Nacionalitat</span><span>Japó</span></li>
        <li><span class="label">Rol</span><span>Exsubdirector OEG</span></li>
      </ul>
      <div class="pills">
        <span class="pill">Alt coneixement de Finances</span><span class="pill">Cervell prodigiós</span> <span class="pill">Comportament inusual durant l'interrogatori</span>
      </div>
  <h4>Perfil</h4>
  <p>Durant més de trenta anys va treballar com a subdirector a la Borsa d’Osaka (Japó). És conegut per la seva ment privilegiada en economia, fruit de l’entrenament que va rebre del seu pare (un reconegut gran mestre de cal·ligrafia japonesa) utilitzant únicament el <em>fude</em> (pinzell) i el <em>sumi</em> (tinta negra) a l'hora de realitzar tot tipus de càlculs matemàtics. <br> D’aquell aprenentatge, en Kojiro va adquirir disciplina, paciència, i una sorprenent habilitat mental per completar tot tipus de reptes matemàtics, com financers o estadístics.</p>
  <h4>Motiu</h4>
  <p>Els investigadors sospiten que el seu profund coneixement dels fluxos econòmics, i la seva habilitat per d'operacions financeres haurien pogut ser claus en la planificació del crim. Durant la seva detenció, va insistir repetidament en contactar amb el seu advocat a Kioto tot i que l’interrogatori encara no havia pas començat.</p>
    </div>
  </div>`
},
{
  title: 'Video presentació',
     body: `Aquí tens els vídeos de presentació on narran la històia de COP_CTF. <br> Vols possar-te més a fons en la història abans de començar els reptes? <br> Pots mirar el trailer curt (esquerra) o el trailer llarg (dreta) on s'entra més a fons en l'informe dels personatges.
     <div class="image-row-balanced">
     <video width="400" controls>
      <source src="videos/SHORT_COP_CTF.mp4" type="video/mp4">
</video>
     <video width="400" controls>
      <source src="videos/LONG_COP_CTF.mp4" type="video/mp4">
</video>
<br>
<p>Vols començar? Clica a "RoadMap" per començar a investigar aquest crim i enxampar el culpable. Anims!!</p>


  </div>
    `
  },


],

    challenges: [
      { id:'Artur', title:'Xifrat Cèsar', category:'Criptografia', difficulty:'Fàcil',
        desc:'Desxifra el següent missatge: sdamvobzxznvmhjgv', solution:'solucions/Xifrat_Cesar.txt', flag:'flag{xifratgecesarmola}' },

      { id:'Pol', title:'Base64', category:'Criptografia', difficulty:'Fàcil',
        desc:'Desxifra el següent missatge: ZmxhZ3tzZV9kZWNvZGlmaWNhcl9lbl9iYXNlNjR9', solution:'solucions/Base64.txt', flag:'flag{se_decodificar_en_base64}' },

      { id:'Pol', title:'Xifrat Vigenère', category:'Criptografia', difficulty:'Fàcil',
        desc:'Desxifra el següent missatge amb la clau "oberta": wkhvixphqkcjddnx', solution:'solucions/Xifrat_Vigenere.txt', flag:'flag{vigenere_et_completa}' },

      { id:'Pol', title:'Codi ASCII', category:'Criptografia', difficulty:'Fàcil',
        desc:'Desxifra el següent missatge codificat en ASCII: 72 101 108 108 111 32 87 111 114 108 100', solution:'solucions/ASCII.txt', flag:'flag{desxifrat_asciiactiu}' },

      { id:'Pol', title:'Codi Morse', category:'Criptografia', difficulty:'Fàcil',
        desc:'Desxifra el següent missatge en codi Morse: .... . .-.. .-.. --- / .-- --- .-. .-.. -..', solution:'solucions/Morse.txt', flag:'flag{codi_morse_primer_conegut}' },

      { id:'Pol', title:'Triple Capa', category:'Criptografia', difficulty:'Mitjà',
        desc:'Desxifra aquest missatge codificat en múltiples capes: Q1ZsbmdmcXJqcWZmYnd2Z3Y=', solution:'solucions/Triple_Capa.txt', flag:'flag{cryptography_is_fun}' },

      { id:'Pol', title:'XOR Brutal', category:'Criptografia', difficulty:'Mitjà',
        desc:'Aquest text ha estat xifrat amb XOR i una clau d’1 caràcter desconeguda (en ASCII): 1f0c190e0409110f171a', solution:'solucions/XOR_Brutal.txt', flag:'flag{xor_clau_simple}' }
    ],


    docs: [
      { id:'rev', title:'Encriptació',
        body:`<p><strong>L'encriptació</strong> porta amb nosaltres des de temps immemorials, evitant que enemics o persones alienes als nostres interessos puguin llegir els nostres missatges o instruccions.</p>
              <p>Un dels primers mètodes d'encriptació va ser el mètode Cèsar, que es basava a moure la posició de la lletra X posicions en una direcció al diccionari.</p>
              <p>Ex. CASA -> HEXE (desplaçant cada lletra 4 posicions).</p>` },

      { id:'brute', title:'Atacs força bruta',
        body:`<p><strong>Els atacs de força bruta</strong> es basen a provar combinacions fins que es dóna amb la clau correcta.</p>
              <p>Tipus: Simples (provar totes les combinacions) i Diccionari (provar contrasenyes des d'un fitxer).</p>` },

      { id:'ASCII', title:'ASCII',
        body:`<p><strong>La codificació ASCII</strong> assigna un nombre a cada caràcter imprimible i de control.</p>
              <pre style="background:#111;padding:8px;border-radius:6px;color:#f5f5f5;font-family:monospace;">
# python example
nums = "72 101 108 108 111".split()
print(''.join(chr(int(n)) for n in nums))  # Hello
              </pre>` },

      { id:'hash', title:'Hashing',
        body:`<p>Les funcions <em>hash</em> (MD5, SHA1, SHA256) generen empremtes úniques de dades.</p>
              <p>S'utilitzen per comprovar integritat o protegir contrasenyes (no emmagatzemar en clar).</p>` },

      { id:'osint', title:'OSINT',
        body:`<p>L’OSINT (Open Source Intelligence) és l’art de recopilar informació pública d’Internet per obtenir pistes.</p>
               <p>Exemples: metadades d'imatges, domini whois, perfils socials, DNS.</p>` },

      { id:'forensic', title:'Forense digital',
        body:`<p>Analitzar fitxers, imatges o tràfic de xarxa per trobar proves. Una habilitat molt útil en CTFs.</p>` },

      { id:'web', title:'Seguretat Web',
        body:`<p>Temes comuns: XSS, SQL Injection, CSRF, LFI/RFI, SSRF, aprèn a trovar i explotar aquests errors en entorns segurs.</p>` }
    ]
  },

  no: {
 
    title: "COP_CTF",
    subtitle: "praktiser · lær",
    hero_title: "COP_CTF",
    hero_sub: "Hot Pursuit for Hackers",
    btn_ctf: "CTF",
    btn_doc: "Dokumentasjon",
    btn_roadmap: "Veikart",
    challenges_title: "Tilgjengelige utfordringer",
    challenges_hint: "Trykk på en utfordring for å starte",
    toc_title: "Innholdsfortegnelse",
    learn_intro: "Velg et tema til venstre for å se læringsinnholdet.",
    close: "Lukk",
    submit: "Send inn",
    view_solution: "Vis løsning",
    no_flag: "⚠️ Skriv inn et flagg",
    correct: "✅ Riktig!",
    wrong: "❌ Feil",
    roadmap_title: "Læringsvei",
    roadmap_sub: "Følg en tilfeldig vei med CTF-utfordringer",
    roadmap_intro: "Hver gang du laster inn denne siden genereres en tilfeldig vei av utfordringer.",
    roadmap_generate: "Generer ny vei",
    final_unlocked: "Alle fullført! Tilgang til sluttoppgaven er låst opp!",
  btn_welcome: "Velkommen",
  btn_story: "Historie-modus",

  welcome_title: "COP_CTF",
  welcome_intro: "Velg et tema til venstre for å se læringsinnhold.",
  story_title: "Historie-modus",
  story_intro: "Følg fremgangen og øktene dine.",

welcome_docs: [
  { 
    title: "Velkommen til COP_CTF!",    
    body: `
Velkommen til COP_CTF, agent! <br><br>
<div class="section-image-container">
  <img src="galeria/logo_def-COP_DEF.jpg" alt="Intro CTF" class="section-image">
</div>
<br>
Her vil du lære de grunnleggende øvelsene som brukes i konkurranser innen cybersikkerhet kalt 'Capture The Flag' (CTF). <br>
Har du aldri deltatt i en CTF før, eller vet du ikke hva det er? Ikke bekymre deg. <br>
Disse oppgavene hjelper deg å forberede deg før du prøver mer avanserte CTF-er som de på 'TryHackMe', 'HackTheBox' eller 'HackThisSite'. <br><br>
Nå som du vet hva dette handler om – la oss sette i gang! <br>`
  },
  { 
  title: "Hva betyr CTF?",   
  body: `
  CTF står for 'Capture The Flag', altså 'Fang flagget'. Innen cybersikkerhet er en CTF en samling praktiske utfordringer der du må finne 'flagg' (små hemmelige koder) skjult i filer, nettsider, servere eller sårbare systemer. <br>
  Målet er å løse problemer innen analyse, etisk hacking, kryptografi, og omvendt ingeniørkunst for å styrke dine etterforskningsferdigheter. <br><br>

  Vil du bli den beste agenten i 'COP_CTF'? Bevis det ved å klikke på "CTF"-delen og starte med en serie fritt valgte oppgaver som får deg til å tenke og finne det riktige promptet som løser dem.

  <div class="image-row-balanced">
    <img src="galeria/CTF1.jpg" alt="CTF Image 1" class="image-balanced">
    <img src="galeria/CTF2.jpg" alt="CTF Image 2" class="image-balanced">
  </div>`
},
  { 
    title: "Hvorfor COP_CTF?", 
    body: `
    Cybersikkerhet omfatter spesialiseringer som 'Digital Forensics', 'Incident Response' og 'Ethical Hacking', som ligner mye på politiets arbeid: i begge tilfeller handler det om å undersøke miljøet, finne bevis og fange gjerningspersonen enten det gjelder fysiske forbrytelser eller cyberangrep. <br>
    Derfor har vi valgt å gi disse CTF-oppgavene en politistil og en egen fortelling, forklart i 'Historie-modus'. <br><br>
    Vil du vite mer? Klikk der og bli med i et nytt politidrama du garantert vil fullføre fra start til slutt. <br> Kjør på!
  <div class="image-row-balanced">
      <img src="galeria/mossos.jpg" alt="CTF Suspects" class="image-balanced">
      <img src="galeria/suspects.png" alt="CTF Suspects" class="image-balanced">
  </div>

    `
  },
  { 
    title: "Dokumentasjon", 
    body: `
   Har du startet på "CTF"- eller "Veikart"-oppgavene og føler deg fastlåst? Ikke bekymre deg! <br>
   I delen "Dokumentasjon" finner du grunnleggende forklaringer på de vanligste konseptene som dukker opp i CTF-utfordringer. <br><br>
   Ikke gi opp! Les hver del nøye og gå tilbake til oppgavene når du føler deg klar.
  <div class="image-row-balanced">
      <img src="galeria/eddison.jpg" alt="CTF Suspects" class="image-balanced">
      <img src="galeria/jobs.jpg" alt="CTF Suspects" class="image-balanced">
  </div>

    `
  }
],


story_docs: [
  { 
    title: 'Historie-modus',  
    body: `Et storstilt ran har rystet et av de viktigste kasinoene i Las Vegas. Hendelsen har blitt åsted for et av de mest sofistikerte digitale ranene i USA det siste tiåret.<br><br>
I løpet av natten begynte kasinogjestene å melde at bankkontoene deres var tømt – alle via hovedminibanken i lokalet.<br><br>
Det digitale etterforskningsteamet oppdaget en falsk RFID-plate montert over den kontaktløse leseren på hovedminibanken, som fanget opp kundenes kortdata.<br><br>
Denne typen angrep kalles <i>RFID skimming</i>, og gjør det mulig å kopiere bankinformasjon fra ofrene til en ekstern server for deretter å ta ut penger fra kontoen, selv om man ikke er kontoeier.<br><br>
Las Vegas Metropolitan Police, sammen med cyberkrimenheten ledet av Leon Kennedy (betjenten til venstre) og Chris Redfield (betjenten til høyre), har identifisert seks internasjonale mistenkte som befant seg på kasinoet natt til hendelsen.<br><br>
Klarer du å finne ut hvem av de seks som faktisk er den skyldige? La oss finne det ut! Vi begynner med å se hvilke mistenkte som nevnes.
     <div class="image-row-balanced">
      <img src="galeria/police.jpg" alt="CTF-mistenkte" class="image-balanced">
      <img src="galeria/suspects.png" alt="CTF-mistenkte" class="image-balanced">
     </div>
    `
  },
  {
    title: 'Niko Dimitrovik',
    body: `
  <div class="suspect-card">
    <figure class="suspect-media">
      <img src="galeria/1_niko_Dimitrovik.png" alt="Portrett av Niko Dimitrovik" loading="lazy">
    </figure>

    <div class="suspect-info">
      <ul class="suspect-meta">
        <li><span class="label">Alder</span><span>34</span></li>
        <li><span class="label">Kjønn</span><span>Mann</span></li>
        <li><span class="label">Nasjonalitet</span><span>Serbia</span></li>
        <li><span class="label">Rolle</span><span>Matematiker og fysiker</span></li>
      </ul>
<h4>Nøkkelord</h4>
      <div class="pills">
        <span class="pill">Matematikk</span>
        <span class="pill">Fysikk</span>
        <span class="pill">RFID</span>
        <span class="pill">Avansert elektronikk</span>
      </div>

      <h4>Profil</h4>
      <p>Tidligere nasjonal mester i matematikk og fysikk i Beograd. Hans atletiske bygning og 1,96 meters høyde får ham ved første øyekast til å se mer ut som en livvakt enn en forsker.</p>

      <h4>Motiv</h4>
      <p>Ferdighetene hans med tall og historikken med avansert elektronikk knytter ham til modifiserte RFID-enheter. Nylige reiseoppføringer plasserer ham i Las Vegas på dagen for angrepet; den tekniske profilen hans antyder at han kan ha designet krypteringssystemet som ble brukt.</p>
    </div>
  </div>`
  },
  {
    title: 'Eva Poliakov',
    body: `
  <div class="suspect-card">
    <figure class="suspect-media">
      <img src="galeria/4_Eva_Poliakov.png" alt="Portrett av Eva Poliakov" loading="lazy">
    </figure>
    <div class="suspect-info">
      <ul class="suspect-meta">
        <li><span class="label">Alder</span><span>28</span></li>
        <li><span class="label">Kjønn</span><span>Kvinne</span></li>
        <li><span class="label">Nasjonalitet</span><span>Russland</span></li>
        <li><span class="label">Rolle</span><span>Modell</span></li>
      </ul>
      <h4>Nøkkelord</h4>
      <div class="pills">
        <span class="pill">Ettersøkt av Interpol</span>
        <span class="pill">Nær minibanken under hackingen</span>
        <span class="pill">Metallisk fôr</span>
      </div>
      <h4>Profil</h4>
      <p>Internasjonal modell og vinner av flere skjønnhetskonkurranser. Ifølge Interpol mistenkt for å lede et nettverk som stjeler luksusklokker i Sveits.</p>
      <h4>Motiv</h4>
      <p>Sett idet hun forlot kasinoet like før hackingen. Kameraene fanget henne nær minibanken minutter før angrepet, iført en jakke med metallisk fôr, muligens for å skjule RFID-enheter.</p>
    </div>
  </div>`
  },
  {
    title: 'Clara Bekker',
    body: `
  <div class="suspect-card">
    <figure class="suspect-media">
      <img src="galeria/5_Clara_Bekker.png" alt="Portrett av Clara Bekker" loading="lazy">
    </figure>
    <div class="suspect-info">
      <ul class="suspect-meta">
        <li><span class="label">Alder</span><span>72</span></li>
        <li><span class="label">Kjønn</span><span>Kvinne</span></li>
        <li><span class="label">Nasjonalitet</span><span>Sør-Afrika</span></li>
        <li><span class="label">Rolle</span><span>Forretningskvinne</span></li>
      </ul>
      <h4>Nøkkelord</h4>
      <div class="pills">
        <span class="pill">Finans</span> <span class="pill">Avlede vaktene</span>
      </div>
      <h4>Profil</h4>
      <p>Investor i en rekke selskaper i Pretoria og en av hovedfinansiørene av Johannesburg lufthavn.</p>
      <h4>Motiv</h4>
      <p>Filmet mens hun distraherte vaktene da den første svindeloverføringen ble oppdaget.</p>
    </div>
  </div>`
  },
  {
    title: 'David McCloud',
    body: `
  <div class="suspect-card">
    <figure class="suspect-media">
      <img src="galeria/6_David_McCloud.png" alt="Portrett av David McCloud" loading="lazy">
    </figure>
    <div class="suspect-info">
      <ul class="suspect-meta">
        <li><span class="label">Alder</span><span>50</span></li>
        <li><span class="label">Kjønn</span><span>Mann</span></li>
        <li><span class="label">Nasjonalitet</span><span>Luxembourg</span></li>
        <li><span class="label">Rolle</span><span>Influencer</span></li>
      </ul>
      <h4>Nøkkelord</h4>
      <div class="pills">
        <span class="pill">Krypto-influencer</span><span class="pill">Mistenkelig saldoøkning</span><span class="pill">YT-video kan avsløre ham</span>
      </div>
      <h4>Profil</h4>
      <p>Multimillionær influencer, kjent for å ha gått fra å bo på gaten i to år til å eie tre herskapshus og ti luksusbiler ved å investere i kryptovaluta via en PC på Nasjonalbiblioteket i Luxembourg.</p>
      <h4>Motiv</h4>
      <p>Kontoene hans var de eneste som økte under hendelsen.
I tillegg sendte YouTube-kanalen hans direkte fra en suite i samme kasino, der han viste hvordan hver av kontoene hans mottok «anonyme overføringer» i kryptovaluta med tidsstempler som sammenfalt med cyberangrepet.</p>
    </div>
  </div>`
  },
  {
    title: 'João Du Santos',
    body: `
  <div class="suspect-card">
    <figure class="suspect-media">
      <img src="galeria/3_Joao_Du_Santos.png" alt="Portrett av João Du Santos" loading="lazy">
    </figure>
    <div class="suspect-info">
      <ul class="suspect-meta">
        <li><span class="label">Alder</span><span>41</span></li>
        <li><span class="label">Kjønn</span><span>Mann</span></li>
        <li><span class="label">Nasjonalitet</span><span>Brasil</span></li>
        <li><span class="label">Rolle</span><span>DJ</span></li>
      </ul>
      <h4>Nøkkelord</h4>
      <div class="pills">
        <span class="pill">DJ på kasinoet</span><span class="pill">Brukte minibanken</span><span class="pill">Bankkonto ikke berørt</span>
      </div>
      <h4>Profil</h4>
      <p>Kjent over hele Brasil som favoritt-DJ under de årlige karnevalene i Brasília og Rio de Janeiro.</p>
      <h4>Motiv</h4>
      <p>Opptrådte på kasinoet under hendelsen. Brukte minibanken minutter etter det første offeret uten å bli rammet.
      Systemlogger viser også at kortet hans ble autentisert på en uvanlig måte: uten fysisk kontakt og uten kontaktløs.</p>
    </div>
  </div>`
  },
  {
    title: 'Kojiro Wakabayashi',
    body: `
  <div class="suspect-card">
    <figure class="suspect-media">
      <img src="galeria/2_Kojiro_Wakabayashi.png" alt="Portrett av Kojiro Wakabayashi" loading="lazy">
    </figure>
    <div class="suspect-info">
      <ul class="suspect-meta">
        <li><span class="label">Alder</span><span>65</span></li>
        <li><span class="label">Kjønn</span><span>Mann</span></li>
        <li><span class="label">Nasjonalitet</span><span>Japan</span></li>
        <li><span class="label">Rolle</span><span>Tidligere visedirektør OEG</span></li>
      </ul>
      <div class="pills">
        <span class="pill">Høy finanskompetanse</span><span class="pill">Eksepsjonelt skarpt hode</span><span class="pill">Uvanlig oppførsel under avhør</span>
      </div>
  <h4>Profil</h4>
  <p>I over tretti år arbeidet han som visedirektør ved børsen i Osaka (Japan). Han er kjent for en usedvanlig økonomisk teft, formet av opplæringen fra faren (en anerkjent mester i japansk kalligrafi), der han kun brukte <em>fude</em> (pensel) og <em>sumi</em> (svart blekk) til alle slags matematiske beregninger. <br> Fra den opplæringen utviklet Kojiro disiplin, tålmodighet og en imponerende mental smidighet til å løse alt fra finansielle til statistiske utfordringer.</p>
  <h4>Motiv</h4>
  <p>Etterforskerne mistenker at hans dype forståelse av økonomiske strømmer og ferdigheter i finansielle operasjoner kan ha vært nøkkelen i planleggingen av forbrytelsen. Under pågripelsen insisterte han gjentatte ganger på å kontakte sin advokat i Kyoto, selv om avhøret ennå ikke hadde begynt.</p>
    </div>
  </div>`
  },
  {
    title: 'Presentasjonsvideo',
    body: `Her er introduksjonsvideoene som forteller historien om COP_CTF. <br> Vil du fordype deg i historien før du starter utfordringene? <br> Du kan se den korte traileren (venstre) eller den lange traileren (høyre), som går dypere inn i rapporten om karakterene.
     <div class="image-row-balanced">
       <video width="400" controls>
         <source src="videos/SHORT_COP_CTF.mp4" type="video/mp4">
       </video>
       <video width="400" controls>
         <source src="videos/LONG_COP_CTF.mp4" type="video/mp4">
       </video>
       <br>
       <p>Klar til å starte? Klikk på "Veikart" for å begynne å etterforske denne forbrytelsen og fange den skyldige. Lykke til!</p>
     </div>
    `
  }
],


  
    challenges: [
      { id:'Artur', title:'Cæsar-kryptering', category:'Kryptografi', difficulty:'Lett',
        desc:'Dekrypter meldingen: sdamvobzxznvmhjgv', solution:'solucions/Xifrat_Cesar.txt', flag:'flag{xifratgecesarmola}' },

      { id:'Pol', title:'Base64', category:'Kryptografi', difficulty:'Lett',
        desc:'Dekrypter: ZmxhZ3tzZV9kZWNvZGlmaWNhcl9lbl9iYXNlNjR9', solution:'solucions/Base64.txt', flag:'flag{se_decodificar_en_base64}' },

      { id:'Pol', title:'Vigenère-kryptering', category:'Kryptografi', difficulty:'Lett',
        desc:'Dekrypter med nøkkelen "oberta": wkhvixphqkcjddnx', solution:'solucions/Xifrat_Vigenere.txt', flag:'flag{vigenere_et_completa}' },

      { id:'Pol', title:'ASCII-kode', category:'Kryptografi', difficulty:'Lett',
        desc:'Dekrypter meldingen kodet i ASCII: 72 101 108 108 111 32 87 111 114 108 100', solution:'solucions/ASCII.txt', flag:'flag{desxifrat_asciiactiu}' },

      { id:'Pol', title:'Morse-kode', category:'Kryptografi', difficulty:'Lett',
        desc:'Dekrypter morse-meldingen: .... . .-.. .-.. --- / .-- --- .-. .-.. -..', solution:'solucions/Morse.txt', flag:'flag{codi_morse_primer_conegut}' },

      { id:'Pol', title:'Triple Lag', category:'Kryptografi', difficulty:'Middels',
        desc:'Dekrypter meldingen kodet i flere lag: Q1ZsbmdmcXJqcWZmYnd2Z3Y=', solution:'solucions/Triple_Capa.txt', flag:'flag{cryptography_is_fun}' },

      { id:'Pol', title:'XOR Brutal', category:'Kryptografi', difficulty:'Middels',
        desc:'Denne teksten er kryptert med XOR og en 1-tegns nøkkel (ASCII): 1f0c190e0409110f171a', solution:'solucions/XOR_Brutal.txt', flag:'flag{xor_clau_simple}' }
    ],

    docs: [
      { id:'rev', title:'Kryptering',
        body:`<p>Kryptering skjuler meldinger slik at uvedkommende ikke kan lese dem. Cæsar-metoden er en klassiker.</p>` },

      { id:'brute', title:'Brute Force-angrep',
        body:`<p>Brute force angriper prøver alle mulige kombinasjoner til riktig passord er funnet.</p>` },

      { id:'ASCII', title:'ASCII',
        body:`<p>ASCII gir hvert tegn et tall. F. eks. "72 101 108 108 111" blir "Hello".</p>` },

      { id:'hash', title:'Hashing',
        body:`<p>Hashfunksjoner som SHA256 og MD5 genererer faste fingeravtrykk av data.</p>` },

      { id:'osint', title:'OSINT',
        body:`<p>OSINT handler om å samle offentlig informasjon fra nettet for etterforskning.</p>` },

      { id:'forensic', title:'Digital Forensikk',
        body:`<p>Digital forensikk analyserer filer og nettverkstrafikk for spor.</p>` },

      { id:'web', title:'Web-sikkerhet',
        body:`<p>Vanlige feil: XSS, SQLi, CSRF, LFI/RFI og SSRF. Lær å identifisere dem i trygge omgivelser.</p>` }
    ]
  }
};


function applyTranslations(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
}

