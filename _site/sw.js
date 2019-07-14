/*
self.addEventListener('fetch', function(event) {
});
*/

// Aqui eu que fiz
var CACHE_NAME = 'static-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/css/styles.css',
        '/manifest.json',
        '/assets/logo-canal-ionico.png',
      
        '/404.html',
      
        '/ginecologia.html',
      
        '/',
      
        '/infectologia.html',
      
        '/mastologia.html',
      
        '/nefrologia.html',
      
        '/neonatologia.html',
      
        '/obstetricia.html',
      
        '/assets/css/styles.css',
      
        '/sw.js',
      
        '/urologia.html',
      
        '/assets/main.css',
      
        '/feed.xml',
      
        '/sitemap.xml',
      
      
        '/trauma/atendimento-inicial',
      
        '/mastologia/tumores-especiais',
      
        '/obstetricia/diabetes-na-gestacao',
      
        '/nefrologia/nefrotoxicidade',
      
        '/ginecologia/sangramento-uterino-anormal',
      
        '/ginecologia/infertilidade',
      
        '/urologia/dinfuncao-sexual-masculina',
      
        '/pediatria/has-na-crianca',
      
        '/ginecologia/climaterio',
      
        '/obstetricia/infeccao-puerperal',
      
        '/ginecologia/tumores-de-ovario',
      
        '/mastologia/oncomastologia',
      
        '/nefrologia/doenca-renal-policistica',
      
        '/neonatologia/obstrucao-intestinal',
      
        '/tocoliticos',
      
        '/neonatologia/infeccoes-congenitas',
      
        '/refs-rapidas/hemograma',
      
        '/obstetricia/parto-prematuro',
      
        '/neonatologia/vitalidade-fetal',
      
        '/urologia/tumores-de-testiculo',
      
        '/urologia/alteracoes-escrotais',
      
        '/infectologia/exame-lcr',
      
        '/infectologia/neurotoxoplasmose',
      
        '/infectologia/dengue',
      
        '/neonatologia/vomitos-no-rn',
      
        '/ginecologia/sindrome-dos-ovarios-policisticos',
      
        '/obstetricia/rpmo',
      
        '/obstetricia/guia-do-plantonista',
      
        '/obstetricia/vias-arereas-e-iot',
      
        '/neonatologia/dispneia-de-causa-cirurgica',
      
        '/nefrologia/nefropatia-diabetica',
      
        '/obstetricia/pp',
      
        '/obstetricia/dpp',
      
        '/obstetricia/sangramento-segundo-trimestre',
      
        '/neonatologia/disturbios-repiratorios',
      
        '/ginecologia/amenorreia',
      
        '/urologia/tumores-de-bexiga',
      
        '/obstetricia/hipertensao-na-gravidez',
      
        '/ginecologia/planejamento-familiar',
      
        '/ginecologia/planejamento-familiar-2',
      
        '/mastologia/tumores-malignos-da-mama',
      
        '/neonatologia/disturbios-hidroeletroliticos',
      
        '/neonatologia/disturbios-metabolicos',
      
        '/nefrologia/ira',
      
        '/ginecologia/leiomioma-uterino',
      
        '/ginecologia/endometriose',
      
        '/urologia/massas-renais',
      
        '/obstetricia/hemorragia-pos-parto',
      
        '/ginecologia/cancer-de-endometrio',
      
        '/obstetricia/puerperio',
      
        '/pediatriạ',
      
        '/nefrologia/doenca-renal-cronica',
      
        '/urologia/infeccoes-do-trato-urinario',
      
        '/ginecologia/cancer-de-colo-uterino',
      
        '/neonatologia/aula-disturbios-metabolicos',
      
        '/ginecologia/prolapso-genital',
      
        '/obstetricia/cesariana',
      
        '/obstetricia/gravidez-ectopica',
      
        '/ginecologia/incontinencia-urinaria',
      
        '/corrimento-vaginal',
      
        '/urologia/litiase-urinaria',
      
        '/obstetricia/abortamento',
      
        '/mastologia/derrame-papilar',
      
        '/obstetricia/pelviologia',
      
        '/obstetricia/estatica-fetal',
      
        '/mastologia/semiologia-mastologica',
      
        '/mastologia/exames-de-imagem-mastologia',
      
        '/ginecologia/ulceras-genitais',
      
        '/nefrologia/glomerulopatias',
      
        '/ginecologia/ciclo-menstrual',
      
        '/neonatologia/tocotraumatismo',
      
        '/neonatologia/recem-nascido',
      
        '/neonatologia/infeccao-congenita-hiv-sifilis',
      
        '/ginecologia/dipa',
      
        '/ginecologia/corrimento-vaginal',
      
        '/ginecologia/semiologia-ginecologica',
      
        '/urologia/hiperplasia-prostatica',
      
        '/urologia/cancer-de-prostata',
      
        '/obstetricia/mecanismo-do-parto',
      
        '/obstetricia/semiologia-obstetrica',
      
      
        '/CNAME'
      
        '/LICENSE.md'
      
        '/README.md'
      
        '/android-chrome-192x192.png'
      
        '/android-chrome-512x512.png'
      
        '/apple-touch-icon.png'
      
        '/assets/favicon.png'
      
        '/assets/ginecologia/amenorreia/img1.jpeg'
      
        '/assets/ginecologia/amenorreia/img2.jpeg'
      
        '/assets/ginecologia/amenorreia/img3.jpeg'
      
        '/assets/ginecologia/amenorreia/img4.jpeg'
      
        '/assets/ginecologia/amenorreia/sexo.jpeg'
      
        '/assets/ginecologia/amenorreia/tab.jpeg'
      
        '/assets/ginecologia/ca-colo/figo.png'
      
        '/assets/ginecologia/ca-colo/tto1.png'
      
        '/assets/ginecologia/ca-colo/tto2.png'
      
        '/assets/ginecologia/ca-endometrio/figo-novo.png'
      
        '/assets/ginecologia/ca-endometrio/figo1.png'
      
        '/assets/ginecologia/ca-endometrio/figo2.png'
      
        '/assets/ginecologia/climaterio/ci.jpeg'
      
        '/assets/ginecologia/climaterio/sm.jpeg'
      
        '/assets/ginecologia/leiomioma/mioma.png'
      
        '/assets/ginecologia/planejamento-familiar/pearl.jpeg'
      
        '/assets/ginecologia/planejamento-familiar/tab.jpeg'
      
        '/assets/ginecologia/sop/fisio.jpeg'
      
        '/assets/ginecologia/sua/img.jpeg'
      
        '/assets/ginecologia/sua/tab.jpeg'
      
        '/assets/imagens/ca-prostata/estadiamento.png'
      
        '/assets/imagens/ca-prostata/risco.png'
      
        '/assets/imagens/cesarea/tecnica.png'
      
        '/assets/imagens/ciclo-menstrual/fase-folicular.png'
      
        '/assets/imagens/ciclo-menstrual/foliculo.png'
      
        '/assets/imagens/ciclo-menstrual/horm.png'
      
        '/assets/imagens/corrimento-vaginal/flux.png'
      
        '/assets/imagens/dip/cilios-dip.png'
      
        '/assets/imagens/dip/dip-nejm.png'
      
        '/assets/imagens/dip/manejo-dip.png'
      
        '/assets/imagens/estatica-fetal/1.png'
      
        '/assets/imagens/estatica-fetal/assin.png'
      
        '/assets/imagens/estatica-fetal/cranio-feto.jpg'
      
        '/assets/imagens/estatica-fetal/delee.png'
      
        '/assets/imagens/estatica-fetal/diam.png'
      
        '/assets/imagens/estatica-fetal/ovoide-fetal.png'
      
        '/assets/imagens/estatica-fetal/ref.png'
      
        '/assets/imagens/estatica-fetal/tab.png'
      
        '/assets/imagens/glomerulopatias/art.jpg'
      
        '/assets/imagens/glomerulopatias/p.png'
      
        '/assets/imagens/gravidez-ectopica/acidentes.png'
      
        '/assets/imagens/gravidez-ectopica/diag.png'
      
        '/assets/imagens/gravidez-ectopica/probs.png'
      
        '/assets/imagens/gravidez-ectopica/tto-cerv.png'
      
        '/assets/imagens/gravidez-ectopica/tub.png'
      
        '/assets/imagens/gravidez-ectopica/tup.png'
      
        '/assets/imagens/hiperplasia-prostata/Urologia_Geral.bibtex'
      
        '/assets/imagens/hiperplasia-prostata/resseccao.png'
      
        '/assets/imagens/hiperplasia-prostata/tto.png'
      
        '/assets/imagens/infeccao-congenita/acomp.png'
      
        '/assets/imagens/infeccao-congenita/cong.jpg'
      
        '/assets/imagens/infeccao-congenita/diag-cong.png'
      
        '/assets/imagens/infeccao-congenita/flux-sif.jpg'
      
        '/assets/imagens/infeccao-congenita/flux-tto.png'
      
        '/assets/imagens/infeccao-congenita/flux1.jpg'
      
        '/assets/imagens/infeccao-congenita/imuno.jpg'
      
        '/assets/imagens/infeccao-congenita/neurosif.png'
      
        '/assets/imagens/infeccao-congenita/parto.jpg'
      
        '/assets/imagens/infeccao-congenita/profilaxia.png'
      
        '/assets/imagens/infeccao-congenita/profilaxia2.png'
      
        '/assets/imagens/infeccao-congenita/sif-diag1.jpg'
      
        '/assets/imagens/infeccao-congenita/sifilis.jpg'
      
        '/assets/imagens/infeccao-congenita/tto-cong1.png'
      
        '/assets/imagens/infeccao-congenita/tto-cong2.png'
      
        '/assets/imagens/infeccao-congenita/tto-sif.jpg'
      
        '/assets/imagens/mecanismo-parto/Captura de tela de 2019-03-26 11-53-32.png'
      
        '/assets/imagens/mecanismo-parto/diametros.jpg'
      
        '/assets/imagens/mecanismo-parto/eixos-cabeca.png'
      
        '/assets/imagens/mecanismo-parto/estreitos.png'
      
        '/assets/imagens/mecanismo-parto/insinuacao.png'
      
        '/assets/imagens/mecanismo-parto/ovoide.png'
      
        '/assets/imagens/mecanismo-parto/restituicao.png'
      
        '/assets/imagens/mecanismo-parto/rotacao.png'
      
        '/assets/imagens/pelviologia/e.png'
      
        '/assets/imagens/pelviologia/estreitos.jpg'
      
        '/assets/imagens/pelviologia/h.png'
      
        '/assets/imagens/semiologia-ginecologica/litotomia.jpg'
      
        '/assets/imagens/tocotraumatismo/caput.jpeg'
      
        '/assets/imagens/ulceras-genitais/flux.png'
      
        '/assets/imagens/ulceras-genitais/tto-sif.png'
      
        '/assets/imagens/ulceras-genitais/ulcera-tto1.png'
      
        '/assets/imagens/ulceras-genitais/ulcera-tto2.png'
      
        '/assets/infectologia/dengue/dd.jpeg'
      
        '/assets/infectologia/dengue/ref1.jpeg'
      
        '/assets/infectologia/dengue/ref2.jpeg'
      
        '/assets/infectologia/lcr/ag.jpeg'
      
        '/assets/infectologia/lcr/ag2.jpeg'
      
        '/assets/infectologia/lcr/tab1.jpeg'
      
        '/assets/infectologia/lcr/tab2.jpeg'
      
        '/assets/infectologia/ntx/tc.jpeg'
      
        '/assets/logo-canal-ionico.png'
      
        '/assets/logo-resumos.png'
      
        '/assets/mastologia/derrame-papilar/tab1.png'
      
        '/assets/mastologia/derrame-papilar/tab2.jpeg'
      
        '/assets/nefrologia/drc/relogio.jpeg'
      
        '/assets/nefrologia/drpad/diag1.jpeg'
      
        '/assets/nefrologia/drpad/diag2.jpeg'
      
        '/assets/nefrologia/drpad/gra.jpeg'
      
        '/assets/nefrologia/drpad/gra2.jpeg'
      
        '/assets/nefrologia/drpad/pet.jpeg'
      
        '/assets/nefrologia/drpad/tc.jpeg'
      
        '/assets/nefrologia/nd/diag.jpeg'
      
        '/assets/nefrologia/nd/tto.jpeg'
      
        '/assets/neonatologia/disp-cir/eso.jpeg'
      
        '/assets/neonatologia/disp-cir/img.jpg'
      
        '/assets/neonatologia/disp-cir/img2.jpg'
      
        '/assets/neonatologia/disp-cir/img3.jpg'
      
        '/assets/neonatologia/disp-cir/tipos.jpeg'
      
        '/assets/neonatologia/disturbios-metabolicos/flux1.jpeg'
      
        '/assets/neonatologia/disturbios-metabolicos/tab.png'
      
        '/assets/neonatologia/dr/bol.jpeg'
      
        '/assets/neonatologia/dr/fat.jpeg'
      
        '/assets/neonatologia/dr/fisio.jpeg'
      
        '/assets/neonatologia/dr/sam.jpeg'
      
        '/assets/neonatologia/infeccoes-cong/img.jpeg'
      
        '/assets/neonatologia/infeccoes-cong/img2.jpeg'
      
        '/assets/neonatologia/infeccoes-cong/tab1.jpeg'
      
        '/assets/neonatologia/infeccoes-cong/tab2.jpeg'
      
        '/assets/neonatologia/infeccoes-cong/tab3.jpeg'
      
        '/assets/neonatologia/infeccoes-cong/tto.jpeg'
      
        '/assets/neonatologia/obst-intest/img.jpeg'
      
        '/assets/neonatologia/vitalidade-fetal/img.jpeg'
      
        '/assets/obstetricia/dm/img.jpeg'
      
        '/assets/obstetricia/dm/img2.jpeg'
      
        '/assets/obstetricia/dm/white.jpeg'
      
        '/assets/obstetricia/hasg/esquemas.jpeg'
      
        '/assets/obstetricia/hasg/mg.jpeg'
      
        '/assets/obstetricia/hasg/quadro.jpeg'
      
        '/assets/obstetricia/hasg/quadro2.jpeg'
      
        '/assets/obstetricia/hasg/quadro3.jpeg'
      
        '/assets/obstetricia/hasg/tabela.jpeg'
      
        '/assets/obstetricia/hpp/tab.png'
      
        '/assets/obstetricia/infeccao-puerperal/colpo.jpeg'
      
        '/assets/obstetricia/infeccao-puerperal/img.jpeg'
      
        '/assets/obstetricia/infeccao-puerperal/sepse-tto.jpeg'
      
        '/assets/obstetricia/infeccao-puerperal/sepse.jpeg'
      
        '/assets/obstetricia/pp/dd.jpeg'
      
        '/assets/obstetricia/pp/dpp.jpeg'
      
        '/assets/obstetricia/pp/pp.jpeg'
      
        '/assets/obstetricia/pp/pp2.jpeg'
      
        '/assets/obstetricia/pp/pp3.jpeg'
      
        '/assets/obstetricia/pp/pp4.jpeg'
      
        '/assets/obstetricia/pp/tto.jpeg'
      
        '/assets/obstetricia/rpmo/img.jpeg'
      
        '/assets/obstetricia/rpmo/img2.jpeg'
      
        '/assets/obstetricia/rpmo/img3.jpeg'
      
        '/assets/obstetricia/rpmo/img4.jpeg'
      
        '/assets/obstetricia/rpmo/img5.jpeg'
      
        '/assets/obstetricia/rpmo/img6.jpeg'
      
        '/assets/obstetricia/rpmo/img7.jpeg'
      
        '/assets/obstetricia/rpmo/img8.jpeg'
      
        '/assets/obstetricia/rpmo/img9.jpeg'
      
        '/assets/obstetricia/tpp/cisam.jpeg'
      
        '/assets/obstetricia/tpp/img.jpeg'
      
        '/assets/obstetricia/tpp/img10.jpeg'
      
        '/assets/obstetricia/tpp/img2.jpeg'
      
        '/assets/obstetricia/tpp/img3.jpeg'
      
        '/assets/obstetricia/tpp/img4.jpeg'
      
        '/assets/obstetricia/tpp/img5.jpeg'
      
        '/assets/obstetricia/tpp/img6.jpeg'
      
        '/assets/obstetricia/tpp/img7.jpeg'
      
        '/assets/obstetricia/tpp/img8.jpeg'
      
        '/assets/obstetricia/tpp/img9.jpeg'
      
        '/assets/urologia/tu-testiculos/estadio.jpeg'
      
        '/assets/urologia/tu-testiculos/img.jpeg'
      
        '/assets/urologia/tu-testiculos/lab.jpeg'
      
        '/browserconfig.xml'
      
        '/favicon-16x16.png'
      
        '/favicon-32x32.png'
      
        '/favicon-otimizado.svg'
      
        '/favicon.ico'
      
        '/favicon.png'
      
        '/gpl-3.0.md'
      
        '/manifest.json'
      
        '/mstile-144x144.png'
      
        '/mstile-150x150.png'
      
        '/mstile-310x150.png'
      
        '/mstile-310x310.png'
      
        '/mstile-70x70.png'
      
        '/nak-2.svg'
      
        '/robots.txt'
      
        '/safari-pinned-tab.svg'
      
        '/site.webmanifest'
      
        '/assets/minima-social-icons.svg'
      

      ]);
    })
  )
});

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys
        .filter(function (key) {
          return key.indexOf(CACHE_NAME) !== 0;
        })
        .map(function (key) {
          return caches.delete(key);
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request);
    })
  );
});


// Segunda tentativa com integração ao jekyll
/*
const staticCacheName = 'willian-justen-2019-03-11-14-09';

const filesToCache = [
  { % for page in site.pages_to_cache % }
    '{ { page } }',
  { % endfor % }
  { % for post in site.posts limit: 6 % }
    '{ { post.url } }',
  { % endfor % }
  { % for asset in site.files_to_cache % }
    '{ { asset } }',
  { % endfor % }
];

// Cache on install
this.addEventListener("install", event => {
  this.skipWaiting();

  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
    })
  )
});
*/
