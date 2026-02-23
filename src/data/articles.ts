export interface Article {
  id: string;
  title: string;
  summary: string;
  fullSummary: string;
  author: string;
  publisher: string;
  publisherLogo: string;
  thumbnail: string;
  date: string;
  category: string;
  externalUrl: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "OpenAI Unveils GPT-5 with Groundbreaking Reasoning Capabilities",
    summary: "The latest model demonstrates near-human performance on complex scientific and mathematical benchmarks.",
    fullSummary: "OpenAI has officially launched GPT-5, its most advanced large language model to date, showcasing remarkable improvements in logical reasoning, mathematical problem-solving, and scientific analysis. The model reportedly achieves scores within the top percentile on graduate-level examinations across multiple disciplines, marking a significant leap from its predecessor.\n\nIndustry experts are calling this release a pivotal moment for artificial intelligence, noting that GPT-5's ability to maintain coherent reasoning across extended multi-step problems sets a new standard for the field. OpenAI CEO Sam Altman emphasized the company's commitment to safety, revealing that GPT-5 underwent the most rigorous evaluation process in the company's history before its public release.",
    author: "Sarah Chen",
    publisher: "TechCrunch",
    publisherLogo: "https://img.icons8.com/color/48/t.png",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    date: "2026-02-23",
    category: "AI/ML",
    externalUrl: "https://techcrunch.com"
  },
  {
    id: "2",
    title: "Apple's Mixed Reality Headset Sales Surpass 10 Million Units",
    summary: "Vision Pro adoption accelerates as enterprise and consumer use cases expand rapidly.",
    fullSummary: "Apple's Vision Pro mixed reality headset has officially crossed the 10 million units sold milestone, a figure that industry analysts initially projected would take considerably longer to reach. The acceleration in sales has been attributed to a wave of enterprise partnerships and a growing library of immersive consumer applications.\n\nThe company announced new partnerships with major healthcare systems and architectural firms that are integrating Vision Pro into their daily workflows. Apple's SVP of Hardware Engineering noted that the spatial computing platform is evolving faster than any previous Apple product category, with developer interest surging as the ecosystem matures.",
    author: "Marcus Webb",
    publisher: "The Verge",
    publisherLogo: "https://img.icons8.com/color/48/v.png",
    thumbnail: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop",
    date: "2026-02-22",
    category: "Hardware",
    externalUrl: "https://theverge.com"
  },
  {
    id: "3",
    title: "Quantum Computing Achieves New Error Correction Milestone",
    summary: "Google's quantum team demonstrates fault-tolerant operations at unprecedented scale.",
    fullSummary: "Google's Quantum AI division has announced a breakthrough in quantum error correction, successfully demonstrating fault-tolerant quantum operations across a 1,000-qubit processor. This achievement addresses one of the most persistent challenges in quantum computing: maintaining the stability of quantum states long enough to perform meaningful calculations.\n\nThe implications of this breakthrough extend far beyond the laboratory. Researchers believe this milestone brings practical quantum computing applications—such as drug discovery simulations and complex financial modeling—significantly closer to reality. Several pharmaceutical companies have already expressed interest in early access programs to explore the technology's potential.",
    author: "Dr. Lisa Park",
    publisher: "Wired",
    publisherLogo: "https://img.icons8.com/color/48/w.png",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    date: "2026-02-21",
    category: "Science",
    externalUrl: "https://wired.com"
  },
  {
    id: "4",
    title: "Tesla's Robotaxi Service Launches in 5 Major US Cities",
    summary: "Fully autonomous ride-hailing now available in San Francisco, Austin, Miami, Phoenix, and Las Vegas.",
    fullSummary: "Tesla has officially launched its long-anticipated Robotaxi service across five major US metropolitan areas, marking the company's most ambitious step into autonomous transportation. The service utilizes Tesla's latest fleet of purpose-built autonomous vehicles, featuring no steering wheel or pedals, and operates 24/7 in designated zones within each city.\n\nEarly rider feedback has been overwhelmingly positive, with users praising the smooth ride quality and competitive pricing. However, regulatory scrutiny remains intense, with the National Highway Traffic Safety Administration maintaining active oversight of the program. Tesla CEO Elon Musk projected that the service would expand to 20 additional cities by year's end.",
    author: "James Rodriguez",
    publisher: "Bloomberg",
    publisherLogo: "https://img.icons8.com/color/48/b.png",
    thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",
    date: "2026-02-20",
    category: "Automotive",
    externalUrl: "https://bloomberg.com"
  },
  {
    id: "5",
    title: "EU Passes Landmark AI Regulation Framework",
    summary: "The comprehensive legislation sets global precedent for governing artificial intelligence systems.",
    fullSummary: "The European Union has formally adopted its AI Act implementation guidelines, creating the world's most comprehensive regulatory framework for artificial intelligence. The legislation categorizes AI systems by risk level, imposing strict requirements on high-risk applications in healthcare, law enforcement, and critical infrastructure while maintaining lighter oversight for lower-risk consumer applications.\n\nTech companies have expressed mixed reactions to the new rules. While some praise the clarity and predictability the framework provides, others warn that overly stringent compliance requirements could stifle innovation and push AI development to less regulated regions. The regulation is expected to influence similar legislative efforts in the United States, Canada, and several Asian nations.",
    author: "Elena Müller",
    publisher: "Reuters",
    publisherLogo: "https://img.icons8.com/color/48/r.png",
    thumbnail: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
    date: "2026-02-19",
    category: "Policy",
    externalUrl: "https://reuters.com"
  },
  {
    id: "6",
    title: "SpaceX Starship Completes First Commercial Satellite Deployment",
    summary: "The fully reusable rocket system delivers 40 satellites to orbit in a single mission.",
    fullSummary: "SpaceX has achieved another historic milestone as its Starship launch system successfully completed its first commercial satellite deployment mission, placing 40 communications satellites into low Earth orbit in a single launch. The mission demonstrated Starship's unparalleled payload capacity and further validated the fully reusable rocket architecture.\n\nThe successful deployment marks the beginning of a new era in commercial space operations, with SpaceX already booking missions for dozens of additional customers. Industry analysts estimate that Starship's dramatically lower cost per kilogram to orbit could reduce satellite deployment expenses by up to 90% compared to traditional launch vehicles, potentially democratizing access to space for smaller companies and nations.",
    author: "David Kim",
    publisher: "Ars Technica",
    publisherLogo: "https://img.icons8.com/color/48/a.png",
    thumbnail: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=600&h=400&fit=crop",
    date: "2026-02-18",
    category: "Space",
    externalUrl: "https://arstechnica.com"
  },
  {
    id: "7",
    title: "Microsoft Integrates AI Copilot Across All Office Products",
    summary: "Every Microsoft 365 application now features deeply embedded AI assistance at no extra cost.",
    fullSummary: "Microsoft has announced that its AI Copilot feature is now fully integrated across the entire Microsoft 365 suite at no additional cost to subscribers, a move that analysts say could fundamentally reshape workplace productivity. The enhanced Copilot can now draft complex documents, analyze spreadsheets, create presentations, and manage email workflows with unprecedented sophistication.\n\nThe decision to include Copilot at no extra charge represents a strategic shift for Microsoft, which previously offered the feature as a premium add-on. CEO Satya Nadella described the move as part of Microsoft's vision to make AI an integral part of every knowledge worker's daily toolkit, predicting that within two years, working without AI assistance will feel as outdated as working without the internet.",
    author: "Rachel Adams",
    publisher: "The Information",
    publisherLogo: "https://img.icons8.com/color/48/i.png",
    thumbnail: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=600&h=400&fit=crop",
    date: "2026-02-17",
    category: "Enterprise",
    externalUrl: "https://theinformation.com"
  },
  {
    id: "8",
    title: "NVIDIA Announces Next-Gen GPU Architecture with 2x Performance Gains",
    summary: "The Blackwell Ultra chips promise to double AI training throughput while cutting energy consumption.",
    fullSummary: "NVIDIA has unveiled its next-generation Blackwell Ultra GPU architecture, promising to double AI training and inference performance while simultaneously reducing energy consumption by 40%. The announcement sent NVIDIA's stock to new all-time highs and reinforced the company's dominant position in the AI hardware market.\n\nThe new chips are designed specifically to handle the rapidly growing computational demands of frontier AI models, which are doubling in size approximately every six months. NVIDIA CEO Jensen Huang emphasized that the Blackwell Ultra architecture represents a fundamental rethinking of GPU design, incorporating novel memory architectures and interconnect technologies that address the most critical bottlenecks in large-scale AI training.",
    author: "Tom Nguyen",
    publisher: "AnandTech",
    publisherLogo: "https://img.icons8.com/color/48/n.png",
    thumbnail: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&h=400&fit=crop",
    date: "2026-02-16",
    category: "Hardware",
    externalUrl: "https://anandtech.com"
  },
  {
    id: "9",
    title: "Stripe Launches Embedded Banking Services for Platforms",
    summary: "Developers can now offer full banking features including accounts and cards through Stripe's API.",
    fullSummary: "Stripe has expanded beyond payments processing with the launch of Stripe Embedded Banking, a comprehensive suite of banking services that allows platforms and marketplaces to offer their users full-featured bank accounts, debit cards, and lending products. The service is built on Stripe's existing infrastructure and requires minimal integration effort for developers already using the platform.\n\nThe move positions Stripe as a direct competitor to traditional banking-as-a-service providers and represents a significant expansion of the fintech giant's addressable market. Early adopters include several major gig economy platforms and e-commerce marketplaces that see embedded banking as a way to increase user engagement and create new revenue streams.",
    author: "Priya Sharma",
    publisher: "TechCrunch",
    publisherLogo: "https://img.icons8.com/color/48/t.png",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    date: "2026-02-15",
    category: "Fintech",
    externalUrl: "https://techcrunch.com"
  },
  {
    id: "10",
    title: "GitHub Reports 100 Million Developers Now Use Copilot",
    summary: "AI-assisted coding has become the default workflow for the majority of professional developers.",
    fullSummary: "GitHub has announced that its Copilot AI coding assistant has reached 100 million active users, a milestone that underscores the rapid adoption of AI-assisted programming across the software development industry. The platform reports that Copilot now generates an average of 46% of all code written on GitHub, up from 30% just one year ago.\n\nThe data reveals interesting patterns in how developers interact with AI assistance. Senior developers tend to use Copilot primarily for boilerplate code and documentation, while junior developers leverage it more extensively for learning and problem-solving. GitHub's VP of Product emphasized that Copilot is not replacing developers but fundamentally changing how they work, allowing them to focus more on architecture and design decisions.",
    author: "Alex Turner",
    publisher: "GitHub Blog",
    publisherLogo: "https://img.icons8.com/color/48/g.png",
    thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
    date: "2026-02-14",
    category: "Developer",
    externalUrl: "https://github.blog"
  },
  {
    id: "11",
    title: "Samsung Unveils Tri-Fold Smartphone at MWC 2026",
    summary: "The Galaxy Z Tri-Fold features a screen that unfolds into a full-size tablet display.",
    fullSummary: "Samsung has stunned the tech world at Mobile World Congress 2026 with the reveal of its Galaxy Z Tri-Fold, a smartphone featuring an innovative tri-fold design that allows the device to transform from a standard phone into a full-size 10-inch tablet. The device uses Samsung's latest ultra-thin glass technology and a novel hinge mechanism that Samsung claims can withstand over 500,000 folds.\n\nThe Tri-Fold represents Samsung's most ambitious foldable device yet and directly challenges competing devices from Huawei and other Chinese manufacturers who have been gaining ground in the foldable market. Priced at $1,999, the device targets premium consumers and productivity-focused professionals who want a single device that can serve as both their phone and tablet.",
    author: "Ji-won Lee",
    publisher: "The Verge",
    publisherLogo: "https://img.icons8.com/color/48/v.png",
    thumbnail: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=400&fit=crop",
    date: "2026-02-13",
    category: "Mobile",
    externalUrl: "https://theverge.com"
  },
  {
    id: "12",
    title: "Anthropic Releases Claude 4 with Enhanced Safety Alignment",
    summary: "The new model sets benchmarks in both capability and responsible AI deployment standards.",
    fullSummary: "Anthropic has launched Claude 4, its most capable AI assistant to date, featuring significant advances in both raw performance and safety alignment. The model introduces a novel constitutional AI training approach that allows it to better handle nuanced ethical scenarios while maintaining high performance on technical tasks including coding, analysis, and creative writing.\n\nThe release comes with an industry-first transparency report detailing the model's known limitations, failure modes, and the extensive red-teaming process it underwent before launch. Anthropic CEO Dario Amodei stated that Claude 4 represents the company's belief that safety and capability are not at odds, noting that the model's improved alignment actually enables it to be more useful in sensitive professional contexts such as healthcare and legal analysis.",
    author: "Maria Santos",
    publisher: "Wired",
    publisherLogo: "https://img.icons8.com/color/48/w.png",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
    date: "2026-02-12",
    category: "AI/ML",
    externalUrl: "https://wired.com"
  },
  {
    id: "13",
    title: "AWS Launches Serverless Kubernetes with Zero Configuration",
    summary: "Amazon's new EKS Autopilot eliminates cluster management entirely for containerized workloads.",
    fullSummary: "Amazon Web Services has introduced EKS Autopilot, a fully serverless Kubernetes offering that removes the need for any cluster configuration or node management. The service automatically scales infrastructure based on workload demands, handles all security patching and updates, and charges only for the compute resources actually consumed by running containers.\n\nThe launch addresses one of the most common complaints about Kubernetes adoption: its operational complexity. AWS reports that during the beta period, organizations using EKS Autopilot reduced their infrastructure management overhead by an average of 70% while maintaining equivalent or better application performance. The service is expected to accelerate Kubernetes adoption among smaller organizations that previously lacked the expertise to manage complex container orchestration.",
    author: "Chris Martinez",
    publisher: "InfoWorld",
    publisherLogo: "https://img.icons8.com/color/48/i.png",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    date: "2026-02-11",
    category: "Cloud",
    externalUrl: "https://infoworld.com"
  },
  {
    id: "14",
    title: "Waymo Expands Autonomous Trucking to Interstate Routes",
    summary: "Self-driving freight trucks now operate on major highway corridors across the southern United States.",
    fullSummary: "Waymo has expanded its autonomous trucking operations to cover major interstate routes connecting Texas, Arizona, New Mexico, and California, marking the largest deployment of self-driving freight vehicles in US history. The trucks operate fully autonomously on highway segments while human safety drivers handle the first and last miles in urban areas.\n\nThe expansion comes after two years of successful pilot operations with zero at-fault incidents, a safety record that helped Waymo secure the necessary regulatory approvals across multiple states. Major logistics companies including FedEx and UPS have signed multi-year agreements to use the service, citing both safety improvements and the potential to address the persistent shortage of long-haul truck drivers in the United States.",
    author: "Mike Thompson",
    publisher: "Bloomberg",
    publisherLogo: "https://img.icons8.com/color/48/b.png",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    date: "2026-02-10",
    category: "Automotive",
    externalUrl: "https://bloomberg.com"
  },
  {
    id: "15",
    title: "Meta Launches Horizon Workrooms 2.0 with Photorealistic Avatars",
    summary: "New codec avatars render users' real-time expressions with uncanny accuracy in VR meetings.",
    fullSummary: "Meta has released a major update to its Horizon Workrooms virtual reality collaboration platform, featuring photorealistic codec avatars that capture and reproduce users' facial expressions, gestures, and body language in real-time. The technology uses advanced neural rendering to create avatar representations that are nearly indistinguishable from actual video feeds.\n\nThe update represents a significant step toward Meta's vision of making virtual meetings feel as natural and productive as in-person interactions. Early enterprise adopters report that the photorealistic avatars significantly reduce the fatigue commonly associated with prolonged VR sessions and improve the quality of interpersonal communication in remote teams. Meta plans to make the technology available on its Quest headsets through a free software update.",
    author: "Nina Patel",
    publisher: "The Verge",
    publisherLogo: "https://img.icons8.com/color/48/v.png",
    thumbnail: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&h=400&fit=crop",
    date: "2026-02-09",
    category: "VR/AR",
    externalUrl: "https://theverge.com"
  },
  {
    id: "16",
    title: "Rust Programming Language Overtakes C++ in Developer Survey",
    summary: "Stack Overflow's latest survey shows Rust as the most adopted systems programming language.",
    fullSummary: "The latest Stack Overflow Developer Survey reveals that Rust has overtaken C++ as the most widely adopted systems programming language among professional developers, a milestone that Rust advocates have been anticipating for years. The survey shows that 38% of professional developers now use Rust in their work, compared to 34% for C++, representing a dramatic shift in the systems programming landscape.\n\nThe surge in Rust adoption is attributed to several factors, including its memory safety guarantees, growing ecosystem of libraries and tools, and increasing adoption by major tech companies including Microsoft, Google, and Amazon. The Linux kernel's continued integration of Rust components has also lent significant credibility to the language, with kernel maintainers noting that Rust modules have exhibited significantly fewer memory-related bugs than equivalent C code.",
    author: "Steve Klabnik",
    publisher: "InfoWorld",
    publisherLogo: "https://img.icons8.com/color/48/i.png",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910auj7?w=600&h=400&fit=crop",
    date: "2026-02-08",
    category: "Developer",
    externalUrl: "https://infoworld.com"
  },
  {
    id: "17",
    title: "Google DeepMind's AlphaFold 3 Maps All Known Protein Interactions",
    summary: "The AI system has predicted the structure of every known protein-protein interaction in biology.",
    fullSummary: "Google DeepMind has announced that AlphaFold 3 has successfully predicted the three-dimensional structures of virtually all known protein-protein interactions in biological systems, a feat that researchers estimate would have taken traditional experimental methods centuries to accomplish. The comprehensive protein interaction database is being made freely available to researchers worldwide.\n\nThe breakthrough has immediate implications for drug discovery, agricultural science, and our fundamental understanding of biological processes. Several pharmaceutical companies have already reported that AlphaFold 3's predictions have accelerated their drug development pipelines by months, with some candidate molecules reaching clinical trials significantly faster than traditional timelines would allow. DeepMind's lead researcher described the achievement as completing a new periodic table for biology.",
    author: "Dr. Amanda Foster",
    publisher: "Nature",
    publisherLogo: "https://img.icons8.com/color/48/n.png",
    thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
    date: "2026-02-07",
    category: "Science",
    externalUrl: "https://nature.com"
  },
  {
    id: "18",
    title: "ByteDance Launches AI Video Generator Rivaling Hollywood Quality",
    summary: "The new tool produces cinematic-quality video clips from text prompts in under 60 seconds.",
    fullSummary: "ByteDance has unveiled its latest AI video generation tool, capable of producing cinematic-quality video clips up to two minutes long from simple text descriptions. The tool, integrated into ByteDance's creative suite, can generate videos with realistic lighting, physics, and human movements that industry professionals say rival productions created with traditional Hollywood techniques.\n\nThe announcement has sent shockwaves through the entertainment industry, with filmmakers and content creators divided over the technology's implications. While some see it as a democratizing force that will enable independent creators to produce high-quality content, others express concern about its potential impact on employment in visual effects and production roles. ByteDance has implemented watermarking and content authentication systems to address concerns about deepfakes and misinformation.",
    author: "Wei Zhang",
    publisher: "TechCrunch",
    publisherLogo: "https://img.icons8.com/color/48/t.png",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    date: "2026-02-06",
    category: "AI/ML",
    externalUrl: "https://techcrunch.com"
  },
  {
    id: "19",
    title: "Cloudflare Introduces Zero-Latency Edge Database Service",
    summary: "D2 promises globally distributed SQL databases with sub-millisecond reads from any location.",
    fullSummary: "Cloudflare has launched D2, a globally distributed SQL database service that promises sub-millisecond read latency from any of its 300+ edge locations worldwide. The service automatically replicates data across regions while maintaining strong consistency guarantees, solving one of the most persistent challenges in distributed database design.\n\nD2 is built on a novel consensus protocol that Cloudflare developed in-house, which achieves consistency without the latency penalties typically associated with distributed transactions. Early adopters report dramatic improvements in application performance, particularly for globally distributed user bases. The pricing model, based on actual query execution rather than provisioned capacity, has attracted particular interest from startups and smaller companies looking to build globally performant applications without significant infrastructure investment.",
    author: "Jordan Blake",
    publisher: "The New Stack",
    publisherLogo: "https://img.icons8.com/color/48/s.png",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    date: "2026-02-05",
    category: "Cloud",
    externalUrl: "https://thenewstack.io"
  },
  {
    id: "20",
    title: "World's First Carbon-Negative Data Center Opens in Iceland",
    summary: "The facility captures more CO2 than it emits while powering major cloud computing operations.",
    fullSummary: "The world's first carbon-negative data center has begun operations in Reykjavik, Iceland, combining geothermal energy with direct air carbon capture technology to remove more CO2 from the atmosphere than the facility produces. The data center, a joint venture between several major tech companies, serves as proof that large-scale computing infrastructure can be not just carbon neutral but actively beneficial for the environment.\n\nThe facility's innovative design integrates carbon capture equipment that uses waste heat from server operations to power the CO2 extraction process, creating a symbiotic relationship between computing and carbon removal. The captured carbon is mineralized and stored in underground basalt formations, a method that researchers say can safely sequester CO2 for millions of years. Several cloud providers have already announced plans to route customer workloads through the facility for those seeking verifiably carbon-negative computing.",
    author: "Björk Sigurdsson",
    publisher: "Ars Technica",
    publisherLogo: "https://img.icons8.com/color/48/a.png",
    thumbnail: "https://images.unsplash.com/photo-1548612556-220873e71e64?w=600&h=400&fit=crop",
    date: "2026-02-04",
    category: "Green Tech",
    externalUrl: "https://arstechnica.com"
  }
];
