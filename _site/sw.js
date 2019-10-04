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
      
      
        '/mapas/abdome-agudo.html',
      
        '/pediatria/cipe.html',
      
        '/gastroenterologia/diarreia.html',
      
        '/cirurgia/ca-esofago.html',
      
        '/linfoma.html',
      
        '/pediatria/constipacao-intestinal.html',
      
        '/gastroenterologia/constipacao-intestinal.html',
      
        '/pediatria/hidratacao-e-disturbio-acido-basico.html',
      
        '/cirurgia/sepsis-abdominal.html',
      
        '/gastroenterologia/hemorragia-digestiva.html',
      
        '/gastroenterologia/dispepsia.html',
      
        '/cirurgia/proctologia.html',
      
        '/guia-pre-internato.html',
      
        '/gastroenterologia/esquistossomose.html',
      
        '/gastroenterologia/tuberculose-intestinal.html',
      
        '/gastroenterologia/endoscopia.html',
      
        '/intensiva/choque.html',
      
        '/gastroenterologia/doencas-inflamatorias-intestinais.html',
      
        '/cirurgia/cirugia-do-colon-e-reto.html',
      
        '/gastroenterologia/megaesofago-e-megacolon.html',
      
        '/pediatria/abdome-agudo-na-crianca.html',
      
        '/gastroenterologia/nodulos-hepaticos.html',
      
        '/gastroenterologia/gastrite.html',
      
        '/cirurgia/abdomen-agudo.html',
      
        '/gastroenterologia/nodulos-hepaticos.html',
      
        '/cirurgia/megaes%C3%B4fago.html',
      
        '/gastroenterologia/hepatites.html',
      
        '/gastroenterologia/cirrose-hepatica.html',
      
        '/gastroenterologia/drge.html',
      
        '/gastroenterologia/pancreatite.html',
      
        '/cirurgia/pancreatite-cronica.html',
      
        '/pediatria/drge-na-crianca.html',
      
        '/cirurgia/ictericia-obstrutiva.html',
      
        '/obstetricia/doen%C3%A7a-trofoblastica-gestacional.html',
      
        '/obstetricia/vacuo-extrator.html',
      
        '/obstetricia/forceps.html',
      
        '/obstetricia/assistencia-pre-natal.html',
      
        '/obstetricia/assistencia-ao-parto-e-partograma.html',
      
        '/trauma/atendimento-inicial.html',
      
        '/mastologia/tumores-especiais.html',
      
        '/obstetricia/diabetes-na-gestacao.html',
      
        '/nefrologia/nefrotoxicidade.html',
      
        '/ginecologia/sangramento-uterino-anormal.html',
      
        '/ginecologia/infertilidade.html',
      
        '/urologia/dinfuncao-sexual-masculina.html',
      
        '/pediatria/has-na-crianca.html',
      
        '/ginecologia/climaterio.html',
      
        '/obstetricia/infeccao-puerperal.html',
      
        '/ginecologia/tumores-de-ovario.html',
      
        '/mastologia/oncomastologia.html',
      
        '/nefrologia/doenca-renal-policistica.html',
      
        '/neonatologia/obstrucao-intestinal.html',
      
        '/tocoliticos.html',
      
        '/neonatologia/infeccoes-congenitas.html',
      
        '/refs-rapidas/hemograma.html',
      
        '/obstetricia/parto-prematuro.html',
      
        '/neonatologia/vitalidade-fetal.html',
      
        '/urologia/tumores-de-testiculo.html',
      
        '/urologia/alteracoes-escrotais.html',
      
        '/infectologia/exame-lcr.html',
      
        '/infectologia/neurotoxoplasmose.html',
      
        '/infectologia/dengue.html',
      
        '/neonatologia/vomitos-no-rn.html',
      
        '/ginecologia/sindrome-dos-ovarios-policisticos.html',
      
        '/obstetricia/rpmo.html',
      
        '/obstetricia/guia-do-plantonista.html',
      
        '/obstetricia/vias-arereas-e-iot.html',
      
        '/neonatologia/dispneia-de-causa-cirurgica.html',
      
        '/nefrologia/nefropatia-diabetica.html',
      
        '/obstetricia/pp.html',
      
        '/obstetricia/dpp.html',
      
        '/obstetricia/sangramento-segundo-trimestre.html',
      
        '/neonatologia/disturbios-repiratorios.html',
      
        '/ginecologia/amenorreia.html',
      
        '/urologia/tumores-de-bexiga.html',
      
        '/obstetricia/hipertensao-na-gravidez.html',
      
        '/ginecologia/planejamento-familiar.html',
      
        '/ginecologia/planejamento-familiar-2.html',
      
        '/mastologia/tumores-malignos-da-mama.html',
      
        '/neonatologia/disturbios-hidroeletroliticos.html',
      
        '/neonatologia/disturbios-metabolicos.html',
      
        '/nefrologia/ira.html',
      
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
      
        '/neonatologia/aula-disturbios-metabolicos.html',
      
        '/ginecologia/prolapso-genital.html',
      
        '/obstetricia/cesariana.html',
      
        '/obstetricia/gravidez-ectopica.html',
      
        '/ginecologia/incontinencia-urinaria.html',
      
        '/corrimento-vaginal.html',
      
        '/urologia/litiase-urinaria.html',
      
        '/obstetricia/abortamento.html',
      
        '/mastologia/derrame-papilar.html',
      
        '/obstetricia/pelviologia.html',
      
        '/obstetricia/estatica-fetal.html',
      
        '/mastologia/semiologia-mastologica.html',
      
        '/mastologia/exames-de-imagem-mastologia.html',
      
        '/ginecologia/ulceras-genitais.html',
      
        '/nefrologia/glomerulopatias.html',
      
        '/ginecologia/ciclo-menstrual.html',
      
        '/neonatologia/tocotraumatismo.html',
      
        '/neonatologia/recem-nascido.html',
      
        '/neonatologia/infeccao-congenita-hiv-sifilis.html',
      
        '/ginecologia/dipa.html',
      
        '/ginecologia/corrimento-vaginal.html',
      
        '/ginecologia/semiologia-ginecologica.html',
      
        '/urologia/hiperplasia-prostatica.html',
      
        '/urologia/cancer-de-prostata.html',
      
        '/obstetricia/mecanismo-do-parto.html',
      
        '/obstetricia/pre-natal-de-baixo-risco.html',
      
        '/obstetricia/idade-da-gestacao-e-dpp.html',
      
        '/obstetricia/diagn%C3%B3stico-da-gravidez.html',
      
        '/obstetricia/semiologia-obstetrica.html',
      
        '/obstetricia/modifica%C3%A7%C3%B5es-do-organismo-materno.html',
      
        '/obstetricia/endocrinologia-obstetrica.html',
      
      
        '/CNAME'
      
        '/LICENSE.md'
      
        '/README.md'
      
        '/android-chrome-192x192.png'
      
        '/android-chrome-512x512.png'
      
        '/apple-touch-icon.png'
      
        '/assets/Abdome-agudo.jpeg'
      
        '/assets/arrow.svg'
      
        '/assets/cruz-web.svg'
      
        '/assets/cruz.svg'
      
        '/assets/favicon.png'
      
        '/assets/gastro/balthazar.jpg'
      
        '/assets/gastro/child-pugh.png'
      
        '/assets/gastro/clip.jpeg'
      
        '/assets/gastro/crohn.jpeg'
      
        '/assets/gastro/cutoff.jpeg'
      
        '/assets/gastro/esquistossomose.png'
      
        '/assets/gastro/estomago.png'
      
        '/assets/gastro/fibrose-symmers.jpg'
      
        '/assets/gastro/fibrose-symmers2.jpg'
      
        '/assets/gastro/forrester.jpeg'
      
        '/assets/gastro/hepb-aguda-grafico.jpeg'
      
        '/assets/gastro/hepb-aguda.jpeg'
      
        '/assets/gastro/hepb-cronica-grafico.jpeg'
      
        '/assets/gastro/hepb-cronica.jpeg'
      
        '/assets/gastro/hepb-sorologia.jpeg'
      
        '/assets/gastro/mapa-esquistossomose.png'
      
        '/assets/gastro/pancreas.jpg'
      
        '/assets/gastro/pat.jpeg'
      
        '/assets/gastro/patxpcr.jpeg'
      
        '/assets/gastro/pcr.jpeg'
      
        '/assets/gastro/schistosoma.jpg'
      
        '/assets/gastro/sistema-porta.jpg'
      
        '/assets/gastro/wash-out.jpeg'
      
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
      
        '/assets/left-pointing-arrow.svg'
      
        '/assets/logo-canal-ionico.png'
      
        '/assets/logo-resumos.png'
      
        '/assets/mapas/abdome-agudo.jpeg'
      
        '/assets/mapas/abdome-agudo.jpg'
      
        '/assets/mapas/abdome.jpeg'
      
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
      
        '/assets/obstetricia/PA.jpeg'
      
        '/assets/obstetricia/afu.jpeg'
      
        '/assets/obstetricia/afu2.jpeg'
      
        '/assets/obstetricia/afu3.jpeg'
      
        '/assets/obstetricia/afu4.jpeg'
      
        '/assets/obstetricia/altura.jpeg'
      
        '/assets/obstetricia/anestesia.jpeg'
      
        '/assets/obstetricia/apgar.jpeg'
      
        '/assets/obstetricia/bcf.jpeg'
      
        '/assets/obstetricia/bcf2.jpeg'
      
        '/assets/obstetricia/biparietomalomentoniana.png'
      
        '/assets/obstetricia/colo.jpeg'
      
        '/assets/obstetricia/colpotomia.jpeg'
      
        '/assets/obstetricia/derradeira.jpeg'
      
        '/assets/obstetricia/diag.png'
      
        '/assets/obstetricia/dm/img.jpeg'
      
        '/assets/obstetricia/dm/img2.jpeg'
      
        '/assets/obstetricia/dm/white.jpeg'
      
        '/assets/obstetricia/edema.jpeg'
      
        '/assets/obstetricia/edema2.jpeg'
      
        '/assets/obstetricia/edema3.jpeg'
      
        '/assets/obstetricia/edema4.jpeg'
      
        '/assets/obstetricia/endocrino/1.jpg'
      
        '/assets/obstetricia/endometrite.jpeg'
      
        '/assets/obstetricia/episio.jpeg'
      
        '/assets/obstetricia/exames.jpeg'
      
        '/assets/obstetricia/exames2.jpeg'
      
        '/assets/obstetricia/exames3.jpeg'
      
        '/assets/obstetricia/exames4.jpeg'
      
        '/assets/obstetricia/exames5.jpeg'
      
        '/assets/obstetricia/exames6.jpeg'
      
        '/assets/obstetricia/exames7.jpeg'
      
        '/assets/obstetricia/forceps2.jpeg'
      
        '/assets/obstetricia/forceps3.jpeg'
      
        '/assets/obstetricia/ganho-peso.jpeg'
      
        '/assets/obstetricia/hamilton.jpeg'
      
        '/assets/obstetricia/hasg/esquemas.jpeg'
      
        '/assets/obstetricia/hasg/mg.jpeg'
      
        '/assets/obstetricia/hasg/quadro.jpeg'
      
        '/assets/obstetricia/hasg/quadro2.jpeg'
      
        '/assets/obstetricia/hasg/quadro3.jpeg'
      
        '/assets/obstetricia/hasg/tabela.jpeg'
      
        '/assets/obstetricia/hcg.jpeg'
      
        '/assets/obstetricia/histerotomia.jpeg'
      
        '/assets/obstetricia/histerotomias.jpeg'
      
        '/assets/obstetricia/hpp/tab.png'
      
        '/assets/obstetricia/imc-graf.jpeg'
      
        '/assets/obstetricia/infeccao-puerperal/colpo.jpeg'
      
        '/assets/obstetricia/infeccao-puerperal/img.jpeg'
      
        '/assets/obstetricia/infeccao-puerperal/sepse-tto.jpeg'
      
        '/assets/obstetricia/infeccao-puerperal/sepse.jpeg'
      
        '/assets/obstetricia/jacob-dubin.jpeg'
      
        '/assets/obstetricia/kielland.jpeg'
      
        '/assets/obstetricia/leopold.jpeg'
      
        '/assets/obstetricia/leopold2.jpeg'
      
        '/assets/obstetricia/leopold3.jpeg'
      
        '/assets/obstetricia/ligadura.jpeg'
      
        '/assets/obstetricia/ombro.jpeg'
      
        '/assets/obstetricia/pajot.jpeg'
      
        '/assets/obstetricia/partograma.jpeg'
      
        '/assets/obstetricia/pfannenstiel.jpeg'
      
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
      
        '/assets/obstetricia/semio/cloasma.jpg'
      
        '/assets/obstetricia/semio/hunter.jpg'
      
        '/assets/obstetricia/semio/linea-nigra.jpg'
      
        '/assets/obstetricia/semio/tuberculos.jpg'
      
        '/assets/obstetricia/simpson.jpeg'
      
        '/assets/obstetricia/tp/dilatacao.jpeg'
      
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
      
        '/assets/obstetricia/vacina.jpeg'
      
        '/assets/obstetricia/vacina2.jpeg'
      
        '/assets/pediatria/diarreia1.jpeg'
      
        '/assets/pediatria/diarreia2.jpeg'
      
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
