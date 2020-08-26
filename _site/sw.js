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
      
        '/sumario/cardiologia.html',
      
        '/sumario/cirurgia.html',
      
        '/sumario/gastroenterologia.html',
      
        '/sumario/ginecologia.html',
      
        '/sumario/hematologia.html',
      
        '/',
      
        '/sumario/infectologia.html',
      
        '/sumario/mastologia.html',
      
        '/sumario/nefrologia.html',
      
        '/sumario/neonatologia.html',
      
        '/sumario/obstetricia.html',
      
        '/sumario/pediatria.html',
      
        '/sumario/pneumologia.html',
      
        '/assets/css/styles.css',
      
        '/sw.js',
      
        '/sumario/traumatologia.html',
      
        '/sumario/urologia.html',
      
        '/assets/css/styles.css.map',
      
      
        '/esclerite-e-episclerite.html',
      
        '/infectologia/cefalosporinas.html',
      
        '/infectologia/penicilinas.html',
      
        '/gram.html',
      
        '/infectologia/neutropenia-febril.html',
      
        '/infectologia/sars.html',
      
        '/infectologia/resfriado-comum.html',
      
        '/infectologia/infeccoes-virais.html',
      
        '/hematologia/leucemia-linfoide-aguda-crianca.html',
      
        '/hematologia/hematopoiese.html',
      
        '/neonatologia/rubeola-congenita.html',
      
        '/neonatologia/disturbios-do-metabolismo.html',
      
        '/neonatologia/citomegalovirose-congenita.html',
      
        '/neonatologia/toxoplasmose-congenita.html',
      
        '/neonatologia/sifilis-congenita.html',
      
        '/neonatologia/sepse-neonatal-hm.html',
      
        '/neonatologia/aspectos-gerais.html',
      
        '/neonatologia/asfixia-perinatal.html',
      
        '/neonatologia/reanima%C3%A7%C3%A3o-neonatal.html',
      
        '/neonatologia/aleitamento-materno.html',
      
        '/infectologia/meningite.html',
      
        '/infectologia/coronavirus.html',
      
        '/hematologia/anemia-ferropriva.html',
      
        '/hematologia/hemograma.html',
      
        '/hematologia/introducao.html',
      
        '/pediatria/ivas.html',
      
        '/pediatria/rinite.html',
      
        '/pediatria/pac.html',
      
        '/cardiologia/estenose-aortica.html',
      
        '/cardiologia/angina-estavel.html',
      
        '/pneumologia/hap.html',
      
        '/pneumologia/apneia-sono.html',
      
        '/pediatria/tuberculose-infancia.html',
      
        '/pneumologia/infectologia/tuberculose.html',
      
        '/cardiologia/embriologia.html',
      
        '/cardiologia/cardiopatias-congenitas.html',
      
        '/vascular/tvp.html',
      
        '/pneumologia/tep.html',
      
        '/pneumologia/ca-pulmao.html',
      
        '/pediatria/doencas-resp.html',
      
        '/cirurgia/remit.html',
      
        '/pediatria/lactente-sibilante.html',
      
        '/cardiologia/insuficiencia-mitral.html',
      
        '/cardiologia/cardiopatia-reumatica.html',
      
        '/cardiologia/valvopatia-mitral.html',
      
        '/cardiologia/estenose-mitral.html',
      
        '/pneumologia/asma.html',
      
        '/cardiologia/crm.html',
      
        '/cardiologia/varizes-de-mmii.html',
      
        '/cardiologia/tvp.html',
      
        '/cardiologia/ic-aguda.html',
      
        '/infectologia/leptospirose.html',
      
        '/cardiologia/taqui.html',
      
        '/infectologia/endocardite-infecciosa.html',
      
        '/pneumologia/tuberculose.html',
      
        '/cardiologia/anti-hipertensivos.html',
      
        '/cirurgia/tumores-de-mediastino.html',
      
        '/cardiologia/doencas-da-aorta.html',
      
        '/cia.html',
      
        '/cardiologia/ecg3.html',
      
        '/pneumologia/ira.html',
      
        '/itrs.html',
      
        '/cardiologia/ic.html',
      
        '/cardiologia/ecg2.html',
      
        '/pneumologia/pneumonia.html',
      
        '/cardiologia/scassst.html',
      
        '/pneumologia/dpoc.html',
      
        '/pneumologia/derrame-pleural.html',
      
        '/cardiologia/arteriosclerose.html',
      
        '/cardiologia/ecg.html',
      
        '/pneumologia/radiografia-de-torax.html',
      
        '/cardiologia/semiologia-cardiovascular.html',
      
        '/cardiologia/insuficiencia-aortica.html',
      
        '/cardiologia/principios-basicos-de-hemodinamica.html',
      
        '/cardiologia/hipertensao-arterial.html',
      
        '/obstetricia/guia-do-plantonista-na-sala-de-parto.html',
      
        '/cardiologia/scacsst.html',
      
        '/cardiologia/fisiologia-cardiovascular.html',
      
        '/cardiologia/emergencia-hipertensiva.html',
      
        '/cardiologia/cardiomiopatia-dilatada.html',
      
        '/cardiologia/arritmias.html',
      
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
      
        '/traumatologia/atendimento-inicial.html',
      
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
      
        '/mastologia/semiologia-mastologica.html',
      
        '/mastologia/exames-de-imagem-mastologia.html',
      
        '/ginecologia/ulceras-genitais.html',
      
        '/nefrologia/glomerulopatias.html',
      
        '/ginecologia/ciclo-menstrua2l.html',
      
        '/neonatologia/tocotraumatismo.html',
      
        '/neonatologia/recem-nascido.html',
      
        '/neonatologia/infeccao-congenita-hiv.html',
      
        '/ginecologia/dipa.html',
      
        '/ginecologia/corrimento-vaginal.html',
      
        '/obstetricia/mecanismo-do-parto.html',
      
        '/neonatologia/infeccoes-congenitas.html',
      
        '/ginecologia/semiologia-ginecologica.html',
      
        '/urologia/hiperplasia-prostatica.html',
      
        '/urologia/cancer-de-prostata.html',
      
        '/obstetricia/pelviologia.html',
      
        '/neonatologia/sepse-neonatal.html',
      
        '/obstetricia/estatica-fetal.html',
      
        '/neonatologia/ictericia-neonatal-precoce.html',
      
        '/obstetricia/pre-natal-de-baixo-risco.html',
      
        '/obstetricia/idade-da-gestacao-e-dpp.html',
      
        '/neonatologia/ictericia-neonata-tardia.html',
      
        '/obstetricia/diagn%C3%B3stico-da-gravidez.html',
      
        '/neonatologia/disturbios-respiratorios.html',
      
        '/neonatologia/reanimacao-neonatal-34s.html',
      
        '/obstetricia/modifica%C3%A7%C3%B5es-do-organismo-materno.html',
      
        '/neonatologia/reanimacao-nenonatal.html',
      
        '/obstetricia/endocrinologia-obstetrica.html',
      
        '/neonatologia/triagem-neonatal.html',
      
        '/obstetricia/semiologia-obstetrica.html',
      
        '/neonatologia/semiologia-rn.html',
      
        '/neonatologia/introducao-neonato.html',
      
        '/ginecologia/pf3.html',
      
        '/ginecologia/pf2.html',
      
        '/ginecologia/pf1.html',
      
        '/ginecologia/ciclo-menstrual.html',
      
      
        '/CNAME'
      
        '/LICENSE.md'
      
        '/README.md'
      
        '/android-chrome-192x192.png'
      
        '/android-chrome-512x512.png'
      
        '/apple-touch-icon.png'
      
        '/assets/Abdome-agudo.jpeg'
      
        '/assets/arrow.svg'
      
        '/assets/cardiologia/2101_Blood_Flow_Through_the_Heart.jpg'
      
        '/assets/cardiologia/CG_Heart.gif'
      
        '/assets/cardiologia/CVS_heart_failure_pt.gif'
      
        '/assets/cardiologia/Coronary_arteries_pt.svg'
      
        '/assets/cardiologia/Diagram_of_the_human_heart.svg'
      
        '/assets/cardiologia/NYHA-Classification.jpg'
      
        '/assets/cardiologia/New-York-Heart-Association-NYHA-Heart-Failure-Symptom-Classification-System.png'
      
        '/assets/cardiologia/Wiggers.svg.png'
      
        '/assets/cardiologia/alca-de-reentrada.jpeg'
      
        '/assets/cardiologia/aorta.jpeg'
      
        '/assets/cardiologia/arritmia-sinusal.jpeg'
      
        '/assets/cardiologia/arritmias-sinusais.jpeg'
      
        '/assets/cardiologia/aterosclerotica.jpeg'
      
        '/assets/cardiologia/aumento-ae.jpeg'
      
        '/assets/cardiologia/aumento-atrial.jpeg'
      
        '/assets/cardiologia/aumento-atrial2.jpeg'
      
        '/assets/cardiologia/batimento-de-escape.jpeg'
      
        '/assets/cardiologia/ciclo-cardiaco.png'
      
        '/assets/cardiologia/ciclo-wiggers.jpg'
      
        '/assets/cardiologia/ciclo.jpeg'
      
        '/assets/cardiologia/circulo-ecg.jpeg'
      
        '/assets/cardiologia/circulo-ecg2.jpeg'
      
        '/assets/cardiologia/circunferencia-manguito.jpeg'
      
        '/assets/cardiologia/classif-icc.jpeg'
      
        '/assets/cardiologia/classific-eh.jpeg'
      
        '/assets/cardiologia/congenitas/800px-Heart_tetralogy_fallot.svg.png'
      
        '/assets/cardiologia/coronarias.gif'
      
        '/assets/cardiologia/coronarias2.jpg'
      
        '/assets/cardiologia/coronarias3.png'
      
        '/assets/cardiologia/correcao-pa.jpeg'
      
        '/assets/cardiologia/descompensacao-ic.jpeg'
      
        '/assets/cardiologia/diag-flux-has.jpeg'
      
        '/assets/cardiologia/diag-has.jpeg'
      
        '/assets/cardiologia/dilat-hipert.jpeg'
      
        '/assets/cardiologia/drc.jpeg'
      
        '/assets/cardiologia/eap.jpeg'
      
        '/assets/cardiologia/ecg-d.png'
      
        '/assets/cardiologia/ecg1.jpeg'
      
        '/assets/cardiologia/ecg2.jpeg'
      
        '/assets/cardiologia/ecg3.jpeg'
      
        '/assets/cardiologia/ecg4.jpeg'
      
        '/assets/cardiologia/ecg5.jpeg'
      
        '/assets/cardiologia/eh.jpeg'
      
        '/assets/cardiologia/ei/duke.jpg'
      
        '/assets/cardiologia/eixo.jpeg'
      
        '/assets/cardiologia/eixo10.jpeg'
      
        '/assets/cardiologia/eixo2.jpeg'
      
        '/assets/cardiologia/eixo3.jpeg'
      
        '/assets/cardiologia/eixo4.jpeg'
      
        '/assets/cardiologia/eixo5.jpeg'
      
        '/assets/cardiologia/eixo6.jpeg'
      
        '/assets/cardiologia/eixo7.jpeg'
      
        '/assets/cardiologia/eixo8.jpeg'
      
        '/assets/cardiologia/eixo9.jpeg'
      
        '/assets/cardiologia/ergh.jpeg'
      
        '/assets/cardiologia/ergm.jpeg'
      
        '/assets/cardiologia/escape-juncional.jpeg'
      
        '/assets/cardiologia/estratificacao-has.jpeg'
      
        '/assets/cardiologia/etiologia-ic.jpeg'
      
        '/assets/cardiologia/flutter.webp'
      
        '/assets/cardiologia/flux-erg.jpeg'
      
        '/assets/cardiologia/framingam.jpeg'
      
        '/assets/cardiologia/has-drogas.jpeg'
      
        '/assets/cardiologia/heart.png'
      
        '/assets/cardiologia/hipertrofia-v.jpeg'
      
        '/assets/cardiologia/hipertrofia-vd.jpeg'
      
        '/assets/cardiologia/hipertrofia-vd2.jpeg'
      
        '/assets/cardiologia/hipertrofia-vd3.jpeg'
      
        '/assets/cardiologia/hipertrofia-ve.jpeg'
      
        '/assets/cardiologia/hipertrofia-ve2.jpeg'
      
        '/assets/cardiologia/hipertrofia.jpeg'
      
        '/assets/cardiologia/ic-hemod.png'
      
        '/assets/cardiologia/ic-perfil.gif'
      
        '/assets/cardiologia/ic.png'
      
        '/assets/cardiologia/indicacoes-mapa.jpeg'
      
        '/assets/cardiologia/indicacoes-tto-has.jpeg'
      
        '/assets/cardiologia/inervação.jpeg'
      
        '/assets/cardiologia/insp.jpeg'
      
        '/assets/cardiologia/intervalos.jpeg'
      
        '/assets/cardiologia/marca-passos-não-sinusais.jpeg'
      
        '/assets/cardiologia/meta-has.jpeg'
      
        '/assets/cardiologia/mev-has.jpeg'
      
        '/assets/cardiologia/ondap.jpeg'
      
        '/assets/cardiologia/ondap2.jpeg'
      
        '/assets/cardiologia/ondap3.jpeg'
      
        '/assets/cardiologia/ondap4.jpeg'
      
        '/assets/cardiologia/ondaq.jpeg'
      
        '/assets/cardiologia/ondat.jpeg'
      
        '/assets/cardiologia/precordiais-ecg.jpeg'
      
        '/assets/cardiologia/precordiais-ecg2.jpeg'
      
        '/assets/cardiologia/prog-ondap.png'
      
        '/assets/cardiologia/progressao-ondap.jpeg'
      
        '/assets/cardiologia/quadrados.jpeg'
      
        '/assets/cardiologia/quadrados2.jpeg'
      
        '/assets/cardiologia/resposta-ic.jpeg'
      
        '/assets/cardiologia/resposta-pa.jpeg'
      
        '/assets/cardiologia/revasc.jpeg'
      
        '/assets/cardiologia/ritmo-sinusal.jpeg'
      
        '/assets/cardiologia/rs.jpeg'
      
        '/assets/cardiologia/rxtorax.jpeg'
      
        '/assets/cardiologia/sca/algoritmo-ae.jpeg'
      
        '/assets/cardiologia/sca/braun.jpeg'
      
        '/assets/cardiologia/sca/braun2.jpeg'
      
        '/assets/cardiologia/sca/ccs.jpeg'
      
        '/assets/cardiologia/sca/ccs2.jpeg'
      
        '/assets/cardiologia/sca/dd.jpeg'
      
        '/assets/cardiologia/sca/espelho.jpeg'
      
        '/assets/cardiologia/sca/ex-fisico.jpeg'
      
        '/assets/cardiologia/sca/fr-aterosclerose.jpeg'
      
        '/assets/cardiologia/sca/killip.jpeg'
      
        '/assets/cardiologia/sca/timi-iamcsst.jpeg'
      
        '/assets/cardiologia/sca/timi-ssst.jpeg'
      
        '/assets/cardiologia/sca/tipo-dor.jpeg'
      
        '/assets/cardiologia/sm.jpeg'
      
        '/assets/cardiologia/tab8.jpeg'
      
        '/assets/cardiologia/tabela-ecg.jpeg'
      
        '/assets/cardiologia/tto-nyha.jpeg'
      
        '/assets/cardiologia/valvulas.jpeg'
      
        '/assets/cardiologia/vetores.jpg'
      
        '/assets/cardiologia/wilkins.jpeg'
      
        '/assets/emergencia/abdome-agudo.jpeg'
      
        '/assets/emergencia/abdome-agudo2.jpeg'
      
        '/assets/farmaco/acao-bb.jpeg'
      
        '/assets/farmaco/bcc.jpeg'
      
        '/assets/farmaco/ieca.jpeg'
      
        '/assets/farmaco/ieca2.jpeg'
      
        '/assets/favicon.png'
      
        '/assets/fonts/liberation_serif/AUTHORS'
      
        '/assets/fonts/liberation_serif/COPYING'
      
        '/assets/fonts/liberation_serif/ChangeLog'
      
        '/assets/fonts/liberation_serif/License.txt'
      
        '/assets/fonts/liberation_serif/README'
      
        '/assets/fonts/liberation_serif/lsbold.ttf'
      
        '/assets/fonts/liberation_serif/lsbolditalic.ttf'
      
        '/assets/fonts/liberation_serif/lsitalic.ttf'
      
        '/assets/fonts/liberation_serif/lsregular.ttf'
      
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
      
        '/assets/ginecologia/ciclo-endometrial.jpeg'
      
        '/assets/ginecologia/ciclo-ovariano.jpeg'
      
        '/assets/ginecologia/climaterio/ci.jpeg'
      
        '/assets/ginecologia/climaterio/sm.jpeg'
      
        '/assets/ginecologia/eixo.jpeg'
      
        '/assets/ginecologia/elegibilidade.png'
      
        '/assets/ginecologia/leiomioma/mioma.png'
      
        '/assets/ginecologia/planejamento-familiar/pearl.jpeg'
      
        '/assets/ginecologia/planejamento-familiar/tab.jpeg'
      
        '/assets/ginecologia/sop/fisio.jpeg'
      
        '/assets/ginecologia/sua/img.jpeg'
      
        '/assets/ginecologia/sua/tab.jpeg'
      
        '/assets/hematologia/diagrama.svg'
      
        '/assets/hematologia/fluxo.svg'
      
        '/assets/hematologia/leucograma.png'
      
        '/assets/hematologia/reticulocitos.png'
      
        '/assets/imagens/ca-prostata/estadiamento.png'
      
        '/assets/imagens/ca-prostata/risco.png'
      
        '/assets/imagens/cardiologia/congenitas/1475-925X-6-16-S1.wav'
      
        '/assets/imagens/cardiologia/congenitas/1475-925X-6-16-S6.wav'
      
        '/assets/imagens/cardiologia/congenitas/T1213MalformacionesFallot_i.gif'
      
        '/assets/imagens/cardiologia/congenitas/T1214MalformacionesConductoArterioso_i.gif'
      
        '/assets/imagens/cardiologia/congenitas/T1305_CambiosNacimiento_i_after.gif'
      
        '/assets/imagens/cardiologia/congenitas/T1305_CambiosNacimiento_i_at_birth.gif'
      
        '/assets/imagens/cardiologia/congenitas/T1305_CambiosNacimiento_i_before.gif'
      
        '/assets/imagens/cardiologia/coronarias.svg'
      
        '/assets/imagens/cardiologia/sca/ae-crm.jpeg'
      
        '/assets/imagens/cardiologia/sca/ae-crm2.jpeg'
      
        '/assets/imagens/cardiologia/sca/angiografia-dac.jpeg'
      
        '/assets/imagens/cardiologia/sca/braun.jpeg'
      
        '/assets/imagens/cardiologia/sca/braun2.jpeg'
      
        '/assets/imagens/cardiologia/sca/braun3.jpeg'
      
        '/assets/imagens/cardiologia/sca/diag-dac.jpeg'
      
        '/assets/imagens/cardiologia/sca/dor-toracica.jpeg'
      
        '/assets/imagens/cardiologia/sca/grace.jpeg'
      
        '/assets/imagens/cardiologia/sca/timi.jpeg'
      
        '/assets/imagens/cardiologia/sca/tto-ae.jpeg'
      
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
      
        '/assets/imagens/pediatria/ivas/tto-oma.jpeg'
      
        '/assets/imagens/pediatria/tb/investigacao-iltb.jpeg'
      
        '/assets/imagens/pediatria/tb/pontos.jpeg'
      
        '/assets/imagens/pediatria/tb/pontos2.jpeg'
      
        '/assets/imagens/pelviologia/e.png'
      
        '/assets/imagens/pelviologia/estreitos.jpg'
      
        '/assets/imagens/pelviologia/h.png'
      
        '/assets/imagens/pneumologia/1808-8694-bjorl-84-01-0003-gf01-pt.jpg'
      
        '/assets/imagens/semiologia-ginecologica/litotomia.jpg'
      
        '/assets/imagens/tocotraumatismo/caput.jpeg'
      
        '/assets/imagens/ulceras-genitais/flux.png'
      
        '/assets/imagens/ulceras-genitais/tto-sif.png'
      
        '/assets/imagens/ulceras-genitais/ulcera-tto1.png'
      
        '/assets/imagens/ulceras-genitais/ulcera-tto2.png'
      
        '/assets/infectologia/atb-meningite.jpeg'
      
        '/assets/infectologia/atb-meningite2.jpeg'
      
        '/assets/infectologia/atb/grams-principais.png'
      
        '/assets/infectologia/atb/parede.png'
      
        '/assets/infectologia/atb/pbp.jpeg'
      
        '/assets/infectologia/atb/penicilinase.jpeg'
      
        '/assets/infectologia/atb/tab-penicilinas.jpeg'
      
        '/assets/infectologia/atb/tab-penicilinas2.jpeg'
      
        '/assets/infectologia/dengue/dd.jpeg'
      
        '/assets/infectologia/dengue/ref1.jpeg'
      
        '/assets/infectologia/dengue/ref2.jpeg'
      
        '/assets/infectologia/ei/duke.jpg'
      
        '/assets/infectologia/lcr.jpeg'
      
        '/assets/infectologia/lcr/ag.jpeg'
      
        '/assets/infectologia/lcr/ag2.jpeg'
      
        '/assets/infectologia/lcr/tab1.jpeg'
      
        '/assets/infectologia/lcr/tab2.jpeg'
      
        '/assets/infectologia/lcr2.jpeg'
      
        '/assets/infectologia/leptospira.png'
      
        '/assets/infectologia/neutropenia-febril/atb.jpeg'
      
        '/assets/infectologia/neutropenia-febril/atbs.jpeg'
      
        '/assets/infectologia/neutropenia-febril/cisne.jpeg'
      
        '/assets/infectologia/neutropenia-febril/fluxo-usp.jpeg'
      
        '/assets/infectologia/neutropenia-febril/fluxo.jpeg'
      
        '/assets/infectologia/neutropenia-febril/mascc-score.jpeg'
      
        '/assets/infectologia/neutropenia-febril/mascc.jpeg'
      
        '/assets/infectologia/neutropenia-febril/sitios-investigacao.jpeg'
      
        '/assets/infectologia/ntx/tc.jpeg'
      
        '/assets/infectologia/virus/teste.jpeg'
      
        '/assets/infectologia/virus/virus.jpeg'
      
        '/assets/logo-canal-ionico.png'
      
        '/assets/logo-resumos.png'
      
        '/assets/mapas/Abdome-agudo.pdf'
      
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
      
        '/assets/neonatologia/apgar.jpeg'
      
        '/assets/neonatologia/ballard.jpeg'
      
        '/assets/neonatologia/ballard2.jpeg'
      
        '/assets/neonatologia/ballard3.jpeg'
      
        '/assets/neonatologia/capurro.jpeg'
      
        '/assets/neonatologia/capurro2.jpeg'
      
        '/assets/neonatologia/causas-apneia.jpeg'
      
        '/assets/neonatologia/causas-comuns-reanimacao.jpeg'
      
        '/assets/neonatologia/causas-resp.jpeg'
      
        '/assets/neonatologia/classificacao.jpeg'
      
        '/assets/neonatologia/diag-toxo-mae.jpeg'
      
        '/assets/neonatologia/disp-cir/eso.jpeg'
      
        '/assets/neonatologia/disp-cir/img.jpg'
      
        '/assets/neonatologia/disp-cir/img2.jpg'
      
        '/assets/neonatologia/disp-cir/img3.jpg'
      
        '/assets/neonatologia/disp-cir/tipos.jpeg'
      
        '/assets/neonatologia/disturbios-metabolicos/flux1.jpeg'
      
        '/assets/neonatologia/disturbios-metabolicos/tab.png'
      
        '/assets/neonatologia/dr/bol.jpeg'
      
        '/assets/neonatologia/dr/boletim.jpeg'
      
        '/assets/neonatologia/dr/cpap.jpg'
      
        '/assets/neonatologia/dr/fat.jpeg'
      
        '/assets/neonatologia/dr/fisio.jpeg'
      
        '/assets/neonatologia/dr/flux.jpg'
      
        '/assets/neonatologia/dr/flux2.jpg'
      
        '/assets/neonatologia/dr/radio-sam.jpeg'
      
        '/assets/neonatologia/dr/radio-sam.png'
      
        '/assets/neonatologia/dr/radio-sam2.png'
      
        '/assets/neonatologia/dr/radio-sam3.png'
      
        '/assets/neonatologia/dr/radio-sdr.jpeg'
      
        '/assets/neonatologia/dr/radio-sepse.jpg'
      
        '/assets/neonatologia/dr/radio-ttrn.jpeg'
      
        '/assets/neonatologia/dr/radio.png'
      
        '/assets/neonatologia/dr/resumo.jpeg'
      
        '/assets/neonatologia/dr/rodwell.jpg'
      
        '/assets/neonatologia/dr/sam.jpeg'
      
        '/assets/neonatologia/dr/ttrn.png'
      
        '/assets/neonatologia/epidemio.jpeg'
      
        '/assets/neonatologia/estagios-pulmao.jpeg'
      
        '/assets/neonatologia/flux-reanimação.jpeg'
      
        '/assets/neonatologia/ictericia/c19f001.jpg'
      
        '/assets/neonatologia/ictericia/fezes.png'
      
        '/assets/neonatologia/ictericia/ictericia.png'
      
        '/assets/neonatologia/ictericia/isomerizacao.jpg'
      
        '/assets/neonatologia/ictericia/kernicterus.jpg'
      
        '/assets/neonatologia/ictericia/marks.jpeg'
      
        '/assets/neonatologia/ictericia/normograma.jpeg'
      
        '/assets/neonatologia/ictericia/rh.jpg'
      
        '/assets/neonatologia/ictericia/rh2.jpg'
      
        '/assets/neonatologia/ictericia/tab-pre.jpeg'
      
        '/assets/neonatologia/ictericia/tabela.png'
      
        '/assets/neonatologia/ictericia/valores.jpeg'
      
        '/assets/neonatologia/infeccoes-cong/img.jpeg'
      
        '/assets/neonatologia/infeccoes-cong/img2.jpeg'
      
        '/assets/neonatologia/infeccoes-cong/tab1.jpeg'
      
        '/assets/neonatologia/infeccoes-cong/tab2.jpeg'
      
        '/assets/neonatologia/infeccoes-cong/tab3.jpeg'
      
        '/assets/neonatologia/infeccoes-cong/tto.jpeg'
      
        '/assets/neonatologia/intro/090917afbe1336d2af7ccaba1af4943f.png'
      
        '/assets/neonatologia/intro/3553b4b35f955d1b7409e36a7174fd09.png'
      
        '/assets/neonatologia/intro/apgar.png'
      
        '/assets/neonatologia/intro/bristol.jpeg'
      
        '/assets/neonatologia/intro/capurro.jpg'
      
        '/assets/neonatologia/intro/capurro2.jpg'
      
        '/assets/neonatologia/intro/cardiopatias.png'
      
        '/assets/neonatologia/intro/circ-fetal.jpg'
      
        '/assets/neonatologia/intro/circ-fetal2.jpeg'
      
        '/assets/neonatologia/intro/falciforme.png'
      
        '/assets/neonatologia/intro/gr1.jpg'
      
        '/assets/neonatologia/intro/mapa.jpeg'
      
        '/assets/neonatologia/intro/mudancas.png'
      
        '/assets/neonatologia/intro/olinho.png'
      
        '/assets/neonatologia/intro/orelha.png'
      
        '/assets/neonatologia/intro/pulm-broto.jpg'
      
        '/assets/neonatologia/intro/pulm.jpg'
      
        '/assets/neonatologia/intro/pulmao.jpeg'
      
        '/assets/neonatologia/intro/teste-do-olhinho.jpg'
      
        '/assets/neonatologia/intro/teste-pezinho.png'
      
        '/assets/neonatologia/leite1.jpeg'
      
        '/assets/neonatologia/leite2.jpeg'
      
        '/assets/neonatologia/mamas.jpeg'
      
        '/assets/neonatologia/material-parto.jpeg'
      
        '/assets/neonatologia/obst-intest/img.jpeg'
      
        '/assets/neonatologia/periodo.jpeg'
      
        '/assets/neonatologia/radio-sam.jpeg'
      
        '/assets/neonatologia/radio-ttrn.jpeg'
      
        '/assets/neonatologia/reanimacao/apgar-grande.png'
      
        '/assets/neonatologia/reanimacao/flux-34.png'
      
        '/assets/neonatologia/reanimacao/flux-geral.png'
      
        '/assets/neonatologia/reanimacao/flux-sbp.png'
      
        '/assets/neonatologia/reanimacao/flux.png'
      
        '/assets/neonatologia/reanimacao/flux2.png'
      
        '/assets/neonatologia/reanimacao/flux3.png'
      
        '/assets/neonatologia/reanimacao/medicacoes-sbp.png'
      
        '/assets/neonatologia/reanimacao/medicacoes.png'
      
        '/assets/neonatologia/reanimacao/passos-iniciais.png'
      
        '/assets/neonatologia/rx-dmh.jpeg'
      
        '/assets/neonatologia/sepse.jpeg'
      
        '/assets/neonatologia/sifilis.jpeg'
      
        '/assets/neonatologia/termos.jpeg'
      
        '/assets/neonatologia/vitalidade-fetal/img.jpeg'
      
        '/assets/obstetricia/PA.jpeg'
      
        '/assets/obstetricia/afu-linhas.jpeg'
      
        '/assets/obstetricia/afu.jpeg'
      
        '/assets/obstetricia/afu2.jpeg'
      
        '/assets/obstetricia/afu3.jpeg'
      
        '/assets/obstetricia/afu4.jpeg'
      
        '/assets/obstetricia/altura.jpeg'
      
        '/assets/obstetricia/anestesia.jpeg'
      
        '/assets/obstetricia/apgar.jpeg'
      
        '/assets/obstetricia/apresentacao-cefalica.jpeg'
      
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
      
        '/assets/obstetricia/flux-hcg.jpeg'
      
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
      
        '/assets/obstetricia/hormonios.jpeg'
      
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
      
        '/assets/obstetricia/nom.jpeg'
      
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
      
        '/assets/pediatria/tuberculose/tb-pontos.jpeg'
      
        '/assets/picol/LICENSE'
      
        '/assets/picol/README.md'
      
        '/assets/picol/bower.json'
      
        '/assets/picol/config.json'
      
        '/assets/picol/css/animation.css'
      
        '/assets/picol/css/picol-codes.css'
      
        '/assets/picol/css/picol-embedded.css'
      
        '/assets/picol/css/picol-ie7-codes.css'
      
        '/assets/picol/css/picol-ie7.css'
      
        '/assets/picol/css/picol.css'
      
        '/assets/picol/demo.html'
      
        '/assets/picol/font/picol.eot'
      
        '/assets/picol/font/picol.svg'
      
        '/assets/picol/font/picol.ttf'
      
        '/assets/picol/font/picol.woff'
      
        '/assets/pneumo/asma/640px-An_Asthma_patient_taking_medication_using_an_inhaler.png'
      
        '/assets/pneumo/asma/Asthma_attack-illustration_NIH.jpg'
      
        '/assets/pneumo/asma/asma-tto-box-6a11.jpeg'
      
        '/assets/pneumo/asma/asma-tto-box.jpeg'
      
        '/assets/pneumo/asma/criterios-diag.jpeg'
      
        '/assets/pneumo/asma/diag-chart.jpeg'
      
        '/assets/pneumo/ca-pulm/TNM-ca-pulmao.jpeg'
      
        '/assets/pneumo/derrame.jpeg'
      
        '/assets/pneumo/dpoc-risk.jpeg'
      
        '/assets/pneumo/dpp-atb.jpeg'
      
        '/assets/pneumo/etiologia-pneumonia.jpeg'
      
        '/assets/pneumo/fr-pneumonia.jpeg'
      
        '/assets/pneumo/ira-tab.jpeg'
      
        '/assets/pneumo/pneumonia.jpg'
      
        '/assets/pneumo/rx-pneumonia.jpeg'
      
        '/assets/pneumo/tb/diag-tb-vulnerabilidade.jpeg'
      
        '/assets/pneumo/tb/diag-tb.jpeg'
      
        '/assets/pneumo/tb/granuloma.jpg'
      
        '/assets/pneumo/tb/tb.jpeg'
      
        '/assets/pneumo/tb/tto-iltb.jpeg'
      
        '/assets/pneumo/tep/genebra.jpeg'
      
        '/assets/pneumo/tep/wells.jpeg'
      
        '/assets/pneumo/tto-amb.jpeg'
      
        '/assets/pneumo/tto-dpp.jpeg'
      
        '/assets/pneumo/tto-pneumonia.jpeg'
      
        '/assets/urologia/tu-testiculos/estadio.jpeg'
      
        '/assets/urologia/tu-testiculos/img.jpeg'
      
        '/assets/urologia/tu-testiculos/lab.jpeg'
      
        '/browserconfig.xml'
      
        '/favicon-16x16.png'
      
        '/favicon-32x32.png'
      
        '/favicon-otimizado.svg'
      
        '/favicon.ico'
      
        '/favicon.png'
      
        '/favicon2.png'
      
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
