"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "sw";

/**
 * Lightweight i18n for the demo. Strings are keyed by their English text; the
 * Swahili column is a reviewable translation table. Missing keys fall back to
 * the key itself (i.e. the English text), so nothing ever renders blank.
 *
 * In production this would be a full next-intl setup with per-content
 * translation fields reviewed before publishing. The architecture here — a
 * persisted, site-wide toggle consumed via useT() — is the same shape.
 *
 * Deliberately NOT translated (left to fall back to English/original):
 * proper nouns, place names, brand names (M-Pesa, PayPal, SACCO, UDA, SHA,
 * NHIF, IEBC, TVET), and quoted citation/article titles (translating a
 * source's actual title would misquote it).
 */
const DICT: Record<string, string> = {
  // ── Nav groups & links ──────────────────────────────────────────────
  "My Record": "Rekodi Yangu",
  "About Me": "Kunihusu",
  "Get Involved": "Jiunge Nasi",
  "What We've Delivered": "Tuliyotimiza",
  "Major Projects": "Miradi Mikuu",
  "My Manifesto": "Ilani Yangu",
  "My Promises": "Ahadi Zangu",
  "My Legacy": "Urithi Wangu",
  "Journey to Presidency": "Safari ya Urais",
  "Why Ruto": "Kwa Nini Ruto",
  "The Party": "Chama",
  "Election Center": "Kituo cha Uchaguzi",
  "Campaign Roadmap": "Ramani ya Kampeni",
  "Campaign Updates": "Habari za Kampeni",
  Donate: "Changia",
  "Media Room": "Chumba cha Vyombo vya Habari",
  "Ask the President": "Muulize Rais",
  "Join the Movement": "Jiunge na Harakati",
  "President of Kenya": "Rais wa Kenya",
  Language: "Lugha",

  // ── Kicker labels (section eyebrows) ────────────────────────────────
  "From the Field": "Kutoka Uwanjani",
  "The Ego & Legacy Vault": "Hazina ya Urithi",
  "See Your Future in the Vision": "Ona Maisha Yako ya Baadaye",
  "Explore the Platform": "Chunguza Jukwaa",
  "Voices of Kenya": "Sauti za Wakenya",
  "Answered Questions": "Maswali Yaliyojibiwa",
  "In Progress": "Inaendelea",
  Upcoming: "Ijayo",
  "The Transformation Ledger": "Daftari la Mabadiliko",
  "The Fifth President of the Republic of Kenya":
    "Rais wa Tano wa Jamhuri ya Kenya",
  "The 2022 Result": "Matokeo ya 2022",
  Video: "Video",
  "Photo Diary": "Shajara ya Picha",
  "Party Profile": "Wasifu wa Chama",
  "Party Colors": "Rangi za Chama",
  "What We Stand For": "Tunachosimamia",

  // ── PageHero: title / accent / description per page ─────────────────
  "Meeting Kenyans,": "Kukutana na Wakenya,",
  "county by county.": "kaunti kwa kaunti.",
  "Tap a county to see where the movement has been and where it's headed next — the campaign trail, mapped.":
    "Gusa kaunti kuona mahali harakati imekuwa na inakoelekea — njia ya kampeni, imepangwa kwenye ramani.",

  "Policy, felt in the": "Sera, inayohisiwa",
  "household.": "nyumbani.",
  "Behind every statistic is a name. This is what the bottom-up model looks like on the ground — and what it means for you, specifically.":
    "Nyuma ya kila takwimu kuna jina. Hivi ndivyo mfumo wa chini kwenda juu unavyoonekana ardhini — na maana yake kwako, mahususi.",

  "Every milestone,": "Kila hatua,",
  "verified.": "iliyothibitishwa.",
  "A running record of my policies converted into outcomes — each one backed by a verified source, audited across the pillars defining this administration's work.":
    "Rekodi endelevu ya sera zangu zilizogeuzwa kuwa matokeo — kila moja ikiungwa mkono na chanzo kilichothibitishwa, kilichokaguliwa katika nguzo zinazoelezea kazi ya utawala huu.",
  "A running record of policy converted into outcomes — audited across the four pillars defining this administration's legacy.":
    "Rekodi endelevu ya sera zilizogeuzwa kuwa matokeo — zilizokaguliwa katika nguzo nne zinazofafanua urithi wa utawala huu.",

  "The next chapter": "Sura inayofuata",
  "is being written.": "inaandikwa.",

  "What I will": "Nitakayo",
  "deliver next.": "yatimiza baadaye.",
  "Delivery earns the right to promise more. These are my specific, measurable commitments for the chapter ahead.":
    "Utekelezaji ndio unaostahilisha kuahidi zaidi. Hizi ni ahadi zangu mahususi, zinazoweza kupimwa kwa sura ijayo.",

  "From Sugoi": "Kutoka Sugoi",
  "to State House.": "hadi Ikulu.",
  "A self-made path through classrooms, cabinet offices, and grassroots politics — built one elected office at a time, never inherited.":
    "Njia aliyojijengea mwenyewe kupitia madarasa, ofisi za baraza la mawaziri, na siasa za msingi — iliyojengwa wadhifa mmoja kwa wakati, kamwe si urithi.",

  "Fuel the": "Chochea",
  "movement.": "harakati.",
  "Add your support to the bottom-up movement. Contribute via M-Pesa, card, or PayPal.":
    "Ongeza uungwaji mkono wako kwa harakati ya chini kwenda juu. Changia kupitia M-Pesa, kadi, au PayPal.",

  "A voice at every": "Sauti kwenye kila",
  "global table.": "meza ya kimataifa.",
  "From the UN General Assembly to the G20 roundtable — Kenya's stature on the world stage, chronicled in image and word.":
    "Kutoka Baraza Kuu la Umoja wa Mataifa hadi meza ya duara ya G20 — hadhi ya Kenya kwenye jukwaa la dunia, iliyorekodiwa kwa picha na maneno.",

  "Have your": "Kuwa na",
  "say.": "sauti yako.",
  "Every household has a story or a question for this administration. Send yours directly — high-volume topics shape future Town Hall sessions.":
    "Kila kaya ina hadithi au swali kwa utawala huu. Tuma lako moja kwa moja — mada zenye maswali mengi huchagiza vikao vijavyo vya mkutano wa hadhara.",

  "The latest from": "Habari mpya kutoka",
  "the movement.": "harakati.",
  "News, milestones and stories from the field — updated as the work continues.":
    "Habari, hatua muhimu, na hadithi kutoka uwanjani — zinasasishwa kazi inavyoendelea.",

  "The Bottom-Up": "Kutoka Chini",
  "Economic Transformation Agenda.": "Kwa Mpango wa Mabadiliko ya Kiuchumi.",
  "Five pillars, one philosophy: channel scarce resources to the base of the economic pyramid first. This is my plan.":
    "Nguzo tano, falsafa moja: elekeza rasilimali chache kwa msingi wa piramidi ya kiuchumi kwanza. Huu ndio mpango wangu.",

  "Building Kenya,": "Kujenga Kenya,",
  "in the open.": "kwa uwazi.",
  "Every flagship project, with its current stage and progress — from what's rising today to what's coming next.":
    "Kila mradi mkuu, na hatua yake ya sasa na maendeleo — kutoka kile kinachoinuka leo hadi kinachokuja.",

  "Promises kept,": "Ahadi zilizotimizwa,",
  "counted.": "zimehesabiwa.",
  "A scorecard of what the bottom-up agenda has delivered on the ground. Filter by sector to see the work in each area.":
    "Bao la yale ambayo ajenda ya chini kwenda juu imetimiza ardhini. Chuja kwa sekta kuona kazi katika kila eneo.",

  "The record,": "Rekodi,",
  "in real time.": "kwa wakati halisi.",
  "Video from State House engagements and photos from the international stage — updated as the administration works.":
    "Video kutoka shughuli za Ikulu na picha kutoka jukwaa la kimataifa — zinasasishwa utawala unavyofanya kazi.",

  // ── Homepage hero ────────────────────────────────────────────────────
  "A bottom-up economic revolution. Universal healthcare for every household. Dignified homes for the working class. His Excellency Dr. William Samoei Ruto is rewriting what a nation can deliver for its people — measured in results, not rhetoric.":
    "Mapinduzi ya kiuchumi ya chini kwenda juu. Huduma ya afya kwa wote kwa kila kaya. Nyumba za heshima kwa tabaka la wafanyakazi. Mheshimiwa Dkt. William Samoei Ruto anaandika upya kile taifa linaloweza kutimizia wananchi wake — kinapimwa kwa matokeo, si maneno.",
  "Explore the Ledger": "Chunguza Daftari",

  // ── Common short UI chrome ───────────────────────────────────────────
  "A mandate, county by": "Ridhaa, kaunti kwa",
  "county.": "kaunti.",
  "A philosophy, not just": "Falsafa, si tu",
  "a manifesto.": "ilani.",
  "One record. Every": "Rekodi moja. Kila",
  "angle.": "pembe.",
  "Moments from the": "Nyakati kutoka",
  "global stage.": "jukwaa la kimataifa.",
  "Watch the record,": "Tazama rekodi,",
  "unedited.": "bila kuhaririwa.",
  "Straight answers,": "Majibu ya wazi,",
  "on the record.": "kwenye rekodi.",
  "A selection of moderated questions from Kenyans, answered directly.":
    "Uteuzi wa maswali yaliyodhibitiwa kutoka kwa Wakenya, yaliyojibiwa moja kwa moja.",
  "Select who you are. See what the administration delivers for you.":
    "Chagua wewe ni nani. Ona kile utawala kinachokutimizia.",
  "Claim your place in this vision": "Dai nafasi yako katika maono haya",
  "Behind every statistic is a name. This is what transformation looks like on the ground, in the words of the Kenyans living it.":
    "Nyuma ya kila takwimu kuna jina. Hivi ndivyo mabadiliko yanavyoonekana ardhini, kwa maneno ya Wakenya wanaoyaishi.",
  "Sourced from the verified official channel":
    "Imetolewa kutoka kituo rasmi kilichothibitishwa",
  "The official record of transformation — a bottom-up economic model turning policy into dignity for every Kenyan household.":
    "Rekodi rasmi ya mabadiliko — mfumo wa kiuchumi wa chini kwenda juu unaogeuza sera kuwa heshima kwa kila kaya ya Kikenya.",
  "United Democratic Alliance (UDA) & the Kenya Kwanza Movement. All rights reserved.":
    "United Democratic Alliance (UDA) na Harakati ya Kenya Kwanza. Haki zote zimehifadhiwa.",

  // ── Countdown / elections ────────────────────────────────────────────
  "Countdown to": "Kuhesabu siku hadi",
  "IEBC-confirmed Election Day: Tuesday, 10 August 2027":
    "Siku ya Uchaguzi Iliyothibitishwa na IEBC: Jumanne, Agosti 10, 2027",
  "See the 2022 Result": "Ona Matokeo ya 2022",
  "Election Day: Tuesday, 10 August 2027 — as confirmed by the Independent Electoral and Boundaries Commission (IEBC).":
    "Siku ya Uchaguzi: Jumanne, Agosti 10, 2027 — kama ilivyothibitishwa na Tume Huru ya Uchaguzi na Mipaka (IEBC).",
  "Presidential result share by county — 2022":
    "Asilimia za matokeo ya urais kwa kaunti — 2022",
  "Share of the two-way vote (Ruto vs. the Late Raila Odinga) won by William Ruto. Source: IEBC county returns.":
    "Asilimia ya kura kati ya wagombea wawili (Ruto dhidi ya Marehemu Raila Odinga) alizoshinda William Ruto. Chanzo: matokeo ya kaunti za IEBC.",
  Map: "Ramani",
  Table: "Jedwali",
  "Ruto vote share": "Asilimia ya kura za Ruto",
  County: "Kaunti",
  Region: "Eneo",
  "Ruto Share": "Asilimia ya Ruto",
  "Raila (Baba)": "Raila (Baba)",
  "Ruto:": "Ruto:",
  "The Late Raila (Baba):": "Marehemu Raila (Baba):",
  Declared: "Ilitangazwa",
  "Source:": "Chanzo:",
  votes: "kura",
  via: "kupitia",
  Days: "Siku",
  Hours: "Saa",
  Minutes: "Dakika",
  Seconds: "Sekunde",

  // ── Roadmap ──────────────────────────────────────────────────────────
  "Where we've been": "Tulikokuwa",
  "Where we're going": "Tunakoelekea",
  "Where We're Going": "Tunakoelekea",
  "Where We've Been": "Tulikokuwa",
  "No visit scheduled": "Hakuna ziara iliyopangwa",

  // ── Forms: Ask the President ─────────────────────────────────────────
  "Full Name": "Jina Kamili",
  "Full name": "Jina kamili",
  "Email Address": "Anwani ya Barua Pepe",
  "Hidden — anonymous": "Imefichwa — bila jina",
  "Submit anonymously (your name and email will not be shown)":
    "Tuma bila jina (jina lako na barua pepe hazitaonyeshwa)",
  Topic: "Mada",
  "Select a topic": "Chagua mada",
  "Your Message": "Ujumbe Wako",
  "Ask a question or share your feedback...":
    "Uliza swali au toa maoni yako...",
  "Every submission passes through a moderation queue before it can appear in the public Q&A. Selected questions are answered in regular batches.":
    "Kila ujumbe hupitia foleni ya udhibiti kabla ya kuonekana kwenye maswali na majibu ya umma. Maswali yaliyoteuliwa hujibiwa katika makundi ya mara kwa mara.",
  "Send Message": "Tuma Ujumbe",
  "Sending...": "Inatuma...",
  "Your message has been received.": "Ujumbe wako umepokelewa.",
  "The correspondence team reviews every submission. High-volume topics inform future Town Hall Q&A sessions.":
    "Timu ya mawasiliano hukagua kila ujumbe. Mada zenye maswali mengi huchagiza vikao vijavyo vya maswali na majibu vya mkutano wa hadhara.",
  Anonymous: "Bila Jina",
  "Healthcare (SHA)": "Afya (SHA)",
  Housing: "Nyumba",
  "Hustler Fund / Economy": "Hustler Fund / Uchumi",
  Agriculture: "Kilimo",
  Diplomacy: "Diplomasia",
  "General Feedback": "Maoni ya Jumla",

  // ── Pledge form ──────────────────────────────────────────────────────
  "Pledge your vote.": "Ahidi kura yako.",
  "Join the movement.": "Jiunge na harakati.",
  "Add your name to a nationwide coalition standing behind a proven record of delivery — and be the first to hear where the movement gathers next.":
    "Ongeza jina lako kwenye muungano wa kitaifa unaosimamia rekodi thabiti ya utekelezaji — na uwe wa kwanza kusikia mahali harakati itakusanyika ijayo.",
  "Pledge received.": "Ahadi imepokelewa.",
  "Karibu to the movement — watch your inbox for what's next.":
    "Karibu kwenye harakati — angalia sanduku lako la barua pepe kwa yajayo.",
  "Phone number": "Nambari ya simu",
  "Select your county": "Chagua kaunti yako",
  Other: "Nyingine",
  "Submitting...": "Inawasilisha...",
  "Pledge My Vote": "Ahidi Kura Yangu",

  // ── Donate ───────────────────────────────────────────────────────────
  "Thank you for your support.": "Asante kwa uungwaji mkono wako.",
  "This is a demonstration confirmation for a pledged contribution of":
    "Hii ni uthibitisho wa onyesho kwa mchango ulioahidiwa wa",
  "No payment has been processed.": "Hakuna malipo yaliyofanywa.",
  "Make another pledge": "Toa ahadi nyingine",
  "Choose an amount (KES)": "Chagua kiasi (KES)",
  "Or enter a custom amount": "Au weka kiasi chako",
  "Payment method": "Njia ya malipo",
  "Your details": "Maelezo Yako",
  "National ID / Passport no.": "Nambari ya Kitambulisho / Pasipoti",
  "County of residence": "Kaunti ya makazi",
  "Donor details are collected to meet campaign-finance disclosure requirements. Fields shown here are a scaffold for legal review — this demo does not store or transmit any data.":
    "Maelezo ya wachangiaji hukusanywa ili kutimiza matakwa ya ufichuzi wa fedha za kampeni. Sehemu zilizoonyeshwa hapa ni muundo wa ukaguzi wa kisheria — onyesho hili halihifadhi wala kutuma data yoyote.",
  "Processing…": "Inachakatwa…",
  "Donate KES": "Changia KES",
  "Note: This is a demonstration build. Payment processing (M-Pesa/Daraja, card, PayPal) is a later technical phase and is not connected. No real transactions occur.":
    "Kumbuka: Hii ni toleo la onyesho. Uchakataji wa malipo (M-Pesa/Daraja, kadi, PayPal) ni hatua ya kiufundi ya baadaye na haujaunganishwa. Hakuna miamala halisi inayofanyika.",

  // ── Assistant ────────────────────────────────────────────────────────
  "Close assistant": "Funga msaidizi",
  "Open campaign assistant": "Fungua msaidizi wa kampeni",
  "Campaign Assistant": "Msaidizi wa Kampeni",
  "Answers from campaign content": "Majibu kutoka maudhui ya kampeni",
  "Ask a question…": "Uliza swali…",
  "Hi! I'm the campaign assistant. Ask me about the record, manifesto, the 2027 election, or how to get involved.":
    "Habari! Mimi ni msaidizi wa kampeni. Niulize kuhusu rekodi, ilani, uchaguzi wa 2027, au jinsi ya kujiunga.",
  "What is the Hustler Fund?": "Hustler Fund ni nini?",
  "When is the election?": "Uchaguzi ni lini?",
  "How do I donate?": "Ninachangiaje?",
  "I can help with questions about the record, manifesto, promises, the 2027 election, the party, campaign visits, and how to get involved. Try asking about the Hustler Fund, SHA, housing, or the manifesto.":
    "Ninaweza kusaidia na maswali kuhusu rekodi, ilani, ahadi, uchaguzi wa 2027, chama, ziara za kampeni, na jinsi ya kujiunga. Jaribu kuuliza kuhusu Hustler Fund, SHA, nyumba, au ilani.",
  "The Hustler Fund provides collateral-free micro-loans directly via mobile phone. As reported, it has disbursed around Sh80 billion and built a savings culture among millions of previously unbanked Kenyans. See My Record for the sourced details.":
    "Hustler Fund inatoa mikopo midogo isiyohitaji dhamana moja kwa moja kupitia simu. Kama ilivyoripotiwa, imetoa takriban Sh80 bilioni na kujenga utamaduni wa akiba miongoni mwa mamilioni ya Wakenya waliokuwa hawana huduma za benki. Angalia Rekodi Yangu kwa maelezo yaliyothibitishwa.",
  "The Social Health Authority (SHA) replaced NHIF on 1 October 2024, moving Kenya toward needs-based universal coverage, with over 27 million registered. Cancer cover has been enhanced to Sh800,000 per household. More on My Record.":
    "Social Health Authority (SHA) ilichukua nafasi ya NHIF Oktoba 1, 2024, ikisogeza Kenya kuelekea bima ya wote inayozingatia mahitaji, huku zaidi ya milioni 27 wakiwa wamesajiliwa. Bima ya saratani imeongezwa hadi Sh800,000 kwa kila kaya. Zaidi kwenye Rekodi Yangu.",
  "The Affordable Housing Programme is delivering dignified homes and on-site jobs across the counties, with tens of thousands of units under construction. See What We've Delivered and Major Projects.":
    "Mpango wa Nyumba za Bei Nafuu unatoa nyumba za heshima na kazi papo hapo katika kaunti, huku makumi ya maelfu ya nyumba zikijengwa. Angalia Tuliyotimiza na Miradi Mikuu.",
  "The subsidised fertiliser programme cut input costs by more than half, helping lift national maize harvests. Details and sources are on My Record.":
    "Mpango wa ruzuku ya mbolea ulipunguza gharama za pembejeo kwa zaidi ya nusu, ukisaidia kuinua mavuno ya kitaifa ya mahindi. Maelezo na vyanzo viko kwenye Rekodi Yangu.",
  "My Manifesto is the Bottom-Up Economic Transformation Agenda — five pillars: agriculture, the MSME/hustler economy, housing, healthcare, and the digital superhighway. Read the full breakdown on the My Manifesto page.":
    "Ilani Yangu ni Mpango wa Mabadiliko ya Kiuchumi wa Chini Kwenda Juu — nguzo tano: kilimo, uchumi wa biashara ndogo/wanaohangaika, nyumba, afya, na barabara kuu ya kidijitali. Soma maelezo kamili kwenye ukurasa wa Ilani Yangu.",
  "The next General Election is confirmed by the IEBC for Tuesday, 10 August 2027. The Election Center has a live countdown and the full 2022 result mapped county by county.":
    "Uchaguzi Mkuu ujao umethibitishwa na IEBC kufanyika Jumanne, Agosti 10, 2027. Kituo cha Uchaguzi kina kihesabu cha moja kwa moja na matokeo kamili ya 2022 yaliyopangwa kwenye ramani kaunti kwa kaunti.",
  "The United Democratic Alliance (UDA) is the party behind the movement — symbol: the wheelbarrow; slogan: 'Kazi ni Kazi' (every hustle matters). See The Party page.":
    "United Democratic Alliance (UDA) ndicho chama kilicho nyuma ya harakati hii — ishara: gurudumu la mkono; kaulimbiu: 'Kazi ni Kazi'. Angalia ukurasa wa Chama.",
  "You can support the movement via M-Pesa, card, or PayPal on the Donate page. (In this demo, payments are a UI scaffold and are not processed.)":
    "Unaweza kuunga mkono harakati kupitia M-Pesa, kadi, au PayPal kwenye ukurasa wa Changia. (Katika onyesho hili, malipo ni muundo tu na hayachakatwi.)",
  "The Campaign Roadmap shows where the movement has been and where it's going next, on an interactive map of all 47 counties.":
    "Ramani ya Kampeni inaonyesha mahali harakati imekuwa na inakoelekea, kwenye ramani shirikishi ya kaunti zote 47.",

  // ── Updates / blog ───────────────────────────────────────────────────
  "All updates": "Habari Zote",
  "Read update": "Soma Habari",
  Nairobi: "Nairobi",
  "Hustler Fund": "Hustler Fund",
  SHA: "SHA",
  "Handing Over the Keys: A Housing Milestone in Nairobi":
    "Kukabidhi Funguo: Hatua ya Nyumba Nairobi",
  "Families moved into newly completed units this week as the Affordable Housing Programme crossed another delivery milestone.":
    "Familia zilihamia nyumba mpya zilizokamilika wiki hii huku Mpango wa Nyumba za Bei Nafuu ukivuka hatua nyingine ya utoaji.",
  "This week we handed over keys to families at one of our flagship housing settlements — a moment that captures what the bottom-up agenda is about: dignity, ownership, and a stake in the nation's future.":
    "Wiki hii tulikabidhi funguo kwa familia katika mojawapo ya makazi yetu makuu ya nyumba — wakati unaoeleza maana ya ajenda ya chini kwenda juu: heshima, umiliki, na hisa katika mustakabali wa taifa.",
  "Every unit delivered is a job created on-site and a family lifted out of the rent trap. We remain focused on scaling delivery across all 47 counties.":
    "Kila nyumba inayotolewa ni kazi iliyoundwa papo hapo na familia iliyotolewa kwenye mtego wa kodi. Tunaendelea kuzingatia kupanua utoaji katika kaunti zote 47.",
  "To every hustler saving toward a home: this programme is built for you.":
    "Kwa kila mhangaikaji anayeweka akiba kwa nyumba: mpango huu umejengwa kwa ajili yako.",
  "The Hustler Fund: Financial Inclusion at Scale":
    "Hustler Fund: Ujumuishaji wa Kifedha kwa Kiwango Kikubwa",
  "Billions disbursed, millions of savers — a look at how collateral-free credit is reshaping the informal economy.":
    "Mabilioni yametolewa, mamilioni ya waweka akiba — mtazamo wa jinsi mkopo usiohitaji dhamana unavyobadilisha uchumi usio rasmi.",
  "When we launched the Hustler Fund, the goal was simple: put affordable, collateral-free credit in the hands of the people the old system ignored.":
    "Tulipoanzisha Hustler Fund, lengo lilikuwa rahisi: kuweka mkopo wa bei nafuu, usiohitaji dhamana, mikononi mwa watu ambao mfumo wa zamani uliwapuuza.",
  "Today, millions of Kenyans have borrowed, repaid, and — importantly — saved. That savings culture is the foundation of a stronger, more inclusive economy.":
    "Leo, mamilioni ya Wakenya wamekopa, wamerudisha, na — muhimu zaidi — wameweka akiba. Utamaduni huo wa akiba ndio msingi wa uchumi imara zaidi na jumuishi zaidi.",
  "The next phase is graduation: moving successful borrowers into larger SACCO and bank facilities so they can grow.":
    "Hatua inayofuata ni kuhitimu: kuwahamisha wakopaji waliofanikiwa kwenye huduma kubwa zaidi za SACCO na benki ili wakue.",
  "Healthcare That Follows the Patient, Not the Payslip":
    "Huduma ya Afya Inayomfuata Mgonjwa, Sio Mshahara",
  "The Social Health Authority is extending needs-based coverage to households that were previously left behind.":
    "Social Health Authority inapanua bima inayozingatia mahitaji kwa kaya ambazo hapo awali ziliachwa nyuma.",
  "Universal health coverage is not a slogan — it is a promise that no family should be bankrupted by illness.":
    "Bima ya afya kwa wote sio kaulimbiu — ni ahadi kwamba hakuna familia inayopaswa kufilisika kwa sababu ya ugonjwa.",
  "Through the Social Health Authority, we are registering households, contracting facilities, and enhancing cover for the most catastrophic costs, including cancer treatment.":
    "Kupitia Social Health Authority, tunasajili kaya, kuajiri vituo vya huduma, na kuboresha bima kwa gharama kubwa zaidi, ikiwemo matibabu ya saratani.",
  "There is more work to do, and we are doing it — transparently and with the patient at the centre.":
    "Kuna kazi zaidi ya kufanya, na tunaifanya — kwa uwazi na mgonjwa akiwa kiini.",
  "From Subsidy to Surplus: A Record Harvest Season":
    "Kutoka Ruzuku hadi Ziada: Msimu wa Mavuno ya Rekodi",
  "Subsidised inputs and better logistics are translating into fuller granaries for smallholder farmers.":
    "Pembejeo za ruzuku na usafirishaji bora zinageuka kuwa ghala zilizojaa zaidi kwa wakulima wadogo.",
  "Cutting the cost of fertiliser was never about politics — it was about restoring the dignity and profitability of the smallholder farmer.":
    "Kupunguza gharama ya mbolea haikuwa kamwe kuhusu siasa — ilikuwa kuhusu kurejesha heshima na faida ya mkulima mdogo.",
  "With inputs more affordable and delivered closer to the farm, harvests are up and more families are selling surplus rather than borrowing to eat.":
    "Pembejeo zikiwa nafuu zaidi na kutolewa karibu na shamba, mavuno yameongezeka na familia nyingi zaidi zinauza ziada badala ya kukopa ili kula.",
  "Food security is national security, and we are building it season by season.":
    "Usalama wa chakula ni usalama wa taifa, na tunaujenga msimu kwa msimu.",

  // ── Party page ───────────────────────────────────────────────────────
  Founded: "Ilianzishwa",
  Symbol: "Ishara",
  Slogan: "Kaulimbiu",
  "Party Leader": "Kiongozi wa Chama",
  Coalition: "Muungano",
  "The Wheelbarrow": "Gurudumu la Mkono",
  "Representing the worth, respect, and dignity of work — the tools of the hustler economy, elevated to a national symbol.":
    "Ikiwakilisha thamani, heshima, na utu wa kazi — zana za uchumi wa wanaohangaika, zilizoinuliwa kuwa ishara ya kitaifa.",
  '"A job is a job" — every hustle matters, none is beneath dignity.':
    '"Kazi ni Kazi" — kila hangaiko ni muhimu, hakuna lililo chini ya heshima.',
  Yellow: "Njano",
  Black: "Nyeusi",
  Green: "Kijani",
  White: "Nyeupe",
  "Become a card-carrying member.": "Kuwa mwanachama rasmi.",
  "Join the grassroots structure that put the wheelbarrow on the national ballot.":
    "Jiunge na muundo wa kimsingi ulioweka gurudumu la mkono kwenye karatasi ya kupiga kura ya kitaifa.",
  "Join UDA": "Jiunge na UDA",
  "Bottom-Up, Not Trickle-Down": "Kutoka Chini, Sio Kudondoka Kutoka Juu",
  "An economic philosophy that channels resources to the base of the pyramid first — the mama mboga, the boda boda rider, the smallholder farmer.":
    "Falsafa ya kiuchumi inayoelekeza rasilimali kwa msingi wa piramidi kwanza — mama mboga, dereva wa boda boda, mkulima mdogo.",
  "Dignity of Work": "Utu wa Kazi",
  "No hustle is beneath dignity. The wheelbarrow, not the boardroom, is UDA's founding symbol.":
    "Hakuna hangaiko lililo chini ya heshima. Gurudumu la mkono, sio chumba cha bodi, ndicho kiashiria cha kuanzishwa kwa UDA.",
  "Grassroots Democracy": "Demokrasia ya Kimsingi",
  "A party built on ward-level organizing and direct nominations, not dynastic gatekeeping.":
    "Chama kilichojengwa kwa mpangilio wa ngazi ya kata na uteuzi wa moja kwa moja, sio ulinzi wa kifamilia.",
  "Inclusive Nationhood": "Utaifa Jumuishi",
  "A coalition-first approach to governance that reaches across Kenya's regions and communities.":
    "Mtazamo wa muungano kwanza katika utawala unaofikia maeneo na jamii zote za Kenya.",

  // ── My Record: pillar labels ─────────────────────────────────────────
  "All Pillars": "Nguzo Zote",
  "Economic Transformation": "Mabadiliko ya Kiuchumi",
  "Universal Healthcare": "Huduma ya Afya kwa Wote",
  "Affordable Housing": "Nyumba za Bei Nafuu",
  "Global Diplomacy": "Diplomasia ya Kimataifa",

  // ── Milestones ───────────────────────────────────────────────────────
  "Hustler Fund Disburses Sh80 Billion": "Hustler Fund Yatoa Sh80 Bilioni",
  "Since its November 2022 launch, the Hustler Fund has grown from a collateral-free micro-loan platform into a savings and credit-building program reaching millions of previously unbanked Kenyans.":
    "Tangu kuzinduliwa Novemba 2022, Hustler Fund imekua kutoka jukwaa la mikopo midogo isiyohitaji dhamana hadi mpango wa akiba na ujenzi wa mkopo unaofikia mamilioni ya Wakenya waliokuwa hawana huduma za benki.",
  "Disbursed as of November 2025": "Iliyotolewa hadi Novemba 2025",
  "Fertilizer Subsidy Cuts Farmer Costs by 58%":
    "Ruzuku ya Mbolea Yapunguza Gharama za Wakulima kwa 58%",
  "Subsidized fertilizer distribution grew more than sixfold between 2022 and 2024 as the price per bag fell from KES 6,000 to KES 2,500 — a key driver behind national maize harvests rising from 44 million to 67 million bags.":
    "Usambazaji wa mbolea ya ruzuku uliongezeka zaidi ya mara sita kati ya 2022 na 2024 bei ya kila mfuko ilipopungua kutoka KES 6,000 hadi KES 2,500 — kichocheo kikuu cha mavuno ya kitaifa ya mahindi kuongezeka kutoka mifuko milioni 44 hadi milioni 67.",
  "Bags distributed in 2024": "Mifuko iliyosambazwa 2024",
  "Social Health Authority Replaces NHIF":
    "Social Health Authority Yachukua Nafasi ya NHIF",
  "On 1 October 2024 the Social Health Authority officially took over from the National Hospital Insurance Fund, moving Kenya toward needs-based universal coverage rather than a fragmented insurance model.":
    "Mnamo Oktoba 1, 2024, Social Health Authority ilichukua rasmi nafasi ya National Hospital Insurance Fund, ikisogeza Kenya kuelekea bima ya wote inayozingatia mahitaji badala ya mfumo wa bima uliogawanyika.",
  "Kenyans registered under SHA": "Wakenya waliojiandikisha SHA",
  "Cancer Treatment Cover Raised to Sh800,000":
    "Bima ya Matibabu ya Saratani Yaongezwa hadi Sh800,000",
  "Responding to the rising cost of sustained cancer care, President Ruto announced the SHA cancer benefits package would rise from Sh550,000 to Sh800,000 per household, effective 1 December 2025.":
    "Akijibu gharama inayoongezeka ya matibabu endelevu ya saratani, Rais Ruto alitangaza kifurushi cha manufaa ya saratani cha SHA kitaongezeka kutoka Sh550,000 hadi Sh800,000 kwa kila kaya, kuanzia Desemba 1, 2025.",
  "Cancer cover per household": "Bima ya saratani kwa kila kaya",
  "Affordable Housing Programme Scales Nationwide":
    "Mpango wa Nyumba za Bei Nafuu Wapanuka Kitaifa",
  "The government's flagship housing drive has moved from groundbreaking to delivery, with thousands of units complete and tens of thousands more under active construction across the country.":
    "Mpango mkuu wa nyumba wa serikali umehama kutoka uwekaji msingi hadi utoaji, huku maelfu ya nyumba yakikamilika na makumi ya maelfu zaidi yakiwa ujenzini kote nchini.",
  "Units under construction nationwide": "Nyumba zinazojengwa kitaifa",
  "910 Units Handed Over at Makasembo, Kisumu":
    "Nyumba 910 Zakabidhiwa Makasembo, Kisumu",
  "The LAPFUND Makasembo Affordable Housing Project delivered 910 completed units with groundbreaking held for a third phase — one of the programme's largest single handovers to date.":
    "Mradi wa Nyumba za Bei Nafuu wa LAPFUND Makasembo ulikabidhi nyumba 910 zilizokamilika huku uwekaji msingi wa awamu ya tatu ukifanyika — mojawapo ya makabidhiano makubwa zaidi ya mpango huu hadi sasa.",
  "Units delivered, Kisumu": "Nyumba zilizokabidhiwa, Kisumu",
  "Represents Kenya at the UN Food Systems Summit":
    "Awakilisha Kenya kwenye Mkutano wa Umoja wa Mataifa wa Mifumo ya Chakula",
  "President Ruto addressed the 2nd UN Food Systems Summit in Addis Ababa, pressing the case for accelerated global action on hunger and climate-smart agriculture.":
    "Rais Ruto alihutubia Mkutano wa Pili wa Umoja wa Mataifa wa Mifumo ya Chakula huko Addis Ababa, akisisitiza haja ya hatua za haraka za kimataifa dhidi ya njaa na kilimo kinachozingatia hali ya hewa.",
  "UN Food Systems Summit attended": "Mkutano wa Mifumo ya Chakula uliohudhuriwa",
  "Kenya to Co-Chair 2026 Africa Clean Cooking Summit":
    "Kenya Kuongoza Pamoja Mkutano wa Upishi Safi Afrika 2026",
  "Building on the $2.2 billion mobilized at the 2024 Paris summit, Kenya will co-chair the second major Summit on Clean Cooking in Africa in Nairobi, alongside the US, Norway, and the IEA.":
    "Kwa kujengea juu ya dola bilioni 2.2 zilizokusanywa kwenye mkutano wa Paris wa 2024, Kenya itaongoza pamoja Mkutano wa Pili Mkuu wa Upishi Safi Afrika mjini Nairobi, pamoja na Marekani, Norway, na IEA.",
  "Mobilized at the 2024 Paris summit": "Zilizokusanywa kwenye mkutano wa Paris 2024",

  // ── Journey to Presidency ────────────────────────────────────────────
  "Born in Sambut, Uasin Gishu": "Alizaliwa Sambut, Uasin Gishu",
  "Born 21 December 1966 to a farming family of Kipsigis and Nandi heritage in Sambut village — a childhood of selling chicken by the roadside that would later define his 'hustler' identity.":
    "Alizaliwa Desemba 21, 1966 katika familia ya wakulima yenye asili ya Kipsigis na Nandi kijiji cha Sambut — utoto wa kuuza kuku kando ya barabara ambao baadaye ungeelezea utambulisho wake wa 'hustler'.",
  "University of Nairobi, B.Sc. Botany & Zoology":
    "Chuo Kikuu cha Nairobi, B.Sc. Botania na Zoolojia",
  "Graduated from the University of Nairobi. He later returned to the same institution for an M.Sc. in 2011 and a Ph.D. in Plant Ecology in 2018 — an academic record built alongside a full-time political career.":
    "Alihitimu kutoka Chuo Kikuu cha Nairobi. Baadaye alirudi chuo hicho hicho kwa Shahada ya Uzamili mwaka 2011 na Uzamivu katika Ikolojia ya Mimea mwaka 2018 — rekodi ya kitaaluma iliyojengwa sambamba na kazi ya kisiasa ya wakati wote.",
  "Co-Founds Youth for KANU '92": "Aanzisha Pamoja Vijana kwa KANU '92",
  "Co-founded the youth mobilization movement backing President Daniel arap Moi's re-election — the first rung of a political career built from grassroots organizing.":
    "Alianzisha pamoja harakati ya uhamasishaji vijana iliyounga mkono kuchaguliwa tena kwa Rais Daniel arap Moi — hatua ya kwanza ya kazi ya kisiasa iliyojengwa kutoka mpangilio wa kimsingi.",
  "Elected to Parliament, Eldoret North": "Achaguliwa Bungeni, Eldoret Kaskazini",
  "Won the Eldoret North parliamentary seat, re-elected in 2002, beginning three decades of continuous elected office.":
    "Alishinda kiti cha ubunge cha Eldoret Kaskazini, akachaguliwa tena mwaka 2002, akianzisha miongo mitatu ya wadhifa endelevu wa uchaguzi.",
  "Cabinet Minister": "Waziri wa Baraza la Mawaziri",
  "Served as Minister for Home Affairs, later Minister for Agriculture, and Minister for Higher Education — hands-on stewardship of portfolios now central to his presidency.":
    "Alihudumu kama Waziri wa Mambo ya Ndani, baadaye Waziri wa Kilimo, na Waziri wa Elimu ya Juu — usimamizi wa moja kwa moja wa idara ambazo sasa ni kiini cha urais wake.",
  "Sworn in as Deputy President": "Aapishwa kama Naibu Rais",
  "Inaugurated as Kenya's Deputy President alongside President Uhuru Kenyatta at Kasarani Stadium on 9 April 2013, having run on the Jubilee ticket dubbed 'UhuRuto.' Re-elected in 2017.":
    "Aliapishwa kama Naibu Rais wa Kenya pamoja na Rais Uhuru Kenyatta katika Uwanja wa Kasarani mnamo Aprili 9, 2013, baada ya kugombea kwa tiketi ya Jubilee iliyoitwa 'UhuRuto.' Alichaguliwa tena mwaka 2017.",
  "Founds the United Democratic Alliance": "Aanzisha United Democratic Alliance",
  "Allies register the United Democratic Alliance in December 2020 as Ruto's new political vehicle, replacing the bull symbol of the old Party for Development and Reforms with the wheelbarrow — a bottom-up movement for hustlers and traders.":
    "Washirika waliandikisha United Democratic Alliance Desemba 2020 kama gari jipya la kisiasa la Ruto, likibadilisha ishara ya ng'ombe dume ya chama cha zamani cha Development and Reforms na gurudumu la mkono — harakati ya chini kwenda juu kwa wanaohangaika na wafanyabiashara.",
  "Elected President of Kenya": "Achaguliwa Rais wa Kenya",
  "Declared winner of the 9 August 2022 general election by the IEBC with 50.5% of the vote, a result upheld by the Supreme Court on 5 September. Sworn in as Kenya's fifth President at Kasarani Stadium on 13 September 2022.":
    "Alitangazwa mshindi wa uchaguzi mkuu wa Agosti 9, 2022 na IEBC kwa asilimia 50.5 ya kura, matokeo yaliyothibitishwa na Mahakama Kuu Septemba 5. Aliapishwa kama Rais wa tano wa Kenya katika Uwanja wa Kasarani Septemba 13, 2022.",

  // ── Manifesto pillars ────────────────────────────────────────────────
  "Agricultural Transformation & Food Security":
    "Mabadiliko ya Kilimo na Usalama wa Chakula",
  "Rebuilding the backbone of the rural economy — inputs, credit, and markets designed around the smallholder farmer, not around cartels.":
    "Kujenga upya uti wa mgongo wa uchumi wa mashambani — pembejeo, mikopo, na masoko yaliyoundwa kumzunguka mkulima mdogo, sio makabaila.",
  "Subsidized, e-verified fertilizer and certified seed for smallholders":
    "Mbolea ya ruzuku iliyothibitishwa kielektroniki na mbegu zilizoidhinishwa kwa wakulima wadogo",
  "Warehouse receipt financing so farmers can bank their harvest":
    "Ufadhili wa stakabadhi za ghala ili wakulima waweke mavuno yao benki",
  "Revival of collapsed cooperatives, factories, and produce boards":
    "Ufufuaji wa vyama vya ushirika, viwanda, na mabaraza ya mazao yaliyoporomoka",
  "MSME Economy & Financing": "Uchumi na Ufadhili wa Biashara Ndogo Ndogo",
  "The 85% of Kenya's workforce in the informal sector are the real economy — this pillar puts collateral-free capital directly in their hands.":
    "Asilimia 85 ya nguvu kazi ya Kenya katika sekta isiyo rasmi ndio uchumi halisi — nguzo hii inaweka mtaji usiohitaji dhamana moja kwa moja mikononi mwao.",
  "The Hustler Fund: collateral-free micro-loans via mobile phone":
    "Hustler Fund: mikopo midogo isiyohitaji dhamana kupitia simu",
  "A dedicated MSME credit guarantee scheme":
    "Mpango maalum wa dhamana ya mkopo kwa biashara ndogo ndogo",
  "Formalization pathways that don't punish informal traders":
    "Njia za urasimishaji zisizowaadhibu wafanyabiashara wa sekta isiyo rasmi",
  "Housing & Settlement": "Nyumba na Makazi",
  "Dignity over survival — a nationwide construction drive that builds homes and creates jobs on-site, county by county.":
    "Heshima kuliko kuishi tu — mpango wa ujenzi wa kitaifa unaojenga nyumba na kuunda kazi papo hapo, kaunti kwa kaunti.",
  "Affordable Housing Programme units across all 47 counties":
    "Nyumba za Mpango wa Bei Nafuu katika kaunti zote 47",
  "Public land converted into planned, serviced settlements":
    "Ardhi ya umma iliyogeuzwa kuwa makazi yaliyopangwa na kuhudumiwa",
  "Construction-sector jobs prioritized for local youth":
    "Kazi za sekta ya ujenzi zinazopewa kipaumbele kwa vijana wa eneo husika",
  "Healthcare Access": "Upatikanaji wa Huduma za Afya",
  "Universal coverage that follows the patient, not the payslip — replacing a fragmented NHIF with needs-based national insurance.":
    "Bima ya wote inayomfuata mgonjwa, sio mshahara — ikibadilisha NHIF iliyogawanyika na bima ya kitaifa inayozingatia mahitaji.",
  "The Social Health Authority (SHA): universal registration and coverage":
    "Social Health Authority (SHA): usajili na bima kwa wote",
  "A dedicated fund for specialized and catastrophic-cost surgery":
    "Mfuko maalum kwa upasuaji maalum na wa gharama kubwa",
  "Primary care expansion through community health promoters":
    "Upanuzi wa huduma za msingi kupitia wahamasishaji wa afya jamii",
  "Digital Superhighway & Creative Economy":
    "Barabara Kuu ya Kidijitali na Uchumi wa Ubunifu",
  "Connectivity and content as economic infrastructure — putting Kenya's youth and creators onto the global digital economy.":
    "Muunganisho na maudhui kama miundombinu ya kiuchumi — kuwaweka vijana na wabunifu wa Kenya kwenye uchumi wa kidijitali wa dunia.",
  "Nationwide fibre rollout and affordable last-mile connectivity":
    "Usambazaji wa nyaya za mtandao kitaifa na muunganisho wa bei nafuu wa hatua ya mwisho",
  "Digital jobs and outsourcing hubs for young graduates":
    "Kazi za kidijitali na vituo vya kazi za nje kwa vijana wahitimu",
  "Legal and financial infrastructure for the creative industries":
    "Miundombinu ya kisheria na kifedha kwa tasnia za ubunifu",

  // ── Promises ─────────────────────────────────────────────────────────
  "Complete Universal Health Coverage": "Kukamilisha Bima ya Afya kwa Wote",
  "Every Kenyan household registered under SHA, with primary care available within 5km of every home and zero catastrophic out-of-pocket surgery bills.":
    "Kila kaya ya Kikenya imesajiliwa chini ya SHA, huduma za msingi zikiwepo ndani ya kilomita 5 za kila nyumba na hakuna bili kubwa za upasuaji za mfukoni.",
  "By 2027": "Ifikapo 2027",
  "One Million Affordable Homes": "Nyumba Milioni Moja za Bei Nafuu",
  "Scale the Affordable Housing Programme to one million delivered units, with integrated markets, schools, and green space in every settlement.":
    "Kupanua Mpango wa Nyumba za Bei Nafuu hadi nyumba milioni moja zilizokamilika, zenye masoko, shule, na maeneo ya kijani katika kila makazi.",
  "By 2030": "Ifikapo 2030",
  "Hustler Fund Graduation Pathways": "Njia za Kuhitimu za Hustler Fund",
  "Move successful Hustler Fund borrowers into formal SACCO and bank credit lines, turning micro-loans into growing small businesses.":
    "Kuwahamisha wakopaji waliofanikiwa wa Hustler Fund kwenye mikopo rasmi ya SACCO na benki, kugeuza mikopo midogo kuwa biashara ndogo zinazokua.",
  Ongoing: "Inaendelea",
  "End Reliance on Food Imports": "Kukomesha Utegemezi wa Chakula cha Kuagiza",
  "Achieve staple food self-sufficiency through irrigation expansion, input subsidies, and value-addition infrastructure for smallholder farmers.":
    "Kufikia kujitosheleza kwa chakula kikuu kupitia upanuzi wa umwagiliaji, ruzuku za pembejeo, na miundombinu ya kuongeza thamani kwa wakulima wadogo.",
  "One Million Digital Jobs": "Kazi Milioni Moja za Kidijitali",
  "Connect one million young Kenyans to the global digital economy through outsourcing hubs, fibre rollout, and creative-economy financing.":
    "Kuunganisha vijana milioni moja wa Kikenya na uchumi wa kidijitali wa dunia kupitia vituo vya kazi za nje, usambazaji wa mtandao, na ufadhili wa uchumi wa ubunifu.",
  "Clean Cooking for Every Household": "Upishi Safi kwa Kila Kaya",
  "Continue the Clean Cooking Africa Initiative to transition Kenyan households away from harmful biomass fuels toward affordable clean energy.":
    "Kuendeleza Mpango wa Upishi Safi Afrika kuhamisha kaya za Kikenya kutoka nishati hatari za mimea kuelekea nishati safi ya bei nafuu.",
  "By 2028": "Ifikapo 2028",

  // ── Major Projects ───────────────────────────────────────────────────
  Infrastructure: "Miundombinu",
  Economy: "Uchumi",
  Digital: "Kidijitali",
  Education: "Elimu",
  Healthcare: "Afya",
  Nationwide: "Kote Nchini",
  Progress: "Maendeleo",
  Planning: "Kupanga",
  Procurement: "Ununuzi",
  Construction: "Ujenzi",
  Commissioning: "Uzinduzi",
  "13,000 units by 2027": "Nyumba 13,000 ifikapo 2027",
  "60,000-seat stadium": "Uwanja wa viti 60,000",
  "9,100 units total": "Jumla ya nyumba 9,100",
  "Industrial & logistics hub": "Kituo cha viwanda na usafirishaji",
  "One park per county": "Bustani moja kwa kila kaunti",
  "100,000km fibre": "Kilomita 100,000 za mtandao",
  "Desalination & storage": "Uondoaji chumvi na uhifadhi",
  "Constituency-level TVETs": "TVET za ngazi ya jimbo",
  "One of the largest single housing settlements under the Affordable Housing Programme, replacing informal structures with serviced homes.":
    "Mojawapo ya makazi makubwa zaidi ya nyumba chini ya Mpango wa Nyumba za Bei Nafuu, ikibadilisha miundo isiyo rasmi na nyumba zenye huduma.",
  "A modern sporting and events complex to anchor Kenya's hosting ambitions and the creative economy.":
    "Jengo la kisasa la michezo na matukio kuimarisha malengo ya Kenya ya kuandaa matukio na uchumi wa ubunifu.",
  "Expansion of the LAPFUND Makasembo estate following the handover of earlier phases.":
    "Upanuzi wa makazi ya LAPFUND Makasembo kufuatia ukabidhiwaji wa awamu za awali.",
  "A coastal special economic zone intended to attract manufacturing and create export-oriented jobs.":
    "Eneo maalum la kiuchumi la pwani linalolenga kuvutia uzalishaji na kuunda kazi za kuuza nje.",
  "Value-addition parks to process agricultural produce closer to the farm and cut post-harvest losses.":
    "Bustani za kuongeza thamani kuchakata mazao ya kilimo karibu na shamba na kupunguza upotevu baada ya mavuno.",
  "Extending the national fibre backbone to wards and villages to power the digital economy.":
    "Kupanua uti wa mgongo wa mtandao wa kitaifa hadi kata na vijiji kuwezesha uchumi wa kidijitali.",
  "Water infrastructure to address chronic shortages along the coast and support tourism and agriculture.":
    "Miundombinu ya maji kushughulikia uhaba sugu pwani na kusaidia utalii na kilimo.",
  "New technical and vocational training centres to build the skilled workforce the economy needs.":
    "Vituo vipya vya mafunzo ya kiufundi na ufundi kujenga nguvu kazi yenye ujuzi inayohitajika na uchumi.",

  // ── What We've Delivered ─────────────────────────────────────────────
  "All Sectors": "Sekta Zote",
  "Universal Health Coverage Rollout": "Uzinduzi wa Bima ya Afya kwa Wote",
  "The Social Health Authority replaced NHIF, extending needs-based coverage to households across all 47 counties.":
    "Social Health Authority ilichukua nafasi ya NHIF, ikipanua bima inayozingatia mahitaji kwa kaya katika kaunti zote 47.",
  "Units under construction": "Nyumba zinazojengwa",
  "A nationwide construction drive delivering dignified homes and on-site jobs, county by county.":
    "Mpango wa ujenzi wa kitaifa unaotoa nyumba za heshima na kazi papo hapo, kaunti kwa kaunti.",
  "Hustler Fund Disbursements": "Utoaji wa Hustler Fund",
  "Disbursed to borrowers": "Iliyotolewa kwa wakopaji",
  "Collateral-free micro-credit delivered to millions of previously unbanked traders and hustlers.":
    "Mkopo mdogo usiohitaji dhamana uliotolewa kwa mamilioni ya wafanyabiashara na wanaohangaika waliokuwa hawana huduma za benki.",
  "Subsidised Fertiliser Programme": "Mpango wa Ruzuku ya Mbolea",
  "Bags distributed": "Mifuko iliyosambazwa",
  "Input costs cut by more than half, helping lift national maize harvests to record levels.":
    "Gharama za pembejeo zimepungua kwa zaidi ya nusu, zikisaidia kuinua mavuno ya kitaifa ya mahindi hadi viwango vya rekodi.",
  "University & TVET Funding Model": "Mfumo wa Ufadhili wa Chuo Kikuu na TVET",
  "Students supported": "Wanafunzi walioungwa mkono",
  "A restructured, needs-based higher-education funding model prioritising the most vulnerable students.":
    "Mfumo wa ufadhili wa elimu ya juu uliopangwa upya, unaozingatia mahitaji na kuwapa kipaumbele wanafunzi walio hatarini zaidi.",
  "Road Network Expansion": "Upanuzi wa Mtandao wa Barabara",
  "Roads under delivery": "Barabara zinazojengwa",
  "New and rehabilitated road corridors connecting agricultural zones to markets.":
    "Njia mpya na zilizorekebishwa za barabara zinazounganisha maeneo ya kilimo na masoko.",
  "Digital Superhighway & Jobs": "Barabara Kuu ya Kidijitali na Kazi",
  "Digital jobs targeted": "Kazi za kidijitali zinazolengwa",
  "Fibre rollout and digital hubs connecting young Kenyans to the global online economy.":
    "Usambazaji wa mtandao na vituo vya kidijitali vinavyounganisha vijana wa Kikenya na uchumi wa mtandaoni wa dunia.",
  "Enhanced Cancer Cover": "Bima Iliyoboreshwa ya Saratani",
  "Cover per household": "Bima kwa kila kaya",
  "SHA's cancer benefit raised to ease the cost of sustained, specialised treatment.":
    "Manufaa ya saratani ya SHA yameongezwa kupunguza gharama ya matibabu endelevu na maalum.",
  "Modern Markets Programme": "Mpango wa Masoko ya Kisasa",
  "Markets planned & built": "Masoko yaliyopangwa na kujengwa",
  "Modern, sanitary market infrastructure supporting mama mbogas and small traders.":
    "Miundombinu ya kisasa na safi ya soko inayosaidia mama mboga na wafanyabiashara wadogo.",

  // ── Why Ruto: demographics / calculator ─────────────────────────────
  "Smallholder Farmer": "Mkulima Mdogo",
  "Boda Boda Rider": "Dereva wa Boda Boda",
  "Mama Mboga / Trader": "Mama Mboga / Mfanyabiashara",
  "Student / Graduate": "Mwanafunzi / Mhitimu",
  "Construction Worker": "Mfanyakazi wa Ujenzi",
  "Patient / Caregiver": "Mgonjwa / Mlezi",
  "Subsidized Fertilizer Access": "Upatikanaji wa Mbolea ya Ruzuku",
  "E-verified depots cut input costs by up to 50%":
    "Maghala yaliyothibitishwa kielektroniki hupunguza gharama za pembejeo hadi 50%",
  "Warehouse Receipt Financing": "Ufadhili wa Stakabadhi za Ghala",
  "Bank your harvest as collateral for fair-rate credit":
    "Weka mavuno yako kama dhamana kwa mkopo wa riba nafuu",
  "SHA Coverage": "Bima ya SHA",
  "Family healthcare secured without depleting farm income":
    "Huduma ya afya ya familia imehakikishwa bila kupunguza mapato ya shamba",
  "Hustler Fund Micro-Loans": "Mikopo Midogo ya Hustler Fund",
  "Collateral-free credit for bike maintenance & fuel":
    "Mkopo usiohitaji dhamana kwa matengenezo ya pikipiki na mafuta",
  "SHA Accident Cover": "Bima ya Ajali ya SHA",
  "Full-cost trauma and surgical coverage on the road":
    "Bima kamili ya majeraha na upasuaji barabarani",
  "Boda Boda SACCO Support": "Msaada wa SACCO ya Boda Boda",
  "Pathways to bike ownership through group savings":
    "Njia za kumiliki pikipiki kupitia akiba za kikundi",
  "Hustler Fund Working Capital": "Mtaji wa Kufanyia Kazi wa Hustler Fund",
  "Same-day mobile loans to restock inventory":
    "Mikopo ya simu ya siku hiyo hiyo kuongeza bidhaa",
  "Market Infrastructure": "Miundombinu ya Soko",
  "Modern, sanitary market stalls under county upgrades":
    "Vibanda vya kisasa, safi vya sokoni chini ya maboresho ya kaunti",
  "SHA Family Cover": "Bima ya Familia ya SHA",
  "Comprehensive care without catastrophic medical debt":
    "Huduma kamili bila deni kubwa la matibabu",
  "University Funding Model": "Mfumo wa Ufadhili wa Chuo Kikuu",
  "Needs-based scholarships and loans restructured for fairness":
    "Ufadhili na mikopo iliyopangwa upya kwa haki kulingana na mahitaji",
  "Digital Jobs Programme": "Mpango wa Kazi za Kidijitali",
  "Access to the global gig economy through tech hubs":
    "Upatikanaji wa uchumi wa kazi za dunia kupitia vituo vya teknolojia",
  "First-home ownership pathways from early career":
    "Njia za kumiliki nyumba ya kwanza tangu mwanzo wa kazi",
  "Affordable Housing Jobs": "Kazi za Nyumba za Bei Nafuu",
  "Direct employment across 47-county housing sites":
    "Ajira ya moja kwa moja katika maeneo ya nyumba ya kaunti 47",
  "NSSF Enhanced Contributions": "Michango Iliyoboreshwa ya NSSF",
  "Stronger retirement security for informal labor":
    "Usalama imara wa kustaafu kwa wafanyakazi wa sekta isiyo rasmi",
  "SHA Injury Cover": "Bima ya Majeraha ya SHA",
  "On-site injury and rehabilitation fully covered":
    "Majeraha ya kazini na urekebishaji vimefunikwa kikamilifu",
  "Specialized Surgery Fund": "Mfuko wa Upasuaji Maalum",
  "Cardiac, oncology & renal procedures now covered":
    "Taratibu za moyo, saratani na figo sasa zimefunikwa",
  "Chronic Illness Management": "Usimamizi wa Magonjwa Sugu",
  "Continuous care without exhausting family savings":
    "Huduma endelevu bila kumaliza akiba ya familia",
  "Primary Care Network": "Mtandao wa Huduma za Msingi",
  "Expanded community health promoter coverage":
    "Bima iliyopanuliwa ya wahamasishaji wa afya jamii",

  // ── Stories (testimonials) ───────────────────────────────────────────
  "Civil Servant": "Mtumishi wa Serikali",
  "The Hustler Fund let me restock my vegetable stall without begging a shark for a loan. Today I supply two hotels.":
    "Hustler Fund iliniruhusu kuongeza bidhaa kwenye kibanda changu cha mboga bila kuomba mkopo kwa 'shark'. Leo ninasambaza kwa hoteli mbili.",
  "SHA covered my accident surgery in full. Two years ago that bill would have buried my family in debt.":
    "SHA ilifidia upasuaji wangu wa ajali kikamilifu. Miaka miwili iliyopita bili hiyo ingeizamisha familia yangu kwenye deni.",
  "Subsidized fertilizer doubled my maize yield in one season. I finally sell surplus instead of borrowing to eat.":
    "Mbolea ya ruzuku iliongeza mara mbili mavuno yangu ya mahindi katika msimu mmoja. Hatimaye ninauza ziada badala ya kukopa ili kula.",
  "I moved my family into our first owned home through the Affordable Housing Programme. No landlord, no more rent anxiety.":
    "Nilihamishia familia yangu kwenye nyumba yetu ya kwanza tuliyomiliki kupitia Mpango wa Nyumba za Bei Nafuu. Hakuna mwenye nyumba, hakuna tena wasiwasi wa kodi.",
  "Grew a single stall into a supply contract for 2 local hotels":
    "Alikuza kibanda kimoja kuwa mkataba wa usambazaji kwa hoteli 2 za karibu",
  "Received a KES 480,000 surgery at zero out-of-pocket cost":
    "Alipata upasuaji wa KES 480,000 bila gharama yoyote ya mfukoni",
  "Doubled maize yield after accessing subsidized inputs":
    "Aliongeza mara mbili mavuno ya mahindi baada ya kupata pembejeo za ruzuku",
  "First-time homeowner through the Affordable Housing Programme":
    "Mmiliki wa nyumba kwa mara ya kwanza kupitia Mpango wa Nyumba za Bei Nafuu",

  // ── 2027 rebuild: hero, slogan, nav ──────────────────────────────────
  "Promises made.": "Ahadi zimetolewa.",
  "Promises kept.": "Ahadi zimetimizwa.",
  "Re-elect President William Ruto — 2027.":
    "Mchague tena Rais William Ruto — 2027.",
  "Let the Work Continue": "Kazi Iendelee",
  "See the record": "Tazama rekodi",
  "supporters and counting": "wafuasi na wanaongezeka",
  "Second Term Plan": "Mpango wa Muhula wa Pili",
  Manifesto: "Ilani",
  "My Journey": "Safari Yangu",
  Elections: "Uchaguzi",
  "Join Us": "Jiunge Nasi",
  Explore: "Chunguza",
  "Everything you need,": "Kila unachohitaji,",
  "in one place.": "mahali pamoja.",
  "Kenya on the World Stage": "Kenya Katika Ulingo wa Dunia",
  Verified: "Imethibitishwa",

  // Nav descriptions (primary)
  "Every delivery, with a source you can check":
    "Kila utekelezaji, na chanzo unachoweza kuthibitisha",
  "The Bottom-Up Economic Transformation Agenda":
    "Ajenda ya Mageuzi ya Kiuchumi ya Chini-Juu",
  "2027 countdown & the 2022 result":
    "Kihesabu cha 2027 na matokeo ya 2022",
  "Ask any question about the plan — with sources":
    "Uliza swali lolote kuhusu mpango — na vyanzo",
  "Submit a question and get a real answer":
    "Wasilisha swali na upate jibu halisi",

  // ── Manifesto download ───────────────────────────────────────────────
  "Read the full plan, or take it with you.":
    "Soma mpango kamili, au uchukue nawe.",
  "Download the Manifesto (PDF)": "Pakua Ilani (PDF)",

  // ── Persona selector ─────────────────────────────────────────────────
  "For a": "Kwa",

  // ── Pledge (upgraded) ────────────────────────────────────────────────
  "Karibu! You're in.": "Karibu! Umeingia.",
  "You'll get a message when the movement comes to your county.":
    "Utapata ujumbe harakati zitakapofika kaunti yako.",
  "Confirm on WhatsApp to get updates first.":
    "Thibitisha kwenye WhatsApp kupata taarifa kwanza.",
  "Confirm on WhatsApp": "Thibitisha kwenye WhatsApp",
  "Phone number (WhatsApp)": "Nambari ya simu (WhatsApp)",
  "Free. Takes 10 seconds. No spam.":
    "Bure. Inachukua sekunde 10. Hakuna barua taka.",

  // ── Donate (M-Pesa STK flow) ─────────────────────────────────────────
  "Safaricom number for the M-Pesa prompt":
    "Nambari ya Safaricom kwa arifa ya M-Pesa",
  "You'll get an M-Pesa prompt on this number to confirm with your PIN.":
    "Utapata arifa ya M-Pesa kwenye nambari hii kuthibitisha kwa PIN yako.",
  "Send M-Pesa prompt": "Tuma arifa ya M-Pesa",
  "Check your phone": "Angalia simu yako",
  "Confirming payment…": "Inathibitisha malipo…",
  "An M-Pesa prompt has been sent to your phone. Enter your M-Pesa PIN to confirm your contribution.":
    "Arifa ya M-Pesa imetumwa kwenye simu yako. Weka PIN yako ya M-Pesa kuthibitisha mchango wako.",
  "Waiting for M-Pesa to confirm the transaction…":
    "Inasubiri M-Pesa kuthibitisha muamala…",
  "Do not close this window": "Usifunge dirisha hili",
  "Make another contribution": "Fanya mchango mwingine",
  "Transparent & compliant": "Uwazi na kufuata sheria",
  "Contributions are recorded with the disclosures required under Kenyan campaign-finance law.":
    "Michango hurekodiwa na ufichuzi unaohitajika chini ya sheria ya fedha za kampeni ya Kenya.",
  "Every shilling counts": "Kila shilingi ina thamani",
  "From printing to rallies to grassroots mobilisation — your support powers the ground game.":
    "Kutoka uchapishaji hadi mikutano hadi uhamasishaji wa mashinani — msaada wako unaendesha kazi ya ardhini.",
  "Instant receipt": "Risiti ya papo hapo",
  "You receive a confirmation and receipt the moment your contribution is processed.":
    "Unapokea uthibitisho na risiti wakati mchango wako unapochakatwa.",

  // ── Ask console (/ask) ───────────────────────────────────────────────
  "Ask anything.": "Uliza chochote.",
  "Check the source.": "Thibitisha chanzo.",
  "Ask about the plan…": "Uliza kuhusu mpango…",
  "Ask any question about the manifesto or the record. Answers come only from published campaign content, with a source you can check.":
    "Uliza swali lolote kuhusu ilani au rekodi. Majibu hutoka tu kwa maudhui ya kampeni yaliyochapishwa, na chanzo unachoweza kuthibitisha.",
  "This assistant answers only from published campaign material and cites its source. It does not use open web knowledge.":
    "Msaidizi huyu hujibu tu kutoka kwa nyenzo za kampeni zilizochapishwa na hutaja chanzo chake. Hautumii maarifa ya wavuti wazi.",
  Send: "Tuma",
  "How does SHA work?": "SHA inafanyaje kazi?",
  "What is the housing plan?": "Mpango wa nyumba ni upi?",
  "What are the manifesto pillars?": "Nguzo za ilani ni zipi?",
  "When is the 2027 election?": "Uchaguzi wa 2027 ni lini?",

  // ── Q&A town hall (/qa) ──────────────────────────────────────────────
  "Your question.": "Swali lako.",
  "A real answer.": "Jibu halisi.",
  "Submit a Question": "Wasilisha Swali",
  "Recently Answered": "Yaliyojibiwa Hivi Karibuni",
  "No question is too small. High-volume topics shape the next town-hall answers.":
    "Hakuna swali dogo sana. Mada zenye maswali mengi huunda majibu ya mkutano ujao.",
  "Submit — anonymously if you wish": "Wasilisha — bila jina ukipenda",
  "Every question goes into a moderation queue that filters spam and abuse before anything is published.":
    "Kila swali huingia kwenye foleni ya uhakiki inayochuja barua taka na matusi kabla ya chochote kuchapishwa.",
  "We answer in weekly batches": "Tunajibu kwa makundi ya kila wiki",
  "The most-asked and most-important questions are selected and answered every week.":
    "Maswali yanayoulizwa zaidi na muhimu zaidi huchaguliwa na kujibiwa kila wiki.",
  "Real answers — often on video": "Majibu halisi — mara nyingi kwa video",
  "Where it matters, you get a direct video response, not a press release.":
    "Pale inapohitajika, unapata jibu la moja kwa moja la video, si taarifa kwa vyombo vya habari.",

  // ── IEBC voter check ─────────────────────────────────────────────────
  "IEBC Voter Check": "Ukaguzi wa Mpiga Kura wa IEBC",
  "Are you ready to vote in": "Uko tayari kupiga kura",
  "Confirm your registration status in seconds. Not registered yet? It only takes a few minutes at any IEBC centre.":
    "Thibitisha hali yako ya usajili kwa sekunde. Bado hujajisajili? Inachukua dakika chache tu katika kituo chochote cha IEBC.",
  "National ID number": "Nambari ya Kitambulisho",
  "Check my registration": "Kagua usajili wangu",
  "Checking…": "Inakagua…",
  "You appear to be registered.": "Inaonekana umejisajili.",
  "Your county": "Kaunti yako",
  "Demonstration result. Always confirm your details on the official IEBC portal before election day.":
    "Matokeo ya mfano. Daima thibitisha maelezo yako kwenye tovuti rasmi ya IEBC kabla ya siku ya uchaguzi.",
  "Check another": "Kagua mwingine",
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (s: string) => string;
}

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (s) => s,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "sw") setLangState(saved);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    window.localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  }

  const t = (s: string) => (lang === "sw" ? DICT[s] ?? s : s);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  return useContext(LanguageContext);
}
