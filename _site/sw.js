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
