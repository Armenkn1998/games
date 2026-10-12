(() => {
  "use strict";

  const STORAGE_KEY = "chem-nature-game-v1";
  const STORAGE_VERSION = 1;
  const TOTAL_LEVELS = 5;
  const QUIZ_POINTS = 20;
  const FIND_POINTS = 12;
  const SORT_POINTS = 15;
  const ACTION_POINTS = 10;

  const LEVELS = [
    {
      id: 1,
      title: "Ջուր և աղտոտում",
      icon: "💧",
      goal: "Գտիր գետում վնասակար նյութերը, ապա պատասխանիր հարցերին։",
      teach: "Մաքուր ջուրը կենդանի օրգանիզմների համար անհրաժեշտ է։ Պլաստիկը, նավթը և չվերահսկվող քիմիական թափոնները կարող են վնասել ձկներին ու բույսերին։ Ջրի մաքրումը նույնպես քիմիա է, ուստի նյութերն իրենք չեն «թշնամի»․ կարևոր է դրանց ճիշտ կիրառումը։",
    },
    {
      id: 2,
      title: "Օդ և մթնոլորտ",
      icon: "🌬️",
      goal: "Ընտրիր գործողություններ, որոնք նվազեցնում են օդի աղտոտումը։",
      teach: "Օդը գազերի խառնուրդ է։ Մեքենաների և գործարանների արտանետումները կարող են վնասել շնչառությունը, իսկ ծառերը կլանում են ածխաթթու գազ և արտադրում թթվածին։ Շնչելը բնական գործընթաց է, իսկ ավելորդ արդյունաբերական ծուխը՝ խնդիր, երբ կոնցենտրացիան բարձր է։",
    },
    {
      id: 3,
      title: "Հող և բույսեր",
      icon: "🌱",
      goal: "Համեմատիր պարարտանյութի տարբեր օգտագործումները և տես ազդեցությունը։",
      teach: "Հողը պարունակում է հանքանյութեր, ջուր, օդ և օրգանական նյութեր։ Պարարտանյութը կարող է օգնել բույսին, բայց չափից շատը կարող է վնասել հողը և ջուրը։ Կոմպոստը բնական սնուցում է տալիս դանդաղ և ավելի անվտանգ, եթե ճիշտ է պատրաստված։",
    },
    {
      id: 4,
      title: "Քիմիան առօրյա կյանքում",
      icon: "🏠",
      goal: "Դասակարգիր առարկաները՝ վերամշակվող, վտանգավոր, կրկին օգտագործվող և սովորական աղբ։",
      teach: "Սնունդը, դեղերը, մարտկոցները և մաքրող միջոցները քիմիական նյութեր են պարունակում։ Դրանք օգտակար են, երբ օգտագործվում են ըստ հրահանգի, և վտանգավոր՝ երբ հայտնվում են սխալ տեղում։ Բնականը միշտ անվտանգ չէ, իսկ սինթետիկը միշտ վտանգավոր չէ։",
    },
    {
      id: 5,
      title: "Փրկենք մոլորակը",
      icon: "🌍",
      goal: "Սահմանափակ գործողություններով բարելավիր քաղաքի շրջակա միջավայրը։",
      teach: "Իրական կյանքում ռեսուրսները սահմանափակ են։ Պետք է ընտրել ամենաօգտակար քայլերը՝ աղբի տարանջատում, անվտանգ հեռացում, ջրի խնայում, ծառատունկ և ավելորդ սպառման կրճատում։",
    },
  ];

  const QUESTIONS = {
    1: [
      {
        q: "Ի՞նչ է ջրի աղտոտումը։",
        options: [
          "Ջրի մեջ վնասակար նյութերի հայտնվելը, որոնք վատացնում են ջրի որակը",
          "Ջրի եռալը կաթսայում",
          "Անձրևի տեղալը լեռներում",
          "Գետի բնական հոսքը",
        ],
        answer: 0,
        why: "Աղտոտում է այն դեպքը, երբ նյութերը փոխում են ջրի որակը և կարող են վնասել կենդանի օրգանիզմներին։",
      },
      {
        q: "Ինչո՞ւ է պլաստիկ աղբը վտանգավոր ջրային կենդանիների համար։",
        options: [
          "Որովհետև այն միշտ լուծվում է ջրում",
          "Որովհետև կենդանիները կարող են այն կուլ տալ կամ խճճվել",
          "Որովհետև պլաստիկը ջուրը դարձնում է աղի",
          "Որովհետև պլաստիկը սառեցնում է գետը",
        ],
        answer: 1,
        why: "Պլաստիկը երկար է մնում բնության մեջ և ֆիզիկապես վնասում է կենդանիներին։ Մանր մասնիկները նույնպես կարող են սննդային շղթա մտնել։",
      },
      {
        q: "Ինչո՞ւ չի կարելի չվերահսկվող քիմիական թափոնը լցնել գետը։",
        options: [
          "Որովհետև գետը կդառնա ավելի մաքուր",
          "Որովհետև ջուրը կվերածվի սառույցի",
          "Որովհետև որոշ նյութեր կարող են թունավորել ջուրը, բույսերը և կենդանիներին",
          "Որովհետև գետը կդադարի հոսել",
        ],
        answer: 2,
        why: "Որոշ նյութեր նույնիսկ փոքր քանակով կարող են վնասել կենդանի օրգանիզմներին։ Թափոնները պետք է հանձնել անվտանգ հեռացման կետերին։",
      },
      {
        q: "Ինչպե՞ս կարող ենք խնայել ջուրը տանը և դպրոցում։",
        options: [
          "Ծորակը բաց թողնել ամբողջ ընդմիջմանը",
          "Ջուրը լցնել աղբարկղը",
          "Շիշը նետել գետը խմելուց հետո",
          "Ծորակը փակել ատամները լվանալիս և չթափել ավելորդ ջուր",
        ],
        answer: 3,
        why: "Փոքր սովորությունները նվազեցնում են ջրի վատնումը։ Մաքուր ջուրը արժեքավոր ռեսուրս է։",
      },
      {
        q: "Արդյո՞ք բոլոր քիմիական նյութերը վնասակար են ջրի համար։",
        options: [
          "Այո, բոլոր նյութերը միշտ վնասակար են",
          "Ոչ. ազդեցությունը կախված է նյութից, քանակից և օգտագործումից",
          "Ոչ, բոլոր նյութերը միշտ անվնաս են",
          "Միայն գազերն են վնասակար",
        ],
        answer: 1,
        why: "Ջուրն ինքը քիմիական նյութ է։ Ջրի մաքրման ժամանակ նույնպես օգտագործվում են նյութեր։ Կարևոր են տեսակը, խտությունը և քանակը։",
      },
    ],
    2: [
      {
        q: "Ի՞նչն է հիմնականում աղտոտում քաղաքի օդը մեքենաներից։",
        options: [
          "Անիվների գույնը",
          "Վառելիքի այրման արտանետումները",
          "Ղեկի ձևը",
          "Ճանապարհի երկարությունը միայն",
        ],
        answer: 1,
        why: "Վառելիք այրելիս առաջանում են գազեր և մասնիկներ, որոնք մեծ քանակով վատացնում են օդի որակը։",
      },
      {
        q: "Ինչպե՞ս են ծառերը օգնում օդին։",
        options: [
          "Կլանում են ածխաթթու գազ և արտադրում թթվածին",
          "Ավելացնում են ծխի քանակը",
          "Ջուրը վերածում են նավթի",
          "Օդը դարձնում են աղի",
        ],
        answer: 0,
        why: "Լուսասինթեզի ժամանակ բույսերը օգտագործում են ածխաթթու գազ և ջուր, իսկ թթվածին արտազատում են։",
      },
      {
        q: "Ի՞նչ տարբերություն կա շնչառության և գործարանի ավելորդ ծխի միջև։",
        options: [
          "Տարբերություն չկա",
          "Շնչառությունը բնական գործընթաց է, իսկ ավելորդ արդյունաբերական արտանետումը կարող է վնասել օդի որակը",
          "Շնչառությունն ավելի վտանգավոր է",
          "Գործարանի ծուխը միշտ օգտակար է",
        ],
        answer: 1,
        why: "Մթնոլորտում գազերը բնական շրջանառություն ունեն։ Խնդիր է առաջանում, երբ արտանետումների քանակը չափից մեծ է և կենտրոնացած է։",
      },
      {
        q: "Ի՞նչ է մշուշախառն ծուխը (սմոգը)։",
        options: [
          "Մաքուր լեռնային օդ",
          "Միայն ջրային գոլորշի",
          "Աղտոտված օդի և մշուշի խառնուրդ, որը դժվարացնում է շնչելը",
          "Ծիածան ամպերի վրա",
        ],
        answer: 2,
        why: "Սմոգը առաջանում է, երբ արտանետումները կուտակվում են և խառնվում մթնոլորտային պայմաններին։",
      },
      {
        q: "Ո՞ր գործողությունն է նվազեցնում օդի աղտոտումը։",
        options: [
          "Ավելի շատ տերև այրել բակում",
          "Միայնակ մեքենայով կարճ ճանապարհ գնալ ամեն օր",
          "Հեծանիվ, հասարակական տրանսպորտ և ծառատունկ",
          "Գործարանի զտիչները հանել",
        ],
        answer: 2,
        why: "Քիչ այրում, կանաչ տարածքներ և զտիչներ նվազեցնում են վնասակար նյութերի քանակը օդում։",
      },
    ],
    3: [
      {
        q: "Ի՞նչից է բաղկացած բերրի հողը։",
        options: [
          "Միայն քարերից",
          "Հանքանյութերից, ջրից, օդից, օրգանական նյութից և մանր օրգանիզմներից",
          "Միայն պլաստիկից",
          "Միայն մաքուր աղից",
        ],
        answer: 1,
        why: "Հողը կենդանի համակարգ է։ Եթե մեկ բաղադրիչը խախտվում է, բույսերի աճը կարող է տուժել։",
      },
      {
        q: "Ինչո՞ւ կարող է չափից շատ պարարտանյութը վնասել։",
        options: [
          "Որովհետև բույսը միշտ ավելի լավ է աճում",
          "Որովհետև ավելցուկը կարող է այրել արմատները և աղտոտել ջուրը",
          "Որովհետև հողը դառնում է ոսկի",
          "Որովհետև պարարտանյութը օդ է դառնում",
        ],
        answer: 1,
        why: "Նույնիսկ օգտակար նյութը վնասակար է, երբ քանակը մեծ է։ Սա վերաբերում է և՛ սինթետիկ, և՛ որոշ բնական նյութերին։",
      },
      {
        q: "Ի՞նչ է կոմպոստը։",
        options: [
          "Մնացորդներից ստացված օրգանական պարարտանյութ",
          "Նավթի տեսակ",
          "Մարտկոցի հեղուկ",
          "Պլաստիկի փոշի",
        ],
        answer: 0,
        why: "Ճիշտ պատրաստված կոմպոստը դանդաղ սնուցում է հողը և նվազեցնում աղբի քանակը։",
      },
      {
        q: "Ինչպե՞ս պետք է վերաբերվել թունաքիմիկատներին։",
        options: [
          "Ցանել որքան հնարավոր է շատ",
          "Լցնել գետը անձրևից հետո",
          "Օգտագործել միայն անհրաժեշտության դեպքում և ըստ հրահանգի",
          "Պահել բաց տարայի մեջ խաղահրապարակում",
        ],
        answer: 2,
        why: "Թունաքիմիկատները կարող են պաշտպանել բերքը, բայց սխալ օգտագործումը վնասում է օգտակար միջատներին, հողին և ջրին։",
      },
      {
        q: "Ո՞ր պնդումն է ճիշտ։",
        options: [
          "Բնական նյութերը միշտ անվնաս են",
          "Սինթետիկ նյութերը միշտ վտանգավոր են",
          "Նյութի ազդեցությունը կախված է հատկություններից և օգտագործումից",
          "Բույսերին քիմիա պետք չէ",
        ],
        answer: 2,
        why: "Ջուրը, աղը և նույնիսկ որոշ բույսերի հյութեր կարող են վնասել չափից շատ քանակով։ Գիտությունը օգնում է ճիշտ չափ ընտրել։",
      },
    ],
    4: [
      {
        q: "Որտե՞ղ պետք է հանձնել հին մարտկոցը։",
        options: [
          "Գետը",
          "Սովորական աղբարկղը առանց մտածելու",
          "Հատուկ վտանգավոր թափոնների հավաքման կետ",
          "Ծորակի մեջ",
        ],
        answer: 2,
        why: "Մարտկոցները պարունակում են մետաղներ և այլ նյութեր, որոնք հողում ու ջրում կարող են վնասակար լինել։",
      },
      {
        q: "Ինչո՞ւ չի կարելի մնացած դեղը լցնել ծորակը։",
        options: [
          "Որովհետև դեղը ջուրը կդարձնի քաղցր",
          "Որովհետև դեղանյութերը կարող են հայտնվել ջրային համակարգում",
          "Որովհետև ծորակը կկոտրվի",
          "Որովհետև դեղը վերածվում է պլաստիկի",
        ],
        answer: 1,
        why: "Դեղերը նախատեսված են որոշակի չափաբաժնով։ Ջրում դրանք կարող են ազդել օրգանիզմների վրա։",
      },
      {
        q: "Ո՞ր առարկան է սովորաբար վերամշակվող։",
        options: [
          "Մաքուր թուղթ և ալյումինե տարա",
          "Օգտագործված անձեռոցիկ ճարպով",
          "Կոտրված մարտկոց",
          "Մնացած հաբեր",
        ],
        answer: 0,
        why: "Մաքուր թուղթն ու մետաղյա տարաները հաճախ վերամշակվում են։ Կեղտոտ կամ վտանգավոր իրերը այլ ուղի են պահանջում։",
      },
      {
        q: "Ինչպե՞ս օգտագործել մաքրող միջոցը անվտանգ։",
        options: [
          "Խառնել բոլոր շշերը իրար",
          "Կարդալ պիտակը և օգտագործել նշված չափով",
          "Ցողել օդի մեջ առանց պատուհան բացելու շատ երկար",
          "Խմել փոքր կում՝ ստուգելու համար",
        ],
        answer: 1,
        why: "Մաքրող նյութերը օգտակար են կեղտը հեռացնելիս, բայց կարող են վնասել մաշկը, աչքերը կամ շնչուղիները, եթե սխալ օգտագործվեն։",
      },
      {
        q: "Սննդի մեջ քիմիա լինելը նշանակո՞ւմ է, որ այն վտանգավոր է։",
        options: [
          "Այո, բոլոր մթերքները վտանգավոր են",
          "Ոչ. ջուրը, աղը, շաքարը և վիտամիններն էլ քիմիական նյութեր են",
          "Միայն մրգերն են առանց քիմիայի",
          "Քիմիա կա միայն գործարանում",
        ],
        answer: 1,
        why: "Ամեն ինչ կազմված է նյութերից։ Կարևոր է բաղադրությունը, չափը և որակը, ոչ թե միայն «քիմիա» բառը։",
      },
    ],
    5: [
      {
        q: "Ինչո՞ւ է աղբի տարանջատումը օգտակար։",
        options: [
          "Որովհետև աղբարկղը ավելի գունեղ է լինում",
          "Որովհետև վերամշակվող և վտանգավոր նյութերը չեն խառնվում սովորական աղբին",
          "Որովհետև աղբը անհետանում է ինքնուրույն",
          "Որովհետև տարանջատումը ավելացնում է ծուխը",
        ],
        answer: 1,
        why: "Տարանջատումը թույլ է տալիս նյութերը կրկին օգտագործել և նվազեցնում է վտանգավոր խառնուրդները։",
      },
      {
        q: "Երբ ռեսուրսները սահմանափակ են, ի՞նչ պետք է անել։",
        options: [
          "Ընտրել ամենաօգտակար և երկարատև ազդեցություն ունեցող քայլերը",
          "Անել միայն ամենահեշտ, բայց անօգուտ բանը",
          "Ոչինչ չանել",
          "Բոլոր նյութերը թաքցնել հողի տակ",
        ],
        answer: 0,
        why: "Իրական կյանքում չենք կարող ամեն ինչ միանգամից անել։ Գիտելիքը օգնում է առաջնահերթություն դնել։",
      },
      {
        q: "Ի՞նչ կարող է աշակերտը անել դպրոցում։",
        options: [
          "Ջուրը բաց թողնել և թուղթ վատնել",
          "Խնայել ջուրն ու թուղթը, տարանջատել աղբը, խնամել բույսերը",
          "Մարտկոցը գցել ծաղկամանի մեջ",
          "Ներկը լցնել ծորակը",
        ],
        answer: 1,
        why: "Փոքր գործողությունները դասարանում նույնպես փոխում են շրջակա միջավայրի վիճակը։",
      },
      {
        q: "Ո՞ր մոտեցումն է գիտականորեն ավելի ճիշտ։",
        options: [
          "Բոլոր քիմիական նյութերը արգելել",
          "Հասկանալ նյութը, չափը և կիրառումը, ապա գործել զգույշ",
          "Մտածել, որ բնությունն ինքը ամեն ինչ կուտի",
          "Օգտագործել որքան հնարավոր է շատ նյութ առանց չափի",
        ],
        answer: 1,
        why: "Քիմիան օգնում է դեղեր, մաքուր ջուր և էներգիա ստանալ։ Խնդիրը սխալ կիրառումն է, ոչ թե գիտությունն ինքը։",
      },
      {
        q: "Ինչո՞ւ է ավելորդ սպառումը վնասում բնությանը։",
        options: [
          "Որովհետև ավելի շատ իր արտադրելը ծախսում է նյութեր, ջուր և էներգիա",
          "Որովհետև իրերը դառնում են անտեսանելի",
          "Որովհետև սպառումը կանգնեցնում է քամին",
          "Որովհետև գնումները մաքրում են օդը",
        ],
        answer: 0,
        why: "Յուրաքանչյուր իր ունի «թաքնված» ազդեցություն՝ արտադրություն, փոխադրում և թափոն։ Կրճատելը նշանակում է ավելի քիչ ճնշում բնության վրա։",
      },
    ],
  };

  const FACTS = [
    "Հետաքրքիր է. ջրի մոլեկուլը՝ H₂O, կազմված է երկու ջրածնից և մեկ թթվածնից։",
    "Ծառերը ոչ միայն թթվածին են տալիս, այլև պահում են հողը և ստվեր տալիս։",
    "Մեկ ալյումինե տարա վերամշակելը խնայում է էներգիա նոր տարա պատրաստելու համեմատ։",
    "Կոմպոստը նվազեցնում է աղբավայր գնացող սննդի մնացորդը։",
    "Քիմիան օգնում է նաև ջուրը մաքրել և դեղեր ստանալ։",
  ];

  const TIPS = [
    "Տանը փակիր ծորակը, երբ այն պետք չէ։",
    "Թուղթն օգտագործիր երկու կողմից, եթե հնարավոր է։",
    "Մարտկոցները հանձնիր հավաքման կետ, ոչ թե սովորական աղբարկղ։",
    "Գնիր միայն այն, ինչ իրապես պետք է։",
    "Խնամիր դպրոցի բույսերը և մի՛ լցրու անհայտ հեղուկ հողի վրա։",
  ];

  const POLLUTANTS = [
    { id: "plastic", label: "Պլաստիկ շիշ", harmful: true, x: "12%", y: "62%", explain: "Պլաստիկը երկար է մնում ջրում և վնասում կենդանիներին։" },
    { id: "oil", label: "Նավթի բիծ", harmful: true, x: "38%", y: "70%", explain: "Նավթը ծածկում է ջրի մակերեսը և խանգարում թթվածնի փոխանակմանը։" },
    { id: "barrel", label: "Քիմիական տակառ", harmful: true, x: "68%", y: "58%", explain: "Չվերահսկվող թափոնը կարող է թունավորել ջուրը։" },
    { id: "bag", label: "Պլաստիկ տոպրակ", harmful: true, x: "82%", y: "74%", explain: "Տոպրակները խճճում են ձկներին և թռչուններին։" },
    { id: "fish", label: "Ձուկ", harmful: false, x: "50%", y: "78%", explain: "Ձուկը գետի բնական բնակիչ է, ոչ թե աղտոտիչ։" },
    { id: "lily", label: "Ջրաշուշան", harmful: false, x: "24%", y: "80%", explain: "Ջրային բույսերը գետի մաս են, եթե չեն խեղդում ամբողջ հունը։" },
    { id: "rock", label: "Քար", harmful: false, x: "8%", y: "82%", explain: "Քարը բնական է և աղտոտում չի համարվում։" },
  ];

  const AIR_ACTIONS = [
    { id: "trees", label: "Տնկել ծառեր", help: "Ծառերը բարելավում են օդը և ստվեր են տալիս։", value: 22 },
    { id: "bike", label: "Օգտվել հեծանիվից", help: "Հեծանիվը չի այրում վառելիք։", value: 18 },
    { id: "filter", label: "Գործարանում զտիչ տեղադրել", help: "Զտիչը նվազեցնում է ծխի վնասակար մասնիկները։", value: 24 },
    { id: "bus", label: "Հասարակական տրանսպորտ", help: "Մեկ ավտոբուսը փոխարինում է շատ մեքենաների։", value: 16 },
    { id: "burn", label: "Այրել տերևները բակում", help: "Տերև այրելը ծուխ է ավելացնում։ Սա օգտակար քայլ չէ։", value: -12, bad: true },
  ];

  const SORT_ITEMS = [
    { id: "bottle", label: "Պլաստիկ շիշ", cat: "recycle", why: "Մաքուր պլաստիկ տարան հաճախ վերամշակվում է։" },
    { id: "battery", label: "Մարտկոց", cat: "hazard", why: "Մարտկոցը վտանգավոր թափոն է։" },
    { id: "jar", label: "Ապակե բանկա", cat: "reuse", why: "Ամուր բանկան կարելի է նորից օգտագործել պահածոյի համար։" },
    { id: "paper", label: "Թերթ", cat: "recycle", why: "Թուղթը վերամշակվող նյութ է, եթե չափից կեղտոտ չէ։" },
    { id: "medicine", label: "Մնացած դեղ", cat: "hazard", why: "Դեղերը չպետք է գնան ծորակ կամ սովորական աղբարկղ։" },
    { id: "bag", label: "Կտորե պայուսակ", cat: "reuse", why: "Ամուր պայուսակը կարելի է բազմիցս օգտագործել։" },
    { id: "napkin", label: "Կեղտոտ անձեռոցիկ", cat: "trash", why: "Ճարպոտ անձեռոցիկը սովորաբար վերամշակմանը չի գնում։" },
    { id: "can", label: "Ալյումինե տարա", cat: "recycle", why: "Մետաղյա տարաները լավ են վերամշակվում։" },
  ];

  const BINS = [
    { id: "recycle", label: "Վերամշակվող" },
    { id: "hazard", label: "Վտանգավոր" },
    { id: "reuse", label: "Կրկին օգտագործվող" },
    { id: "trash", label: "Սովորական աղբ" },
  ];

  const TOWN_ACTIONS = [
    { id: "river", label: "Մաքրել գետը", effect: { water: 18, air: 2, soil: 2, waste: 4 }, cost: 1 },
    { id: "chem", label: "Անվտանգ հեռացնել քիմիական նյութերը", effect: { water: 12, air: 4, soil: 10, waste: 8 }, cost: 1 },
    { id: "trees", label: "Տնկել ծառեր", effect: { water: 2, air: 18, soil: 10, waste: 0 }, cost: 1 },
    { id: "water", label: "Խնայել ջուրը", effect: { water: 14, air: 0, soil: 4, waste: 0 }, cost: 1 },
    { id: "sort", label: "Աղբի տարանջատում", effect: { water: 4, air: 4, soil: 6, waste: 20 }, cost: 1 },
    { id: "less", label: "Կրճատել ավելորդ սպառումը", effect: { water: 6, air: 8, soil: 6, waste: 14 }, cost: 1 },
  ];

  const els = {
    screens: {
      welcome: document.getElementById("screen-welcome"),
      howto: document.getElementById("screen-howto"),
      hub: document.getElementById("screen-hub"),
      level: document.getElementById("screen-level"),
      results: document.getElementById("screen-results"),
    },
    progressBar: document.getElementById("progress-bar"),
    progressLabel: document.getElementById("progress-label"),
    progress: document.querySelector(".progress"),
    score: document.getElementById("score-value"),
    sound: document.getElementById("btn-sound"),
    home: document.getElementById("btn-home"),
    restart: document.getElementById("btn-restart"),
    live: document.getElementById("live"),
    levelCards: document.getElementById("level-cards"),
    levelRoot: document.getElementById("level-root"),
    levelTitle: document.getElementById("level-title"),
    levelKicker: document.getElementById("level-kicker"),
    levelGoal: document.getElementById("level-goal"),
    resultsBody: document.getElementById("results-body"),
    modal: document.getElementById("modal"),
    confetti: document.getElementById("confetti"),
  };

  let state = defaultState();
  let session = resetSession();
  let audio = createAudio();
  let lastFocus = null;

  function defaultState() {
    return {
      version: STORAGE_VERSION,
      completedLevels: [],
      score: 0,
      correct: 0,
      incorrect: 0,
      envHealth: 32,
      soundEnabled: true,
      awarded: {},
      maxUnlocked: 1,
    };
  }

  function resetSession() {
    return {
      levelId: 1,
      phase: "intro",
      quizIndex: 0,
      activityDone: false,
      selectedSort: null,
      airPicked: {},
      townUsed: {},
      townLeft: 6,
      env: { water: 28, air: 30, soil: 26, waste: 22 },
    };
  }

  function sanitizeState(raw) {
    const base = defaultState();
    if (!raw || typeof raw !== "object" || raw.version !== STORAGE_VERSION) return base;
    const completed = Array.isArray(raw.completedLevels)
      ? raw.completedLevels.filter((n) => Number.isInteger(n) && n >= 1 && n <= TOTAL_LEVELS)
      : [];
    return {
      version: STORAGE_VERSION,
      completedLevels: [...new Set(completed)],
      score: Math.max(0, Number(raw.score) || 0),
      correct: Math.max(0, Number(raw.correct) || 0),
      incorrect: Math.max(0, Number(raw.incorrect) || 0),
      envHealth: Math.min(100, Math.max(0, Number(raw.envHealth) || 32)),
      soundEnabled: raw.soundEnabled !== false,
      awarded: raw.awarded && typeof raw.awarded === "object" ? raw.awarded : {},
      maxUnlocked: Math.min(TOTAL_LEVELS, Math.max(1, Number(raw.maxUnlocked) || 1)),
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      state = sanitizeState(raw ? JSON.parse(raw) : null);
    } catch (err) {
      state = defaultState();
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      /* storage may be blocked */
    }
  }

  function announce(text) {
    els.live.textContent = "";
    window.setTimeout(() => {
      els.live.textContent = text;
    }, 40);
  }

  // function createAudio() {
  //   let ctx = null;
  //   let amb = null;
  //   let started = false;

  //   function context() {
  //     if (!ctx) {
  //       const AC = window.AudioContext || window.webkitAudioContext;
  //       if (!AC) return null;
  //       ctx = new AC();
  //     }
  //     return ctx;
  //   }

  //   function unlock() {
  //     const c = context();
  //     if (!c) return;
  //     if (c.state === "suspended") c.resume();
  //     started = true;
  //     if (state.soundEnabled) startAmbient();
  //   }

  //   function tone(freq, dur, type, gain) {
  //     if (!state.soundEnabled) return;
  //     const c = context();
  //     if (!c || !started) return;
  //     try {
  //       const osc = c.createOscillator();
  //       const g = c.createGain();
  //       osc.type = type || "sine";
  //       osc.frequency.value = freq;
  //       g.gain.setValueAtTime(gain || 0.04, c.currentTime);
  //       g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
  //       osc.connect(g);
  //       g.connect(c.destination);
  //       osc.start();
  //       osc.stop(c.currentTime + dur);
  //     } catch (err) {
  //       /* audio optional */
  //     }
  //   }

  //   function success() {
  //     tone(523, 0.12, "sine", 0.05);
  //     window.setTimeout(() => tone(659, 0.14, "sine", 0.05), 90);
  //     window.setTimeout(() => tone(784, 0.18, "triangle", 0.04), 180);
  //   }

  //   function error() {
  //     tone(220, 0.16, "triangle", 0.04);
  //     window.setTimeout(() => tone(180, 0.2, "sine", 0.03), 80);
  //   }

  //   function welcome() {
  //     tone(392, 0.18, "sine", 0.05);
  //     window.setTimeout(() => tone(523, 0.2, "sine", 0.05), 140);
  //     window.setTimeout(() => tone(659, 0.28, "triangle", 0.04), 280);
  //   }

  //   function complete() {
  //     [523, 659, 784, 1046].forEach((f, i) => {
  //       window.setTimeout(() => tone(f, 0.22, "sine", 0.045), i * 120);
  //     });
  //   }

  //   function startAmbient() {
  //     const c = context();
  //     if (!c || !state.soundEnabled || !started || amb) return;
  //     try {
  //       const noiseBuf = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
  //       const data = noiseBuf.getChannelData(0);
  //       for (let i = 0; i < data.length; i += 1) data[i] = (Math.random() * 2 - 1) * 0.15;
  //       const src = c.createBufferSource();
  //       src.buffer = noiseBuf;
  //       src.loop = true;
  //       const filter = c.createBiquadFilter();
  //       filter.type = "lowpass";
  //       filter.frequency.value = 700;
  //       const g = c.createGain();
  //       g.gain.value = 0.012;
  //       src.connect(filter);
  //       filter.connect(g);
  //       g.connect(c.destination);
  //       src.start();
  //       const bird = c.createOscillator();
  //       const bg = c.createGain();
  //       bird.type = "sine";
  //       bird.frequency.setValueAtTime(1200, c.currentTime);
  //       bg.gain.value = 0.006;
  //       bird.connect(bg);
  //       bg.connect(c.destination);
  //       bird.start();
  //       amb = { src, bird, g, bg };
  //     } catch (err) {
  //       amb = null;
  //     }
  //   }

  //   function stopAmbient() {
  //     if (!amb) return;
  //     try {
  //       amb.src.stop();
  //       amb.bird.stop();
  //     } catch (err) {
  //       /* ignore */
  //     }
  //     amb = null;
  //   }

  //   return { unlock, success, error, welcome, complete, startAmbient, stopAmbient };
  // }

  function createAudio() {
    let ctx = null;
    let amb = null;
    let started = false;
    let master = null;

    // Ստեղծում ենք AudioContext-ը
    function context() {
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;

        ctx = new AC();

        // Ընդհանուր ձայնի կառավարում
        master = ctx.createGain();
        master.gain.value = 0.7;
        master.connect(ctx.destination);
      }

      return ctx;
    }

    // Ակտիվացնում ենք ձայնը օգտատիրոջ առաջին գործողությունից
    function unlock() {
      const c = context();
      if (!c) return;

      if (c.state === "suspended") {
        c.resume();
      }

      started = true;

      if (state.soundEnabled) {
        startAmbient();
      }
    }

    // Հիմնական երաժշտական նոտա
    function tone(
      freq,
      dur = 0.2,
      type = "sine",
      volume = 0.05,
      delay = 0
    ) {
      if (!state.soundEnabled || !started) return;

      const c = context();
      if (!c || c.state !== "running") return;

      try {
        const osc = c.createOscillator();
        const gain = c.createGain();

        const startAt = c.currentTime + delay;
        const endAt = startAt + dur;

        osc.type = type;
        osc.frequency.setValueAtTime(freq, startAt);

        gain.gain.setValueAtTime(0.001, startAt);
        gain.gain.exponentialRampToValueAtTime(
          volume,
          startAt + 0.025
        );
        gain.gain.exponentialRampToValueAtTime(
          0.001,
          endAt
        );

        osc.connect(gain);
        gain.connect(master);

        osc.start(startAt);
        osc.stop(endAt + 0.02);
      } catch (err) {
        // Ձայնը պարտադիր չէ խաղի աշխատանքի համար
      }
    }

    // Երաժշտական մեղեդի
    function melody(notes, spacing = 0.13) {
      notes.forEach((note, index) => {
        tone(
          note.freq,
          note.dur || 0.2,
          note.type || "sine",
          note.volume || 0.045,
          index * spacing
        );
      });
    }

    // Ճիշտ պատասխան՝ հաճելի, ուրախ մեղեդի
    function success() {
      melody([
        { freq: 523.25, dur: 0.16 },
        { freq: 659.25, dur: 0.16 },
        { freq: 783.99, dur: 0.24, type: "triangle" }
      ], 0.11);
    }

    // Սխալ պատասխան՝ մեղմ, ցածր հնչյուններ
    function error() {
      melody([
        { freq: 293.66, dur: 0.18, type: "triangle", volume: 0.035 },
        { freq: 246.94, dur: 0.24, type: "sine", volume: 0.03 }
      ], 0.13);
    }

    // Խաղի մեկնարկ՝ կախարդական մեղեդի
    function welcome() {
      melody([
        { freq: 392, dur: 0.25, type: "sine" },
        { freq: 523.25, dur: 0.3, type: "triangle" },
        { freq: 659.25, dur: 0.35, type: "sine" },
        { freq: 783.99, dur: 0.45, type: "triangle" }
      ], 0.17);
    }

    // Մակարդակի ավարտ՝ հաղթական մեղեդի
    function complete() {
      melody([
        { freq: 523.25, dur: 0.22 },
        { freq: 659.25, dur: 0.22 },
        { freq: 783.99, dur: 0.28, type: "triangle" },
        { freq: 1046.5, dur: 0.55, type: "sine", volume: 0.06 }
      ], 0.16);
    }

    // Բնության ֆոնային ձայներ
    function startAmbient() {
      const c = context();

      if (!c || !started || !state.soundEnabled || amb) {
        return;
      }

      try {
        // Մեղմ քամու ձայն
        const buffer = c.createBuffer(
          1,
          c.sampleRate * 3,
          c.sampleRate
        );

        const data = buffer.getChannelData(0);

        for (let i = 0; i < data.length; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = c.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = c.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 450;

        const windGain = c.createGain();
        windGain.gain.value = 0.009;

        noise.connect(filter);
        filter.connect(windGain);
        windGain.connect(master);

        noise.start();

        // Թռչունների մեղմ, պարբերական ձայն
        const birdGain = c.createGain();
        birdGain.gain.value = 0;

        const bird = c.createOscillator();
        bird.type = "sine";
        bird.frequency.value = 1500;

        bird.connect(birdGain);
        birdGain.connect(master);
        bird.start();

        // Թռչունների ձայնը կամաց բարձրանում և նվազում է
        birdGain.gain.setTargetAtTime(
          0.004,
          c.currentTime + 0.5,
          0.8
        );

        amb = {
          noise,
          bird,
          birdGain,
          windGain
        };

        // Մեղմ թռչունների կանչեր՝ ժամանակ առ ժամանակ
        const chirp = () => {
          if (!amb || !state.soundEnabled || !started) return;

          const now = c.currentTime;

          bird.frequency.setValueAtTime(
            1300 + Math.random() * 600,
            now
          );

          birdGain.gain.cancelScheduledValues(now);
          birdGain.gain.setValueAtTime(0.001, now);
          birdGain.gain.linearRampToValueAtTime(0.006, now + 0.07);
          birdGain.gain.linearRampToValueAtTime(0.001, now + 0.2);

          amb.chirpTimer = window.setTimeout(
            chirp,
            1800 + Math.random() * 2500
          );
        };

        chirp();
      } catch (err) {
        stopAmbient();
      }
    }

    // Դադարեցնում ենք բնության ձայները
    function stopAmbient() {
      if (!amb) return;

      if (amb.chirpTimer) {
        window.clearTimeout(amb.chirpTimer);
      }

      try {
        amb.noise.stop();
        amb.bird.stop();
      } catch (err) {
        // Անտեսում ենք արդեն կանգնեցված ձայների սխալները
      }

      amb = null;
    }

    // Ձայնի միացում և անջատում
    function setEnabled(enabled) {
      state.soundEnabled = enabled;

      if (enabled) {
        unlock();
        startAmbient();
      } else {
        stopAmbient();
      }
    }

    return {
      unlock,
      success,
      error,
      welcome,
      complete,
      startAmbient,
      stopAmbient,
      setEnabled
    };
  }


  function award(id, points, kind) {
    if (state.awarded[id]) return false;
    state.awarded[id] = true;
    state.score += points;
    if (kind === "ok") state.correct += 1;
    if (kind === "bad") state.incorrect += 1;
    saveState();
    updateHud();
    return true;
  }

  function updateHud() {
    const done = state.completedLevels.length;
    els.score.textContent = String(state.score);
    els.progressLabel.textContent = `Առաջընթաց՝ ${done} / ${TOTAL_LEVELS}`;
    els.progressBar.style.width = `${(done / TOTAL_LEVELS) * 100}%`;
    els.progress.setAttribute("aria-valuenow", String(done));
    els.sound.setAttribute("aria-pressed", state.soundEnabled ? "true" : "false");
    els.sound.setAttribute("aria-label", state.soundEnabled ? "Ձայնը միացված է" : "Ձայնը անջատված է");
    els.sound.querySelector("[aria-hidden]").textContent = state.soundEnabled ? "🔊" : "🔇";
  }

  function showScreen(name) {
    Object.entries(els.screens).forEach(([key, node]) => {
      const on = key === name;
      node.hidden = !on;
      node.classList.toggle("is-active", on);
    });
  }

  function confettiBurst() {
    els.confetti.innerHTML = "";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const colors = ["#1b6b43", "#1fbfae", "#4fc3f7", "#ffd54f", "#ffffff"];
    for (let i = 0; i < 42; i += 1) {
      const s = document.createElement("span");
      s.style.left = `${Math.random() * 100}%`;
      s.style.background = colors[i % colors.length];
      s.style.animationDelay = `${Math.random() * 0.4}s`;
      els.confetti.appendChild(s);
    }
    window.setTimeout(() => {
      els.confetti.innerHTML = "";
    }, 1800);
  }

  function renderHub() {
    showScreen("hub");
    els.levelCards.replaceChildren();
    LEVELS.forEach((lv) => {
      const locked = lv.id > state.maxUnlocked;
      const done = state.completedLevels.includes(lv.id);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `level-card${done ? " done" : ""}`;
      btn.dataset.level = String(lv.id);
      btn.disabled = locked;
      btn.setAttribute("aria-disabled", locked ? "true" : "false");
      const status = locked ? "🔒 Փակ է" : done ? "✓ Ավարտված" : "▶ Բաց է";
      btn.innerHTML = "";
      const num = document.createElement("span");
      num.className = "num";
      num.textContent = String(lv.id);
      const h = document.createElement("h3");
      h.textContent = `${lv.icon} ${lv.title}`;
      const p = document.createElement("p");
      p.textContent = status;
      btn.append(num, h, p);
      els.levelCards.appendChild(btn);
    });
    announce("Մակարդակների քարտեզ");
  }

  function openLevel(id) {
    if (id > state.maxUnlocked) return;
    session = resetSession();
    session.levelId = id;
    session.phase = "intro";
    const lv = LEVELS[id - 1];
    els.levelKicker.textContent = `Մակարդակ ${id} / ${TOTAL_LEVELS}`;
    els.levelTitle.textContent = `${lv.icon} ${lv.title}`;
    els.levelGoal.textContent = lv.goal;
    showScreen("level");
    renderIntro();
  }

  function renderIntro() {
    const lv = LEVELS[session.levelId - 1];
    const wrap = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = lv.teach;
    const fact = document.createElement("p");
    fact.className = "fact";
    fact.textContent = FACTS[(session.levelId - 1) % FACTS.length];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-primary btn-next";
    btn.dataset.act = "start-activity";
    btn.textContent = "Սկսել փորձը";
    wrap.append(p, fact, btn);
    els.levelRoot.replaceChildren(wrap);
  }

  function startActivity() {
    session.phase = "activity";
    const id = session.levelId;
    if (id === 1) renderFind();
    else if (id === 2) renderAir();
    else if (id === 3) renderSoil();
    else if (id === 4) renderSort();
    else renderTown();
  }

  function nextButton(label, act) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-primary btn-next";
    btn.dataset.act = act;
    btn.textContent = label;
    btn.hidden = true;
    return btn;
  }

  function renderFind() {
    const box = document.createElement("div");
    const help = document.createElement("p");
    help.textContent = "Սեղմիր գետի վրա եղած առարկաներին։ Գտիր վնասակարները։ Կանաչ նշանը նշանակում է անվնաս, կարմիրը՝ վնասակար, իսկ տեքստը բացատրում է պատճառը։";
    const scene = document.createElement("div");
    scene.className = "scene scene-river";
    scene.setAttribute("role", "group");
    scene.setAttribute("aria-label", "Գետի պատկեր աղտոտիչներով");
    POLLUTANTS.forEach((item) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "hotspot";
      b.style.left = item.x;
      b.style.top = item.y;
      b.dataset.find = item.id;
      b.textContent = item.label;
      scene.appendChild(b);
    });
    const fb = document.createElement("div");
    fb.id = "feedback";
    fb.className = "feedback info";
    fb.textContent = "Դեռ ոչ մի առարկա չի ընտրվել։";
    const next = nextButton("Անցնել հարցերին", "start-quiz");
    box.append(help, scene, fb, next);
    els.levelRoot.replaceChildren(box);
  }

  function handleFind(id) {
    const item = POLLUTANTS.find((p) => p.id === id);
    if (!item) return;
    const btn = els.levelRoot.querySelector(`[data-find="${id}"]`);
    if (btn.classList.contains("found-bad") || btn.classList.contains("found-ok")) return;
    const fb = document.getElementById("feedback");
    if (item.harmful) {
      btn.classList.add("found-bad");
      btn.textContent = `⚠ ${item.label}`;
      if (award(`l1-${id}`, FIND_POINTS, "ok")) audio.success();
      fb.className = "feedback ok";
      fb.textContent = `Ճիշտ է. ${item.explain} +${FIND_POINTS} միավոր։`;
    } else {
      btn.classList.add("found-ok");
      btn.textContent = `✓ ${item.label}`;
      state.incorrect += 1;
      saveState();
      audio.error();
      fb.className = "feedback bad";
      fb.textContent = `Սա աղտոտիչ չէ։ ${item.explain}`;
    }
    announce(fb.textContent);
    const needed = POLLUTANTS.filter((p) => p.harmful).length;
    const found = els.levelRoot.querySelectorAll(".found-bad").length;
    if (found >= needed) {
      session.activityDone = true;
      const next = els.levelRoot.querySelector("[data-act='start-quiz']");
      next.hidden = false;
    }
  }

  function renderAir() {
    const box = document.createElement("div");
    const help = document.createElement("p");
    help.textContent = "Քաղաքում ծուխ կա։ Սեղմիր այն գործողություններին, որոնք կբարելավեն օդը։ Սխալ ընտրությունը կբացատրվի։";
    const scene = document.createElement("div");
    scene.className = "scene scene-city";
    scene.innerHTML = "";
    const sky = document.createElement("div");
    sky.className = "city-sky";
    sky.id = "city-sky";
    const stack = document.createElement("div");
    stack.className = "smokestack";
    stack.style.left = "70%";
    const stack2 = document.createElement("div");
    stack2.className = "smokestack";
    stack2.style.left = "22%";
    scene.append(sky, stack, stack2);
    const row = document.createElement("div");
    row.className = "actions";
    AIR_ACTIONS.forEach((a) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "action-card";
      b.dataset.air = a.id;
      b.textContent = a.label;
      row.appendChild(b);
    });
    const meter = document.createElement("div");
    meter.className = "meter";
    const meterFill = document.createElement("span");
    meterFill.id = "air-meter";
    meter.appendChild(meterFill);
    const label = document.createElement("p");
    label.id = "air-label";
    label.textContent = "Օդի որակ՝ վատ";
    const fb = document.createElement("div");
    fb.id = "feedback";
    fb.className = "feedback info";
    fb.textContent = "Ընտրիր առնվազն երեք օգտակար գործողություն։";
    const next = nextButton("Անցնել հարցերին", "start-quiz");
    box.append(help, scene, meter, label, row, fb, next);
    els.levelRoot.replaceChildren(box);
    updateAirVisual();
  }

  function airScore() {
    return Object.keys(session.airPicked).reduce((sum, id) => {
      const a = AIR_ACTIONS.find((x) => x.id === id);
      return sum + (a ? a.value : 0);
    }, 28);
  }

  function updateAirVisual() {
    const v = Math.max(0, Math.min(100, airScore()));
    const meter = document.getElementById("air-meter");
    const sky = document.getElementById("city-sky");
    const label = document.getElementById("air-label");
    if (meter) meter.style.width = `${v}%`;
    if (sky) {
      const haze = Math.max(0, 0.5 - v / 200);
      sky.style.background = `rgba(90, 90, 90, ${haze})`;
    }
    if (label) {
      label.textContent = v > 70 ? "Օդի որակ՝ լավ" : v > 45 ? "Օդի որակ՝ միջին" : "Օդի որակ՝ վատ";
    }
  }

  function handleAir(id) {
    if (session.airPicked[id]) return;
    const a = AIR_ACTIONS.find((x) => x.id === id);
    const btn = els.levelRoot.querySelector(`[data-air="${id}"]`);
    const fb = document.getElementById("feedback");
    session.airPicked[id] = true;
    btn.classList.add("used");
    btn.disabled = true;
    if (a.bad) {
      state.incorrect += 1;
      saveState();
      audio.error();
      fb.className = "feedback bad";
      fb.textContent = a.help;
    } else {
      if (award(`l2-${id}`, ACTION_POINTS, "ok")) audio.success();
      fb.className = "feedback ok";
      fb.textContent = `${a.help} +${ACTION_POINTS} միավոր։`;
    }
    updateAirVisual();
    announce(fb.textContent);
    const good = AIR_ACTIONS.filter((x) => !x.bad).length;
    const pickedGood = AIR_ACTIONS.filter((x) => !x.bad && session.airPicked[x.id]).length;
    if (pickedGood >= Math.min(3, good)) {
      session.activityDone = true;
      els.levelRoot.querySelector("[data-act='start-quiz']").hidden = false;
    }
  }

  function renderSoil() {
    const box = document.createElement("div");
    const help = document.createElement("p");
    help.textContent = "Երեք բույսերին տուր տարբեր խնամք և համեմատիր արդյունքը։ Սեղմիր յուրաքանչյուր կոճակը մեկ անգամ։";
    const pots = document.createElement("div");
    pots.className = "pots";
    const kinds = [
      { id: "compost", title: "Օրգանական կոմպոստ", plant: "🌿", result: "Հողը հարուստ է, աճը կայուն է։ Կոմպոստը դանդաղ է սնուցում։", good: true },
      { id: "balanced", title: "Ճիշտ չափի պարարտանյութ", plant: "🌻", result: "Բույսը լավ է աճում, որովհետև քանակը համապատասխան է։", good: true },
      { id: "excess", title: "Չափից շատ պարարտանյութ", plant: "🥀", result: "Ավելցուկը վնասեց արմատները և աղակալեց հողը։", good: false, poor: true },
    ];
    kinds.forEach((k) => {
      const card = document.createElement("div");
      card.className = "pot";
      const vis = document.createElement("div");
      vis.className = "plant-visual";
      vis.id = `plant-${k.id}`;
      vis.textContent = "🌱";
      vis.setAttribute("aria-hidden", "true");
      const h = document.createElement("h3");
      h.textContent = k.title;
      const b = document.createElement("button");
      b.type = "button";
      b.className = "btn btn-ghost";
      b.dataset.soil = k.id;
      b.textContent = "Կիրառել";
      card.append(vis, h, b);
      pots.appendChild(card);
    });
    const fb = document.createElement("div");
    fb.id = "feedback";
    fb.className = "feedback info";
    fb.textContent = "Դեռ ոչ մի տարբերակ չի փորձվել։";
    const next = nextButton("Անցնել հարցերին", "start-quiz");
    box.append(help, pots, fb, next);
    els.levelRoot.replaceChildren(box);
    session.soilTried = {};
  }

  function handleSoil(id) {
    if (session.soilTried[id]) return;
    session.soilTried[id] = true;
    const map = {
      compost: { plant: "🌿", result: "Հողը հարուստ է, աճը կայուն է։ Կոմպոստը դանդաղ է սնուցում։", good: true },
      balanced: { plant: "🌻", result: "Բույսը լավ է աճում, որովհետև քանակը համապատասխան է։", good: true },
      excess: { plant: "🥀", result: "Ավելցուկը վնասեց արմատները և աղակալեց հողը։", good: false, poor: true },
    };
    const k = map[id];
    const vis = document.getElementById(`plant-${id}`);
    vis.textContent = k.plant;
    vis.classList.toggle("poor", Boolean(k.poor));
    const btn = els.levelRoot.querySelector(`[data-soil="${id}"]`);
    btn.disabled = true;
    const fb = document.getElementById("feedback");
    if (k.good) {
      if (award(`l3-${id}`, ACTION_POINTS, "ok")) audio.success();
      fb.className = "feedback ok";
      fb.textContent = `${k.result} +${ACTION_POINTS} միավոր։`;
    } else {
      audio.error();
      fb.className = "feedback info";
      fb.textContent = `${k.result} Սա համեմատության համար է, ոչ թե ճիշտ խնամք։`;
    }
    announce(fb.textContent);
    if (Object.keys(session.soilTried).length >= 3) {
      session.activityDone = true;
      els.levelRoot.querySelector("[data-act='start-quiz']").hidden = false;
    }
  }

  function renderSort() {
    const box = document.createElement("div");
    const help = document.createElement("p");
    help.textContent = "Քաշիր առարկան ճիշտ արկղ կամ սեղմիր առարկային, ապա արկղին։ Սա հարմար է նաև խելացի գրատախտակի համար։";
    const board = document.createElement("div");
    board.className = "sort-board";
    const left = document.createElement("div");
    const hItems = document.createElement("h3");
    hItems.textContent = "Առարկաներ";
    const items = document.createElement("div");
    items.className = "sort-items";
    items.id = "sort-items";
    SORT_ITEMS.forEach((it) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "sort-item";
      b.draggable = true;
      b.dataset.sort = it.id;
      b.textContent = it.label;
      items.appendChild(b);
    });
    left.append(hItems, items);
    const right = document.createElement("div");
    const hBins = document.createElement("h3");
    hBins.textContent = "Արկղեր";
    const bins = document.createElement("div");
    bins.className = "bins";
    BINS.forEach((bin) => {
      const d = document.createElement("button");
      d.type = "button";
      d.className = "bin";
      d.dataset.bin = bin.id;
      d.textContent = bin.label;
      bins.appendChild(d);
    });
    right.append(hBins, bins);
    board.append(left, right);
    const fb = document.createElement("div");
    fb.id = "feedback";
    fb.className = "feedback info";
    fb.textContent = "Ընտրիր առարկա։";
    const next = nextButton("Անցնել հարցերին", "start-quiz");
    box.append(help, board, fb, next);
    els.levelRoot.replaceChildren(box);
    session.selectedSort = null;
    session.placed = {};
  }

  function placeSort(itemId, binId) {
    if (!itemId || session.placed[itemId]) return;
    const item = SORT_ITEMS.find((x) => x.id === itemId);
    const btn = els.levelRoot.querySelector(`[data-sort="${itemId}"]`);
    const fb = document.getElementById("feedback");
    if (item.cat === binId) {
      session.placed[itemId] = true;
      btn.classList.add("placed");
      btn.textContent = `✓ ${item.label}`;
      if (award(`l4-${itemId}`, SORT_POINTS, "ok")) audio.success();
      fb.className = "feedback ok";
      fb.textContent = `Ճիշտ է. ${item.why} +${SORT_POINTS} միավոր։`;
    } else {
      audio.error();
      fb.className = "feedback bad";
      const names = Object.fromEntries(BINS.map((b) => [b.id, b.label]));
      fb.textContent = `Սխալ արկղ։ ${item.label}-ը պատկանում է «${names[item.cat]}» խմբին։ ${item.why}`;
    }
    session.selectedSort = null;
    els.levelRoot.querySelectorAll(".sort-item.selected").forEach((n) => n.classList.remove("selected"));
    announce(fb.textContent);
    if (Object.keys(session.placed).length >= SORT_ITEMS.length) {
      session.activityDone = true;
      els.levelRoot.querySelector("[data-act='start-quiz']").hidden = false;
    }
  }

  function renderTown() {
    const box = document.createElement("div");
    const help = document.createElement("p");
    help.textContent = "Քաղաքը աղտոտված է։ Ունես 6 գործողություն։ Ընտրիր խելամտորեն. յուրաքանչյուր քայլ փոխում է ջուրը, օդը, հողը և աղբը։";
    const scene = document.createElement("div");
    scene.className = "scene scene-town";
    scene.id = "town-scene";
    const stats = document.createElement("div");
    stats.id = "town-stats";
    const row = document.createElement("div");
    row.className = "actions";
    TOWN_ACTIONS.forEach((a) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "action-card";
      b.dataset.town = a.id;
      b.textContent = a.label;
      row.appendChild(b);
    });
    const left = document.createElement("p");
    left.id = "town-left";
    const fb = document.createElement("div");
    fb.id = "feedback";
    fb.className = "feedback info";
    fb.textContent = "Սկսիր վերականգնումը։";
    const next = nextButton("Անցնել հարցերին", "start-quiz");
    box.append(help, scene, stats, left, row, fb, next);
    els.levelRoot.replaceChildren(box);
    session.townUsed = {};
    session.townLeft = 6;
    session.env = { water: 28, air: 30, soil: 26, waste: 22 };
    updateTown();
  }

  function envTotal() {
    const e = session.env;
    return Math.round((e.water + e.air + e.soil + e.waste) / 4);
  }

  function updateTown() {
    const e = session.env;
    const stats = document.getElementById("town-stats");
    const left = document.getElementById("town-left");
    const scene = document.getElementById("town-scene");
    if (stats) {
      stats.textContent = `Ջուր ${e.water} · Օդ ${e.air} · Հող ${e.soil} · Թափոնների կառավարում ${e.waste}`;
    }
    if (left) left.textContent = `Մնացած գործողություններ՝ ${session.townLeft}`;
    if (scene) {
      const t = envTotal();
      scene.style.filter = `saturate(${0.4 + t / 140}) brightness(${0.82 + t / 250})`;
    }
    state.envHealth = envTotal();
    saveState();
  }

  function handleTown(id) {
    if (session.townUsed[id] || session.townLeft <= 0) return;
    const a = TOWN_ACTIONS.find((x) => x.id === id);
    session.townUsed[id] = true;
    session.townLeft -= a.cost;
    Object.keys(a.effect).forEach((k) => {
      session.env[k] = Math.min(100, session.env[k] + a.effect[k]);
    });
    const btn = els.levelRoot.querySelector(`[data-town="${id}"]`);
    btn.classList.add("used");
    btn.disabled = true;
    if (award(`l5-${id}`, ACTION_POINTS, "ok")) audio.success();
    const fb = document.getElementById("feedback");
    fb.className = "feedback ok";
    fb.textContent = `${a.label} կիրառվեց։ Շրջակա միջավայրի առողջություն՝ ${envTotal()}։`;
    updateTown();
    announce(fb.textContent);
    if (session.townLeft <= 0 || Object.keys(session.townUsed).length >= TOWN_ACTIONS.length) {
      session.activityDone = true;
      els.levelRoot.querySelector("[data-act='start-quiz']").hidden = false;
    }
  }

  function startQuiz() {
    session.phase = "quiz";
    session.quizIndex = 0;
    renderQuiz();
  }

  function renderQuiz() {
    const list = QUESTIONS[session.levelId];
    const item = list[session.quizIndex];
    const box = document.createElement("div");
    const step = document.createElement("p");
    step.className = "eyebrow";
    step.textContent = `Հարց ${session.quizIndex + 1} / ${list.length}`;
    const q = document.createElement("h3");
    q.id = "quiz-q";
    q.textContent = item.q;
    const choices = document.createElement("div");
    choices.className = "choices";
    choices.setAttribute("role", "group");
    choices.setAttribute("aria-labelledby", "quiz-q");
    item.options.forEach((opt, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "choice";
      b.dataset.choice = String(i);
      b.textContent = `${["Ա", "Բ", "Գ", "Դ"][i]}. ${opt}`;
      b.addEventListener("click", () => handleChoice(i));
      choices.appendChild(b);
    });
    const fb = document.createElement("div");
    fb.id = "feedback";
    fb.className = "feedback info";
    fb.textContent = "Ընտրիր մեկ պատասխան։";
    const next = nextButton(session.quizIndex === list.length - 1 ? "Ավարտել մակարդակը" : "Հաջորդ հարց", "next-quiz");
    box.append(step, q, choices, fb, next);
    els.levelRoot.replaceChildren(box);
    session.answered = false;
  }

  function handleChoice(index) {
    if (session.answered) return;
    session.answered = true;
    const list = QUESTIONS[session.levelId];
    const item = list[session.quizIndex];
    const buttons = [...els.levelRoot.querySelectorAll(".choice")];
    const fb = document.getElementById("feedback");
    buttons.forEach((b) => {
      b.disabled = true;
      const i = Number(b.dataset.choice);
      if (i === item.answer) b.classList.add("correct");
      if (i === index && i !== item.answer) b.classList.add("wrong");
    });
    const key = `q-${session.levelId}-${session.quizIndex}`;
    if (index === item.answer) {
      if (award(key, QUIZ_POINTS, "ok")) audio.success();
      fb.className = "feedback ok";
      fb.textContent = `Ճիշտ է ✓ ${item.why} +${QUIZ_POINTS} միավոր։`;
    } else {
      state.incorrect += 1;
      state.awarded[key] = true;
      saveState();
      audio.error();
      fb.className = "feedback bad";
      fb.textContent = `Սխալ է ✗ ${item.why}`;
    }
    announce(fb.textContent);
    els.levelRoot.querySelector("[data-act='next-quiz']").hidden = false;
  }

  function nextQuiz() {
    const list = QUESTIONS[session.levelId];
    if (session.quizIndex < list.length - 1) {
      session.quizIndex += 1;
      renderQuiz();
      return;
    }
    completeLevel();
  }

  function completeLevel() {
    const id = session.levelId;
    if (!state.completedLevels.includes(id)) state.completedLevels.push(id);
    state.maxUnlocked = Math.max(state.maxUnlocked, Math.min(TOTAL_LEVELS, id + 1));
    saveState();
    updateHud();
    audio.complete();
    confettiBurst();
    const box = document.createElement("div");
    const h = document.createElement("h3");
    h.textContent = "Մակարդակն ավարտված է";
    const p = document.createElement("p");
    p.textContent = `Կեցցե՛ս։ Քո միավորը հիմա ${state.score} է։`;
    const tip = document.createElement("p");
    tip.className = "fact";
    tip.textContent = `Խորհուրդ. ${TIPS[(id - 1) % TIPS.length]}`;
    const row = document.createElement("div");
    row.className = "cta-row";
    if (id < TOTAL_LEVELS) {
      const n = document.createElement("button");
      n.type = "button";
      n.className = "btn btn-primary";
      n.dataset.act = "next-level";
      n.textContent = "Հաջորդ մակարդակ";
      row.appendChild(n);
    } else {
      const n = document.createElement("button");
      n.type = "button";
      n.className = "btn btn-primary";
      n.dataset.act = "show-results";
      n.textContent = "Տեսնել վերջնական արդյունքը";
      row.appendChild(n);
    }
    const hub = document.createElement("button");
    hub.type = "button";
    hub.className = "btn btn-ghost";
    hub.dataset.act = "to-hub";
    hub.textContent = "Քարտեզ";
    row.appendChild(hub);
    box.append(h, p, tip, row);
    els.levelRoot.replaceChildren(box);
    announce("Մակարդակն ավարտված է");
  }

  function performanceMessage() {
    const totalQ = TOTAL_LEVELS * 5;
    const ratio = state.correct / Math.max(1, state.correct + state.incorrect);
    if (ratio >= 0.85 && state.score >= 280) {
      return "Գերազանց է։ Դու հասկանում ես, որ քիմիան գործիք է. այն օգնում է, երբ օգտագործում ենք խելամտորեն։";
    }
    if (ratio >= 0.6) {
      return "Լավ է։ Կրկնիր մակարդակները և ուշադրություն դարձրու չափին ու կիրառմանը։";
    }
    return "Շարունակիր սովորել։ Կարդա բացատրությունները և նորից փորձիր վարժությունները։";
  }

  function showResults() {
    showScreen("results");
    const wrap = document.createElement("div");
    const score = document.createElement("p");
    score.innerHTML = "";
    const strong = document.createElement("strong");
    strong.textContent = `Վերջնական միավոր՝ ${state.score}`;
    score.appendChild(strong);
    const stats = document.createElement("p");
    stats.textContent = `Ճիշտ գործողություններ՝ ${state.correct} · Սխալներ՝ ${state.incorrect} · Շրջակա միջավայրի առողջություն՝ ${state.envHealth}`;
    const msg = document.createElement("p");
    msg.textContent = performanceMessage();
    const tips = document.createElement("ul");
    TIPS.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      tips.appendChild(li);
    });
    const h = document.createElement("h3");
    h.textContent = "Ի՞նչ անել տանը և դպրոցում";
    wrap.append(score, stats, msg, h, tips);
    els.resultsBody.replaceChildren(wrap);
    confettiBurst();
    audio.complete();
    announce("Խաղն ավարտված է");
  }

  function toggleSound() {
    audio.unlock();
    state.soundEnabled = !state.soundEnabled;
    saveState();
    updateHud();
    if (state.soundEnabled) audio.startAmbient();
    else audio.stopAmbient();
    announce(state.soundEnabled ? "Ձայնը միացված է" : "Ձայնը անջատված է");
  }
  

  function openModal() {

    lastFocus = document.activeElement;
    els.modal.hidden = false;
    document.getElementById("modal-confirm").focus();
    document.getElementById("modal-confirm").addEventListener('click', restartGame)
    document.getElementById("modal-cancel").addEventListener('click', closeModal)
  }

  function closeModal() {
    els.modal.hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function restartGame() {
    audio.stopAmbient();
    const soundEnabled = state.soundEnabled;
    state = defaultState();
    state.soundEnabled = soundEnabled;
    session = resetSession();
    saveState();
    updateHud();
    if (state.soundEnabled) audio.startAmbient();
    closeModal();
    showScreen("welcome");
    announce("Խաղը վերսկսվեց");
  }

  function onAppClick(e) {
    const t = e.target.closest("button");
    if (!t) return;
    audio.unlock();

    if (t.id === "btn-start" || t.id === "btn-howto-start") {
      audio.welcome();
      renderHub();
      return;
    }
    if (t.id === "btn-howto") {
      showScreen("howto");
      return;
    }
    if (t.id === "btn-howto-back" || t.id === "btn-home" || t.dataset.act === "to-hub") {
      if (t.id === "btn-home") renderHub();
      else if (t.dataset.act === "to-hub") renderHub();
      else showScreen("welcome");
      return;
    }
    if (t.id === "btn-sound") {
      toggleSound();
      return;
    }
    if (t.id === "btn-restart" || t.id === "btn-results-restart") {
      openModal();
      return;
    }
    if (t.id === "modal-cancel") {
      closeModal();
      return;
    }
    if (t.id === "modal-confirm") {
      restartGame();
      return;
    }
    if (t.id === "btn-replay-hub") {
      renderHub();
      return;
    }
    if (t.dataset.level) {
      openLevel(Number(t.dataset.level));
      return;
    }
    if (t.dataset.act === "start-activity") {
      startActivity();
      return;
    }
    if (t.dataset.act === "start-quiz") {
      startQuiz();
      return;
    }
    if (t.dataset.act === "next-quiz") {
      nextQuiz();
      return;
    }
    if (t.dataset.act === "next-level") {
      openLevel(session.levelId + 1);
      return;
    }
    if (t.dataset.act === "show-results") {
      showResults();
      return;
    }
    if (t.dataset.find) {
      handleFind(t.dataset.find);
      return;
    }
    if (t.dataset.air) {
      handleAir(t.dataset.air);
      return;
    }
    if (t.dataset.soil) {
      handleSoil(t.dataset.soil);
      return;
    }
    if (t.dataset.sort) {
      els.levelRoot.querySelectorAll(".sort-item.selected").forEach((n) => n.classList.remove("selected"));
      t.classList.add("selected");
      session.selectedSort = t.dataset.sort;
      return;
    }
    if (t.dataset.bin) {
      if (session.selectedSort) placeSort(session.selectedSort, t.dataset.bin);
      return;
    }
    if (t.dataset.town) {
      handleTown(t.dataset.town);
    }
  }

  function onKey(e) {
    if (e.key !== "Escape") return;
    if (!els.modal.hidden) {
      closeModal();
      return;
    }
    if (!els.screens.welcome.hidden) return;
    renderHub();
  }

  function init() {
    loadState();
    updateHud();
    const app = document.getElementById("app");
    app.addEventListener("click", onAppClick);
    app.addEventListener("dragstart", (e) => {
      const item = e.target.closest("[data-sort]");
      if (!item) return;
      session.selectedSort = item.dataset.sort;
      e.dataTransfer.setData("text/plain", item.dataset.sort);
    });
    app.addEventListener("dragover", (e) => {
      const bin = e.target.closest("[data-bin]");
      if (!bin) return;
      e.preventDefault();
      bin.classList.add("over");
    });
    app.addEventListener("dragleave", (e) => {
      const bin = e.target.closest("[data-bin]");
      if (bin) bin.classList.remove("over");
    });
    app.addEventListener("drop", (e) => {
      const bin = e.target.closest("[data-bin]");
      if (!bin) return;
      e.preventDefault();
      bin.classList.remove("over");
      const id = e.dataTransfer.getData("text/plain") || session.selectedSort;
      placeSort(id, bin.dataset.bin);
    });
    document.addEventListener("keydown", onKey);
    els.modal.addEventListener("click", (e) => {
      if (e.target === els.modal) closeModal();
    });
  }

  init();
})();
