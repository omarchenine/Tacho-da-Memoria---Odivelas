export type Language = "pt" | "en" | "es";

export interface Translations {
  [key: string]: {
    pt: string;
    en: string;
    es: string;
  };
}

const translations: Translations = {
  // ─── Navbar ───
  "nav.home": {
    pt: "Início",
    en: "Home",
    es: "Inicio",
  },
  "nav.menu": {
    pt: "Menu",
    en: "Menu",
    es: "Menú",
  },
  "nav.about": {
    pt: "A Nossa História",
    en: "Our Story",
    es: "Nuestra Historia",
  },
  "nav.gallery": {
    pt: "Galeria",
    en: "Gallery",
    es: "Galería",
  },
  "nav.contact": {
    pt: "Contactos",
    en: "Contact",
    es: "Contacto",
  },
  "nav.reserve": {
    pt: "Reservar Mesa",
    en: "Book a Table",
    es: "Reservar Mesa",
  },
  "nav.mobileMenu": {
    pt: "Abrir menu principal",
    en: "Open main menu",
    es: "Abrir menú principal",
  },

  // ─── Hero ───
  "hero.welcome": {
    pt: "Bem-vindo ao Tacho da Memória",
    en: "Welcome to Tacho da Memória",
    es: "Bienvenido a Tacho da Memória",
  },
  "hero.headline1": {
    pt: "Cozinha Tradicional Portuguesa,",
    en: "Traditional Portuguese Cuisine,",
    es: "Cocina Tradicional Portuguesa,",
  },
  "hero.headline2": {
    pt: "Feita com Paixão.",
    en: "Crafted with Passion.",
    es: "Hecha con Pasión.",
  },
  "hero.subtitle": {
    pt: "Redescubra os sabores autênticos que atravessam gerações. Ingredientes frescos do mar e da terra, preparados com o carinho das receitas de família.",
    en: "Rediscover authentic flavours that span generations. Fresh ingredients from sea and land, prepared with the warmth of family recipes.",
    es: "Redescubra los sabores auténticos que atraviesan generaciones. Ingredientes frescos del mar y la tierra, preparados con el cariño de las recetas familiares.",
  },
  "hero.cta.reserve": {
    pt: "Reservar uma Mesa",
    en: "Reserve a Table",
    es: "Reservar una Mesa",
  },
  "hero.cta.menu": {
    pt: "Ver o Nosso Menu",
    en: "View Our Menu",
    es: "Ver Nuestro Menú",
  },

  // ─── Featured Dishes ───
  "featured.subtitle": {
    pt: "Sugestões do Chef",
    en: "Chef's Suggestions",
    es: "Sugerencias del Chef",
  },
  "featured.title": {
    pt: "Destaques da Nossa Cozinha",
    en: "Our Kitchen Highlights",
    es: "Destacados de Nuestra Cocina",
  },
  "featured.description": {
    pt: "Criámos uma seleção de pratos icónicos que representam o melhor da gastronomia tradicional, combinando receitas de família com ingredientes selecionados.",
    en: "We've curated a selection of iconic dishes representing the finest of traditional cuisine, combining family recipes with carefully selected ingredients.",
    es: "Hemos creado una selección de platos icónicos que representan lo mejor de la gastronomía tradicional, combinando recetas familiares con ingredientes selectos.",
  },
  "featured.explore": {
    pt: "Explorar o Menu Completo",
    en: "Explore the Full Menu",
    es: "Explorar el Menú Completo",
  },
  "featured.national": {
    pt: "Ingredientes 100% Nacionais",
    en: "100% National Ingredients",
    es: "Ingredientes 100% Nacionales",
  },
  "featured.dish1.name": {
    pt: "Bacalhau à Lagareiro",
    en: "Bacalhau à Lagareiro",
    es: "Bacalhau à Lagareiro",
  },
  "featured.dish1.description": {
    pt: "Lombo de bacalhau da Islândia assado no forno com azeite virgem extra, alho fresco, cebola confitada e batatas a murro douradas.",
    en: "Icelandic cod loin oven-roasted with extra virgin olive oil, fresh garlic, confit onion and golden punched potatoes.",
    es: "Lomo de bacalao de Islandia asado al horno con aceite de oliva virgen extra, ajo fresco, cebolla confitada y patatas aplastadas doradas.",
  },
  "featured.dish1.badge": {
    pt: "O Favorito da Casa",
    en: "House Favourite",
    es: "El Favorito de la Casa",
  },
  "featured.dish2.name": {
    pt: "Posta Mirandesa Grelhada",
    en: "Grilled Mirandesa Steak",
    es: "Chuletón Mirandesa a la Parrilla",
  },
  "featured.dish2.description": {
    pt: "Corte nobre de carne de vaca de raça Mirandesa grelhada na brasa, servida com sal grosso, batata a murro e esparregado cremoso de espinafres.",
    en: "Noble cut of Mirandesa breed beef chargrilled over embers, served with coarse salt, punched potatoes and creamy spinach purée.",
    es: "Corte noble de carne de vaca de raza Mirandesa a la brasa, servida con sal gruesa, patatas aplastadas y puré cremoso de espinacas.",
  },
  "featured.dish2.badge": {
    pt: "Na Brasa",
    en: "Chargrilled",
    es: "A la Brasa",
  },
  "featured.dish3.name": {
    pt: "Trio de Pastéis de Nata com Licor",
    en: "Pastel de Nata Trio with Liqueur",
    es: "Trío de Pasteles de Nata con Licor",
  },
  "featured.dish3.description": {
    pt: "Pastéis de nata quentes saídos do forno, polvilhados com canela e açúcar em pó, acompanhados por um cálice de Licor Beirão artesanal.",
    en: "Warm custard tarts fresh from the oven, dusted with cinnamon and powdered sugar, accompanied by a glass of artisanal Licor Beirão.",
    es: "Pasteles de nata calientes recién salidos del horno, espolvoreados con canela y azúcar glas, acompañados de una copa de Licor Beirão artesanal.",
  },
  "featured.dish3.badge": {
    pt: "Especialidade Doces",
    en: "Dessert Specialty",
    es: "Especialidad de Postres",
  },

  // ─── About ───
  "about.subtitle": {
    pt: "A Nossa Essência",
    en: "Our Essence",
    es: "Nuestra Esencia",
  },
  "about.title": {
    pt: "Receitas que Contam Histórias, Cozinhadas no Tacho.",
    en: "Recipes that Tell Stories, Cooked in the Pot.",
    es: "Recetas que Cuentan Historias, Cocinadas en la Olla.",
  },
  "about.p1": {
    pt: "O Tacho da Memória nasceu do desejo de reavivar as tardes de domingo passadas à volta da mesa em família. Inspirados pela cozinha tradicional da nossa avó Teresa, decidimos trazer para Odivelas os sabores que marcaram a nossa infância e que fazem parte do património gastronómico português.",
    en: "Tacho da Memória was born from the desire to revive Sunday afternoons spent around the family table. Inspired by our grandmother Teresa's traditional cooking, we decided to bring to Odivelas the flavours that marked our childhood and are part of Portugal's gastronomic heritage.",
    es: "Tacho da Memória nació del deseo de revivir las tardes de domingo pasadas alrededor de la mesa familiar. Inspirados por la cocina tradicional de nuestra abuela Teresa, decidimos traer a Odivelas los sabores que marcaron nuestra infancia y que forman parte del patrimonio gastronómico portugués.",
  },
  "about.p2": {
    pt: "Cada prato que sai do nosso fogão é preparado lentamente no tradicional tacho de barro ou ferro fundido, respeitando os tempos de cozedura e os segredos dos temperos antigos. Não apressamos a comida, pois acreditamos que a verdadeira alma da hospitalidade portuguesa se revela nos pormenores, na paciência e na generosidade de servir bem.",
    en: "Every dish from our kitchen is slowly prepared in a traditional clay or cast-iron pot, respecting cooking times and the secrets of ancient seasonings. We never rush food, because we believe the true soul of Portuguese hospitality reveals itself in the details, patience, and generosity of serving well.",
    es: "Cada plato que sale de nuestra cocina se prepara lentamente en la tradicional olla de barro o hierro fundido, respetando los tiempos de cocción y los secretos de los condimentos antiguos. No apresuramos la comida, porque creemos que la verdadera alma de la hospitalidad portuguesa se revela en los detalles, la paciencia y la generosidad de servir bien.",
  },
  "about.highlight1": {
    pt: "Receitas de Família Transmitidas por Gerações",
    en: "Family Recipes Passed Down Through Generations",
    es: "Recetas Familiares Transmitidas por Generaciones",
  },
  "about.highlight2": {
    pt: "Ingredientes Frescos do Mercado de Odivelas",
    en: "Fresh Ingredients from Odivelas Market",
    es: "Ingredientes Frescos del Mercado de Odivelas",
  },
  "about.highlight3": {
    pt: "Marisco e Peixe com Entrega Diária Nacional",
    en: "Seafood and Fish with Daily National Delivery",
    es: "Marisco y Pescado con Entrega Diaria Nacional",
  },
  "about.highlight4": {
    pt: "Ambiente Familiar Acolhedor e Tradicional",
    en: "Warm and Traditional Family Atmosphere",
    es: "Ambiente Familiar Acogedor y Tradicional",
  },
  "about.founders": {
    pt: "Fundadores & Cozinheiros",
    en: "Founders & Chefs",
    es: "Fundadores y Cocineros",
  },
  "about.freshBadge": {
    pt: "Ingredientes Frescos e Locais Todos os Dias",
    en: "Fresh & Local Ingredients Every Day",
    es: "Ingredientes Frescos y Locales Todos los Días",
  },
  "about.img1": {
    pt: "Nossa Sala de Jantar Acolhedora",
    en: "Our Cozy Dining Room",
    es: "Nuestro Acogedor Comedor",
  },
  "about.img2": {
    pt: "Chef a cozinhar no fogão tradicional",
    en: "Chef cooking on a traditional stove",
    es: "Chef cocinando en un fogón tradicional",
  },

  // ─── Menu Section ───
  "menu.subtitle": {
    pt: "A Nossa Ementa",
    en: "Our Menu",
    es: "Nuestra Carta",
  },
  "menu.title": {
    pt: "Menu do Tacho da Memória",
    en: "Tacho da Memória Menu",
    es: "Menú del Tacho da Memória",
  },
  "menu.description": {
    pt: "Todos os nossos pratos contam uma história. Explore as nossas categorias de petiscos, pratos principais, sobremesas e vinhos nacionais de excelência.",
    en: "Every dish tells a story. Explore our categories of appetisers, main courses, desserts and outstanding national wines.",
    es: "Todos nuestros platos cuentan una historia. Explore nuestras categorías de aperitivos, platos principales, postres y vinos nacionales de excelencia.",
  },
  "menu.cat.all": {
    pt: "Todos",
    en: "All",
    es: "Todos",
  },
  "menu.cat.starters": {
    pt: "Entradas",
    en: "Starters",
    es: "Entrantes",
  },
  "menu.cat.fish": {
    pt: "Peixe",
    en: "Fish",
    es: "Pescado",
  },
  "menu.cat.meat": {
    pt: "Carne",
    en: "Meat",
    es: "Carne",
  },
  "menu.cat.vegetarian": {
    pt: "Vegetariano",
    en: "Vegetarian",
    es: "Vegetariano",
  },
  "menu.cat.desserts": {
    pt: "Sobremesas",
    en: "Desserts",
    es: "Postres",
  },
  "menu.cat.wines": {
    pt: "Vinhos",
    en: "Wines",
    es: "Vinos",
  },
  "menu.allergen": {
    pt: "Aviso de Alergénios: Se tiver alguma alergia ou restrição alimentar, por favor informe o nosso pessoal de sala no momento do seu pedido ou reserva. Preços com IVA incluído à taxa legal em vigor.",
    en: "Allergen Notice: If you have any allergies or dietary restrictions, please inform our staff when placing your order or reservation. Prices include VAT at the current legal rate.",
    es: "Aviso de Alérgenos: Si tiene alguna alergia o restricción alimentaria, por favor informe a nuestro personal al hacer su pedido o reserva. Precios con IVA incluido a la tasa legal vigente.",
  },

  // ─── Menu Tags ───
  "tag.recommended": { pt: "Recomendado", en: "Recommended", es: "Recomendado" },
  "tag.specialty": { pt: "Especialidade", en: "Specialty", es: "Especialidad" },
  "tag.popular": { pt: "Popular", en: "Popular", es: "Popular" },
  "tag.signature": { pt: "Assinatura", en: "Signature", es: "Firma" },
  "tag.chargrilled": { pt: "Na Brasa", en: "Chargrilled", es: "A la Brasa" },
  "tag.traditional": { pt: "Tradicional", en: "Traditional", es: "Tradicional" },
  "tag.plantBased": { pt: "100% Vegetal", en: "100% Plant-Based", es: "100% Vegetal" },
  "tag.vegetarian": { pt: "Vegetariano", en: "Vegetarian", es: "Vegetariano" },
  "tag.familyRecipe": { pt: "Receita de Família", en: "Family Recipe", es: "Receta Familiar" },
  "tag.tradition": { pt: "Tradição", en: "Tradition", es: "Tradición" },

  // ─── Menu Items ───
  // Starters
  "dish.tabua.name": { pt: "Tábua da Memória", en: "Memória Board", es: "Tabla de la Memoria" },
  "dish.tabua.desc": {
    pt: "Seleção premium de queijos DOP, chouriço tradicional assado na brasa, presunto ibérico de bolota e azeitonas marinadas em alho e alecrim.",
    en: "Premium selection of DOP cheeses, chargrilled traditional chouriço sausage, acorn-fed Iberian ham and olives marinated with garlic and rosemary.",
    es: "Selección premium de quesos DOP, chorizo tradicional asado a la brasa, jamón ibérico de bellota y aceitunas marinadas en ajo y romero.",
  },
  "dish.bolinhos.name": { pt: "Bolinhos de Bacalhau", en: "Codfish Croquettes", es: "Croquetas de Bacalao" },
  "dish.bolinhos.desc": {
    pt: "Receita secular de pastéis de bacalhau crocantes por fora e macios por dentro, temperados com salsa fresca e servidos com maionese de alho assado.",
    en: "Age-old recipe of cod fritters, crispy outside and soft inside, seasoned with fresh parsley and served with roasted garlic mayonnaise.",
    es: "Receta centenaria de buñuelos de bacalao crujientes por fuera y suaves por dentro, sazonados con perejil fresco y servidos con mayonesa de ajo asado.",
  },
  "dish.ameijoas.name": { pt: "Amêijoas à Bulhão Pato", en: "Clams à Bulhão Pato", es: "Almejas à Bulhão Pato" },
  "dish.ameijoas.desc": {
    pt: "Amêijoas frescas abertas em azeite de oliveira, bastante alho, coentros picados e um toque de sumo de limão fresco. Acompanha com fatias de pão rústico.",
    en: "Fresh clams opened in olive oil, plenty of garlic, chopped coriander and a splash of fresh lemon juice. Served with rustic bread slices.",
    es: "Almejas frescas abiertas en aceite de oliva, abundante ajo, cilantro picado y un toque de zumo de limón fresco. Se acompaña con rebanadas de pan rústico.",
  },
  // Fish
  "dish.bacalhau.name": { pt: "Bacalhau à Lagareiro", en: "Bacalhau à Lagareiro", es: "Bacalhau à Lagareiro" },
  "dish.bacalhau.desc": {
    pt: "Lombo de bacalhau da Islândia assado no forno com azeite virgem extra, alho fresco, cebola confitada e batatas a murro douradas.",
    en: "Icelandic cod loin oven-roasted with extra virgin olive oil, fresh garlic, confit onion and golden punched potatoes.",
    es: "Lomo de bacalao de Islandia asado al horno con aceite de oliva virgen extra, ajo fresco, cebolla confitada y patatas aplastadas doradas.",
  },
  "dish.polvo.name": { pt: "Polvo à Lagareiro", en: "Octopus à Lagareiro", es: "Pulpo à Lagareiro" },
  "dish.polvo.desc": {
    pt: "Tentáculos de polvo tenros grelhados na brasa, regados com azeite quente e alho picado, acompanhados de batatas a murro assadas na casca e grelos salteados.",
    en: "Tender octopus tentacles chargrilled, drizzled with hot olive oil and minced garlic, served with punched potatoes roasted in their skins and sautéed turnip greens.",
    es: "Tentáculos de pulpo tiernos a la brasa, regados con aceite de oliva caliente y ajo picado, acompañados de patatas aplastadas asadas con piel y grelos salteados.",
  },
  "dish.arroz.name": { pt: "Arroz de Marisco Rico (para dois)", en: "Seafood Rice (for two)", es: "Arroz de Marisco Rico (para dos)" },
  "dish.arroz.desc": {
    pt: "Arroz caldoso de marisco tradicional, cozinhado num tacho de barro com camarão-tigre, amêijoas do Algarve, mexilhões e perfumado com coentros.",
    en: "Traditional soupy seafood rice, cooked in a clay pot with tiger prawns, Algarve clams, mussels and fragrant coriander.",
    es: "Arroz caldoso de marisco tradicional, cocinado en olla de barro con langostinos tigre, almejas del Algarve, mejillones y perfumado con cilantro.",
  },
  // Meat
  "dish.posta.name": { pt: "Posta Mirandesa", en: "Mirandesa Steak", es: "Chuletón Mirandesa" },
  "dish.posta.desc": {
    pt: "Posta alta de carne de vaca de raça Mirandesa grelhada na brasa, temperada apenas com sal grosso e servida com batata rústica e esparregado de legumes.",
    en: "Thick-cut Mirandesa breed beef steak chargrilled, seasoned only with coarse salt and served with rustic potatoes and vegetable purée.",
    es: "Chuletón alto de carne de vaca de raza Mirandesa a la brasa, sazonado solo con sal gruesa y servido con patata rústica y puré de verduras.",
  },
  "dish.secretos.name": { pt: "Secretos de Porco Preto", en: "Iberian Black Pork Secretos", es: "Secretos de Cerdo Ibérico" },
  "dish.secretos.desc": {
    pt: "Secretos de porco preto de raça alentejana grelhados no ponto com sal marinho, servidos com migas tradicionais de espargos verdes e batata frita caseira.",
    en: "Alentejo breed black pork secretos grilled to perfection with sea salt, served with traditional breadcrumb migas with green asparagus and homemade chips.",
    es: "Secretos de cerdo ibérico alentejano a la parrilla con sal marina, servidos con migas tradicionales de espárragos verdes y patatas fritas caseras.",
  },
  "dish.bochechas.name": { pt: "Bochechas de Porco no Tacho", en: "Slow-Braised Pork Cheeks", es: "Carrilleras de Cerdo en Olla" },
  "dish.bochechas.desc": {
    pt: "Bochechas de porco alentejano estufadas lentamente em vinho tinto do Douro por 4 horas, servidas com puré cremoso de batata-doce assada.",
    en: "Alentejo pork cheeks slow-braised in Douro red wine for 4 hours, served with creamy roasted sweet potato purée.",
    es: "Carrilleras de cerdo alentejano estofadas lentamente en vino tinto del Douro durante 4 horas, servidas con puré cremoso de batata asada.",
  },
  // Vegetarian
  "dish.feijoada.name": { pt: "Feijoada de Cogumelos Silvestres", en: "Wild Mushroom Feijoada", es: "Feijoada de Setas Silvestres" },
  "dish.feijoada.desc": {
    pt: "Tacho de feijoada rica sem produtos animais, confecionada com feijão manteiga, cogumelos do bosque, abóbora assada, cenoura e couve lombarda.",
    en: "Rich plant-based feijoada stew made with butter beans, forest mushrooms, roasted pumpkin, carrots and Savoy cabbage.",
    es: "Olla de feijoada rica sin productos animales, elaborada con alubias, setas del bosque, calabaza asada, zanahoria y col lombarda.",
  },
  "dish.risotto.name": { pt: "Risotto de Abóbora e Queijo de Cabra", en: "Pumpkin & Goat Cheese Risotto", es: "Risotto de Calabaza y Queso de Cabra" },
  "dish.risotto.desc": {
    pt: "Arroz arbóreo cozinhado com abóbora assada cremosa, finalizado com espinafres frescos, nozes caramelizadas e queijo de cabra artesanal gratinado.",
    en: "Arborio rice cooked with creamy roasted pumpkin, finished with fresh spinach, caramelised walnuts and gratinated artisan goat cheese.",
    es: "Arroz arbóreo cocinado con calabaza asada cremosa, finalizado con espinacas frescas, nueces caramelizadas y queso de cabra artesanal gratinado.",
  },
  // Desserts
  "dish.nata.name": { pt: "Pastel de Nata do Tacho", en: "Tacho's Pastel de Nata", es: "Pastel de Nata del Tacho" },
  "dish.nata.desc": {
    pt: "O tradicional pastel de nata quentinho acabado de sair do forno, servido com uma bola de gelado de canela caseiro e canela em pó.",
    en: "The traditional warm custard tart straight from the oven, served with a scoop of homemade cinnamon ice cream and a dusting of cinnamon.",
    es: "El tradicional pastel de nata calentito recién salido del horno, servido con una bola de helado de canela casero y canela en polvo.",
  },
  "dish.pudim.name": { pt: "Pudim Abade de Priscos", en: "Pudim Abade de Priscos", es: "Pudim Abade de Priscos" },
  "dish.pudim.desc": {
    pt: "Receita histórica de Braga, este pudim riquíssimo e sedoso é feito com gemas de ovos, calda de açúcar, casca de limão, canela e o indispensável presunto.",
    en: "A historic Braga recipe, this incredibly rich and silky pudding is made with egg yolks, sugar syrup, lemon zest, cinnamon and the essential touch of cured ham.",
    es: "Receta histórica de Braga, este pudín riquísimo y sedoso se elabora con yemas de huevo, almíbar, corteza de limón, canela y el indispensable jamón.",
  },
  "dish.mousse.name": { pt: "Mousse de Chocolate e Flor de Sal", en: "Chocolate & Fleur de Sel Mousse", es: "Mousse de Chocolate y Flor de Sal" },
  "dish.mousse.desc": {
    pt: "Mousse de chocolate negro caseira (70% cacau de origem sustentável) finalizada com raspas de laranja, azeite virgem extra e uma pitada de flor de sal.",
    en: "Homemade dark chocolate mousse (70% sustainably sourced cocoa) finished with orange zest, extra virgin olive oil and a pinch of fleur de sel.",
    es: "Mousse de chocolate negro casera (70% cacao de origen sostenible) finalizada con ralladura de naranja, aceite de oliva virgen extra y una pizca de flor de sal.",
  },
  // Wines
  "dish.alvarinho.name": { pt: "Quinta da Lixa Alvarinho (Vinho Verde)", en: "Quinta da Lixa Alvarinho (Vinho Verde)", es: "Quinta da Lixa Alvarinho (Vinho Verde)" },
  "dish.alvarinho.desc": {
    pt: "Garrafa. Vinho verde DOC premium, apresenta aroma frutado intenso, notas minerais marcantes e frescura crocante. Acompanha mariscos e peixes na perfeição.",
    en: "Bottle. Premium DOC Vinho Verde with intense fruity aroma, striking mineral notes and crisp freshness. Pairs perfectly with seafood and fish.",
    es: "Botella. Vinho Verde DOC premium, presenta aroma afrutado intenso, notas minerales marcantes y frescura crujiente. Acompaña mariscos y pescados a la perfección.",
  },
  "dish.papafigos.name": { pt: "Papa Figos Tinto (Douro)", en: "Papa Figos Red (Douro)", es: "Papa Figos Tinto (Douro)" },
  "dish.papafigos.desc": {
    pt: "Garrafa. Vinho do Douro elegante e encorpado, com perfil aromático rico em frutos pretos silvestres maduros e suaves toques de especiarias do estágio em carvalho.",
    en: "Bottle. Elegant and full-bodied Douro wine with a rich aromatic profile of ripe wild black fruit and gentle oak-aged spice notes.",
    es: "Botella. Vino del Douro elegante y con cuerpo, con perfil aromático rico en frutos negros silvestres maduros y suaves toques de especias del envejecimiento en roble.",
  },
  "dish.porto.name": { pt: "Porto Quinta do Portal Tawny 10 Anos", en: "Port Wine Quinta do Portal 10-Year Tawny", es: "Oporto Quinta do Portal Tawny 10 Años" },
  "dish.porto.desc": {
    pt: "Cálice. Vinho do Porto generoso, envelhecido em cascos de carvalho. Notas intensas de frutos secos, figos secos e mel. Perfeito para acompanhar pudins ou queijos.",
    en: "Glass. Generous Port wine, aged in oak casks. Intense notes of dried fruit, figs and honey. Perfect with puddings or cheeses.",
    es: "Copa. Vino de Oporto generoso, envejecido en barricas de roble. Notas intensas de frutos secos, higos secos y miel. Perfecto para acompañar pudines o quesos.",
  },

  // ─── Gallery ───
  "gallery.subtitle": {
    pt: "Memórias do Tacho",
    en: "Memories of the Pot",
    es: "Memorias de la Olla",
  },
  "gallery.title": {
    pt: "A Nossa Galeria",
    en: "Our Gallery",
    es: "Nuestra Galería",
  },
  "gallery.description": {
    pt: "Um vislumbre dos nossos pratos confecionados, do aconchego da nossa sala de jantar e dos sorrisos partilhados por quem nos visita.",
    en: "A glimpse of our crafted dishes, the warmth of our dining room and the smiles shared by those who visit us.",
    es: "Un vistazo a nuestros platos elaborados, la calidez de nuestro comedor y las sonrisas compartidas por quienes nos visitan.",
  },
  "gallery.zoom": { pt: "Zoom", en: "Zoom", es: "Zoom" },
  "gallery.of": { pt: "de", en: "of", es: "de" },
  "gallery.close": { pt: "Fechar galeria", en: "Close gallery", es: "Cerrar galería" },
  "gallery.prev": { pt: "Imagem anterior", en: "Previous image", es: "Imagen anterior" },
  "gallery.next": { pt: "Imagem seguinte", en: "Next image", es: "Imagen siguiente" },

  // ─── Testimonials ───
  "testimonials.subtitle": {
    pt: "Testemunhos",
    en: "Testimonials",
    es: "Testimonios",
  },
  "testimonials.title": {
    pt: "O que dizem os nossos Clientes",
    en: "What Our Guests Say",
    es: "Lo que dicen nuestros Clientes",
  },
  "testimonials.description": {
    pt: "Nada nos dá mais orgulho do que a satisfação de quem se senta à nossa mesa. Partilhamos algumas opiniões de quem nos visita.",
    en: "Nothing makes us prouder than the satisfaction of those who sit at our table. Here are some thoughts from our guests.",
    es: "Nada nos da más orgullo que la satisfacción de quienes se sientan a nuestra mesa. Compartimos algunas opiniones de quienes nos visitan.",
  },
  "testimonials.localClient": {
    pt: "Cliente local",
    en: "Local guest",
    es: "Cliente local",
  },
  "testimonials.review1": {
    pt: "A melhor Posta Mirandesa que já comi fora de Trás-os-Montes! A carne desfaz-se na boca e as batatas a murro são incríveis. O atendimento é de uma simpatia genuína que nos faz sentir em casa de familiares.",
    en: "The best Mirandesa steak I've ever eaten outside Trás-os-Montes! The meat melts in your mouth and the punched potatoes are incredible. The service is so genuinely warm it feels like being at a family member's home.",
    es: "¡El mejor chuletón Mirandesa que he comido fuera de Trás-os-Montes! La carne se deshace en la boca y las patatas aplastadas son increíbles. El servicio es de una amabilidad genuina que te hace sentir en casa de familiares.",
  },
  "testimonials.review2": {
    pt: "O Bacalhau à Lagareiro estava divinal! O azeite é de altíssima qualidade e o bacalhau lascava perfeitamente. O Pudim Abade de Priscos no fim coroou a refeição de forma soberba. Recomendo fazer reserva!",
    en: "The Bacalhau à Lagareiro was divine! The olive oil is of the highest quality and the cod flaked perfectly. The Pudim Abade de Priscos at the end crowned the meal superbly. I recommend making a reservation!",
    es: "¡El Bacalhau à Lagareiro estaba divino! El aceite de oliva es de altísima calidad y el bacalao se deshacía perfectamente. El Pudim Abade de Priscos al final coronó la comida de forma soberbia. ¡Recomiendo hacer reserva!",
  },
  "testimonials.review3": {
    pt: "Um verdadeiro tesouro em Odivelas. Pratos tradicionais autênticos cozinhados sem pressa, no tacho. A mousse de chocolate caseira com flor de sal e azeite é surpreendente. Para voltar todas as semanas.",
    en: "A true treasure in Odivelas. Authentic traditional dishes cooked without rush, in the pot. The homemade chocolate mousse with fleur de sel and olive oil is surprising. Worth returning every week.",
    es: "Un verdadero tesoro en Odivelas. Platos tradicionales auténticos cocinados sin prisa, en la olla. La mousse de chocolate casera con flor de sal y aceite de oliva es sorprendente. Para volver todas las semanas.",
  },

  // ─── Reservations ───
  "reservations.subtitle": {
    pt: "Garanta o seu Lugar",
    en: "Secure Your Spot",
    es: "Asegure su Lugar",
  },
  "reservations.title": {
    pt: "Reservar uma Mesa",
    en: "Book a Table",
    es: "Reservar una Mesa",
  },
  "reservations.description": {
    pt: "Partilhe connosco os seus planos de almoço ou jantar e faremos questão de lhe preparar a melhor receção tradicional.",
    en: "Share your lunch or dinner plans with us and we'll make sure to prepare the finest traditional welcome for you.",
    es: "Comparta con nosotros sus planes de almuerzo o cena y nos encargaremos de prepararle la mejor recepción tradicional.",
  },
  "reservations.name": { pt: "Nome Completo", en: "Full Name", es: "Nombre Completo" },
  "reservations.namePlaceholder": { pt: "ex. Maria Antónia Silva", en: "e.g. Maria Antónia Silva", es: "ej. María Antonia Silva" },
  "reservations.phone": { pt: "Telemóvel / Telefone", en: "Phone Number", es: "Teléfono / Móvil" },
  "reservations.phonePlaceholder": { pt: "ex. +351 912 345 678", en: "e.g. +351 912 345 678", es: "ej. +351 912 345 678" },
  "reservations.email": { pt: "Endereço de E-mail", en: "Email Address", es: "Dirección de E-mail" },
  "reservations.emailPlaceholder": { pt: "ex. maria.silva@email.com", en: "e.g. maria.silva@email.com", es: "ej. maria.silva@email.com" },
  "reservations.guests": { pt: "Número de Pessoas", en: "Number of Guests", es: "Número de Personas" },
  "reservations.person": { pt: "Pessoa", en: "Person", es: "Persona" },
  "reservations.persons": { pt: "Pessoas", en: "People", es: "Personas" },
  "reservations.moreThan12": { pt: "Mais de 12 Pessoas (Requer contacto telefónico)", en: "More than 12 People (Requires phone call)", es: "Más de 12 Personas (Requiere llamada telefónica)" },
  "reservations.date": { pt: "Data Pretendida", en: "Preferred Date", es: "Fecha Deseada" },
  "reservations.time": { pt: "Hora da Reserva", en: "Reservation Time", es: "Hora de la Reserva" },
  "reservations.timePlaceholder": { pt: "Selecione um horário...", en: "Select a time...", es: "Seleccione un horario..." },
  "reservations.requests": { pt: "Pedidos Especiais / Notas (Alergénios, etc.)", en: "Special Requests / Notes (Allergies, etc.)", es: "Peticiones Especiales / Notas (Alérgenos, etc.)" },
  "reservations.requestsPlaceholder": {
    pt: "Ex: Cadeira de bebé, mesa junto à janela, restrições alimentares (ex. sem glúten), bolo de aniversário...",
    en: "e.g. High chair, window table, dietary restrictions (e.g. gluten-free), birthday cake...",
    es: "Ej: Trona, mesa junto a la ventana, restricciones alimentarias (ej. sin gluten), tarta de cumpleaños...",
  },
  "reservations.submit": { pt: "Confirmar Pré-Reserva", en: "Confirm Pre-Reservation", es: "Confirmar Pre-Reserva" },
  "reservations.submitting": { pt: "A enviar pedido...", en: "Submitting request...", es: "Enviando solicitud..." },
  "reservations.success.title": { pt: "Reserva Submetida com Sucesso!", en: "Reservation Submitted Successfully!", es: "¡Reserva Enviada con Éxito!" },
  "reservations.success.details": { pt: "Detalhes do Pedido:", en: "Booking Details:", es: "Detalles de la Reserva:" },
  "reservations.success.nameLabel": { pt: "Nome:", en: "Name:", es: "Nombre:" },
  "reservations.success.dateLabel": { pt: "Data:", en: "Date:", es: "Fecha:" },
  "reservations.success.timeLabel": { pt: "Hora:", en: "Time:", es: "Hora:" },
  "reservations.success.guestsLabel": { pt: "Pessoas:", en: "Guests:", es: "Personas:" },
  "reservations.success.phoneLabel": { pt: "Telefone:", en: "Phone:", es: "Teléfono:" },
  "reservations.success.guestsValue": { pt: "convidados", en: "guests", es: "invitados" },
  "reservations.success.message": {
    pt: "A sua reserva encontra-se pré-confirmada. Enviámos um e-mail com os detalhes da reserva para",
    en: "Your reservation is pre-confirmed. We have sent a confirmation email with the booking details to",
    es: "Su reserva está preconfirmada. Hemos enviado un correo electrónico con los detalles de la reserva a",
  },
  "reservations.success.changeNote": {
    pt: "Caso necessite de alterações, por favor contacte-nos por telefone.",
    en: "If you need to make changes, please contact us by phone.",
    es: "Si necesita realizar cambios, por favor contáctenos por teléfono.",
  },
  "reservations.success.another": { pt: "Fazer outra Reserva", en: "Make Another Reservation", es: "Hacer otra Reserva" },
  "reservations.error.name": { pt: "O nome é obrigatório.", en: "Name is required.", es: "El nombre es obligatorio." },
  "reservations.error.phone": { pt: "O telefone é obrigatório.", en: "Phone is required.", es: "El teléfono es obligatorio." },
  "reservations.error.phoneInvalid": { pt: "Introduza um contacto de telefone válido (mínimo 9 algarismos).", en: "Please enter a valid phone number (minimum 9 digits).", es: "Introduzca un número de teléfono válido (mínimo 9 dígitos)." },
  "reservations.error.email": { pt: "O e-mail é obrigatório.", en: "Email is required.", es: "El e-mail es obligatorio." },
  "reservations.error.emailInvalid": { pt: "Introduza um endereço de e-mail válido.", en: "Please enter a valid email address.", es: "Introduzca una dirección de e-mail válida." },
  "reservations.error.date": { pt: "Por favor, selecione uma data.", en: "Please select a date.", es: "Por favor, seleccione una fecha." },
  "reservations.error.datePast": { pt: "A data da reserva não pode ser no passado.", en: "The reservation date cannot be in the past.", es: "La fecha de la reserva no puede ser en el pasado." },
  "reservations.error.time": { pt: "Por favor, selecione uma hora.", en: "Please select a time.", es: "Por favor, seleccione una hora." },
  "reservations.error.guests": { pt: "O número de convidados deve ser pelo menos 1.", en: "Number of guests must be at least 1.", es: "El número de invitados debe ser al menos 1." },
  "reservations.error.server": { pt: "Ocorreu um erro ao processar a sua reserva. Por favor tente novamente.", en: "An error occurred while processing your reservation. Please try again.", es: "Ocurrió un error al procesar su reserva. Por favor, inténtelo de nuevo." },
  "reservations.error.closed": { pt: "O restaurante está encerrado às segundas-feiras.", en: "The restaurant is closed on Mondays.", es: "El restaurante está cerrado los lunes." },

  // ─── Contact ───
  "contact.subtitle": {
    pt: "Fale Connosco",
    en: "Get in Touch",
    es: "Contacte con Nosotros",
  },
  "contact.title": {
    pt: "Contactos & Localização",
    en: "Contact & Location",
    es: "Contactos y Ubicación",
  },
  "contact.description": {
    pt: "Estamos situados no coração de Odivelas. Faça-nos uma visita, ligue para encomendar ou envie-nos as suas sugestões.",
    en: "We are located in the heart of Odivelas. Pay us a visit, call to order, or send us your suggestions.",
    es: "Estamos situados en el corazón de Odivelas. Háganos una visita, llame para pedir o envíenos sus sugerencias.",
  },
  "contact.location": { pt: "Onde Estamos", en: "Location", es: "Dónde Estamos" },
  "contact.directions": { pt: "Obter Direções", en: "Get Directions", es: "Obtener Direcciones" },
  "contact.phoneTitle": { pt: "Telefone", en: "Phone", es: "Teléfono" },
  "contact.callToReserve": { pt: "Ligar para Reservar", en: "Call to Reserve", es: "Llamar para Reservar" },
  "contact.emailTitle": { pt: "E-mail Geral", en: "General Email", es: "E-mail General" },
  "contact.sendEmail": { pt: "Enviar E-mail", en: "Send Email", es: "Enviar E-mail" },
  "contact.hours": { pt: "Horário de Funcionamento", en: "Opening Hours", es: "Horario de Apertura" },
  "contact.tueSat": { pt: "Terça-feira a Sábado", en: "Tuesday to Saturday", es: "Martes a Sábado" },
  "contact.sunday": { pt: "Domingo", en: "Sunday", es: "Domingo" },
  "contact.monday": { pt: "Segunda-feira", en: "Monday", es: "Lunes" },
  "contact.closed": { pt: "Encerrado para Descanso", en: "Closed for Rest", es: "Cerrado por Descanso" },

  // ─── Footer ───
  "footer.brand": {
    pt: "Tradição, família e a verdadeira essência da gastronomia portuguesa. Sabores que contam histórias a cada garfada, cozinhados com amor no coração de Odivelas.",
    en: "Tradition, family and the true essence of Portuguese cuisine. Flavours that tell stories with every bite, cooked with love in the heart of Odivelas.",
    es: "Tradición, familia y la verdadera esencia de la gastronomía portuguesa. Sabores que cuentan historias en cada bocado, cocinados con amor en el corazón de Odivelas.",
  },
  "footer.nav": { pt: "Navegação", en: "Navigation", es: "Navegación" },
  "footer.navMenu": { pt: "O Nosso Menu", en: "Our Menu", es: "Nuestro Menú" },
  "footer.navAbout": { pt: "A Nossa História", en: "Our Story", es: "Nuestra Historia" },
  "footer.navGallery": { pt: "Galeria", en: "Gallery", es: "Galería" },
  "footer.navReserve": { pt: "Reservar Mesa", en: "Book a Table", es: "Reservar Mesa" },
  "footer.contacts": { pt: "Contactos", en: "Contact", es: "Contactos" },
  "footer.schedule": { pt: "Horário", en: "Opening Hours", es: "Horario" },
  "footer.tueSat": { pt: "Terça a Sábado", en: "Tue to Sat", es: "Mar a Sáb" },
  "footer.sunday": { pt: "Domingo", en: "Sunday", es: "Domingo" },
  "footer.monday": { pt: "Segunda-feira", en: "Monday", es: "Lunes" },
  "footer.closedLabel": { pt: "Encerrado", en: "Closed", es: "Cerrado" },
  "footer.rights": { pt: "Todos os direitos reservados.", en: "All rights reserved.", es: "Todos los derechos reservados." },
  "footer.privacy": { pt: "Política de Privacidade", en: "Privacy Policy", es: "Política de Privacidad" },
  "footer.terms": { pt: "Termos e Condições", en: "Terms & Conditions", es: "Términos y Condiciones" },
  "footer.complaints": { pt: "Livro de Reclamações", en: "Complaints Book", es: "Libro de Reclamaciones" },

  // ─── Language Switcher ───
  "lang.pt": { pt: "PT", en: "PT", es: "PT" },
  "lang.en": { pt: "EN", en: "EN", es: "EN" },
  "lang.es": { pt: "ES", en: "ES", es: "ES" },
};

export default translations;
