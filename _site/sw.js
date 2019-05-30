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
      
        '/',
      
        '/assets/css/styles.css',
      
        '/sw.js',
      
        '/assets/main.css',
      
        '/feed.xml',
      
      
        '/urologia/2019/05/30/alteracoes-escrotais.html',
      
        '/infectologia/2019/05/30/exame-lcr.html',
      
        '/infectologia/2019/05/29/neurotoxoplasmose.html',
      
        '/infectologia/2019/05/29/dengue.html',
      
        '/ginecologia/2019/05/27/anovulacao-cronica.html',
      
        '/obstetricia/2019/05/25/rpmo.html',
      
        '/obstetricia/2019/05/25/guia-do-plantonista.html',
      
        '/obstetricia/2019/05/23/vias-arereas-e-iot.html',
      
        '/2019/05/22/dispneia-de-causa-cirurgica.html',
      
        '/nefrologia/2019/05/22/nefropatia-diabetica.html',
      
        '/obstetricia/2019/05/21/pp.html',
      
        '/obstetricia/2019/05/21/dpp.html',
      
        '/obstetricia/2019/05/20/sangramento-segundo-trimestre.html',
      
        '/2019/05/20/disturbios-repiratorios.html',
      
        '/ginecologia/2019/05/18/amenorreia.html',
      
        '/urologia/2019/05/16/tumores-de-bexiga.html',
      
        '/obstetricia/hipertensao-na-gravidez.html',
      
        '/ginecologia/planejamento-familiar.html',
      
        '/mastologia/tumores-malignos-da-mama',
      
        '/neonatologia/disturbios-hidroeletroliticos.html',
      
        '/neonatologia/disturbios-metabolicos.html',
      
        '/nefrologia/insuficiencia-renal-aguda.html',
      
        '/ginecologia/leiomioma-uterino.html',
      
        '/ginecologia/endometriose.html',
      
        '/urologia/massas-renais.html',
      
        '/obstetricia/hemorragia-pos-parto.html',
      
        '/ginecologia/cancer-de-endometrio.html',
      
        '/obstetricia/puerperio.html',
      
        '/pediatriạ',
      
        '/nefrologia/doenca-renal-cronica.html',
      
        '/urologia/infeccoes-do-trato-urinario.html',
      
        '/ginecologia/cancer-de-colo-uterino.html',
      
        '/disturbios-metabolicos.html',
      
        '/ginecologia/prolapso-genital.html',
      
        '/obstetricia/cesariana.html',
      
        '/obstetricia/gravidez-ectopica.html',
      
        '/ginecologia/incontinencia-urinaria.html',
      
        '/2019/04/16/corrimento-vaginal.html',
      
        '/urologia/litiase-urinaria.html',
      
        '/obstetricia/abortamento.html',
      
        '/mastologia/derrame-papilar',
      
        '/obstetricia/pelviologia.html',
      
        '/obstetricia/estatica-fetal.html',
      
        '/mastologia/semiologia-mastologica.html',
      
        '/mastologia/exames-imagem-mastologia.html',
      
        '/ginecologia/ulceras-genitais.html',
      
        '/nefrologia/glomerulopatias.html',
      
        '/ginecologia/ciclo-menstrual.html',
      
        '/neonatologia/tocotraumatismo.html',
      
        '/neonatologia/recem-nascido.html',
      
        '/neonatologia/infeccao-congenita-hiv-sifilis.html',
      
        '/ginecologia/dip.html',
      
        '/ginecologia/corrimento-vaginal.html',
      
        '/ginecologia/semiologia-ginecologica.html',
      
        '/urologia/hiperplasia-prostatica.html',
      
        '/urologia/cancer-de-prostata.html',
      
        '/obstetricia/mecanismo-do-parto.html',
      
        '/obstetricia/semiologia-obstetrica.html',
      
      
        '/CNAME'
      
        '/README.md'
      
        '/android-chrome-192x192.png'
      
        '/android-chrome-512x512.png'
      
        '/apple-touch-icon.png'
      
        '/assets/favicon.png'
      
        '/assets/ginecologia/ca-colo/figo.png'
      
        '/assets/ginecologia/ca-colo/tto1.png'
      
        '/assets/ginecologia/ca-colo/tto2.png'
      
        '/assets/ginecologia/ca-endometrio/figo-novo.png'
      
        '/assets/ginecologia/ca-endometrio/figo1.png'
      
        '/assets/ginecologia/ca-endometrio/figo2.png'
      
        '/assets/ginecologia/leiomioma/mioma.png'
      
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
      
        '/assets/mastologia/derrame-papilar/tab1.png'
      
        '/assets/mastologia/derrame-papilar/tab2.jpeg'
      
        '/assets/nefrologia/drc/relogio.jpeg'
      
        '/assets/nefrologia/nd/diag.jpeg'
      
        '/assets/nefrologia/nd/tto.jpeg'
      
        '/assets/neonatologia/disturbios-metabolicos/flux1.jpeg'
      
        '/assets/neonatologia/disturbios-metabolicos/tab.png'
      
        '/assets/obstetricia/hasg/esquemas.jpeg'
      
        '/assets/obstetricia/hasg/mg.jpeg'
      
        '/assets/obstetricia/hasg/quadro.jpeg'
      
        '/assets/obstetricia/hasg/quadro2.jpeg'
      
        '/assets/obstetricia/hasg/quadro3.jpeg'
      
        '/assets/obstetricia/hasg/tabela.jpeg'
      
        '/assets/obstetricia/hpp/tab.png'
      
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
      
        '/browserconfig.xml'
      
        '/favicon-16x16.png'
      
        '/favicon-32x32.png'
      
        '/favicon-otimizado.svg'
      
        '/favicon.ico'
      
        '/manifest.json'
      
        '/mstile-144x144.png'
      
        '/mstile-150x150.png'
      
        '/mstile-310x150.png'
      
        '/mstile-310x310.png'
      
        '/mstile-70x70.png'
      
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
