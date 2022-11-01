import { Schema } from "./models.js";

export const data: Schema = {
  baseOrderNumber: "1000",
  archive: [],
  credentials: [
    {
      username: "admin",
      password: "123",
    },
    {
      username: "chef",
      password: "abc123",
    },
  ],
  orders: [],
  menu: [
    {
      id: "101",
      name: "escargots",
      menuItems: [
        {
          id: "200",
          name: "Tradition",
          price: 149,
          description:
            "Autentiskt franskt lantrecept på escargots med persilja, vitlök och smör",
          image:
            "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/img_7379-snails.jpg",
        },
        {
          id: "201",
          name: "Au Gratin",
          price: 149,
          description:
            "Escargots med svamp, kronärtskocksbotten, spenat, Béchamelsås. Toppad med smält ost",
          image:
            "https://www.ratemds.com/blog/wp-content/uploads/2017/03/shutterstock_1159135375-720x320@2x.jpg",
        },
        {
          id: "202",
          name: "Cocotte",
          price: 189,
          description:
            "Ägg pocherat i Béchamelsås toppad med escargots och svamp, smaksatt med persilja, vitlök och smör",
          image:
            "https://www.beaune-tourism.com/sites/ot-beaune/files/styles/gallery_lightbox/public/content/images/vente_des_vins-beaune-escargots_paysage-min-min.jpg?itok=FeKJpG8U",
        },
        {
          id: "203",
          name: "Feuilles",
          price: 199,
          description:
            "Signaturrätt med hemgjord smördeg, escargots & svamp med vitlök och smörsås",
          image:
            "http://4.bp.blogspot.com/-3Flatg29-fE/VbCo46M5neI/AAAAAAAAct0/oPD9NVTW-rE/w1200-h630-p-k-no-nu/Caracoles%2Bde%2BBorgo%25C3%25B1a%2Ba%2Bla%2BMantequilla%2B%2528Escargots%2Bde%2BBourgogne%2Bbeurr%25C3%25A9s%2529.jpg",
        },
        {
          id: "204",
          name: "Quiche",
          price: 199,
          description:
            "Varm kaka (quichestil) av escargots kryddad med persilja, vitlök & smör bakad med spenat och strimlad mozzarellaost i en tunn smördegsskorpa",
          image:
            "https://static.cookist.it/wp-content/uploads/sites/21/2018/07/escargot.jpg",
        },
        {
          id: "205",
          name: "Salade",
          price: 199,
          description:
            "Hackad romansallad blandad med escargots (kryddad med persilja, vitlök & smör) och sauterade svampar. Toppad med hemgjorda kryddade krutonger.",
          image:
            "https://www.agrodolce.it/app/uploads/2017/04/shutterstock_246135493.jpg",
        },
        {
          id: "206",
          name: "Garlic",
          price: 199,
          description:
            "Escargot med hackad vitlök och dill, fylld med nyskördade arter",
          image:
            "https://assets.pikiran-rakyat.com/crop/14x607:1279x1544/x/photo/2022/07/30/3204133209.jpg",
        },
        {
          id: "207",
          name: "Estogo",
          price: 199,
          description:
            "Vår speciella och lyxigaste rätt, toppad med guldflarn och ängelvingar. Ingen mer beskrivning behövs",
          image:
            "https://www.tastefrance.com/sites/tastefrance.com/files/2021-04/image_Yarmolovich_Anastasy.jpg",
        },
      ],
    },
    {
      id: "102",
      name: "Barnmeny",
      menuItems: [
        {
          id: "300",
          name: "Hamburger",
          price: 89,
          description:
            "150g Hamburgare med sallad, dressing och ost, tillsammans med hamburgaren får man även en liten present!",
          image:
            "https://olo-images-live.imgix.net/34/349616f887c040a38e2e2bcc957fa1e9.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1200&h=800&fit=fill&fm=png32&bg=transparent&s=170fcee39166969a27b177b901d34a9a",
        },
        {
          id: "301",
          name: "Pancakes",
          price: 89,
          description:
            "Perfekt gräddade pannkakor med olika tillbehör som fem olika sorters sylt, bär och vispad grädde eller glass.",
          image:
            "https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Fluffy-Pancakes-New-CMS.jpg",
        },
        {
          id: "302",
          name: "Fish & Chips",
          price: 129,
          description:
            "Friterad vit fisk, handfångad av stans bästa fiskare, serveras med tjocka bitar av friterad potatis, serveras med dill och citron",
          image:
            "https://img.koket.se/standard-mega/per-morbergs-fish-and-chips.jpg",
        },
        {
          id: "303",
          name: "Kid Special",
          price: 199,
          description:
            "En liten snigel som passar för det lilla barnet, en bra första upplevelse av Escargot för den nyfikne.",
          image:
            "https://www.sheknows.com/wp-content/uploads/2018/12/jhvm7qchoinvje6owciw.jpeg",
        },
      ],
    },
    {
      id: "103",
      name: "Dryck",
      menuItems: [
        {
          id: "400",
          name: "Mandato",
          price: 99,
          description:
            "Livfulla smaker av solmogen mörk frukt som svarta plommon, körsbär och björnbär. Mjölkchoklad från ekfat och vidare till en fin örtighet som ramar in smaken elegant.",
          image:
            "https://www.creativefabrica.com/wp-content/uploads/2019/07/Wine-Bottle-Mockup-by-Nest-Studio-2-580x392.jpg",
        },
        {
          id: "401",
          name: "Prosecco",
          price: 89,
          description:
            "Friska smaker av citrus, gröna äpplen och aprikos. Intensiva och eleganta dofter av blommor, grapefrukt, päron, gröna äpplen, aprikos och lime",
          image:
            "https://static.independent.co.uk/2021/12/10/08/presidents%20blend%20.jpg",
        },
        {
          id: "402",
          name: "Courthézon",
          price: 129,
          description:
            "Aromer av mogna hallon, kryddiga plommon och nymalen svartpeppar. Silkeslena smaker med lager av svart frukt, djup och intensitet.",
          image:
            "https://media.gq-magazine.co.uk/photos/600ab116a4d204d1fe57ae9c/master/w_1600%2Cc_limit/220121_Wine.jpg",
        },
        {
          id: "403",
          name: "Cola",
          price: 29,
          description:
            "500ml Coca-Cola. Serveras med en färskt skuren citronskiva som tillsammans med det kylda glaset serverar en törstsläckande upplevelse.",
          image:
            "https://cdn.abicart.com/shop/images/191674885-origpic-8f5206/ws91/86391/art91/h4885/Coca-Cola-Diet-Coke-20cl-24pack.jpg",
        },
        {
          id: "404",
          name: "Fanta",
          price: 29,
          description:
            "500ml Fanta. Serveras med en färskt skuren citronskiva som tillsammans med det kylda glaset serverar en törstsläckande upplevelse.",
          image:
            "https://static-prod.adweek.com/wp-content/uploads/2017/06/fanta-spiral-bottle-hed-2017.jpg",
        },
      ],
    },
    {
      id: "104",
      name: "Efterrätt",
      menuItems: [
        {
          id: "500",
          name: "Au Chocolat",
          price: 99,
          description:
            "Tunn och lätt crêpe fylld med hemgjord chokladsås. Serveras med en sida av vispad grädde",
          image:
            "https://image.over-blog.com/VL4ACp5WoKdlCKV1YZaNI-AeEOo=/filters:no_upscale()/image%2F0651923%2F20210129%2Fob_3304f2_crepes-au-chocolat.jpg",
        },
        {
          id: "501",
          name: "Suzette",
          price: 49,
          description:
            "Smaksatt med färsk apelsinsås & flamberad med Grand-Marnier sprit, en smakupplevelse utöver det vanliga",
          image:
            "https://food-images.files.bbci.co.uk/food/recipes/classiccrepessuzette_66236_16x9.jpg",
        },
        {
          id: "502",
          name: "Mousse",
          price: 69,
          description: `Tillagad med mjölkchoklad och äggvita, glassstil, 'den bästa efterrätt jag någonsin smakat' `,
          image:
            "https://img.taste.com.au/I3x-cteh/taste/2010/01/chocolate_mousse_in_minutes_1980x1320-117905-1.jpg",
        },
        {
          id: "503",
          name: "Banana Split",
          price: 79,
          description:
            "Med skivad banan, en skopa glass, hemgjord chokladsås, vispgrädde & rostad skivad mandel",
          image:
            "https://images-gmi-pmc.edge-generalmills.com/fe3a5aca-9475-4a09-8507-2651c81fd7b8.jpg",
        },
        {
          id: "504",
          name: "Crème Brûlée",
          price: 69,
          description: `Kyld crème brulée toppad med en karamelliserad skorpa, 'wow, det här var gott!'`,
          image:
            "https://shared.cdn.smp.schibsted.com/v2/images/7db8e189-2052-4470-94db-5a4ebc7008b8?fit=crop&h=591&w=1000&s=d64df287e22d9b54ef073c3cbeba0cff290ab1cd",
        },
      ],
    },
  ],
};
