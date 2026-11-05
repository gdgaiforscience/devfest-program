// APAC AI for Science DevFest 2026 — Program Schedule & Session Data
const PROGRAM_ITEMS = [
  {
    "kind": "open",
    "day": 1,
    "block": "Block 1A: Clinical AI, Agentic Discovery & Earth Observation",
    "startUtc": "2026-11-27T01:00:00Z",
    "endUtc": "2026-11-27T01:00:00Z",
    "aedt": "12:00 PM",
    "jst": "10:00 AM",
    "ist": "6:30 AM",
    "mins": 0,
    "title": "Welcome & DevFest Day 1 Kickoff (GDG AI for Science Australia)"
  },
  {
    "id": "s01",
    "slug": "nevasini-sasikumar",
    "kind": "session",
    "day": 1,
    "block": "Block 1A: Clinical AI, Agentic Discovery & Earth Observation",
    "startUtc": "2026-11-27T01:00:00Z",
    "endUtc": "2026-11-27T01:30:00Z",
    "aedt": "12:00 PM - 12:30 PM",
    "jst": "10:00 AM - 10:30 AM",
    "ist": "6:30 AM - 7:00 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Nevasini Sasikumar",
    "designation": "Machine learning researcher",
    "affiliation": "Speaking in a personal capacity",
    "title": "Evaluating transfer learning for clinical NER across languages",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "How should we evaluate an NLP model when labeled data is scarce and language changes the input? I'll discuss our ClinicalNLP 2023 paper, Transfer Learning for Low-Resource Clinical Named Entity Recognition, and its reported experiments on Spanish, French and conversational clinical text. The presentation explains the published transfer-learning workflow and the evidence behind the reported F1 comparisons.\n\nWe'll introduce entity-span labeling with clearly marked teaching examples, then examine what an entity match means, how translation affects annotation alignment, and which training and test conditions need to stay comparable. Attendees will leave with questions they can use to interpret low-resource NLP results and plan follow-up checks. This is a discussion of published research with teaching examples; it does not present a clinical deployment or a new replication.\n\nPaper: https://aclanthology.org/2023.clinicalnlp-1.53/",
    "bio": "Nevasini Sasikumar holds an M.S. in Data Science from UC San Diego. Her research interests include NLP, computer vision and AI evaluation. She is first author of the ClinicalNLP 2023 paper Transfer Learning for Low-Resource Clinical Named Entity Recognition and served as a judge at TreeHacks 2026. Her proposed session discusses the published research and the evidence needed to interpret low-resource NLP results.",
    "resourceLinks": [
      {
        "url": "https://aclanthology.org/2023.clinicalnlp-1.53/",
        "label": "ACL Anthology"
      }
    ],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/nevasini-sasikumar/",
        "label": "LinkedIn"
      },
      {
        "url": "https://github.com/nevasini",
        "label": "GitHub"
      }
    ]
  },
  {
    "id": "s03",
    "slug": "richard-cornelius-suwandi",
    "kind": "session",
    "day": 1,
    "block": "Block 1A: Clinical AI, Agentic Discovery & Earth Observation",
    "startUtc": "2026-11-27T01:30:00Z",
    "endUtc": "2026-11-27T02:00:00Z",
    "aedt": "12:30 PM - 1:00 PM",
    "jst": "10:30 AM - 11:00 AM",
    "ist": "7:00 AM - 7:30 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Mr. Richard Cornelius Suwandi",
    "designation": "PhD candidate",
    "affiliation": "CUHK-Shenzhen",
    "title": "Can AI Agents Discover New Scientific Models?",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Every machine learning model makes assumptions about its data. Gaussian process models are widely used for scientific forecasting and for deciding which experiment to run next. In these models, the assumptions live in a single function called a kernel. A good kernel matters most when data is scarce, which is the normal situation in science. Yet researchers still mostly choose one from a short list of textbook options.\n\nIn this talk I'll present Kernel Autoresearch (Kernaut), a system where AI coding agents invent new kernels as short Python programs. The hard part is validity, a kernel must satisfy mathematical conditions that no finite set of tests can confirm. In our stress tests, 22 to 58% of LLM-written kernels that passed numerical checks broke when we ran them at other scales or dimensions. I'll explain how Kernaut avoids this. The agent writes only one piece of the kernel, and trusted code assembles the rest in a way that guarantees the result is valid. An archive keeps the best kernels that behave in different ways, and a novelty check stops agents from rediscovering textbook kernels under new names.\n\nI'll walk through two scientific case studies. In enzyme kinetics, kernels discovered from ten known rate laws predict five unseen reaction mechanisms with almost half the error of a carefully tuned standard kernel. In glucose forecasting for simulated type 1 diabetes patients, a discovered kernel learns a delayed response to meals and an insulin effect that lasts about two hours. When only two training episodes per patient are available, discovered kernels cut forecast error by 38 to 67%. Each kernel is a short program, so we can read it, explain it and improve it by hand. I'll close with what this means for AI systems that propose scientific models we can verify and understand.\n\nThis is joint work with Feng Yin (CUHK-Shenzhen) and Kevin Murphy (UBC, Google DeepMind).\n\nPaper: https://arxiv.org/abs/2610.10394\nCode: https://github.com/richardcsuwandi/kernaut\nProject page: https://richardcsuwandi.github.io/kernaut/",
    "bio": "I'm a PhD candidate at the School of Artificial Intelligence, The Chinese University of Hong Kong, Shenzhen. I work on AI systems that help with scientific discovery. I want to understand how AI agents can discover new algorithms and models that scientists can actually verify, and how models can adapt their assumptions when experiments are expensive and data is scarce. My latest project, Kernel Autoresearch, is an autoresearch system that discovers interpretable models for open-ended scientific problems. Before that I built CAKE, which uses LLMs to design models for Bayesian optimization, the method behind many automated experiment and materials design pipelines. That work appeared at NeurIPS 2025. Beyond research, I co-founded the Institute for AI-Driven Discovery of Algorithms (AIDDA), a community and research network for AI-driven research systems. I previously led the AI4Science community at alphaXiv.",
    "resourceLinks": [
      {
        "url": "https://arxiv.org/abs/2610.10394",
        "label": "arXiv"
      },
      {
        "url": "https://github.com/richardcsuwandi/kernaut",
        "label": "GitHub"
      },
      {
        "url": "https://richardcsuwandi.github.io/kernaut/",
        "label": "Website"
      }
    ],
    "speakerLinks": [
      {
        "url": "https://richardcsuwandi.github.io/",
        "label": "Website"
      },
      {
        "url": "https://www.linkedin.com/in/richardcsuwandi/",
        "label": "LinkedIn"
      },
      {
        "url": "https://twitter.com/richardcsuwandi",
        "label": "X / Twitter"
      },
      {
        "url": "https://scholar.google.com/citations?user=28o0CkgAAAAJ",
        "label": "Google Scholar"
      }
    ]
  },
  {
    "id": "s04",
    "slug": "raju-varanasi-temuulen-tuguldur",
    "kind": "session",
    "day": 1,
    "block": "Block 1A: Clinical AI, Agentic Discovery & Earth Observation",
    "startUtc": "2026-11-27T02:00:00Z",
    "endUtc": "2026-11-27T02:30:00Z",
    "aedt": "1:00 PM - 1:30 PM",
    "jst": "11:00 AM - 11:30 AM",
    "ist": "7:30 AM - 8:00 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Dr. Raju Varanasi & Temuulen Tuguldur",
    "designation": "Professor (Hon) Deakin University; PhD candidate, Deakin University",
    "affiliation": "Data De-Light P/L",
    "title": "From public data to policy development -AusInsight using Data Commons by Google",
    "tracks": [
      "SciComm & Policy"
    ],
    "abstract": "Universities, Industry and government policy makers invest time and funds to build national capacity. AI science readiness of Australia is of prime interest for all stakeholders. Policy making is cross sectional and multi dimensional and it cuts across many public datasets: enrolments and completions, job advertisements, R&D spending, patents and graduate outcomes. \nThe data is public, but it sits with different publishers in different formats, and joining it can take weeks before any analysis starts. General-purpose AI chat tools do not solve this on their own: they can guess numbers and rarely show where a figure came from.\n\nAusInsight is a Data Commons instance built for the Australian Council of Deans of Science (ACDS) and presented at its satellite workshop at ANU, Canberra, on 26 October 2026. The Google Data Commons team built the instance, the web application and the natural-language data agent. Data Delight shaped the use cases and research questions, selected and sourced the public Australian data (Department of Education, Jobs and Skills Australia, ABS and others), and designed the storylines and pages. \n\nThe Australian data is joined with international indicators already available in Data Commons by Google. In this session we will show, live the instance, and how each indicator traces back to its source data and method; the data agent answering plain-English questions with charts and cited sources; two use cases. AI Science Readiness benchmarks Australia's STEM graduates, R&D spending and AI patents against peer countries. Competency Lag compares the supply of STEM graduates by field with labour-market demand. Its results are preliminary and illustrative: for example, science and IT graduates see the fewest job advertisements per new graduate of any field. \n\nWe frame this as a question of opportunity (how to create demand for a skilled pool), not a judgement on graduates or a causal claim.\n\nThe takeaway is practical: what it takes for a faculty, university or agency to stand up its own instance. Start from the questions, source and document the data, join local data with public data, test the agent before it meets an audience, and plan for long-term ownership. We will share what we learned taking a prototype from idea to live demo in about four weeks.\n\n\nLinks: Data Commons by Google, https://datacommons.org · Building your own instance, https://docs.datacommons.org/custom_dc/ · Data Delight, https://datadelight.org",
    "bio": "The first ever use cases based on Data Commons by Google and Australian datasets have been leveraged to demonstrate Australia's Science Readiness Index and Competency Lag  which have been demonstrated at the Australian Deans of Science Summit in October 2026 (Oct 26–28, 2026) with great success.\n\nDr. Raju Varanasi is the founder and director of Data Delight, an Australian data and AI consultancy for education, and has been a data and AI consultant to Google for Education since January 2024. He is also a Professor (Hon) at Deakin Business School. He works with education ministries and with university and school leaders on turning public and institutional data into evidence for decisions. \n\nMost recently he led Data Delight's contribution to AusInsight, a Data Commons instance for the Australian Council of Deans of Science, built with the Google Data Commons team. Before founding Data Delight he led the analytics transformation of the Parramatta Catholic school system in Sydney (80 schools, 43,000 students), including models that predicted senior school results a year ahead. He holds a PhD in Education from the University of Newcastle and a B.Tech in Chemical Engineering from IIT Delhi.\n\nCo-speaker: Temuulen Tuguldur is a PhD candidate at Deakin University, researching the governability of AI agents. Temuulen led Data Delight's data sourcing, storylines and page design for AusInsight and presented its Competency Lag use case at ACDS. Temuulen brings over eight years in data science and digital infrastructure, including national education data systems on Google Cloud.",
    "resourceLinks": [
      {
        "url": "https://datacommons.org",
        "label": "Website"
      },
      {
        "url": "https://docs.datacommons.org/custom_dc/",
        "label": "Website"
      },
      {
        "url": "https://datadelight.org",
        "label": "Website"
      }
    ],
    "speakerLinks": [
      {
        "url": "https://www.datadelight.org",
        "label": "Website"
      }
    ]
  },
  {
    "id": "s05",
    "slug": "peter-scarth",
    "kind": "session",
    "day": 1,
    "block": "Block 1A: Clinical AI, Agentic Discovery & Earth Observation",
    "startUtc": "2026-11-27T02:30:00Z",
    "endUtc": "2026-11-27T03:00:00Z",
    "aedt": "1:30 PM - 2:00 PM",
    "jst": "11:30 AM - 12:00 PM",
    "ist": "8:00 AM - 8:30 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Dr. Peter Scarth",
    "designation": "Co-founder and Remote Sensing Data Scientist",
    "affiliation": "Cibo Labs / Ozius / The University of Queensland",
    "title": "How Multi-Task Foundation-Models Learn Dynamic Ecological Condition",
    "tracks": [
      "AI → Science",
      "DeepTech & Quantum"
    ],
    "abstract": "We use artificial intelligence, Vision-Language Models (VLMs), and machine-learning architectures to accelerate discoveries in the Earth and life sciences. We built an operational  platform from this research to solve long-term problems in ecosystem-condition assessments. Field transects measure fine-scale forest structure and coarse woody debris, but high costs limit their spatial extent. Continental satellite models cover large areas, but they compress the dynamic range of condition scores. They often give high scores to fertilised exotic pastures and give low scores to treeless natural ecosystems.\n\nOur platform combines five ecological and pastoral frameworks into one deep neural network. We process 40 m pixels with 64-dimensional embeddings from the Google DeepMind Alpha Earth Foundation model. We also calculate a cosine-similarity index from reference benchmarks across all 384 subregions of the Interim Biogeographic Regionalisation for Australia (IBRA). We trained this five-task network on 4.43 million records across all 87 Australian IBRA bioregions. A 2-layer shared trunk collects biological, structural, and spectral signals into one 384-dimensional representation of vegetation condition. The platform monitors five primary condition metrics. These metrics include tree canopy structure and woody debris for Queensland Spatial BioCondition, and fractional cover persistence for continental habitat condition. The model also monitors regional climax benchmark fidelity, floristic nativity from native plant species fractions, and pastoral pasture condition with four class probabilities. This shared trunk enables cross-task learning between forest biomass, cover persistence, and plant taxonomy. Four 64-dimensional sub-heads then convert this shared condition state into specific regulatory scores without cross-task errors. To expand our ground-truth data in remote rangelands, we combined 5,942 paddock photo-assessments from the LandLens VLM application with 2,009 agronomist transects. An automated supervisor script managed 201 trials of 5-fold spatial cross-validation on an NVIDIA A100 GPU. We scaled all losses to correct gradient mismatches, and spatio-temporal stratified sampling removed a significant dry-season bias in rangelands and croplands. We added 201,940 botanical plots and 108,404 non-native control sites to separate climax maturity from species nativity. Cumulative Ordinal Regression (CORN) calculates continuous pasture scores and four exact class probabilities that sum to 100%.\n\nThe platform processes 4.80 billion land pixels across Australia in 66 minutes on one NVIDIA A100 GPU. Independent spatial tests confirm high accuracy across all five predicted layers. Head 1 predicts Spatial BioCondition with a mean absolute error of 13.4 points and a weighted F1-score of 0.65. Head 2 predicts continental habitat condition with a balanced cross-validation loss of 12.8 points. Head 3 identifies undisturbed benchmark climax ecosystems with a binary cross-entropy loss of 0.369. Head 4 predicts floristic nativity and continuous ecosystem condition with 95.5% validation accuracy, correctly detecting 85.6% of non-native negative controls. Head 5 uses Cumulative Ordinal Regression to predict rangeland pasture condition with 0.817 QWK for the primary pasture component and exact multiclass accuracy  of 65.2% across 7,951 field and VLM ground-truth sites. These outputs directly support the Queensland Vegetation Management Act, Accounting for Nature accounts, UN SEEA-EA accounts, and the Australian Beef Sustainability Framework.\n\nFuture work building on this framework is proposed to combine cognitive linguistics enabled by LLMs, foundation-model interpretability, and spatial ecology to reframe how AI models represent condition. Standard environmental accounting treats nature as a passive object and reduces condition to static inventories. In contrast, verb-driven First Nations languages describe the landscape as an active network of continuous processes. We will use this relational grammar to model dynamic cycles of disturbance and recovery rather than rigid polygons. For example, our models will represent a savanna as an ongoing cycle of burning, resting, and regenerating. We will also assess multi-model embeddings to track multi-scale structural change and subtle bush encroachment. By framing condition this way, as an active living process, we create a cognitive guardrail against simple commodification and support reciprocal land stewardship.",
    "bio": "Peter Scarth is a remote sensing scientist, co-founder at Cibo Labs, and director at Ozius. He has more than 25 years of experience in Earth observation and environmental modelling across Australia. He developed national algorithms for Landsat and Sentinel-2 fractional groundcover, foliage projective cover, and structural vegetation classification. His work supports the Queensland Statewide Landcover and Trees Study and the Australian Beef Sustainability Framework. Currently, he uses satellite foundation models, multi-task deep neural networks, and vision-language models to measure natural capital and habitat condition across continental Australia.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.cibolabs.com.au",
        "label": "Website"
      },
      {
        "url": "https://www.ozius.com.au",
        "label": "Website"
      },
      {
        "url": "https://github.com/petescarth",
        "label": "GitHub"
      },
      {
        "url": "https://www.linkedin.com/in/petescarth/",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s06",
    "slug": "sebastian-lopez-marcano",
    "kind": "session",
    "day": 1,
    "block": "Block 1A: Clinical AI, Agentic Discovery & Earth Observation",
    "startUtc": "2026-11-27T03:00:00Z",
    "endUtc": "2026-11-27T03:10:00Z",
    "aedt": "2:00 PM - 2:10 PM",
    "jst": "12:00 PM - 12:10 PM",
    "ist": "8:30 AM - 8:40 AM",
    "mins": 10,
    "format": "Lightning / Demo",
    "speaker": "Dr. Sebastian Lopez Marcano",
    "designation": "Senior Manager Agriculture Analytics",
    "affiliation": "The University of Queensland",
    "title": "Satellites, AI and shared infrastructure for the Australian grains industry",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Grains underpin food security across the Asia-Pacific. In Australia they make up about a quarter of agricultural production value and earn more than AUD 20 billion a year in exports. Yet growers farm the driest cropped continent under an increasingly variable climate. Adapting requires knowing what is growing where, when it flowers and how each season is tracking, across more than 20 million hectares. Analytics for the Australian Grains Industry (AAGI), a GRDC partnership with Curtin University, The University of Queensland and Adelaide University, is building the satellite, AI and data infrastructure to answer these questions at national scale.\n\nWe present three connected pieces of this work, each transferable to other crops and regions. First, we leverage geospatial foundation models, such as AlphaEarth Foundations Satellite Embeddings, with functional EO-AI-biophysical frameworks. Built on Google Earth Engine pipelines, these frameworks link satellite observations to interpretable crop traits such as crop type, flowering time and yield, so that predictions can be explained to and trusted by growers and agronomists. Second, we describe how AI-assisted development, paired with a gated expert review process, is helping AAGI produce high-quality packages and apps for growers, advisers and researchers. Finally, we demonstrate how these models and apps reach users through two portals: AAGIVerse, our open-source portal, and AAGIApps, an authenticated platform where each tool runs in its own container and serves users across seven partner organisations.",
    "bio": "I lead the design and development of AI-driven technologies for Australia’s productive sectors, including agriculture, aquaculture, and environment. My work focuses on scalable, interactive applications that support research and innovation through computer vision and data analytics. I’ve contributed and led national and international programs such as UQ-AAGI, UQ-APPN, FishID, EcoCommons (2026 Eureka Award Winner), and WildObs Australia, with support from Microsoft AI for Earth, the FAO, and the Gates Foundation.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/sebastianlopez-marcano",
        "label": "LinkedIn"
      },
      {
        "url": "https://github.com/slopezmarcano",
        "label": "GitHub"
      },
      {
        "url": "https://research-support.uq.edu.au/profile/15040/sebastian-lopez-marcano",
        "label": "Website"
      }
    ]
  },
  {
    "id": "s07",
    "slug": "takayuki-shinohara",
    "kind": "session",
    "day": 1,
    "block": "Block 1A: Clinical AI, Agentic Discovery & Earth Observation",
    "startUtc": "2026-11-27T03:10:00Z",
    "endUtc": "2026-11-27T03:20:00Z",
    "aedt": "2:10 PM - 2:20 PM",
    "jst": "12:10 PM - 12:20 PM",
    "ist": "8:40 AM - 8:50 AM",
    "mins": 10,
    "format": "Lightning / Demo",
    "speaker": "Dr. Takayuki Shinohara",
    "designation": "Senior Researcher",
    "affiliation": "AIST",
    "title": "From Earth Observation to Engineering Decisions: Auditable AI Agents for Scientific Workflows",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Scientific and engineering decisions increasingly depend on heterogeneous evidence: satellite observations, InSAR time series, 3D point clouds, infrastructure inspection records, predictive models, simulations, and geospatial databases. Large language models and AI agents offer a new way to connect these resources, but scientific use requires more than generating plausible answers. An AI system must retrieve the correct evidence, distinguish observations from predictions, respect physical and engineering constraints, expose uncertainty, and preserve provenance from source data to final decision.\n\nThis talk presents an auditable AI-agent architecture for connecting Earth observation and infrastructure science. I will use three classes of real research problems as case studies: reconstructing editable engineering models from 3D observations, forecasting infrastructure and environmental states from spatio-temporal data, and using tool-augmented AI agents to support infrastructure maintenance and disaster-related decisions.\n\nThe central design principle is to separate observations, learned models, external tools, verification, and decision-making rather than treating a large language model as a single autonomous decision maker. I will show how this separation helps detect practical failure modes such as stale observations, missing evidence, invalid infrastructure routes, inconsistent records, duplicated costs, and recommendations unsupported by the underlying data.\n\nThe session will also discuss how scientific agents can be evaluated through reproducible, failure-oriented benchmarks rather than answer accuracy alone. Examples will draw from our recent work on BridgeCode, Text2BridgeCAD, PS-InSAR forecasting, predictive bridge maintenance, and auditable urban infrastructure digital twins.\n\nThe broader goal is to show how agentic AI can serve as a traceable orchestration layer between scientific observations, domain models, engineering constraints, and human expertise.\n\nRepresentative publications and research software are available through my AIST profile, Google Scholar, and GitHub pages listed above.",
    "bio": "Takayuki Shinohara is a Senior Researcher at the National Institute of Advanced Industrial Science and Technology (AIST), Japan, working at the intersection of artificial intelligence, computer vision, Earth observation, and infrastructure engineering.\n\nHis research develops AI systems that transform heterogeneous scientific and engineering observations—including satellite imagery, InSAR time series, LiDAR and point clouds, inspection records, and geospatial data—into structured models and traceable decisions. His recent work includes BridgeCode and Text2BridgeCAD for generating editable bridge CAD/BIM models, LLM-based predictive bridge maintenance, PS-InSAR time-series forecasting, and auditable AI agents for infrastructure digital twins.\n\nHis broader research interest is in scientific AI systems that combine learned models with structured tools, physical and engineering constraints, provenance tracking, verification, and human oversight.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://staff.aist.go.jp/shinohara.takayuki/",
        "label": "Website"
      },
      {
        "url": "https://scholar.google.com/citations?hl=en&user=U7z9XykAAAAJ",
        "label": "Google Scholar"
      },
      {
        "url": "https://www.linkedin.com/in/takayuki-shinohara-6b2223104/",
        "label": "LinkedIn"
      },
      {
        "url": "https://github.com/shnhrtkyk",
        "label": "GitHub"
      }
    ]
  },
  {
    "id": "s24",
    "slug": "koju-maruyama",
    "kind": "session",
    "day": 1,
    "block": "Block 1A: Clinical AI, Agentic Discovery & Earth Observation",
    "startUtc": "2026-11-27T03:20:00Z",
    "endUtc": "2026-11-27T03:30:00Z",
    "aedt": "2:20 PM - 2:30 PM",
    "jst": "12:20 PM - 12:30 PM",
    "ist": "8:50 AM - 9:00 AM",
    "mins": 10,
    "format": "Lightning / Demo",
    "speaker": "Mr. Koju Maruyama",
    "designation": "Founder & CEO",
    "affiliation": "MARUBO Inc.",
    "title": "Reading the Trackside: Vision-Language Models for Railway Vegetation Risk from Onboard Video",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Vegetation growing along railway lines is a constant risk: branches and grass can block signals, touch overhead lines, or fall onto the track. Today, much of this is checked by people walking or riding the line, and the results depend heavily on who is looking.\n\nIn this lightning talk, I will demonstrate a prototype that uses vision-language models to analyse ordinary onboard camera video. For each section of track, it rates vegetation and nearby infrastructure risk on a 5-level scale and explains its reasoning in plain language, linked to the exact video frames it used. When the model is unsure (because of lighting, motion blur or occlusion), it says so and sends the case back to a human inspector rather than guessing.\n\nI will share what worked, what did not (seasonal change, false alarms, and how to keep the model honest), and how we are preparing field validation with a major Japanese railway group company. The aim is not to replace inspectors, but to help them decide where to look first.\n\nInteractive demo: https://marubo.biz/trainvegetation/vegetation_inspection_interactive_en.html",
    "bio": "Koju Maruyama is the founder and CEO of MARUBO Inc., a Tokyo-based startup building AI that reads field photos, video and technical documents for infrastructure maintenance. His work focuses on \"evidence-grounded\" AI: every finding points back to the exact frame, photo or page it came from, and anything uncertain is returned to a human instead of being guessed. MARUBO provides paid document-checking services for geotechnical reports, and is developing onboard-video analysis for railway vegetation risk with a major Japanese railway group company. He graduated from Cyber University in Japan.",
    "resourceLinks": [
      {
        "url": "https://marubo.biz/trainvegetation/vegetation_inspection_interactive_en.html",
        "label": "Website"
      }
    ],
    "speakerLinks": [
      {
        "url": "https://marubo.biz/",
        "label": "Website"
      },
      {
        "url": "https://www.linkedin.com/in/marubobiz/",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s08",
    "slug": "syeda-faiza-nasim",
    "kind": "session",
    "day": 1,
    "block": "Block 1B: Climate Science, Explainable AI & Medical Imaging",
    "startUtc": "2026-11-27T03:30:00Z",
    "endUtc": "2026-11-27T04:00:00Z",
    "aedt": "2:30 PM - 3:00 PM",
    "jst": "12:30 PM - 1:00 PM",
    "ist": "9:00 AM - 9:30 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Dr. Syeda Faiza Nasim",
    "designation": "Head of School Computing/Assistant Professor",
    "affiliation": "International College of Excellence",
    "title": "AI for Climate Science: Leveraging Machine Learning and Large Language Models for Climate Data Analysis, Extreme Weather, and Climate Risk Assessment",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Artificial intelligence is creating new opportunities to advance climate science by improving the analysis of large climate datasets, identifying complex patterns in climate variability, and enhancing our understanding of extreme weather events and climate risks. This session will explore how machine learning, large language models (LLMs), and AI-assisted analytical workflows can support scientific discovery in climate and environmental research.\n\nBuilding on climate and environmental research, the session will focus on practical applications of AI to climate model evaluation, historical climate trends, extreme temperature and precipitation events, and the assessment of regional climate risks. It will explore how AI techniques can complement traditional statistical methods and climate modelling approaches to identify patterns, evaluate model performance, detect biases, and extract meaningful insights from large-scale climate simulations, including CMIP6 and emerging CMIP7 datasets.\n\nThe session will also examine opportunities for developing reproducible AI-assisted workflows for climate data processing, visualization, statistical analysis, and scientific interpretation. Potential applications include machine-learning-based climate model evaluation, AI-assisted detection of climate extremes, and the use of LLMs and agentic workflows to support scientific coding, documentation, and literature synthesis. Attention will be given to the challenges of data quality, uncertainty, interpretability, and scientific validation to ensure that AI-generated insights remain physically meaningful and scientifically robust.\n\nThe session welcomes researchers, students, and practitioners working at the intersection of artificial intelligence, climate science, environmental modelling, and sustainability. Participants will be encouraged to discuss potential collaborative projects, share computational tools and workflows, and identify opportunities to use AI to accelerate climate research and improve evidence-based decision-making in a changing climate.",
    "bio": "I am a PhD-qualified academic, researcher, and academic leader specializing in Artificial Intelligence, Machine Learning, Precision Agriculture, Remote Sensing, and Intelligent Decision Support Systems.My research focuses on applying AI and data-driven technologies to real-world challenges in agriculture and climate resilience. My doctoral research developed an intelligent irrigation decision-support framework integrating satellite remote sensing, IoT, machine learning, and environmental indicators to support sustainable water management and precision cotton production. My work aligns with the broader goals of climate-smart agriculture, sustainable resource management, SDG 2 (Zero Hunger), and SDG 13 (Climate Action).Beyond research, I am actively engaged in higher education, academic leadership, curriculum development, teaching, research supervision, and programme coordination. I currently contribute to computing education and academic leadership, with experience across Computer Science, Artificial Intelligence, Data Science, Machine Learning, Algorithms, Cybersecurity, and software development. I also contribute to the academic community as a peer reviewer and technical programme committee member for international journals and conferences. My academic service includes reviewing research manuscripts, participating in technical programme committees, and contributing to research quality and scholarly evaluation.\n\n\n\nMy research interests include:\n\n• Artificial Intelligence & Machine Learning\n\n• Precision & Smart Agriculture\n\n• Remote Sensing & Earth Observation\n\n• IoT and Intelligent Decision Support Systems\n\n• Climate-Smart Agriculture & Climate Resilience\n\n• Data Science and Predictive Analytics\n\n• AI for Sustainable Development\n\n\n\nI am particularly interested in interdisciplinary research and collaborations that connect AI with agriculture, environmental sustainability, climate resilience, and emerging intelligent technologies. I am open to research collaborations, postdoctoral opportunities, visiting researcher positions, academic partnerships, and projects at the intersection of AI, machine learning, remote sensing, IoT, and sustainable development.\n\n🔗 https://sfnportfolio.netlify.app/",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://sfnportfolio.netlify.app/",
        "label": "Website"
      }
    ]
  },
  {
    "id": "s09",
    "slug": "pravitha-kasu-sivanandan",
    "kind": "session",
    "day": 1,
    "block": "Block 1B: Climate Science, Explainable AI & Medical Imaging",
    "startUtc": "2026-11-27T04:00:00Z",
    "endUtc": "2026-11-27T04:30:00Z",
    "aedt": "3:00 PM - 3:30 PM",
    "jst": "1:00 PM - 1:30 PM",
    "ist": "9:30 AM - 10:00 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Ms. Pravitha Kasu Sivanandan",
    "designation": "Statistical Programmer",
    "affiliation": "Statnomos Technologies",
    "title": "Visual Pre-Migration Assessment and LLM-Assisted SAS-to-R Conversion Framework for ADaM Programs",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Migration of ADaM programs from SAS to R requires substantial effort before coding begins, particularly when programmers must interpret complex derivations, understand legacy design decisions, and navigate SAS-specific processing patterns embedded within code that has evolved over many years.\nThis work proposes a visual pre-migration assessment framework that leverages existing SAS ADaM programs, ADaM specifications, source SDTM datasets, and associated metadata to make migration complexity visible before R development begins. The framework identifies and visualizes cross-domain dependencies, merge structures, conditional derivations, ordering dependencies, missing-value & date handling and SAS-specific constructs such as arrays, macros, and PROC SQL.\nIt converts years of programming knowledge into interactive maps; aids programmers understand code and data relationships before coding in R. These visualizations help teams pinpoint migration hotspots and develop targeted review strategies. Additionally, the framework uses Large Language Models (LLMs) to enhance migration readiness, providing explanations of derivation logic, summarizing SAS program intent, and highlighting SAS-to-R semantic differences. By using structured metadata for LLM prompts, it improves clarity and aids in code translation by contextualizing data dependencies.\nAn interactive R Shiny interface combines visualization and AI capabilities into a unified workflow, highlighting key semantic differences between SAS and R. Future enhancements will offer R implementation guidance, automate migration test scenarios, and ensure traceability from pre-migration assessments to SAS-to-R reconciliation, fostering a scalable and auditable migration process.",
    "bio": "Pravitha Kasu Sivanandan is a Statistical Programmer at Statnomos Technologies, where she works on clinical data standards and statistical programming, with a growing focus on AI-assisted SAS-to-R conversion for CDISC ADaM workflows. She is developing a visual pre-migration assessment framework that explores how large language models (LLMs) can help analyze programming logic, study specifications, source datasets and metadata to identify complexities and potential inconsistencies before migration.\n\nWith an academic background in Bioinformatics and Biotechnology, she brings experience in cancer genomics, clinical variant interpretation and biomedical research, complemented by research experience in augmented-reality-based presurgical planning at IIT Madras. Her interests lie in applying AI responsibly to scientific and clinical data workflows, with an emphasis on transparency, interpretability, and human oversight.\n\nBeyond her professional work, she enjoys exploring new places and cultures, engaging with people from diverse backgrounds, pursuing lifelong learning, capturing perspectives through photography, discovering music, learning the ukulele and exploring her creativity through cooking.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/pravitha-k-sivanandan-7b2643165/",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s10",
    "slug": "chintan-m-bhatt",
    "kind": "session",
    "day": 1,
    "block": "Block 1B: Climate Science, Explainable AI & Medical Imaging",
    "startUtc": "2026-11-27T04:30:00Z",
    "endUtc": "2026-11-27T05:00:00Z",
    "aedt": "3:30 PM - 4:00 PM",
    "jst": "1:30 PM - 2:00 PM",
    "ist": "10:00 AM - 10:30 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Dr. Chintan M. Bhatt",
    "designation": "Lecturer in EEECS",
    "affiliation": "Queen's University Belfast",
    "title": "Beyond Accuracy: Building Explainable AI for Real-World Scientific Discovery",
    "tracks": [
      "AI → Science",
      "Science → AI",
      "DeepTech & Quantum"
    ],
    "abstract": "Artificial intelligence (AI) is transforming scientific research by enabling researchers to analyse complex data, identify hidden patterns, and support evidence-based discovery. However, high predictive accuracy alone is insufficient when AI systems must support scientific interpretation, transparency, and reliable decision-making. This session explores how explainable artificial intelligence (XAI), machine learning, and computer vision can be combined to develop AI systems that offer not only predictions but also meaningful insights into their decisions. Through practical examples from visual recognition and healthcare-oriented AI research, the session will examine how explanation techniques can help researchers understand model behaviour, investigate potential biases, and assess the reliability of AI-generated outputs. It will also discuss key challenges, including the consistency of explanations, the risk of misleading interpretations, and the gap between model transparency and genuine scientific understanding. Participants will gain a practical perspective on integrating explainability into AI research workflows, evaluating models beyond conventional performance metrics, and designing systems that better support human expertise. The central message is that effective AI for science should do more than produce accurate results: it should help researchers understand, scrutinise, and responsibly use those results to advance scientific discovery.",
    "bio": "Dr. Chintan Bhatt is a Lecturer in Artificial Intelligence at Queen’s University Belfast, GIFT City Campus, India, and a Senior Member of IEEE. With over 15 years of experience in teaching and research, his expertise spans machine learning, computer vision, explainable artificial intelligence (XAI), and data science. His research focuses on developing innovative AI-driven solutions for real-world challenges, with contributions across interdisciplinary applications. He has supervised and mentored undergraduate, postgraduate, and doctoral researchers and actively contributes to academic research and collaboration. In recognition of his research impact, he was included in the Stanford–Elsevier Top 2% Scientists List in both 2025 and 2026.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/chintan-bhatt-phd-336b3122/",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s11",
    "slug": "g-pavithra",
    "kind": "session",
    "day": 1,
    "block": "Block 1B: Climate Science, Explainable AI & Medical Imaging",
    "startUtc": "2026-11-27T05:00:00Z",
    "endUtc": "2026-11-27T05:30:00Z",
    "aedt": "4:00 PM - 4:30 PM",
    "jst": "2:00 PM - 2:30 PM",
    "ist": "10:30 AM - 11:00 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Ms. G. Pavithra",
    "designation": "Senior Technical Staff",
    "affiliation": "TANUH-AI, IISc, Bengaluru",
    "title": "Generative AI for Privacy-Preserving Medical Imaging: Enabling Collaborative and Trustworthy Healthcare AI",
    "tracks": [
      "AI → Science",
      "DeepTech & Quantum",
      "SciComm & Policy"
    ],
    "abstract": "Beyond Data Sharing: Generative AI for Privacy-Preserving Medical Imaging\n\nThis is an emerging and rapidly growing research area, with increasing interest in leveraging generative AI for privacy-preserving medical imaging and trustworthy healthcare innovation.\n\nArtificial intelligence is transforming scientific discovery, particularly in medical imaging, where deep learning enables image reconstruction, denoising, segmentation, and computer-aided diagnosis. However, developing reliable medical AI requires large, diverse, and well-annotated datasets. Patient confidentiality, ethical requirements, and institutional restrictions often limit the sharing of medical images, creating a fundamental challenge: how can we advance medical research without compromising patient privacy?\n\nThis session explores how Generative Artificial Intelligence (GenAI) can help address this challenge, with a focus on synthetic medical image generation, diffusion models, and privacy-preserving collaborative learning. It will introduce the fundamentals of generative models and explain how diffusion-based approaches can synthesise realistic medical images, potentially augment limited datasets and support the development of downstream AI models. Applications such as MRI and CT image synthesis, denoising, and super-resolution will illustrate how these techniques can contribute to scientific research and healthcare innovation.\n\nThe session will also examine how generative modelling can complement federated learning, which enables multiple hospitals to collaboratively train AI models without directly exchanging their raw patient data. Differential privacy and related safeguards will be introduced to explain how privacy risks can be reduced during model training and data generation. Particular attention will be given to an important limitation: synthetic medical images are not automatically privacy-preserving. Generative models may memorise training examples, expose sensitive information, or underrepresent rare diseases and patient populations. Consequently, privacy evaluation, clinical validity, fairness, and the balance between data utility and privacy must be considered together.\n\nDrawing on developments in medical image restoration and efficient deep learning, the session will connect these methods to practical challenges in building trustworthy medical AI systems, including data scarcity, computational constraints, and deployment in resource-limited healthcare settings. Participants will gain an understanding of the opportunities and limitations of GenAI for privacy-aware scientific discovery and identify potential research directions at the intersection of generative modelling, medical imaging, and trustworthy AI.\n\nSelected papers and resources\n\n1. Kaissis et al., [Secure, privacy-preserving and federated machine learning in medical imaging](https://www.nature.com/articles/s42256-020-0186-1), *Nature Machine Intelligence*, 2020.\n2. Shi et al., [Privacy-Preserving Latent Diffusion-Based Synthetic Medical Image Generation](https://pmc.ncbi.nlm.nih.gov/articles/PMC13034593/), *IEEE Transactions on Medical Imaging*, 2026.\n3. Dombrowski and Kainz, [Can Diffusion Models Generalize? Privacy and Fairness Trade-offs for Medical Data Sharing](https://proceedings.mlr.press/v301/dombrowski26a.html), MIDL 2026.\n4. [PriMIA: Privacy-Preserving Machine Learning for Medical Images](https://gkaissis.github.io/PriMIA/) — a practical framework for federated and privacy-preserving medical imaging research.\n5. [Privacy and fairness auditing code](https://github.com/MischaD/Privacy) — resources for evaluating memorisation and fairness in generative medical imaging.\n\nThe session is intended for researchers, students, and practitioners interested in AI for science, medical imaging, generative models, and responsible healthcare innovation.",
    "bio": "G. Pavithra is a researcher at TANUH AI, IISc Bengaluru, a collaborative initiative by the Ministry of India with IISc to focus on AI in healthcare. She is an M.Tech. graduate in Artificial Intelligence from the Indian Institute of Science (IISc), Bengaluru, where she worked under Dr. Kunal Narayan Chaudhury on optimization-aware deep image restoration, with a particular focus on convex regularization and learned image priors. She finished her B.Tech. (Hons.) in CSE from NIT Trichy. Her research interests include image restoration, inverse problems, medical image analysis, and optimization for deep learning. She has presented her research at international conferences, including MIDL 2026, and received the Best Paper Award at IEEE TENSYMP 2026 for her work on bridging convex variational priors and deep networks for image deblurring. She has also received Best Paper Awards for her research in lightweight medical image segmentation. At IISc, she has served as a Teaching Assistant for the graduate courses Computational Methods of Optimisation and Advanced Image Processing, gaining experience in teaching optimization concepts and mentoring students. Her research focuses on developing efficient, trustworthy, and deployable AI systems for real-world medical imaging applications.",
    "resourceLinks": [
      {
        "url": "https://www.nature.com/articles/s42256-020-0186-1",
        "label": "Website"
      },
      {
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13034593/",
        "label": "Website"
      },
      {
        "url": "https://proceedings.mlr.press/v301/dombrowski26a.html",
        "label": "Website"
      },
      {
        "url": "https://gkaissis.github.io/PriMIA/",
        "label": "Website"
      },
      {
        "url": "https://github.com/MischaD/Privacy",
        "label": "GitHub"
      }
    ],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/g-pavithra-703522191/",
        "label": "LinkedIn"
      },
      {
        "url": "https://scholar.google.com/citations?user=7qvLcToAAAAJ&hl=en",
        "label": "Google Scholar"
      },
      {
        "url": "https://www.semanticscholar.org/author/Pavithra-Gurushankar/2275456456",
        "label": "Website"
      },
      {
        "url": "https://orcid.org/0000-0003-0643-7185",
        "label": "ORCID"
      }
    ]
  },
  {
    "kind": "break",
    "day": 1,
    "block": "Block 1C: Scientific Simulation, Quantum ML & Human-Centric AI",
    "startUtc": "2026-11-27T05:30:00Z",
    "endUtc": "2026-11-27T06:00:00Z",
    "aedt": "4:30 PM - 5:00 PM",
    "jst": "2:30 PM - 3:00 PM",
    "ist": "11:00 AM - 11:30 AM",
    "mins": 30,
    "title": "Afternoon Break · India Noon Alignment (30m)"
  },
  {
    "id": "s12",
    "slug": "vinay-kumar",
    "kind": "session",
    "day": 1,
    "block": "Block 1C: Scientific Simulation, Quantum ML & Human-Centric AI",
    "startUtc": "2026-11-27T06:00:00Z",
    "endUtc": "2026-11-27T06:30:00Z",
    "aedt": "5:00 PM - 5:30 PM",
    "jst": "3:00 PM - 3:30 PM",
    "ist": "11:30 AM - 12:00 PM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Mr. Vinay Kumar",
    "designation": "PhD Scholar",
    "affiliation": "Indian Institute of Technology Delhi",
    "title": "Benchmarking AI Agents for Molecular Dynamics Simulations",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "The promise of AI-driven scientific discovery hinges on whether AI agents can autonomously design and execute the computational workflows that underpin modern science. Molecular dynamics (MD) simulation provides a demanding test of this capability: it requires translating a physical problem into syntactically and semantically correct input scripts, choosing force fields, ensembles, and initial and boundary conditions, diagnosing engine errors and unstable trajectories, and interpreting outputs against known physical behavior. We introduce MDGYM, a benchmark of 200 expert-curated MD simulation problems in LAMMPS and GROMACS, two widely used MD engines, organized into three difficulty levels and comprising 366 target quantities scored against reference values from expert simulations. We evaluate three general-purpose command-line agent frameworks, Claude Code, Codex, and OpenHands, each with four LLMs. The best configuration solves 68% of easy problems, 30% of medium problems, and 21% of hard problems, and the choice of model changes performance far more than the choice of framework. Trajectory and engine-error analyses show that most engine errors arise while agents assemble the simulation input, that weaker models fail early through syntax errors and premature termination, and that stronger models complete more simulations but report incorrect values from error-free runs. Current agents therefore lack three capabilities required for autonomous simulation: coherent specification of simulation inputs, domain-aware recovery from engine errors, and physical and methodological validation of results.",
    "bio": "Vinay is a India AI PhD Fellow at Yardi School of AI, IIT Delhi. His work is focused on building agentic AI frameworks for autonomous scientific discovery, with papers accepted at NeurIPS 2026. He is an awardee of Yardi Honorarium for Academic Excellence. He graduated from CSE Dept of IIT Ropar where his research was focused on cost effective collaboration in Human-AI teams.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/kvinay07/",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s14",
    "slug": "anitya-kumar-gupta",
    "kind": "session",
    "day": 1,
    "block": "Block 1C: Scientific Simulation, Quantum ML & Human-Centric AI",
    "startUtc": "2026-11-27T06:30:00Z",
    "endUtc": "2026-11-27T07:00:00Z",
    "aedt": "5:30 PM - 6:00 PM",
    "jst": "3:30 PM - 4:00 PM",
    "ist": "12:00 PM - 12:30 PM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Mr. Anitya Kumar Gupta",
    "designation": "Research Associate",
    "affiliation": "Shoolini University",
    "title": "Beyond Binary Feelings: Hybrid Quantum–Classical Machine Learning for Emotion Understanding",
    "tracks": [
      "AI → Science",
      "Science → AI",
      "SciComm & Policy"
    ],
    "abstract": "Human emotions are not binary. A single sentence can carry sarcasm, hope, and frustration at once, yet most sentiment models still reduce language to positive, negative, or neutral. This talk presents research on hybrid quantum–classical approaches to sentiment and emotion analysis. The idea is that quantum concepts such as superposition and entanglement offer a natural mathematical language for ambiguous, overlapping, context-dependent emotional states.\n\nThe session starts with the limits of conventional NLP pipelines on mixed and subtle emotions. It then shows how text features can be encoded into parameterised quantum circuits and combined with classical neural layers in a hybrid architecture, and covers what can realistically be run on today’s simulators and noisy quantum hardware. It also discusses where quantum methods help, where they don’t yet, and the open problems that matter most: data encoding, scalability, and noise.\n\nAttendees will leave with a clear view of where quantum machine learning stands for NLP, a practical framework for evaluating hybrid models, and research directions they can pursue themselves.",
    "bio": "Anitya Kumar Gupta is a Research Associate and PhD scholar at Shoolini University, Himachal Pradesh. His doctoral research, Sentiments and Emotions Analysis Through Quantum Techniques, develops hybrid classical–quantum machine learning models for understanding human emotion. He holds an M.S. in Computer Science from the Illinois Institute of Technology.\n\nHis AI for Science work sits at the intersection of quantum machine learning, NLP, and IoT security. He currently leads research on securing AI systems used for carbon measurement and reporting, which connects trustworthy AI with climate science. He also works on agentic AI for cybersecurity, aligned with UN SDGs 9, 13, and 16. He holds seven patents across India and the UK and has published with IEEE, Springer Nature, and Taylor & Francis.\n\nHe coordinates the National Quantum Training Programme with CDAC Bangalore, founded Shoolini’s Student Research Council, and teaches data science and AI courses. Earlier, he worked at DIPR-DRDO and was a Program Manager at CodePath.org in California. His recognitions include NITI Aayog’s Mentor Beyond Measure Award (2025).",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/anitya-gupta/",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s16",
    "slug": "yousef-yeganeh",
    "kind": "session",
    "day": 1,
    "block": "Block 1C: Scientific Simulation, Quantum ML & Human-Centric AI",
    "startUtc": "2026-11-27T07:00:00Z",
    "endUtc": "2026-11-27T07:30:00Z",
    "aedt": "6:00 PM - 6:30 PM",
    "jst": "4:00 PM - 4:30 PM",
    "ist": "12:30 PM - 1:00 PM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Dr. Yousef Yeganeh",
    "designation": "Researcher and Lecturer",
    "affiliation": "Aalto University, Department of Computer Science; CAMP chair, Technical University of Munich (TUM)",
    "title": "Adapting and Controlling Pretrained Generative Models for Medical Imaging",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Diffusion models typically require large training sets. Medical imaging rarely offers them, due to acquisition cost and privacy constraints. Pretrained generative models are a natural starting point, but their training distributions differ substantially from medical data. This talk asks how pretrained generative models can be adapted to medical imaging, and how precisely their output can be controlled.\n\nThe session covers two methods. Latent Drifting (CVPR 2025) addresses the distribution gap between pretraining data and medical images. It can be combined with any fine-tuning method or applied at inference time as a conditioning signal. It enables counterfactual generation, for example showing how a scan would change with age, gender, or disease presence. Evaluations on longitudinal brain MRI and chest X-ray datasets report gains across several fine-tuning approaches. Directional Noise Conditioning (NeurIPS 2026) is more recent work in the same direction. It targets finer control over generation and cheap adaptation of pretrained models rather than sample diversity.\n\nThe session closes with open problems in evaluating counterfactual medical images, and the role of controllable generation in data augmentation and simulation for medical AI.\n\nPaper: https://openaccess.thecvf.com/content/CVPR2025/html/Yeganeh_Latent_Drifting_in_Diffusion_Models_for_Counterfactual_Medical_Image_Synthesis_CVPR_2025_paper.html\narXiv: https://arxiv.org/abs/2412.20651",
    "bio": "Yousef Yeganeh is a researcher and lecturer at the Department of Computer Science, Aalto University. He is also affiliated with the CAMP chair at the Technical University of Munich (TUM), where he completed his PhD. His research connects machine learning with medical imaging. It spans generative models, surgical scene understanding, and network architectures for complex anatomical structures. His recent work focuses on adapting pretrained generative models to medical data and on finer control over what they generate, including Latent Drifting (CVPR 2025) and Directional Noise Conditioning (NeurIPS 2026). He has published at CVPR, ICCV, ECCV, NeurIPS, AAAI, and MICCAI, and co-organizes the GRAIL workshop at MICCAI and the SU2HM workshop series.",
    "resourceLinks": [
      {
        "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Yeganeh_Latent_Drifting_in_Diffusion_Models_for_Counterfactual_Medical_Image_Synthesis_CVPR_2025_paper.html",
        "label": "Website"
      },
      {
        "url": "https://arxiv.org/abs/2412.20651",
        "label": "arXiv"
      }
    ],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/yousefyegane",
        "label": "LinkedIn"
      },
      {
        "url": "https://x.com/youyegn",
        "label": "X / Twitter"
      }
    ]
  },
  {
    "id": "s15",
    "slug": "a-seshaditya",
    "kind": "session",
    "day": 1,
    "block": "Block 1C: Scientific Simulation, Quantum ML & Human-Centric AI",
    "startUtc": "2026-11-27T07:30:00Z",
    "endUtc": "2026-11-27T08:00:00Z",
    "aedt": "6:30 PM - 7:00 PM",
    "jst": "4:30 PM - 5:00 PM",
    "ist": "1:00 PM - 1:30 PM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Dr. A Seshaditya",
    "designation": "Data Science",
    "affiliation": "quasi ai (Nubri GmbH)",
    "title": "Combining Quantum and Physics-Inspired AI (PINN) models for Crystal growth Simulations",
    "tracks": [
      "AI → Science",
      "DeepTech & Quantum"
    ],
    "abstract": "Developing the hybrid quantum-classical AI methods for engineering simulations in the space and energy sectors, focusing on accelerating Computational Fluid Dynamics (CFD) and multi-physics simulations. My research combines Scientific Machine Learning (Physics-Informed Neural Networks and Neural Operators) with quantum computing to develop scalable surrogate models for silicon crystal growth in semiconductor manufacturing and cryogenic liquid hydrogen storage for aerospace and clean energy applications. The long-term goal is to enable real-time, physics-constrained digital twins that can significantly reduce simulation time, support design optimization, and improve the efficiency and reliability of next-generation energy and space systems.\n\nwe are validating the Quantum Physics-Inspired AI models for accelerating the CFD simulations for silicon crystal growth (CZ method). we have trained the Hybrid quantum classical models (16-qubit circuits) on both Nvidia GPU emulators and then on IBM quantum hardware  https://github.com/masapasa/qcpinn-convection-diffusion-qiskit",
    "bio": "Academic background in Quantum and Computational Chemistry (PhD TU Berlin) and now working at the intersection of Scientific Machine Learning, Computational Fluid Dynamics, and quantum computing. I am the founder of Quasi Digital, where we develop quantum physics-inspired AI models for accelerating engineering simulations in semiconductor crystal growth and cryogenic hydrogen storage, with the long-term goal of enabling real-time digital twins for industrial applications.",
    "resourceLinks": [
      {
        "url": "https://github.com/masapasa/qcpinn-convection-diffusion-qiskit",
        "label": "GitHub"
      }
    ],
    "speakerLinks": [
      {
        "url": "https://quasi.digital",
        "label": "Website"
      },
      {
        "url": "https://github.com/adytiaa/quasi.ai",
        "label": "GitHub"
      },
      {
        "url": "https://www.linkedin.com/m/in/a-seshaditya-7180822a5/",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s17",
    "slug": "kai-park",
    "kind": "session",
    "day": 1,
    "block": "Block 1C: Scientific Simulation, Quantum ML & Human-Centric AI",
    "startUtc": "2026-11-27T08:00:00Z",
    "endUtc": "2026-11-27T08:30:00Z",
    "aedt": "7:00 PM - 7:30 PM",
    "jst": "5:00 PM - 5:30 PM",
    "ist": "1:30 PM - 2:00 PM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Ms. Kai Park",
    "designation": "Computational Linguist",
    "affiliation": "Independent Researcher (Computational Linguistics)",
    "title": "Beyond Benchmarks: How Empirical Linguistics and Cloud Infrastructure Empower Human-Centric AI Evaluation",
    "tracks": [
      "Science → AI"
    ],
    "abstract": "Standard evaluations of language models often prioritize surface-level task accuracy, overlooking the cognitive constraints and pragmatic subtleties that define human communication. Bridging this gap requires empirical linguistics—yet non-CS researchers frequently face steep computational barriers when attempting to test linguistic hypotheses at scale.   In this talk, we explore how empirical linguistics serves as an indispensable science for AI evaluation, while showcasing a practical blueprint for how domain researchers can execute large-scale experiments without dedicated local hardware. Drawing from empirical studies—ranging from quantifying affective nuances in modal particles to demonstrating that cognitive accuracy does not guarantee affective alignment (presented at EMNLP PANDORA 2026)—we illustrate why linguistic rigor uncovers critical model blind spots. Furthermore, I share my hands-on workflow as an independent researcher navigating complex computing setups—specifically, how I balanced GPU and TPU resources across different experimental stages and utilized agentic coding to resolve low-level compiler errors and automate distributed training pipelines. Attendees will leave with both a scientific rationale for linguistics-driven AI evaluation and a practical perspective on how researchers can design and sustain their own scalable computational workflows.",
    "bio": "I am a computational linguist investigating how linguistic structures and human cognition can inform language model evaluation. My work combines controlled empirical experiments with quantitative corpus analysis to evaluate where current models align with human cognitive and socio-affective processing. My recent focus centers on using rigorous statistical frameworks and experimental linguistics to build more human-grounded evaluation pipelines for AI.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/bakeyeon/",
        "label": "LinkedIn"
      },
      {
        "url": "https://orcid.org/0000-0002-2854-0127",
        "label": "ORCID"
      }
    ]
  },
  {
    "id": "s35",
    "slug": "suthikshn-kumar-c-r",
    "kind": "session",
    "day": 1,
    "block": "Block 1C: Scientific Simulation, Quantum ML & Human-Centric AI",
    "startUtc": "2026-11-27T08:30:00Z",
    "endUtc": "2026-11-27T08:40:00Z",
    "aedt": "7:30 PM - 7:40 PM",
    "jst": "5:30 PM - 5:40 PM",
    "ist": "2:00 PM - 2:10 PM",
    "mins": 10,
    "format": "Lightning / Demo",
    "speaker": "Prof. Suthikshn Kumar C.R.",
    "designation": "Professor",
    "affiliation": "Defence Institute of Advanced Technology",
    "title": "Design and Development of LLM-Guru: A Multimodal AI Avatar for Large Language Model Education",
    "tracks": [
      "SciComm & Policy"
    ],
    "abstract": "The technological  advancement of Large Language Models (LLMs) has created a growing need for accessible and engaging educational approaches that help learners understand their underlying concepts, architectures, and practical applications.  This talk  presents LLM-Guru, a multimodal AI avatar designed to support the teaching and learning of LLMs through an interactive and engaging educational experience. The proposed system aims to combine AI-generated explanations with avatar-based presentation to make complex LLM concepts more accessible to learners with different levels of technical expertise. The learning approach focuses on explaining fundamental concepts, illustrating technical principles, and supporting learners in exploring topics related to LLM architectures, prompt engineering, retrieval-augmented generation, fine-tuning, and AI agents. By integrating conversational interaction with multimodal content delivery, LLM-Guru provides an alternative to conventional text-centric learning interfaces. This talk describes the motivation, design objectives, system architecture, and potential applications of the LLM-Guru. It also identifies key challenges associated with educational accuracy, response reliability, learner engagement, and the evaluation of AI-assisted learning. LLM-Guru offers a foundation for exploring avatar-based AI education and highlights opportunities for developing more interactive and accessible approaches to learning emerging AI technologies. Future work will evaluate the system's instructional effectiveness, technical reliability, usability, and impact on learner understanding.\n\nWeblink: https://llm-guru-ai-avatar-llm-instructor.ai.studio/",
    "bio": "Dr. CRS Kumar is currently Professor in the Department of Computer Science and Engineering (DIAT), DRDO, Ministry of Defence, GOI. His areas of interest are in AI, Cyber Security, Virtual Reality/Augmented Reality and Game Theory. He is a Fellow of IETE, Fellow of Institution of Engineers, Fellow of BCS, Senior Member of IEEE,  Chartered Engineer(Institution of Engineers), Distinguished Visitor Program(DVP) Speaker of IEEE Computer Society, Lean Six Sigma Green Belt, Certified Independent Director( Ministry of Corporate Affairs/IICA Databank).  He has also earned PhD, MTech, MBA, BE, PGP Certificates from  University of Melbourne, IITM, Bangalore University, Rutgers University, Massachusetts Institute of Technology(MIT) ,  University of Texas at Austin and Stanford Univerisity. Prof Kumar is top 1% ranked in Global Machine Learning coding competitions. He has supervised number of sponsored and student projects in AI and ML.",
    "resourceLinks": [
      {
        "url": "https://llm-guru-ai-avatar-llm-instructor.ai.studio/",
        "label": "Website"
      }
    ],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/cr-suthikshn-kumar-a56544170/",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s18",
    "slug": "svetlana-meissner",
    "kind": "session",
    "day": 1,
    "block": "Block 1D: Autonomous TPU Pipelines & Low-Resource Language Science",
    "startUtc": "2026-11-27T08:40:00Z",
    "endUtc": "2026-11-27T09:40:00Z",
    "aedt": "7:40 PM - 8:40 PM",
    "jst": "5:40 PM - 6:40 PM",
    "ist": "2:10 PM - 3:10 PM",
    "mins": 60,
    "format": "Workshop",
    "speaker": "Dr. Svetlana Meissner",
    "designation": "AI Trainer",
    "affiliation": "MDZ Spreeland, Brandenburg University of Technology (BTU)",
    "title": "Hands-on with AlphaEvolve & Antigravity: Powering Autonomous Agent Pipelines on TPUs",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Ready to build the next generation of autonomous intelligence? In this hands-on workshop, developers will dive deep into Antigravity and the Gemini Enterprise Agent Platform, integrating them with AlphaEvolve for continuous agent optimization accelerated by Google Cloud TPUs.\nWe will walk through building an end-to-end agentic workflow: setting up Antigravity task pipelines, defining evolutionary discovery loops with AlphaEvolve, and scaling distributed inference workloads. By the end of this session, you will have practical code patterns and deployment strategies to build resilient, self-improving agent systems on Google Cloud.",
    "bio": "Dr. Svetlana Meissner is a Google Developer Expert in AI/Cloud, entrepreneur, and AI leader at the Spreeland Digital Centre at Brandenburg University of Technology. With a doctorate in physics and a track record spanning the Fraunhofer Institute and neural network research, she specializes in transforming ambitious digital concepts into scalable realities.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.b-tu.de/en/fg-drahtlose-systeme/team/scientific-employees-1/fg-drahtlose-systeme-1",
        "label": "Website"
      },
      {
        "url": "https://www.linkedin.com/in/svetlanameissneraitrainer",
        "label": "LinkedIn"
      },
      {
        "url": "https://www.digitalzentrum-spreeland.de/Ueber-uns/Ansprechpartner/BTU-Cottbus-Senftenberg/Dr-Svetlana-Meissner.html",
        "label": "Website"
      }
    ]
  },
  {
    "id": "s21",
    "slug": "badal-nyalang",
    "kind": "session",
    "day": 1,
    "block": "Block 1D: Autonomous TPU Pipelines & Low-Resource Language Science",
    "startUtc": "2026-11-27T09:40:00Z",
    "endUtc": "2026-11-27T09:50:00Z",
    "aedt": "8:40 PM - 8:50 PM",
    "jst": "6:40 PM - 6:50 PM",
    "ist": "3:10 PM - 3:20 PM",
    "mins": 10,
    "format": "Lightning / Demo",
    "speaker": "Mr. Badal Nyalang",
    "designation": "Director",
    "affiliation": "MWire Labs",
    "title": "Ground Realities of Collecting Language Data in Northeast India",
    "tracks": [
      "SciComm & Policy"
    ],
    "abstract": "Northeast India has over 200 languages, and most have almost no digital data. Without data, speech and language AI cannot serve these communities. This lightning talk is about what it takes to fix that. We share how MWire Labs finds speakers, gets informed consent, records in noisy and low-connectivity settings, and handles dialect variation and missing standard spellings. We cover what went wrong, what quality checks caught, and what we would do differently. The goal is a practical playbook for anyone building datasets for under-resourced languages. Datasets and models are open on Hugging Face where possible.",
    "bio": "Badal Nyalang is the Founder and Director of MWire Labs, a research and AI deployment lab in Shillong, India. The lab builds foundational language AI for the 220+ indigenous languages of Northeast India, including speech recognition, translation, tokenizers and embeddings. He is an ACM Certified Reviewer and has reviewed for ACM, IEEE Access, ECCV and NeurIPS workshops. He holds an Advanced Certification in Applied Data Science, ML and AI from IIT Guwahati.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://mwirelabs.com/",
        "label": "Website"
      },
      {
        "url": "https://linkedin.com/in/badal-nyalang/",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "kind": "close",
    "day": 1,
    "block": "Block 1D: Autonomous TPU Pipelines & Low-Resource Language Science",
    "startUtc": "2026-11-27T09:50:00Z",
    "endUtc": "2026-11-27T09:50:00Z",
    "aedt": "8:50 PM",
    "jst": "6:50 PM",
    "ist": "3:20 PM",
    "mins": 0,
    "title": "Close of Day 1"
  },
  {
    "kind": "open",
    "day": 2,
    "block": "Block 2A: APAC Kickoff — Research Agency & Clinical Data",
    "startUtc": "2026-11-28T01:00:00Z",
    "endUtc": "2026-11-28T01:00:00Z",
    "aedt": "12:00 PM",
    "jst": "10:00 AM",
    "ist": "6:30 AM",
    "mins": 0,
    "title": "Welcome & DevFest Day 2 Kickoff (GDG AI for Science Australia)"
  },
  {
    "id": "s22",
    "slug": "praveena-thevisuthan",
    "kind": "session",
    "day": 2,
    "block": "Block 2A: APAC Kickoff — Research Agency & Clinical Data",
    "startUtc": "2026-11-28T01:00:00Z",
    "endUtc": "2026-11-28T01:30:00Z",
    "aedt": "12:00 PM - 12:30 PM",
    "jst": "10:00 AM - 10:30 AM",
    "ist": "6:30 AM - 7:00 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Dr. Praveena Thevisuthan",
    "designation": "Lecturer",
    "affiliation": "Excelsia University College, Australia",
    "title": "From AI Literacy to Scientific Empowerment: Building Trust and Human Agency in AI-Enabled Research",
    "tracks": [
      "SciComm & Policy"
    ],
    "abstract": "AI is transforming scientific research and opening the door to new knowledge and insights from data, as well as new modes of data communication and research. Generative AI tools can help researchers summarise literature, explore complex information, and communicate scientific results. However, as they become more prevalent, they have also raised concerns about reliability, transparency, research integrity, and human judgment.\n\nThis speak session will examine how AI literacy can help researchers engage with AI technologies critically, confidently, and responsibly. Drawing on the AI literacy skills identified by Long and Magerko (2020) and the general notion of AI literacy put forward by Ng et al. (2021), it explores why technical knowledge alone is not enough for meaningful AI use in scientific research.\n\nThe session builds on research on human – AI collaboration and on suitable reliance on AI systems (Dellermann et al., 2019) and proposes a conceptual framework that unites three aspects–AI literacy, informed trust and researcher agency. It reflects on how these dimensions can enable responsible and ethical AI use, support researchers in assessing AI-generated output, identify its limitations, and maintain control over consequential research decisions.\n\nThrough practical examples from literature synthesis with AI, scientific communication and research evaluation, critical thinking, ethical awareness and human oversight will be highlighted.\n\nThe session ends with a discussion of how universities and research institutions can enhance AI literacy and responsible research practices. Participants will acquire research-driven knowledge of the role of AI literacy, adjusted trust and human agency in responsible human-AI collaboration and scientific discovery.\n\n\nReferences:\n\nNg, D. T. K., Leung, J. K. L., Chu, S. K. W., & Qiao, M. S. (2021). Conceptualizing AI literacy: An exploratory review. Computers and Education: Artificial Intelligence, 2, 100041.https://doi.org/10.1016/j.caeai.2021.100041\n\nDellermann, D., Ebel, P., Söllner, M., & Leimeister, J. M. (2019). Hybrid Intelligence: D. Dellermann et al.: Hybrid Intelligence. Business & information systems engineering, 61(5), 637-643.. https://doi.org/10.1007/s12599-019-00595-2\n\nLong, D., & Magerko, B. (2020). What is AI literacy? Competencies and design considerations. Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems, 1–16. https://doi.org/10.1145/3313831.3376727",
    "bio": "Dr Praveena Thevisuthan is an experienced University Lecturer and Researcher with over 12 years of professional experience at both the local (Australia) and international levels. She coordinates and teaches multiple courses, including Management, HRM, Organisational Behaviour, Sustainability and Responsible Business Professionalism and related areas. In addition to her teaching responsibilities, she supervises Master’s Degree Research students and has successfully conducted numerous training sessions, seminars, and HDR workshops. She has published her work in Q1 and ABDC-A journals, as well as in book chapters. She was a speaker at All Day AI Global Conference 2026, an international virtual conference with over 12,000 registered participants worldwide, where she delivered a talk titled “From AI Literacy to AI Adoption: Building Employee Trust in Generative AI” She has participated in many prestigious international conferences, including ANZAM, AIRAANZ, and MPDI. Dr Praveena has presented her work as a Speaker at the World Congress on Education (WCE-2026) at Churchill College, Cambridge, UK, where she spoke on advancing AI literacy in higher education. She also has administrative experience at the university level, having served as a student counsellor, coordinator of the career guidance unit, and coordinator of the internal curriculum quality assurance unit. Dr Praveena has received many prestigious awards, including the Best Overall Performance Excellence Academic Award for a Bachelor´s Degree, the University of Newcastle Full PhD Scholarship, and the faculty winner of the Three-Minute Thesis Competition. In addition, she has served as a reviewer for top-tier academic journals (ABDC, A ) and for reputable international conferences (AIB and AOM). She is also a finalist for the 2026 She Inspires Awards- UK 2026 under the Champions of Culture Award Category, and a finalist for five awards- Working Women Awards- UK, 2026.",
    "resourceLinks": [
      {
        "url": "https://doi.org/10.1016/j.caeai.2021.100041",
        "label": "Website"
      },
      {
        "url": "https://doi.org/10.1007/s12599-019-00595-2",
        "label": "Website"
      },
      {
        "url": "https://doi.org/10.1145/3313831.3376727",
        "label": "Website"
      }
    ],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/praveena-thevisuthan-phd-09213677/",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s23",
    "slug": "yuvaraj-ghodke",
    "kind": "session",
    "day": 2,
    "block": "Block 2A: APAC Kickoff — Research Agency & Clinical Data",
    "startUtc": "2026-11-28T01:30:00Z",
    "endUtc": "2026-11-28T02:00:00Z",
    "aedt": "12:30 PM - 1:00 PM",
    "jst": "10:30 AM - 11:00 AM",
    "ist": "7:00 AM - 7:30 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Mr. Yuvaraj (Yuvi) Ghodke",
    "designation": "Sr Clinical Data Manager",
    "affiliation": "Australian National University",
    "title": "Connecting Clinical Trials, Real-World Data and Omics with AI",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Clinical trials, routine healthcare and omics research reveal complementary aspects of a patient’s health, yet these data often remain disconnected. This session makes the case for interconnected patient data as a foundation for accelerating clinical research with AI.\n\nUsing the example of Pfizer covid-19 vaccine (Comirnaty), the talk will explore how connecting molecular characteristics, treatment experiences and patient outcomes could speed up research outcomes. It will provide an accessible overview of how machine learning, large language models and agentic workflows could help researchers navigate these connections and shorten the path from research question to insight.\n\nThe session will also address the data quality, privacy, traceability and scientific judgement needed to make these approaches trustworthy. Participants will leave with a clearer understanding of the opportunity and practical starting points for AI-enabled research.",
    "bio": "Yuvi is a clinical research data specialist with over 21 years of experience across industry and academic research. His background includes roles with Oracle, IQVIA, the University of Sydney’s NHMRC Clinical Trials Centre, UNSW Kirby Institute and ANU, with expertise in clinical trials databases designing and research data management. He has supported studies for pharmaceutical customers including Novo Nordisk, Pfizer, Novartis and Eli Lilly.\nHe is proud to be part of Professor Mark Polizzotto's team that designed the first Australian clinical study on COVID-19 in March 2020.\n\nHis AI for Science interests centre on how AI can support (and speed up) clinical research through study protocol interpretation, data quality assessment and the integration of clinical trial, real-world and omics data. He is exploring practical approaches to making research data more interconnected, interpretable and ready for AI, drawing on his experience with the data challenges researchers face.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/yuvarajg/",
        "label": "LinkedIn"
      },
      {
        "url": "https://jcsmr.anu.edu.au/research/groups/polizzotto-group-clinical-hub-interventional-research",
        "label": "Website"
      },
      {
        "url": "https://www.unsw.edu.au/medicine-health/our-schools/biomedical-sciences/research-and-impact/research-themes/research-groups/pimanda-group-stem-cell-lab",
        "label": "Website"
      },
      {
        "url": "https://www.unsw.edu.au/staff/yuvaraj-ghodke",
        "label": "Website"
      }
    ]
  },
  {
    "kind": "break",
    "day": 2,
    "block": "Block 2B: Embodied Robotics, Edge Agents & Scientific Thinking",
    "startUtc": "2026-11-28T02:00:00Z",
    "endUtc": "2026-11-28T02:30:00Z",
    "aedt": "1:00 PM - 1:30 PM",
    "jst": "11:00 AM - 11:30 AM",
    "ist": "7:30 AM - 8:00 AM",
    "mins": 30,
    "title": "APAC Lunch Break · East Asia & India Alignment (30m)"
  },
  {
    "id": "s28",
    "slug": "hyung-taik-choi",
    "kind": "session",
    "day": 2,
    "block": "Block 2B: Embodied Robotics, Edge Agents & Scientific Thinking",
    "startUtc": "2026-11-28T02:30:00Z",
    "endUtc": "2026-11-28T03:30:00Z",
    "aedt": "1:30 PM - 2:30 PM",
    "jst": "11:30 AM - 12:30 PM",
    "ist": "8:00 AM - 9:00 AM",
    "mins": 60,
    "format": "Workshop",
    "speaker": "Mr. Hyung-Taik Choi",
    "designation": "Research Engineer",
    "affiliation": "Hyundai Motor Company",
    "title": "Grounding Vision-Language Models in the Physical World: Hands-On Pick-and-Place with Gemini Robotics ER 2",
    "tracks": [
      "DeepTech & Quantum"
    ],
    "abstract": "Bridging high-level semantic reasoning and low-level physical control remains a core hurdle in modern robotics. In this interactive technical session, we explore the integration of multimodal foundation models into physical robotic pipelines using the Gemini Robotics ER 2.\n\nAttendees will examine how vision-language models (VLMs) can interpret multi-camera scene context, perform zero-shot spatial bounding and precise 3D keypoint affordance detection, and translate open-vocabulary user directives into real-time manipulation trajectories on a 7-DOF robot  arm.\n\nWe walk through the full architecture of an embodied AI loop: capturing raw scene imagery, invoking the Gemini Robotics ER API for zero-shot object localization, extracting grasping affordances, and bridging predictions to motion planning pipelines via ROS 2 / MoveIt. We will demonstrate live how spatial prompting handles ambiguous tasks, changing lighting conditions, and cluttered environments where traditional rule-based perception fails. Participants will leave with reference implementations, API workflows, and practical design patterns for deploying agentic physical AI systems.\n\nKey Topics Covered:\n- Embodied Spatial Reasoning: Moving beyond standard 2D detection to bounding boxes, semantic centroid points, and grasp orientations directly from natural language prompts.\n- Agentic Task Decomposition: Breaking multi-stage manipulation workflows (\"find the red cubes and stack them into the bin\") into sequence-grounded tool calls.\n- Live Sandbox Integration: Architectural walkthrough of the Google AI Studio Franka Panda pick-and-place interactive demo running on the google-genai SDK.\n- Safety & Execution Boundaries: Managing model latency, API query consensus for high-precision manipulation, and trajectory boundary constraints in physical spaces.",
    "bio": "I’m Hyung-Taik Choi, a Research Engineer at Hyundai Motor Company working within Hyundai Motor Group's Robotics LAB. My work spans robotics product planning and development, with project experience in smart-factory inspection, customer-facing service robots, autonomous security patrol, and robot–building integration.\n\nWorking on robotics in real environments has shaped my interest in how AI capabilities translate into useful, reliable behavior. I’m particularly interested in embodied AI and human–robot interaction. I’m now looking to deepen that exploration through hands-on experiments with Google’s AI tools and robotics simulation, sharing practical lessons that others can reproduce and build on.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://linkedin.com/in/htcrefactor",
        "label": "LinkedIn"
      },
      {
        "url": "https://github.com/htcrefactor",
        "label": "GitHub"
      }
    ]
  },
  {
    "id": "s26",
    "slug": "utso-guha-roy",
    "kind": "session",
    "day": 2,
    "block": "Block 2B: Embodied Robotics, Edge Agents & Scientific Thinking",
    "startUtc": "2026-11-28T03:30:00Z",
    "endUtc": "2026-11-28T04:00:00Z",
    "aedt": "2:30 PM - 3:00 PM",
    "jst": "12:30 PM - 1:00 PM",
    "ist": "9:00 AM - 9:30 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Dr. Utso Guha Roy",
    "designation": "Co-Founder & Director",
    "affiliation": "Udgam AI Pvt Ltd",
    "title": "From Tissue to Smear: Repurposing a Histopathology Foundation Model for Breast FNA Cytology",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Foundation models trained on millions of histopathology images are changing how we build diagnostic AI, but almost all of them were trained on tissue sections. Cytology, where cells are smeared rather than cut, is a different visual world. Can a histology model still see what matters?\n\nThis session walks through an end-to-end project that applied Phikon-v2, a frozen self-supervised vision transformer trained on H&E histology, to breast fine-needle aspiration (FNA) cytology. The data covered 7,398 image patches from 312 patients across the five IAC Yokohama categories. Using only free Google Colab and a simple linear classifier on top of frozen features, the model separated high-risk (suspicious and malignant) from lower-risk patches with an AUC of 0.85 on a locked test set of unseen patients. At a threshold fixed in advance, it caught 95.5% of high-risk patches.\n\nThe talk covers the decisions that made the result trustworthy: patient-level splitting to prevent data leakage, native-resolution tiling instead of resizing, freezing every choice before touching the test set, and explainability through tile-level risk maps and occlusion analysis. It is equally candid about what did not work: intermediate categories remained hard, calibration was unstable, and patch-level thresholds did not transfer to patient-level decisions.\n\nKey takeaways for attendees\n\nHow to reuse a pathology foundation model on a new image domain without fine-tuning or paid compute.\nA practical evaluation checklist for medical imaging AI: patient-level splits, a frozen protocol, and patient-clustered confidence intervals.\nWhy a strong ranking score (AUC) and trustworthy probabilities are different things.\nWhere foundation models stop and clinical judgement must take over.",
    "bio": "Dr Utso Guha Roy is a consultant pathologist with about eight years of diagnostic experience and over 14 years in family medicine. His work sits where clinical pathology meets artificial intelligence, with a focus on computational pathology, generative AI in pathology, and responsible AI governance.\n\nHe is co-founder of the UDGAM AI & Health Research Center, soon to be incubated at Jadavpur University, and AI & Healthcare Lead at GovernAI. He also serves as Chief Medical Officer at Health Vectors, Global Ambassador for Path-IQ, and AI Trainer at UDAYAM AI. He mentors clinician-led AI capstone projects and runs hands-on training that helps doctors learn AI,build and critically evaluate AI tools. He holds ISO/IEC 42001:2023 Lead Auditor certification (BSI), along with CCAIM, ABAIM and a PDCC in Digital Pathology.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/dr-utso-guha-roy-02b25611a",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s27",
    "slug": "srinivas-reddy-gudala",
    "kind": "session",
    "mins": 30,
    "format": "Talk",
    "speaker": "Mr. Srinivas Reddy Gudala",
    "designation": "Staff Engineer, Developer Relations",
    "affiliation": "Qualcomm India Pvt Ltd",
    "title": "From Models to Actions: Building Agentic AI at the Edge",
    "tracks": [
      "DeepTech & Quantum"
    ],
    "abstract": "Generative AI has made powerful models increasingly accessible, but the next frontier is moving beyond models that simply generate responses toward intelligent systems that can perceive their environment, reason about it, use tools, make decisions, and take actions in the physical world.\n\nThis session explores how Agentic AI and Edge AI come together to enable autonomous, context-aware systems that operate closer to where data is generated and decisions need to be made. We will examine the journey from running an AI model on-device to building a complete agentic system, covering local inference, multimodal perception, tool use, memory and context, agent orchestration, hardware acceleration, and interaction with sensors and physical systems.\n\nUsing robotics and Physical AI as a practical framing, the session will walk through an architecture where observations from cameras and sensors become context for local AI models, which reason over that information and translate decisions into real-world actions. We will also discuss engineering considerations such as latency, privacy, connectivity, model size, quantization, compute constraints, and efficient CPU/GPU/NPU utilization when taking agents from cloud-centric prototypes to resource-constrained edge platforms.\n\nFinally, we will explore how these patterns can extend to robotics, autonomous scientific instruments, intelligent laboratories, field systems, and other scientific and engineering environments, where bringing AI closer to the physical world can enable a new generation of responsive and autonomous systems.\n\nAttendees will leave with a practical understanding of the architectural building blocks needed to evolve from running models at the edge to building agents that can perceive, reason, and act at the edge.",
    "bio": "",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/srinivasreddy4u/",
        "label": "LinkedIn"
      }
    ],
    "day": 2,
    "block": "Block 2B: Embodied Robotics, Edge Agents & Scientific Thinking",
    "startUtc": "2026-11-28T04:00:00Z",
    "endUtc": "2026-11-28T04:30:00Z",
    "aedt": "3:00 PM - 3:30 PM",
    "jst": "1:00 PM - 1:30 PM",
    "ist": "9:30 AM - 10:00 AM"
  },
  {
    "id": "s29",
    "slug": "deborsi-basu",
    "kind": "session",
    "day": 2,
    "block": "Block 2B: Embodied Robotics, Edge Agents & Scientific Thinking",
    "startUtc": "2026-11-28T04:30:00Z",
    "endUtc": "2026-11-28T05:00:00Z",
    "aedt": "3:30 PM - 4:00 PM",
    "jst": "1:30 PM - 2:00 PM",
    "ist": "10:00 AM - 10:30 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Dr. Deborsi Basu",
    "designation": "Experienced Scientific Researcher",
    "affiliation": "Ericsson Research India",
    "title": "Profit-Aware Cross-Slice Resource Allocation for Agentic-IoT Embracing Hybrid User Mobility",
    "tracks": [
      "DeepTech & Quantum"
    ],
    "abstract": "Modern 5G and beyond networks require intelligent management of limited radio and computational resources while supporting heterogeneous, autonomous devices. Additionally, the cell-free architecture model for next-generation mobile networks causes rapid handover for mobile UEs (User Entities). This may cause rapid energy depletion in local IoT devices along with the user's handset. Following this concern, this paper presents an end-to-end Software-Defined Networking (SDN) based Agentic control architecture tailored for smart AI-powered IoT (Internet of Things), enabling profit-aware network slicing. An MILP is framed for resource allocation decisions that are jointly optimized across the control plane and the radio access network (RAN). At the radio layer, an LSTM-enhanced Model Predictive Control (MPC) framework addresses temporal instability by predicting UE mobility. At the control layer, a Deep Reinforcement Learning (DRL) agent balances subscription revenue against Physical Resource Block (PRB) and virtual CPU (vCPU) costs. Extensive evaluations demonstrate that prediction-aware MPC improves allocation stability, while DRL-based control significantly increases operational profit.",
    "bio": "Currently, I am serving as an Experienced Scientific Researcher at Ericsson Research India (Ericsson R&D Bangalore, India) in their 6G Networks Research Team.\nPreviously, I served as a Post-Doctoral Research Scientist at the CONNECT Research Centre, Department of Computer Science and Statistics, of Trinity College Dublin, The University of Dublin, Ireland. \nI completed my PhD at the Communication Networks Lab in the Department of Electronics and Electrical Communication Engineering-IIT Kharagpur, India with the Joint collaboration of G. S. Sanyal School of Telecommunications, Indian Institute of Technology Kharagpur & Dept. of Electrical Engineering and Computer Science, Vanderbilt University, Tennessee, USA. The broad area of my research includes Next Generation Wireless Communication and Network Performance Optimisation. My areas of interest are Intelligent Software Defined Networking (SDN), OpenFlow Protocol Architecture Design, Network Function Virtualization (NFV) of AI-native 5G/6G communication, and beyond, Agentic ORAN Design, Semantic Communication, and related topics.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/deborsi-basu-8364a6103/",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s30",
    "slug": "trinh-hoang-tu",
    "kind": "session",
    "day": 2,
    "block": "Block 2B: Embodied Robotics, Edge Agents & Scientific Thinking",
    "startUtc": "2026-11-28T05:00:00Z",
    "endUtc": "2026-11-28T05:10:00Z",
    "aedt": "4:00 PM - 4:10 PM",
    "jst": "2:00 PM - 2:10 PM",
    "ist": "10:30 AM - 10:40 AM",
    "mins": 10,
    "format": "Lightning / Demo",
    "speaker": "Mr. Trinh Hoang Tu",
    "designation": "Software Engineer & Undergraduate Researcher",
    "affiliation": "Grab; HUFLIT",
    "title": "Beyond Model Accuracy: Evidence-Gated AI for Reliable Industrial Material Inspection",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Artificial intelligence is transforming industrial material inspection, but a critical challenge remains: can we trust an inspection decision based solely on a computer vision model's prediction?\n\nIn real-world inspection environments, model confidence is only one part of the decision-making process. Missing sensor data, calibration issues, and incomplete traceability can undermine the reliability of automated inspection systems, even when a model appears confident.\n\nIn this session, I will introduce SecureCoating-Vision, an AI-assisted industrial coating inspection prototype developed for the Global AI + Materials Innovation Application Competition 2026 at Tsinghua University, where it received an Excellence Award.\n\nThe system combines YOLO-based image segmentation with an evidence-gated decision architecture. Instead of relying exclusively on model predictions, it considers supporting evidence such as sensor validity, calibration status, and traceability information before producing one of three outcomes: PASS, REJECT, or HOLD.\n\nThrough a practical technical demonstration, I will explain:\n\n- Why model confidence alone is insufficient for reliable inspection decisions.\n- How an evidence-gated architecture can integrate AI predictions with operational safeguards.\n- How fail-closed decision logic can prevent automatic approval when critical evidence is missing.\n- What developers can learn from designing trustworthy AI-assisted inspection workflows.\n\nThe session will focus on system architecture, decision logic, and practical engineering lessons rather than claiming production deployment or experimentally validated industrial performance.\n\nIntended audience: AI engineers, researchers, developers, and practitioners interested in computer vision, trustworthy AI, and scientific or industrial automation.",
    "bio": "Trinh Hoang Tu is a Software Engineer (Backend, in Training) at Grab and an undergraduate researcher majoring in Cybersecurity at Ho Chi Minh City University of Foreign Languages and Information Technology (HUFLIT), Vietnam.\n\nHis interests include trustworthy AI, computer vision, intelligent systems, and the application of AI to real-world engineering challenges.\n\nHe developed SecureCoating-Vision, an AI-assisted industrial coating inspection prototype that combines computer vision with evidence-based decision logic to support reliable inspection workflows. The project received an Excellence Award at the Global AI + Materials Innovation Application Competition 2026, organized by Tsinghua University's School of Materials Science and Engineering.\n\nHe has also co-authored research accepted at CSoNet 2026 and SOICT 2026. Through his engineering and research activities, he is particularly interested in bridging machine learning prototypes and dependable, practical AI systems.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://linkedin.com/in/thtcsec",
        "label": "LinkedIn"
      },
      {
        "url": "https://hoangtu.dev",
        "label": "Website"
      },
      {
        "url": "https://github.com/thtcsec",
        "label": "GitHub"
      }
    ]
  },
  {
    "id": "s32",
    "slug": "shubham-sunil-patil",
    "kind": "session",
    "day": 2,
    "block": "Block 2B: Embodied Robotics, Edge Agents & Scientific Thinking",
    "startUtc": "2026-11-28T05:10:00Z",
    "endUtc": "2026-11-28T05:40:00Z",
    "aedt": "4:10 PM - 4:40 PM",
    "jst": "2:10 PM - 2:40 PM",
    "ist": "10:40 AM - 11:10 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Prof. Shubham Sunil Patil",
    "designation": "Assistant Professor",
    "affiliation": "Warana University, Kolhapur, Maharashtra, India",
    "title": "AI for Sustainable Science: Advancing Clean Energy and the UN Sustainable Development Goals",
    "tracks": [
      "AI → Science",
      "Science → AI",
      "SciComm & Policy"
    ],
    "abstract": "Artificial Intelligence (AI) is emerging as a transformative tool for accelerating scientific discovery and addressing global sustainability challenges. This session explores how AI, machine learning, deep learning, and data-driven scientific approaches can support clean energy development, improve energy efficiency, optimize renewable energy systems, and promote environmental sustainability. The session will highlight AI applications in solar and wind energy forecasting, smart grids, energy storage, electric vehicles, demand-side management, and intelligent energy management systems.\n\nThe session will also examine how AI-driven innovations contribute to the United Nations Sustainable Development Goals (SDGs), particularly **SDG 7: Affordable and Clean Energy, SDG 9: Industry, Innovation and Infrastructure, SDG 11: Sustainable Cities and Communities, SDG 12: Responsible Consumption and Production, and SDG 13: Climate Action**. Through practical examples, emerging research trends, and real-world applications, participants will gain insights into the opportunities and challenges of integrating AI into sustainable scientific research.\n\nThe session aims to encourage interdisciplinary collaboration among researchers, academicians, engineers, and industry professionals to develop innovative, energy-efficient, environmentally responsible, and scalable solutions for a sustainable future. It will also discuss key challenges, including data quality, computational requirements, model interpretability, ethical considerations, and the environmental footprint of AI technologies.",
    "bio": "I am an academic professional in Electrical Engineering with experience in teaching, research, and industry-academia collaboration. My professional activities include publishing research papers, serving as a reviewer for international conferences and journals, contributing to book chapters, and delivering Faculty Development Programme (FDP) sessions and industry guest lectures.\n\nMy interest in **AI for Science** focuses on exploring the application of artificial intelligence and machine learning to electrical engineering, renewable energy systems, smart grids, energy efficiency, and sustainable technological development. I am keen to promote interdisciplinary research, encourage AI-driven scientific innovation, and collaborate with researchers and academic institutions to address real-world engineering challenges through emerging AI technologies.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/shubham-sunil-patil-54b222127?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s13",
    "slug": "usha-ramani-vemuru",
    "kind": "session",
    "day": 2,
    "block": "Block 2B: Embodied Robotics, Edge Agents & Scientific Thinking",
    "startUtc": "2026-11-28T05:40:00Z",
    "endUtc": "2026-11-28T06:10:00Z",
    "aedt": "4:40 PM - 5:10 PM",
    "jst": "2:40 PM - 3:10 PM",
    "ist": "11:10 AM - 11:40 AM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Ms. Usha Ramani Vemuru",
    "designation": "Founder",
    "affiliation": "Gurujada",
    "title": "AI Can Explain Science — But Can It Help Us Think Like Scientists?",
    "tracks": [
      "SciComm & Policy"
    ],
    "abstract": "AI can explain a scientific concept in seconds. However, genuine scientific understanding requires questioning assumptions, developing hypotheses, interpreting evidence, and learning from mistakes. When two learners arrive at the same correct answer—one grasping the scientific principle and the other relying on memorization or instant AI output—how can learning systems recognize the difference?\n\nThis session explores how AI systems can make scientific reasoning visible rather than simply delivering final answers. We examine how passive content (such as a chemical equilibrium lecture) can be transformed into structured scientific inquiry where learners predict outcomes, articulate hypotheses, receive guided feedback, and iterate—using attempts, misconceptions, and retries as interpretable signals for educators and researchers.",
    "bio": "Usha Ramani Vemuru is an educator, entrepreneur and community leader working at the intersection of AI, education and technology.\n\nA former engineering professor, she is the co-founder of GURUJADA, an AI-enabled learning platform exploring how technology can help educators make learners' thinking visible, identify learning gaps and provide meaningful guidance at scale.\n\nShe leads Google Developer Groups Vizag and Women Techmakers Vizag, building communities that connect technology, learning and innovation. Through her podcast, Learning Paths, she engages with educators to explore how AI is transforming teaching and learning.\n\nHer current work focuses on an important question: how can AI help people develop genuine understanding rather than simply access instant answers?",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/vusharamani",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s31",
    "slug": "tass-paritt",
    "kind": "session",
    "day": 2,
    "block": "Block 2B: Embodied Robotics, Edge Agents & Scientific Thinking",
    "startUtc": "2026-11-28T06:10:00Z",
    "endUtc": "2026-11-28T06:20:00Z",
    "aedt": "5:10 PM - 5:20 PM",
    "jst": "3:10 PM - 3:20 PM",
    "ist": "11:40 AM - 11:50 AM",
    "mins": 10,
    "format": "Lightning / Demo",
    "speaker": "Dr. Tass Paritt",
    "designation": "CTO",
    "affiliation": "Inneurva",
    "title": "Powering Embodied AI with Touch: Crowdsourcing Open Large Tactile Models with Touch4xAi",
    "tracks": [
      "DeepTech & Quantum"
    ],
    "abstract": "While multimodal foundation models excel in vision, speech, and reasoning, Embodied AI and humanoid robotics require a sense of touch to interact safely with the physical world. Traditional tactile hardware remains specialized, fragile, expensive, and impossible to scale for global data collection.\nWe present Touch4xAi, an open-source framework and developer platform that converts commodity smartphone hardware into standardized physical tactile sensors. By capturing microphonic vibroacoustic friction signatures and impact transients during simple sliding and tapping protocols, Touch4xAi extracts intrinsic physical traits, including surface roughness, structural compliance, and mass density, grounded in tribology and contact mechanics physics.\nPowered by Google AI Studio with multi-agent pipeline unifies high-frequency Fast Fourier Transform (FFT) spectroscopy with synchronized IMU kinematics (accelerometer and gyroscope). To overcome hardware gain and velocity variances across heterogeneous mobile devices, measurements are evaluated as unbounded relative differential percentages calibrated against dynamic reference standards, such as human skin or standard textiles.\nThrough our live web-based demo (touch4xai.tass2944.workers.dev) and open GitHub repository (github.com/TassParitt/Touch4xAi), Touch4xAi establishes a scalable crowdsourcing data engine. We invite the global developer and scientific AI community to join this open-science initiative to collect high-density physical tactile datasets, democratize sensor metrology, and train foundational Large Tactile Models (LTMs) for the next generation of physical AI across diverse domains, including material science, clinical healthcare, e-commerce, and robotic manipulation.",
    "bio": "Dr. Tass Paritt holds a PhD in Surgical Robotics and brings over two decades of R&D expertise in clinical engineering, haptics, and medical device innovation. His work advances Embodied AI beyond visual and auditory perception by embedding a physical sense of touch into intelligent devices using tribology and contact mechanics algorithms. He leads Touch4xAi, an open-source initiative crowdsourcing global tactile datasets to train foundational Large Tactile Models (LTMs) for next-generation robotics, edge metrology, and physical AI applications.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://touch4xai.tass2944.workers.dev/",
        "label": "Website"
      },
      {
        "url": "https://github.com/TassParitt/Touch4xAi",
        "label": "GitHub"
      },
      {
        "url": "https://www.linkedin.com/in/tass-paritt-909257233/",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "kind": "break",
    "day": 2,
    "block": "Block 2C: GPU Scientific Computing, Life Sciences & Bioacoustics",
    "startUtc": "2026-11-28T06:20:00Z",
    "endUtc": "2026-11-28T06:30:00Z",
    "aedt": "5:20 PM - 5:30 PM",
    "jst": "3:20 PM - 3:30 PM",
    "ist": "11:50 AM - 12:00 PM",
    "mins": 10,
    "title": "Short Handover · India Noon Alignment (10m)"
  },
  {
    "id": "s33",
    "slug": "vinayak-raju-kage",
    "kind": "session",
    "day": 2,
    "block": "Block 2C: GPU Scientific Computing, Life Sciences & Bioacoustics",
    "startUtc": "2026-11-28T06:30:00Z",
    "endUtc": "2026-11-28T07:30:00Z",
    "aedt": "5:30 PM - 6:30 PM",
    "jst": "3:30 PM - 4:30 PM",
    "ist": "12:00 PM - 1:00 PM",
    "mins": 60,
    "format": "Workshop",
    "speaker": "Prof. Vinayak Raju Kage",
    "designation": "Assistant Professor",
    "affiliation": "Presidency University",
    "title": "Science for AI: Accelerating Scientific Intelligence with GPU Computing Exploring Physics-Informed Neural Networks, Mathematical Foundations, and Quantum-Inspired AI on GPUs",
    "tracks": [
      "Science → AI",
      "DeepTech & Quantum"
    ],
    "abstract": "The integration of scientific principles, mathematical foundations, physical laws, and quantum concepts is opening new possibilities for developing intelligent and computationally efficient AI systems. This one-hour hands-on session explores how scientific knowledge can inspire next-generation AI architectures and improve the accuracy, interpretability, and efficiency of machine learning models. The session introduces Physics-Informed Neural Networks (PINNs), which incorporate physical laws and governing equations into neural network training, along with mathematical and quantum-inspired concepts that support emerging AI algorithms. Participants will gain insights into how GPU computing accelerates computationally intensive scientific AI workloads through parallel processing, enabling faster model training, simulation, and experimentation. Using NVIDIA GPU infrastructure, the session will demonstrate the role of GPU acceleration in scientific machine learning and explore practical applications in physics, engineering, and computational research. The workshop aims to bridge the gap between scientific theory and AI implementation, providing participants with a foundational understanding of how GPU-powered scientific intelligence can address complex real-world problems.",
    "bio": "I am **Vinayak Raju Kage**, currently working as an **Assistant Professor in Computer Science at Presidency University, Bengaluru**, where I am also involved in coordinating the NVIDIA AI Center of Excellence.\n\nI have **7 years of teaching experience and 3 years of industry experience**, combining academic knowledge with practical, industry-oriented expertise. My primary interests lie in Artificial Intelligence, High-Performance Computing (HPC), GPU Computing, Deep Learning, and emerging technologies such as Quantum Computing.\n\nI am particularly passionate about leveraging advanced computing infrastructure, including NVIDIA GPU technologies, to develop scalable AI solutions. My work involves exploring GPU acceleration, CUDA programming, AI model development, and hands-on experimentation with large-scale computing environments.\n\nMy research interests include **AI-driven precision oncology, bioinformatics, computer vision, intelligent surveillance systems, multilingual AI, and AI-powered smart campus solutions**. I am especially interested in integrating High-Performance Computing with multi-omics data analysis to support precision medicine and healthcare research.\n\nBeyond research, I actively contribute to curriculum development, laboratory design, student mentoring, industry collaboration, and hands-on technical training. I believe that education should go beyond theoretical knowledge and empower students to build practical solutions to real-world challenges.\n\nI am also interested in developing interdisciplinary projects that combine AI with renewable energy, agriculture, healthcare, and cybersecurity. My approach is to bridge the gap between academic research and practical implementation by encouraging experimentation, innovation, and industry-relevant learning.\n\nMy long-term vision is to establish myself as a strong researcher in **High-Performance Computing and AI-driven scientific discovery**, contribute to impactful research publications, pursue advanced research in emerging computing paradigms, and build technology solutions that create meaningful societal impact.\n\nI believe that the true value of technology lies not merely in understanding how it works, but in using it to solve meaningful problems and create opportunities for others.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/vinayak-rk-a3388abb",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s34",
    "slug": "shasank-dixit",
    "kind": "session",
    "day": 2,
    "block": "Block 2C: GPU Scientific Computing, Life Sciences & Bioacoustics",
    "startUtc": "2026-11-28T07:30:00Z",
    "endUtc": "2026-11-28T08:00:00Z",
    "aedt": "6:30 PM - 7:00 PM",
    "jst": "4:30 PM - 5:00 PM",
    "ist": "1:00 PM - 1:30 PM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Mr. Shasank Dixit",
    "designation": "PhD Scholar",
    "affiliation": "IIT Jodhpur",
    "title": "LeafSum: Multicast Out, Aggregate Back — Rethinking Communication for Distributed Mixture-of-Experts AI",
    "tracks": [
      "DeepTech & Quantum"
    ],
    "abstract": "As AI models grow larger, faster GPUs alone are no longer sufficient to make distributed training efficient. Communication between accelerators is becoming a critical bottleneck, particularly in Mixture-of-Experts (MoE) architectures, where tokens are dynamically routed to multiple experts distributed across GPUs.\n\nWhat if the network could do more than simply forward packets?\n\nIn this session, I will introduce LeafSum: Multicast Out, Aggregate Back, an ongoing research project investigating how programmable network infrastructure can accelerate distributed MoE training.\n\nConventional expert-parallel systems rely heavily on GPU-to-GPU communication to dispatch token activations and collect expert outputs. LeafSum explores a different approach: multicast token activations toward selected experts and perform hierarchical in-network aggregation of weighted expert outputs on the return path.\n\nThe architecture combines three complementary ideas:\n\n1. Leaf-aware multicast: Reduce redundant data transfers by replicating token activations within the network.\n2. Hierarchical in-network aggregation: Combine eligible expert outputs closer to their computation locations, reducing return-path communication.\n3. Reduction-Domain-Aware (RDA) placement: Place frequently co-activated experts strategically to reduce cross-network traffic.\n\nPreliminary experiments using a 32-node simulated network with 4:1 oversubscription show a 3.07× improvement in modeled communication time for a DeepSeek-V3-inspired workload when computation–communication overlap is considered. A separate flow-level evaluation demonstrates a 47.4% reduction in network-link traffic. These are simulation-based results, not measurements from a deployed GPU cluster.\n\nBeyond performance, I will discuss the practical challenges of realizing this architecture using programmable switches, SmartNICs, and DPUs, including limited switch memory, numerical precision, congestion, and communication correctness.\n\nThe session will connect these ideas to modern AI infrastructure and explain why efficient distributed computing matters for increasingly large AI models used in scientific research.\n\nKey takeaway:  Scaling AI for scientific discovery requires innovations not only in model architectures and accelerators, but also in how data moves and computation is coordinated across distributed systems.\n\nRelated research and technologies: DeepSeek-V3 (2024), DeepEP (2025), DeepSeek Expert Parallelism Load Balancer (EPLB), programmable networking, and network-assisted collective communication.\n\n1) https://arxiv.org/abs/2412.19437\n2) https://github.com/deepseek-ai/DeepEP\n3) https://github.com/deepseek-ai/EPLB",
    "bio": "Shasank Dixit is a PhD researcher in Computer Science and Engineering at the Indian Institute of Technology (IIT) Jodhpur, India. His research lies at the intersection of **Artificial Intelligence, Computer Networks, and Distributed Computing**, with a focus on AI-driven network optimization and building efficient infrastructure for large-scale AI systems.\n\nHis work explores **Mixture-of-Experts (MoE) training, in-network aggregation, programmable networking, and resource-efficient distributed deep learning**. He has also worked on Graph Neural Networks (GNNs) and reinforcement learning for intelligent 5G network management.\n\nHe is a recipient of the **IndiaAI Fellowship (2026)** and won the **Best Idea Award at India Mobile Congress (IMC) 2026**, recognized among over 1,400 startups and innovators. His research contributions include papers accepted in IEEE Transactions on Network and Service Management and IEEE CCNC 2027.\n\nHe is passionate about advancing AI for Science through scalable, intelligent, and communication-efficient computing systems.",
    "resourceLinks": [
      {
        "url": "https://arxiv.org/abs/2412.19437",
        "label": "arXiv"
      },
      {
        "url": "https://github.com/deepseek-ai/DeepEP",
        "label": "GitHub"
      },
      {
        "url": "https://github.com/deepseek-ai/EPLB",
        "label": "GitHub"
      }
    ],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/shasank-dixit-250851212",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s36",
    "slug": "sara-el-ateif",
    "kind": "session",
    "day": 2,
    "block": "Block 2C: GPU Scientific Computing, Life Sciences & Bioacoustics",
    "startUtc": "2026-11-28T08:00:00Z",
    "endUtc": "2026-11-28T09:00:00Z",
    "aedt": "7:00 PM - 8:00 PM",
    "jst": "5:00 PM - 6:00 PM",
    "ist": "1:30 PM - 2:30 PM",
    "mins": 60,
    "format": "Workshop",
    "speaker": "Prof. Sara El-Ateif",
    "designation": "Assistant Professor",
    "affiliation": "ENSIASD, Ibn Zohr University",
    "title": "AI for Health & Life Sciences",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Artificial Intelligence is rapidly accelerating discovery in the health and life sciences, moving from general-purpose models to highly specialized tools. This session provides a concise introduction to Google's family of open-weight models specifically adapted for the complexities of medicine and biology. We will explore the capabilities of models such as MedGemma, a collection of variants trained for advanced medical text and image comprehension, and TxGemma, which is designed to accelerate therapeutic development. Beyond the theory, the second half of this workshop will serve as a practical, quick-start guide. Given that these are open-weight models, we will demonstrate how to access, load, and begin experimenting with them within Google's ecosystem, including practical workflows in Vertex AI Model Garden, Kaggle, and Google Colab. Attendees will leave with a clear understanding of what these models are and the first steps needed to leverage them for their own research and development.",
    "bio": "Dr. Sara El-Ateif is a Maître de Conférences in AI and Big Data at ENSIASD, Ibn Zohr University (Agadir, Morocco). She holds a PhD in Computer Science with a specialisation in multimodal deep learning, bridging theoretical AI and real-world applications. As a Google Developer Expert (GDE) in AI and a certified NVIDIA Deep Learning Institute (DLI) Instructor, she is deeply invested in advancing the field through both research and education, currently coordinating and mentoring over 120 engineering students.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/sara-el-ateif",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s37",
    "slug": "ameet-vaman-revankar",
    "kind": "session",
    "day": 2,
    "block": "Block 2C: GPU Scientific Computing, Life Sciences & Bioacoustics",
    "startUtc": "2026-11-28T09:00:00Z",
    "endUtc": "2026-11-28T09:30:00Z",
    "aedt": "8:00 PM - 8:30 PM",
    "jst": "6:00 PM - 6:30 PM",
    "ist": "2:30 PM - 3:00 PM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Dr. Ameet Vaman Revankar",
    "designation": "Professor of Orthodontics",
    "affiliation": "SDM College of Dental Sciences, SDM University, Dharwad",
    "title": "Assistive diagnostics using Antigravity: Building an agentic orthodontic copilot via the model context protocol",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Contemporary diagnostics involves examining of 3D data, interaction and manipulation of 3d rendering/computing software and conversion of the information gleaned by these processes into actionable decisions which include but are not limited to biomechanical plans.\nIn this lecture I present an end to end workflow in Google antigravity demonstrating how the  IDE coordinates diagnostic/research assistance complementing and enhancing human clinical acumen.\nWhat this session covers:\n1.        Antigravity as an Orchestration Hub: How Google Antigravity manages multi-step pipelines across editor, terminal, and MCP tools in the context of 3D data analytics.\n2.        Connecting Scientific Tools via MCP: Interfacing Antigravity with specialized medical software (3D Slicer via mcp-slicer via python tooling ) to enable 3D data segmentation, superimposition, simplistic 2d representation etc for research as well as patient/trainee education.\n3.        Human-in-the-Loop Co-Pilot: Structuring agents strictly as interactive code writers/interpreters. I showcase how Antigravity’s verifiable artifacts (task plans, walkthroughs, visual diffs) give full interpretability, auditability, and safety oversight before any diagnostic conclusion is arrived at by the clinician \nAttendees will gain a blueprint for using Google Antigravity via Model Context Protocol to build, privacy-compliant agentic workflows in computational medicine and life sciences.\n\nBrief snippets of this work can be found on my Linkedin posts -www.linkedin.com/in/ameet-vaman-phd-314bbb94",
    "bio": "Dr. Ameet Vaman Revankar B.D.S,  M.D.S \nis a Professor of Orthodontics and Dentofacial Orthopaedics at the SDM College of Dental Sciences, Dharwad. A distinguished academician with over 60 publications in top ranking journals he serves on the editorial board of BMC Oral Health (Springer Nature), Deep science publishing and Rajiv Gandhi university of health sciences dental journal (Govt of Karnataka) and has previously served as Executive Editor for the Journal of the Asia Pacific Orthodontic Society.\nDr. Revankar has lectured on international platforms including World Federation of Orthodontists London, Taiwan, Indonesia, and Cambodia. Bridging the gap between traditional dentistry and future technology, he is currently pioneering research with a PhD focused on Artificial Intelligence applications in Orthodontics.\nRecognized as the 'Best Senior Academician in Orthodontics' (2017 Guident Awards), and conferred the Clinical excellence in orthodontics, national award 2026 by the Indian Dental Association. He lectures extensively on AI in dentistry with more than 15 lectures in 2026 alone .  Notably, he conducted highly impactful full day AI hands-on courses at the various platforms such as the IOS PG Convention Delhi ,   South west Maharashtra, Madhya Pradesh orthodontic study group, Maratha Mandal dental college Belgaum , AME dental college Raichur, Vishnu dental college , Bheemavaram, AJ institute of dental Sciences, Mangalore , IDA DK branch . Dr Revankar has also lectured at the recently concluded IEEE (Bangalore)Medtech Conclave 2026 and presented his work on agentic AI in dentistry to an elite engineering audience. Dr. Revankar continues to push the boundaries of the profession, combining clinical excellence with the power of modern innovation. He has completed certification in healthcare AI from International  Institute of Information technology Hyderabad .",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/ameet-vaman-phd-314bbb94",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s38",
    "slug": "sara-el-hour",
    "kind": "session",
    "day": 2,
    "block": "Block 2C: GPU Scientific Computing, Life Sciences & Bioacoustics",
    "startUtc": "2026-11-28T09:30:00Z",
    "endUtc": "2026-11-28T10:00:00Z",
    "aedt": "8:30 PM - 9:00 PM",
    "jst": "6:30 PM - 7:00 PM",
    "ist": "3:00 PM - 3:30 PM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Ms. Sara El Hour",
    "designation": "MD candidate | Health Tech Entrepreneur",
    "affiliation": "Urgentis",
    "title": "AI Beyond Diagnosis: Transforming Prevention, Patient Education and the Continuum of Care",
    "tracks": [
      "DeepTech & Quantum"
    ],
    "abstract": "Artificial intelligence is increasingly transforming medicine through advances in diagnosis, medical imaging and clinical decision support. However, its potential in healthcare goes far beyond identifying diseases or assisting physicians in clinical decisions. AI can also address important gaps throughout the patient journey, from prevention and early awareness to emergency care, disease understanding and long-term patient support.\n\nThis session explores how AI can contribute to several complementary areas of healthcare:\n\n- Prevention and early risk awareness: using AI to identify health risk patterns, support early awareness and encourage preventive approaches, particularly for chronic diseases such as diabetes and hypertension.\n- Emergency care and healthcare orientation: developing AI-powered tools that help individuals better understand their symptoms, recognize situations requiring urgent attention, access appropriate first-aid information and navigate healthcare services.\n- Health literacy and disease education: making reliable medical information more accessible and understandable, helping patients learn about diseases, their risk factors, symptoms, complications and available treatment options.\n- Therapeutic patient education and chronic disease management:supporting patients in understanding and managing conditions such as diabetes, while helping healthcare professionals provide more personalized information and guidance.\n- Healthcare professional training: exploring AI-powered simulations that allow healthcare professionals to develop communication skills and better address patients' concerns, beliefs and difficulties with treatment.\n\nThese applications illustrate how AI can support not only healthcare professionals, but also patients and individuals before, during and after a medical encounter.\n\nThe session will also examine the challenges that must accompany this development, including medical reliability, patient safety, data privacy, accessibility, linguistic and cultural adaptation, and the need for appropriate human oversight.\n\nUltimately, the goal is to explore a broader vision of AI in healthcare: moving beyond diagnosis to strengthen prevention, improve access to medical information, support timely healthcare orientation and empower patients throughout their care journey.",
    "bio": "Sara El Hour is a MD candidate, AI developer, and health-tech entrepreneur based in Morocco, passionate about exploring the intersection of artificial intelligence, medicine, and scientific innovation.\n\nShe is the Co-founder of Urgentis, a health-tech startup exploring AI-driven solutions for emergency care, healthcare orientation, and access to health information. Her work extends to several areas of AI in healthcare, including preventive medicine, chronic disease risk assessment, machine learning for medical research, and AI-powered educational technologies.\n\nThrough projects involving digital health applications, data-driven approaches to disease prevention, and adaptive simulations for medical communication training, she explores how AI can address practical challenges across healthcare, research, and medical education.\n\nBeyond her project development activities, she is interested in the responsible application of AI, human-centered technology design, and scientific entrepreneurship, with a particular focus on developing solutions adapted to the realities and needs of emerging healthcare ecosystems.\n\nHer ambition is to help bridge the gap between medical knowledge, scientific research, and technological innovation.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/el-hour-sara-2794941a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s39",
    "slug": "samuel-babalola",
    "kind": "session",
    "day": 2,
    "block": "Block 2C: GPU Scientific Computing, Life Sciences & Bioacoustics",
    "startUtc": "2026-11-28T10:00:00Z",
    "endUtc": "2026-11-28T10:30:00Z",
    "aedt": "9:00 PM - 9:30 PM",
    "jst": "7:00 PM - 7:30 PM",
    "ist": "3:30 PM - 4:00 PM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Mr. Samuel Babalola",
    "designation": "AI/ML Researcher, Lead, Robust & Adaptive Systems Pod",
    "affiliation": "Ruzivo Research Lab, African Leadership University",
    "title": "Listening to the Soil: What Can Bioacoustics and Deep Learning Tell Us About Underground Life?",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Soil holds a large share of Earth’s biodiversity, yet studying soil fauna/organisms still depends on destructive sampling that captures only momentary snapshots, while existing agricultural sensing focuses almost entirely on abiotic factors like moisture and temperature. This talk presents research on non-invasive, continuous monitoring of soil fauna activity using passive bioacoustics, an approach that listens to the soil rather than digging it up. As soil organisms move, they produce subtle vibrations that can be captured with a piezoelectric contact sensor, recorded alongside soil moisture, temperature, and humidity to provide environmental context for the biological signal. Deep learning models then classify the level of biological activity from these recordings in real time.\n\nA persistent challenge in applying machine learning to real-world science is the scarcity of labelled data, and it is especially acute in domains like soil bioacoustics, where expert annotation of underground audio is rare and costly. The soil-acoustic recordings available for this work came without activity labels. To address this, the research introduces a dual-labelling pipeline that combines acoustic-index thresholding with unsupervised clustering, then trains a resolver model on the cases where both methods agree to label the remaining data. Five pretrained CNNs were compared on Mel-spectrograms, with a fine-tuned InceptionV3 classifying high versus low activity at 96% accuracy.\n\nThe talk closes by reflecting on limitations and open questions for the field, including validating acoustic proxy labels against biological ground truth, transferring models across sensors and soils, and understanding how environmental conditions drive soil fauna activity. This work received a Top Poster Award at Research in Africa Days, Deep Learning Indaba 2026, and was presented at ICICT 2026 (Springer).\n\nReferences and resources:\n\n1) Paper: Babalola, S., Ogore, M., Nsabiyumva, S. (2027). An AI Powered IoT System for Real-Time, Non-invasive Monitoring of Soil Biodiversity Using Bioacoustics. In: Proceedings of the 11th International Congress on Information and Communication Technology (ICICT 2026). Lecture Notes in Networks and Systems, vol 2118. Springer, Cham. https://doi.org/10.1007/978-3-032-36036-6_17 \n\n2) Code: https://github.com/SammyGbabs/FaunaPulse-Capstone-Project\n\n3) Dataset: Metcalf et al. (2023). Listening to Tropical Forest Soils. bioRxiv. https://doi.org/10.1101/2023.05.19.541323",
    "bio": "Samuel Babalola is an AI/ML researcher and engineer whose work focuses on building AI systems that stay reliable in real-world, low-resource settings, with research spanning robustness under distribution shift, reinforcement learning, computer vision, bioacoustics, and AI for health. He is the AI & LLM Lead for Aurah AI at Yield Haven LLC and an AI/ML Researcher at Ruzivo Research Lab, where he leads the Robust & Adaptive Systems pod. He also leads the Edge AI focus group at ML Collective and supports health research at ALU’s Center for Health Innovation and Impact. His work on AI-powered soil biodiversity monitoring using bioacoustics received a Top Poster Award at Research in Africa Days (RIAD), Deep Learning Indaba 2026 in Lagos, and was presented at ICICT 2026 (Springer). He also has work accepted at the GlobalSouthCV Workshop at BMVC 2026 and serves as a peer reviewer for ML4H 2026. He holds a BSc in Software Engineering (Machine Learning) from the African Leadership University.",
    "resourceLinks": [
      {
        "url": "https://doi.org/10.1007/978-3-032-36036-6_17",
        "label": "Website"
      },
      {
        "url": "https://github.com/SammyGbabs/FaunaPulse-Capstone-Project",
        "label": "GitHub"
      },
      {
        "url": "https://doi.org/10.1101/2023.05.19.541323",
        "label": "Website"
      }
    ],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/sammybabs/",
        "label": "LinkedIn"
      },
      {
        "url": "https://github.com/SammyGbabs",
        "label": "GitHub"
      }
    ]
  },
  {
    "kind": "break",
    "day": 2,
    "block": "Block 2D: Reproducible Science, Sustainable AI & Astrophysics",
    "startUtc": "2026-11-28T10:30:00Z",
    "endUtc": "2026-11-28T11:00:00Z",
    "aedt": "9:30 PM - 10:00 PM",
    "jst": "7:30 PM - 8:00 PM",
    "ist": "4:00 PM - 4:30 PM",
    "mins": 30,
    "title": "Evening Handover · EMEA & India Evening Alignment (30m)"
  },
  {
    "id": "s40",
    "slug": "houda-chihi",
    "kind": "session",
    "day": 2,
    "block": "Block 2D: Reproducible Science, Sustainable AI & Astrophysics",
    "startUtc": "2026-11-28T11:00:00Z",
    "endUtc": "2026-11-28T11:30:00Z",
    "aedt": "10:00 PM - 10:30 PM",
    "jst": "8:00 PM - 8:30 PM",
    "ist": "4:30 PM - 5:00 PM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Dr. Houda Chihi",
    "designation": "Senior Researcher",
    "affiliation": "InnovCOM SupCOM",
    "title": "AI Agents For Network Management Sustainability",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "The idea is to propose AI Agents for managing the network taking into consideration governance & Sustainability. The talk proposes a multi-layered conceptual architecture in which governance and sustainability are native architectural properties rather than post-hoc additions. The architecture distinguishes three cooperating layers: a Strategic Orchestration Layer that translates business intents and sustainability targets into regulation-aligned policies; an Operational Coordination Layer that distributes tasks among agents, mediates between local autonomy and global policy, and contains faults; and a Distributed Execution Layer in which specialized agents act on network infrastructure under tool-call level enforcement with complete audit logging. Defined governance interfaces between adjacent layers carry policies downward and audit evidence upward, while sustainability telemetry feeds energy and carbon indicators back to the strategic level.",
    "bio": "PhD in telecom, senior researcher at InnovCOM Lab of Sup'COM Tunisia, techwomen fellow 2019 hosted at Qualcomm California, Eugen Ionescu postdoc fellow2021 hosted at polytechnica university of Bucharest, international speaker & trainer and member in many associations about women in tech. My research focus is on AI, cybersecurity and internet governance. I am also an ICANN & IETF Fellow.",
    "resourceLinks": [],
    "speakerLinks": []
  },
  {
    "id": "s20",
    "slug": "yogita-chitriv",
    "kind": "session",
    "day": 2,
    "block": "Block 2D: Reproducible Science, Sustainable AI & Astrophysics",
    "startUtc": "2026-11-28T11:30:00Z",
    "endUtc": "2026-11-28T12:00:00Z",
    "aedt": "10:30 PM - 11:00 PM",
    "jst": "8:30 PM - 9:00 PM",
    "ist": "5:00 PM - 5:30 PM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Dr. Yogita Chitriv (Dubey)",
    "designation": "Associate Professor",
    "affiliation": "Yeshwantrao Chavan College of Engineering, Nagpur",
    "title": "Beyond Classification: Explainable and Efficient Deep Learning for AI-Driven Medical Discovery",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "Artificial Intelligence is transforming scientific research by enabling faster, more accurate, and data-driven discoveries. Medical imaging is one such domain where advanced deep learning architectures are opening new possibilities for disease detection, classification, and clinical decision support.\n\nThis talk explores the application of modern AI architectures, including Convolutional Neural Networks (CNNs), Vision Transformers, hybrid CNN-Transformer models, and ensemble learning approaches for intelligent medical image analysis. It will highlight research applications involving retinal Optical Coherence Tomography (OCT), Alzheimer's disease detection, and liver fibrosis grading.\n\nThe session will discuss how combining complementary deep learning architectures can improve feature representation and classification performance, while Explainable AI (XAI) techniques can help interpret model predictions and improve transparency. It will also address important research challenges, including model generalization, computational efficiency, interpretability, and the potential for deploying AI models in resource-constrained environments.\n\nThrough practical research insights and real-world application scenarios, participants will gain an understanding of how emerging AI techniques can accelerate scientific investigation and contribute to more intelligent healthcare solutions.\n\nThe talk will conclude with future research directions in efficient, explainable, and generalizable AI systems for scientific and clinical applications.",
    "bio": "Dr. Yogita Chitriv (Dubey) is an Associate Professor in the Department of Electronics and Telecommunication Engineering at Yeshwantrao Chavan College of Engineering (YCCE), Nagpur, India. Her research interests include Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Explainable AI, and Edge AI, with a particular focus on AI-driven scientific and healthcare applications.\n\nHer research explores advanced deep learning architectures, hybrid CNN-Transformer models, ensemble learning, and explainable AI techniques for medical image analysis, including retinal OCT classification, Alzheimer's disease detection, and liver fibrosis grading. She is particularly interested in developing efficient, interpretable, and generalizable AI models that can accelerate scientific discovery and support real-world clinical applications.\n\nShe actively contributes to academic research, interdisciplinary collaborations, and international research initiatives. She has published research in peer-reviewed journals and IEEE conferences and serves as a reviewer for international scientific journals and conferences. Through her research, teaching, and mentoring activities, she aims to bridge the gap between emerging AI technologies and practical scientific challenges. She has secured external research funding from CSIR-ASPIRE, AICTE-RPS, DST-FIST, and a collaboration with Harvard University funded by USAID.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://yogitachitriv.github.io/",
        "label": "Website"
      }
    ]
  },
  {
    "id": "s19",
    "slug": "krishna-kandi",
    "kind": "session",
    "day": 2,
    "block": "Block 2D: Reproducible Science, Sustainable AI & Astrophysics",
    "startUtc": "2026-11-28T12:00:00Z",
    "endUtc": "2026-11-28T12:30:00Z",
    "aedt": "11:00 PM - 11:30 PM",
    "jst": "9:00 PM - 9:30 PM",
    "ist": "5:30 PM - 6:00 PM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Mr. Krishna Kandi",
    "designation": "Senior Software Engineer",
    "affiliation": "Convoke",
    "title": "From Agent Output to Reproducible Evidence: Provenance-First AI Workflows",
    "tracks": [
      "AI → Science",
      "Science → AI"
    ],
    "abstract": "AI agents can generate hypotheses, invoke scientific tools, transform datasets, and summarize results, but a useful answer is not automatically reproducible evidence. When models, prompts, tools, or data change, teams may be unable to determine exactly how a result was produced. This session presents a language- and platform-independent architecture for evidence-bound agentic workflows using immutable execution manifests, content-addressed inputs and outputs, versioned tool metadata, recorded model and prompt parameters, explicit verification checkpoints, and replayable workflow graphs. The reference architecture shows how each claim can be traced to the data, tool invocation, and decision path that produced it, while distinguishing deterministic replay from probabilistic re-execution. Attendees will leave with a practical framework for designing AI-assisted research workflows that can be audited, reproduced, and safely evolved.",
    "bio": "Krishna Kandi is a Software Architect and Senior Software Engineer with 22 years of experience designing and developing distributed, high-availability systems across multiple programming languages and technologies. His work spans financial messaging, telecommunications, enterprise software, secure data processing, and event-driven architecture. His focus is on designing reliable applications that support complex workflows, large-scale data processing, secure communication, and failure recovery. Krishna is also the author of Hacking AI. He writes and speaks about practical software architecture patterns, including reproducibility, traceability, and reliability in tool-using AI systems.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/krishna-kandi-2370269/",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s41",
    "slug": "babzzine-roufaida",
    "kind": "session",
    "day": 2,
    "block": "Block 2D: Reproducible Science, Sustainable AI & Astrophysics",
    "startUtc": "2026-11-28T12:30:00Z",
    "endUtc": "2026-11-28T13:00:00Z",
    "aedt": "11:30 PM - 12:00 AM",
    "jst": "9:30 PM - 10:00 PM",
    "ist": "6:00 PM - 6:30 PM",
    "mins": 30,
    "format": "Talk",
    "speaker": "Ms. Babzzine Roufaida",
    "designation": "PhD Student in Generative AI Optimization",
    "affiliation": "EIGSI Casablanca, Morocco; 2IACS Laboratory, ENSET Mohammedia, Hassan II University of Casablanca",
    "title": "Beyond Accuracy: Measuring and Reducing the Environmental Footprint of Large Language Models",
    "tracks": [
      "Science → AI"
    ],
    "abstract": "As Large Language Models (LLMs) become increasingly integrated into scientific research and real-world applications, their computational demands raise important questions about energy efficiency, environmental sustainability, and responsible AI development.\n\nWhile traditional evaluation focuses primarily on model accuracy and task performance, a broader perspective is needed to understand the environmental implications of training, fine-tuning, and deploying these systems.\n\nDrawing on a systematic literature review of energy-efficient LLM optimization strategies, this session explores the key factors influencing computational energy consumption and carbon emissions. It introduces a structured perspective on optimization approaches, including model compression, parameter-efficient fine-tuning, quantization, and inference optimization.\n\nThe session will also discuss the challenges of comparing energy measurements across studies, the importance of transparent experimental reporting, and the trade-offs between model performance, computational efficiency, and environmental impact.\n\nParticipants will gain a clearer understanding of how to evaluate LLM efficiency beyond traditional performance metrics and how to incorporate sustainability considerations into AI research and development.\n\nKey takeaways:\n\n-Understanding the main sources of energy consumption in LLM workflows.\n\n-Exploring optimization strategies and their practical trade-offs.\n\n-Identifying limitations in current energy and carbon reporting practices.\n\n-Introducing a more systematic approach to evaluating sustainable AI systems.",
    "bio": "Roufaida Babzzine is a PhD researcher at EIGSI Casablanca, Morocco, affiliated with the 2IACS Laboratory at ENSET Mohammedia, Hassan II University. She holds an engineering degree in Industrial Digital Transformation.\n\nHer research focuses on the computational optimization of generative artificial intelligence, with particular interest in energy-efficient Large Language Models, sustainable AI, and resource-aware optimization strategies.\n\nHer scientific work includes a systematic literature review on energy-efficient LLM optimization, examining optimization techniques, environmental impact assessment, and transparent reporting practices.\n\nThrough her research, she aims to contribute to the development of more computationally efficient and environmentally responsible AI systems.",
    "resourceLinks": [],
    "speakerLinks": [
      {
        "url": "https://www.linkedin.com/in/roufaida-b-407b50243",
        "label": "LinkedIn"
      }
    ]
  },
  {
    "id": "s43",
    "slug": "aatmaj-amol-salunke",
    "kind": "session",
    "day": 2,
    "block": "Block 2D: Reproducible Science, Sustainable AI & Astrophysics",
    "startUtc": "2026-11-28T13:00:00Z",
    "endUtc": "2026-11-28T13:10:00Z",
    "aedt": "12:00 AM - 12:10 AM",
    "jst": "10:00 PM - 10:10 PM",
    "ist": "6:30 PM - 6:40 PM",
    "mins": 10,
    "format": "Lightning / Demo",
    "speaker": "Mr. Aatmaj Amol Salunke",
    "designation": "Google Summer of Code Contributor 2026",
    "affiliation": "ML4SCI",
    "title": "DLens: Closed Loop AI Agents for Dark Matter Gravitational Lensing",
    "tracks": [
      "AI → Science"
    ],
    "abstract": "DLens is a closed loop AI scientist for studying dark matter through strong gravitational lensing, built as part of ML4SCI’s DeepLense project in Google Summer of Code 2026. Six agents (data simulation, model design, training, inference, analysis, and an experiment planner) work together through typed contracts. The planner searches across six model families, including CNNs, ViTs, and group equivariant networks, then tunes the best candidates. The result: a 1.19M parameter model reaching 92.6% test accuracy versus 90.7% for a 21.28M parameter ResNet-34. We’ll also cover our simulation agent, which turns plain English physics descriptions into validated lenstronomy code, and a surprising finding: LLMs often write code for the wrong version of a library rather than hallucinating outright. Giving the agent a version pinned API cheat sheet raised the pass rate from about 83% to 99%. This work has been accepted for a spotlight talk at the AAAI 2026 Fall Symposium.\n\nCode: https://github.com/ML4SCI/DeepLense-AI-Scientist \nBlog: https://medium.com/@aatmajsalunke/an-ai-scientist-for-dark-matter-closed-loop-agents-for-strong-gravitational-lensing-e6e31a4b13ad",
    "bio": "I'm an MS in Artificial Intelligence student at Northeastern University's Khoury College, graduating in December 2026. My interest in space science started at ISRO and led me to the DeepLense project with ML4SCI through Google Summer of Code 2026. There I built DLens, a closed loop AI scientist that plans experiments, searches model architectures, and generates physics simulation code to study dark matter through strong gravitational lensing. DLens found a model that beat a standard baseline while using about 18 times fewer parameters, and the work was accepted as a spotlight talk at the AAAI 2026 Fall Symposium.",
    "resourceLinks": [
      {
        "url": "https://github.com/ML4SCI/DeepLense-AI-Scientist",
        "label": "GitHub"
      },
      {
        "url": "https://medium.com/@aatmajsalunke/an-ai-scientist-for-dark-matter-closed-loop-agents-for-strong-gravitational-lensing-e6e31a4b13ad",
        "label": "Article"
      }
    ],
    "speakerLinks": [
      {
        "url": "https://aatmaj28.github.io/Portfolio/",
        "label": "Website"
      },
      {
        "url": "https://www.linkedin.com/in/aatmaj-salunke-7106041b0/",
        "label": "LinkedIn"
      },
      {
        "url": "https://github.com/aatmaj28",
        "label": "GitHub"
      },
      {
        "url": "https://medium.com/@aatmajsalunke",
        "label": "Article"
      }
    ]
  },
  {
    "kind": "close",
    "day": 2,
    "block": "Block 2D: Reproducible Science, Sustainable AI & Astrophysics",
    "startUtc": "2026-11-28T13:10:00Z",
    "endUtc": "2026-11-28T13:10:00Z",
    "aedt": "12:10 AM",
    "jst": "10:10 PM",
    "ist": "6:40 PM",
    "mins": 0,
    "title": "Close of Day 2 · Thank you for joining DevFest 2026!"
  }
];
